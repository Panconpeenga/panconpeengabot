const fetch = require('node-fetch');
const Discord = require('discord.js');
//const querystring = require('querystring');
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

//MEssing with the API 

module.exports = {
    name: 'swapi',
    description: 'Information about the arguments provided.',
    args: false,
    usage: '',
   async execute(message, args) {
 
    try {
       const res = await fetch('https://swapi.dev/api/people/1/')
       const person = await res.json();
       console.log(person);

       const embed = new Discord.MessageEmbed()
          .setColor('#EFFF00')
          .setTitle(person.name)
          .setURL(person.url)
          .addFields(
              { name: 'Homeworld', value: trim(person.homeworld, 1024) },

          );
      
      message.channel.send(embed);
    } catch (error) {
        console.error();
    }
      

    }
};