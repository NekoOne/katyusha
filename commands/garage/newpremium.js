const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class camoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'premium',
            aliases:[],
            group: 'garage',
            memberName: 'premium',
            description: 'The New Premium Garage',

            ownerOnly: false,
            guildOnly: true
        });
    }

    run(message) {
		const embed = new RichEmbed()
		.setColor('#DAA520')
	.setTitle('Premium Garage')
    .setImage('https://media.giphy.com/media/l4ocB7NAGvjg1IOJOK/giphy.gif')
    .setFooter()
        return message.embed(embed);
    }
};
