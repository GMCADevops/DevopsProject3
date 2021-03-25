<h1> Jenkins </h1>

Jenkins is a free and open source automation server. It helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery. 

It is a agent-based system that runs in servlet containers such as Apache Tomcat, it supports version control tools including AccuRev, CVS, Subversion and Git, jenkins can execute arbitrary shell scripts and Windows batch commands.

In this project jenkins was ultilised in an pipeline configuration with the use of github webhooks to orchestrate every step of automated product deployment, these stages were:

<br>

![](https://github.com/GMCADevops/DevopsProject3/blob/Documentation/images/JenkinsPipeline.png)

<br>

• Declarative Checkout SCM - The first stage triggered by a webhook is the source code management acquisition where jenkins will create a blank workspace and navigate to the github url repository clone it, switch into it and then checkout to the specified branch.
<br>
<br>
• Testing - The second stage is the application testing stage where both the front-end and back-end will be testing using the specified bash testing script, test files and test tool.
<br>
<br>
• Build Images - The third stage is the dockerization of the front-end and the back-end using the docker-compose.yaml to build the contents into a snapshop image with all the required dependencies to deploy the application as a container or pod.  
<br>
• Push - The fourth stage push`s the docker images built in the previous stage to dockerhub. 
<br>
<br>
• Deployment - The fifth and final stage of the pipeline is to pulldown the previously built docker images from dockerhub, then deploy them in the terraform built kubernetes cluster using the bash deployment.sh script.
<br>
<br>

<h1>Successful Pipeline build via github webhooks</h1>

![](https://i.gyazo.com/0d2d5c644fe89ca6b6370048fc9dabed.png)
![](https://i.gyazo.com/b4c44f2fcf38bb4e09260fbd8cbb15a0.png)

<h1>Declarative Checkout SCM</h1>

![](https://i.gyazo.com/ec7fc30ab070a2d28611d52b48e7e5a7.png)

<h1>Testing</h1>

![](https://i.gyazo.com/08875b0a04470758d4178e21ae3624ed.png)

<h1>Build Images</h1>

![](https://i.gyazo.com/7992a8948da0a7e8ddfc96539769477a.png)

<h1>Push</h1>

![](https://i.gyazo.com/ec7ffb403425e1e7a5f9def2d4d8221e.png)

<h1>Deployment</h1>

![](https://i.gyazo.com/1280f6c653d0ddf1563875cf4f95227e.png)