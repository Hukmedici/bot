module.exports = {
  kod: "rolal",
  async run (client, message, args){
    var rolid = message.mentions.roles.first()
    var kisi = message.mentions.members.first()

    if(!message.member.hasPermission('ADMINISTRATOR')){
      return message.reply("yetkin yok");
    }

    if(!rolid) return message.reply('rol etiketleyin')
    if(!kisi) return message.reply('kisi etiketleyin')

    kisi.roles.remove(rolid)
    return message.channel.send('rol alındı ! alınan rol:' + `${rolid}` , 'kişi: ' + `${kisi}`)
  }
}
