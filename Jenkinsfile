node('docker') {

  stage('Checkout') {
      checkout scm
    }
    
  stage('Install packages') {

    env.NODEJS_HOME = "${tool 'Node 6.9.5'}"
    
    // on linux / mac
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
    sh 'npm --version'
    sh 'npm install'
    sh 'npm test'  
  }
  
  stage('Build & UnitTest') {
    sh "#!/bin/bash \n" + 
    "echo \"Using \$SHELL\"\n"
    sh "docker build -t scooter-app ."
    sh "docker-compose -f docker-compose.ci.yml up"
  }

}
