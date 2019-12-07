const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: '50000',
            aliases:['50k'],
            group: 'avatar',
            memberName: '50000',
            description: '6.0',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#DAA520')
	.setTitle('50,000 Victories')
    .setImage('https://media-wbp.wgcdn.co/media/filer_public/images/avatar-victories-50000.png')
    .setFooter('Update 6.0, Get 50,000 Victories')
        return message.embed(embed);
    }
};
