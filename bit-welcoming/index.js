const core = require("bit/core");
const { GatewayIntentBits } = require('discord.js');

module.exports = {
    define_intents: function define_intents() {
        core.add_intent(GatewayIntentBits.MessageContent)
        core.add_intent(GatewayIntentBits.GuildMembers)
    }
}