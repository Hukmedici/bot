const Discord = require('discord.js');
const client = new Discord.Client();
const { readdirSync } = require('fs');
const { join } = require('path');
client.commands= new Discord.Collection();

const işaret = require('./ayarlar.json');
var prefix = işaret.prefix

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!kick')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'log-kanalı')
          log.send(`${user.tag} kişisi kicklenmiştir`);
          })
          .catch(err => {
            message.reply('Bunu yapamam.');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
      }
    } else {
      message.reply("Atılacak kişiyi yazmadın");
    }
  }
});

client.on('message', message => {
  if (!message.guild) return;
if (message.content.startsWith('!ban')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'log-kanalı')
          log.send(`${user.tag} kişisi banlanmıştır.`);
          })
          .catch(err => {
            message.reply('Bunu yapamam.');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
      }
    } else {
      message.reply("Yasaklanacak kişiyi yazmadın.");
    }
  }
});

client.on('ready', () => {
	console.log(`Bot sunucuya giriş yaptı ${client.user.tag}!`);
});

client.on('message' , msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send( 'as');
	}
});

client.on('message' , msg => {
  if (msg.content.toLowerCase() === prefix + 'tag') {
    msg.channel.send( '〄');
	}
});

client.on('message' , msg => {
  if (msg.content.toLowerCase() === 'noor') {
    msg.react("🐄")
    msg.channel.send( 'yavşama beğen geç');
	}
});

client.login(process.env.token);
