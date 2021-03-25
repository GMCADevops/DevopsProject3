<h1> Ansible</h1>

<br>

Ansible is an open-soruce agentless configureation management and application-deployment tool enabling infrastructure as code.
<br>

In this project we primary used ansible to configure all of our virutal machines by installing crucial packages, we achieved this by ssh proxying throught our bastion server so ansible could security access all the virutal machines in the infrastructure network and configure them accordingly.  
<br>
We achieve the ssh proxy throught the bastion server from our local machine by setting an ansible variable that specifies the location of the private ssh bastion key on our local machine, then by using the follow ansible command string:
<br>
<br>
ProxyCommand="ssh -W %h:%p -q user@bastion ip address"
<br>
<br>
This command allows us to proxy ssh throught the specified bastion ip address as the specified user on the condition that we have the correct path for the private key of the bastion server set as a variable.
<br>
<br>

<h2> Ansible infrastructure diagram:</h2>

![](https://i.gyazo.com/71dc632d80a2600b0d27cbad32d82926.png)

We used ansible galaxy roles to define our configuration settings the roles used were:

• Ping - The ping role is configured to ping the ansible host and check for the response "pong" and a hello from "external ip address of host" to display via ansible variable, This will comfirm the successful exchange of packets and access to the virutal machine bash shell.
<br>
<br>
• Kubectl - The kubectl role is configured to install the kubernetes kubectl package on each cluster node as well as the ci-cd server to allow infrastructure wide kubernetes cluster access management.
It will then display the installed version of kubectl as an ansible variable.
<br>
<br>
• Aws-cli - The Aws-cli role is configured to install the amazon-web-services command line interface onto the ci-cd server to allow programmatic access via iam user to the virutal private cloud(vpc).
It will then display the installed version of Aws-cli as an ansible variable.
<br>
<br>
• Jenkins - The jenkins role is configured to install the java openjdk dependency package then install, start and display the init admin password for jenkins as an ansible variable.
<br>
<br>

<h2> Pinging for packet exchange: </h2>

![](https://i.gyazo.com/9dc5dd7675f59e7c74c8573402c2a362.png)

<h2>Checking bash shell access:</h2>

![](https://i.gyazo.com/98536edf02041b8cfa018ff07a1dff0f.png)

<h2>Install kubectl package:</h2>

![](https://i.gyazo.com/f86737e01cd03cd7f01234928c8bac5d.png)

<h2>Checking installed kubectl package version:</h2>

![](https://i.gyazo.com/cb59342797904d3b35907acf238358f8.png)

<h2>Installing java openjdk dependency package:</h2>

![](https://i.gyazo.com/508abbde02cf6e3b9625a3827644bab6.png)

<h2>Install, configure and start jenkins:</h2>

![](https://i.gyazo.com/53be6f149a8c9739cb46e64290818a43.png)

<h2>Retrive and display the jenkins init admin password:</h2>

![](https://i.gyazo.com/c49ae6d3892903fa98dbf30ff610b4ad.png)

<h2>Install aws-cli package:</h2>

![](https://i.gyazo.com/0717c68885d5346ad760c7127a86e3d5.png)

<h2>Checking  installed aws-cli package version:</h2>

![](https://i.gyazo.com/c44af90b2e7395afa26266251e4fa5df.png)


# Terraform

## What is terraform?

Terraform is a tool for building and changing infrastructure efficiently.
It is probably the most common infrastructure as code tools, allowing you to describe using a high level configuration. All the infrastructure created can also be shared and reused.

## Why did we use Terraform?

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

## possible issues

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
