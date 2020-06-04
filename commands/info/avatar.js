const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AvatarCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'avatar',
      aliases: ['av', 'pfp'],
			group: 'info',
			memberName: 'avatar',
			description: 'Replies with the Avatar from with account provided.',
      args: [
		{
			key: 'mentions',
            prompt: 'Who\'s account avatar do you want?',
            type: "user",
            default: message => message.author
		},
	],
		});
	}

	async run(message, { mentions }) {
        if(!mentions) {
          let sicon = message.author.avatarURL()
		  const embedav1 = new MessageEmbed()
		  .setColor(`#${process.env.EMB_COLOR}`)
		  .setTitle(`${process.env.OS_NAME} | Avatar`)
		  .setDescription(`${message.author}'s Avatar`)
		  .setImage(sicon)
		  .setThumbnail(this.client.user.displayAvatarURL())
		  .setFooter(this.client.user.username, this.client.user.displayAvatarURL());
          message.channel.send(embedav1)
        } else {
          let sicon = mentions.displayAvatarURL()
		  const embedav2 = new MessageEmbed()
		  .setColor(`#${process.env.EMB_COLOR}`)
		  .setTitle(`${process.env.OS_NAME} | Avatar`)
		  .setDescription(`${mentions}'s Avatar`)
		  .setImage(sicon)
		  .setThumbnail(this.client.user.displayAvatarURL())
		  .setFooter(this.client.user.username, this.client.user.displayAvatarURL());
          message.channel.send(embedav2)
		}
	}
};
