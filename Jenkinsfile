pipeline {
    agent any

    environment {
        // Define version for clarity, though its use in 'tools' is hardcoded
        NODE_VERSION = "NodeJS-22.12.0"
    }

    tools {
        // **Verify "NodeJS-22.12.0" is the exact name in Jenkins Global Tool Configuration**
        node js "NodeJS-22.12.0" 
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
                // Use a cache strategy if possible for faster builds (e.g., via workspace persistence)
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo "Running tests (unit, integration, etc.)..."
                // **ISSUE RESOLVED: Using actual test command**
                sh 'npm test' // This command must pass for the pipeline to continue
            }
        }

        stage('Build & Archive') {
            steps {
                echo "Building application and creating deployment artifact..."
                // Example Build Step (if required for your project)
                // sh 'npm run build' 

                // **ISSUE RESOLVED: Archiving essential files for deployment traceability**
                archiveArtifacts artifacts: 'package.json, package-lock.json, **/*.js, **/*.map', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploy stage - TODO: Implement actual deployment logic (e.g., to Docker/Kubernetes/VM)"
                // Example of future deployment step:
                // sh 'ssh user@server "deploy-script.sh"'
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully! Artifacts created. ✅"
            // You could add email or Slack notification here
        }
        failure {
            echo "Pipeline failed! Check the stage logs for errors. ❌"
            // You could add email or Slack notification here
        }
    }
}