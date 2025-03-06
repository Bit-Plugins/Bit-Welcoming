const { EmbedBuilder, AttachmentBuilder } = require('discord.js');
const config = require('../../../configs/bit-welcoming/config.json');
const core = require('bit/core');

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        const client = message.client;
        const guild = message.guild

        if(config.channels.welcome[member.guild.id]) {
            if(config.channels.welcome[guild.id].roleOnJoin === true) {
                if(guild.roles.cache.get(config.channels.welcome[guild.id].role)) {
                    if(config.channels.welcome[guild.id].discordVerification === true) {
                        message.member.roles.add(config.channels.welcome[guild.id].role, 'User Joined (Discord Verification Respected)')
                    }
                }
            }
        }
    }
}