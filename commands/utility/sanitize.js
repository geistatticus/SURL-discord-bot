const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sanitize')
        .setDescription('removes all characters after "?"')
        .addStringOption(option =>
            option
                .setName('link')
                .setDescription('The URL to sanitize.')
                .setRequired(true))
                
            .addBooleanOption(option =>
                option
                    .setName('embed')
                    .setDescription('Whether or not the link should be embedded')),
        
    async execute(interaction) {
        let embed = interaction.options.getBoolean('embed')
        let dirtyLink = interaction.options.getString('link');
        
        cleanLink = dirtyLink.split('?');

        if (embed == false){
            await interaction.reply('Link sanitized for ' + interaction.member.displayName + ': <' + cleanLink[0] + '>');
        }
        else{
            await interaction.reply('Link sanitized for ' + interaction.member.displayName + ': ' + cleanLink[0]);
        }
    }
};