module.exports = {
  kod: "unban",
  async run (client, message, args){
    let id = args[0]
    if (!message.member.hasPermission('ADMINISTRATOR')) return;
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) return;
    if (isNaN(id)) return message.reply('Geçerli bir ID giriniz');
    message.guild.fetchBans().then(ban => {
      if (ban.size == 0) return message.reply('Yasaklı kimse yok');
      const banlanan = ban.find(b => b.user.id === id)
      if (!banlanan) return message.channel.send(' Bu kişi yasaklı değil');
      message.guild.members.unban(banlanan.user)
      message.reply('Yasak kalktı')
    })
  }
}
