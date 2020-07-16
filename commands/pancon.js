module.exports = {
  name: 'pancon',
  description: 'Pancon',
  execute(message, args) {
    let choice = Math.floor(Math.random() * 10);

    if (choice % 2 === 1) {
      if (message.author.id === '106943665364021248') {
        message.channel.send('Back from the dead are we?');
      } else if (message.author.id === '103716174189039616') {
        message.channel.send('Hello Ed-boy');
      } else if (message.author.id === '104324129632563200') {
        message.channel.send('Ready to take over the auction house?');
      } else if (message.author.id === '107004594483101696') {
        message.channel.send('Ey Jay... Watch this...');
      } else if (message.author.id === '103716260876926976') {
        message.channel.send('Understood.');
      } else if (message.author.is === '114188326285606913') {
        message.channel.send("What lives under a rock? ... COBRA!");
      } else {
        message.channel.send('Peenga');
        console.log(message.author);
      }
    } else {
      message.channel.send('peenga');
    }
  },
};
