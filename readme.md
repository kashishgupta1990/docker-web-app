# Build Docker Image
### docker build -t kashishgupta1990/docker-web .

# Execute the docker image to Server PORT 8888 <- from container PORT 9999
### docker run -d --name "docker-web-container-1" -p 8888:9999  kashishgupta1990/docker-web

# Go Inside the container
### docker exec -it docker-web-container-1 /bin/bash

# Pull Docker image
### docker pull kashishgupta1990/docker-web