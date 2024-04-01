
#!/bin/bash

#  build app
npm run build

# Docker login
docker login

# Build Docker image
 docker build -t vite-react-app:latest .

# Run Docker container 
# docker run -p 8080:8080 vite-react-app:latest

# Tag Docker image
docker tag vite-react-app:latest aumutoni582/my_new_docker:latest

# Push Docker image to Docker Hub
docker push aumutoni582/my_new_docker:latest

# Pull Docker image from Docker Hub
docker pull aumutoni582/my_new_docker:latest

# Run Docker container with pulled image
docker run -p 8080:8080 aumutoni582/my_new_docker:latest

