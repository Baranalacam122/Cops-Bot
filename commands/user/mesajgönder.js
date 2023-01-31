const Discord = require('discord.js');

exports.run = (client, message, args) => {
 
  message.channel.send(`@everyone **Lütfen Kurallara Uyun !**`)


};


exports.conf = {
  aliases: ['m', 'msg', 'mesajgönder',],
  permLevel: 4
};

exports.help = {
  name: 'mesajgonderme',
  description: 'Botun Pingini Gösterir !',
  usage: 'mesajgönder'
};