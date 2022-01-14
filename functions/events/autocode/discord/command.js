// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let members;
try { 
  members = await lib.discord.guilds['@0.0.6'].members.list({
    guild_id: `${context.params.event.guild_id}`,
    limit: 1000
  });
} catch (e) {
  await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: [
      `Whoops, it seems retrieving the number of members in the guild failed.`,
      `Your bot needs special permission to view the members in your guild.`,
      '',
    ].join('\n')
  });
  throw e;
}

let memberCountText = members.length < 1000 ? members.length : 'over 1000';

let messageResponse = await lib.discord.channels['@0.0.6'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: [
    `Hey <@!${context.params.event.member.user.id}>! I'm the Lit-Tech Bot!.`,
    `There are currently **${memberCountText}** users and bots in this server.`
  ].join('\n'),
  embed: {
    title: 'Information',
    type: 'rich',
    color: 0x0000AA, // Blue color
    description: 'This Bot is handled by Abhilipsa Sahoo',
    fields: [{
      name: 'Interesting fact',
      value: [
        'Here are ten amazing literary facts you oughta know:',
        'https://englishbookgeorgia.com/blogebg/ten-amazing-literary-facts-you-should-know/'
      ].join('\n')
    }]
  },
  
});

return messageResponse;
