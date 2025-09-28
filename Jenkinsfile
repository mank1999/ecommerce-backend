pipeline {
    agent any

    environment {
        NODE_VERSION = "NodeJS-22.12.0"
    }

    tools {
        nodejs "NodeJS-22.12.0"   // ✅ Correct syntax
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Checking out code from Git..."
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
                echo "Running tests (unit, integration, etc.)..."
                // sh 'npm test'
            }
        }

        stage('Build & Archive') {
            steps {
                echo "Building application and creating deployment artifact..."
                // sh 'npm run build'
                archiveArtifacts artifacts: 'package.json, package-lock.json, **/*.js, **/*.map', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploy stage - TODO: Implement actual deployment logic"
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully! ✅"
        }
        failure {
            echo "Pipeline failed! ❌"
        }
    }
}
