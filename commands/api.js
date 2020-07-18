const fetch = require('node-fetch');
const Discord = require('discord.js');
//const querystring = require('querystring');
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
const secret_key = '$2b$10$uiWfcEAkGwcMaE7FXRrNPOUlMaAAVUu2CtzpLziEBxYRWCJP8NED2';
const get_url = 'https://api.jsonbin.io/b/5f123fb0918061662843b4be/latest';
const put_url = 'https://api.jsonbin.io/b/5f123fb0918061662843b4be';

//MEssing with the API 

module.exports = {
    name: 'api',
    description: 'Information about the arguments provided.',
    args: false,
    usage: '',
   async execute(message, args) {
 
    if (args[0] === "GET"){
        
    
    
    try {
       const req = await fetch(get_url, {method: 'GET', headers: {'secret-key': secret_key}} )
       const res = await req.json();
      // console.log(person);



       console.log(res);




      message.channel.send(res.stupid_mafia.length());
    } catch (error) {
        console.error();
    }
} else if (args[0] === "PUT"){
    try {
        
         const req = await fetch(get_url, {method: 'GET', headers: {'Content-Type':'application/json','secret-key': secret_key}} )

         let data = await req.json()
         
        // console.log(data);

         //console.log(JSON.stringify(data));
        
         let town = data.town;

         town.push('town2');


         const put_req = await fetch(put_url, {method: 'PUT', headers: {'Content-Type':'application/json','secret-key': secret_key, 'versioning': 'false'}, body: JSON.stringify(data)} )

         const put_res = await put_req.json()



            console.log(put_res);

    } catch (error) {
        console.error(error);
    }

}
      

    }
};


//const embed = new Discord.MessageEmbed()
//.setColor('#EFFF00')
//.setTitle(person.stupid)
//.setURL(person)
//.addFields(
//    { name: 'Homeworld', value: trim(person.homeworld, 1024) },
//
//);



//try{
//    const req = await fetch('https://api.jsonbin.io/b/5f123fb0918061662843b4be/5', {method: 'PUT', headers: {'Content-Type':'application/json','secret-key': secret_key}, body: person} )
//
//    const res = await req.json()
//    
//    let town = res.town;
//
//    town.push('town2');
//
//    console.log(res);
//
//    return res;} catch(error){console.error(error);}