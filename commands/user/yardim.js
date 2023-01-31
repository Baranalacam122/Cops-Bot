const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let DarkDays122 = "desteksunucusulinki"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Yardım', client.user.avatarURL())
    .setDescription('**Örnek Kullanım:** `!yardım Kategori`\n**Örnek:** `!yardım Genel`\n[DarkDays122 Botunda Hatta Çıkarsa İletişim hattı](https://www.instagram.com/baran._.alacam122/)')
    .addField('Komutlar:', 
    `[!yardım (Yardım menüsü açar)](${`DarkDays122`})
    [!radyo (İstediğiniz radyo frekansını açar)](${`DarkDays122`})
    [!ban (Admin özel)](${`DarkDays122`})
    [!user-pp (Profilinizi gösterir)](${`DarkDays122`})
    [!oylama (Admin özel)](${`DarkDays122`})
    [!codehelp (Kod yardım menüsü açar)](${`DarkDays122`})
    [!mesajgönder (Admin özel)](${`DarkDays122`})
    [!ping (Admin özel)](${`DarkDays122`})
    [İstek komut için Quasar - DarkDays122#3144](${`DarkDays122`})`)
    .addField('» DarkDays122', 
    `Kanalımıza abone olarak bizi destekleyebilirsiniz`)
    .setThumbnail(client.user.avatarURL())
    .setColor("BLUE")
    .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
    message.channel.send(embed)
}
if(args[0] === 'genel' | args[0] === 'eğlence' | args[0] === 'kullanıcı' | args[0] === 'moderasyon' | args[0] === 'moderasyon2' | args[0] === 'yapılandırma' | args[0] === 'sunucu' | args[0] === 'resim' | args[0] === 'nsfw') {
const embed = new Discord.MessageEmbed()
.setAuthor(args[0], client.user.avatarURL())
.setDescription(client.commands.filter(c=>c.conf.kategori === args[0]).map(kmt=>kmt.help.name).join('\:white_small_square: - g!\n ') + '» Linkler\n[Davet Et](https://discord.com) | [Destek Sunucusu](' + codare + ') | [Oy Ver](https://discord.com) | [Web Sitesi](https://discord.com)')
.setThumbnail(client.user.avatarURL())
.setColor("BLUE")
.setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
message.channel.send(embed)
} else {
message.channel.send('Yardım menümüz yukarıda')
}
}

exports.conf = {
    aliases: ['yardim', 'help',]
}
exports.help = {
    name: "yardım"
}