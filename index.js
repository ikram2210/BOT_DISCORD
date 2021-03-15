const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client();

   bot.on('ready', function ()
   {
      bot.user.setActivity('HelloKitty Online ').catch(console.error)
   });

   bot.on('message', function (message) 
   {
      if (message.content.toLowerCase().includes ( 'bonjour'))
       {
         message.channel.send(`BIENVENUE ${message.author}`)
       }
      if (message.content.toLowerCase().includes ('chaton'))
       {
         message.reply('I <3 Cats !!!')
       }
    });

   bot.on('guildMemberAdd', function (member)
    {
       member.createDM().then(function(channel)
       {
         return channel.send('BONJOUR ET BIENVENUE'+ '' + member.displayName)
       })
      
    })

    bot.on('ready', () =>
    { 
       const channel = bot.channels.cache.get('765188496838230056');
       setInterval(() =>
      {
         channel.send(" @everyone Trop mignon !!!");
      }, 120000);
    });

bot.login(config.BOT_TOKEN);




// setInterval(() => {
//   var monchannel = client.channels.cache.get('765188496838230056');
//  monchannel.send('@everyone' + 'Trop mignon !!!');
//  }, 120000);








  



