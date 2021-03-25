output "server_public_ip_bastion" {
  value = aws_eip.bastion.public_ip
}

output "server_public_ip_jenkins" {
  value = aws_eip.jenkins.public_ip
}

output "jenkins_net_id" {
  value = aws_network_interface.jenkins.id
}

output "bastion_net_id" {
  value = aws_network_interface.bastion.id
}