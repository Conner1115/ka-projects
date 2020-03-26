var bcs = 0;
var clicks = 0;
var clickable = true;
var hideButton = false;
var messages = [
    "The All-Powerful HTML button",
    "I have capabilities that no JS button has.",
    "I will show them to you and you will surely marvel at the powers I have.",
    "Click once more and you will see just one of my many powers.",
    "Cool, eh?",
    "That was my friend \"Alert\".  You can call him any time you want if you are making a webpage.",
    "All you gotta do is type <code>alert('Hello World');</code>...",
    "and you get this:",
    "Now you can access some of my power.",
    "Let's play hide-and seek.",
    "I have hidden. No, this is not some \"Invisibility\" game when a programmer throws an invisible button at you.  you can't click me.",
    "Oh.  You found out how to get here",
    "Wasn't it cool when I faded in?",
    "That was jquery and I strongly suggest you know it.",
    "They teach it on KA and it is something that goes with html.",
    "Go learn it at once: <a href = 'https://www.khanacademy.org/computing/computer-programming/html-js-jquery'>JQUERY LESSONS</a>",
    "Seriously? I told you to go learn it and you CLICK ME WITHOUT DOING WHAT I TOLD YOU!?!?",
    "I was trying to teach you something good!",
    "Okay.  I get the point.  You want to finish this thing first.",
    "Try clicking my little brother.  when he's through with you, he'll dissapear.",
    "Here He Is:",
    "Okay!",
    "*Slams on the brakes*",
    "Slow down!",
    "Okay.  we're back.  I didn't say anything important.",
    "I want you to meet my other friend.",
    "Her name is \"Prompt\"",
    "She likes to extract information from anyone who happens to use her.",
    "Click to see and use her.",
    "Cool?",
    "Type the code <code>var question = prompt(\"What is your name?\");</code> to ask someone their name.",
    "to get the value of it, jsut use the <code>question</code> variable.",
    "You can use it like this: <code>alert(\"Hello, \"+question);</code>",
    "To get the value from prompt.",
    "Wanna hear some jokes?",
    "Good.  Here's the first one:",
    "Q: What says \"oooooooo\"",
    "A: A cow with no lips",
    "Q: What happened to the gardener when he was so excited that spring came?",
    "A: He wet his plants!",
    "Q: What time is it when an elephant sits on your fence?",
    "A: Time to get a new fence!",
    "Here's a really funny story joke:",
    "Mr.  and Mrs.  Brown have two children/boys.  One is named \"Trouble\" and the other \"Mind-Your-Own-Business\"",
    "One day, the two boys decide to go outside and play hide-and seek.",
    "Trouble was the one who was going to hide and Mind-Your-Own-Business was the one who would look for him.",
    "After about ten minutes of Mind-Your-Own-Business looking for his brother, a policeman comes over.",
    "\"Hey little boy,\" says the policeman, \"What's Your Name?\"",
    "\"Mind-Your-Own-Business\", said Mind-Your-Own-Business.  He had to tell the truth.",
    "The cop grows all red in the face and says, \"Are ya lookin' for trouble?\"",
    "\"Yeah...\", says Mind-Your-Own-Business.",
    "Funny, huh?",
    "No more jokes.  Let me show you some more powerfulness of me.",
    "I need a grammar app to fix mine.  wait while I use it...",
    "No more jokes.  I will reveal to you some more of my power now.",
    "That's better.  It sounds like old english tho.",
    "Oh well.",
    "Alert (my friend) has a message for you.",
    "That was long.",
    "Here's some cool facts about coding:",
    "Did you know that HTML stands for Hyper Text Markup Language?",
    "Did you know that Python is the most popular coding language in the world?",
    "Did you know that I'm made of HTML?",
    "Okay.  You knew that.",
    "Actually, I'm made of HTML, CSS, DOM, and jquery.",
    "Oh.  You knew that too.",
    "Well, I guess we're back to more jokes",
    "Just Kidding.",
    "Get it?",
    "No?",
    "Come on! That was a good joke!",
    "Shut up, Alert",
    "Let me show you some more of my powers.",
    "Ta-da!  You're at the Niagra Falls!",
    "Oops.  forgot to change it.",
    "There we go.",
    "What's that?",
    "Oh.  You're on part of the sky.  Let me get rid of that...",   "Whoops.",
    "Come on...",
    "UUHG!",
    "What is wrong?",
    "Okay.  Fixed.",
    "I mean FIXED",
    "What the-",
    "Okay!  You get the point!  I can change backgrounds too.  Now let me just keep the background white.",
    "That was really tiring for me.  I'm going to rest until you click a hundred times.",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Okay.  I'm good again.",
    "What shall we talk about?",
    "Oh yes!  I can do NIGHT MODE.",
    "Prepping it...",
    "Done!",
    "You can't tell me that it isn't cool.",
    "I will un-download you, alert",
    "Seriously.",
    "ARRGH!  ALerts are BUILT_INTO the computer!!",
    "Okay, Alert.  I will undownload your sister Prompt.",
    "Seriously?",
    "I'm going to sleep.  Prompt and Alert can entertain you.",
    "ZZZ...",
    "I'm up again.",
    "Daytime is arriving!",
    "It's here.",
    "WHY DIDN'T YOU TELL ME EARLIER?????",
    "I had a dream that night mode became day mode and day mode became afternoon mode!",
    "It was AWFUL!!!!",
    "Howabout I show you how I can change color.",
    "I'm Red!",
    "I forgot the base.  Wait a sec...",
    "I AM RED!!!!!!!!",
    "Howabout Green?",
    "Okay.  GREEN!",
    "Now for LeviathanProgramming's Favorite color...",
    "GOLD",
    "Beautiful.",
    "You can have a choice to keep the gold button or to have the classic blue button.",
    "Prompt Will ask you.",
    "The Ultimate Choice...",
    "Okay.  Do you want to see my ULTIMATE state?",
    "Click twenty times.",
    "","","","","",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "THE AWESOMEST THING EVER!!!!",
    "Okay.  back to normal.",
    "You can click me, but I won't let you advance.",
    "I'm getting tired of you clicking me now.  Stop it.",
    "I'm serious.  You want to know what happened to one of my PJS friends named Vernon?",
    "See here:<br><a target = '_blank' href = 'https://www.khanacademy.org/computer-programming/do-not-click-vernon/6008101129437184'><img src = 'https://www.khanacademy.org/computer-programming/do-not-click-vernon/6008101129437184/latest.png'></a>",
    "Did you try and see what happened to him?????",
    "I don't want to die.",
    "Seriously.  Quit.",
    "I'll give you a black hole badge.",
    "Here ya go:<br><img src = 'https://cdn.kastatic.org/images/badges/eclipse-small.png'>",
    "I'll make it bigger.",
    "Wait a sec...",
    "Here: <br><img src = 'https://cdn.kastatic.org/images/badges/eclipse-small.png' width = '150'>",
    "Are you telling me that it's too blurry?",
    "Well it's a png and not an svg graphic so shut up and take it.",
    "You're still clicking me?  Howabout I say Hi to you after you click me 350 times?",
    "I'm going to do it.",
    "starting now.",
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "How could you still be clicking me????",
    "You are such a maniac.",
    "You won't be able to click me now.",
    "How did you do that?",
    "I spent so much power on that thing and you still click me!",
    "You're going to see me when you click a thousand times.  Bye.",
    "",
    "",
    "",
    "Password: \"7500gpr\".split('').reverse();",
    "",
    "",
    "",
    "Okay!  Just kidding.  STOP IT YOU CRAZY THING!",
    "You're going to have to bust my security systems.  Prompt helped me set it up.",
    "Wuuuuutt??",
    "WHYYYYYy?!?!?!?",
    "HOW DID YOU DO THAT???",
    "You know you're crazy.  right?",
    "Stop it at once.",
    "Stop",
    "Stop it",
    "SERIOUSLY!  STOP IT!",
    "You want me to flag your top program?",
    "Oh, and I have evidence, too.",
    "I'm going to do it.",
    "And I'm going to use API.",
    "Here's the code I used to do it:",
    "exoParse() => [user].input => [user].name; Flag(API,[user].topProgram) = true;",
    "How'd you know that it wasn't JS?",
    "That was ANAKonda;  a new coding language that can do cool things.",
    "Why do I keep talking to you?",
    "I'm going to give you a bar that's going to explode when it reaches the maximum.",
    "Here:",
    "It's going to explode you when it's full",
    "Keep on going",
    "Go until it's full.",
    "Yeah!",
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","",
    "Boom!",
    "You exploded!",
    "Oops.  forgot to set the detonator.  Do it again.",
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","", 
    "","","","","","","","","","",
    "Kaboom!!!!!",
    "What is wrong with this thing?",
    "I want to die.",
    "no, I want <em>YOU</em> to die.",
    "Die at once!",
    "No?",
    "still alive?",
    "You know I loathe your very existance.  Right?",
    "Do you hate me?",
    "That's a yes",
    "Well why don't you just let alert tell you a story?",
    "",
    "Did you like it?",
    "Alert's pretty funny and good.",
    "You want to die?",
    "I knew it. No.",
    "I want to kill you.",
    "But I can't with html.",
    "Hmmm...",
    "",
    "That's just the thing!",
    "Thank you, Alert!  That was the first good idea you cam up with today!",
    "Yeah.<br>Okay, human.  Time to annoy ya to death.",
    "What do you call a chicken with no feathers?",
    "Ready to eat",
    "What do you call a button that's turned off?",
    "a buttoff",
    "get it?",
    "No?",
    "That was a lame joke.",
    "Well actually, the point of that was to annoy you.  why did I just say that?",
    "what do you call a human that keeps pressing buttons?",
    "a clicker",
    "what do you call a human that is so annoying in pressing me that they won't stop and I get so mad and... and...",
    "and almost BLOWS ME UP????",
    "You.",
    "Simply you.  no more.",
    "What?  you don't have the right to be mad at me when you click me this much.",
    "I'm going to dissapear.",
    "Poof!",
    "How are you accessing my power without me existing?",
    "What are you doing to me?",
    "Why are you doing this?",
    "Thanks for clicking this!",
    "To be continued.  Maybe.  That is if I have the time.",
    "To be continued.  Maybe.  That is if I have the time.",
    "To be continued.  Maybe.  That is if I have the time.",
    "To be continued.  Maybe.  That is if I have the time.",
    "To be continued.  Maybe.  That is if I have the time.",
    "How could you not have been fooled by that?",
    "It was a good trick.",
    "Still clicking me?",
    "UUUGGH!  why are humans so stubborn?",
    "Why?",
    "WHYYYYYYYYYYY????????",
    "wait... humans aren't stubborn.  YOU ARE!",
    "Okay.  I'll come back to you.",
    "Poof",
    "How did you do that?  I disabled myself?",
    "I'll storm you with emojis",
    "😠😡😤",
    "😬😁😝😛🤑🤓",
    "😖😫😩😣😱😨🤐😲😵",
    "😲🤐😷 <-- Corona Virus Masky for you",
    "Are you still not satisfied that I gave you a free mask?", "🤒🤕😴😈👿👹👺 <I'm Mr. Kabuki Man",
    "👽🤖😺😼😾👎👅👀",
    "👣👞👟🎩🎓🕶",
    "🐶🐱🐻🐼🐨🐷🐮🐙🦁🐯🙊",
    "🐍🐡⌚️📱📸🔫⚔☠️☠️☠️⚗",
    "📛⛔️🚷🔞🚱🚳🚯📵💢♨️⭕️",
    "⚠️🌐♻️〽️🔇🔊🃏🔔🔕👁‍🗨🎴🇲🇽",
    "⚽︎⚾︎✃✂︎✁✒︎☺︎☹♞♝",
    "Chess!  ♚♜♘♗♖♕♔♟♞♝♙",
    "Poker ♥︎♣︎♠︎♦︎♤♧♡♢",
    "STOP CLICKING ME!",
    "I'll make you do coding push-ups!",
    "°/''''''''''\\",
    "That was supposedly you.",
    "You know what?  I'm mean so I'll change it to...",
    "😩/''''''''''\\ <--that's you",
    "Still clicking me huh?",
    "I will not let you click me (the button) anymore.  you'll have to click the text forever.",
    "I'm going to have Alert annoy you to death.",
    "That should stop you for a while",
    "I'm annoying you to death",
    "Yeah, Alerty!  keep it up!",
    "This is so fun.",
    "No, clicking the text is not fun.  annoying you is fun.",
    "repeat after me:",
    "\"I will stop clicking the button\"",
    "\"I will stop clicking the button\"",
    "\"I will stop clicking the button\"",
    "\"I will stop clicking the button\"",
    "\"I will stop clicking the button\"",
    "\"I will stop clicking the button\"",
    "Yeah. keep repeating",
    "\"I will stop clicking the button\"",
    "\"I will stop clicking the button\"",
    "\"I will stop clicking the button\"",
    "\"I will stop clicking the button\"",
    "\"I will stop clicking the button\"",
    "This is the best fun I've ever had with you.  Keep those reps going!",
    "\"I will stop clicking the button\"",
    "\"I will stop clicking the button\"",
    "\"I will stop clicking the button\"",
    "\"I will stop clicking the button\"",
    "\"I will stop clicking the button\"",
    "Annoying you is fun.",
    "Oh yeah!",
    "I'm feeling kinda guilty...",
    "Okay.  everything back to normal.",
    "I'm really surprised you are still doing this.",
    "Impressive patience.",
    "I have a feeling that I'm not going to die.",
    "Actually, you clicking me isn't that bad.",
    "I am a button and was created that way.",
    "So really the point of my existence is for people to click me.",
    "Go ahead.  Click all you want.  I'm fine with that.",
    "Oh yeah.  Now I don't feel guilty.",
    "I feel good.",
    "Sorry when I was having bad feelings against you.",
    "Keep up the clicks.",
    "Hey human.  This button program was a contest entry...",   "...and in this program is a contest.",
    "See how many times you can click me before running out of patience.",
    "Post your amount in the t&t",
    "the winner will recieve a prize",
    "and that prize is...",
    "...",
    "I forgot.",
    "Oh well.  Just do it.",
    "I wish you a good time when you're doing it.",
    "The clicking contest starts...",
    "NOW!",
    "What?",
    "Oh.",
    "I-- well the truth is...",
    "that there is no prize.",
    "It was a prank.",
    "I just wanted them to click me.",
    "Oh well.  I'll let 'em do it if they want to and if not, then it's okay.",
    "Click on, human!<br><br>The End (for real)",
];

var changeBackground = function(v){
    $("body").css("background",v)
};
$("#lb").hide()
$("#button")
.on("mousedown",function(){
    $("#button").css({
        animation:"pulse 0.05s 1",
        animationFillMode:"forwards",
    })
    $("#button-graphics").css({
        animation:"pulse-2 0.05s 1",
        animationFillMode:"forwards",
    })})
.on("mouseup",function(){
    $("#button").css({
        animation:"n 0.00000001s 1",
        animationFillMode:"forwards",
    })
    $("#button-graphics").css({
        animation:"n-2 0.00000001s 1",
        animationFillMode:"forwards",
    })
})
.on("click",function(){
    if(clickable){
    $("#clicks").html(clicks)
    clicks++;
    }
    if(clicks === 4){
alert("I am an all-powerful button");
}
    if(clicks === 8){
alert("Hello World");
    }
    if(clicks === 10){
        hideButton = true;
        
        $("h2").on("click",function(){
            $("#clicks").html(clicks);
            clicks++;
            if(clicks === 11){
        hideButton = false;
    }
        })
        
    }
    if(clicks === 20){
        hideButton = true;
        $("#lb").show();
        $("#lbs").on("click",function(){
            $("#bcs").html(bcs);
            bcs++;
            if(bcs > 50){
                $("#lb").hide();
                clicks++;
                hideButton = false;
            }
        })
    }
    if(clicks === 29){
        var p = prompt("Hello.  Would you mind so much as to give me your Khan Academy Username?");
        alert("Thank you, "+p);
    }
    if(clicks === 58){
        alert("Hello.  I am Alert.  I have a message for you.");
        alert("Ya know, It's nice chatting with you.");
        alert("I live in your computer.");
        alert("Actually, I live in like evryone's computer.");
        alert("Do you remember how to use me?");
        alert("If not, reload the webpage and do it.");
        alert("Bye.  Over and out.")
    }
    if(clicks === 66){
        var pr = prompt("Sorry to interrupt your experience with Blue Button, but I need to confirm that it's you using this.  Please, your email address");
        if(pr === ""){
            pr = prompt("Sorry to interrupt your experience with Blue Button, but I need to confirm that it's you using this.  Please, your username");
        }
        if(pr.length < 4){
            pr = prompt("That isn't a valid username.  Please, your full username");
        }
        else{
            pr = prompt("Is this your username? Yes or No?");
            if(pr === "Yes"||pr === "yes"){
                alert("thank you.")
            }else{
                pr = prompt("That isn't a valid username.  Please, your full username");
            }
        }
    }
    if(clicks === 71){
        alert("that joke was really cheesy")
    }
    if(clicks === 75){
        $("body").css("background","url(https://www.kasandbox.org/programming-images/landscapes/waterfall_niagara-falls.png)");
    }
    if(clicks === 78){
        $("body").css("background","red");
    }
    if(clicks === 79){
        $("body").css("background","blue");
    }
    if(clicks === 80){
        $("body").css("background","green");
    }
    if(clicks === 81){
        $("body").css("background","salmon");
    }
    if(clicks === 82){
        $("body").css("background","white");
    }
    if(clicks === 83){
        $("body").append("<img id = 'silly' src = 'https://www.khanacademy.org/computer-programming/asdf-carrots/5946270116216832/5649050225344512.png' style = 'position:absolute;top:0px;left:0px;width:100%;z-index:1;'>")
    }
    if(clicks === 85){
        $("body").css("background","white");
        $("#silly").remove();
    }
    if(clicks === 103){
        $("body").css("background","black");
        $("h1").css("color","white");
        $("h2").css("color","white");
    }
    if(clicks === 104){
        $("#button-base-l").css("box-shadow","0px 0px 100px 100px rgb(41, 255, 159,0.5)");
        $("#button-base-r").css("box-shadow","0px 0px 100px 100px rgb(43, 138, 255,0.5)");
        $("h2").css("color","white");
    }
    if(clicks === 106){
        alert("So Uncool.")
    }
    if(clicks === 110){
        alert("Prompts are built into computers, too.")
    }
    if(clicks === 112){
        alert("Hello!  Your entertainer(s) are here!");
        var q = prompt("What is your name?");
        alert("Why hello, "+q);
        var d = prompt("What is your problem?");
        alert("What do you mean, sis?");
        alert("You know that's not nice to ask a human.  right?");
        alert("Oops, sorry human.  Let me have a private conversation with the embarrassing prompt.");
        alert("*whisper whisper*");
        alert("okay.  we're good now.");
        var o = prompt("what are you thinking right now?");
        alert("I know a magic trick.  I can read your mind.");
        alert("I know what you were thinking about 30 seconds ago.");
        alert("You were thinking about "+o+"\nDid I get it right?");
        var g = prompt("On a scale of 1-10, how will you rate the awesomeness of your entertainers?");
        if(g <= 4){
            alert("Only "+g+"!?!?\nWe were pretty good!")
        }if(g > 4 && g <= 7){
            alert("You didn't rate us a ten? *sniff*")
        }if(g > 7&&g <= 10){
            alert("Yay!  We're the best entertainers.  right?");
        }if(g > 10){
            alert("I can't believe you rated us over ten!!!  We are now awesome!")
        }
        alert("Let's wake button up now.");
        alert("1-2-3 WAKE UP!!!!!!!!");
    }
    if(clicks === 113){
        alert("wake up...please...")
    }
    if(clicks === 115){
        $("body").css("background","white");
        $("h1").css("color","black");
        $("h2").css("color","black");
        $("#button-base-l").css("box-shadow","none");
        $("#button-base-r").css("box-shadow","none");
    }
    if(clicks === 116){
        alert("You know I was joking about the night mode being uncool. Right?")
    }
    if(clicks === 120){
        $("#button").css({
            background:"rgb(255, 0, 85)"
        });
        $("#button-graphics").css("background","rgb(133, 9, 40)")
    }
    if(clicks === 122){
        $("#button-base-l").css({
            background:"rgb(242, 44, 110)"
        });
        $("#button-base-r").css({
            background:"rgb(194, 17, 76)"
        });
    }
    if(clicks === 124){
        $("#button").css({
            background:"rgb(28, 189, 114)"
        });
        $("#button-graphics").css("background","rgb(9, 133, 84)");
        $("#button-base-l").css({
            background:"rgb(0, 166, 58)"
        });
        $("#button-base-r").css({
            background:"rgb(29, 153, 78)"
        });
    }
    if(clicks === 126){
        $("#button").css({
            background:"linear-gradient(45deg,rgb(138, 104, 18),rgb(255, 213, 0),white,rgb(255, 213, 0),rgb(138, 104, 18))"
        });
        $("#button-graphics").css("background","linear-gradient(90deg,rgb(138, 104, 18),rgb(255, 213, 0),rgb(255, 213, 0),rgb(255, 213, 0),rgb(255, 213, 0),rgb(255, 213, 0),white,rgb(255, 213, 0),rgb(138, 104, 18))");
        $("#button-base-l").css({
            background:"rgb(212, 181, 23)"
        });
        $("#button-base-r").css({
            background:"rgb(168, 135, 37)"
        });
    }
    if(clicks === 130){
        var h = prompt("If you want to keep the gold button, enter \"g\".  If you like the classic blue one, enter \"b\"");
        if(h === "b"){
            $("#button").css({
            background:"linear-gradient(45deg, rgb(0, 115, 255),rgb(67, 159, 230),rgb(0,115,255))"
        });
        $("#button-graphics").css("background","rgb(47, 92, 181)");
        $("#button-base-l").css({
            background:"rgb(34, 189, 176)"
        });
        $("#button-base-r").css({
            background:"rgb(18, 150, 139)"
        });
        }
    }
    if(clicks === 152){
        $("#button").css("animation",'rainbow 10s infinite');
        $("#button-graphics").css("animation","rainbow 12s infinite")
    }
    if(clicks === 153){
        $("#button").css("animation","none")
        $("#button-graphics").css("animation","none")
    }
    if(clicks === 154){
        clickable = false;
        $("#button-base-l").on("click",function(){
            alert("Here's a hint: click \"click\" to advance your clicks or your clicker will click & die.");
            clicks ++;
            clickable = true;
        })
    }
    if(clicks === 523){
        clickable = false;
        $("body").append("<div id = 'u-c'><img src = 'https://www.khanacademy.org/computer-programming/asdf-carrots/5946270116216832/5649050225344512.png' style='width:98%;position:absolute;top:0px'><input id = 'dink' style = 'border:solid rgb(248, 247, 250) 1px; outline:none;position:relative;top:-30px;'></div>");
        $("img").on("click",function(){
          
            clicks ++;
            clickable = true;
            $("#u-c").hide();
     
        })
    }
    if(clicks === 524){
        clickable = true;
    }
    if(clicks === 536){
        var j = prompt("Enter Password to continue your game");
        if(j === "rpg0057"){
            alert("Enjoy your game");
        }else{
            alert("Wrong!");
            j = prompt("Enter Password to continue your game");
            if(j === "rpg0057"){
            alert("Enjoy your game");
        }else{
            alert("Wrong!");
            j = prompt("Enter Password to continue your game");
        }
        }
    }
    if(clicks === 554){
        $("body").append("<progress style = 'position:absolute;top:100px;left:100px;width:400px;' id = 'p1' value = '0' max = '100'></progress>");
        
    }
    if(clicks === 656){
        $("body").append("<progress style = 'position:absolute;top:100px;left:100px;width:400px;' id = 'p2' value = '0' max = '100'></progress>");
        
    }
    $("#p2").val(clicks-656);
    $("#p1").val(clicks-554);
    if(clicks === 767){
        alert("Hello.  This is your entertainer again!");
        var c = confirm("Are you smart? press \"okay\" for 'yes' or press \"cancle\" for a 'no'.");
        if(c === true){
            alert("what's 1+1?  Every time when you have the right answer in your head, press okay.");
        }else{
            alert("well then;  I should be able to defeat you in this game easily then.  what's 1+1?  once you have the answer in your head, press \"okay\"")
        }
        alert("what's 2+2?");
        alert("what's 25 x 2?");
        alert("what's 36/3 + 21 x 4?");
        alert("what's the first question I asked you?");
        alert("If you got \"Are You Smart.\", you are right.  If you got \"What's 1+1\", you are wrong.")
    }
    if(clicks === 775){
        alert("you can annoy the person to death.");
    }
    if(clicks === 778){
        alert("I came up with some pretty good ideas that you SLEPT through.,")
    }
    if(clicks === 795){
        hideButton = true;
        $("h1").on("click",function(){
            clicks++;
            if(clicks === 813){
        hideButton = false;
        clickable = false;
    }
        })
    }
    if(clicks === 813){
        hideButton = false;
        clickable = false;
    }
    if(clicks > 839&&clicks < 868){
        alert("I'm  annoying you!");
    }
    if(clicks > 868){
        clickable = true;
    }
    /*
    "What?",
    "Oh.",
    "I-- well the truth is...",
    "that there is no prize.",
    "It was a prank.",
    "I just wanted them to click me.",
    "Oh well.  I'll let 'em do it if they want to and if not, then it's okay.",
    */
    if(clicks === 891){
        alert("Wait!");
    }
    if(clicks === 892){
        alert("You forgot to tell the human what the prize is.")
    }
    if(clicks === 895){
        alert("Why'd you tell them that there is one then?");
    }
    if(clicks === 896){
        alert("It's illegal to lie to a human.")
    }
});



//the draw function in DOM
setInterval(function(){
    //makes sure the clicks go properly
    $("#clicks").html(clicks);
    if(hideButton){
        $("#entire-b").hide();
    }else{
        $("#entire-b").fadeIn();
    }
    $("#message").html(messages[clicks]);
    
    
},10);
