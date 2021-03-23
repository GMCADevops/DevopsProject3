output "server_private_ip_jenkins" {
  value = aws_instance.jenkins.private_ip
}
output "server_id_jenkins" {
  value = aws_instance.jenkins.id
}

output "server_private_ip_bastion" {
  value = aws_instance.bastion.private_ip
}
output "server_id_bastion" {
  value = aws_instance.bastion.id
}