module.exports = {
  kod: "rolver",
  async run (client, message, args){
    var rolid = message.mentions.roles.first()
    var kisi = message.mentions.members.first()

    if(!message.member.hasPermission('ADMINISTRATOR')){
      return message.reply("yetkin yok");
    }

    if(!rolid) return message.reply('rol etiketleyin')
    if(!kisi) return message.reply('kisi etiketleyin')

    kisi.roles.add(rolid)
    return message.channel.send('rol verildi ! verilen rol:' + `${rolid}` , 'kişi: ' + `${kisi}`)
  }
}
