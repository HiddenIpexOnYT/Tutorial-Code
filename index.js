require('dotenv').config();
const { Client, MessageEmbed } = require('discord.js');
const bot = new Client();

const prefix = '!'; //You can make this whatever you want.

bot.on('ready', () => {
    console.log(`${bot.user.tag} is online!`);
});

bot.on('message', async message => {
    if (message.author.bot || !message.content.startsWith(prefix) || !message.guild) return; //If the message author is a bot, or the message doesn't start with a prefix or isn't in the guild, it will return.

    const args = message.content.slice(prefix.length).split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pinging...').then(msg => {
            const embed = new MessageEmbed()
            .setTitle('Pong!')
            .setDescription(`Pong!\nLatency is: ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nAPI Latency: ${Math.round(bot.ws.ping)}`)
            .setColor(`RED`)
            .setFooter(`This is a tutorial bot.`, bot.user.displayAvatarURL());
            msg.edit(embed);
            msg.edit("\u200B");
        })
    }
})

bot.login(process.env.token); //Bot logs in.