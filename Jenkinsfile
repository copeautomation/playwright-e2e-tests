// Simple Jenkins pipeline for Playwright (no Docker). Runs on any available agent.
// Assumes a Linux agent with Node.js and npm available. Keep it minimal for teaching.

pipeline {
  agent any

  environment {
    // NVM directory for per-user Node.js installation on the agent
    NVM_DIR = "${env.HOME}/.nvm"
    CURA_CREDS = credentials('cura-creds')
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Setup Node.js (nvm)') {
      steps {
        sh label: 'Install NVM and LTS Node if missing', script: '''
          set -euxo pipefail
          export NVM_DIR="$NVM_DIR"
          if [ ! -s "$NVM_DIR/nvm.sh" ]; then
            mkdir -p "$NVM_DIR"
            curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
          fi
          . "$NVM_DIR/nvm.sh"
          nvm install --lts
          nvm use --lts
          node -v
          npm -v
        '''
      }
    }

    stage('Install dependencies') {
      steps {
        sh label: 'npm ci', script: '''
          set -euxo pipefail
          . "$NVM_DIR/nvm.sh"
          nvm use --lts
          npm ci
        '''
      }
    }

    stage('Install Playwright browsers') {
      steps {
        sh label: 'playwright install', script: '''
          set -euxo pipefail
          . "$NVM_DIR/nvm.sh"
          nvm use --lts
          npx playwright install
        '''
      }
    }

    stage('Run tests') {
      steps {
        sh label: 'run tests', script: '''
          set -euxo pipefail
          . "$NVM_DIR/nvm.sh"
          nvm use --lts
          npm run test:make-apt
        '''
      }
    }

    stage('Allure report') {
      steps {
        sh label: 'install allure and generate report', script: '''
          set -euo pipefail
          . "$NVM_DIR/nvm.sh"
          nvm use --lts
          # Install Allure CLI
          npm install -g allure-commandline --save-dev
          # Generate Allure report if results exist
          if [ -d "allure-results" ] && [ "$(ls -A allure-results)" ]; then
            allure generate allure-results --clean -o allure-report || true
          else
            echo "No allure-results found; skipping allure generate"
          fi
        '''
      }
    }
  }

  post {
    always {
      // Save reports as build artifacts (optional but helpful)
      archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
      archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true
      archiveArtifacts artifacts: 'allure-results/**/*', allowEmptyArchive: true
      archiveArtifacts artifacts: 'allure-report/**/*', allowEmptyArchive: true
    }
  }
}
