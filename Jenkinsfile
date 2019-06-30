node('docker') {

  stage('Checkout') {
      checkout scm
    }
    
  stage('Install packages') {

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
