# DevOps-Project-3

> Building upon the skills in projects 1 & 2, this time including: Terraform, Kubernetes & AWS.

## Tables of Contents

1. [Scrum Roles](#ScrumRoles)
2. [Scope](#Scope)
3. [Requirements](#Requirements)
4. [Workflows](#Workflows)
5. [Scope](#Scope)
6. [Ansible](#Ansible)
7. [Jenkins](#Jenkins)
8. [Terraform](#Terraform)
9. [Kubernetes](#Kubernetes)
10. [Project Planning](#ProjectPlanning)
11. [Budget](#budget)

![TeamAlpha](https://github.com/GMCADevops/DevopsProject3/blob/Documentation/images/teamAlpha.png)

This is a group challenge to see what we can produce and how well we can apply the knowledge we have gained over the last 12 weeks, as well as gaining experience working to complete a deliverable as part of a team which will be invaluable experience for future roles.

## Scrum Roles

![ScrumRoles](https://github.com/GMCADevops/DevopsProject3/blob/Documentation/images/ScumTeam.png)

## Scope

In short, we are expected to deploy the following applications:

This project was to deploy an application of our choosing we went with something one of us developed previous to the course, an unfinished but working API and frontend.
the frontend is using react and the backend is using python.

This project should demonstrate a deployment process thats not dependant on the application thats being deployed.

## Requirements

To plan, design, and implement a solution for automating the development workflows and deployments of this application.

![DevOpsTools](https://github.com/GMCADevops/DevopsProject3/blob/Documentation/images/DevOpsTools.png)

## Workflows

For this project we all worked in an agile way assuming roles and having daily standup's, understanding the issues brought up in the standup was a major factor in us being able to succeed in this project. We also did a retrospective after this current sprint which was our only sprint, lasting 4 days with our project demo on the 5th day.

## Ansible

![AnsibleWorkflows](https://github.com/GMCADevops/DevopsProject3/blob/Documentation/images/ansibleworkflow.png)


<br>

Ansible is an open-soruce agentless configureation management and application-deployment tool enabling infrastructure as code.
<br>

In this project we primary used ansible to configure all of our virtual machines by installing crucial packages, we achieved this by ssh proxying through our bastion server so ansible could security access all the virtual machines in the infrastructure network and configure them accordingly.  
<br>
We achieve the ssh proxy through the bastion server from our local machine by setting an ansible variable that specifies the location of the private ssh bastion key on our local machine, then by using the follow ansible command string:
<br>
<br>

```sh
ProxyCommand="ssh -W %h:%p -q user@bastion ip address"
```
<br>
<br>
This command allows us to proxy ssh through the specified bastion ip address as the specified user on the condition that we have the correct path for the private key of the bastion server set as a variable.
<br>
<br>

<h2> Ansible infrastructure diagram:</h2>

![](https://i.gyazo.com/71dc632d80a2600b0d27cbad32d82926.png)

We used ansible galaxy roles to define our configuration settings the roles used were:

• Ping - The ping role is configured to ping the ansible host and check for the response "pong" and a hello from "external ip address of host" to display via ansible variable, This will confirm the successful exchange of packets and access to the virtual machine bash shell.
<br>
<br>
• Kubectl - The kubectl role is configured to install the kubernetes kubectl package on each cluster node as well as the ci-cd server to allow infrastructure wide kubernetes cluster access management.
It will then display the installed version of kubectl as an ansible variable.
<br>
<br>
• Aws-cli - The Aws-cli role is configured to install the amazon-web-services command line interface onto the ci-cd server to allow programmatic access via iam user to the virtual private cloud(vpc).
It will then display the installed version of Aws-cli as an ansible variable.
<br>
<br>
• Jenkins - The jenkins role is configured to install the java openjdk dependency package then install, start and display the init admin password for jenkins as an ansible variable.
<br>
<br>

### Pinging for packet exchange:

![](https://i.gyazo.com/9dc5dd7675f59e7c74c8573402c2a362.png)

### Checking bash shell access:

![](https://i.gyazo.com/98536edf02041b8cfa018ff07a1dff0f.png)

### Install kubectl package:

![kube install](https://i.gyazo.com/f86737e01cd03cd7f01234928c8bac5d.png)

### Checking installed kubectl package version:

![kube version](https://i.gyazo.com/cb59342797904d3b35907acf238358f8.png)

### Installing java openjdk dependency package:

![install java](https://i.gyazo.com/508abbde02cf6e3b9625a3827644bab6.png)

### Install, configure and start jenkins

![install jenkins](https://i.gyazo.com/53be6f149a8c9739cb46e64290818a43.png)

### Retrive and display the jenkins init admin password:

![](https://i.gyazo.com/c49ae6d3892903fa98dbf30ff610b4ad.png)

### Install aws-cli package:

![](https://i.gyazo.com/0717c68885d5346ad760c7127a86e3d5.png)

### Checking  installed aws-cli package version:

![](https://i.gyazo.com/c44af90b2e7395afa26266251e4fa5df.png)

## Jenkins
![Jenkins](https://github.com/GMCADevops/DevopsProject3/blob/Documentation/images/JenkinsPipeline.png)

## Terraform

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

For the jenkins machine what we did was we using the current state of the machine with things installed and logged into the aws cli as an ami, meaning we could replicate it each time in a controlled manor

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

### possible issues.

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

## Kubernetes

Kubernetes is an open-source container orchestration platform that automates many of the manual processes involved in deploying, managing, and scaling containerized applications.

### **Project**

We are going to deploy two applications using Kubernetes.
 
1.**Frontend: React App**

![enter image description here](https://trello-attachments.s3.amazonaws.com/605c6297d563636cdd8f5519/1132x856/2405866736f821220b365ebe88e5c21c/frontend.png)

2.**Backend: FastAPI App**

![enter image description here](https://trello-attachments.s3.amazonaws.com/605c6297d563636cdd8f5519/895x337/a9d28f506a7c638b7542faaeac37adc0/FastAPI.png)

> **How are we going to do it?**

## **`Docker`** 

1) We will build the images of our two applications using Docker & Docker-Compose.

- **Dockerfiles**

![Backend_frontend.png](https://trello-attachments.s3.amazonaws.com/605c628b987ff1717da58164/605c6297d563636cdd8f5519/553e55064c6d78c9cbf80f9d88c01676/Backend_frontend.png)

- **Docker-compose.yaml**

![enter image description here](https://trello-attachments.s3.amazonaws.com/605c628b987ff1717da58164/605c6297d563636cdd8f5519/6447a2ef7bed4368ce778d63a52d90a9/docker_compose_yaml.png)

## **`Kubernetes`**

1) We will create a pod of the backend application:

***Deployment / Pod - Backend***

![enter image description here](https://trello-attachments.s3.amazonaws.com/605c6297d563636cdd8f5519/384x499/d7b7f65ed0c7e1ad3fb1b6c3940cbb72/backend_pod.png)

In order for this pod to communicate with the rest of the components of the cluster, we will create an internal service called backend-service.

***Service - Backend***

![enter image description here](https://trello-attachments.s3.amazonaws.com/605c6297d563636cdd8f5519/282x288/26e92c5efc71b5eff289982ca3ed66af/backend_service.png)


2) We will do the same with our frontend application. Firstly, we will create a pod: 

***Deployment / Pod - Frontend***

![enter image description here](https://trello-attachments.s3.amazonaws.com/605c6297d563636cdd8f5519/378x559/914654b19c4654b2b0477cce6db7f683/frontend_pod.png)

Secondly, we will create an internal service (frontend - service) to allow this pod to communicate with the rest of the cluster.

***Service - Frontend***

![enter image description here](https://trello-attachments.s3.amazonaws.com/605c6297d563636cdd8f5519/280x289/de44732d84675ab93997f6f3f13bb6ea/frontend_service.png)

3) The NGINX pod will be the component that joins the frontend application and the backend application.

***Deployment / Pod - Nginx***

![enter image description here](https://trello-attachments.s3.amazonaws.com/605c6297d563636cdd8f5519/421x643/8ae3bec2d4a745ecf674c8b77ca98061/nginx_pod.png)

All HTTP requests will go through the NGINX pod, but will then be sent to the correct service based on the requested URL.

We will keep the nginx configuration data separate from the application code, in a ConfigMap file.

***ConfigMap - nginx-config*** 

![enter image description here](https://trello-attachments.s3.amazonaws.com/605c628b987ff1717da58164/605c6297d563636cdd8f5519/b4474b0488bdf156626d0fea76422671/configMap.png)

4) Finally, we will need these two services that are deployed internally in Kubernetes, to be exposed to the outside world. To do this, we will create an external service (Load Balancer) that will allow our NGINX pod to receive external requests.

***Service - Load Balancer***

![enter image description here](https://trello-attachments.s3.amazonaws.com/605c6297d563636cdd8f5519/247x292/46f5f7785cfa214d0b3b68f05fc211ce/loadbalancer_service.png)

![enter image description here](https://trello-attachments.s3.amazonaws.com/605c6297d563636cdd8f5519/1200x628/e98b5d0d820c4b10aa7d6814c6261f24/summary.jpeg.jpg)


## **`Browser Request Flow through the Kubernetes Components`**
The request that will come from the browser, will go to the external service (Load Balancer) that will redirect it to the Nginx pod. The Nginx pod will send the request to the correct internal service (Frontend or Backend). From there, the request will be redirected to either the frontend or backend pod.

![enter image description here](https://trello-attachments.s3.amazonaws.com/605c6297d563636cdd8f5519/1200x625/b5bc874c13ebd0bea60270d0ddcb35c9/requestworkflow.png)

In the event that the request goes to the backend application (backend pod), this pod will also communicate with a database that will be hosted on Amazon RDS.



## Budget

![Budget](https://i.gyazo.com/45bb9d61541a4958f36589cc00875467.png)

The budget for this project was £20 for the week, this was easily met by maintaining all of our resources within terraform meaning at the end of the day we could pull them all down and at the start of the day we could quickly put them all back up.

## Project Planning

Using an agile board on Jira to manage product backlogs and keep the whole team aware of progression.

![Kanban](https://github.com/GMCADevops/DevopsProject3/blob/Documentation/images/ProjectPlanning.png)

## Contributors

[Jack Pendlebury](https://www.linkedin.com/in/jack-pendlebury-803736152/)

[Andrea Torres](https://www.linkedin.com/in/andrea-torres-j/)

[Dale Walker](https://www.linkedin.com/in/dale-walker-b4b8b0209/)

[Bilal Shafiq](https://www.linkedin.com/in/bilal-shafiq-35202b201/)

[Lee Ashworth](https://github.com/Leeroy2185)

### notable mentions

for support and help during during this project

- The QA team

## Improvements

Some future things we could work on would be to introduce more tools, in hopes to lower complexity and achieve better security.

We were hoping to automated as much as possible within this project, one of the things we didn't manage because of time restraints were automating the snapshots of the jenkins ec2 instance, this was in hopes of saving its state.

For another future improvement we would liked to have tested the application before pushing the application but this was an external application with no tests for it, and with a very limited time frame testing wasn't an option we could do.

Finally we would have liked to automate ansible for configuration, we decided later in the project that we wouldn't need ansible but we hoped we could still use it. The problem came when we realised the infrastructure in Terraform wouldn't support outputting private ip address' of an eks cluster by design.
