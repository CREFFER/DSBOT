const Discord = require("discord.js");

const TOKEN = "NDQzMjE2MDE4MTQwMTY4MjAy.DdN_oQ.DWrzG-f8wS35mzkyNrhAo8hWcZ8";
const prefix = "-Ember ";
const role = "-role ";
const tease = "-tease";

//Greeing
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

//No
var no= [
    "Nope.",
    "Nu-uh.",
    "Nihil.",
    "Nem.",
    "Non.",
]

//Drink
var drink= [
    "*Slides a cold macro-sized shotglass of vodka to* ",
    "*Opens a bottle of cold beer and hands it to* ",
    "*Shakes a cocktail mixer, throws it over her head, pours it out into a glass and slides it to* ",
    "*Rolls a cold can towards* ",
    "*Pours whiskey over a glass of ice cubes and puts it in front of* ",
    "*Puts a straw into a glass of screwdriver and pushes it towards* ",
    "*Pours some gin over glass of iced tonic and places it in fron of* ",
    "*Fills a half-full whiskey bottle to the top with coke and slams it in front of* ",
]

//help me
var helpme= [
    "Nope, no can do.",
    "Not my fight.",
    "Why would I?",
    "I'll let you handle it yourself.",
    "Sorry, there's no way I can assist you.",
]

//Reaction to cursing
var curseresp = [
    "That is not nice ",
    "I don't deserve tha t",
    "Case of a dirty mouth, ain't it ",
    "You could just leave you know ",
    "I don't really tolerate that kind of language, ",
    "Please restrain from using THAT word, ",
]

//Can't understand command
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

//Role macro
var macro = [
    "Go big or go home, right ",
    "Adjusting growth ray equipment...\n*points the machine towards* ",
    "x1, x10, x10^3, x10^6... Your growth data is fascinating, ",
    "I'm measuring a gravitational pull around ",
    "Linear or exponential growth? Time to go big, ",
]


//Role micro
var micro = [
    "*Snickers* \nSo tiny, you are barely even visible, ",
    "I'm sure you don't mind a *tiny experiment*, do you, ",
    "Awesome! Now I get to try the new adjustments on the shrink ray!\n*points it at* ",
    "Mili? Micro? Nano? How about we go smaller, ",
]

//Response to how are you
var how = [
    "*Scribbles on her notes* \nFine, thank you! A bit busy, but otherwise fine!",
    "*Shakes a bottle of microscopic city sample* \nCurrently, fascinated by these tinies!",
    "*Twist a knob on the shrink/growth ray* \nI'm doing okay! Hey, care to test this with me?",
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

        //Hello
        if (message.content.match(/(^|\W)hi($|\W)/) || message.content.match(/(^|\W)hello($|\W)/) || message.content.match(/(^|\W)hey($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: (hello[Math.floor(Math.random() * hello.length)])+message.author+"!"
              }});
        }

        if (message.content.match(/(^|\W)welcome($|\W)/))
        {
            if (!message.mentions.members.first())
            {
                message.channel.send({embed: {
                    color: 3447003,
                    description: "Who should I welcome?"
                  }});
                
            }
            else
            {
            message.channel.send({embed: {
                color: 3447003,
                description: "Hi there, "+message.mentions.members.first()+"! Hope you'll have fun here!"
              }});
            }
        }

        //How are you
        else if (message.content.match(/(^|\W)how are you($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: (how[Math.floor(Math.random() * how.length)])
              }});
        }

        //Ping
        else if (message.content.match(/(^|\W)ping($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "Pong!"
              }});
        }

        //No
        else if (message.content.match(/(^|\W)no($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: (no[Math.floor(Math.random() * no.length)])
              }});
        }
        
        //Useless
        else if (message.content.match(/(^|\W)you are useless($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "*Crosses her arms and puffs her chest*\n Now listen here, "+message.author+"! You don't really do anything else than sitting on this server, typing commands to me *almost all the time* and expect me to understand every single thing you mean! Maybe, just MAYBE, you should think a bit about WHO is being useless here!"
              }});
        }

        //Cigarettes
        else if (message.content.match(/(^|\W)cigarettes($|\W)/) || message.content.match(/(^|\W)cigarette($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "I have none right now, sorry. In fact I don't even smoke."
              }});
        }

        //Confetti
        else if (message.content.match(/(^|\W)confetti($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "*Throws a bunch of macro-sized confetti in the air*"
              }});
        }

        //Help me
        else if (message.content.match(/(^|\W)help me($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: (helpme[Math.floor(Math.random() * helpme.length)])
              }});
        }

        //You are awesome
        else if (message.content.match(/(^|\W)you are awesome($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "*giggles*\n Thank you, "+message.author+"! You are sweet!"
              }});
        }

        //Dany is right
        else if (message.content.match(/(^|\W)Dany is right($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "Little Dany dragon might be small, be he is always right. Always, most of the time..."
              }});
        }

        //Goodnight
        else if (message.content.match(/(^|\W)goodnight($|\W)/) || message.content.match(/(^|\W)good night($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "Sweet dreams! Catch you tomorrow!"
              }});
        }

        //Cheers
        else if (message.content.match(/(^|\W)cheers($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "*winks at* "+message.author
              }});
        }


        //love
        else if (message.content.match(/(^|\W)love($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "Who ME? ...Please, "+message.author+"!"
              }});
        }


        //Who are you
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

            //WHO IS KRYAT
            else if (message.content.match(/(^|\W)who is <@190435762561351680>($|\W)/))
            {
                message.channel.send({embed: {
                    color: 3447003,
                    description: "<@190435762561351680> is our giant parkour tiger, who also makes some sweeeeeet art and comics! You should check them out! \n http://www.furaffinity.net/user/kryat \n http://www.furaffinity.net/user/shibi-comic"
                }});
            }
            
            //WHO IS Danyel
            else if (message.content.match(/(^|\W)who is <@!306137710001651713>($|\W)/))
            {
                message.channel.send({embed: {
                    color: 3447003,
                    description: "<@!306137710001651713>? He is the tiny blue dragon that runs this server. Pesky, tiny, squishy but lovely nonetheless. Oh and he is also an artist! \n http://www.furaffinity.net/user/danyelx/"
                }});
            }
            
            //WHO IS SPWOLF
            else if (message.content.match(/(^|\W)who is <@381580101843812395>($|\W)/))
            {
                message.channel.send({embed: {
                    color: 3447003,
                    description: "You want to know about <@381580101843812395>? He is one of our lovely overseers, all around nice guy, gigantic deer! I technically work for him, but my contract is currently in a specific tiny blue dragon's hands."
                }});
            }

            //WHO IS ROOKTOWERS
            else if (message.content.match(/(^|\W)who is <@288965084167012352>($|\W)/))
            {
                message.channel.send({embed: {
                    color: 3447003,
                    description: "Oh you mean <@288965084167012352>! He is a VERY lovely overseer, true gentleman! Very photogenic and definitely BIG bird! Also an artist! \n http://www.furaffinity.net/user/rooktowers"
                }});
            }
            
            //WHO IS Eth
            else if (message.content.match(/(^|\W)who is <@97732175465553920>($|\W)/))
            {
                message.channel.send({embed: {
                    color: 3447003,
                    description: "<@97732175465553920>? Not much else is known about him other than generally, you know, BEING A GOD? Duh. His size... Let's just say, you'll definitely notice him."
                }});
            }

            //WHO IS Hypo
            else if (message.content.match(/(^|\W)who is <@102300191683510272>($|\W)/))
            {
                message.channel.send({embed: {
                    color: 3447003,
                    description: "<@102300191683510272>? Fun being! He has yet to show us more about himself, but the data I collected about him so far is DEFINITELY fascinating!"
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

        //Drink
        else if (message.content.match(/(^|\W)drink($|\W)/))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: (drink[Math.floor(Math.random() * drink.length)]+message.author+".")
              }});
        }

        //Sweet
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

    //Roles
    else if (message.content.startsWith(role))
    {
        //Micro
        if (message.content.match(/(^|\W)micro($|\W)/))
        {
            let role = message.guild.roles.find("name", "Micro");
            let member = message.member;

            member.addRole(role).catch(console.error);
            
            message.channel.send({embed: {
                color: 3447003,
                description: (micro[Math.floor(Math.random() * micro.length)])+message.author+"!"
              }});
        }

        //Macro
        else if (message.content.match(/(^|\W)macro($|\W)/))
        {
            let role = message.guild.roles.find("name", "Macro");
            let member = message.member;

            member.addRole(role).catch(console.error);
            message.channel.send({embed: {
                color: 3447003,
                description: (macro[Math.floor(Math.random() * macro.length)])+message.author+"!"
              }});
        }

        //Changer
        else if (message.content.match(/(^|\W)changer($|\W)/))
        {
            let role = message.guild.roles.find("name", "Changer");
            let member = message.member;

            member.addRole(role).catch(console.error);
            message.channel.send({embed: {
                color: 3447003,
                description: "Can't decide, huh? No shame in that, sweets!"
              }});
        }

        //Artist
        else if (message.content.match(/(^|\W)artist($|\W)/))
        {
            let role = message.guild.roles.find("name", "Artist");
            let member = message.member;

            member.addRole(role).catch(console.error);
            message.channel.send({embed: {
                color: 3447003,
                description: "Sweet! Can't wait to see what you have to share with us, "+message.author+"!"
              }});
        }

        //Watcher
        else if (message.content.match(/(^|\W)artist($|\W)/))
        {
            let role = message.guild.roles.find("name", "Artist");
            let member = message.member;

            member.addRole(role).catch(console.error);
            message.channel.send({embed: {
                color: 3447003,
                description: "The pleasure of enjoying others' art! Right, "+message.author+"?"
              }});
        }
    
    }

    //TEASING
    else if (message.content.startsWith(tease))
    {  
        
        //Teasing micros
        
        var teased = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!teased)
        {
            var teased = message.member
        }
        var microtease = [
            "*Pinches "+teased+" between her fingers and brings them close to her face*\nNow, what should I do with you, tiny litle rebel, hmm~?",
            "*Stands above "+teased+" and places her hands on her hips, shaking it left and right*\nHey tiny, would you like to play a game of hide and seek~?",
            "*Lifts her foot above "+teased+" and smiles down at them*\nHey little one, let's play a game, I promise you it will be a TON of fun for you! Or who knows, at your size, it might be a bit more~",
            "*Traps "+teased+" under a glass dish and puts her paw on top of it*\nLooks I get to expand my micro sample collection~!",
            "*Takes one of her boots off and holds "+teased+" above it*\nCare to run a little endurance test with me? See ya at the end of the day~!",
            "*Stands on one foot and peels "+teased+" off her sole*\nOh hey! I've been looking for you for a while now~!",
            "*Sits down and closes her feet around "+teased+"*\nI believe in science, open Sesame won't work for you~",
            "*Lays in front of "+teased+" and opens her mouth wide*\nHow about we play some cave exploler~?",
            "*Stomps forcefully around "+teased+" a few times*\nIt's called stress test, ever heard of it, sweets~?",
            "*Stomps down at "+teased+" and traps them between her toes*\nTsk tsk tsk, escaping the test chamber is not nice~",
    
            ]
    
            //Teasing macros
            var macrotease = [
            "*Scatters a bottle of micro-civilisation sample in front of "+teased+"*\nI measure the population data, you just have to make it decrease, okay sweets~?",
            "*Pulls "+teased+" close to a microscope, showing them a small city under it*\nFascinating, isn't it? Don't worry, you are totally allowed to touch that sample~",
            "*Gives "+teased+" a handful of micros*\nWould you like to help me pressure-test this sample~?",
            "*Gives "+teased+" a strange looking device*\nWant to test my reverse ray? You can turn back all the destruction you cause with the pull of a trigger! Supposably. If not, there are many cities we can try new adjustments on~!",
            "*Leads "+teased+" in a teleport chamber*\nSo many civilizations to collect destruction data from, so little time! Where should we start~?",
            "*Gives "+teased+" a handful of micros*\nWould you like to help me pressure-test this sample~?",
            "Medicine time! Open wide, "+teased+"!\n*Places <@!306137710001651713> on their tongue and gently closes their jaw*",
            "*Hands "+teased+" a plastic container of tinies*\nNew flavor, care to try~?",
            "*Leads "+teased+" across a microscopic city*\nFeel that? Yeah, me neither~!",
            "*Passes "+teased+" a few colorful marble like balls*\nPlanets! The shrink ray works pretty well, don't you think so~?",
            "*Pushes "+teased+" over and takes a closer look at their feet*\nOh so THAT'S where that micro sample wandered off!",
            "*Gives "+teased+" a floating solar system ring*\nThe shrink ray works PRETTY good! Don't worry, materialization will keep it together. Finger or toe, your choice~",
            "*Gives "+teased+" a baseball-sized Earth-like planet*\nI trust this will keep you busy for a while? You know... In the name of science~",
            
            ]

        if (teased.roles.find("name", "Micro"))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: (microtease[Math.floor(Math.random() * microtease.length)])
              }});
        }

        else if (teased.roles.find("name", "Macro"))
        {
            message.channel.send({embed: {
                color: 3447003,
                description: (macrotease[Math.floor(Math.random() * macrotease.length)])
              }});
        }
        else
        {
            message.channel.send({embed: {
                color: 3447003,
                description: "I know nothing about them, tell me how to treat them first!"
              }});

        }
    }
    else {return}
    
});

bot.login(TOKEN);
