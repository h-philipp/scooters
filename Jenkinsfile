pipeline {

  agent {
        docker {
            image 'node:9-slim' 
            args '-p 3000:3000' 
        }
    }

  stage('Checkout') {
      checkout scm
    }
    
  stage('Install packages') {

    sh 'npm --version'
    sh 'npm config ls'
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
