const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const { prefix, official_bymayfe } = require("./config.json");
const AsciiTable = require('ascii-table');
const fs = require("fs");
require('./util/eventHandler.js')(client);
require("discord-buttons")(client)


/////TABLES
var commandtable = new AsciiTable('DarkDays122');
////


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


commandtable.setHeading("Command", 'Status', "Aliases")
fs.readdirSync('./commands').forEach(dir => {
const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const komutcuklar = require(`./commands/${dir}/${file}`);
  if (komutcuklar.help.name) {
  client.commands.set(komutcuklar.help.name, komutcuklar);
  commandtable.addRow(komutcuklar.help.name, "✔️", komutcuklar.conf.aliases)
} else {
  commandtable.addRow(komutcuklar.help.name, "❌")
  continue;
    }
    komutcuklar.conf.aliases.forEach(alias => {
      client.aliases.set(alias, komutcuklar.help.name);
    });
  }
})
console.log(commandtable.toString())


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === official_bymayfe) permlvl = 4;
  return permlvl;
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'prefix') {
    msg.reply('prefix = **oh:(komut)**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'komut sayısı') {
    msg.reply('ban, codehelp, mesajgönder, oylama, ping, sunucu-bilgisi olmak üzere toplamda : **6** adet komut bulunmakta.');
  }
});


client.login(`MTA3MDAwNjg1MjgxOTEwNzg2MA.GMm4nQ.FTNoaFsxLPYkaciOl31yml1wKPeKCXTa6kygE8`);
