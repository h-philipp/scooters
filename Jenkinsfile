node('docker') {

  stage('Checkout') {
      checkout scm
    }
    
  stage('Install packages') {

    npm 'npm --version'
    npm 'npm install'
    npm 'npm test'  
  }
  
  stage('Build & UnitTest') {
    sh "#!/bin/bash \n" + 
    "echo \"Using \$SHELL\"\n"
    sh "docker build -t scooter-app ."
    sh "docker-compose -f docker-compose.ci.yml up"
  }

}
