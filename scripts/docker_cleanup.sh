#!/bin/bash

# Stop and remove all containers
if [ "$(docker ps -aq)" ]; then
    docker stop $(docker ps -a -q)
    docker rm $(docker ps -a -q)
else
    echo "No running containers found"
fi

# Remove all images
if [ "$(docker images -q)" ]; then
    docker rmi $(docker images -a -q)
else
    echo "No images found"
fi

# Prune volume
if [ "$(docker volume ls -q)" ]; then
    docker volume rm $(docker volume ls -q)
else
    echo "No volumes found"
fi
