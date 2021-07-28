module.exports = {
  kod: "kick",
  async run (client, message, args) {
    const args1 = message.content.split(' ').slice(2)
    const neden = args1.join(" ")
    const { MessageEmbed } = require('discord.js')
    const user = message.mentions.users.first();
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
            const kickk = message.guild.channels.cache.find(channel => channel.name === 'kick-kanalı')
            const embed = new MessageEmbed()
              .setTitle('Kick')
              .setDescription('Olay: Kick')
              .addField('Kişi:' , member)
              .addField('Neden:' , neden)
              kickk.send(embed)
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
    };

  }
}
