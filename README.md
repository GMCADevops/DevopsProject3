# Terraform

sh '''
aws configure
'''

sh '''
terraform init
'''

sh '''
terraform apply
'''

sh '''
aws eks --region eu-west-2 update-kubeconfig --name my-cluster
'''

## possible issues

sh '''
rm ~/.kube/config
'''

ssh '''
terraform state list | grep auth
'''

ssh '''
terraform state rm <thing>
'''
