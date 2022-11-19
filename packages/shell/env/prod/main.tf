terraform {
  required_providers {
    linode = {
      source = "linode/linode"
      version = "1.29.4"
    }
  }
}

provider "linode" {
    token = var.token
}

resource "linode_lke_cluster" "carmel" {
    label       = "carmel"
    k8s_version = "1.23"
    region      = "us-central"
    tags        = ["carmel", "prod"]

    pool {
        type  = "g6-standard-2"
        count = 3
    }
}

output "kubeconfig" {
   value = linode_lke_cluster.carmel.kubeconfig
   sensitive = true
}

output "api_endpoints" {
   value = linode_lke_cluster.carmel.api_endpoints
}

output "status" {
   value = linode_lke_cluster.carmel.status
}

output "id" {
   value = linode_lke_cluster.carmel.id
}

output "pool" {
   value = linode_lke_cluster.carmel.pool
}

variable "token" {}
variable "root_pass" {}
variable "ssh_key" {}