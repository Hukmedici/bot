const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
  kod: "unjail",
  async run (client, message, args){

    if(!message.member.roles.cache.get("869718069952512000")){
        const yetki = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setDescription(` ${message.author} **Bu Kodu Kullana Bilmek İçin Yeterli Yetkin Bulunmuyor...** `)
        return message.channel.send(yetki)
   }

   let kullanıcı = message.mentions.members.first();
   kullanıcı.roles.remove('868997478161186907')

   client.channels.cache.get('868997323110375455').send(` **${kullanıcı} Hapisten çıktı** `)

  }
}
