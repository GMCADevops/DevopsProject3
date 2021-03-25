provider "aws" {
  region = "eu-west-2"
}
data "aws_eks_cluster" "cluster" {
  name = module.eks.cluster_id
}

data "aws_eks_cluster_auth" "cluster" {
  name = module.eks.cluster_id
}

provider "kubernetes" {
  host                   = data.aws_eks_cluster.cluster.endpoint
  cluster_ca_certificate = base64decode(data.aws_eks_cluster.cluster.certificate_authority.0.data)
  token                  = data.aws_eks_cluster_auth.cluster.token
  load_config_file       = false
  version                = "~> 1.11"
}

data "aws_availability_zones" "available" {
  
}

locals {
  cluster_name = "my-cluster"
}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "2.77.0"

  name                 = "k8s-vpc"
  cidr                 = "172.16.0.0/16"
  azs                  = data.aws_availability_zones.available.names
  private_subnets      = ["172.16.1.0/24", "172.16.2.0/24", "172.16.3.0/24"]
  public_subnets       = ["172.16.4.0/24", "172.16.5.0/24", "172.16.6.0/24"]
  enable_nat_gateway   = true
  single_nat_gateway   = true
  enable_dns_hostnames = true

  public_subnet_tags = {
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
    "kubernetes.io/role/elb"                      = "1"
  }

  private_subnet_tags = {
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
    "kubernetes.io/role/internal-elb"             = "1"
  }
}

module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "12.2.0"

  cluster_name    = local.cluster_name
  cluster_version = "1.17"
  subnets         = module.vpc.public_subnets

  vpc_id = module.vpc.vpc_id

  node_groups = {
    first = {
      desired_capacity = 2
      max_capacity     = 3
      min_capacity     = 1

      instance_type = "t3.medium"
    }
  }

  write_kubeconfig   = true
  config_output_path = "./"
}

module "vpc_instances" {
  source = "./vpc"
  prod-vpc = module.vpc.vpc_id
  internet_gate = module.vpc.igw_id
}
module "instance" {
  source = "./instance"
  jenkins_net_id = module.subnet.jenkins_net_id
  bastion_net_id = module.subnet.bastion_net_id
}
module "subnet" {
  source = "./subnet"
  vpc_id = module.vpc.vpc_id
  vpc = module.vpc
  route_id = module.vpc_instances.route_id
  sec_group_id = module.vpc_instances.sec_group_id
  internet_gate = module.vpc.igw_id
}

output "bastion_public_ip" {
  value = module.subnet.server_public_ip_bastion
}

output "jenkins_public_ip" {
  value = module.subnet.server_public_ip_jenkins
}