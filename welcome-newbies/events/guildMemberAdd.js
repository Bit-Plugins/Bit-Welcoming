const { EmbedBuilder, AttachmentBuilder } = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'guildMemberAdd',
    async execute(member) {
		if(config.welcome[member.guild.id]) {
			const welcome = config.welcome[member.guild.id]
			if(welcome.channel) {
				member.guild.channels.cache.get(welcome.channel).send({ content: welcome.message.replace('{guildName}', member.guild.name).replace('{userMention}', '<@'+member.user.id+'>')})
			} else {
				console.log("Guild "+member.guild.id+" does not have a channel set")
			}
		}
    }
}