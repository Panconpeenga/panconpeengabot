module.exports = {
    name: 'freddysnamegenerator',
    description: 'Information about the arguments provided.',
    args: false,
    usage: '',
    execute(message, args) {
        let choice = Math.floor(Math.random() * 6);

        if (choice === 0) {
            message.channel.send('TwistedMyFate')
        } else if (choice === 1) {
            message.channel.send('SpankyFranky')
        } else if (choice === 2) {
            message.channel.send('Fuck You Freddy')
        } else if (choice === 3) {
            message.channel.send('Mr.Understood')
        } else if (choice === 4) {
            message.channel.send('Runscape Player')
        } else if (choice === 5) {
            message.channel.send('Putricia')
        }
    },
};