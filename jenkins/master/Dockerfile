# master build steps
# Starting off with the Jenkins base Image (image name = jenkins-master)
FROM jenkinsci/blueocean as jenkins-master
 
# Installing the plugins we need using the in-built install-plugins.sh script
#RUN /usr/local/bin/install-plugins.sh git bitbucket nodejs matrix-auth workflow-aggregator docker-workflow blueocean credentials-binding
 
# Setting up environment variables for Jenkins admin user
ENV JENKINS_USER scooter
ENV JENKINS_PASS !^yQvfUI-/eF(Hdr
 
# Skip the initial setup wizard
# is the run-time JVM parameter that needs to be passed in to disable the setup wizard!
ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false
 
# Start-up scripts to set number of executors and creating the admin user
# which is to provide the container with initial start-up scripts to set the Jenkins executors and for creating the jenkins admin user!
COPY executors.groovy /usr/share/jenkins/ref/init.groovy.d/
COPY default-user.groovy /usr/share/jenkins/ref/init.groovy.d/
 
VOLUME /var/jenkins_home
