module.exports = (e, webhook) => {
    const os = require('os');

    const { Webhook, MessageBuilder } = require('discord-webhook-node');
    const hook = new Webhook(webhook);
    
    function osDetect() {
        if (os.type() == 'Darwin') return 'MacOS';
        if (os.type() == 'Windows_NT') return 'Windows';
        if (os.type() == 'Linux') return 'Linux';
    }

    const embed = new MessageBuilder()
        .setTitle('`' + e.name + ': ' + e.message + '`')
        .setColor('#00b0f4')
        .setDescription('```js\n' + e.stack + '\n```')
        .addField('Device OS', osDetect() + ' ' + os.release(), true)
        .setTimestamp();
 
    hook.send(embed);
};