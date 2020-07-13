module.exports = {
    name: 'commands',
    description: 'List if commands',
    args: false,
    execute(message) {
      message.channel.send(
        `Current Commands Are: !commands, !freddysnamegenerator, !pancon, !ping, !geh`
      );
    },
  };