#!/bin/bash
# build
cd kubernetes # switch to the correct 

  
# Remove any previous locally built images 
docker-compose down --rmi local


# build the images for the services from the docker-compose.yaml
docker-compose build 

