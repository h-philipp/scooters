output "JenkinsDNS" {
  value = "https://${aws_route53_record.jenkins_master.name}"
}

output "JenkinsSGID" {
  value = "${aws_security_group.jenkins_master_sg.id}"
}
