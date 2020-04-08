module.exports = {
    name: 'kick',
    description: 'Kick user',
    execute(message, args) {
        const taggedUSer = message.mentions.users.first();

        if (!taggedUSer) {
            message.channel.send(`Nobody was tagged. ${message.author} please tag someone to kick!`)
        } else {
            message.channel.send(`You wanted to kick: ${taggedUSer.username}? Say no more.`)
        }
    }
}