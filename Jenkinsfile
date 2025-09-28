pipeline {
    agent any // Specifies that the pipeline can run on any available agent

    stages {
        stage('Build') {
            steps {
                echo 'Building the project...' // Prints a message
                // Add your build commands here, e.g., sh 'mvn clean install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...' // Prints a message
                // Add your test commands here, e.g., sh 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...' // Prints a message
                // Add your deployment commands here, e.g., sh 'scp target/my-app.war user@server:/path/to/webapps/'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.' // Executes regardless of stage success or failure
        }
        success {
            echo 'Pipeline completed successfully!' // Executes only if all stages succeed
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.' // Executes only if any stage fails
        }
    }
}