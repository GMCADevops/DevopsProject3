


## Kubernetes.

Kubernetes is an open-source container orchestration platform that automates many of the manual processes involved in deploying, managing, and scaling containerized applications.

### **Project**

We are going to deploy two applications using Kubernetes.
 

1. **Frontend: React App**
![enter image description here](https://trello-attachments.s3.amazonaws.com/605c6297d563636cdd8f5519/1132x856/2405866736f821220b365ebe88e5c21c/frontend.png)

2. **Backend: FastAPI App**

![enter image description here](https://trello-attachments.s3.amazonaws.com/605c6297d563636cdd8f5519/895x337/a9d28f506a7c638b7542faaeac37adc0/FastAPI.png)

> **How are we going to do it?**

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

#### **Browser Request Flow through the Kubernetes Components**
The request that will come from the browser, will go to the external service (Load Balancer) that will redirect it to the Nginx pod. The Nginx pod will send the request to the correct internal service (Frontend or Backend). From there, the request will be redirected to either the frontend or backend pod.

![enter image description here](https://trello-attachments.s3.amazonaws.com/605c6297d563636cdd8f5519/1200x625/b5bc874c13ebd0bea60270d0ddcb35c9/requestworkflow.png)

In the event that the request goes to the backend application (backend pod), this pod will also communicate with a database that will be hosted on Amazon RDS.
