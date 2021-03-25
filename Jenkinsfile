pipeline {
    agent any 
    stages{
        stage('testing'){
                steps{
                    sh 'chmod +x jenkins/testing.sh'
                    sh './jenkins/testing.sh'
                }
            }
        stage("Build Images"){
            steps{
                sh 'chmod +x jenkins/build.sh'
                sh './jenkins/build.sh'
            }
        }
         stage('Push'){
                steps{
                    script{
                            docker.withRegistry('', 'docker-hub-credentials'){
                                sh "docker-compose push"
                                sh "docker system prune -af"
                            }
                            
                        }
                    }
                }
        stage("Deployment"){
            steps{
                sh 'chmod +x jenkins/deployment.sh'
                sh './jenkins/deployment.sh'
            }
        }
        
    }
    
}