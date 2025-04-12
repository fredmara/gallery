pipeline{
    agent any

    tools {
        nodejs "nodejs" 
    }

    environment {
        EMAIL_RECIPIENT = 'fredrick.owino2@student.moringaschool.com'
        RENDER_DEPLOY_HOOK = "https://api.render.com/deploy/srv-cvt2l4pr0fns73dujkg0?key=YNOBcl-OJ3M"
		SLACK_TOKEN = "eebf55a5-b349-4d12-a49d-49a9a08ca648"
		WEBSITE_URL = "https://gallery-7ulj.onrender.com/"
    }


    stages{
        stage("Cloning repository"){
            steps{
                git branch:"master", url:"https://github.com/fredmara/gallery"
            }
        }

        stage("Install dependencies"){
            steps{
                sh "npm install"
            }
        }

        stage("Test code"){
            steps{
                sh "npm test"
            }
        }

       
	    stage("Deploy to Render") {
            steps {
                echo 'Deploying application to Render...'
                sh "curl -X POST ${RENDER_DEPLOY_HOOK}"
            }
        }

    }
    post {
        success {
            echo 'Pipeline completed successfully!!'
			slackSend botUser: true, 
			channel: '#fred_ip1', 
			color: '#00ff00', 
			message: "${currentBuild.number} ${WEBSITE_URL}", 
			tokenCredentialId: "${SLACK_TOKEN}"
			
			
        }
        failure {
            mail to: "${EMAIL_RECIPIENT}",
                 subject: 'Pipeline Failure Notification',
                 body: 'The pipeline failed at some stage. Please check Jenkins logs for details.'
        }
        always {
            echo 'Pipeline execution complete!!'

        }
        aborted {
            echo 'Pipeline execution aborted!!' 
        }
    }

    
    
}