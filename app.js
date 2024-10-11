const { App } = require('@slack/bolt');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const USER_ID = process.env.USER_ID;
const MESSAGE = process.env.MESSAGE;
const INTERVAL_MS = parseInt(process.env.INTERVAL_MS, 10);

const app = new App({
	token: process.env.SLACK_BOT_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET,
	socketMode: true,
	appToken: process.env.SLACK_APP_TOKEN
});

const sendMessage = (userId, message) => {
	return new Promise((resolve, reject) => {
		app.client.conversations
			.open({ users: userId })
			.then(res => {
				if (!res.ok) {
					reject(new Error(`Error opening conversation: ${res.error}`));
					return;
				}
				const channelId = res.channel.id;
				// Send a message to the direct message channel
				app.client.chat
					.postMessage({
						channel: channelId,
						text: message
					})
					.then(res => resolve(res))
					.catch(err => reject(err));
			})
			.catch(err => reject(err));
	});
};

(async () => {
	await app.start(PORT);
	console.log(`⚡️ Slack Bolt app is running on port ${PORT}!`);

	sendMessage(USER_ID, MESSAGE)
		.then(res => console.log(`Message sent successfully: ${res.ts}`))
		.catch(err => console.error(err));

	let interval = setInterval(() => {
		sendMessage(USER_ID, MESSAGE)
			.then(res => console.log(`Message sent successfully: ${res.ts}`))
			.catch(err => console.error(err));
	}, INTERVAL_MS);

	process.on('SIGINT', () => {
		clearInterval(interval);
		console.log('Interval cleared. Exiting...');
		process.exit();
	});
})();
