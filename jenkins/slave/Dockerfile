# slave build steps 
# starting with base ubunto image (name jenkins-slave)
FROM ubuntu:16.04 as jenkins-slave
 
# Install Docker CLI in the agent
RUN apt-get update && apt-get install -y apt-transport-https ca-certificates
RUN apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
RUN echo "deb [arch=amd64] https://download.docker.com/linux/ubuntu xenial stable" > /etc/apt/sources.list.d/docker.list
RUN apt-get update && apt-get install -y docker-ce --allow-unauthenticated
 
RUN apt-get update && apt-get install -y openjdk-8-jre curl python python-pip git
RUN easy_install jenkins-webapi
 
# Get docker-compose in the agent container
# next step takes care of downloading and installing “docker-compose” in our build agent
RUN curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose && chmod +x /usr/local/bin/docker-compose
RUN mkdir -p /home/jenkins
RUN mkdir -p /var/lib/jenkins
 
# Start-up script to attach the slave to the master
# takes care of adding the magical start-up python script responsible for attaching to our master as a build agent!
ADD slave.py /var/lib/jenkins/slave.py
 
WORKDIR /home/jenkins
 
# set user and password for accessing jenkins
ENV JENKINS_URL "http://jenkins"
ENV JENKINS_SLAVE_ADDRESS ""
ENV JENKINS_USER "scooter"
ENV JENKINS_PASS "!^yQvfUI-/eF(Hdr"
ENV SLAVE_NAME ""
ENV SLAVE_SECRET ""
ENV SLAVE_EXECUTORS "1"
ENV SLAVE_LABELS "docker"
ENV SLAVE_WORING_DIR ""
ENV CLEAN_WORKING_DIR "true"
 
CMD [ "python", "-u", "/var/lib/jenkins/slave.py" ]