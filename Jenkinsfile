pipeline {
    agent any

    environment {
        NODE_VERSION   = "NodeJS-22.12.0"
        IMAGE_NAME     = "e-commerce-backend"   // 🔹 change this
        CREDENTIAL_ID  = "manishkhadge"                    // 🔹 Jenkins credentials ID
        TAG            = "${env.BUILD_NUMBER}"                         // build number as tag
    }

    tools {
        nodejs "NodeJS-22.12.0"
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
                echo "Running tests..."
                // sh 'npm test'
            }
        }

        stage('Build & Archive') {
            steps {
                echo "Building application and archiving..."
                archiveArtifacts artifacts: 'package.json, package-lock.json, **/*.js, **/*.map', fingerprint: true
            }
        }
        stage('checking Docker available to build') {
            steps {
                echo "Checking Docker available to build..."
                sh "docker --version"
            }
        }
        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh "docker build -t ${IMAGE_NAME}:${TAG} ."
            }
        }

        stage('Push Docker Image') {
            steps {
                echo "Pushing Docker image to Docker Hub..."
                withCredentials([usernamePassword(credentialsId: "${CREDENTIAL_ID}",
                                                  usernameVariable: 'DOCKER_USER',
                                                  passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh "docker push ${IMAGE_NAME}:${TAG}"
                    sh "docker tag ${IMAGE_NAME}:${TAG} ${IMAGE_NAME}:latest"
                    sh "docker push ${IMAGE_NAME}:latest"
                }
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully! ✅"
            echo "Docker image pushed: ${IMAGE_NAME}:${TAG}"
        }
        failure {
            echo "Pipeline failed! ❌"
        }
        always {
            sh 'docker logout || true'
        }
    }
}
