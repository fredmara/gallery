pipeline{
    agent any

    tools {
        nodejs "nodejs" 
    }

    environment {
        EMAIL_RECIPIENT = 'fredrick.owino2@student.moringaschool.com'
        RENDER_DEPLOY_HOOK = "https://api.render.com/deploy/srv-cvt2l4pr0fns73dujkg0?key=YNOBcl-OJ3M"
		//SLACK_TOKEN = ""
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

       
	   // stage("Deploy to Render") {
           // steps {
                //echo 'Deploying application to Render...'
               // sh "curl -X POST ${RENDER_DEPLOY_HOOK}"
            //}
        //}

    }


    
    
}