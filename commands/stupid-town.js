module.exports = {
  name: 'stupid-town',
  description: 'Start up a game of stupid town ',
  args: true,
  execute(message, args) {
    const size = message.mentions.users.size;
    let mafia;
    const command = args.shift();
    let mafiaList = [];
    let townList = [];

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function trim(string) {
      let arr = string.split('');
      arr.pop();

      console.log('array: ');
      console.log(arr);

      arr = arr.slice(3);

      console.log('slice:');
      console.log(arr);

      string = arr.join('');
      return string
    }

    //Record players
    if (command === 'players') {
      if (!message.mentions.users.size) {
        // console.log(command + ' commmand');
        return message.reply('you forgot to tag the players!');
      }
      if (size < 2) {

        return message.channel.send('Sorry bud, you need more players. :/');

      } else if (size <= 6) {

        mafia = 2;
        shuffle(args);

        for (let i = 0; i < mafia; i++) {
          let addMafia = args.shift();
          mafiaList.push(addMafia);
        }

        townList = args;

        console.log('mafia');
        console.log(mafiaList);
        console.log('town');
        console.log(townList);

        //Fill town array
        for (let i = 0; i < townList.length; i++) {
          let id = townList[i];
          id = trim(id);

          townList[i] = id;
          console.log(townList[i]);
          message.client.users.get(townList[i]).send('You are stupid town');

        }
        console.log(townList);

        //Fill mafia array 
        for (let i = 0; i < mafiaList.length; i++) {
          let id = mafiaList[i];
          id = trim(id);

          mafiaList[i] = id;
          console.log(mafiaList[i]);
          message.client.users.get(mafiaList[i]).send('You are stupid mafia');

        }
        console.log(mafiaList);
      } else if (size > 6) {
        mafia = Math.round(size / 3);
      }
    }
  },
};