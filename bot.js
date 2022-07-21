const Telegraf = require('telegraf');

const bot = new Telegraf('BotTokenGoesHere');

//code goes here

bot.start((ctx)=> {
    ctx.reply(`hello rabbi ${ctx.from.first_name}, welcome to my vinkel veltaleh`);
    console.log(ctx.from);
    console.log(ctx.chat);
    console.log(ctx.message);
    console.log (ctx.updateSubTypes);
});

bot.help((ctx)=>{
    ctx.reply("You have entered the help command");
});

bot.settings((ctx)=>{
    ctx.reply("You have entered the settings command");
});

bot.launch();