# N8N Webhook Integration Setup

## Overview
The landing page now integrates with n8n workflows to process email signups automatically.

## Configuration

### 1. Environment Variables
Add the following to your `.env` file:
```
VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/landing-interest
```

### 2. N8N Workflow Setup

Create a webhook workflow in n8n with the following configuration:

#### Webhook Node
- **Method**: POST
- **Path**: `/landing-interest` (or your chosen path)
- **Response Mode**: Immediately respond

#### Expected Payload
The webhook will receive the following JSON payload:
```json
{
  "email": "user@example.com",
  "source": "coldai.uk",
  "user_agent": "Mozilla/5.0...",
  "referrer": "https://referrer.com" | null,
  "timestamp": "2025-09-03T21:00:00Z",
  "event": "landing_interest_signup",
  "environment": "production" | "development"
}
```

### 3. Workflow Actions
Recommended n8n workflow steps after the webhook:

1. **Validate Email** - Check email format and domain
2. **Add to CRM** - Create/update contact in your CRM
3. **Send Welcome Email** - Trigger welcome email sequence
4. **Slack Notification** - Notify team of new signup
5. **Analytics** - Log event to analytics platform

## Error Handling
- The webhook call is non-blocking - it won't delay the user experience
- If n8n is unavailable, the signup still saves to Supabase
- All webhook errors are logged but don't affect the signup process
- If `VITE_N8N_WEBHOOK_URL` is not configured, the system continues without n8n integration

## Testing
1. Set up your n8n webhook endpoint
2. Add the webhook URL to your `.env` file
3. Test a signup on the landing page
4. Check n8n execution logs for the webhook trigger
5. Verify data is received correctly in n8n

## Data Flow
1. User submits email on landing page
2. Email is saved to Supabase `landing_interest` table
3. If successful, webhook is triggered to n8n (async)
4. n8n workflow processes the signup
5. User sees success message immediately (doesn't wait for n8n)

## Security Notes
- Use HTTPS for your n8n webhook URL
- Consider adding authentication headers if needed
- n8n webhook should validate incoming data
- Rate limiting should be configured in n8n
