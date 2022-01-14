const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messageResponse= await lib.discord.channels['@0.0.6'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: [ 
  `< Hey @!${context.params.event.member.user.id}>!`,
  `You just triggered the **/lit-fact** command!`
].join('\n'),
embed: {
  title: 'Have Fun!',
  type: 'rich',
  color: 0x0000AA, // Blue color
  description: 'This Bot is handled by Abhilipsa Sahoo. List of Literary Fact websites: ',
  fields: [{
  name: 'Here are some amazing literary facts you oughta know:',
  value: [
    ' Ten Literary facts!',
    'https://englishbookgeorgia.com/blogebg/ten-amazing-literary-facts-you-should-know/'
  ].join('\n')
  }, {
    name: 'Facts!!!',
    value: [
     'Literary facts to impress your friends with: ',
      'https://www.buzzfeed.com/erinlarosa/20-literary-facts-to-impress-your-friends-with'  
    ].join('\n')
  }]
},
  tts: false
});

return messageResponse;
