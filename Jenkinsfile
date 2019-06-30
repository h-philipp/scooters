node('docker') {

  stage('Checkout') {
      checkout scm
    }
    
  stage('Install') {
    sh "#!/bin/bash \n" + 
    "echo \"Using \$SHELL\"\n"
    sh "npm install"
    sh "CI=true DISPLAY=:99 npm test"
  }
  
  stage('Build & UnitTest') {
    sh "#!/bin/bash \n" + 
    "echo \"Using \$SHELL\"\n"
    sh "docker build -t scooter-app ."
    sh "docker-compose -f docker-compose.ci.yml up"
  }

}
