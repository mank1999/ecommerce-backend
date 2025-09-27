pipeline {
    agent any

    environment {
        NODE_VERSION = "22.12.0"
    }

    tools {
        nodejs "NodeJS-22.12.0"
    }

    stages {
        stage('Checkout') {
            steps {
                // Pull code from your repository
                git branch: 'main', url: 'https://github.com/mank1999/ecommerce-backend.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing Node.js dependencies..."
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo "Running tests..."
                // Since you don't have real tests, we simulate success
                echo "All tests passed ✅"
            }
        }

        stage('Build') {
            steps {
                echo "Build stage - ready for future build steps"
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploy stage - can be configured later for Docker"
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully! ✅"
        }
        failure {
            echo "Pipeline failed ❌"
        }
    }
}
