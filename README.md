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
We used ansible galaxy roles to define our configuration settings the roles used were:

- Ping - The ping role is configured to ping the ansible host and check for the response "pong" and a hello from "external ip address of host" to display via ansible variable, This will comfirm the successful exchange of packets and access to the virutal machine bash shell.
<br>
<br>
- Kubectl - The kubectl role is configured to install the kubernetes kubectl package on each cluster node as well as the ci-cd server to allow infrastructure wide kubernetes cluster access management.
It will then display the installed version of kubectl as an ansible variable.
<br>
<br>
- Aws-cli - The Aws-cli role is configured to install the amazon-web-services command line interface onto the ci-cd server to allow programmatic access via iam user to the virutal private cloud(vpc).
It will then display the installed version of Aws-cli as an ansible variable.
<br>
<br>
- Jenkins - The jenkins role is configured to install the java openjdk dependency package then install, start and display the init admin password for jenkins as an ansible variable.
<br>
<br>
<h2> Ansible infrastructure diagram</h2>





<h2> Pinging for packet exchange </h2>

![](https://i.gyazo.com/9dc5dd7675f59e7c74c8573402c2a362.png)

<h2>Checking bash shell access</h2>

![](https://i.gyazo.com/98536edf02041b8cfa018ff07a1dff0f.png)

<h2>Install kubectl package</h2>

![](https://i.gyazo.com/f86737e01cd03cd7f01234928c8bac5d.png)

<h2>Checking installed kubectl package version</h2>

![](https://i.gyazo.com/cb59342797904d3b35907acf238358f8.png)

<h2>Installing java openjdk dependency package</h2>

![](https://i.gyazo.com/508abbde02cf6e3b9625a3827644bab6.png)

<h2>Install configure and start jenkins</h2>

![](https://i.gyazo.com/53be6f149a8c9739cb46e64290818a43.png)

<h2>Retrive and display the jenkins init admin password</h2>

![](https://i.gyazo.com/c49ae6d3892903fa98dbf30ff610b4ad.png)

<h2>Install aws-cli package</h2>

![](https://i.gyazo.com/0717c68885d5346ad760c7127a86e3d5.png)

<h2>Checking  installed aws-cli package version</h2>

![](https://i.gyazo.com/c44af90b2e7395afa26266251e4fa5df.png)


