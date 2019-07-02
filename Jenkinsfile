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
        }
      }

      stage('Test') {
            steps {
              sh '$WORKSPACE/jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh '$WORKSPACE/jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh '$WORKSPACE/jenkins/scripts/kill.sh'
            }
        }

    }
}
