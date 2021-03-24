#! /bin/bash

cd terraform # # Switch to the terraform directory


terraform init # Initialise terraform in the current working 


terraform apply # Build the infrastructure from the .tf terraform files in the current working directory 


cd .. # Jump back a directory 


cd ansible # Switch to the ansible directory 


ansible-playbook playbook.yaml -i inventory.yaml # Run the ansible playbook to congfiure the deployed infrastructure