//allows use of require despite the use import in same file
import {createRequire} from "module";
const require = createRequire(import.meta.url);
//import botToken from secure module;
import {botToken} from './tokens.js';

//default starter code for all bots
const Telegraf = require('telegraf');
const bot = new Telegraf(botToken);

//my code
bot.start((ctx)=> {
    ctx.reply(`hello rabbi ${ctx.from.first_name}, welcome to my vinkel veltaleh`);
    // console.log(ctx.from);
    // console.log(ctx.chat);
    // console.log(ctx.message);
    // console.log (ctx.updateSubTypes);
});

bot.help((ctx)=>{
    ctx.reply("You have entered the help command");
});

bot.settings((ctx)=>{
    ctx.reply("You have entered the settings command");
});




//default code to launch bot
bot.launch();