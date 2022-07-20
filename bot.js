const Telegraf = require('telegraf');

const bot = new Telegraf('botTokenGoesHere');

//code goes here

bot.start((ctx)=> {
    ctx.reply('hello veltaleh');
});

bot.help((ctx)=>{
    ctx.reply("You have entered the help command");
});

bot.settings((ctx)=>{
    ctx.reply("You have entered the settings command");
});

bot.launch();