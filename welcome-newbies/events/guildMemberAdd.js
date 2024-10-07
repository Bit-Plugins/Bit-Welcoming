const { EmbedBuilder, AttachmentBuilder } = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'guildMemberAdd',
    async execute(member) {
        if(Array.isArray(config.welcome)) {
            if(member.guild.id instanceof config.welcome) {
                const welcome = config.welcome[member.guild.id]

                if(welcome.channel) {
                    guild.channels.cache.get(welcome.channel).send({ message: welcome.message.replace('{guildName}', member.guild.name).replace('{userMention}', '<@'+member.user.id+'>')})
                }
            }
        }
    }
}