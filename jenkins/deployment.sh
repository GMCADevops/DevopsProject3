#!/bin/bash
#build
cd app
kubectl apply -f nginx-configmap.yaml -f backend.yaml -f frontend.yaml --validate=false -f loadbalancer.yaml # Deploy all the kubernetes .yaml files to build 