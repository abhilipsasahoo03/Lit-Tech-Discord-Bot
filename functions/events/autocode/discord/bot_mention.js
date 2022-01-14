// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messageResponse = await lib.discord.channels['@0.0.6'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: [
    `Hey <@!${context.params.event.author.id}>! I'm the Lit-Tech Bot`,
    `You mentioned me in a message, so here I am!`
  ].join('\n'),
  embed: {
    title: 'Guild Information',
    type: 'rich',
    color: 0x00AA00, // Green color
    description: 'Bridging the gap between Literature and Tech!',
    fields: [{
      name: 'Bot maintained by Abhilipsa Sahoo using Autocode',
      value: [
        'Know more about autocode:',
        'https://autocode.com/dashboard/'
      ].join('\n')
    }, {
      name: 'About',
      value: [
        'Know more about LitTech bot at:',
        'https://github.com/abhilipsasahoo03/Lit-Tech-Discord-Bot'
      ].join('\n')
    }]
  },
  tts: false
});

return messageResponse;
