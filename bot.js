//require('dotenv').config();

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
//const prefix = process.env.PREFIX;
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  //array of arguments without the command
  const args = message.content.slice(prefix.length).split(/ +/);
  //command from the string which should be the first thing in the array
  const commandName = args.shift().toLocaleLowerCase();
  const command = client.commands.get(commandName);

  if (command === undefined) {
    return message.channel.send(
      `You didn't provide any valid commands, ${message.author}!`
    );
  } else if (command.args && !args.length) {
    return message.channel.send(
      `You didn't provide any arguments, ${message.author}!`
    );
  }

  if (!client.commands.has(commandName)) return;

  try {
    command.execute(message, args);
    // console.log(client);
  } catch (error) {
    console.error(error);
    message.reply('There was an error trying to execute that command');
  }
});

client.login(token);
