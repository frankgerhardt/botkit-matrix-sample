const config = require('./config').base;

require('botkit-matrix').MatrixController(config)
.then((controller) => {

    controller.hears(['hi', 'hello'], 'message_received', function (bot, message) {
        bot.reply(message, "Hello, world!");
    });

    controller.hears(['.*'], 'message_received', function (bot, message) {
        bot.reply(message, "Sorry, I can't understand. :(");
    });
}).catch((e) => {
    console.log(e);
});