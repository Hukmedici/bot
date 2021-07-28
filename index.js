const Discord = require('discord.js')
const client = new Discord.Client()
const { readdirSync } = require('fs');
const { join } = require('path');
const qdb = require('quick.db');
const ms = require("ms");

client.commands= new Discord.Collection();

const prefix = "!"

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command);
}

client.on("error", console.error);

client.on('ready', () => {
	console.log(`Bot sunucuya giriş yaptı ${client.user.tag}!`);
});

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return message.channel.send(`Komut dosyamda **${command}** adlı bir komut bulamadım.`);


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.on('message' , msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send( 'as');
	}
});
client.on('message' , msg => {
  if (msg.content.toLowerCase() === 'noor') {
    msg.react("🐄")
    msg.channel.send( 'yavşama beğen geç');
	}
});

client.on("message",message=>{
    if(message.content==`<@!${client.user.id}>`) return message.channel.send(`Prefixim : **${prefix}**`);
})

client.login('token')
