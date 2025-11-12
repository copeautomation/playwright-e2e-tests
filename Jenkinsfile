pipeline {
  agent any
  tools { 
    nodejs 'node21'
     allure 'allure'  
    }
  environment { TEST_CREDS = credentials('e2e-test-user') }
  stages {
    stage('Build') {
      steps {
        sh '''
          set -euxo pipefail
          node -v
          npm ci
          npx playwright install --with-deps
        '''
      }
    }
    stage('Test') {
      steps {
        sh '''
          export TEST_USER_NAME="$TEST_CREDS_USR"
          export TEST_PASSWORD="$TEST_CREDS_PSW"
          npm run test:make-apt
        '''
      }
      post {
        always {
          // Publish Allure results (the plugin will build the HTML)
          allure includeProperties: false,
                 jdk: '',
                 results: [[path: 'allure-results']],
                 reportBuildPolicy: 'ALWAYS'
        }
      }
    }
  }
}
