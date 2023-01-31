const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id !== "894987963014983710") return message.channel.send(":no_entry: Bu komutu sadece bot sahibi kullanabilir."); 
  message.channel.send(`Pingim **${client.ws.ping}** !`)


};


exports.conf = {
  aliases: ['p', 'pong', 'uptime',],
  permLevel: 4
};

exports.help = {
  name: 'ping',
  description: 'Botun Pingini Gösterir !',
  usage: 'ping'
};