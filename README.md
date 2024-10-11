
---

## Environment Variables Configuration

To configure the Slack bot, you need to set up a `.env` file in the root directory of your project. This file contains essential environment variables that the bot uses to function correctly.

### Create a `.env` file

1. In the root directory of your project, create a file named `.env`.

### Required Environment Variables

Add the following variables to your `.env` file:

```plaintext
SLACK_BOT_TOKEN=your-slack-bot-token
SLACK_SIGNING_SECRET=your-slack-signing-secret
SLACK_APP_TOKEN=your-slack-app-token
USER_ID=your-user-id
MESSAGE="Your automated message content"
INTERVAL_MS=10800000  # 3 hours in milliseconds
PORT=3000              # Optional, default port
```

### Variable Descriptions

- `SLACK_BOT_TOKEN`: The OAuth token for your Slack bot. This allows the bot to interact with the Slack API. You can obtain this token by creating a new Slack app and installing it in your workspace.
  
- `SLACK_SIGNING_SECRET`: The signing secret for your Slack app. This is used to verify that incoming requests are from Slack.

- `SLACK_APP_TOKEN`: The token used for socket mode to enable real-time communication between your app and Slack.

- `USER_ID`: The user ID of the recipient who will receive automated messages. You can find this ID by using the Slack API method `users.list`.

- `MESSAGE`: The message content that the bot will send to the specified user. You can customize this text as needed.

- `INTERVAL_MS`: The time interval in milliseconds between messages. For example, to send messages every 3 hours, set this value to `10800000` (3 hours × 60 minutes × 60 seconds × 1000 milliseconds).

- `PORT`: The port on which your app will run. This is optional and defaults to `3000` if not specified.

### Example `.env` file

Here’s an example of what your `.env` file might look like:

```plaintext
SLACK_BOT_TOKEN=xoxb-12345wefg6789012-1234sa567890123-abcdefgwqxzHIJKLMN
SLACK_SIGNING_SECRET=sasxcx1dx
SLACK_APP_TOKEN=xapp-1-A12345zx27890-1234567xcz890123-abcdefgHI2JKLMN
USER_ID=U07RGCKDK34
MESSAGE="Hello from your Slack bot!"
INTERVAL_MS=10800000
PORT=3000
```

### Note

Ensure that the `.env` file is included in your `.gitignore` file to prevent sensitive information from being committed to your version control system.

---
