const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../config.json')

module.exports = client => {

console.log("Bot Hazır");

var randomMesajlar = [

    "Quasar - DarkDays122#3144",
    "İnsta @Baran._.alacam122"
]




setInterval(function() {
    var randomMesajlar1 = randomMesajlar[Math.floor(Math.random() * (randomMesajlar.length))]
    client.user.setActivity(`${randomMesajlar1}`);

}, 2 * 200);

client.user.setStatus("idle");
/*
idle yerine yazılabilecekler

dnd 
idle
online
ofline

*/


}