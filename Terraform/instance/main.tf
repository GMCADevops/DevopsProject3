resource "aws_instance" "jenkins" {
  ami           = "ami-070bc950a67c8d693"
  instance_type = "t2.medium"
  key_name      = "bastion"
  #user_data = "${file("install_jenkins.sh")}"
  
  network_interface {
    network_interface_id = var.jenkins_net_id
    device_index         = 0
  }

  credit_specification {
    cpu_credits = "unlimited"
  }
}

resource "aws_instance" "bastion" {
  ami           = "ami-096cb92bb3580c759"
  instance_type = "t2.medium"
  key_name      = "bastion"
  

  network_interface {
    network_interface_id = var.bastion_net_id
    device_index         = 0
  }

  credit_specification {
    cpu_credits = "unlimited"
  }
}