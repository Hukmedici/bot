module.exports = {
  kod: "unmute",
  async run (client, message, args){
    const qdb = require('quick.db');
    const ms = require("ms");
    if(!message.member.roles.cache.get("869737263481880586")){
      return message.reply("yetkin yok");
    }
    var muterole1 = qdb.fetch(`muteroluid_${message.guild.id}`);
var muterole2 = message.guild.roles.cache.find(r => r.id === muterole1);
if (!muterole2) {
    try {

     muterole2 = await message.guild.roles.create({
            data: {
                name: "SUSTURULMUŞ",
                color: "#1800FF",
                permissions: []
              },
            reason: 'Mute Rolü!'
            })

        qdb.set(`muteroluid_${message.guild.id}`, muterole2.id);

        message.guild.channels.cache.forEach(async (channel) => {
            await channel.createOverwrite(muterole2, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false,
                  CONNECT: false
              });
          });

} catch (err) {
    console.log(err);
}

};

var kisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if (!kisi) return message.reply("Susturmasını Açmam İçin Bir Kullanıcı Belirtiniz!");

 if(!kisi.roles.cache.find(r => r.id === muterole2.id)) return message.reply("Kişi Daha Önceden Susturulmamış!")


var reason = args.slice(1).join(" ")

if(reason){
    await kisi.roles.remove(muterole2.id);
    client.channels.cache.get('869601841946689576').send(`${kisi} Susturulması Açıldı!\nNedeni: **${reason}**\nYetkili: **${message.author}**`);
} else {
    await kisi.roles.remove(muterole2.id);
    client.channels.cache.get('869601841946689576').send(`${kisi}Susturulması Açıldı!\nYetkili: **${message.author}**`);
};
  }
}
