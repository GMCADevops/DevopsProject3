resource "aws_subnet" "my_subnet" {
  vpc_id            = var.vpc_id
  cidr_block        = "172.16.7.0/24"
  availability_zone = "eu-west-2a"

}
resource "aws_route_table_association" "a" {
  subnet_id      = aws_subnet.my_subnet.id
  route_table_id = var.route_id
}

resource "aws_network_interface" "jenkins" {
  subnet_id   = aws_subnet.my_subnet.id
  private_ips = ["172.16.7.100"]
  security_groups = [var.sec_group_id]
}

resource "aws_network_interface" "bastion" {
  subnet_id   = aws_subnet.my_subnet.id
  private_ips = ["172.16.7.101"]
  security_groups = [var.sec_group_id]
}



resource "aws_eip" "jenkins" {
  vpc                       = true
  network_interface         = aws_network_interface.jenkins.id
  associate_with_private_ip = "172.16.7.100"
  depends_on                = [var.vpc]
}

resource "aws_eip" "bastion" {
  vpc                       = true
  network_interface         = aws_network_interface.bastion.id
  associate_with_private_ip = "172.16.7.101"
  depends_on                = [var.vpc]
}
