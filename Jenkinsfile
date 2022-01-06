pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('init') {
            when {
                branch 'main'
            }
            steps {
                sh 'echo Building ${BRANCH_NAME} and ${BUILD_NUMBER}...'
            }
        }
        stage('docker-build') {
            when {
                branch 'main'
            }
            steps {
                sh 'docker build -t rkinn/rkinn-web-${BRANCH_NAME}:${BUILD_NUMBER} -t rkinn/rkinn-web-${BRANCH_NAME}:latest .'
            }
        }
        stage('docker-push') {
            when {
                branch 'main'
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'rkinn-docker', passwordVariable: 'password', usernameVariable: 'username')]) {
                    sh "docker login --username ${username} --password ${password}"
                    sh 'docker push --all-tags rkinn/rkinn-web-${BRANCH_NAME}'
                }
            }
        }
        stage('docker-rmi') {
            when {
                branch 'main'
            }
            steps {
                sh 'docker rmi rkinn/rkinn-web-${BRANCH_NAME}'
            }
        }
        stage('kube-deploy') {
            when {
                branch 'main'
            }
            steps {
               sh 'kubectl set image deployments/rkinn-web-${BRANCH_NAME} rkinn-web-${BRANCH_NAME}=rkinn/rkinn-web-${BRANCH_NAME}:$BUILD_NUMBER --namespace=rkinn'
            }
        }
    }

}
