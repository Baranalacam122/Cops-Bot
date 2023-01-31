const Discord = require('discord.js');

exports.run = (client, message, args) => {
 
  message.channel.send(`**Eğer Kod İle Bir Sıkıntı Yaşarsan **`)
  message.channel.send(`**İnstagramdan Mesaj Attın**`)
  message.channel.send(`İnstagramdan Mesaj Attın !`)

};


exports.conf = {
  aliases: ['codehelp', 'kod-yardim'],
  permLevel: 0
};

exports.help = {
  name: 'codehelp',
  description: 'Kullanıcıların sorun yaşadıkları zaman ne yapmaları gerektiğini gösterir !',
  usage: 'codehelp'
};