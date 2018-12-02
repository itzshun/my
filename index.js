const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require(`./config.json`);

bot.login(config.token)

bot.on("message", message=> {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
   
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
   
    let args = message.content.split(" ").slice(1);
    // The list of if/else is replaced with those simple 2 lines:
   
    try {
      let commandFile = require(`./comandos/${command}.js`);
      commandFile.run(bot, message, args);
    } catch (err) {
      console.error(err);
    }});