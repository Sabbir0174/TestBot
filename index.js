const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login('NDI2MDc0OTc0OTM2MjM2MDMz.D2lZSA.aDdnu1rK59RVR5hnrGqaV5ZSe-g');