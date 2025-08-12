/**
 * Configuration Template for LLM-D Meeting File Organizer
 * 
 * This file shows the structure of the configuration needed for the script.
 * DO NOT put your real values here - use the setupSecureConfiguration() function instead.
 * 
 * Instructions:
 * 1. Copy this template structure
 * 2. Replace placeholders with your actual values
 * 3. Update the setupSecureConfiguration() function in google-apps-script-solution.js
 * 4. Run setupSecureConfiguration() once in Google Apps Script
 * 5. Your sensitive data will be stored securely and this template can be safely committed to GitHub
 */

const CONFIG_TEMPLATE = {
  // DEBUG MODE - Set to true to test without actually moving files
  DEBUG_MODE: false,
  
  // Source folder ID where meeting recordings are stored
  // Get this from the URL: https://drive.google.com/drive/folders/YOUR_SOURCE_FOLDER_ID_HERE
  SOURCE_FOLDER_ID: 'YOUR_SOURCE_FOLDER_ID_HERE',
  
  // Meeting prefix to exact target folder mapping
  // Each entry maps a meeting prefix to the exact Google Drive folder ID where files should be moved
  MEETING_CONFIGS: {
    '[PUBLIC] llm-d sig-autoscaling': {
      targetFolderId: 'YOUR_TARGET_FOLDER_ID',
      slackWebhook: 'YOUR_SLACK_WEBHOOK_URL',
      slackChannel: '#sig-autoscaling'
    },
    '[PUBLIC] llm-d sig-benchmarking': {
      targetFolderId: 'YOUR_TARGET_FOLDER_ID',
      slackWebhook: 'YOUR_SLACK_WEBHOOK_URL',
      slackChannel: '#sig-benchmarking'
    },
    '[PUBLIC] sig-inference-scheduler': {
      targetFolderId: 'YOUR_TARGET_FOLDER_ID',
      slackWebhook: 'YOUR_SLACK_WEBHOOK_URL',
      slackChannel: '#sig-inference-scheduler'
    },
    '[PUBLIC] llm-d sig-installation': {
      targetFolderId: 'YOUR_TARGET_FOLDER_ID',
      slackWebhook: 'YOUR_SLACK_WEBHOOK_URL',
      slackChannel: '#sig-installation'
    },
    '[PUBLIC] llm-d sig-kv-disaggregation': {
      targetFolderId: 'YOUR_TARGET_FOLDER_ID',
      slackWebhook: 'YOUR_SLACK_WEBHOOK_URL',
      slackChannel: '#sig-kv-disaggregation'
    },
    '[PUBLIC] llm-d sig-observability': {
      targetFolderId: 'YOUR_TARGET_FOLDER_ID',
      slackWebhook: 'YOUR_SLACK_WEBHOOK_URL',
      slackChannel: '#sig-observability'
    },
    '[PUBLIC] llm-d sig-pd-disaggregation': {
      targetFolderId: 'YOUR_TARGET_FOLDER_ID',
      slackWebhook: 'YOUR_SLACK_WEBHOOK_URL',
      slackChannel: '#sig-pd-disaggregation'
    },
    '[PUBLIC] llm-d Community Meeting': {
      targetFolderId: 'YOUR_TARGET_FOLDER_ID',
      slackWebhook: 'YOUR_SLACK_WEBHOOK_URL',
      slackChannel: '#community'
    }
    // Add more meeting configurations as needed
    // Format: 'meeting prefix': { targetFolderId, slackWebhook, slackChannel }
  },
  
  // Optional: Default webhook for error notifications
  DEFAULT_WEBHOOK: 'YOUR_DEFAULT_WEBHOOK_URL'
};

/**
 * Example with real-looking (but fake) values to show the format:
 */
const CONFIG_EXAMPLE = {
  DEBUG_MODE: false,
  SOURCE_FOLDER_ID: '1ABC123def456ghi789jkl012mno345pqr',
  MEETING_CONFIGS: {
    '[PUBLIC] llm-d sig-autoscaling': {
      targetFolderId: '1XYZ789abc123def456ghi789jkl012mno',
      slackWebhook: 'https://hooks.slack.com/services/T1234567/B1234567/abcdefghijklmnopqrstuvwx',
      slackChannel: '#sig-autoscaling'
    }
    // ... more configurations
  },
  DEFAULT_WEBHOOK: 'https://hooks.slack.com/services/T1234567/B7654321/zyxwvutsrqponmlkjihgfedcba'
};
