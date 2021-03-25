#! /bin/bash

cd terraform # # Switch to the terraform directory


terraform init # Initialise terraform in the current working 


terraform apply # Build the infrastructure from the .tf terraform files in the current working directory 


cd .. # Jump back a directory 


cd ansible # Switch to the ansible directory 


# Run the ansible playbook to configure the deployed infrastructure
ansible-playbook playbook.yaml –i inventory --extra-vars "bastion_ip=${terraform output bastion_ip} "ci-cd_ip=${terraform output ci-cd_ip} "node-1_ip=${terraform output node-1_ip} "node-2_ip=${terraform output node-2_ip} "node-3_ip=${terraform output node-3_ip}
