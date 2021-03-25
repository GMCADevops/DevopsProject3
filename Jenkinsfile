pipeline {
    agent any 
    stages{
        stage("Build Images"){
            steps{
                sh './jenkins/build.sh'
            }
        }
        
        
        stage("Deployment"){
            steps{
                sh './jenkins/deployment.sh'
            }
        }
    }
}