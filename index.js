const Discord = require("discord.js");

const prefix = "-Ember, ";
const role = "-role ";

var hello= [
    "Heya, ",
    "Hi, ",
    "Hello, ",
    "Hey, hope you are are having a wonderful time, ",
    "Hiiii, ",
    "Welcome, ",
    "Hi, how's it hanging, ",
    "How goes it, ",
]

var curseresp = [
    "That is not nice ",
    "I don't deserve tha t",
    "Case of a dirty mouth, ain't it ",
    "You could just leave you know ",
    "I don't really tolerate that kind of language, ",
    "Please restrain from using THAT word, ",
]

var noresp = [
    "Sorry hun, I didn't get that.",
    "Nope.",
    "According to my calculations, you really just speak nonsense.",
    "Not even my equipment can translate that, sorry.",
    "You *WHAT* now?",
    "Something must be up with the connection, I didn't quite catch that!",
    "I might not be as smart as SIRI or CORTANA, but I have pretty good responses, sometimes. Not now though, sorry.",
    "I found no results to the search of 'possible good responses'.",
    "Sorry Dave, I'm afraid I can't do that. Get it? *Refereeeeence*.",
]

var macro = [
    "Go big or go home, right ",
    "Adjusting growth ray equipment...\n *points the machine towards* ",
    "x1, x10, x10^3, x10^6... Your growth data is fascinating, ",
    "I'm measuring a gravitational pull around ",
    "Linear or exponential growth? Time to go big, ",
]

var micro = [
    "*Snickers* \n So tiny, you are barely even visible, ",
    "I'm sure you don't mind a *tiny experiment*, do you, ",
    "Awesome! Now I get to try the new adjustments on the shrink ray!\n *points it at* ",
    "Mili? Micro? Nano? How about we go smaller, ",
]

var bot = new Discord.Client();

//Bot basics
bot.on("ready", function() {
    console.log("Ready");
    bot.user.setActivity("with the tiny blue dragon");
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
                description: (hello[Math.floor(Math.random() * hello.length)])+message.author+"!"
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
        else if (message.content.match(/(^|\W)help me($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "Not my fight."
              }});
        }
        else if (message.content.match(/(^|\W)you are awesome($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "*giggles*\n Thank you, "+message.author+"! You are sweet!"
              }});
        }
        else if (message.content.match(/(^|\W)Dany is right($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "Little Dany dragon might be small, be he is always right. Always, most of the time..."
              }});
        }
        else if (message.content.match(/(^|\W)goodnight($|\W)/) || message.content.match(/(^|\W)good night($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "Sweet dreams! Catch you tomorrow!"
              }});
        }
        else if (message.content.match(/(^|\W)cheers($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "*winks at* "+message.author
              }});
        }
        else if (message.content.match(/(^|\W)love($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "Who ME? ...Please, "+message.author+"!"
              }});
        }
        else if (message.content.match(/(^|\W)who are you($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "My name is Ember, "+message.author+". It literally say right there, silly!"
            }});
        }

        //WHO AM I
            else if (message.content.match(/(^|\W)who am I($|\W)/))
            {
                message.channel.send({embed: {
                    color: 3447003,
                    description: "Why, you are "+message.author+" silly!"
                }});
            }

        //SWEARING
        else if (message.content.match(/ass/i) || message.content.match(/shit/i) || message.content.match(/fuck/i)
         || message.content.match(/cunt/i) || message.content.match(/bitch/i) || message.content.match(/fucker/i))
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
                description: "Oh, "+message.author+" you cheeky... \n *blushes*"
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
                description: (micro[Math.floor(Math.random() * micro.length)])+message.author+"!"
              }});
        }
        else if (message.content.match(/(^|\W)macro($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: (macro[Math.floor(Math.random() * macro.length)])+message.author+"!"
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
