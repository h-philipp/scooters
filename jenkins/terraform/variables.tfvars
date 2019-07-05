region = "eu-central-1"

aws_profile = "default"

shared_credentials_file = "/Users/Philipp/.aws/credentials"

key_name = "scooter-app"

hosted_zone_id = "Z18C1MHN900ZEY"

bastion_sg_id = "sg-01c246d4af301c7c9"

jenkins_username = "scooter"

jenkins_password = "scooter"

jenkins_credentials_id = "jenkins-slaves"

vpc_id = "vpc-0eedd1f2837fa64c3"

vpc_cidr_block = "192.168.0.0/16"

vpc_private_subnets = ["subnet-02a63e45f0bf8ff25", "subnet-0440a7b78c7f16bc5", "subnet-0b01fd6c95adb97c1"]

vpc_public_subnets = ["subnet-0b7a8bad01bc321c7", "subnet-08a147021c86de90b", "subnet-04c778105eb7adbd7"]

ssl_arn = "arn:aws:acm:eu-central-1:245642514919:certificate/1cc0bb6d-ce98-4a90-aad7-d4bd42f8b627"
