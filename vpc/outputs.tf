output "route_id" {
  value = aws_route_table.prod-route-table.id
}

output "sec_group_id" {
  value = aws_security_group.allow_web.id
}