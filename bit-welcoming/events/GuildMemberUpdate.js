const { EmbedBuilder, AttachmentBuilder, Events } = require('discord.js');
const config = require('../../../configs/bit-welcoming/config.json');
const core = require('bit/core');

module.exports = {
    name: Events.GuildMemberUpdate,
    async execute(oldMember, newMember) {
        const client = oldMember.client;
        const guild = oldMember.guild

        if(config.channels.welcome[oldMember.guild.id]) {
            if(guild.roles.cache.get(config.channels.welcome[guild.id].role)) {
                if(oldMember.pending === true && newMember.pending === false) {
                    oldMember.roles.add(config.channels.welcome[guild.id].role, 'User Joined (Discord Verification Respected)')
                }
            }
        }
    }
}