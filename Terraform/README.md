

### What is terraform?

Terraform is a tool for building and changing infrastructure efficiently.
It is probably the most common infrastructure as code tools, allowing you to describe using a high level configuration. All the infrastructure created can also be shared and reused.

### Why did we use Terraform?

For this project, learning and using Terraform has been great, it's such an amazing tool, it makes creating and building infrastructure so much easier, this is one of the main reasons we decided to use it for this project.

and this should apply all of the infrastructures and build it on AWS.
this takes about 15 minutes on average, but the great thing about Terraform is, it will save the current state, meaning you can change something and it will apply it without destroying all of the none affected files.
For this project terraform was the first thing we worked on, having the infrastructure from the start allowed us to easily put up and take down the infrastructure when it wasn't being used.

For Terraform, we wanted all of our infrastructure to be deployed with it, we wanted a k8 cluster with EKS and 2 instances with EC2 one for Jenkins and one for our bastion server.

This would be done from any machine when logged into the correct IAM user with env variables we also can set up the bastion server to connect to the cluster.

``` sh
$aws configure
```

```sh
$terraform init
```

```sh
$terraform apply
```

```sh
$aws eks --region eu-west-2 update-kubeconfig --name my-cluster
```

### possible issues

```sh
$rm ~/.kube/config
```

```sh
$terraform state list | grep auth
```

```sh
$terraform state rm <thing>
```

applying infrastructure changes is fast and simple when using terraform

![Terraform image1](https://i.gyazo.com/e401c6dfcd8aab8aeac859c74fd7fcbd.png)

Another reason why we used terraform is the fact the it knows its own state, which means when applying new infrastructure it will replace and tear down the old infrastructure. this also means when you make changes you don't need to wait for the whole infrastructure to tear down you can just apply new infrastructure.

When something isn't working you can also use the command:

```sh
$terraform taint
```

Which then allows you to taint the resource that isn't working to tear it down and then apply it again, this as a whole saves a lot of time as you don't need to destroy everything each time.

## What we did with Terraform

some of the notable things we used Terraform for is for our k8 cluster, our jenkins CI server and finally the bastion server.

![k8 image](https://i.gyazo.com/cd794f159b6ec823c1bfa2ccdb6fcd92.png)

For the Jenkins server we also used custom images to allow us to retain the jenkins install as well as our pipeline and user accounts. The reason we did this is if the ec2 instance failed and we would need to re-deploy, this would be a quick simple fix. We also hope to automate this process by using snapshots of the instance and feeding them back into terraform with image versions.

![Jenkins image](https://i.gyazo.com/640cdced80519b018b0b4195b6f06e66.png)

The final thing we did with Terraform was something we could have done with ansible, but we decided it would be best to do with terraform. This was install jenkins, docker and finally adding them to the jenkins user. This script is now not very useful as this allow us to save a snapshot and turn that into an image we are now using.
