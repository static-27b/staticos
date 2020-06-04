const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const config = require('../../config.json')

module.exports = class InviteCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'invite',
      aliases: ['inv'],
			group: 'info',
			memberName: 'invite',
			description: 'Invite this bot!',
		});
	}

	async run(message) {
    const embed = new MessageEmbed()
    .setTitle('🎉✨ | Invite Me!')
    .setAuthor(`${this.client.user.username} | ${this.client.user.id}`, this.client.user.displayAvatarURL())
    .setDescription('You called sir? You wanted an Invite? Sure!')
    .setThumbnail(this.client.user.displayAvatarURL())
    .addField('Click on the title of this embed!', `Or click [here!](${config.invite})`)
    .setColor(`#${process.env.EMB_COLOR}`)
    .setImage(this.client.user.displayAvatarURL())
    .setFooter(this.client.user.username, this.client.user.displayAvatarURL())
    .setURL(`${config.invite}`);
    message.embed(embed);
	}
};