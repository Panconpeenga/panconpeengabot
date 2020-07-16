module.exports = {
    name: 'commands',
    description: 'List of commands',
    args: false,
    execute(message) {
      message.channel.send(
        `Current Commands Are: !commands, !freddysnamegenerator, !pancon, !ping, !geh`
      );
    },
  };