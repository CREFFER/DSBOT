const Discord = require("discord.js");

const prefix = "-e ";
const role = "-role ";

var hello= [
    "Heya!",
    "Hi!",
    "Hello!",
    "Hey, hope you are are having a wonderful time!",
]

var curseresp = [
    "That is not nice" ,
    "I don't deserve that" ,
    "Case of a dirty mouth, ain't it ",
    "You could just leave you know "
]

var noresp = [
    "Sorry hun, I didn't get that.",
    "Nope.",
    "According to my calculations, you really just speak nonsense.",
    "Not even my equipment can translate that, sorry.",
    "You *WHAT* now?",
    "I might not be as smart as SIRI or CORTANA, but I have pretty good responses, sometimes. Not now though, sorry.",
    "I found no results to the search of 'possible good responses'.",
    "Sorry Dave, I'm afraid I can't do that. Get it? *Refereeeeence*."
]

var bot = new Discord.Client();

//Bot basics
bot.on("ready", function() {
    console.log("Ready");
    bot.user.setActivity("being coded by the tiny dragon");
});

bot.on("message", function(message) 
{
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

//Basic replies
    if (message.author.equals(bot.user)) return;

    if (message.content.startsWith(prefix))
    {
        if (message.content.match(/(^|\W)hi($|\W)/) || message.content.match(/(^|\W)hello($|\W)/) || message.content.match(/(^|\W)hey($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: (hello[Math.floor(Math.random() * hello.length)])
              }});
        }
        else if (message.content.match(/(^|\W)ping($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "Pong!"
              }});
        }
        else if (message.content.match(/(^|\W)no($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "Nope, a-ah."
              }});
        }
        else if (message.content.match(/(^|\W)cigarettes($|\W)/) || message.content.match(/(^|\W)cigarette($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "I have none right now, sorry."
              }});
        }
        else if (message.content.match(/(^|\W)confetti($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "*Throws a bunch of macro-sized confetti in the air*"
              }});
        }
        else if (message.content.match(/(^|\W)Dany is right($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "Little Dany dragon might be small, be he is always right. Always, most of the time..."
              }});
        }
        else if (message.content.match(/(^|\W)goodnight($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "Sweet dreams, dear! Catch you tomorrow!"
              }});
        }
        else if (message.content.match(/fuck/i) || message.content.match(/shit/i) || message.content.match(/bitch/i))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: (curseresp[Math.floor(Math.random() * curseresp.length)]+message.author+".")
              }});
        }
        else if (message.content.match(/(^|\W)drink($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "*Slides " +message.author+ " a cold shot.*"
              }});
        }
        else if (message.content.match(/(^|\W)sweet($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "Oh, "+message.author+" you cheeky...*blushes*"
              }});
        }
        else if (message.content.match(/Who is the best tiny blue dragon/i))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "It's <@!306137710001651713>"
              }});
        }
        else

        switch(command)
        {
        default: //No command
        message.channel.send({embed: {
            color: 3447003,
            description: (noresp[Math.floor(Math.random() * noresp.length)])
          }});
        }
    }
    else if (message.content.startsWith(role))
    {
        if (message.content.match(/(^|\W)micro($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "So tiny, barely visible!"
              }});
        }
        else if (message.content.match(/(^|\W)macro($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "Go big or go home, right?"
              }});
        }
        else if (message.content.match(/(^|\W)changer($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "Can't decide, huh? No shame in that, sweets!"
              }});
        }
    
    }
    else {return}
});

bot.login(TOKEN);
