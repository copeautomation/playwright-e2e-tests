// Simple Jenkins pipeline for Playwright (no Docker). Runs on any available agent.
// Assumes a Linux agent with Node.js and npm available. Keep it minimal for teaching.

pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Install dependencies') {
      steps { sh 'npm ci' }
    }

    stage('Install Playwright browsers') {
      steps { sh 'npx playwright install --with-deps' }
    }

    stage('Run tests') {
      steps { sh 'npm run test:e2e' }
    }
  }

  post {
    always {
      // Save reports as build artifacts (optional but helpful)
      archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
      archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true

      // If you use Allure, uncomment the two lines below after generating the report in tests
      // archiveArtifacts artifacts: 'allure-results/**/*', allowEmptyArchive: true
      // archiveArtifacts artifacts: 'allure-report/**/*', allowEmptyArchive: true
    }
  }
}
