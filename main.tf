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
  subnets         = module.vpc.private_subnets

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

# -------------------------------------
resource "aws_vpc" "prod-vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "production"
  }
}

resource "aws_subnet" "my_subnet" {
  vpc_id            = aws_vpc.prod-vpc.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "eu-west-2a"

}

resource "aws_network_interface" "jenkins" {
  subnet_id   = aws_subnet.my_subnet.id
  private_ips = ["10.0.1.100"]
  security_groups = [aws_security_group.allow_web.id]
}

resource "aws_network_interface" "bastion" {
  subnet_id   = aws_subnet.my_subnet.id
  private_ips = ["10.0.1.101"]
  security_groups = [aws_security_group.allow_web.id]
}

resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.prod-vpc.id
}

resource "aws_eip" "jenkins" {
  vpc                       = true
  network_interface         = aws_network_interface.jenkins.id
  associate_with_private_ip = "10.0.1.100"
  depends_on                = [aws_internet_gateway.gw]
}

resource "aws_eip" "bastion" {
  vpc                       = true
  network_interface         = aws_network_interface.bastion.id
  associate_with_private_ip = "10.0.1.101"
  depends_on                = [aws_internet_gateway.gw]
}

resource "aws_route_table" "prod-route-table" {
  vpc_id = aws_vpc.prod-vpc.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }
  route {
     ipv6_cidr_block = "::/0"
     gateway_id      = aws_internet_gateway.gw.id
   }
 }
 
resource "aws_route_table_association" "a" {
  subnet_id      = aws_subnet.my_subnet.id
  route_table_id = aws_route_table.prod-route-table.id
}
resource "aws_instance" "jenkins" {
  ami           = "ami-096cb92bb3580c759"
  instance_type = "t2.micro"
  key_name      = "jenkins"
  network_interface {
    network_interface_id = aws_network_interface.jenkins.id
    device_index         = 0
  }

  credit_specification {
    cpu_credits = "unlimited"
  }
}

resource "aws_instance" "bastion" {
  ami           = "ami-096cb92bb3580c759"
  instance_type = "t2.micro"
  key_name      = "bastion"
  network_interface {
    network_interface_id = aws_network_interface.bastion.id
    device_index         = 0
  }

  credit_specification {
    cpu_credits = "unlimited"
  }
}

resource "aws_security_group" "allow_web" {
  name        = "allow_web_traffic"
  description = "Allow Web inbound traffic"
  vpc_id      = aws_vpc.prod-vpc.id
    ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = {
    Name = "allow_web"
  }
}

output "server_public_ip_bastion" {
  value = aws_eip.bastion.public_ip
}
output "server_public_ip_jenkins" {
  value = aws_eip.jenkins.public_ip
}