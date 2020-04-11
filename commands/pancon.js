module.exports = {
    name: 'pancon',
    description: 'Pancon',
    execute(message, args) {
        let choice = Math.floor(Math.random() * 10);

        if (choice % 2 === 1) {

            if (message.author.id === '106943665364021248') {
                message.reply("hello big leaf")
            } else if (message.author.id === '103716174189039616') {
                message('Hello Ed-boy')
            } else {
                message.channel.send('Peenga')
                console.log(message.author);
            }
        } else {
            message.channel.send('peenga')
        }
    }
}