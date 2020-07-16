module.exports = {
    name: 'geh',
    description: 'Information about the arguments provided.',
    args: false,
    usage: '',
    execute(message, args) {
        let choice = Math.floor(Math.random() * 10);

        if (choice % 2 === 1) {
            message.channel.send('Hi')
        } else {
            message.channel.send('Hello')
        }
    },
};