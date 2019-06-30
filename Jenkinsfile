node('docker') {

  stage('Checkout') {
      checkout scm
    }
    
  stage('Install') {
    sh "npm install"
    sh "CI=true DISPLAY=:99 npm test"
  }
  
  stage('Build & UnitTest') {
    sh "docker build -t scooter-app ."
    sh "docker-compose -f docker-compose.ci.yml up"
  }
  
}
