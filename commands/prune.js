module.exports = {
    name: 'prune',
    description: 'Delete lines!',
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('Hmm... That doesn\'t seem to be a valid number. Try again.')
        } else if (amount <= 2 || amount > 100) {
            return message.reply('Sorry bud, the number needs to be between 2 and 100. Try again.')
        }
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('There was an error trying to prune messages in this channel!')

        });
        message.channel.send(`I cleared ${amount} lines of trash for you!`)
    }
}