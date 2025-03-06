const { EmbedBuilder, AttachmentBuilder } = require('discord.js');
const config = require('../../../configs/bit-welcoming/config.json');
const core = require('bit/core');

module.exports = {
    name: 'guildMemberAdd',
    async execute(member) {
		if(config.channels.welcome[member.guild.id]) {
			const welcome = config.channels.welcome[member.guild.id]
			
			if(welcome.channel) {
				if(welcome.message) {
					member.guild.channels.cache.get(welcome.channel).send({ content: welcome.message.replace('{guildName}', member.guild.name).replace('{userMention}', '<@'+member.user.id+'>')})
				} else {
					core.log(1, "Bit: Welcoming", false, "Guild "+member.guild.id+" does not have a message set!")
				}
			} else {
				core.log(1, "Bit: Welcoming", false, "Guild "+member.guild.id+" does not have a channel set!")
			}
		}
    }
}