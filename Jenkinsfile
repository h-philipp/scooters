pipeline {

  agent {
        docker {
            image 'node:9-slim' 
            args '-p 3000:3000' 
        }
    }

    stages {

        stage('Checkout') {
           steps {
              checkout scm
           }
        }
        
      stage('Install packages') {
        steps {
          sh 'npm --version'
          sh 'npm config ls'
          sh 'npm install'
          sh 'npm test'  
        }
      }
      
      /*stage('Build & UnitTest') {
        steps {
          sh "#!/bin/bash \n" + 
          "echo \"Using \$SHELL\"\n"
          sh "docker build -t scooter-app ."
          sh "docker-compose -f docker-compose.ci.yml up"
          sh "npm start"
        }
      }*/

      stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }

    }
}
