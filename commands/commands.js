module.exports = {
    name: 'commands',
    description: 'List if commands',
    args: true,
    execute(message) {
      message.channel.send(
        `Current Commands Are: !commands, !freddysnamegenerator, !pancon, !ping, !geh`
      );
    },
  };