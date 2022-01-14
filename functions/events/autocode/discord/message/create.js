// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messageContent = [
  `Hey there! You said **${context.params.event.content}**!`,
  ''
];

if (context.service.environment) {
  messageContent = messageContent.concat([
    `Thank you for being a part of this server. Share with your friends, as well!`,
    `https://discord.gg/E9hMqvMN`
  ]);
} else {
  messageContent = messageContent.concat([
    `If you're the bot creator, you can modify this behavior by editing the Autocode project's code from your dashboard:`,
    `https://autocode.com/dashboard/`
  ]);
}

// Only respond to messages containing the word "hi", "hey", "hello", or "sup"
if (context.params.event.content.match(/\bhi Lit-Tech\b|\bhey Lit-Tech\b|\bhello Lit-Tech\b|\bsup Lit-Tech\b/i)) {
 await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: context.params.event.channel_id,
    content: messageContent.join('\n'),
    message_reference: {
      message_id: context.params.event.id
    }
  });
}
