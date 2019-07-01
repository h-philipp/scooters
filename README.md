# Scooters App

This is a test app to show possibilities of jenkins x in AWS ECS and how complete clean deployment is working. 

# Build docker
docker build -t scooter-app .

# Run scooter app on docker
docker-compose -f ./docker-compose.ci.yml up

# Build jenkins master
docker build -t jenkins-master .

# Build jenkins slave 
docker build -t jenkins-slave .

# Run jenkins locally
docker-compose -f ./docker-compose.ci.yml up