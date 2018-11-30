let config = {
    'baseUrl': 'https://matrix.org',
    'botUserId': '@gibot3:matrix.org',
    'password': 'chatbot2018!',
    'localStorage': './storage'
};

require('botkit-matrix').MatrixController(config)
.then((controller) => {

    controller.hears(['hi', 'hello'], 'message_received', function (bot, message) {
        bot.reply(message, "Hello, world!");
    });

    controller.hears(['.*'], 'message_received', function (bot, message) {
        bot.reply(message, "Sorry, I can't understand. :(");
    });
});