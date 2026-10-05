pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t cloudops-dashboard:v1 .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop cloudops-dashboard || true'
                sh 'docker rm cloudops-dashboard || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 8081:80 --name cloudops-dashboard cloudops-dashboard:v1'
            }
        }
    }

    post {
        success {
            echo 'CloudOps Dashboard deployed successfully!'
        }

        failure {
            echo 'Deployment failed!'
        }
    }
}
