module.exports = {
  kod: "yaz",
  async run (client, message, args) {
    let mesaj = args.slice(0).join(' ');
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
}
  }
