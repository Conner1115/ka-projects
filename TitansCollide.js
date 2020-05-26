

    document.getElementById("corner-logo").addEventListener("click",function(){
        alert("Sub here: https://www.khanacademy.org/computer-programming/subscribe-to-leviathan-programming/5097726407229440")
    });
    
         var processing_js = function(processingInstance) {
     with (processingInstance) {
        size(600, 600); 
        frameRate(50);
        smooth();
        textFont(createFont("Orbitron"));
        textAlign(CENTER);
        rectMode(CENTER);
        
        var ang = function(a){
            return a*(PI/180);
        };
        //game components
        {
        //variables
        {
        var ach = 1;
        var achievements = [];
        var a = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var showA = true;
        var sub = false;
        var money = 100;
        var health = 100;
        var wave = 0;
        var mouseIsClicked = false;
        var keyIsPressed = false;
        var keyIsReleased = false;
        var scene = "menu";
        var trackType = -1;
        var enemies = [];
        var dead = [];
        var bullets = [];
        var keys = [];
        var towers = [];
        var towerSpots = [];
        var particles = [];
        var showMenu = false;
        var allowWaveStart = false;
        var gap = 10;
        var waveString = "";
        var ws = waveString.split('');
        var enemyNum = 0;
        var sp = 1;
        var kills = 0;
        var eT = " 0123456789abcdefghijz".split('');
        var waveCounts = [
            " ",
            "0   0   0   0   0   0   0   0   0   0",
            "0  0  0  0  0  0  0  0  0  0",
            "1  1  1  1  1  1  1  1  1  1",
            "1  0  1  0  1  0  1  0  1  0  1  0  1",
            "2     2     2     2     2",
            "0  1  2  0  1  2  0  1  2  0  1  2",
            "01 20 12 01 20 12 01 20 12 43",
            "234234234",
            "01234012340123401234",
            "3333333333  2222222222",
            "33333333332222222222",
            "5",
            "222220     0    0   0  0 0  0   0    0     0",
            "01230123012301230123          44444          5",
            "54  32  10  01  23  45",
            "5  5  5  5  5",
            "6",
            "12345012345012345012345",
            "6  5  6  5",
            "0  1  2  3  4  5  6  6  6",
            "7",
            "8",
            "7 0 6 1 8",
            "0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 5 5 5 6 6 7 7 8",
            "8 1 8 0 8 1 8 0 8 2 2 2 2 2 5 6 5 6 5 6 7 7 7",
            "a",
            "a00000a000001111122222333334444455555",
            "a111151111a111161111a11118",
            "0123456789a",
            "111111111111     00000000000     2222222222     444444444     33333333     5  5  5  5  5",
            "6   6   6   6   6   6   6     8 8 8 8 8     a a a a   b",
            "b  b  b  b  b  b  b  b  b  b",
            "a  b  a  b  a  b",
            "d  e  d  e  d  e  d  e  d  e",
            "f  f  f  f  f",
            "f00f00f00f00f00f00f00f00f00f",
            "g fffff",
            "0 1 2 3 4 5 6 7 8 a b c d e f 0 1 2 3 4 5 6 7 8 a b c d e f 0 1 2 3 4 5 6 7 8 a b c d e f 0 1 2 3 4 5 6 7 8 a b c d e f",
            "01 23 45 67 8 ab cd ef 01 23 45 67 8 ab cd ef 01 23 45 67 8 ab cd ef 01 23 45 67 8 ab cd ef 01 23 45 67 8 ab cd ef",
            "0123 4567 8abc defg  0123 4567 8abc defg  0123 4567 8abc defg  0123 4567 8abc defg  0123 4567 8abc defg  0123 4567 8abc defg",
            "ffffffffffffffffffff",
            "ggggg 55555 66666 eeeee fffff",
            "iiiii iiiii iiiii",
            "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff",
            "eeeeeeeeeeddddddddddccccccccbbbbbbbbbb",
            "a1b2c3d4e5f6g7 7g6f5e4d3c2b1a  a1b2c3d4e5f6g7 7g6f5e4d3c2b1a",
            "e 1 f 1 2 g 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8",
            "8 0 0 8 0 0 8 0 0 8 0 0 8 0 0 8 0 0 8 0 0 8 0 0 8",
            "5 3 6 3 5f 3 6 3 f5 3 6 3 5 3f 6 3 5 3f 6 3 fffffffff",
            "8 3 6 3 8 3 6 3 8 3 6 3 8 3 6 3 8 3 6 3 8 3 6 3",
            "8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8",
            "888888888888888888888876543218765432187654321",
            "i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i",
            "565656565656656  0 0 0 0 565656565656565656 0 0 0 0 56565656565656",
            "9 1234567812345678",
            "987654321987654321987654321",
            "abcdefg123456789abcdefg123456789abcdefg123456789",
            "j",
            "abcdefgi123456789 987654321igfedcba 12345678987654321123456789",
            "j 123456789abcdefgi",
            "abc acb acb abc abc def def def 12345678901234567890  j",
            "h",
            "56565g656gg5656j56565g6556565g65656j565g",
            "gggggggggg eeeeeeeeee ffffffffff aaaaaaaaaa 8989898989",
            "fffffffffffffffffff 0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 ffffffffff",
            "hg  hg  hg ffffffffff",
            "00i00i00i00i00i00i00i00i00i00i00i00i00i00i j",
            "jiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiij",
            "hahaha i beed 00 99999",
            "9999999999 0 0 0 0 0 0 0 0 0 0 9999999999 0 0 0 0 0 0 0 0 0 0",
            "aaaaaaaaaagggggbbbbbbbbbb5555666666898989",
            "jjhhjj99889977gghghg0",
            "1234567890abcdefghij1234567890abcdefghij1234567890abcdefghij9999999999",
            "8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888",
            "09876543211234567890987654321234567890",
            "abcdefghijabcdefghijabcdefghij",
            "1234567890abcdefghij1234567890abcdefghij1234567890abcdefghij",
            "9898989898989898989898989898989898989898989898",
            "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffjffffffffffffffffffffffffffffff",
            "g0g0g0g0g0g0g0g0g0g0g0g0g0g0g0g0g0g0g0g0g0g0g0ffffffffff8989898989",
            "giigiigiigiigiigiigiigiigiigiigiigiigiigiig8998998998998998998",
            "jjjjj",
            "hhhhh",
            "098765432112345678909876543212345678909876543212345678909876543212345678909876543212345678987654321234567890987654321234567890987654321",
            "abcdefghijijij9j9j9j9j9j9j9j9j9j9j9j9j9j",
            "j",
            "gggggggggg",
            "999999999999999999999999999999",
            "hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh",
            "jiijiijiijiijiijiijiijiijiij",
            "jihji9ji8jigjifji1ji4ji3ji5j",
            "ggggg234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234234",
            "hghghghghghghghghghghghghghghghghg",
            "9494949494949494949494949494949494",
            "ffffffffff4444343434343434343344343433434",
            "gggggggggg010101010101010101010101010101010101010101010101010101010101010101010101010101010101010",
            "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
            "9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999",
            "00000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjj",
            "0",
        ];
        var waveMessage = [
            
            "We are at the second continent in Orbitron B here.  Good thing we were lucky enough to\nbe able to even use that titanuim.  Well, I guess it's time for some combat.  I can\n                                                                   see five titans coming.  Don't forget to build\n                                                                   your towers before you start the wave.",
        "Nice fight you put up there.  You did a great job.  I have no more money to give you but you\ncan earn money from killing titans!  Be sure to stratigize your tower layout\n                                                                   and attack strategy.",
        "There is a new type a-comin'!  They are faster.",
        "Both types are approaching.  Don't forget to move your towers around!",
        "I have but one word to say to you: UPGRADE",
        "New type coming!  Watch out!  This one can shoot and damage your towers!",
        "Watching you is like watching a movie.",
        "What's your favorite tower you used?",
        "I guess I should stop spammin' you.",
        "Oops!  forgot to tell you that there was two new enemies last time.  Well there is one this time.",
        "Which is worse? Titans or Orbitronians?",
        "AAH! There is a huge blue mech coming this time!",
        "Whew!  That thing was strong!",
        "Oh another one is coming with a lot of other thingies...",
        "I know why this game's called \"Titans Collide\"!  They're bumping heads\nagainst each other!",
        "Five blue mechs coming.  Please don't fail.",
        "Wait-- There is something even bigger than the blue mechs coming...",
        "That thing was some crazy monster!",
        "These are going to be hard--harder than Orbitronians.",
        "I was wondering if we'll ever get to conquer this planet.",
        "With you, maybe yes.",
        "An UFO!  We're DEAD!  It's moving in at a surprisingly fast speed!",
        "There's a new thingy--It looks friendly.",
        "That Brute Is Not Friendly!",
        "Lots of da stuff.",
        "Mechs, Splitters, and UFOs make a bad combination.",
        "Hey look!  a racecar that is slow as a turtle!",
        "Kill the cars fast!  They are dangerous!",
        "Three racecars!",
        "On the first holiday of orbitron my false love gave to me...",
        "Twelve Speedy Aliens, Eleven slower basics, Ten Annoying shooters,\nNine Crazy Snipers, Eight Red Blasters, Seven Giant Mechs...",
        "Six Red Destroyers, FIVE SPLITTING THINGIES, Four Slow racecars...\nAnd a Forcefielded Alien on the ground!  ...What?",
        "Yeech!  The forcefield-titans are strong!  There are ten coming.",
        "Buy the Bomber if you want real results!",
        "That is if you haven't used up all your tower spots.",
        "Forcefielded Shooters A-Comin'!",
        "Super-fast aliens with a yellow forcefield.  Something seems weird...\nI hate to BURST your BUBBLE, but these don't seem like they can be killed easily.",
        "Ten Yellow-Shields Approaching!",
        "Why is there a GLASS MECH that is SUPER FAST!?!?!?",
        "A swarm of stuff arriving!",
        "Lots more aliens but only the one's you've seen before.",
        "Simillar to last time",
        "Again, a lot--but a lot more",
        "A lot of the super-slow racecars coming.",
        "Wait--Are they jamming our radars?  They fed us a loop!",
        "There are no enemies in this wave... ...wait... I'm picking up an infared-signal\nbut I see nothing.  Shoot at the air and hope to kill them.",
        "Lots of aliens",
        "Going to sleep now...",
        "zzz",
        "zzz",
        "zzz",
        "zzz",
        "zzz",
        "Okay.  I'm up",
        "Still the same enemies?  They must be getting bored.",
        "Lots of invisible ones!",
        "MECHS!!!!!",
        "There's one that looks like the splitting one but bigger.",
        "OHMYGOSH!  It was a mega-splitter!  So dangerous.",
        "",
        "Wait--What's that?  I think they're sending their LEADER!! It's about 250ft tall and THREE\nTIMES AS BIG as even the red MECH!",
        "What?  They still didn't give up?",
        "Again they're sending that huge yellow mech!  That is NOT their leader.",
        //whnt
        "Have you noticed that it spawns enemies?",
        "Just another wave... wait.. why is there a glassy-looking racecar?",
        "Wow.  You beat that.  Now let's see what's coming...",
        "*faints*",
        "AAh!  I had a nightmare!  There were hundreds of mechs!\nOh.  It happened?",
        "*looks at radar* *barfs* *faints again*",
        "Ooh... I barfed on the radar...  Now I don't know what's coming cuz I...\nI think I broke it.",
        "Don't blame me!  I didn't see them!",
        "I'm trying to clean the radar, okay?",
        "*wipes radar*",
        "Oh drats... I wiped the radar with a wet wipe",
        "Fzzz-Zaapp!!  The radar blew up on me.",
        "Lemme fix this... hold on and fight",
        "Hope you're holding up well...",
        "Okay!  Fixed!  Yikes!  What have you been going through?",
        "Zappity-Crack!  Oh drats.  It died AGAIN!",
        "Holdin' up well still?",
        "Good",
        "I have nothing to say for a while.",
        "","","","","","","","","","","","","",
        "Hey bud.  Whatsup?",
        "Aliens?  Okay.",
        "Lots of ghost-cars ahead!",
        "There are like ten yellow mechs coming.",
        "You got to wave 200!  You win!",
        "Oh yeah... except for that guy.",
        "You won for real now!",
        ];
        
        }
        //track
        {
        var track = [
            [0,50],
            [300,50],
            [300,150],
            [100,150],
            [100,250],
            [400,250],
            [400,50],
            [550,50],
            [550,350],
            [50,350],
            [50,500],
            [300,500],
            [300,650]
        ];
        var Track = function(){
            
        };
        Track.prototype.draw = function(){
            strokeCap(SQUARE);
            strokeWeight(30);
            stroke(100);
            noFill();
            beginShape();
            for(var i = 0; i < track.length; i++){
                vertex(track[i][0],track[i][1]);
            }
            endShape();
            noStroke();
        };
        var TRACK = new Track();
        }
        //particle systems
        {  
            var P = function(x,y,t){
                this.x = x;
                this.y = y;
                this.type = t;
                this.op = 100;
                this.dead = false;
                switch(this.type){
                    
                }
            };
            P.prototype.draw = function(){
                switch(this.type){
                    case 0:
                    fill(random(150,200),random(100,150),0,this.op)
                    rect(this.x,this.y,5,5)
                    break;
                    case 1:
                    case 2:
                    fill(100,this.op)
                    rect(this.x,this.y,5,5)
                    break;
                }
            };
            P.prototype.move = function(){
                switch(this.type){
                    case 0:
                    this.op-=5;
                    this.y-=random(10);
                    break;
                    case 1:
                    this.op-=2;
                    this.x+=random(3);
                    this.y-=random(5);
                    break;
                    case 2:
                    this.op-=2;
                    this.x-=random(3);
                    this.y-=random(5);
                    break;
                    case 3:
                    this.op-=2;
                    this.x-=random(3);
                    this.y+=random(5);
                    break;
                    case 4:
                    this.op-=2;
                    this.x+=random(3);
                    this.y+=random(5);
                    break;
                }
                if(this.op <= 0){
                    this.dead = true;
                }
            };
        }
        //bullets
        {   
        var Bullet = function(x,y,type,d,D,p){
            this.x = x;
            this.y = y;
            this.dir = d;
            this.width = 5;
            //the damage done to an enemy
            this.damage = D||0;
            //the damage the bullet will do to a tower
            this.Tdamage = 0;
            this.DOT = 0;
            this.slow = 0;
            this.pierce = p||1;
            this.speed = 5;
            this.type = type;
            this.dead = false;
            switch(this.type){
                //enemy bullets
                case 0:
                this.Tdamage = 2;
                this.speed = 5;
                break;
                case 1:
                this.Tdamage = 3;
                this.speed = 7;
                break;
                case 2:
                this.Tdamage = 5;
                this.speed = 30;
                break;
                case 3:
                this.Tdamage = 7.5;
                this.speed = 30;
                break;
                //tower bullets
                case "Basic":
                this.speed = 20;
                break;
                case "Rapid":
                this.speed = 15;
                break;
                case "Power":
                this.speed = 30;
                break;
                case "Slow":
                this.speed = 10;
                this.slow = 0.1;
                break;
                case "Poison":
                this.speed = 30;
                this.DOT = 0.025;
                break;
                case "Stun Blaster":
                this.speed = 30;
                this.DOT = 0.01;
                this.slow = 0.05;
                this.width = 100;
                break;
                case "Blasticon":
                this.speed = 1;
                this.pierce = 5;
                this.slow = -0.1;
                this.pierce = 5;
                break;
                case "Bomber":
                this.speed = 20;
                this.r = 1;
                break;
                case "Tesla":
                this.speed = 5;
                this.slow = 5;
                break;
                case "Flamethrower":
                this.speed = 10;
                break;
                case "Sniper":
                this.speed = 40;
                this.pierce = 5;
                break;
                case "Ultra":
                this.speed = 40;
                this.DOT = 0.005;
                this.pierce = 2;
                break;
            }
        };
        Bullet.prototype.draw = function(){
            switch(this.type){
                case 0:
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(0,255,255);
                strokeWeight(1);
                rect(0,0,2,15);
                popMatrix();
                break;
                case 1:
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(255,0,0);
                strokeWeight(1);
                rect(0,0,2,15);
                popMatrix();
                break;
                case 2:
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(0,255,255);
                strokeWeight(2);
                rect(0,0,8,25,10);
                popMatrix();
                break;
                case 3:
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(255,0,0);
                strokeWeight(2);
                rect(0,0,8,25,10);
                popMatrix();
                break;
                case 4:
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(255,255,0);
                strokeWeight(2);
                rect(0,0,10,40,10);
                popMatrix();
                break;
                case "Basic":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(0,255,255);
                strokeWeight(1);
                rect(0,0,2,15);
                popMatrix();
                break;
                case "Rapid":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(255,0,0);
                strokeWeight(1);
                rect(0,0,2,15);
                popMatrix();
                break;
                case "Power":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(0,255,255);
                strokeWeight(5);
                rect(0,0,2,15);
                popMatrix();
                break;
                case "Slow":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(0,0,255);
                strokeWeight(5);
                rect(0,0,2,15);
                popMatrix();
                break;
                case "Poison":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(0,255,0);
                strokeWeight(5);
                rect(0,0,2,15);
                popMatrix();
                break;
                case "Doublo":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(255,0,0);
                strokeWeight(2);
                rect(0,0,2,15);
                popMatrix();
                break;
                case "Quad":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(255,255,0);
                strokeWeight(2);
                rect(0,0,2,15);
                popMatrix();
                break;
                case "Stun Blaster":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(0,255,0);
                strokeWeight(2);
                rect(0,0,100,5,10);
                popMatrix();
                break;
                case "Blasticon":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(255,0,0);
                strokeWeight(3);
                rect(0,0,5,20,10);
                popMatrix();
                break;
                case "Bomber":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(255,0,0);
                strokeWeight(5);
                rect(0,0,20,20,10);
                popMatrix();
                break;
                case "Tesla":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(255,255,0);
                strokeWeight(5);
                rect(0,0,random(20),random(20),10);
                popMatrix();
                break;
                case "Flamethrower":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(random(100,200),random(50,150),0,random(0,255));
                strokeWeight(5);
                ellipse(0,0,5,5,10);
                popMatrix();
                break;
                case "Sniper":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(0,255,0);
                strokeWeight(5);
                rect(0,0,5,30,10);
                popMatrix();
                break;
                case "Ultra":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(255,180,0);
                strokeWeight(5);
                rect(0,0,5,30,10);
                popMatrix();
                break;
                case "Switcher":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(255);
                stroke(random(0,255),random(0,255),random(0,255),random(0,255));
                strokeWeight(random(10));
                rect(0,0,random(20),random(20),10);
                popMatrix();
                break;
            }
        };
        Bullet.prototype.move = function(){
            if(this.dir === 0){
                this.y-=this.speed;
            }
            if(this.dir === 1){
                this.x+=this.speed;
            }
            if(this.dir === 2){
                this.y+=this.speed;
            }
            if(this.dir === 3){
                this.x-=this.speed;
            }
            for(var i = 0; i < enemies.length; i++){
                var e = enemies[i];
                if(e.poisoned){
                    e.health-=this.DOT;
                }
                if(this.x+this.width/2 > e.x-e.width/2&&this.x-this.width/2 < e.x+e.width/2&&this.y > e.y-e.height/2&&this.y < e.y+e.height/2&&e.killable){
                    
                    if(e.dead !== true){
                        if(this.DOT > 0){
                            e.poisoned = true;
                        }
                e.health-=this.damage/2;
                e.speed-=this.slow;
                
                //makes sure the enemy's speed doesn't go negative.
                if(e.speed <= 0.1){
                    e.speed = 0.1;
                }
                this.pierce--;
                if(this.pierce <= 0){
                    this.dead = true;
                    if(this.type === "Switcher"){
                        e.type = floor(random(0,19));
                    }
                }
                
                if(e.health <= 0){
                    e.dead = true;
                }
                    }
                }
            }
            for(var i = 0; i < towers.length; i++){
                var t = towers[i];
                if(this.x > t.x-25&&this.x < t.x+25&&this.y > t.y-25&&this.y < t.y+25){
                    if(t.dead !== true){
                    t.health-=this.Tdamage;
                    this.dead = true;
                    if(t.health <= 0){
                        t.dead = true;
                    }
                    }
                }
                
            }
            if(this.type === "Flamethrower"){
                if(frameCount % 1 === 0){
                    particles.push(new P(this.x+random(-20,20),this.y+random(-20,20),0))
                }
            }
        };
        }
        //enemies
        {  
        var Enemy = function(x,y,type,cp){
            this.trackNum = cp||0;
            this.x = x;
            this.y = y;
            this.dir = 0;
            this.type = type;
            
            this.health = 10;
            this.maxHealth = 10;
            this.speed = 1;
            this.maxSpeed = 1;
            this.fireRate = 0;
            this.damage = 1;
            this.killable = true;
            this.width = 30;
            this.height = 30;
            this.poisoned = false;
            this.reward = 5;
            
            this.aVar = 0;
            this.dead = false;
            
            //animation variables
            this.d = 1;
            
            switch(this.type){
                case " ":
                this.health = 50;
            this.maxHealth = 50;
            this.speed = 1;
            this.maxSpeed = 1;
            this.fireRate = 0;
            this.damage = 0;
            this.killable = true;
            this.width = 0;
            this.height = 0;
            this.poisoned = true;
            this.reward = 0;
                break;
                case "1":
                this.speed = 2;
                this.maxSpeed = 2;
                this.width = 30;
                this.height = 30;
                this.reward = 5;
                break;
                case "2":
                this.width = 30;
                this.height = 30;
                this.speed = 1.5;
                this.maxSpeed = 1.5;
                this.health = 40;
                this.maxHealth = 40;
                this.fireRate = 200;
                this.damage = 2;
                this.reward = 10;
                break;
                case "3":
                this.width = 30;
                this.height = 30;
                this.speed = 1;
                this.maxSpeed = 1;
                this.health = 50;
                this.maxHealth = 50;
                this.fireRate = 50;
                this.damage = 1;
                this.reward = 10;
                break;
                case "4":
                    this.width = 30;
                this.height = 30;
                this.speed = 3;
                this.maxSpeed = 3;
                this.health = 25;
                this.maxHealth = 25;
                this.fireRate = 100;
                this.damage = 3;
                this.reward = 20;
                break;
                case "5":
                    this.width = 60;
                this.height = 60;
                this.speed = 0.5;
                this.maxSpeed = 0.5;
                this.health = 250;
                this.maxHealth = 250;
                this.fireRate = 100;
                this.damage = 10;
                this.reward = 30;
                break;
                case "6":
                    this.width = 80;
                this.height = 80;
                this.speed = 0.5;
                this.maxSpeed = 0.5;
                this.health = 500;
                this.maxHealth = 500;
                this.fireRate = 200;
                this.damage = 20;
                this.reward = 50;
                break;
                case "7":
                this.width = 80;
                this.height = 80;
                this.speed = 2.5;
                this.maxSpeed = 2.5;
                this.health = 100;
                this.maxHealth = 100;
                this.fireRate = 0;
                this.damage = 10;
                this.reward = 20;
                break;
                case "8":
                    this.width = 60;
                this.height = 60;
                this.speed = 2;
                this.maxSpeed = 2;
                this.health = 350;
                this.maxHealth = 350;
                this.fireRate = 0;
                this.damage = 5;
                this.reward = 25;
                break;
                case "9":
                    this.width = 90;
                this.height = 90;
                this.speed = 0.5;
                this.maxSpeed = 0.5;
                this.health = 750;
                this.maxHealth = 750;
                this.fireRate = 0;
                this.damage = 10;
                this.reward = 30;
                break;
                case "a":
                    this.width = 80;
                this.height = 80;
                this.speed = 0.25;
                this.maxSpeed = 0.25;
                this.health = 500;
                this.maxHealth = 500;
                this.fireRate = 100;
                this.damage = 10;
                this.reward = 100;
                break;
                case "b":
                    this.width = 60;
                this.height = 60;
                this.speed = 0.5;
                this.maxSpeed = 0.5;
                this.health = 500;
                this.maxHealth = 500;
                this.fireRate = 0;
                this.damage = 20;
                this.reward = 125;
                break;
                case "c":
                    this.width = 60;
                this.height = 60;
                this.speed = 1;
                this.maxSpeed = 1;
                this.health = 450;
                this.maxHealth = 450;
                this.fireRate = 0;
                this.damage = 30;
                this.reward = 50;
                break;
                case "d":
                    this.width = 30;
                this.height = 30;
                this.speed = 2;
                this.maxSpeed = 2;
                this.health = 300;
                this.maxHealth = 300;
                this.fireRate = 100;
                this.damage = 20;
                this.reward = 75;
                break;
                case "e":this.width = 30;
                this.height = 30;
                this.speed = 3;
                this.maxSpeed = 3;
                this.health = 250;
                this.maxHealth = 250;
                this.fireRate = 50;
                this.damage = 20;
                this.reward = 40;
                break;
                case "f":
                    this.width = 30;
                this.height = 30;
                this.speed = 5;
                this.maxSpeed = 5;
                this.health = 50;
                this.maxHealth = 50;
                this.fireRate = 0;
                this.damage = 10;
                this.killable = false;
                this.reward = 25;
                break;
                case "g":
                    this.width = 30;
                this.height = 30;
                this.speed = 3;
                this.maxSpeed = 3;
                this.health = 700;
                this.maxHealth = 700;
                this.fireRate = 50;
                this.damage = 20;
                this.reward = 200;
                break;
                case "h":
                    this.width = 100;
                this.height = 100;
                this.speed = 0.5;
                this.maxSpeed = 0.5;
                this.health = 750;
                this.maxHealth = 750;
                this.fireRate = 75;
                this.damage = 30;
                this.reward = 100;
                break;
                case "i":
                    this.width = 30;
                this.height = 30;
                this.speed = 2;
                this.maxSpeed = 2;
                this.health = 250;
                this.maxHealth = 250;
                this.fireRate = 0;
                this.damage = 20;
                this.reward = 500;
                break;
                case "j":
                    this.width = 60;
                this.height = 60;
                this.speed = 1;
                this.maxSpeed = 1;
                this.health = 2000;
                this.maxHealth = 2000;
                this.fireRate = 250;
                this.damage = 500;
                this.reward = 1000;
                break;
            }
        };
        Enemy.prototype.draw = function(){
            noStroke();
            switch(this.type){
                case "0":{
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(80);
                noStroke();
                rect(-7,0+this.aVar,8,20);
                rect(7,0-this.aVar,8,20);
                fill(100);
                rect(0,0,30,20,10,10,5,5);
                fill(120);
                rect(-10,-3,10,10,10);
                rect(10,-3,10,10,10);
                fill(80);
                rect(-18,7,7,15+this.aVar,0,0,5,5);
                rect(17,7,7,15+this.aVar,0,0,5,5);
                arc(0,-10,15,7,0,ang(180));
                fill(0,200,200);
                arc(0,-10,10,5,0,ang(180));
                fill(100);
                rect(-18,2,7,10,5,0,0,5);
                rect(17,2,7,10,0,5,5,0);
                fill(80)
                rect(0,7,25,3);
                rect(-18,4,7,3);
                rect(17,4,7,3);
                this.aVar+=this.d;
                if(this.aVar > 7){
                    this.d = -1;
                }
                if(this.aVar < -7){
                    this.d = 1;
                }
                popMatrix();
                }break;
                case "1":{
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(80);
                noStroke();
                rect(-7,0+this.aVar,8,20);
                rect(7,0-this.aVar,8,20);
                fill(100);
                rect(0,0,30,20,10,10,5,5);
                fill(120);
                rect(-10,-3,10,10,10);
                rect(10,-3,10,10,10);
                fill(80);
                rect(-18,7,7,15+this.aVar,0,0,5,5);
                rect(17,7,7,15+this.aVar,0,0,5,5);
                arc(0,-10,15,7,0,ang(180));
                fill(200,0,0);
                arc(0,-10,10,5,0,ang(180));
                rect(0,0,2,18);
                rect(0,5,30,2);
                fill(100);
                rect(-18,2,7,10,5,0,0,5);
                rect(17,2,7,10,0,5,5,0);
                fill(80)
                rect(0,7,25,3);
                rect(-18,4,7,3);
                rect(17,4,7,3);
                this.aVar+=this.d;
                if(this.aVar > 7){
                    this.d = -1;
                }
                if(this.aVar < -7){
                    this.d = 1;
                }
                popMatrix();
                }break;
                case "2":{
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(80);
                rect(-5,0+this.aVar,5,15);
                rect(5,0-this.aVar,5,15);
                fill(100);
                ellipse(0,0,20,20);
                fill(120);
                ellipse(1,-1,15,15);
                fill(0,200,200);
                ellipse(0,-6,8,4);
                fill(100);
                rect(-12,-5,7,20,0,0,0,10);
                rect(12,-5,7,20,0,0,10,0);
                fill(0,200,200);
                ellipse(-12,-15,7,3);
                ellipse(13,-15,7,3);
                rect(0,0,2,10);
                rect(10,0,5,2);
                rect(-10,0,5,2);
                rect(-13,-4,2,10);
                rect(13,-4,2,10);
                noFill();
                stroke(0,200,200);
                strokeWeight(2);
                arc(0,0,15,10,0,ang(180));
                arc(13,-10,5,3,0,ang(180));
                arc(-12,-10,5,3,0,ang(180));
                noStroke();
                this.aVar+=this.d;
                if(this.aVar > 7){
                    this.d = -1;
                }
                if(this.aVar < -7){
                    this.d = 1;
                }
                
                popMatrix();
                if(this.dir === 0){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-12,this.y-20,0,this.dir))
                    bullets.push(new Bullet(this.x+12,this.y-20,0,this.dir))
                }
                }
                if(this.dir === 2){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-12,this.y+20,0,this.dir))
                    bullets.push(new Bullet(this.x+12,this.y+20,0,this.dir))
                }
                }
                if(this.dir === 1){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x+20,this.y+12,0,this.dir))
                    bullets.push(new Bullet(this.x+20,this.y-12,0,this.dir))
                }
                }
                if(this.dir === 3){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-20,this.y+12,1,this.dir))
                    bullets.push(new Bullet(this.x-20,this.y-12,1,this.dir))
                }
                }
                }break;
                case "3":{
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(80);
                rect(-5,0+this.aVar,5,15);
                rect(5,0-this.aVar,5,15);
                fill(100);
                ellipse(0,0,20,20);
                fill(120);
                ellipse(1,-1,15,15);
                fill(200,0,0);
                ellipse(0,-6,8,4);
                fill(100);
                rect(-12,-5,7,20,0,0,0,10);
                rect(12,-5,7,20,0,0,10,0);
                fill(200,0,0);
                ellipse(-12,-15,7,3);
                ellipse(13,-15,7,3);
                rect(0,0,2,10);
                rect(10,0,5,2);
                rect(-10,0,5,2);
                rect(-13,-4,2,10);
                rect(13,-4,2,10);
                noFill();
                stroke(200,0,0);
                strokeWeight(2);
                arc(0,0,15,10,0,ang(180));
                arc(13,-10,5,3,0,ang(180));
                arc(-12,-10,5,3,0,ang(180));
                noStroke();
                this.aVar+=this.d;
                if(this.aVar > 7){
                    this.d = -1;
                }
                if(this.aVar < -7){
                    this.d = 1;
                }
                
                popMatrix();
                if(this.dir === 0){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-12,this.y-20,1,this.dir))
                    bullets.push(new Bullet(this.x+12,this.y-20,1,this.dir))
                }
                }
                if(this.dir === 2){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-12,this.y+20,1,this.dir))
                    bullets.push(new Bullet(this.x+12,this.y+20,1,this.dir))
                }
                }
                if(this.dir === 1){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x+20,this.y+12,1,this.dir))
                    bullets.push(new Bullet(this.x+20,this.y-12,1,this.dir))
                }
                }
                if(this.dir === 3){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-20,this.y+12,1,this.dir))
                    bullets.push(new Bullet(this.x-20,this.y-12,1,this.dir))
                }
                }
                }break;
                case "4":{
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(80);
                rect(-5,0+this.aVar,5,15);
                rect(5,0-this.aVar,5,15);
                stroke(100);
                strokeWeight(3);
                line(-6,6,-13,10);
                line(-13,10,-13,0);
                line(8,-13,8,-3);
                line(8,-13,-5,-15);
                noStroke();
                fill(100)
                ellipse(0,0,20,20);
                fill(120);
                ellipse(2,-2,15,15);
                fill(100);
                rect(-13,-8,7,20);
                rect(-13,-20,5,5);
                rect(-10,-15,8,5);
                fill(0,200,200);
                ellipse(0,-7,7,3);
                stroke(0,200,200);
                strokeWeight(2);
                line(0,-8,0,9);
                noFill();
                arc(0,-2,18,10,0,ang(180));
                line(-10,-2,-12,-2);
                line(-12,-2,-12,-15);
                noStroke();
                fill(0,200,200);
                rect(-13,-23,5,2);
                popMatrix();
                this.aVar+=this.d;
                if(this.aVar > 7){
                    this.d = -1;
                }
                if(this.aVar < -7){
                    this.d = 1;
                }
                if(this.dir === 0){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-12,this.y-10,0,this.dir))
                    
                }
                }
                if(this.dir === 2){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x+12,this.y+10,0,this.dir))
                    
                }
                }
                if(this.dir === 1){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x+10,this.y-12,0,this.dir))
                    
                }
                }
                if(this.dir === 3){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-10,this.y+12,0,this.dir))
                    
                }
                }
                }break;
                case "5":{
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(60);
                rect(-10,0+this.aVar,20,60);
                rect(10,0-this.aVar,20,60);
                fill(100)
                rect(0,0,120,40,10);
                fill(80);
                ellipse(0,0,80,80);
                fill(0,200,200,100);
                ellipse(0,0,60,60);
                ellipse(6,-6,40,40);
                ellipse(13,-13,20,20);
                fill(0,200,200);
                ellipse(0,-35,20,10);
                fill(80)
                rect(-45,-39,20,40)
                rect(45,-39,20,40)
                rect(-50,-60,8,5);
                rect(50,-60,8,5);
                rect(-40,-60,8,5);
                rect(40,-60,8,5);
                noFill();
                stroke(0,200,200);
                strokeWeight(3);
                line(-40,0,-50,0);
                line(40,0,50,0);
                line(50,0,50,-20)
                line(-50,0,-50,-20);
                line(-50,-20,-45,-20);
                line(50,-20,45,-20);
                line(45,-20,45,-60);
                line(-45,-20,-45,-60);
                line(-40,0,-30,-5);
                line(40,0,30,-5);
                this.aVar+=this.d;
                if(this.aVar > 18){
                    this.d = -1;
                }
                if(this.aVar < -18){
                    this.d = 1;
                }
                
                
                popMatrix();
                if(this.dir === 0){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-45,this.y-80,2,this.dir))
                    bullets.push(new Bullet(this.x+45,this.y-80,2,this.dir))
                }
                }
                if(this.dir === 2){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-45,this.y+80,2,this.dir))
                    bullets.push(new Bullet(this.x+45,this.y+80,2,this.dir))
                }
                }
                if(this.dir === 1){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x+80,this.y+45,2,this.dir))
                    bullets.push(new Bullet(this.x+80,this.y-45,2,this.dir))
                }
                }
                if(this.dir === 3){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-80,this.y+45,2,this.dir))
                    bullets.push(new Bullet(this.x-80,this.y-45,2,this.dir))
                }
                }
                
                }break;
                case "6":{
                strokeWeight(1);
                stroke(200,0,0)
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                scale(1.25)
                fill(60);
                rect(-10,0+this.aVar,20,60);
                rect(10,0-this.aVar,20,60);
                fill(100)
                rect(0,0,120,40,10);
                fill(80);
                ellipse(0,0,80,80);
                fill(200,0,0,100);
                ellipse(0,0,60,60);
                ellipse(6,-6,40,40);
                ellipse(13,-13,20,20);
                fill(200,0,0);
                ellipse(0,-35,20,10);
                fill(80)
                rect(-45,-39,20,40)
                rect(45,-39,20,40)
                rect(-50,-60,8,5);
                rect(50,-60,8,5);
                rect(-40,-60,8,5);
                rect(40,-60,8,5);
                noFill();
                stroke(200,0,0);
                strokeWeight(3);
                line(-40,0,-50,0);
                line(40,0,50,0);
                line(50,0,50,-20)
                line(-50,0,-50,-20);
                line(-50,-20,-45,-20);
                line(50,-20,45,-20);
                line(45,-20,45,-60);
                line(-45,-20,-45,-60);
                line(-40,0,-30,-5);
                line(40,0,30,-5);
                this.aVar+=this.d;
                if(this.aVar > 18){
                    this.d = -0.5;
                }
                if(this.aVar < -18){
                    this.d = 0.5;
                }
                
                
                popMatrix();
                if(this.dir === 0){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-55,this.y-90,3,this.dir))
                    bullets.push(new Bullet(this.x+55,this.y-90,3,this.dir))
                }
                }
                if(this.dir === 2){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-55,this.y+90,3,this.dir))
                    bullets.push(new Bullet(this.x+55,this.y+90,3,this.dir))
                }
                }
                if(this.dir === 1){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x+90,this.y+55,3,this.dir))
                    bullets.push(new Bullet(this.x+90,this.y-55,3,this.dir))
                }
                }
                if(this.dir === 3){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-90,this.y+55,3,this.dir))
                    bullets.push(new Bullet(this.x-90,this.y-55,3,this.dir))
                }
                }
                
                }break;
                case "7":{
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(200,0,0)
                for(var i = 0; i <= 360; i+=45){
                    rotate(ang(i+frameCount*2));
                    fill(0)
                    ellipse(0,45,20,20);
                    rotate(ang(i+frameCount*2));
                    rect(0,45,20,50,10,0,10,0);
                    rotate(-2*ang(i+frameCount*2));
                }
                noStroke();
                fill(0)
                ellipse(0,0,100,100);
                fill(200,0,0,80)
                ellipse(0,0,80,80);
                ellipse(7,-7,60,60);
                ellipse(13,-13,40,40);
                popMatrix();
                }break;
                case "8":{
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                
                fill(80);
                rotate(ang(45));
                rect(0,0,80,10);
                rect(0,0,10,80);
                fill(0,200,200);
                rect(0,0,80,2);
                rect(0,0,2,80);
                rotate(ang(-45));
                fill(100);
                ellipse(-20,-20,30,30);
                ellipse(20,-20,30,30);
                ellipse(-20,20,30,30);
                ellipse(20,20,30,30);
                fill(120);
                ellipse(-18,-22,25,25);
                ellipse(-18+40,-22,25,25);
                ellipse(-18,-22+40,25,25);
                ellipse(-18+40,-22+40,25,25);
                stroke(0,200,200);
                noFill();
                strokeWeight(2);
                arc(-20,20,30,10,0,ang(180))
                arc(-20,-20,30,10,0,ang(180))
                arc(20,-20,30,10,0,ang(180))
                arc(20,20,30,10,0,ang(180))
                arc(-20,20,10,30,ang(-90),ang(90))
                arc(-20,-20,10,30,ang(-90),ang(90))
                arc(20,-20,10,30,ang(-90),ang(90))
                arc(20,20,10,30,ang(-90),ang(90))
                noStroke();
                fill(0,200,200);
                ellipse(-20,-32,10,5);
                ellipse(20,-32,10,5);
                ellipse(-20,8,10,5);
                ellipse(20,8,10,5);
                popMatrix();
                }break;
                case "9":{
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                scale(1.5);
                fill(80);
                rotate(ang(45));
                rect(0,0,80,10);
                rect(0,0,10,80);
                fill(200,0,0);
                rect(0,0,80,2);
                rect(0,0,2,80);
                rotate(ang(-45));
                fill(100);
                ellipse(-20,-20,30,30);
                ellipse(20,-20,30,30);
                ellipse(-20,20,30,30);
                ellipse(20,20,30,30);
                fill(120);
                ellipse(-18,-22,25,25);
                ellipse(-18+40,-22,25,25);
                ellipse(-18,-22+40,25,25);
                ellipse(-18+40,-22+40,25,25);
                stroke(200,0,0);
                noFill();
                strokeWeight(2);
                arc(-20,20,30,10,0,ang(180))
                arc(-20,-20,30,10,0,ang(180))
                arc(20,-20,30,10,0,ang(180))
                arc(20,20,30,10,0,ang(180))
                arc(-20,20,10,30,ang(-90),ang(90))
                arc(-20,-20,10,30,ang(-90),ang(90))
                arc(20,-20,10,30,ang(-90),ang(90))
                arc(20,20,10,30,ang(-90),ang(90))
                noStroke();
                fill(200,0,0);
                ellipse(-20,-32,10,5);
                ellipse(20,-32,10,5);
                ellipse(-20,8,10,5);
                ellipse(20,8,10,5);
                popMatrix();
                }break;
                case "a":{
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(80);
                rect(0,-25,80,10)
                rect(0,25,80,10)
                fill(100)
                rect(0,0,60,80,5);
                fill(50);
                rect(0,-42,40,5,5,5,0,0);
                rect(-40,-25,15,25,5,0,0,5);
                rect(39,-25,15,25,0,5,5,0);
                rect(-40,25,15,25,5,0,0,5);
                rect(39,25,15,25,0,5,5,0);
                fill(120)
                ellipse(0,0,50,50);
                fill(200,0,0)
                ellipse(0,0,45,45);
                fill(120)
                ellipse(0,0,40,40);
                fill(200,0,0);
                rect(0,0,45,2);
                rect(0,0,2,45);
                if(frameCount % this.fireRate === 0){
                    
                    enemies.push(new Enemy(this.x,this.y,eT[floor(Math.random()*4)],this.trackNum));
                    
                    
                }
                popMatrix();
                }break;
                case "b":{
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                scale(1.5);
                fill(80);
                noStroke();
                rect(-7,0+this.aVar,8,20);
                rect(7,0-this.aVar,8,20);
                fill(100);
                rect(0,0,30,20,10,10,5,5);
                fill(120);
                rect(-10,-3,10,10,10);
                rect(10,-3,10,10,10);
                fill(80);
                rect(-18,7,7,15+this.aVar,0,0,5,5);
                rect(17,7,7,15+this.aVar,0,0,5,5);
                arc(0,-10,15,7,0,ang(180));
                fill(0,200,200);
                arc(0,-10,10,5,0,ang(180));
                fill(100);
                rect(-18,2,7,10,5,0,0,5);
                rect(17,2,7,10,0,5,5,0);
                fill(80)
                rect(0,7,25,3);
                rect(-18,4,7,3);
                rect(17,4,7,3);
                this.aVar+=this.d;
                if(this.aVar > 7){
                    this.d = -1;
                }
                if(this.aVar < -7){
                    this.d = 1;
                }
                fill(200,0,0,100)
                ellipse(0,0,60,60);
                popMatrix();
                }break;
                case "c":{
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                scale(1.5);
                fill(80);
                noStroke();
                rect(-7,0+this.aVar,8,20);
                rect(7,0-this.aVar,8,20);
                fill(100);
                rect(0,0,30,20,10,10,5,5);
                fill(120);
                rect(-10,-3,10,10,10);
                rect(10,-3,10,10,10);
                fill(80);
                rect(-18,7,7,15+this.aVar,0,0,5,5);
                rect(17,7,7,15+this.aVar,0,0,5,5);
                arc(0,-10,15,7,0,ang(180));
                fill(200,0,0);
                arc(0,-10,10,5,0,ang(180));
                rect(0,0,2,18);
                rect(0,5,30,2);
                fill(100);
                rect(-18,2,7,10,5,0,0,5);
                rect(17,2,7,10,0,5,5,0);
                fill(80)
                rect(0,7,25,3);
                rect(-18,4,7,3);
                rect(17,4,7,3);
                this.aVar+=this.d;
                if(this.aVar > 7){
                    this.d = -1;
                }
                if(this.aVar < -7){
                    this.d = 1;
                }
                fill(0,200,200,100);
                ellipse(0,0,60,60)
                popMatrix();
                }break;
                case "d":{
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                scale(2);
                fill(80);
                rect(-5,0+this.aVar,5,15);
                rect(5,0-this.aVar,5,15);
                fill(100);
                ellipse(0,0,20,20);
                fill(120);
                ellipse(1,-1,15,15);
                fill(0,200,200);
                ellipse(0,-6,8,4);
                fill(100);
                rect(-12,-5,7,20,0,0,0,10);
                rect(12,-5,7,20,0,0,10,0);
                fill(0,200,200);
                ellipse(-12,-15,7,3);
                ellipse(13,-15,7,3);
                rect(0,0,2,10);
                rect(10,0,5,2);
                rect(-10,0,5,2);
                rect(-13,-4,2,10);
                rect(13,-4,2,10);
                noFill();
                stroke(0,200,200);
                strokeWeight(2);
                arc(0,0,15,10,0,ang(180));
                arc(13,-10,5,3,0,ang(180));
                arc(-12,-10,5,3,0,ang(180));
                noStroke();
                this.aVar+=this.d;
                if(this.aVar > 7){
                    this.d = -1;
                }
                if(this.aVar < -7){
                    this.d = 1;
                }
                fill(200,0,0,100);
                ellipse(0,0,60,60);
                if(this.dir === 0){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-25,this.y-40,0,this.dir))
                    bullets.push(new Bullet(this.x+25,this.y-40,0,this.dir))
                }
                }
                if(this.dir === 2){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-25,this.y+40,0,this.dir))
                    bullets.push(new Bullet(this.x+25,this.y+40,0,this.dir))
                }
                }
                if(this.dir === 1){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x+40,this.y+25,0,this.dir))
                    bullets.push(new Bullet(this.x+40,this.y-25,0,this.dir))
                }
                }
                if(this.dir === 3){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-40,this.y+25,0,this.dir))
                    bullets.push(new Bullet(this.x-40,this.y-25,0,this.dir))
                }
                }
                popMatrix();
                
                }break;
                case "e":{
                 pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                scale(2);
                fill(80);
                rect(-5,0+this.aVar,5,15);
                rect(5,0-this.aVar,5,15);
                fill(100);
                ellipse(0,0,20,20);
                fill(120);
                ellipse(1,-1,15,15);
                fill(200,0,0);
                ellipse(0,-6,8,4);
                fill(100);
                rect(-12,-5,7,20,0,0,0,10);
                rect(12,-5,7,20,0,0,10,0);
                fill(200,0,0);
                ellipse(-12,-15,7,3);
                ellipse(13,-15,7,3);
                rect(0,0,2,10);
                rect(10,0,5,2);
                rect(-10,0,5,2);
                rect(-13,-4,2,10);
                rect(13,-4,2,10);
                noFill();
                stroke(200,0,0);
                strokeWeight(2);
                arc(0,0,15,10,0,ang(180));
                arc(13,-10,5,3,0,ang(180));
                arc(-12,-10,5,3,0,ang(180));
                noStroke();
                this.aVar+=this.d;
                if(this.aVar > 7){
                    this.d = -1;
                }
                if(this.aVar < -7){
                    this.d = 1;
                }
                fill(0,200,200,100);
                ellipse(0,0,60,60);
                popMatrix();
                if(this.dir === 0){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-25,this.y-40,1,this.dir))
                    bullets.push(new Bullet(this.x+25,this.y-40,1,this.dir))
                }
                }
                if(this.dir === 2){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-25,this.y+40,1,this.dir))
                    bullets.push(new Bullet(this.x+25,this.y+40,1,this.dir))
                }
                }
                if(this.dir === 1){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x+40,this.y+25,1,this.dir))
                    bullets.push(new Bullet(this.x+40,this.y-25,1,this.dir))
                }
                }
                if(this.dir === 3){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-40,this.y+25,0,this.dir))
                    bullets.push(new Bullet(this.x-40,this.y-25,0,this.dir))
                }
                }
                }break;
                case "f":{
                noStroke();
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(80);
                noStroke();
                rect(-7,0+this.aVar,8,20);
                rect(7,0-this.aVar,8,20);
                fill(100);
                rect(0,0,30,20,10,10,5,5);
                fill(120);
                rect(-10,-3,10,10,10);
                rect(10,-3,10,10,10);
                fill(80);
                rect(-18,7,7,15+this.aVar,0,0,5,5);
                rect(17,7,7,15+this.aVar,0,0,5,5);
                arc(0,-10,15,7,0,ang(180));
                fill(200,0,0);
                arc(0,-10,10,5,0,ang(180));
                rect(0,0,2,18);
                rect(0,5,30,2);
                fill(100);
                rect(-18,2,7,10,5,0,0,5);
                rect(17,2,7,10,0,5,5,0);
                fill(80)
                rect(0,7,25,3);
                rect(-18,4,7,3);
                rect(17,4,7,3);
                this.aVar+=this.d;
                if(this.aVar > 7){
                    this.d = -1;
                }
                if(this.aVar < -7){
                    this.d = 1;
                }
                if(this.killable !== true){
                fill(200,200,0,100);
                stroke(200,200,0);
                strokeWeight(5);
                ellipse(0,0,60,60);
                cursor(ARROW);
                if(mouseX > this.x-30&&mouseX < this.x+30&&mouseY > this.y-30&&mouseY < this.y+30&&this.killable !== true){
                    this.killable = true;
                }
                }
                popMatrix();
                }break;
                case "g":{
                pushMatrix();
                noStroke();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(60,20);
                rect(-10,0+this.aVar,20,60);
                rect(10,0-this.aVar,20,60);
                fill(100,20)
                rect(0,0,120,40,10);
                fill(80,20);
                ellipse(0,0,80,80);
                fill(0,200,200,100,20);
                ellipse(0,0,60,60);
                ellipse(6,-6,40,40);
                ellipse(13,-13,20,20);
                fill(0,200,200,20);
                ellipse(0,-35,20,10);
                fill(80,20)
                rect(-45,-39,20,40)
                rect(45,-39,20,40)
                rect(-50,-60,8,5);
                rect(50,-60,8,5);
                rect(-40,-60,8,5);
                rect(40,-60,8,5);
                noFill();
                stroke(0,200,200,20);
                strokeWeight(3);
                line(-40,0,-50,0);
                line(40,0,50,0);
                line(50,0,50,-20)
                line(-50,0,-50,-20);
                line(-50,-20,-45,-20);
                line(50,-20,45,-20);
                line(45,-20,45,-60);
                line(-45,-20,-45,-60);
                line(-40,0,-30,-5);
                line(40,0,30,-5);
                this.aVar+=this.d;
                if(this.aVar > 18){
                    this.d = -1;
                }
                if(this.aVar < -18){
                    this.d = 1;
                }
                
                
                popMatrix();
                if(this.dir === 0){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-45,this.y-80,2,this.dir))
                    bullets.push(new Bullet(this.x+45,this.y-80,2,this.dir))
                }
                }
                if(this.dir === 2){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-45,this.y+80,2,this.dir))
                    bullets.push(new Bullet(this.x+45,this.y+80,2,this.dir))
                }
                }
                if(this.dir === 1){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x+80,this.y+45,2,this.dir))
                    bullets.push(new Bullet(this.x+80,this.y-45,2,this.dir))
                }
                }
                if(this.dir === 3){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-80,this.y+45,2,this.dir))
                    bullets.push(new Bullet(this.x-80,this.y-45,2,this.dir))
                }
                }
                }break;
                case "h":{
                noStroke();
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                fill(80,20);
                rect(0,-25,80,10)
                rect(0,25,80,10)
                fill(100,20)
                rect(0,0,60,80,5);
                fill(50,20);
                rect(0,-42,40,5,5,5,0,0);
                rect(-40,-25,15,25,5,0,0,5);
                rect(39,-25,15,25,0,5,5,0);
                rect(-40,25,15,25,5,0,0,5);
                rect(39,25,15,25,0,5,5,0);
                fill(120,20)
                ellipse(0,0,50,50);
                fill(200,0,0,20)
                ellipse(0,0,45,45);
                fill(120,20)
                ellipse(0,0,40,40);
                fill(200,0,0,20);
                rect(0,0,45,2);
                rect(0,0,2,45);
                if(frameCount % this.fireRate === 0){
                    enemies.push(new Enemy(this.x,this.y,eT[floor(Math.random()*18)],this.trackNum));
                }
                popMatrix();
                }break;
                //the invisible enemy >:D
                case "i":{
                    
                }break;
                case "j":{
                strokeWeight(1);
                stroke(200,200,0)
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                scale(2)
                fill(60);
                rect(-10,0+this.aVar,20,60);
                rect(10,0-this.aVar,20,60);
                fill(100)
                rect(0,0,120,40,10);
                fill(80);
                ellipse(0,0,80,80);
                fill(200,200,0,100);
                ellipse(0,0,60,60);
                ellipse(6,-6,40,40);
                ellipse(13,-13,20,20);
                fill(200,200,0);
                ellipse(0,-35,20,10);
                fill(80)
                rect(-45,-39,20,40)
                rect(45,-39,20,40)
                rect(-50,-60,8,5);
                rect(50,-60,8,5);
                rect(-40,-60,8,5);
                rect(40,-60,8,5);
                noFill();
                stroke(200,200,0);
                strokeWeight(3);
                line(-40,0,-50,0);
                line(40,0,50,0);
                line(50,0,50,-20)
                line(-50,0,-50,-20);
                line(-50,-20,-45,-20);
                line(50,-20,45,-20);
                line(45,-20,45,-60);
                line(-45,-20,-45,-60);
                line(-40,0,-30,-5);
                line(40,0,30,-5);
                this.aVar+=this.d;
                if(this.aVar > 18){
                    this.d = -0.5;
                }
                if(this.aVar < -18){
                    this.d = 0.5;
                }
                
                if(frameCount % this.fireRate === 0){
                    enemies.push(new Enemy(this.x,this.y,eT[floor(Math.random()*18)],this.trackNum));
                }
                popMatrix();
                if(this.dir === 0){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-80,this.y-120,4,this.dir))
                    bullets.push(new Bullet(this.x+80,this.y-120,4,this.dir))
                }
                }
                if(this.dir === 2){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-80,this.y+120,4,this.dir))
                    bullets.push(new Bullet(this.x+80,this.y+120,4,this.dir))
                }
                }
                if(this.dir === 1){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x+120,this.y+80,4,this.dir))
                    bullets.push(new Bullet(this.x+120,this.y-80,4,this.dir))
                }
                }
                if(this.dir === 3){
                if(frameCount % this.fireRate === 0){
                    bullets.push(new Bullet(this.x-120,this.y+80,4,this.dir))
                    bullets.push(new Bullet(this.x-120,this.y-80,4,this.dir))
                }
                }
                }break;
            }
            //1000
            //10
            //100
            
            if(this.type !== " "&&this.health < this.maxHealth){
            noStroke();
            fill(255,0,0);
            rect(this.x,this.y-this.height/2,50, 3)
            fill(0,255,0);
            rect(this.x, this.y - this.height/2, (this.health/this.maxHealth) * 50, 3);
            }
        };
        Enemy.prototype.move = function(){
            if(this.x < track[this.trackNum][0]){
                this.x+=this.speed;
                this.dir = 1;
            }
            if(this.x > track[this.trackNum][0]){
                this.x-=this.speed;
                this.dir = 3
            }
            if(this.y < track[this.trackNum][1]){
                this.y+=this.speed;
                this.dir = 2;
            }
            if(this.y > track[this.trackNum][1]){
                this.y-=this.speed;
                this.dir = 0;
            }
            
            if(this.x > track[this.trackNum][0]-5&&this.x < track[this.trackNum][0]+5&&this.y > track[this.trackNum][1]-5&&this.y < track[this.trackNum][1]+5){
                this.trackNum++;
            }
           
        };
        }
        //towers
        {  
        var Tower = function(x,y,type){
            this.x = x;
            this.y = y;
            this.dir = 0;
            this.type = type;
            this.dead = false;
            this.fireRate = 50;
            this.health = 50;
            this.maxHealth = 50;
            this.pierce = 1;
            this.selected = false;
            this.damage = 5;
            this.level = 0;
            this.upgradeCost = 100;
            this.description = "This is the most basic weapon that shoots laser bolts";
            
            switch(this.type){
                case "Basic":
                this.fireRate = 50;
                this.health = 50;
                this.maxHealth = 50;
                this.pierce = 1;
                this.damage = 10;
                this.upgradeCost = 100
                break;
                case "Rapid":
                this.health = 40;
                this.maxHealth = 40;
                this.damage = 2.5;
                this.fireRate = 10;
                this.upgradeCost = 150;
                this.description = "This tower has low damage but shoots really fast.  Upgrade for awesomeness.";
                break;
                case "Power":
                this.health = 100;
                this.maxHealth = 100;
                this.damage = 50;
                this.fireRate = 75;
                this.upgradeCost = 150;
                this.description = "It's Power Tower Time!  This one shoots extremely powerful bullets but is a really slow shooter.  It also has a lot of health.";
                break;
                case "Slow":
                this.health = 50;
                this.maxHealth = 50;
                this.damage = 10;
                this.upgradeCost = 200;
                this.fireRate = 50;
                this.description = "This tower lowers the temperatures of its target close to absolute zero so its atoms are forced to slow down.";
                break;
                case "Poison":
                this.health = 75;
                this.maxHealth = 75;
                this.damage = 5;
                this.fireRate = 50;
                this.upgradeCost = 350;
                this.description = "This tower poisons your enemies so they will take an amount of damage over time.";
                break;
                case "Doublo":
                this.health = 100;
                this.maxHealth = 100;
                this.damage = 10;
                this.fireRate = 25;
                this.upgradeCost = 500;
                this.description = "This tower will be an important artifact in this game!  It shoots in two directions.  Upgrade for four.";
                break;
                case "Stun Blaster":
                this.health = 100;
                this.maxHealth = 100;
                this.damage = 25;
                this.fireRate = 150;
                this.pierce = 2;
                this.upgradeCost = 350;
                this.description = "This tower will not only hit its target hard but it will also knock them back and make them slightly slower.";
                break;
                case "Blasticon":
                this.health = 150;
                this.maxHealth = 150;
                this.damage = 25;
                this.fireRate = 50;
                this.pierce = 5;
                this.upgradeCost = 500;
                this.description = "This gun can pierce through five enemies, dealing a lot of damage to each of them.  Upgrade for more power, pierce, and fire rate.";
                break;
                case "Bomber":
                this.health = 100;
                this.maxHealth = 100;
                this.damage = 50;
                this.fireRate = 150;
                this.upgradeCost = 500;
                this.description = "This tower throws exploding projectiles at its target!";
                break;
                case "Tesla":
                this.health = 100;
                this.maxHealth = 100;
                this.damage = 25;
                this.fireRate = 100;
                this.upgradeCost = 500;
                this.description = "This tower can zaps an enemy and also stuns them so hard they stop moving!";
                break;
                case "Flamethrower":
                this.health = 150;
                this.maxHealth = 150;
                this.damage = 5;
                this.fireRate = 10;
                this.upgradeCost = 750;
                this.description = "This tower not only gives enemies a damage over time effect, but it also speeds them up a little...";
                break;
                case "Sniper":
                this.health = 250;
                this.maxHealth = 250;
                this.damage = 50;
                this.fireRate = 100;
                this.upgradeCost = 1000;
                this.description = "This tower is slow but strong.  It has an unbelieveable amount of range, pierce, and power.";
                this.pierce = 10;
                case "Ultra":
                this.health = 500;
                this.maxHealth = 500;
                this.damage = 50;
                this.fireRate = 20;
                this.upgradeCost = 1500;
                this.description = "Super fast, super strong, super powerful, and super awesome!  What more could you want?";
                this.pierce = 5;
                break;
                case "Switcher":
                this.health = 50;
                this.maxHealth = 50;
                this.damage = 0;
                this.fireRate = 200;
                this.upgradeCost = Infinity;
                this.description = "Super slow and does no damage.  It can switch an enemy's type tho.  Be careful as it can throw a boss at you.  It can also turn a boss into a weakling.";
                break;
            }
        };
        Tower.prototype.draw = function(){
            strokeWeight(2);
            noStroke();
            cursor(ARROW)
            switch(this.type){
                case "Basic":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                noStroke();
                fill(100);
                rect(0,-30,20,50,10);
                fill(120);
                rect(5,-27,10,50,0,20,0,0);
                fill(140);
                rect(10,-25,5,50,0,10,0,0);
                fill(80);
                rect(-10,-25,5,50,10,10,0,0)
                fill(100);
                ellipse(0,0,50,50);
                fill(120);
                ellipse(2,-2,44,44);
                fill(140);
                ellipse(5,-5,35,35);
                noFill();
                stroke(0,255,255);
                strokeWeight(2);
                arc(0,-10,50,20,0,ang(180));
                ellipse(0,0,20,20);
                line(0,-50,0,25);
                arc(0,0,50,50,ang(-30-90),ang(30-90));
                fill(0,200,200);
                arc(0,-50,15,10,ang(180),ang(360))
                popMatrix();
                break;
                case "Rapid":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                noStroke();
                fill(100);
                rect(0,-30,20,50,10);
                fill(120);
                rect(5,-27,10,50,0,20,0,0);
                fill(140);
                rect(10,-25,5,50,0,10,0,0);
                fill(80);
                rect(-10,-25,5,50,10,10,0,0)
                fill(100);
                rect(0,0,50,50,10);
                fill(120);
                rect(2,-2,44,44,10);
                fill(140);
                rect(5,-5,35,35,10);
                noFill();
                stroke(255,0,0);
                strokeWeight(2);
                arc(0,-10,50,20,0,ang(180));
                ellipse(0,0,20,20);
                line(0,-50,0,25);
                line(-10,-25,10,-25)
                fill(255,0,0);
                arc(0,-50,15,10,ang(180),ang(360))
                popMatrix();
                break;
                case "Power":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                noStroke();
                fill(100);
                rect(0,-20,40,60,0);
                fill(120)
                rect(10,-20,20,60);
                fill(140);
                rect(15,-20,10,60);
                fill(80);
                rect(-15,-20,10,60)
                fill(100);
                ellipse(0,0,50,50);
                fill(120);
                ellipse(2,-2,45,45);
                fill(140);
                ellipse(5,-5,35,35);
                fill(0,255,255);
                ellipse(0,0,10,10);
                rect(0,0,50,2);
                rect(0,0,2,50);
                rect(0,-38,6,25)
                noFill();
                strokeWeight(5);
                stroke(0,50);
                ellipse(0,0,45,45)
                strokeWeight(10);
                ellipse(0,0,40,40)
                popMatrix();
                break;
                case "Slow":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                noStroke();
                fill(100);
                rotate(ang(45));
                rect(0,0,60,10);
                rect(0,0,10,60)
                rotate(ang(-45));
                rect(0,-30,10,50)
                rect(-10,-30,5,40)
                rect(9,-30,5,40)
                fill(100);
                ellipse(0,0,50,50);
                fill(120);
                ellipse(2,-2,45,45);
                fill(140);
                ellipse(5,-5,35,35);
                fill(0,255,255);
                stroke(0,200,255);
                strokeWeight(2);
                ellipse(0,0,15,10);
                ellipse(-15,0,10,15)
                ellipse(15,0,10,15)
                popMatrix();
                break;
                case "Poison":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                noStroke();
                fill(100);
                rotate(ang(45));
                rect(0,0,60,10);
                rect(0,0,10,60)
                rotate(ang(-45));
                rect(0,-30,10,50)
                rect(-10,-30,5,40)
                rect(9,-30,5,40)
                fill(100);
                ellipse(0,0,50,50);
                fill(120);
                ellipse(2,-2,45,45);
                fill(140);
                ellipse(5,-5,35,35);
                fill(0,255,0);
                stroke(0,200,0);
                strokeWeight(2);
                ellipse(0,0,15,10);
                ellipse(-15,0,10,15)
                ellipse(15,0,10,15)
                line(0,-5,0,-25);
                line(-10,-25,-10,-50)
                line(10,-25,10,-50)
                strokeWeight(5);
                line(0,-25,0,-55);
                noFill();
                arc(0,0,50,50,ang(-20),ang(20))
                arc(0,0,50,50,ang(-20+90),ang(20+90))
                arc(0,0,50,50,ang(-20+180),ang(20+180))
                arc(0,0,50,50,ang(-20+270),ang(20+270))
                popMatrix();
                break;
                case "Doublo":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                noStroke();
                fill(100);
                rect(0,0,20,100);
                fill(80);
                rect(7,0,5,100);
                rect(-7,0,5,100);
                fill(100);
                rotate(ang(45));
                rect(0,0,60,10);
                rect(0,0,10,60)
                rotate(ang(-45));
                fill(100);
                ellipse(0,0,50,50);
                fill(120);
                ellipse(2,-2,45,45);
                fill(140);
                ellipse(5,-5,35,35);
                fill(255,0,0);
                stroke(200,0,0);
                strokeWeight(2);
                ellipse(0,0,15,15);
                rect(0,0,2,90);
                noFill();
                ellipse(0,0,40,40);
                popMatrix();
                break;
                case "Quad":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                noStroke();
                fill(100);
                rect(0,0,20,100);
                rect(0,0,100,20);
                fill(80);
                rect(7,0,5,100);
                rect(-7,0,5,100);
                rect(0,7,100,5);
                rect(0,-7,100,5);
                fill(100);
                rotate(ang(45));
                rect(0,0,60,10);
                rect(0,0,10,60)
                rotate(ang(-45));
                fill(100);
                ellipse(0,0,50,50);
                fill(120);
                ellipse(2,-2,45,45);
                fill(140);
                ellipse(5,-5,35,35);
                fill(255,255,0);
                stroke(230,200,0);
                strokeWeight(2);
                ellipse(0,0,15,15);
                rect(0,0,4,90);
                rect(0,0,90,4)
                noFill();
                ellipse(0,0,40,40);
                popMatrix();
                break;
                case "Blasticon":
                pushMatrix();
                noStroke();
                strokeWeight(2);
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                noStroke();
                fill(100);
                rect(0,-30,30,30);
                rect(0,-45,20,20);
                rotate(ang(45+frameCount));
                rect(0,0,60,10);
                rect(0,0,10,60);
                rotate(ang(-45-frameCount));
                fill(100);
                ellipse(0,0,50,50);
                fill(120);
                ellipse(2,-2,45,45);
                fill(140);
                ellipse(5,-5,35,35);
                stroke(200,0,0);
                fill(255,0,0);
                rect(0,-40,6,30);
                rect(-10,-35,2,20);
                rect(10,-35,2,20);
                ellipse(0,0,20,20);
                rect(0,0,4,49);
                popMatrix();
                break;
                case "Stun Blaster":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                noStroke();
                fill(120);
                triangle(0,0,-50,-50,50,-50)
                fill(100)
                triangle(0,0,-50,-50,-30,-50)
                triangle(0,0,30,-50,50,-50)
                fill(80);
                rotate(ang(45));
                rect(0,0,60,10);
                rect(0,0,10,60);
                rotate(ang(-45));
                fill(100);
                ellipse(0,0,50,50);
                fill(120);
                ellipse(2,-2,45,45);
                fill(140);
                ellipse(5,-5,35,35);
                fill(0,255,0);
                stroke(0,200,0);
                strokeWeight(2);
                ellipse(0,0,20,20);
                popMatrix();
                break;
                case "Bomber":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                noStroke();
                fill(120);
                triangle(0,10,-30,-50,30,-50)
                fill(100)
                triangle(0,10,-30,-50,-20,-50)
                triangle(0,10,20,-50,30,-50)
                fill(80);
                rotate(ang(45));
                rect(0,0,60+(frameCount % 50)/5,10);
                rect(0,0,10,60+(frameCount % 50)/5);
                rotate(ang(-45));
                fill(100);
                ellipse(0,0,50,50);
                fill(120);
                ellipse(2,-2,45,45);
                fill(140);
                ellipse(5,-5,35,35);
                fill(255,0,0);
                stroke(200,0,0);
                strokeWeight(2);
                rect(0,0,2,50);
                rect(0,0,50,2);
                line(0,-25,-10,-50)
                line(0,-25,10,-50)
                ellipse(0,0,20,20);
                popMatrix();
                break;
                case "Tesla":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                noStroke();
                fill(80);
                rotate(ang(45+frameCount));
                rect(0,0,60+(frameCount % 50)/3,10);
                rect(0,0,10,60+(frameCount % 50)/3);
                rotate(ang(-45-frameCount));
                fill(100);
                ellipse(0,0,50,50);
                fill(120);
                ellipse(2,-2,45,45);
                fill(140);
                ellipse(5,-5,35,35);
                fill(255,255,0);
                stroke(200,200,0);
                strokeWeight(2);
                rect(0,0,2,50);
                rect(0,0,50,2);
                ellipse(0,0,20,20);
                popMatrix();
                break;
                case "Flamethrower":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                noStroke();
                fill(80);
                rect(0,-30,30,50);
                rect(-10,-40,10,50)
                rect(10,-40,10,50)
                rotate(ang(45));
                rect(0,0,60+(frameCount % 50)/3,10);
                rect(0,0,10,60+(frameCount % 50)/3);
                rotate(ang(-45));
                fill(100);
                ellipse(0,0,50,50);
                fill(120);
                ellipse(2,-2,45,45);
                fill(140);
                ellipse(5,-5,35,35);
                fill(250,200,0);
                stroke(200,150,0);
                strokeWeight(2);
                rect(0,0,2,50);
                rect(0,0,50,2);
                ellipse(0,0,20,20);
                popMatrix();
                break;
                case "Sniper":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                noStroke();
                rotate(ang(frameCount));
                stroke(0,200,100);
                fill(0,255,100)
                rect(0,0,5,70);
                rect(0,0,70,5);
                noStroke();
                rotate(ang(-frameCount));
                fill(100);
                rect(0,-30,20,50,10);
                fill(120);
                rect(5,-27,10,50,0,20,0,0);
                fill(140);
                rect(10,-25,5,50,0,10,0,0);
                fill(80);
                rect(-10,-25,5,50,10,10,0,0)
                fill(100);
                ellipse(0,0,50,50);
                fill(120);
                ellipse(2,-2,44,44);
                fill(140);
                ellipse(5,-5,35,35);
                noFill();
                stroke(0,255,100);
                strokeWeight(2);
                arc(0,-10,50,20,0,ang(180));
                ellipse(0,0,20,20);
                line(0,-50,0,25);
                arc(0,0,50,50,ang(-30-90),ang(30-90));
                fill(0,200,100);
                arc(0,-50,15,10,ang(180),ang(360))
                popMatrix();
                break;
                case "Ultra":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                noStroke();
                fill(100);
                rect(0,-30,30,30);
                rect(0,-45,20,20);
                rotate(ang(45+frameCount));
                rect(0,0,60,10);
                rect(0,0,10,60);
                fill(255,100,0);
                rect(0,0,50,10);
                rotate(ang(-45-frameCount));
                fill(100);
                ellipse(0,0,50,50);
                fill(120);
                ellipse(2,-2,45,45);
                fill(140);
                ellipse(5,-5,35,35);
                rotate(ang(45+frameCount));
                fill(255,50);
                stroke(255,0,0)
                rect(0,0,50,10);
                rect(0,0,10,50);
                rotate(ang(-45-frameCount));
                stroke(255,100,0);
                fill(255,100,0);
                rect(0,-40,6,30);
                rect(-10,-35,2,20);
                rect(10,-35,2,20);
                ellipse(0,0,20,20);
                rect(0,0,4,49);
                popMatrix();
                break;
                case "Switcher":
                pushMatrix();
                translate(this.x,this.y);
                rotate(this.dir*ang(90));
                noStroke();
                fill(100);
                rect(0,-30,30,30);
                rect(0,-45,20,20);
                rotate(ang(45+frameCount));
                rect(0,0,60,10);
                rect(0,0,10,60);
                fill(255,100,0);
                rect(0,0,50,10);
                rotate(ang(-45-frameCount));
                fill(100);
                ellipse(0,0,50,50);
                fill(120);
                ellipse(2,-2,45,45);
                fill(140);
                ellipse(5,-5,35,35);
                rotate(ang(45+frameCount));
                fill(0,50);
                stroke(0,0,255)
                rect(0,0,50,10);
                rect(0,0,10,50);
                rotate(ang(-45-frameCount));
                stroke(0,100,255);
                fill(0,100,255);
                rect(0,-40,6,30);
                rect(-10,-35,2,20);
                rect(10,-35,2,20);
                ellipse(0,0,20,20);
                rect(0,0,4,49);
                popMatrix();
                break;
            }
            
            
            noStroke();
            fill(255,0,0);
            rect(this.x,this.y-30,50,5);
            fill(0,255,0);
            rect(this.x,this.y-30,(this.health/this.maxHealth)*50,5);
            if(mouseButton === RIGHT&&mouseIsClicked&&mouseX > this.x-30&&mouseY > this.y-30&&mouseIsClicked&&mouseX < this.x+30&&mouseY < this.y+30){
                this.selected = true;
            }
            if(mouseButton === LEFT){
                this.selected = false;
            }
            if(this.selected){
                fill(0);
                textSize(15);
                if(this.level < 2){

                text("Ugrade for $"+this.upgradeCost,this.x,this.y-25)
                }else{
                    text("Maxed",this.x,this.y-25)
                }
                noStroke();
                fill(255,50);
                ellipse(this.x,this.y,60,60);
                if(keyIsReleased&&keyCode === ENTER){
                    if(money >= this.upgradeCost&&this.level < 3){
                    money-=this.upgradeCost;
                    this.level+=1;
                    if(this.level >= 3){
                        this.level = 2;
                    }
                    }
                }
                
                
                    if(keys[UP]){
                        this.dir = 0;}
                    if(keys[RIGHT]){
                        this.dir = 1;}
                    if(keys[DOWN]){
                        this.dir = 2;}
                    if(keys[LEFT]){
                        this.dir = 3;}
                    if(keys[87]){
                        this.y-=0.5;
                    }
                    if(keys[83]){
                        this.y+=0.5;
                    }
                    if(keys[65]){
                        this.x-=0.5;
                    }
                    if(keys[68]){
                        this.x+=0.5;
                    }
                    
            }
            fill(0)

        };
        Tower.prototype.shoot = function(){
            
            if(frameCount % this.fireRate === 0){
                if(this.type !== "Doublo"&&this.type !== "Quad"){
                    if(this.dir === 0){
                    bullets.push(new Bullet(this.x,this.y-50,this.type,this.dir,this.damage,this.pierce))
                    particles.push(new P(this.x,this.y-25,1))
                    particles.push(new P(this.x,this.y-25,2))
                    particles.push(new P(this.x,this.y-25,1))
                    particles.push(new P(this.x,this.y-25,2))
                    particles.push(new P(this.x,this.y-25,1))
                    particles.push(new P(this.x,this.y-25,2))
                    
                    }
                    if(this.dir === 1){
                    bullets.push(new Bullet(this.x+50,this.y,this.type,this.dir,this.damage))
                    particles.push(new P(this.x+25,this.y,3))
                    particles.push(new P(this.x+25,this.y,2))
                    particles.push(new P(this.x+25,this.y,3))
                    particles.push(new P(this.x+25,this.y,2))
                    particles.push(new P(this.x+25,this.y,3))
                    particles.push(new P(this.x+25,this.y,2))
                    }
                    if(this.dir === 2){
                    bullets.push(new Bullet(this.x,this.y+50,this.type,this.dir,this.damage,this.pierce))
                    particles.push(new P(this.x,this.y+25,3))
                    particles.push(new P(this.x,this.y+25,4))
                    particles.push(new P(this.x,this.y+25,3))
                    particles.push(new P(this.x,this.y+25,4))
                    particles.push(new P(this.x,this.y+25,3))
                    particles.push(new P(this.x,this.y+25,4))
                    }
                    if(this.dir === 3){
                    bullets.push(new Bullet(this.x-50,this.y,this.type,this.dir,this.damage,this.pierce))
                    particles.push(new P(this.x-25,this.y,1))
                    particles.push(new P(this.x-25,this.y,4))
                    particles.push(new P(this.x-25,this.y,1))
                    particles.push(new P(this.x-25,this.y,4))
                    particles.push(new P(this.x-25,this.y,1))
                    particles.push(new P(this.x-25,this.y,4))
                    }
                }
                if(this.type === "Doublo"){
                    if(this.dir === 0||this.dir === 2){
                    bullets.push(new Bullet(this.x,this.y-50,this.type,0,this.damage,this.pierce))
                    bullets.push(new Bullet(this.x,this.y+50,this.type,2,this.damage,this.pierce))
                    }
                    if(this.dir === 1||this.dir === 3){
                    bullets.push(new Bullet(this.x-50,this.y,this.type,3,this.damage))
                    bullets.push(new Bullet(this.x+50,this.y,this.type,1,this.damage))
                    }
                }
                if(this.type === "Quad"){
                    bullets.push(new Bullet(this.x,this.y-50,this.type,0,this.damage,this.pierce))
                    bullets.push(new Bullet(this.x+50,this.y,this.type,1,this.damage,this.pierce))
                    bullets.push(new Bullet(this.x,this.y+50,this.type,2,this.damage,this.pierce))
                    bullets.push(new Bullet(this.x-50,this.y,this.type,3,this.damage,this,pierce))
                }
            }
            
            
        };
        var TowerSpot = function(x,y){
            this.x = x;
            this.y = y;
            this.towerID;
            this.DRAW = true;
            this.selected = false;
            this.showMenu = false;
        };
        TowerSpot.prototype.draw = function(){
            if(this.DRAW||this.towerID === ""||this.towerID === undefined){
            pushMatrix();
            translate(this.x,this.y-30);
            noFill();
            stroke(255);
            strokeWeight(5);
            arc(0,30,60,30,ang(frameCount),ang(frameCount + 30))
            arc(0,30,60,30,ang(frameCount+60),ang(frameCount + 90))
            arc(0,30,60,30,ang(frameCount+60+60),ang(frameCount + 90+60))
            arc(0,30,60,30,ang(frameCount+60+120),ang(frameCount + 90+120))
            arc(0,30,60,30,ang(frameCount+60+180),ang(frameCount + 90+180))
            arc(0,30,60,30,ang(frameCount+60+240),ang(frameCount + 90+240))
            stroke(0,255,255);
            arc(0,30,60,30,ang(frameCount*2),ang(frameCount*2 + 30))
            arc(0,30,60,30,ang(frameCount*2+60),ang(frameCount*2 + 90))
            arc(0,30,60,30,ang(frameCount*2+60+60),ang(frameCount*2 + 90+60))
            arc(0,30,60,30,ang(frameCount*2+60+120),ang(frameCount*2 + 90+120))
            arc(0,30,60,30,ang(frameCount*2+60+180),ang(frameCount*2 + 90+180))
            arc(0,30,60,30,ang(frameCount*2+60+240),ang(frameCount*2 + 90+240))
            noStroke();
            fill(255);
            ellipse(0,30,20,10);
            fill(230)
            ellipse(0,30,15,5);
            fill(255,255,0,50);
            ellipse(0,0,60,60)
            fill(180)
            ellipse(0,0,30,30);
            fill(220);
            ellipse(2,-2,25,25);
            fill(255)
            ellipse(4,-4,15,15);
            fill(255,255,0,30);
            ellipse(0,0,40,40);
            noFill();
            stroke(255);
            strokeWeight(5)
            popMatrix();
            cursor(ARROW);
            if(this.showMenu){
            
                fill(100,200);
                noStroke();
                rect(300,75,600,175);
                fill(255)
                textSize(15);
                text("1 - Basic: $100,  2 - Rapid: $125,  3 - Power: $150,  4 - Slow: $200\n\n5 - Doublo: $300,     6 - Stun Blaster: $400,     7 - Blasticon: $700\n\n8 - Bomber: $500,      9 - Tesla: $400,      0 - Flamethrower: $500\n\nQ - Sniper: $500,             W - Ultra: $750,             E - Switcher:$500\nAny Other Key - Cancel",300,25)
               
            }
            
            if(mouseX > this.x-30&&mouseX < this.x+30&&mouseY > this.y-30&&mouseY < this.y+40){
                    cursor(HAND);
                }
            if(mouseIsClicked&&mouseButton === RIGHT){
                if(mouseX > this.x-30&&mouseX < this.x+30&&mouseY > this.y-30&&mouseY < this.y+40){
                    this.selected = true;
                }
            }
            if(this.selected){
            this.showMenu = true;
            fill(255,50);
            noStroke();
            ellipse(this.x,this.y-15,80,80)
            }
            
            if(mouseIsClicked&&mouseButton === LEFT){
                if(mouseX > this.x-30&&mouseX < this.x+30&&mouseY > this.y-30&&mouseY < this.y+40){
                    this.showMenu = false;
                }
            }
            if(this.showMenu){
                if(keyIsReleased){
                    if(key.toString() === "1"){
                    if(money >= 100){
                    this.towerID = "Basic";
                    money-=100;
                    }
                    }else if(key.toString() === "2"){
                    if(money >= 125){
                    this.towerID = "Rapid";
                    money-=125;
                    }
                    }else if(key.toString() === "3"){
                    if(money >= 150){
                    this.towerID = "Power";
                    money-=150;
                    }
                    }else if(key.toString() === "4"){
                    if(money >= 200){
                    this.towerID = "Slow";
                    money-=200;
                    }
                    }else if(key.toString() === "5"){
                    if(money >= 300){
                    this.towerID = "Doublo";
                    money-=300;
                    }
                    }else if(key.toString() === "6"){
                    if(money >= 400){
                    this.towerID = "Stun Blaster";
                    money-=400;
                    }
                    }else if(key.toString() === "7"){
                    if(money >= 400){
                    this.towerID = "Blasticon";
                    money-=400;
                    }
                    }else if(key.toString() === "8"){
                    if(money >= 500){
                    this.towerID = "Bomber";
                    money-=500;
                    }
                    
                    }else if(key.toString() === "9"){
                        if(money >= 400){
                    this.towerID = "Tesla";
                    money-=400;
                    }
                    }else if(key.toString() === "0"){
                        if(money >= 500){
                    this.towerID = "Flamethrower";
                    money-=500;
                    }
                    }else if(key.toString() === "q"){
                        if(money >= 500){
                    this.towerID = "Sniper";
                    money-=500;
                    }
                    }else if(key.toString() === "w"){
                    if(money >= 750){
                    this.towerID = "Ultra";
                    money-=750;
                    }
                    }else if(key.toString() === "e"){
                        if(money >= 500){
                    this.towerID = "Switcher";
                    money-=500;
                    }
                    }
                    else if(key.toString() !== "1"&&key.toString() !== "2"&&key.toString() !== "3"&&key.toString() !== "4"&&key.toString() !== "5"&&key.toString() !== "6"&&key.toString() !== "7"&&key.toString() !== "8"&&key.toString() !== "9"&&key.toString() !== "0"&&key.toString() !== "q"&&key.toString() !== "w"&&key.toString() !== "e"){
                            this.selected = false;
                            this.showMenu = false;
                            this.towerID = "";
                        }
                    
                if(this.selected){
                    if(this.towerID !== undefined&&this.towerID !== ""){
                towers.push(new Tower(this.x,this.y,this.towerID));
                this.DRAW = false;
                    }
                }
                
                }
                
            }
            }
            
        };
        
       
        }
        //achievements
        {
            var A = function(T,t){
                this.y = 0;
                this.t = t;
                this.T = T;
               
                this.show = true;
            };
            A.prototype.draw = function(){
                
                fill(0);
                strokeWeight(5);
                stroke(0,200,150,100);
                rect(100,this.y+25,200,50);
                textAlign(CENTER,CENTER);
                fill(0,250,150)
                textSize(15);
                text(this.T,100,this.y+10);
                fill(0,200,150);
                textSize(12);
                text(this.t,100,this.y+30)
                
            };
            
        }
        }
        
        towerSpots = [new TowerSpot(300,300)]
        var g1 = new Enemy(300,500,"6");
        var g2 = new Enemy(150,500,"5")
        var g3 = new Enemy(450,500,"5")
        var g4 = new Enemy(150,200,"9");
        var g5 = new Enemy(450,200,"9");
        var g6 = new Tower(50,50,"Sniper");
        var g7 = new Tower(550,50,"Ultra");
        var g8 = new Tower(50,550,"Blasticon");
        var g9 = new Tower(550,550,"Flamethrower");
        
        achievements = [new A("Visit The Game","Click this achievement\nto hide it.")];
        
        draw = function(){
            
            background(200);
            //waves n' stuff
            {
                if(trackType === 0){
                    track = [
            [0,50],
            [300,50],
            [300,150],
            [100,150],
            [100,250],
            [400,250],
            [400,50],
            [550,50],
            [550,350],
            [50,350],
            [50,500],
            [300,500],
            [300,650]
        ];
                }
                if(trackType === 1){
                    track = [
                        [0,50],
                        [300,50],
                        [300,250],
                        [50,250],
                        [550,250],
                        [300,250],
                        [300,450],
                        [50,450],
                        [700,450]
                    ];
                }
                if(trackType === 2){
                    track = [
                        [0,50],
                        [550,50],
                        [550,150],
                        [100,150],
                        [100,250],
                        [300,250],
                        [300,50],
                        [400,50],
                        [400,350],
                        [200,350],
                        [200,600],
                    ];
                }
                if(trackType === 3){
                    track = [
                        [0,50],
                        [500,50],
                        [500,500],
                        [150,500],
                        [150,200],
                        [350,200],
                        [350,300],
                        [250,300],
                        [250,400],
                        [450,400],
                        [450,100],
                        [50,100],
                        [50,550],
                        [300,550],
                        [300,700]
                    ];
                }
                if(trackType === 4){
                    track = [
                        [0,50],
                        [50,50],
                        [50,550],
                        [100,550],
                        [100,50],
                        [550,50],
                        [550,300],
                        [350,300],
                        [350,700],
                        [350,100],
                        [250,100],
                        [250,700],
                    ];
                }
                if(trackType === 5){
                    track = [
                        [0,50],
                        [500,50],
                        [500,150],
                        [100,150],
                        [100,250],
                        [500,250],
                        [500,350],
                        [100,350],
                        [100,450],
                        [500,450],
                        [500,550],
                        [300,550],
                        [300,700],
                    ];
                }
                if(trackType === 6){
                    track = [
                        [0,50],
                        [100,50],
                        [100,400],
                        [500,400],
                        [500,50],
                        [500,400],
                        [300,400],
                        [300,700],
                    ];
                }
                if(trackType === 7){
                    track = [
                        [0,50],
                        [300,50],
                        [300,300],
                        [400,300],
                        [400,700],
                    ];
                }
                if(trackType === 8){
                    track = [
                        [0,50],
                        [-50,50],
                        [-50,-50],
                        [300,-50],
                        [300,700],
                    ];
                }
            gap-=sp;
            if(gap === 0){
                gap = 10;
                enemyNum++;
                enemies.push(new Enemy(0,50,ws[enemyNum-1]))
                if(enemyNum >= ws.length){
                    enemyNum = ws.length;
                    sp = 0;
                }
            }
            waveString = waveCounts[wave];
            ws = waveString.split('');
}
            //achievements
            {
    
                
            if(kills > 0&&kills < 2&&a[0] === 0){
                a[0] = 1;
                if(a[0] === 1){
                achievements.push(new A("First Kill","kill an alien."))
                a[0] = 3;
                }
                
            }
            if(kills > 10&&kills < 12&&a[1] === 0){
                a[1] = 1;
                if(a[1] === 1){
                achievements.push(new A("Ten Kills","Hopefully you passed\nthe first wave."))
                a[1] = 3;
                }
                
            }
            if(kills > 100&&kills < 102&&a[2] === 0){
                a[2] = 1;
                if(a[2] === 1){
                achievements.push(new A("One Hundred Kills","Amazing skills!"))
                a[2] = 3;
                }
                
            }
            if(kills > 500&&kills < 502&&a[3] === 0){
                a[3] = 1;
                if(a[3] === 1){
                achievements.push(new A("Five Hundred Kills!","You should've gotten\nhere pretty easily."))
                a[3] = 3;
                }
                
            }
            if(kills > 1000&&kills < 1002&&a[4] === 0){
                a[4] = 1;
                if(a[4] === 1){
                achievements.push(new A("One Thousand Kills!","Wow!  Bravo!"))
                a[4] = 3;
                }
                
            }
            if(kills > 5000&&kills < 5002&&a[5] === 0){
                a[5] = 1;
                if(a[5] === 1){
                achievements.push(new A("Five Thousand Kills!","Whoo!  You are an awesome player!"))
                a[5] = 3;
                }
                
            }
            if(kills > 10000&&kills < 10002&&a[6] === 0){
                a[6] = 1;
                if(a[6] === 1){
                achievements.push(new A("Ten Thousand Kills!","How did you survive this long?"))
                a[6] = 3;
                }
                
            }
            if(wave > 9&&wave < 11&&a[7] === 0){
                a[7] = 1;
                if(a[7] === 1){
                achievements.push(new A("Wave 10!","You survived until\nhere.  Duh."))
                a[7] = 3;
                }
            }
            if(wave > 19&&wave < 21&&a[8] === 0){
                a[8] = 1;
                if(a[8] === 1){
                achievements.push(new A("Wave 20!","You is hardcore!"))
                a[8] = 3;
                }
            }
            if(wave > 49&&wave < 51&&a[9] === 0){
                a[9] = 1;
                if(a[9] === 1){
                achievements.push(new A("Wave 50!","Halfway through the game!"))
                a[9] = 3;
                }
            }
            if(wave > 99&&wave < 101&&a[10] === 0){
                a[10] = 1;
                if(a[10] === 1){
                achievements.push(new A("Wave 100!","You are a champion!"))
                a[10] = 3;
                }
            }
            if(wave > 9&&health > 95&&a[11] === 0){
                a[11] = 1;
                if(a[11] === 1){
                achievements.push(new A("Strong","Survive past wave ten\nwith more than 95 health"))
                a[11] = 3;
                }
            }
            if(wave > 19&&health > 90&&a[12] === 0){
                a[12] = 1;
                if(a[12] === 1){
                achievements.push(new A("Hardcore","Survive past wave 20\nwith more than 90 lives"))
                a[12] = 30;
                }
            }
            if(wave > 49&&health > 75&&a[13] === 0){
                a[13] = 1;
                if(a[13] === 1){
                achievements.push(new A("Master Player","Survive past wave 50\nwith more than 75 lives"))
                a[13] = 30;
                }
            }
            if(wave > 99&&health > 10&&a[14] === 0){
                a[14] = 1;
                if(a[14] === 1){
                achievements.push(new A("One Last Step...","Get to wave 100 with\nmore than 10 lives"))
                a[14] = 3;
                }
            }
            if(wave > 99&&health > 50&&a[15] === 0){
                a[15] = 1;
                if(a[15] === 1){
                achievements.push(new A("Still Strong","Get to wave 100 with\nmore than 50 lives"))
                a[15] = 3;
                }
            }
            if(wave > 99&&health > 95&&a[16] === 0){
                a[16] = 1;
                if(a[16] === 1){
                achievements.push(new A("Hacker/Cheater","Get to wave 100 with\nmore than 95 lives"))
                a[16] = 3;
                }
            }
            if(towers.length > 9&&a[17] === 0){
                a[17] = 1;
                if(a[17] === 1){
                achievements.push(new A("10+ towers!","build ten towers"))
                a[17] = 30;
                }
            }
            if(towers.length > 24&&a[18] === 0){
                a[18] = 1;
                if(a[18] === 1){
                achievements.push(new A("25+ towers!","build twenty-five towers"))
                a[18] = 3;
                }
            }
            if(towers.length > 49&&a[19] === 0){
                a[18] = 1;
                if(a[18] === 1){
                achievements.push(new A("50+ towers!","build fifty towers"))
                a[18] = 3;
                }
            }
            if(health < 0&&a[20] === 0){
                a[19] = 1;
                if(a[19] === 1){
                achievements.push(new A("You Died","The aliens\ninvaded your base."))
                a[19] = 3;
                }
            }
            if(money > 100&&a[21] === 0){
                a[21] = 1;
                if(a[21] === 1){
                achievements.push(new A("Poor","Have $100"))
                a[21] = 3;
                }
            }
            if(money > 500&&a[22] === 0){
                a[22] = 1;
                if(a[22] === 1){
                achievements.push(new A("Saver","Have $500"))
                a[22] = 3;
                }
            }
            if(money > 1000&&a[23] === 0){
                a[23] = 1;
                if(a[23] === 1){
                achievements.push(new A("Average","Have $1000"))
                a[23] = 3;
                }
            }
            if(money > 5000&&a[23] === 0){
                a[23] = 1;
                if(a[23] === 1){
                achievements.push(new A("Rich","Have $5000"))
                a[23] = 3;
                }
            }
            if(money > 10000&&a[24] === 0){
                a[24] = 1;
                if(a[24] === 1){
                achievements.push(new A("Challenge yourself","Have $10000"))
                a[24] = 3;
                }
            }
            if(money > 50000&&a[25] === 0){
                a[25] = 1;
                if(a[25] === 1){
                achievements.push(new A("Use ya money!","Have $50000"))
                a[25] = 3;
                }
            }
            if(money > 100000&&a[26] === 0){
                a[26] = 1;
                if(a[26] === 1){
                achievements.push(new A("I'm out of towers","Have $100000"))
                a[26] = 3;
                }
            }
            if(keyIsPressed&&key.toString() === "£"&&a[27] === 0){
                a[27] = 1;
                if(a[27] === 1){
                achievements.push(new A("Secret Codes","type the character '£'"))
                a[27] = 3;
                }
            }
            if(keyIsPressed&&key.toString() === "…"&&a[28] === 0){
                a[28] = 1;
                if(a[28] === 1){
                achievements.push(new A("Secret Codes #2","type the character '…'"))
                a[28] = 3;
                }
            }
            if(keyIsPressed&&key.toString() === "÷"&&a[41] === 0){
                a[41] = 1;
                if(a[41] === 1){
                achievements.push(new A("Secret Codes #3","type the character '÷'"))
                a[41] = 3;
                }
            }
            if(keyIsPressed&&key.toString() === "Ω"&&a[29] === 0){
                a[29] = 1;
                if(a[29] === 1){
                achievements.push(new A("Easter Egg?","aparently, Ω does not\nlook like an egg."))
                a[29] = 3;
                }
            }
            if(keyIsPressed&&key.toString() === "∆"&&a[30] === 0){
                a[30] = 1;
                if(a[30] === 1){
                achievements.push(new A("Easter Egg?","aparently, ∆ does not\nlook like an egg."))
                a[30] = 3;
                }
            }
            if(keyIsPressed&&key.toString() === "¥"&&a[31] === 0){
                a[31] = 1;
                if(a[31] === 1){
                achievements.push(new A("Free game","'¥'? This game's free!"))
                a[31] = 3;
                }
            }
            if(mouseIsClicked&&mouseX > 590&&mouseY < 10&&a[32] === 0){
                a[32] = 1;
                if(a[32] === 1){
                achievements.push(new A("Egg Failed","Still trying to find\nthat egg? You still didn't."))
                a[32] = 3;
                }
            }
            if(mouseIsClicked&&mouseX > 590&&mouseY > 590&&a[33] === 0){
                a[33] = 1;
                if(a[33] === 1&&a[32] === 0){
                achievements.push(new A("Operation Egg...","..Failed. You didn't find\nthe easter egg."))
                a[33] = 3;
                }
            }
            if(mouseIsClicked&&mouseX < 10&&mouseY > 590&&a[34] === 0){
                a[34] = 1;
                if(a[34] === 1){
                achievements.push(new A("Corners","The easter egg is\nnot here."))
                a[34] = 3;
                }
            }
            if((trackType === 0||trackType === 1||trackType === 2)&&a[35] === 0){
                a[35] = 1;
                if(a[35] === 1){
                achievements.push(new A("Easy Street","Choose one of\nthe easy levels"))
                a[35] = 3;
                }
            }
            if((trackType === 3||trackType === 4||trackType === 5)&&a[36] === 0){
                a[36] = 1;
                if(a[36] === 1){
                achievements.push(new A("Challenge Yourself","Choose one of\nthe medium levels"))
                a[36] = 3;
                }
            }
            if((trackType === 6||trackType === 7||trackType === 8)&&a[37] === 0){
                a[37] = 1;
                if(a[37] === 1){
                achievements.push(new A("Call of Doom","Choose one of\nthe hard levels"))
                a[37] = 3;
                }
            }
            if(scene === "menu"&&mouseIsClicked&&mouseX > 590&&mouseY > 290&&mouseY < 310&&a[38] === 0){
                a[38] = 1;
                if(a[38] === 1){
                achievements.push(new A("Explorer","You just found the easter egg."))
                a[38] = 3;
                scene = "test_scene";
                }
            }
            if(scene === "credits"&&a[39] === 0){
                a[39] = 1;
                if(a[39] === 1){
                achievements.push(new A("Check The Credits","Know the true maker:\nLeviathanProgramming"))
                a[39] = 3;
                }
            }
            if(scene === "how"&&a[40] === 0){
                a[40] = 1;
                if(a[40] === 1){
                achievements.push(new A("Know The Game","Read the instructions"))
                a[40] = 3;
                }
            }
}
            switch(scene){
                case "menu":{
                    cursor(ARROW);
                background(0);
                for(var i = 50; i > 20; i-=2){
                    textSize(i);
                    fill(i*3);
                    text("Orbitron TD 2:\nTitans Collide",300,50)
                }
                textSize(50);
                fill(200,0,0);
                text("Orbitron TD 2:\nTitans Collide",300,50)
                noFill();
                stroke(255);
                strokeWeight(5);
                if(mouseX > 225&&mouseX < 375&&mouseY > 225&&mouseY < 375){
                    fill(255,50);
                    cursor(HAND);
                }
                rect(300,300,150,150,30);
                fill(255);
                triangle(300-50,300-50,300-50,300+50,300+50,300);
                noFill();
                if(mouseX > 150-75&&mouseX < 150+75&&mouseY > 275&&mouseY < 350+75){
                    fill(255,50);
                    cursor(HAND);
                }
                rect(150,350,150,150,30,0,30,30);
                noFill();
                if(mouseX > 450-75&&mouseX < 450+75&&mouseY > 275&&mouseY < 350+75){
                    fill(255,50);
                    cursor(HAND);
                }
                rect(450,350,150,150,0,30,30,30);
                textSize(125);
                fill(255);
                textAlign(CENTER,CENTER)
                text("?      ©️",300,350);
                g1.draw();
                g2.dir = 1;
                g2.draw();
                g3.dir = 3;
                g3.draw();
                g4.draw();
                g5.draw();
                g6.dir = 2;
                g7.dir = 2;
                g6.draw();
                g7.draw();
                g8.draw();
                g9.draw();
                for(var i = 0; i < a.length; i++){
                    if(a[i] === 3){
                        ach+=1;
                        a[i] = 4;
                    }
                }
                fill(255);
                textSize(15);
                text("Achievements Unlocked: "+ach,300,200)
                mouseClicked = function(){
                    if(mouseX > 225&&mouseX < 375&&mouseY > 225&&mouseY < 375){
                    scene = "story";
                }
                if(mouseX > 150-75&&mouseX < 150+75&&mouseY > 275&&mouseY < 350+75){
                    scene = "how";
                }
                if(mouseX > 450-75&&mouseX < 450+75&&mouseY > 275&&mouseY < 350+75){
                    scene = "credits";
                    println("Hunterbob Td: https://www.khanacademy.org/computer-programming/hunterbob-td/5823737408225280");
                    
                }
                };
                }break;
                case "game":{
                //draw the track, run the towers, enemies, particles, and bullets.
                {
                if(keyIsReleased&&keyCode === SHIFT){
                    towerSpots.push(new TowerSpot(floor(random(1,11))*50,floor(random(1,11))*50))
                }
                TRACK.draw();
                fill(0);
                if(dead.length === enemies.length){
                    
                    allowWaveStart = true;
                    enemies = [];
                    dead = [];
                    waveString = "";
                    rect(300,550,600,100);
                    textAlign(CENTER);
                        
                    
                    

                }if(dead.length !== enemies.length){
                    allowWaveStart = false;
                }
                
                if(allowWaveStart){
                    fill(0,255,0);
                    textAlign(CORNER);
                    text(waveMessage[wave],10,515);
                    textAlign(CENTER);
                }
                if(allowWaveStart&&mouseY > 550&&mouseY < 600&&mouseX > 20&&mouseX < 220){
                    if(mouseIsClicked){
                    wave+=1;
                    allowWaveStart = false;
                    enemyNum = 0;
                    gap = 50;
                    sp = 1;
                    }else{
                        cursor(HAND);
                    }
                }
                
                
                rectMode(CORNER);
                fill(100)
                rect(20,550,200,40,10,0,10,0);
                if(allowWaveStart !== true){
                fill(200,0,0);
                textSize(20);
                text("New Wave",120,575)
                }else{
                fill(0,200,0);
                textSize(20);
                text("<<New Wave>>",120,575)
                }
                fill(0)
                text("Money: "+money,500,30)
                text("Base Health: "+health,300,30)
                rectMode(CENTER);
                for(var i = 0; i < enemies.length; i++){
                    if(enemies[i].dead !== true){
                        enemies[i].draw();
                        enemies[i].move();
                        if(enemies[i].x > 600||enemies[i].y > 600){
                            enemies[i].dead = true;
                            health-=enemies[i].damage;
                        }
                    }
                    if(enemies[i].health <= 0){
                        enemies[i].dead = true;
                        if(enemies[i].x !== 300&&enemies[i].y !== -300){
                            if(enemies[i].type !== " "){
                            money+=enemies[i].reward;
                            kills++;
                            }
                            if(enemies[i].type === "8"){
                                enemies.push(new Enemy(enemies[i].x-5,enemies[i].y,"0",enemies[i].trackNum))
                                enemies.push(new Enemy(enemies[i].x+5,enemies[i].y,"0",enemies[i].trackNum))
                                enemies.push(new Enemy(enemies[i].x,enemies[i].y+5,"0",enemies[i].trackNum))
                                enemies.push(new Enemy(enemies[i].x,enemies[i].y-5,"0",enemies[i].trackNum))
                            }
                            if(enemies[i].type === "9"){
                                enemies.push(new Enemy(enemies[i].x-5,enemies[i].y,"8",enemies[i].trackNum))
                                enemies.push(new Enemy(enemies[i].x+5,enemies[i].y,"8",enemies[i].trackNum))
                                enemies.push(new Enemy(enemies[i].x,enemies[i].y+5,"8",enemies[i].trackNum))
                                enemies.push(new Enemy(enemies[i].x,enemies[i].y-5,"8",enemies[i].trackNum))
                            }
                        }
                    }
                    if(enemies[i].speed < enemies[i].maxSpeed){
                        enemies[i].speed+=0.005;
                    }
                    if(enemies[i].type === " "&&enemies[i].x > 1){
                        enemies[i].health -= 100;
                    }
                    if(enemies[i].dead&&enemies[i].y !== -300){
                        dead.push(true);
                    }
                    if(enemies[i].dead){
                        enemies[i].x = 300;
                        enemies[i].y = -300;
                    }
                }
                
                for(var i = 0; i < bullets.length; i++){
                    if(bullets[i].dead !== true){
                        bullets[i].draw();
                        bullets[i].move();
                        if(bullets[i].x < 0||bullets[i].y > 600||bullets[i].x > 600||bullets[i].y < 0){
                            bullets[i].dead = true;
                        }
                    }if(bullets[i].dead&&bullets[i].type === "Bomber"&&bullets[i].r !== undefined){
                        
                        bullets.push(new Bullet(bullets[i].x,bullets[i].y,"Ultra",0,10));
                        bullets.push(new Bullet(bullets[i].x,bullets[i].y,"Tesla",1,10));
                        bullets.push(new Bullet(bullets[i].x,bullets[i].y,"Flamethrower",2,10));
                        bullets.push(new Bullet(bullets[i].x,bullets[i].y,"Sniper",3,10));
                        bullets.push(new Bullet(bullets[i].x,bullets[i].y,"Basic",0,10));
                        bullets.push(new Bullet(bullets[i].x,bullets[i].y,"Rapid",1,10));
                        bullets.push(new Bullet(bullets[i].x,bullets[i].y,"Power",2,10));
                        bullets.push(new Bullet(bullets[i].x,bullets[i].y,"Slow",3,10));
                        bullets.push(new Bullet(bullets[i].x,bullets[i].y,"Double",0,10));
                        bullets.push(new Bullet(bullets[i].x,bullets[i].y,"Stun Blaster",1,10));
                        bullets.push(new Bullet(bullets[i].x,bullets[i].y,"Blasticon",2,10));
                        bullets.push(new Bullet(bullets[i].x,bullets[i].y,"Flamethrower",3,10));
                        
                        bullets[i].r = undefined;
                    }
                }
                for(var i = 0; i < towerSpots.length; i++){
                        towerSpots[i].draw();
                }
                
                for(var i = 0; i < towers.length; i++){
                    var t = towers[i];
                    if(t.dead !== true){
                        t.draw();
                        t.shoot();
                        if(t.type === "Basic"){
                            if(t.level === 1){
                    t.fireRate = 25;
                    t.upgradeCost = 150;
                    t.pierce = 2;
                            }
                if(t.level === 2){
                    t.health = 100;
                    t.maxHealth = 100;
                    t.pierce = 5;
                    t.damage = 20;
                    t.upgradeCost = Infinity;
                }
                            
                        }
                        if(t.type === "Rapid"){
                            if(t.level === 1){
                            t.damage = 5;
                            t.upgradeCost = 200;
                            }
                            if(t.level === 2){
                    t.health = 100;
                    t.maxHealth = 100;
                    t.pierce = 2;
                    t.damage = 10;
                    t.fireRate = 7;
                    t.upgradeCost = Infinity;
                }
                            
                        }
                        if(t.type === "Power"){
                            if(t.level === 1){
                            t.health = 100;
                            t.maxHealth = 100;
                            t.damage = 75;
                            t.fireRate = 50;
                            t.upgradeCost = 200;
                            }
                            if(t.level === 2){
                            t.health = 200;
                            t.maxHealth = 200;
                            t.damage = 75;
                            t.fireRate = 25;
                            t.upgradeCost = Infinity;
                            }
                        }
                        if(t.type === "Slow"){
                            if(t.level === 1){
                                t.damage = 15;
                                t.fireRate = 30;
                                t.pierce = 2;
                                t.upgradeCost = 300;
                            }
                            if(t.level === 2){
                                t.damage = 25;
                                t.fireRate = 25;
                                t.pierce = 3;
                                t.upgradeCost = Infinity;
                            }
                        }
                        if(t.type === "Doublo"){
                            if(t.level === 1){
                                t.damage = 20;
                                t.fireRate = 15;
                                t.health = 150;
                                t.upgradeCost = 500;
                            }
                            if(t.level === 2){
                                t.damage = 50;
                                t.fireRate = 25;
                                t.health = 200;
                                t.upgradeCost = Infinity;
                            }
                        }
                        
                        if(t.type === "Stun Blaster"){
                            if(t.level === 1){
                                t.fireRate = 100;
                                t.pierce = 5;
                                t.damage = 50;
                                t.upgradeCost = 750;
                            }
                            if(t.level === 2){
                                t.fireRate = 50;
                                t.pierce = 10;
                                t.damage = 50;
                                t.upgradeCost = Infinity;
                            }
                        }
                        if(t.type === "Poison"){
                            if(t.level === 1){
                                t.damage = 20;
                                t.fireRate = 25;
                                t.pierce = 2;
                            }
                            if(t.level === 2){
                                t.damage = 35;
                                t.fireRate = 20;
                                t.pierce = 5;
                            }
                        }
                        if(t.type === "Blasticon"){
                            if(t.level === 1){
                                t.damage = 10;
                                t.pierce = 10;
                                t.fireRate = 30;
                            }
                            if(t.level === 2){
                                t.damage = 10;
                                t.pierce = 10;
                                t.fireRate = 20;
                            }
                        }
                        if(t.type === "Bomber"){
                            if(t.level === 1){
                                t.damage = 75;
                                t.pierce = 5;
                                t.fireRate = 100;
                                t.upgradeCost = 750;
                            }
                            if(t.level === 2){
                                t.damage = 100;
                                t.pierce = 10;
                                t.fireRate = 50;
                                t.upgradeCost = Infinity;
                            }
                        }
                        if(t.type === "Tesla"){
                            if(t.level === 1){
                                t.damage = 25;
                                t.pierce = 2;
                                t.fireRate = 50;
                                t.upgradeCost = 1000;
                            }
                            if(t.level === 2){
                                t.damage = 50;
                                t.pierce = 5;
                                t.fireRate = 25;
                                t.upgradeCost = Infinity;
                            }
                        }
                        if(t.type === "Flamethrower"){
                            if(t.level === 1){
                                t.damage = 10;
                                t.upgradeCost = 1000;
                            }
                            if(t.level === 2){
                                t.damage = 10;
                                t.pierce = 2;
                                t.fireRate = 5;
                                t.upgradeCost = Infinity;
                            }
                        }
                        if(t.type === "Sniper"){
                            if(t.level === 0){
                                t.fireRate = 100;
                            }
                            if(t.level === 1){
                                t.damage = 100;
                                t.upgradeCost = 1500;
                            }
                            if(t.level === 2){
                                t.damage = 150;
                                t.pierce = 15;
                                t.fireRate = 50;
                                t.upgradeCost = Infinity;
                            }
                        }
                        if(t.type === "Ultra"){
                            if(t.level === 1){
                                t.pierce = 7;
                                t.upgradeCost = 3000;
                            }
                            if(t.level === 2){
                                t.damage = 75;
                                t.pierce = 10;
                                t.upgradeCost = Infinity;
                            }
                        }
                    }
                }
                for(var i = 0; i < particles.length; i++){
                    var p = particles[i];
                    if(p.dead !== true){
                        p.draw();
                        p.move();
                    }
                }
                }
                //levels and waves
                {
                    if(wave > 102){
                        scene = "win";
                    }
                    if(health < 0){
                        scene = "lose";
                    }
                }
                }break;
                case "win":{
                background(0,200,0);
                textSize(50);
                textAlign(CENTER,CENTER);
                text("Congrats!  You won!\nClick to return\nto menu",300,300);
                mouseClicked = function(){
                    scene = "menu";
                }
                }break;
                case "lose":{
                background(200,0,0);
                textSize(50);
                textAlign(CENTER,CENTER);
                text("You got defeated.\nClick to return\nto the menu",300,300);
                mouseClicked = function(){
                    scene = "menu";
                }
                }break;
                case "how":{
                background(0);
                textAlign(CENTER,CENTER);
                textSize(50);
                fill(0,200,150)
                text("INSTRUCTIONS",300,50);
                textSize(18);
                fill(0,255,200)
                text("Placing Towers\n\nThere will be some glowing balls that have spinning\nrings below them.  Right-click on one of them to show\na construction menu.  Press the keys to build one\nof the towers indicated.  You should see a tower\nin the spot you selected.  Also, press the Shift key to\nget a new tower spot if you need one.\n\nMoving and Upgrading your Towers\n\nRight-Click one of your towers to select it.  Use the\nWASD keys to move it around (yes, it will be slow)\nand use the arrow keys to change its firing direction.\nIt is very important that you do this as some of the\nwaves cannot be passed if you leave your towers\nstationary.  Left-click anywhere to unselect a tower.\nYou can select two at a time and move them.\nPress ENTER to upgrade your tower for the indicated\nprice.  Make sure it's selected when you upgrade it.\n\nClick to return",300,330);
                
                mouseClicked = function(){
                    scene = "menu";
                }
                }break;
                case "credits":{
                background(0);
                textAlign(CENTER,CENTER);
                textSize(50);
                fill(0,200,150)
                text("CREDITS",300,50);
                textSize(20);
                fill(0,255,200)
                text("All of this code in this game is completely coded by\nme, LeviathanProgramming.  Anyone who changes\nthe credits will be flagged for plagirism.\n\nI got a lot of inspiration from @duckycol's\namazing tower defense Hunterbob TD.\nBe sure to visit it.\n\nAlso, I got the rest of the inspiration from Me.\n\nHave fun playing this hands-on\ntower defense!  Enjoy!\n\nClick to return.",300,300);
                mouseClicked = function(){
                    scene = "menu";
                }
                }break;
                case "story":{
                background(0);
                textAlign(CENTER,CENTER);
                textSize(50);
                fill(0,200,150)
                text("A NEW CONTINENT",300,50);
                textSize(20);
                fill(0,255,200)
                text("We have succesfully conquered the native\nOrbitronian aliens of the first continent colonized\nby the human race.  Now we have gone to conquer\na second one.  When we got there, something\nseemed wrong...  we got to a battlefield with\nthe dead bodies of some of the previous aliens\nwe fought against and a new race whose body\nstructure consisted of mainly titanium.  We set up\na camp and put out some towers to guard us\nbut when we went to sleep, we were surprised and\nnearly wiped out by the new race of aliens.\n\nOur towers did nothing to them due to their\nthick layer of titanium armor.  We had to do something\nabout that.  We ran away from the aliens who\nchased after us and set up a temporary forcefield.\nWe created some new towers that will hopefully\nbe able to damage them...\n...our forefield is turning off in an hour...\nClick to start.",300,330);
                mouseClicked = function(){
                    scene = "levels";
                }
                }break;
                case "levels":{
                background(0);
                stroke(0,200,150,100);
                strokeWeight(5);
                for(var i = 150; i <= 450; i+=150){
                    fill(0,i,i/2);
                    rect(150,i,100,100,10)
                    rect(300,i,100,100,10)
                    rect(450,i,100,100,10)
                }
                textSize(20);
                fill(0);
                textAlign(CENTER,CENTER);
                text("A Path\nBeyond",150,150)
                textSize(18)
                text("Prototype\nTrack",300,150)
                text("Death\nWish",450,150)
                text("Mind\nStrike",150,300)
                text("Predator\nTundra",300,300)
                textSize(17)
                text("Titanaboa\nVenom-\nstrike",450,300)
                textSize(20)
                text("Death\nBattle",150,450)
                text("Titan\nForge",300,450)
                text("One-way\nRoad",450,450)
                fill(0,200,150);
                textSize(40)
                text("Choose A Track.",300,50)
                textSize(20)
                text("Easy and Hard Levels range from top to bottom.",300,80)
                mouseClicked = function(){

                    if(scene === "levels"){
                                            wave = 0;
                    if(mouseX > 100&&mouseX < 200){
                        if(mouseY > 100&&mouseY < 200){
                            trackType = 0;
                            scene = "game";
                        }
                        if(mouseY > 250&&mouseY < 350){
                            trackType = 3;
                            scene = "game";
                        }
                        if(mouseY > 400&&mouseY < 500){
                            trackType = 6;
                            scene = "game";
                        }
                    }
                    if(mouseX > 250&&mouseX < 350){
                        if(mouseY > 100&&mouseY < 200){
                            trackType = 1;
                            scene = "game";
                        }
                        if(mouseY > 250&&mouseY < 350){
                            trackType = 4;
                            scene = "game";
                        }
                        if(mouseY > 400&&mouseY < 500){
                            trackType = 7;
                            scene = "game";
                        }
                    }
                    if(mouseX > 400&&mouseX < 500){
                        if(mouseY > 100&&mouseY < 200){
                            trackType = 2;
                            scene = "game";
                        }
                        if(mouseY > 250&&mouseY < 350){
                            trackType = 5
                            scene = "game";
                        }
                        if(mouseY > 400&&mouseY < 500){
                            trackType = 8
                            scene = "game";
                        }
                    }
                        
                    }
                }
                
                }break;
            }
            //set the achievements
            
            for(var i = 0; i < achievements.length; i++){
                if(achievements[i].show){
                achievements[i].draw();
                }
                if(mouseIsClicked&&mouseY > achievements[i].y&&mouseY < achievements[i].y+50&&mouseX < 200){
                    achievements[i].show = false;
                }
            }
            if(scene === "test_scene"){
                background(0);
                textAlign(CENTER,CENTER);
                textSize(40);
                text("You Found the\nEASTER EGG!\n\nClick to return",300,300)
                mouseClicked = function(){
                  scene = "menu";  
                };
            }
            
        };
        
        mouseReleased = function(){
            mouseIsClicked = true;
            setTimeout(function(){
                mouseIsClicked = false;
            },20)
        };
        keyPressed = function(){
            keyIsPressed = true;
            keys[keyCode] = true;
            setTimeout(function(){
            keyIsPressed = false;
            keys[keyCode] = false;
            },20)
        }
        keyReleased = function(){
            keyIsReleased = true;
            keys[keyCode] = false;
            setTimeout(function(){
            keyIsReleased = false;
            },20)
        }
    }};

    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("game"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var renderPJS = new Processing(canvas, processing_js); 
