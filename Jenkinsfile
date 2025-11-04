pipeline {
  agent any
  tools { nodejs 'node24' }  // Preconfigured in Manage Jenkins > Global Tool Configuration

  environment {
    TEST_CREDS     = credentials('e2e-test-user')
    TEST_USER_NAME = "${TEST_CREDS_USR}"
    TEST_PASSWORD  = "${TEST_CREDS_PSW}"
    PLAYWRIGHT_BROWSERS_PATH = "${WORKSPACE}/.cache/ms-playwright"
  }

  stages {
    stage('Checkout') { steps { checkout scm } }
    stage('Install & Test') {
      steps {
        sh '''
          set -euxo pipefail
          node -v
          npm -v
          npm ci
          npx playwright install --with-deps
          npm run test:make-apt
        '''
      }
    }
    stage('Allure (optional)') {
      when { expression { return fileExists('allure-results') } }
      steps {
        sh 'npx --yes allure-commandline@latest generate allure-results --clean -o allure-report || true'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: '**/playwright-report/**,**/test-results/**,**/allure-results/**,**/allure-report/**',
                       allowEmptyArchive: true
    }
  }
}
