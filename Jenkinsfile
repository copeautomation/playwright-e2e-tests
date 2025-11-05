pipeline {
  agent any
  tools { nodejs 'node21' }
  environment { TEST_CREDS = credentials('e2e-test-user') }
  stages {
    stage('Build') {
      steps {
        sh '''
          set -euxo pipefail
          node -v
          npm -v
          export TEST_USER_NAME="$TEST_CREDS_USR"
          export TEST_PASSWORD="$TEST_CREDS_PSW"
          npm ci
          npx playwright install --with-deps
          npm run test:make-apt
        '''
      }
      post {
         always {
      // Publish Allure results (the plugin will build the HTML)
      allure includeProperties: false,
             jdk: '',                    // leave blank unless you need a specific JDK
             results: [[path: 'allure-results']],
             reportBuildPolicy: 'ALWAYS' // or 'UNSTABLE' / 'FAILED' / etc.
    }
      }
    }
  }
}
