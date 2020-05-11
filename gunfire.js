var codeSource = function(processingInstance) {
    with (processingInstance) {
size(600,600);
angleMode = "degrees";
(function() {
	this[["KAInfiniteLoopCount"]] = -Infinity;
})();
var ang = function(a){
	return PI/180;
}
frameRate(60);
smooth();
textFont(createFont("Orbitron"));
textAlign(CENTER);

var scene = "about";

//setup
var baseHealth = 500;
var enemyTimer = 150;
var drawGun = function(type,x,y,s,r){
    noStroke();
    switch(type){
        case "AK47":{
            pushMatrix();
            translate(x,y);
            scale(s);
            rotate(ang(r));
            fill(100);
            noStroke();
            rect(0,0,100,10);
            fill(120);
            rect(0,0,100,3);
            fill(80);
            rect(0,8,100,2);
            rect(90,-5,3,5,5,0,5,0);
            fill(112, 78, 9);
            rect(-80,0,80,20,0,0,10,0);
            fill(130,90,9);
            rect(-80,0,80,5);
            fill(80);
            rect(-50,0,15,8);
            fill(70);
            rect(-47,0,9,6);
            rotate(ang(20));
            fill(112, 78, 9);
            rect(-60,35,10,30,0,0,0,5);
            rect(-55,62,10,3);
            fill(130,90,9);
            rect(-60,45,3,15,0,0,0,5);
            fill(82, 57, 6);
            rect(-53,38,3,25,0,0,0,5);
            rotate(ang(-20));
            noFill();
            stroke(100);
            strokeWeight(3);
            arc(-60,20,20,15,0,ang(100));
            line(-60,20,-58,23);
            strokeCap(SQUARE);
            strokeWeight(20);
            arc(20,20,100,100,ang(120),ang(180));
            stroke(80);
            strokeWeight(5);
            arc(20,20,100,100,ang(130),ang(180));
)            noStroke();
            fill(112, 78, 9);
            rect(-90,0,10,20,0,0,0,5);
            rect(-100,0,10,15,5,0,0,0);
            rect(-150,0,50,15,5,0,0,0);
            rect(-150,10,45,10,0,0,5,0);
            rect(-150,20,40,5,0,0,5,0);
            rect(-150,20,35,10,0,0,5,0);
            rect(-150,25,20,10,0,0,5,0);
            fill(130,90,9);
            rect(-150,0,70,5,5,0,0,0);
            popMatrix();
            
        }break;
        case "AK47-Black":{
            pushMatrix();
            translate(x,y);
            scale(s);
            rotate(ang(r));
            fill(0);
            noStroke();
            rect(0,0,100,10);
            fill(0);
            rect(0,0,100,3);
            fill(0);
            rect(0,8,100,2);
            rect(90,-5,3,5,5,0,5,0);
            fill(0);
            rect(-80,0,80,20,0,0,10,0);
            fill(0);
            rect(-80,0,80,5);
            fill(0);
            rect(-50,0,15,8);
            fill(0);
            rect(-47,0,9,6);
            rotate(ang(20));
            fill(0);
            rect(-60,35,10,30,0,0,0,5);
            rect(-55,62,10,3);
            fill(0);
            rect(-60,45,3,15,0,0,0,5);
            fill(0);
            rect(-53,38,3,25,0,0,0,5);
            rotate(ang(-20));
            noFill();
            stroke(0);
            strokeWeight(3);
            arc(-60,20,20,15,0,ang(100));
            line(-60,20,-58,23);
            strokeCap(SQUARE);
            strokeWeight(20);
            arc(20,20,100,100,ang(120),ang(180));
            stroke(0);
            strokeWeight(5);
            arc(20,20,100,100,ang(130),ang(180));
            noStroke();
            fill(0);
            rect(-90,0,10,20,0,0,0,5);
            rect(-100,0,10,15,5,0,0,0);
            rect(-150,0,50,15,5,0,0,0);
            rect(-150,10,45,10,0,0,5,0);
            rect(-150,20,40,5,0,0,5,0);
            rect(-150,20,35,10,0,0,5,0);
            rect(-150,25,20,10,0,0,5,0);
            fill(0);
            rect(-150,0,70,5,5,0,0,0);
            popMatrix();
            
        }break;
        case "Pistol":{
        pushMatrix();
        translate(x,y);
        rotate(ang(r));
        scale(s);
        noFill();
        stroke(80);
        arc(13,15,30,15,0,ang(90));
        line(5,5,20,17);
        noStroke();
        fill(100);
        rect(0,0,50,12,5,0,5,0);
        rect(0,10,40,5,0,0,5,0);
        rotate(ang(20));
        rect(10,0,12,30);
        fill(120);
        rect(10,10,3,20);
        fill(90);
        rect(10,28,15,2);
        rotate(ang(-20));
        fill(120);
        rect(0,0,50,5,5,0,5,0);
        popMatrix();
        }break;
        case "Pistol-Black":{
        pushMatrix();
        translate(x,y);
        rotate(ang(r));
        scale(s);
        fill(0);
        rect(0,0,50,12,5,0,5,0);
        rect(0,10,40,5,0,0,5,0);
        rotate(ang(20));
        rect(10,0,12,30);
        rect(10,28,15,2);
        rotate(ang(-20));
        noFill();
        stroke(0);
        arc(13,15,30,15,0,ang(90));
        line(5,5,20,17);
        noStroke();
        popMatrix();
        }break;
        case "Scorpion-Pistol-Black":{
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(ang(r));
        fill(0);
        rect(0,0,50,15);
        rect(50,1,10,13);
        rect(60,3,10,5);
        rect(-15,1,15,13);
        rect(-60,3,60,3,3);
        rect(-60,3,3,15,3);
        rect(0,15,12,20);
        rect(0,35,15,2);
        rect(3,35,8,30);
        rect(0,20,23,3,5);
        rect(20,10,3,13,5);
        rect(15,0,2,19);
        popMatrix();
        }break;
        case "Scorpion_Pistol":{
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(ang(r));
        fill(100);
        rect(0,0,50,15);
        rect(50,1,10,13);
        rect(60,3,10,5);
        rect(-15,1,15,13);
        rect(-60,3,60,3,3);
        rect(-60,3,3,15,3);
        rect(0,15,12,20);
        rect(0,35,15,2);
        rect(3,35,8,30);
        rect(0,20,23,3,5);
        rect(20,10,3,13,5);
        rect(15,0,2,19);
        fill(120);
        rect(0,0,50,5);
        rect(-15,1,15,5);
        rect(50,1,10,5);
        rect(60,3,10,2);
        fill(80);
        rect(10,10,40,5);
        rect(50,11,10,3);
        rect(-15,11,15,3);
        rect(0,11,3,25);
        rect(4,36,2,28);
        fill(50);
        rect(20,0,10,5);
        popMatrix();
        }break;
        case "Rifle":{
        pushMatrix();
            translate(x,y);
            scale(s);
            rotate(ang(r));
            fill(50);
            rect(-110,28,20,2);
            rect(-90,20,2,10);
            rect(-97,20,2,6);
            fill(148, 95, 15);
            rect(-100,0,130,20,0,0,5,0);
            rect(-110,0,50,10,5,0,0,0);
            rect(-170,10,70,20,5,0,5,0);
            rect(-170,30,60,10,0,0,5,0);
            rect(-170,35,50,10,0,0,5,0);
            rect(-170,40,30,10,0,0,5,5);
            fill(120);
            rect(20,0,150,10,0,0,0,5);
            rect(-110,0,15,10,5,0,0,0);
            fill(80);
            rect(-30,0,15,5);
            rect(-120,5,10,3);
            rect(-120,5,3,10);
            ellipse(-118,15,8,8);
            fill(100);
            rect(20,0,150,3);
            rect(-30,20,15,10);
            fill(140);
            rect(30,7,140,3);
            fill(255,255,255,40);
            rect(-110,0,130,3);
            rect(-170,10,50,3);
            fill(0,50);
            rect(-110,17,140,3);
            rect(-110,27,10,3);
            rect(-120,37,10,3);
            rect(-140,37+5,20,3);
            rect(-170,47,30,3);
            popMatrix();
        }break;
        case "Rifle-Black":{
        pushMatrix();
            translate(x,y);
            scale(s);
            rotate(ang(r));
            fill(0);
            rect(-110,28,20,2);
            rect(-90,20,2,10);
            rect(-97,20,2,6);
            fill(0);
            rect(-100,0,130,20,0,0,5,0);
            rect(-110,0,50,10,5,0,0,0);
            rect(-170,10,70,20,5,0,5,0);
            rect(-170,30,60,10,0,0,5,0);
            rect(-170,35,50,10,0,0,5,0);
            rect(-170,40,30,10,0,0,5,5);
            fill(0);
            rect(20,0,150,10,0,0,0,5);
            rect(-110,0,15,10,5,0,0,0);
            fill(0);
            rect(-30,0,15,5);
            rect(-120,5,10,3);
            rect(-120,5,3,10);
            ellipse(-118,15,8,8);
            fill(0);
            rect(20,0,150,3);
            rect(-30,20,15,10);
            fill(0);
            rect(30,7,140,3);
            fill(255,255,255,40);
            rect(-110,0,130,3);
            rect(-170,10,50,3);
            fill(0,50);
            rect(-110,17,140,3);
            rect(-110,27,10,3);
            rect(-120,37,10,3);
            rect(-140,37+5,20,3);
            rect(-170,47,30,3);
            popMatrix();
        }break;
        case "Sniper_Rifle":{
        pushMatrix();
            translate(x,y);
            scale(s);
            rotate(ang(r));
            fill(50);
            rect(-110,28,20,2);
            rect(-90,20,2,10);
            rect(-97,20,2,6);
            fill(36, 99, 31);
            rect(-100,0,130,20,0,0,5,0);
            rect(-110,0,50,10,5,0,0,0);
            rect(-170,10,70,20,5,0,5,0);
            rect(-170,30,60,10,0,0,5,0);
            rect(-170,35,50,10,0,0,5,0);
            rect(-170,40,30,10,0,0,5,5);
            fill(120);
            rect(20,0,150,10,0,0,0,5);
            rect(-110,0,15,10,5,0,0,0);
            fill(80);
            rect(-30,0,15,5);
            rect(-120,5,10,3);
            rect(-120,5,3,10);
            ellipse(-118,15,8,8);
            fill(100);
            rect(20,0,150,3);
            rect(-30,20,15,20);
            fill(140);
            rect(30,7,140,3);
            fill(255,255,255,40);
            rect(-110,0,130,3);
            rect(-170,10,50,3);
            fill(0,50);
            rect(-110,17,140,3);
            rect(-110,27,10,3);
            rect(-120,37,10,3);
            rect(-140,37+5,20,3);
            rect(-170,47,30,3);
            popMatrix();
        }break;
        case "Sniper-Rifle-Black":{
        pushMatrix();
            translate(x,y);
            scale(s);
            rotate(ang(r));
            fill(0);
            rect(-110,28,20,2);
            rect(-90,20,2,10);
            rect(-97,20,2,6);
            fill(0);
            rect(-100,0,130,20,0,0,5,0);
            rect(-110,0,50,10,5,0,0,0);
            rect(-170,10,70,20,5,0,5,0);
            rect(-170,30,60,10,0,0,5,0);
            rect(-170,35,50,10,0,0,5,0);
            rect(-170,40,30,10,0,0,5,5);
            fill(0);
            rect(20,0,150,10,0,0,0,5);
            rect(-110,0,15,10,5,0,0,0);
            fill(0);
            rect(-30,0,15,5);
            rect(-120,5,10,3);
            rect(-120,5,3,10);
            ellipse(-118,15,8,8);
            fill(0);
            rect(20,0,150,3);
            rect(-30,20,15,20);
            fill(0);
            rect(30,7,140,3);
            fill(255,255,255,40);
            rect(-110,0,130,3);
            rect(-170,10,50,3);
            fill(0,50);
            rect(-110,17,140,3);
            rect(-110,27,10,3);
            rect(-120,37,10,3);
            rect(-140,37+5,20,3);
            rect(-170,47,30,3);
            popMatrix();
        }break;
        case "Hunting_Rifle":{
        pushMatrix();
            translate(x,y);
            scale(s);
            rotate(ang(r));
            fill(50);
            rect(-110,28,20,2);
            rect(-90,20,2,10);
            rect(-97,20,2,6);
            fill(0, 0, 0);
            rect(-100,0,130,20,0,0,5,0);
            rect(-110,0,50,10,5,0,0,0);
            rect(-170,10,70,20,5,0,5,0);
            rect(-170,30,60,10,0,0,5,0);
            rect(-170,35,50,10,0,0,5,0);
            rect(-170,40,30,10,0,0,5,5);
            fill(120);
            rect(20,0,150,10,0,0,0,5);
            rect(-110,0,15,10,5,0,0,0);
            fill(80);
            rect(-30,0,20,5);
            rect(-120,5,10,3);
            rect(-120,5,3,10);
            ellipse(-118,15,8,8);
            fill(100);
            rect(20,0,150,3);
            rect(-30,20,20,30);
            fill(140);
            rect(30,7,140,3);
            fill(255,255,255,40);
            rect(-110,0,130,3);
            rect(-170,10,50,3);
            fill(0,50);
            rect(-110,17,140,3);
            rect(-110,27,10,3);
            rect(-120,37,10,3);
            rect(-140,37+5,20,3);
            rect(-170,47,30,3);
            fill(0);
            ellipse(20,20,15,5);
            ellipse(10,60,10,5);
            ellipse(30,60,10,5);
            ellipse(20,55,10,5);
            stroke(0);
            strokeWeight(3);
            line(20,20,10,60);
            line(20,20,30,60);
            line(20,20,20,55);
            noStroke();
            popMatrix();
        }break;
        case "Hunting-Rifle-Black":{
        pushMatrix();
            translate(x,y);
            scale(s);
            rotate(ang(r));
            fill(0);
            rect(-110,28,20,2);
            rect(-90,20,2,10);
            rect(-97,20,2,6);
            fill(0, 0, 0);
            rect(-100,0,130,20,0,0,5,0);
            rect(-110,0,50,10,5,0,0,0);
            rect(-170,10,70,20,5,0,5,0);
            rect(-170,30,60,10,0,0,5,0);
            rect(-170,35,50,10,0,0,5,0);
            rect(-170,40,30,10,0,0,5,5);
            fill(0);
            rect(20,0,150,10,0,0,0,5);
            rect(-110,0,15,10,5,0,0,0);
            fill(0);
            rect(-30,0,20,5);
            rect(-120,5,10,3);
            rect(-120,5,3,10);
            ellipse(-118,15,8,8);
            fill(0);
            rect(20,0,150,3);
            rect(-30,20,20,30);
            fill(0);
            rect(30,7,140,3);
            fill(255,255,255,40);
            rect(-110,0,130,3);
            rect(-170,10,50,3);
            fill(0,50);
            rect(-110,17,140,3);
            rect(-110,27,10,3);
            rect(-120,37,10,3);
            rect(-140,37+5,20,3);
            rect(-170,47,30,3);
            fill(0);
            ellipse(20,20,15,5);
            ellipse(10,60,10,5);
            ellipse(30,60,10,5);
            ellipse(20,55,10,5);
            stroke(0);
            strokeWeight(3);
            line(20,20,10,60);
            line(20,20,30,60);
            line(20,20,20,55);
            noStroke();
            popMatrix();
        }break;
        case "Phaser":{
        pushMatrix();
        translate(x,y);
        rotate(ang(r));
        scale(s);
        fill(100);
        rect(0,0,50,15,5,0,5,0);
        rect(50,1,15,10);
        rect(65,2,10,8);
        rect(10,39,25,2);
        rotate(ang(20));
        rect(10,0,12,35);
        fill(120);
        rect(10,10,3,25);
        fill(90);
        rect(10,33,15,2);
        rotate(ang(-20));
        rect(10,20,15,2);
        rect(25,15,2,7);
        rect(25,15,10,25);
        fill(120);
        rect(2,0,50,3,5,0,0,0);
        rect(50,1,15,3);
        rect(65,2,10,3);
        fill(80);
        rect(0,12,48,3,0,0,5,0);
        rect(49,10,15,3,0,0,5,0);
        rect(65,8,10,2);
        fill(0,200,230);
        stroke(0,100,100);
        strokeWeight(1);
        rect(27,15,6,3);
        rect(27,20,6,3);
        rect(27,25,6,3);
        rect(27,30,6,3);
        rect(27,35,6,3);
        noStroke();
        rect(0,2,50,2);
        rect(50,4,15,2);
        rect(65,6,10,2);
        rect(0,7,30,2);
        rect(30,7,2,7);
        fill(0,255,255);
        rect(75,2,2,8);
        popMatrix();
        }break;
        case "Phaser-Black":{
        pushMatrix();
        translate(x,y);
        rotate(ang(r));
        fill(0);
        rect(0,0,50,15,5,0,5,0);
        rect(50,1,15,10);
        rect(65,2,10,8);
        rect(10,39,25,2);
        rotate(ang(20));
        rect(10,0,12,35);
        fill(0);
        rect(10,10,3,25);
        fill(0);
        rect(10,33,15,2);
        rotate(ang(-20));
        rect(10,20,15,2);
        rect(25,15,2,7);
        rect(25,15,10,25);
        fill(0);
        rect(2,0,50,3,5,0,0,0);
        rect(50,1,15,3);
        rect(65,2,10,3);
        fill(0);
        rect(0,12,48,3,0,0,5,0);
        rect(49,10,15,3,0,0,5,0);
        rect(65,8,10,2);
        fill(0);
        stroke(0);
        strokeWeight(1);
        rect(27,15,6,3);
        rect(27,20,6,3);
        rect(27,25,6,3);
        rect(27,30,6,3);
        rect(27,35,6,3);
        noStroke();
        rect(0,2,50,2);
        rect(50,4,15,2);
        rect(65,6,10,2);
        rect(0,7,30,2);
        rect(30,7,2,7);
        fill(0,255,255);
        rect(75,2,2,8);
        popMatrix();
        }break;
        case "Chain_Gun":{
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(ang(r));
        fill(120);
        rect(0,0,50,5,5,0,0,0);
        fill(110);
        rect(0,5,50,5);
        fill(100);
        rect(0,10,50,5);
        rect(50,3,80,20);
        fill(80);
        rect(50,18,80,5);
        fill(120);
        rect(50,3,80,5);
        fill(150);
        rect(0,15,150,5);
        fill(120);
        rect(150,5,5,15);
        fill(50);
        rect(20,5,15,5);
        fill(80);
        rect(130,random(3,18),10,5);
        rect(130,random(3,18),10,5);
        rect(130,random(3,18),10,5);
        fill(150);
        rect(80,0,5,15);
        rotate(ang(-20));
        rect(75,10,5,20);
        rotate(ang(-20));
        rect(0,-15,5,17);
        rotate(ang(40));
        rect(-25,-15,20,5);
        fill(100);
        arc(-7,-10,10,10,ang(60),ang(180));
        popMatrix();
        }break;
        case "Tripod_Chain_Gun":{
        pushMatrix();
        translate(x,y);
        scale(s+0.2);
        rotate(ang(r));
        stroke(100);
        strokeWeight(3);
        line(75,50,65,90);
        line(85,50,95,90);
        line(80,50,80,80);
        noStroke();
        fill(120);
        rect(0,0,50,5,5,0,0,0);
        fill(110);
        rect(0,5,50,5);
        fill(100);
        rect(0,10,50,5);
        rect(50,3,80,20);
        fill(80);
        rect(50,18,80,5);
        fill(120);
        rect(50,3,80,5);
        fill(150);
        rect(0,15,150,5);
        fill(120);
        rect(150,5,5,15);
        fill(50);
        rect(20,5,15,5);
        fill(80);
        rect(130,random(3,18),10,5);
        rect(130,random(3,18),10,5);
        rect(130,random(3,18),10,5);
        fill(150);
        rect(80,0,5,15);
        rotate(ang(-20));
        rect(75,10,5,20);
        rotate(ang(-20));
        rect(0,-15,5,17);
        rotate(ang(40));
        rect(-25,-15,20,5);
        fill(100);
        arc(-7,-10,10,10,ang(60),ang(180));
        rect(70,40,20,10);
        arc(80,50,20,10,0,ang(180));
        fill(80);
        rect(70,20,20,10,0,0,5,5);
        ellipse(80,40,20,10);
        fill(100);
        rect(75,30,10,10,0,0,5,5);
        arc(80,20,30,15,0,ang(180));
        ellipse(65,90,10,5);
        ellipse(95,90,10,5);
        ellipse(80,80,10,5);
        popMatrix();
        }break;
        case "Chain-Gun-Black":{
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(ang(r));
        fill(0);
        rect(0,0,50,5,5,0,0,0);
        fill(0);
        rect(0,5,50,5);
        fill(0);
        rect(0,10,50,5);
        rect(50,3,80,20);
        fill(0);
        rect(50,18,80,5);
        fill(0);
        rect(50,3,80,5);
        fill(0);
        rect(0,15,150,5);
        fill(0);
        rect(150,5,5,15);
        fill(0);
        rect(20,5,15,5);
        fill(0);
        rect(130,random(3,18),10,5);
        rect(130,random(3,18),10,5);
        rect(130,random(3,18),10,5);
        fill(0);
        rect(80,0,5,15);
        rotate(ang(-20));
        rect(75,10,5,20);
        rotate(ang(-20));
        rect(0,-15,5,17);
        rotate(ang(40));
        rect(-25,-15,20,5);
        fill(0);
        arc(-7,-10,10,10,ang(60),ang(180)ang();
)        popMatrix();
        }break;
        case "Tripod-Chain-Gun-Black":{
        pushMatrix();
        translate(x,y);
        scale(s+0.2);
        rotate(ang(r));
        stroke(0);
        strokeWeight(3);
        line(75,50,65,90);
        line(85,50,95,90);
        line(80,50,80,80);
        noStroke();
        fill(0);
        rect(0,0,50,5,5,0,0,0);
        fill(0);
        rect(0,5,50,5);
        fill(0);
        rect(0,10,50,5);
        rect(50,3,80,20);
        fill(0);
        rect(50,18,80,5);
        fill(0);
        rect(50,3,80,5);
        fill(0);
        rect(0,15,150,5);
        fill(0);
        rect(150,5,5,15);
        fill(0);
        rect(20,5,15,5);
        fill(0);
        rect(130,random(3,18),10,5);
        rect(130,random(3,18),10,5);
        rect(130,random(3,18),10,5);
        fill(0);
        rect(80,0,5,15);
        rotate(ang(-20));
        rect(75,10,5,20);
        rotate(ang(-20));
        rect(0,-15,5,17);
        rotate(ang(40));
        rect(-25,-15,20,5);
        fill(0);
        arc(-7,-10,10,10,ang(60)ang(,an)g(180));
        rect(70,40,20,10);
        arc(80,50,20,10,0,ang(180));
        fill(0);
        rect(70,20,20,10,0,0,5,5);
        ellipse(80,40,20,10);
        fill(0);
        rect(75,30,10,10,0,0,5,5);
        arc(80,20,30,15,0,ang(180));
        ellipse(65,90,10,5);
        ellipse(95,90,10,5);
        ellipse(80,80,10,5);
        popMatrix();
        }break;
        case "Shotgun":{
        pushMatrix();
            translate(x,y);
            scale(s);
            rotate(ang(r));
            fill(50);
            rect(-110,28,20,2);
            rect(-90,20,2,10);
            rect(-97,20,2,6);
            fill(18, 66, 16);
            rect(-25,10,25,5);
            fill(27, 92, 24);
            rect(-100,0,80,20,0,0,10,0);
            fill(110, 85, 22);
            rect(-110,0,50,10,10,0,0,0);
            fill(27, 92, 24);
            rect(-170,10,70,20,5,0,5,0);
            fill(110, 85, 22);
            rect(-170,30,60,10,0,0,5,0);
            fill(27, 92, 24);
            rect(-170,35,50,10,0,0,5,0);
            fill(110, 85, 22);
            rect(-170,40,30,10,0,0,5,5);
            fill(27, 92, 24);
            rect(0,10,50,10,0,0,5,5);
            fill(120);
            rect(-20,0,150,10);
            fill(80);
            rect(-50,0,15,5);
            fill(100);
            rect(-20,0,150,3);
            fill(140);
            rect(-20,7,150,3);
            fill(255,255,255,40);
            rect(-110,0,130,3);
            rect(-170,10,50,3);
            fill(0,50);
            rect(-110,17,90,3);
            rect(-110,27,10,3);
            rect(-120,37,10,3);
            rect(-140,37+5,20,3);
            rect(-170,47,30,3);
            rect(0,17,50,3);
            popMatrix();
        }break;
    }
};
var drawBullet = function(type,x,y,s,r){
    switch(type){
     case "Pistol":{
     pushMatrix();
     translate(x,y);
     scale(s);
     rotate(ang(r));
     fill(173, 144, 0);
     rect(0,0,20,30);
     rect(2,30,16,2);
     rect(0,32,20,2);
     fill(166, 84, 30);
     arc(10,0,20,30,ang(180),ang(360));
     fill(189, 103, 38);
     arc(12,0,15,30,ang(180),ang(360));
     fill(200,120,50);
     rotate(ang(-30));
     ellipse(15,1,8,13);
     fill(245, 190, 142);
     ellipse(15,1,5,8);
     fill(255);
     ellipse(15,1,3,5);
     rotate(ang(30));
     fill(0,30);
     rect(0,0,5,30);
     rect(2,30,8,2);
     rect(0,32,5,2);
     fill(255,30);
     rect(15,0,5,30);
     rect(15,30,3,2);
     rect(10,32,10,2);
     popMatrix();
     }break;  
     case "Rifle":{
     pushMatrix();
     translate(x,y);
     scale(s);
     rotate(ang(r));
     fill(100);
     rect(5,0,20,10);
     rect(0,8,30,80,10,10,0,0);
     rect(3,88,24,2);
     rect(0,90,30,2);
     fill(166, 84, 30);
     arc(15,0,20,80,ang(180),ang(360));
     fill(189, 103, 38);
     arc(17,0,15,80,ang(180),ang(360));
     rotate(ang(80));
     fill(204, 117, 55);
     ellipse(-20,-23,29,7);
     fill(224, 130, 62);
     ellipse(-20,-23,24,5);
     fill(255);
     ellipse(-20,-23,20,3);
     rotate(ang(-80));
     fill(0,50);
     rect(5,0,5,10);
     rect(0,10,5,80,10,0,0,0);
     rect(3,88,10,2);
     rect(0,90,5,2);
     fill(0,30);
     rect(10,0,5,10);
     rect(5,10,5,80,10,0,0,0);
     rect(8,88,10,2);
     rect(5,90,5,2);
     fill(255,50);
     rect(20,0,5,10);
     rect(25,10,5,80,0,10,0,0);
     rect(90,15,10,2);
     fill(255,30);
     rect(15,0,5,10);
     rect(20,10,5,80,0,10,0,0);
     rect(15,85,10,2);
     popMatrix();
     }break;
     case "Sniper":{
     pushMatrix();
     translate(x,y);
     scale(s);
     rotate(ang(r));
     fill(200,150,0);
     rect(5,0,20,10);
     rect(0,8,30,100,10,10,0,0);
     rect(3,88,24,2);
     rect(0,90,30,2);
     fill(112, 112, 112);
     arc(15,0,20,80,ang(180),ang(360));
     fill(156, 156, 156);
     arc(17,0,15,80,ang(180),ang(360));
     rotate(ang(80));
     fill(171, 171, 171);
     ellipse(-20,-23,29,7);
     fill(201, 201, 201);
     ellipse(-20,-23,24,5);
     fill(255);
     ellipse(-20,-23,20,3);
     rotate(ang(-80));
     fill(200,150,0);
     rect(3,108,24,2);
     rect(0,110,30,2);
     fill(0,50);
     rect(5,0,5,10);
     rect(0,10,5,100,10,0,0,0);
     rect(3,108,10,2);
     rect(0,110,5,2);
     fill(0,30);
     rect(10,0,5,10);
     rect(5,10,5,100,10,0,0,0);
     rect(8,108,10,2);
     rect(5,110,5,2);
     fill(255,50);
     rect(20,0,5,10);
     rect(25,10,5,100,0,10,0,0);
     rect(110,15,10,2);
     fill(255,30);
     rect(15,0,5,10);
     rect(20,10,5,100,0,10,0,0);
     rect(15,85,10,2);
     popMatrix();
     }break;
     case "Shotgun":{
     pushMatrix();
     translate(x,y);
     scale(s);
     rotate(ang(r));
     fill(200,0,0);
     rect(0,0,20,40);
     fill(150,0,0);
     arc(5,0,10,4,ang(180),ang(360));
     arc(15,0,10,4,ang(180),ang(360));
     fill(150);
     rect(3,40,14,2);
     rect(0,42,20,2);
     fill(0,30);
     rect(0,0,5,40);
     rect(0,42,5,2);
     rect(3,40,5,2);
     fill(255,30);
     rect(15,0,5,40);
     rect(12,40,5,2);
     rect(15,42,5,2);
     popMatrix();
     }break;
     case "Chain-Round":{
         pushMatrix();
         translate(x,y);
         rotate(ang(r));
         scale(s);
         fill(120);
         rect(0,0,90,25);
         fill(100);
         rect(0,20,90,10);
         fill(140);
         rect(0,-5,90,10);
         drawBullet("Sniper",60,5,0.5,90);
         fill(80);
         rect(10,0,5,25);
         rect(45,0,5,25);
         popMatrix();
     }break;
    }
};
var a = 0.01;
var menu = function(){
    background(200);
    a+=0.03;if(a > 2.5){a = 0;}for(var i = 0; i < width; i+=2){stroke(i/a*1);line(i+50, 0, i-50, 600);}var metalicTexture = get(0, 0, width, height);background(0,0,0);
    for(var i = 0; i < height; i+=25){fill(i/2,i/4,0);noStroke();rect(0,i,width,25);}textSize(50);for(var i = 50; i < 100; i+=2){textSize(i);fill((i*2)+100,(i*2),0);text("Gunfire",300,100);}textSize(100);fill(100);text("Gunfire",300,100);textSize(40);text("Play",300,240);text("How",300,310);text("Guns",300,380);text("About",300,450);var metalicText = get(0,0,600,600);metalicTexture.mask(metalicText);image(metalicTexture, 0, 0);fill(255,10);stroke(0);strokeWeight(3);if(mouseX > 150&&mouseY > 200&&mouseX < 150+300&&mouseY < 260){fill(255,50);cursor(HAND);}else{fill(255,10);cursor(ARROW);}rect(150,200,300,60,20,0,20,0);if(mouseX > 150&&mouseY > 270&&mouseX < 150+300&&mouseY < 270+60){fill(255,50);cursor(HAND);}else{fill(255,10);}rect(150,270,300,60,20,0,20,0);if(mouseX > 150&&mouseY > 340&&mouseX < 150+300&&mouseY < 340+60){fill(255,50);cursor(HAND);}else{fill(255,10);}rect(150,340,300,60,20,0,20,0);if(mouseX > 150&&mouseY > 410&&mouseX < 150+300&&mouseY < 410+60){fill(255,50);cursor(HAND);}else{fill(255,10);}rect(150,410,300,60,20,0,20,0);mouseClicked = function(){if(mouseX > 150&&mouseY > 200&&mouseX < 150+300&&mouseY < 260){scene = "game";}if(mouseX > 150&&mouseY > 270&&mouseX < 150+300&&mouseY < 270+60){scene = "how";}if(mouseX > 150&&mouseY > 340&&mouseX < 150+300&&mouseY < 340+60){scene = "guns";}if(mouseX > 150&&mouseY > 410&&mouseX < 150+300&&mouseY < 410+60){scene = "about";}};drawGun("AK47-Black",500,300,1,-90);pushMatrix();scale(-1,1);drawGun("AK47-Black",-100,300,1,-90);popMatrix();drawGun("Pistol-Black",50,500,2,0);pushMatrix();scale(-1,1);drawGun("Pistol-Black",-550,500,2,0);popMatrix();
};
var rules = function(){
background(200);
    a+=0.03;
    if(a > 2.5){
        a = 0;
        
    }
    for(var i = 0; i < width; i+=2){
        stroke(i/a*1);
        line(i+50, 0, i-50, 600);
        
    }
    var metalicTexture = get(0, 0, width, height);
    background(0,0,0);
    
    
    
    for(var i = 0; i < height; i+=25){
        fill(i/2,i/4,0);
        noStroke();
        rect(0,i,width,25);
        
    }
    
    textSize(50);
    for(var i = 30; i < 80; i+=2){
        textSize(i);fill((i*2)+100,(i*2),0);
        text("Instructions",300,100);
        
    }
    for(var i = 10; i < 40; i+=2){
        textSize(i);fill((i*2)+80,(i*2)+30,0);
        text("Home",150,500);
    text("Play",450,500);
    }
    textSize(80);
    fill(100);
    text("Instructions",300,100);
    textSize(40);
    text("Home",150,500);
    text("Play",450,500);
    
    var metalicText = get(0,0,600,600);
    metalicTexture.mask(metalicText);
    image(metalicTexture, 0, 0);
    
    fill(255,50);
    strokeWeight(2);
    stroke(100);
    rect(50,150,500,270,10);
    textAlign(CENTER);
    textSize(20);
    fill(0);
    text("Most of the instructions will be explained in\nthe game. I'll just give you some tips on how\nto play it right.\n\nPlay the games to earn money.\nYou will then be able to buy some new guns,\nupgrades, and skins.\n\nThat's pretty much all.  Enjoy playing!",300,190);
    noFill();
    cursor(ARROW);
    stroke(0);
    strokeWeight(3);
    if(mouseX > 50&&mouseX < 250&&mouseY > 450&&mouseY < 520){
    fill(255,50);
    cursor(HAND);
    }else{noFill();}
    rect(50,450,200,70,15,0,15,0);
    if(mouseX > 350&&mouseX < 550&&mouseY > 450&&mouseY < 520){
    fill(255,50);
    cursor(HAND);
    }else{noFill();}
    rect(350,450,200,70,0,15,0,15);
    mouseClicked = function(){
        if(mouseX > 50&&mouseX < 250&&mouseY > 450&&mouseY < 520){
    scene = "menu";
    }
    if(mouseX > 350&&mouseX < 550&&mouseY > 450&&mouseY < 520){
    scene = "game";
    }
    };
    drawGun("Phaser-Black",100,540,1.25,0);
    pushMatrix();
    translate(500,540);
    scale(-1,1);
    drawGun("Phaser-Black",0,0,1.25,0);
    popMatrix();
};
var aboutScreen = function(){
    background(200);
    a+=0.03;
    if(a > 2.5){
        a = 0;
        
    }
    for(var i = 0; i < width; i+=2){
        stroke(i/a*1);
        line(i+50, 0, i-50, 600);
        
    }
    var metalicTexture = get(0, 0, width, height);
    background(0,0,0);
    
    
    
    for(var i = 0; i < height; i+=25){
        fill(i/2,i/4,0);
        noStroke();
        rect(0,i,width,25);
        
    }
    
    textSize(50);
    for(var i = 30; i < 80; i+=2){
        textSize(i);fill((i*2)+100,(i*2),0);
        text("About",300,100);
        
    }
    for(var i = 10; i < 40; i+=2){
        textSize(i);fill((i*2)+80,(i*2)+30,0);
        text("Home",150,500);
    text("Play",450,500);
    }
    textSize(80);
    fill(100);
    text("About",300,100);
    textSize(40);
    text("Home",150,500);
    text("Play",450,500);
    
    var metalicText = get(0,0,600,600);
    metalicTexture.mask(metalicText);
    image(metalicTexture, 0, 0);
    
    fill(255,50);
    strokeWeight(2);
    stroke(100);
    rect(50,150,500,270,10);
    textAlign(CENTER);
    textSize(20);
    fill(0);
    text("This might be one of my entries for the\nprimavera contest finale challenge.\nI don't think I will finish the unfinished scenes\nin the game anytime soon.  Just enjoy the\ngame as it now is and have fun.\n\n-LeviathanProgramming",300,190);
    noFill();
    cursor(ARROW);
    stroke(0);
    strokeWeight(3);
    if(mouseX > 50&&mouseX < 250&&mouseY > 450&&mouseY < 520){
    fill(255,50);
    cursor(HAND);
    }else{noFill();}
    rect(50,450,200,70,15,0,15,0);
    if(mouseX > 350&&mouseX < 550&&mouseY > 450&&mouseY < 520){
    fill(255,50);
    cursor(HAND);
    }else{noFill();}
    rect(350,450,200,70,0,15,0,15);
    mouseClicked = function(){
        if(mouseX > 50&&mouseX < 250&&mouseY > 450&&mouseY < 520){
    scene = "menu";
    }
    if(mouseX > 350&&mouseX < 550&&mouseY > 450&&mouseY < 520){
    scene = "game";
    }
    };
    noStroke();
    drawGun("Pistol-Black",100,540,1.25,0);
    pushMatrix();
    translate(500,540);
    scale(-1,1);
    drawGun("Pistol-Black",0,0,1.25,0);
    popMatrix();
};
var gunType = 0;
var gunDescriptions = [
    "The Pistol is a good\nweapon to have at\nyour side.  It deals\nmedium damage and\nholds a decent amount of\nammo in it's magazine.\n\nYou will start out with this\nweapon when you begin.",
    "This gun is something\nYou will WANT to have.\nIt has fifty\nrounds of ammo and is\ndecently accurate with\nlow recoil.",
    "The Rifle posseses\na high amount of\naccuracy,\nten rounds of high-\ndamage ammo, and\nlow recoil.  This is a\ndecently good weapon.",
    "The Sniper Rifle is\nalmost identical to\nthe Rifle but has\nfive more rounds\nof ammo, higher\ndamage, and very\nlow recoil.",
    "The Hunting Rifle\nis the best rifle\nyou'll be able to\nget.  It has extreme\ndamage, miniscule\nrecoil, and the best\naccuracy of any\nother gun.",
    "The Shotgun is an\nawesome weapon.\nIt shoots many bullets\nat once and can\ndamage a large range\nof targets at once.\nThe defects are that it\nisn't accurate and its\nrecoil is extreme.",
    "\nthe scorpion pistol\nis a fully-automatic\ngun with 75 rounds\nof ammo!  It's recoil\nis high and its\naccuracy is low\nbut hey, it's fully\nautomatic.",
    "The chain gun is one\nof the most powerful\nguns you will ever\ncome by.  It is fully\nautomatic and has\n250 rounds of ammo!\nIt's accuracy is low\nand it's recoil is really\nhigh but it's good,\nnonetheless.",
    "This is the most\npowerful of all the\nguns with super\nhigh damage and\na hulking load\nof ammo: 500\nrounds.",
    "This gun is extremely\npowerful, accurate, and\nawesome.  It is powered\nby an alien technology\nand is literally a hunting\nrifle you hold in your hand.\n\nIt is pretty expensive though.",
];
var gunTypes = ["Pistol","AK47","Rifle","Sniper_Rifle","Hunting_Rifle","Shotgun","Scorpion_Pistol","Chain_Gun","Tripod_Chain_Gun","Phaser"];
var gamePage = 0;
var shopScene = 0;
var targetMouseX = 0;
var targetMouseY = 0;
var gunScreen = function(){
    background(200);
    a+=0.03;
    if(a > 2.5){
        a = 0;
        
    }
    for(var i = 0; i < width; i+=2){
        stroke(i/a*1);
        line(i+50, 0, i-50, 600);
        
    }
    var metalicTexture = get(0, 0, width, height);
    background(0,0,0);
    
    
    
    for(var i = 0; i < height; i+=25){
        fill(i/2,i/4,0);
        noStroke();
        rect(0,i,width,25);
        
    }
    
    textSize(50);
    for(var i = 30; i < 80; i+=2){
        textSize(i);fill((i*2)+100,(i*2),0);
        text("Guns",300,100);
        
    }
    for(var i = 10; i < 40; i+=2){
        textSize(i);fill((i*2)+80,(i*2)+30,0);
        text("Home",150,500);
    text("Play",450,500);
    }
    textSize(80);
    fill(100);
    text("Guns",300,100);
    textSize(40);
    text("Home",150,500);
    text("Play",450,500);
    textSize(20);
    text("Left & right arrow keys to scroll through guns.",300,130);
    
    var metalicText = get(0,0,600,600);
    metalicTexture.mask(metalicText);
    image(metalicTexture, 0, 0);
    
    fill(255,50);
    strokeWeight(2);
    stroke(100);
    rect(50,150,500,270,10);
    textAlign(CENTER);
    textSize(30);
    fill(0);
    text(gunTypes[gunType],200,210);
    if(gunType === 0){
        drawGun("Pistol",100,250,3);
        fill(0);
        textSize(20);
        text(gunDescriptions[gunType],400,200);
    }
    if(gunType === 1){
        drawGun("AK47",220,250,1);
        fill(0);
        textSize(20);
        text(gunDescriptions[gunType],400,210);
    }
    if(gunType === 2){
        drawGun("Rifle",200,250,0.75);
        fill(0);
        textSize(20);
        text(gunDescriptions[gunType],400,210);
    }
    if(gunType === 3){
        drawGun("Sniper_Rifle",200,250,0.75);
        fill(0);
        textSize(20);
        text(gunDescriptions[gunType],430,210);
    }
    if(gunType === 4){
        drawGun("Hunting_Rifle",200,250,0.75);
        fill(0);
        textSize(20);
        text(gunDescriptions[gunType],430,210);
    }
    if(gunType === 5){
        drawGun("Shotgun",200,250,0.75);
        fill(0);
        textSize(20);
        text(gunDescriptions[gunType],420,190);
    }
    if(gunType === 6){
        drawGun("Scorpion_Pistol",180,250,1.8);
        fill(0);
        textSize(20);
        text(gunDescriptions[gunType],435,210);
    }
    if(gunType === 7){
        drawGun("Chain_Gun",110,250,1);
        fill(0);
        textSize(20);
        text(gunDescriptions[gunType],420,180);
    }
    if(gunType === 8){
        drawGun("Tripod_Chain_Gun",110,250,1);
        fill(0);
        textSize(18);
        text(gunDescriptions[gunType],450,220);
    }
    if(gunType === 9){
        drawGun("Phaser",100,240,2);
        fill(0);
        textSize(18);
        text(gunDescriptions[gunType],400,220);
    }
    keyReleased = function(){
    if(keyCode === LEFT){
        gunType--;
    }
    if(keyCode === RIGHT){
        gunType++;
    }
    };
    if(gunType < 0){
      gunType = 9;  
    }
    if(gunType > 9){
      gunType = 0;  
    }
    noFill();
    cursor(ARROW);
    stroke(0);
    strokeWeight(3);
    if(mouseX > 50&&mouseX < 250&&mouseY > 450&&mouseY < 520){
    fill(255,50);
    cursor(HAND);
    }else{noFill();}
    rect(50,450,200,70,15,0,15,0);
    if(mouseX > 350&&mouseX < 550&&mouseY > 450&&mouseY < 520){
    fill(255,50);
    cursor(HAND);
    }else{noFill();}
    rect(350,450,200,70,0,15,0,15);
    mouseClicked = function(){
        if(mouseX > 50&&mouseX < 250&&mouseY > 450&&mouseY < 520){
    scene = "menu";
    }
    if(mouseX > 350&&mouseX < 550&&mouseY > 450&&mouseY < 520){
    scene = "game";
    }
    };
    noStroke();
    drawGun("Pistol-Black",100,540,1.25,0);
    pushMatrix();
    translate(500,540);
    scale(-1,1);
    drawGun("Pistol-Black",0,0,1.25,0);
    popMatrix();
};
var weapon_equipped = "Tripod_Chain_Gun";
var player = {
health:100,
maxHealth:100,
money:0,
healthpacks:0,
skin:"basic",
level:1,
xp:0,
damageInc:1,
speed:2.5,
weaponsOwned:[true,false,false,false,false,false,false,false,false,false],
draw:function(x,y,s){
    noStroke();
    switch(player.skin){
       case "basic":
           pushMatrix();
           translate(x,y);
           scale(s);
           fill(240, 210, 166);
           ellipse(0,0,50,50);
           fill(0,0,255);
           rect(-25,25,50,100);
           popMatrix();
       break;
    }
},
};

var gunStats = {
Pistol: {
   ammo:10, 
   max_ammo:10,
   damage:10,
   recoil:20,
   //lower is better
   accuracy:50,
   bullet:"Pistol",
   fireMode:"semi",
},
Rifle: {
   ammo:15, 
   max_ammo:15,
   damage:25,
   recoil:15,
   //lower is better
   accuracy:50,
   bullet:"Rifle",
   fireMode:"semi",
},
Sniper_Rifle:{
    ammo:10,
    max_ammo:10,
    damage:50,
    recoil:10,
    bullet:"Sniper",
    fireMode:"semi",
},
Hunting_Rifle:{
    ammo:15,
    max_ammo:15,
    damage:75,
    recoil:5,
    bullet:"Sniper",
    fireMode:"semi",
},
AK47:{
    ammo:50,
    max_ammo:50,
    damage:5,
    recoil:5,
    bullet:"Rifle",
    fireMode:"semi",
},
Shotgun:{
    ammo:8,
    max_ammo:8,
    damage:30,
    recoil:20,
    bullet:"Shotgun",
    fireMode:"semi",
},
Scorpion_Pistol:{
    ammo:30,
    max_ammo:30,
    damage:15,
    recoil:20,
    bullet:"Pistol",
    fireMode:"auto",
    fireRate:5,
},
Chain_Gun:{
    ammo:100,
    max_ammo:100,
    damage:5,
    recoil:20,
    bullet:"Chain-Round",
    fireMode:"auto",
    fireRate:3,
},
Tripod_Chain_Gun:{
    ammo:250,
    max_ammo:250,
    damage:7,
    recoil:15,
    bullet:"Chain-Round",
    fireMode:"auto",
    fireRate:2,
},
Phaser:{
    ammo:100,
    max_ammo:100,
    damage:50,
    recoil:0,
    bullet:"Pistol",
    fireMode:"auto",
    fireRate:5,
},
};
var saveGame = function(){
    alert("I haven't made that yet");
};
var gunType1 = 0;
var aimScale = 1;
var moveX = 0;
var moveY = 0;
var huntingMags = 5;
var animals = [];
var bullets = [];
var aliens = [];
var zombies = [];
var blts = [];
var zoms = [];
var shop = function(){
    cursor(ARROW);
    background(100);
    strokeWeight(2);
    a+=0.03;
    if(a > 3){
        a = 0;
        
    }
    for(var i = 0; i < width; i+=2){
        stroke(i/a*1);
        line(i+50, 0, i-50, 600);
        
    }
    var metalicTexture = get(0, 0, width, height);
    background(0,0,0);
    for(var i = 0; i < height; i+=25){
        fill(i/2,i/4,0);
        noStroke();
        rect(0,i,width,25);
        
    }
    textSize(50);
    for(var i = 20; i < 50; i+=2){
        textSize(i);fill((i*2)+100,(i*2),0);
        text("Gunfire",300,60);
        
    }
    for(var i = 10; i < 40; i+=2){
    textSize(i);fill((i*2)+80,(i*2)+30,0);
    text("Quit",70,585);
    text("Back",600-70,585);
    }
    textSize(50);
    fill(100);
    text("Gunfire",300,60);
    textSize(40);
    text("Quit",70,585);
    textSize(40);
    text("Back",530,585);
    if(shopScene === 0){
    textSize(30);
    textLeading(30);
    text("Health\n\nHealth Pack\n\nDamage\n\nArmor\n\nSpeed",300,175);
    text("Everything costs $100",300,100);
    text("You have $"+player.money,300,500);
    }
    if(shopScene === 1){
    textSize(30);
    text("Up & Down arrow keys to\nscroll through guns",300,120);
    text("You have $"+player.money,300,500);
    text("Guns",300,435);
    }
    textSize(60);
    text("→",540,320);
    text("←",60,320);
    var metalicText = get(0,0,600,600);
    metalicTexture.mask(metalicText);
    image(metalicTexture, 0, 0);
    
    
    
    
    if(shopScene === 0){
    noFill();
    stroke(0);
    strokeWeight(2);
    
    
    stroke(0);
    if(mouseX > 175&&mouseX < 75+250&&mouseY > 80+60&&mouseY < 140+50){fill(255,100);cursor(HAND);}else{noFill();}
    rect(175,80+60,250,50,15,0,15,0);
    if(mouseX > 175&&mouseX < 75+250&&mouseY > 80+120&&mouseY < 140+60+50){fill(255,100);cursor(HAND);}else{noFill();}
    rect(175,80+120,250,50,15,0,15,0);
    if(mouseX > 175&&mouseX < 75+250&&mouseY > 80+180&&mouseY < 140+50+120){fill(255,100);cursor(HAND);}else{noFill();}
    rect(175,80+180,250,50,15,0,15,0);
    if(mouseX > 175&&mouseX < 75+250&&mouseY > 80+240&&mouseY < 140+50+180){fill(255,100);cursor(HAND);}else{noFill();}
    rect(175,80+180+60,250,50,15,0,15,0);
    if(mouseX > 175&&mouseX < 75+250&&mouseY > 80+300&&mouseY < 140+50+240){fill(255,100);cursor(HAND);}else{noFill();}
    rect(175,80+180+120,250,50,15,0,15,0);
   
    }
    if(shopScene === 1){
        noFill();
        stroke(0);
        if(mouseX > 125&&mouseX < 600-125&&mouseY > 200&&mouseY < 400){fill(255,50);cursor(HAND);}
        rect(125,200,350,200);
        if(mouseX > 225&&mouseX < 225+150&&mouseY > 400&&mouseY < 450){fill(255,50);cursor(HAND);}else{noFill();}
        rect(225,400,150,50,0,0,20,20);
        
        if(gunType1 === 0){
            drawGun("Pistol",150,250,3);
            textSize(30);
            fill(0);
            if(!player.weaponsOwned[gunType1]){
            text("$0",300,240);
            }if(weapon_equipped === "Pistol"){
            text("Equipped",300,240);
            }else{
            text("Owned",300,240);
            }
            
            if(mouseIsPressed&&mouseX > 125&&mouseX < 600-125&&mouseY > 200&&mouseY < 400){
            if(player.money > 0&&player.weaponsOwned[0] !== true){
                player.money-=0;
            }if(player.weaponsOwned[0]){
                weapon_equipped = "";
                weapon_equipped = "Pistol";
            }
            }
            
        }
        if(gunType1 === 1){
            drawGun("AK47",325,250,1.25,0);
            textSize(30);
            fill(0);
            if(player.weaponsOwned[gunType1] !== true){
            text("$250",300,240);
            }if(player.weaponsOwned[gunType1]&&weapon_equipped !== "AK47"){
            text("Owned",300,240);
            }if(weapon_equipped === "AK47"&&player.weaponsOwned[1]){
            text("Equipped",300,240);
            }
            
            if(mouseIsPressed&&mouseX > 125&&mouseX < 600-125&&mouseY > 200&&mouseY < 400){
            if(player.weaponsOwned[gunType1] !== true&&player.money > 250){
                player.money-=250;
                player.weaponsOwned[gunType1] = true;
                weapon_equipped = "";
                weapon_equipped = "AK47";
                
            }
            if(player.weaponsOwned[gunType1]&&weapon_equipped !== "AK47"){
                weapon_equipped = "";
                weapon_equipped = "AK47";
            }
            
            }
        }
        if(gunType1 === 2){
            drawGun("Rifle",300,275,1,0);
            textSize(30);
            fill(0);
            textSize(30);
            fill(0);
            if(player.weaponsOwned[gunType1] !== true){
            text("$500",300,240);
            }if(player.weaponsOwned[gunType1]&&weapon_equipped !== "Rifle"){
            text("Owned",300,240);
            }if(weapon_equipped === "Rifle"&&player.weaponsOwned[gunType1]){
            text("Equipped",300,240);
            }
            
            if(mouseIsPressed&&mouseX > 125&&mouseX < 600-125&&mouseY > 200&&mouseY < 400){
            if(player.weaponsOwned[gunType1] !== true&&player.money >= 500){
                player.money-=500;
                player.weaponsOwned[gunType1] = true;
                weapon_equipped = "";
                weapon_equipped = "Rifle";
                
            }
            if(player.weaponsOwned[gunType1]&&weapon_equipped !== "Rifle"){
                weapon_equipped = "";
                weapon_equipped = "Rifle";
            }
            
            }
        }
        if(gunType1 === 3){
            drawGun("Sniper_Rifle",300,275,1,0);
            textSize(30);
            fill(0);
            if(player.weaponsOwned[gunType1] !== true){
            text("$750",300,240);
            }if(player.weaponsOwned[gunType1]&&weapon_equipped !== "Sniper_Rifle"){
            text("Owned",300,240);
            }if(weapon_equipped === "Sniper_Rifle"&&player.weaponsOwned[gunType1]){
            text("Equipped",300,240);
            }
            
            if(mouseIsPressed&&mouseX > 125&&mouseX < 600-125&&mouseY > 200&&mouseY < 400){
            if(player.weaponsOwned[gunType1] !== true&&player.money >= 750){
                player.money-=750;
                player.weaponsOwned[gunType1] = true;
                weapon_equipped = "";
                weapon_equipped = "Sniper_Rifle";
                
            }
            if(player.weaponsOwned[gunType1]&&weapon_equipped !== "Sniper_Rifle"){
                weapon_equipped = "";
                weapon_equipped = "Sniper_Rifle";
            }
            
            }
        }
        if(gunType1 === 4){
            drawGun("Hunting_Rifle",300,275,1,0);
            textSize(30);
            fill(0);
            textSize(30);
            fill(0);
            if(player.weaponsOwned[gunType1] !== true){
            text("$1000",300,240);
            }if(player.weaponsOwned[gunType1]&&weapon_equipped !== "Hunting_Rifle"){
            text("Owned",300,240);
            }if(weapon_equipped === "Hunting_Rifle"&&player.weaponsOwned[gunType1]){
            text("Equipped",300,240);
            }
            
            if(mouseIsPressed&&mouseX > 125&&mouseX < 600-125&&mouseY > 200&&mouseY < 400){
            if(player.weaponsOwned[gunType1] !== true&&player.money >= 1000){
                player.money-=1000;
                player.weaponsOwned[gunType1] = true;
                weapon_equipped = "";
                weapon_equipped = "Hunting_Rifle";
                
            }
            if(player.weaponsOwned[gunType1]&&weapon_equipped !== "AK47"){
                weapon_equipped = "";
                weapon_equipped = "Hunting_Rifle";
            }
            
            }
        }
        if(gunType1 === 5){
            drawGun("Shotgun",300,275,1,0);
            textSize(30);
            fill(0);
            textSize(30);
            fill(0);
            if(player.weaponsOwned[gunType1] !== true){
            text("$1250",300,240);
            }if(player.weaponsOwned[gunType1]&&weapon_equipped !== "Shotgun"){
            text("Owned",300,240);
            }if(weapon_equipped === "Shotgun"&&player.weaponsOwned[gunType1]){
            text("Equipped",300,240);
            }
            
            if(mouseIsPressed&&mouseX > 125&&mouseX < 600-125&&mouseY > 200&&mouseY < 400){
            if(player.weaponsOwned[gunType1] !== true&&player.money >= 1250){
                player.money-=1250;
                player.weaponsOwned[gunType1] = true;
                weapon_equipped = "";
                weapon_equipped = "Shotgun";
                
            }
            if(player.weaponsOwned[gunType1]&&weapon_equipped !== "Shotgun"){
                weapon_equipped = "";
                weapon_equipped = "Shotgun";
            }
            
            }
        }
        if(gunType1 === 6){
            drawGun("Scorpion_Pistol",300,260,2,0);
            textSize(30);
            fill(0);
            textSize(30);
            fill(0);
            if(player.weaponsOwned[gunType1] !== true){
            text("$1500",300,240);
            }if(player.weaponsOwned[gunType1]&&weapon_equipped !== "Scorpion_Pistol"){
            text("Owned",300,240);
            }if(weapon_equipped === "Scorpion_Pistol"&&player.weaponsOwned[gunType1]){
            text("Equipped",300,240);
            }
            
            if(mouseIsPressed&&mouseX > 125&&mouseX < 600-125&&mouseY > 200&&mouseY < 400){
            if(player.weaponsOwned[gunType1] !== true&&player.money >= 1500){
                player.money-=1500;
                player.weaponsOwned[gunType1] = true;
                weapon_equipped = "";
                weapon_equipped = "Scorpion_Pistol";
                
            }
            if(player.weaponsOwned[gunType1]&&weapon_equipped !== "Scorpion_Pistol"){
                weapon_equipped = "";
                weapon_equipped = "Scorpion_Pistol";
            }
            
            }
        }
        if(gunType1 === 7){
            drawGun("Chain_Gun",200,300,1.5,0);
            textSize(30);
            fill(0);
            textSize(30);
            fill(0);
            if(player.weaponsOwned[gunType1] !== true){
            text("$2000",300,240);
            }if(player.weaponsOwned[gunType1]&&weapon_equipped !== "Chain_Gun"){
            text("Owned",300,240);
            }if(weapon_equipped === "Chain_Gun"&&player.weaponsOwned[gunType1]){
            text("Equipped",300,240);
            }
            
            if(mouseIsPressed&&mouseX > 125&&mouseX < 600-125&&mouseY > 200&&mouseY < 400){
            if(player.weaponsOwned[gunType1] !== true&&player.money >= 2000){
                player.money-=2000;
                player.weaponsOwned[gunType1] = true;
                weapon_equipped = "";
                weapon_equipped = "Chain_Gun";
                
            }
            if(player.weaponsOwned[gunType1]&&weapon_equipped !== "Chain_Gun"){
                weapon_equipped = "";
                weapon_equipped = "Chain_Gun";
            }
            
            }
        }
        if(gunType1 === 8){
            drawGun("Tripod_Chain_Gun",200,270,1,0);
            textSize(30);
            fill(0);
            textSize(30);
            fill(0);
            if(player.weaponsOwned[gunType1] !== true){
            text("$5000",300,240);
            }if(player.weaponsOwned[gunType1]&&weapon_equipped !== "Tripod_Chain_Gun"){
            text("Owned",300,240);
            }if(weapon_equipped === "Tripod_Chain_Gun"&&player.weaponsOwned[gunType1]){
            text("Equipped",300,240);
            }
            
            if(mouseIsPressed&&mouseX > 125&&mouseX < 600-125&&mouseY > 200&&mouseY < 400){
            if(player.weaponsOwned[gunType1] !== true&&player.money >= 5000){
                player.money-=5000;
                player.weaponsOwned[gunType1] = true;
                weapon_equipped = "";
                weapon_equipped = "Tripod_Chain_Gun";
                
            }
            if(player.weaponsOwned[gunType1]&&weapon_equipped !== "Tripod_Chain_Gun"){
                weapon_equipped = "";
                weapon_equipped = "Tripod_Chain_Gun";
            }
            
            }
        }
        if(gunType1 === 9){
            drawGun("Phaser",200,260,2.5,0);
            textSize(30);
            fill(0);
            textSize(30);
            fill(0);
            if(player.weaponsOwned[gunType1] !== true){
            text("$10000",300,240);
            }if(player.weaponsOwned[gunType1]&&weapon_equipped !== "Phaser"){
            text("Owned",300,240);
            }if(weapon_equipped === "Phaser"&&player.weaponsOwned[gunType1]){
            text("Equipped",300,240);
            }
            
            if(mouseIsPressed&&mouseX > 125&&mouseX < 600-125&&mouseY > 200&&mouseY < 400){
            if(player.weaponsOwned[gunType1] !== true&&player.money >= 10000){
                player.money-=10000;
                player.weaponsOwned[gunType1] = true;
                weapon_equipped = "";
                weapon_equipped = "Phaser";
                
            }
            if(player.weaponsOwned[gunType1]&&weapon_equipped !== "Phaser"){
                weapon_equipped = "";
                weapon_equipped = "Phaser";
            }
            
            }
        }
        keyReleased = function(){
          if(keyCode === UP){
              gunType1--;
              if(gunType1 < 0){
                gunType1 = 9;  
              }
          }
          if(keyCode === DOWN){
              gunType1++;
              if(gunType1 > 9){
                gunType1 = 0;  
              }
          }
        };
    }
    
    
    
    stroke(0);
    if(mouseX > 500&&mouseX < 580&&mouseY > 250&&mouseY < 350){fill(255,100);cursor(HAND);}else{noFill();}
    rect(500,250,80,100,15,0,0,15);
    if(mouseX > 20&&mouseX < 100&&mouseY > 250&&mouseY < 350){fill(255,100);cursor(HAND);}else{noFill();}
    rect(20,250,80,100,0,15,15,0);
    
    if(mouseX > 20&&mouseX < 120&&mouseY > 540&&mouseY < 590){cursor(HAND);fill(255,50);}else{noFill();}
    rect(20,540,100,50,15,0,15,0);
    if(mouseX > 460&&mouseX < 595&&mouseY > 540&&mouseY < 590){cursor(HAND);fill(255,50);}else{noFill();}
    rect(460,540,135,50,0,15,0,15);
    
    mouseClicked = function(){
        if(mouseX > 20&&mouseX < 120&&mouseY > 540&&mouseY < 590){
            scene = "menu";
        }
        if(mouseX > 460&&mouseX < 595&&mouseY > 540&&mouseY < 590){
            scene = "game";
        }
        if(shopScene === 0){
        if(mouseX > 175&&mouseX < 75+250&&mouseY > 80+60&&mouseY < 140+50){
                 if(player.money >= 100){
                player.maxHealth+=10;
                if(player.health < player.maxHealth-10){
                player.health+=10;
                }if(player.health > player.maxHealth-10){
                player.health = player.maxHealth;
                }
                player.money-=100;
                 }else{
                    alert("Not Enough Money"); 
                 }
             }
        if(mouseX > 175&&mouseX < 75+250&&mouseY > 80+120&&mouseY < 140+60+50){
                 if(player.money >= 100){
                player.healthpacks++;
                player.money-=100;
             }else{
                    alert("Not Enough Money"); 
             }
             }
        if(mouseX > 175&&mouseX < 75+250&&mouseY > 80+180&&mouseY < 140+50+120){
            if(player.money >= 100){
                player.damageInc+=0.25;
                player.money-=100;
                 
             }else{
                    alert("Not Enough Money"); 
             }
        }
        if(mouseX > 175&&mouseX < 75+250&&mouseY > 80+240&&mouseY < 140+50+180){
            if(player.money >= 100){
                player.maxHealth+=10;
                if(player.health < player.maxHealth-10){
                player.health+=10;
                }if(player.health > player.maxHealth-10){
                player.health = player.maxHealth;
                }
                player.money-=100;
             }else{
                    alert("Not Enough Money"); 
             }
        }
        if(mouseX > 175&&mouseX < 75+250&&mouseY > 80+300&&mouseY < 140+50+240){
            if(player.money >= 100){
                player.speed++;
                player.money-=100;
             }else{
                    alert("Not Enough Money"); 
             }
        }
        
        }
        if(mouseX > 500&&mouseX < 580&&mouseY > 250&&mouseY < 350){
            shopScene++;
            if(shopScene > 1){
                shopScene = 0;
            }
        }
        if(mouseX > 20&&mouseX < 100&&mouseY > 250&&mouseY < 350){
            shopScene--;
            if(shopScene < 0){
                shopScene = 1;
            }
        }
        
        if(shopScene === 1){
         if(mouseX > 225&&mouseX < 225+150&&mouseY > 400&&mouseY < 450){
            scene = "guns";
         }
        }
    };
};
var xinc = (pmouseX/-5);
var yinc = (pmouseY/-5);
var world1X = 0;
var mouseIsReleased = false;
var Animal = function(x,y,type){
    this.x = x;
    this.y = y;
    this.type = type;
    this.speed = 2;
    this.width = 50;
    this.height = 50;
    this.reward = 5;
    this.dead = false;
    this.dir = random(0,4);
    switch(this.type){
        case 1:
        this.speed = 3;
        this.width = 50;
        this.height = 50;
        this.reward = 10;
        break;
        case 2:
        this.speed = 5;
        this.width = 50;
        this.height = 50;
        this.reward = 20;
        break;
        case 3:
        this.speed = 5;
        this.width = 75;
        this.height = 75;
        this.reward = 15;
        break;
        case 4:
        this.speed = 2;
        this.width = 20;
        this.height = 20;
        this.reward = 20;
        break;
        case 5:
        this.speed = 10;
        this.width = 50;
        this.height = 50;
        this.reward = 75;
        break;
        case 6:
        this.speed = 3;
        this.width = 30;
        this.height = 30;
        this.reward = 10;
        break;
        case 7:
        this.speed = 1;
        this.width = 50;
        this.height = 50;
        this.reward = 5;
        break;
    }
};
Animal.prototype.draw = function() {
    switch(this.type){
        case 0:
        image(getImage("avatars/duskpin-tree"),this.x,this.y,this.width,this.height);
        break;
        case 1:
        image(getImage("avatars/leafers-tree"),this.x,this.y,this.width,this.height);
        break;
        case 2:
        image(getImage("avatars/aqualine-tree"),this.x,this.y,this.width,this.height);
        break;
        case 3:
        image(getImage("avatars/duskpin-ultimate"),this.x,this.y,this.width,this.height);
        break;
        case 4:
        image(getImage("avatars/orange-juice-squid"),this.x,this.y,this.width,this.height);
        break;
        case 5:
        image(getImage("avatars/primosaur-ultimate"),this.x,this.y,this.width,this.height);
        break;
        case 6:
        image(getImage("creatures/Hopper-Happy"),this.x,this.y,this.width,this.height);
        break;
        case 7:
        image(getImage("avatars/piceratops-tree"),this.x,this.y,this.width,this.height);
        break;
    }
};
Animal.prototype.allowKill = function(xVar,yVar,mVar){
    if(mouseIsPressed&&gunStats[weapon_equipped].ammo >= 0){
        if(xVar > this.x+mVar && yVar > this.y && xVar < this.x+this.width+mVar && yVar < this.y+this.height){
            player.money+=this.reward;
            this.dead = true;
        }
    }
};
mouseReleased = function(){
    mouseIsReleased = true;
};
Animal.prototype.move = function(){
    if(frameCount % 25 === 0){
    this.dir = floor(random(0,8));
    }
    if(this.dir === 0){
        this.x+=this.speed;
    }
    if(this.dir === 1){
        this.x-=this.speed;
    }
    if(this.dir === 2){
        this.y+=this.speed;
    }
    if(this.dir === 3){
        this.y-=this.speed;
    }
    if(this.dir === 4){
        this.x+=this.speed;
        this.y+=this.speed;
    }
    if(this.dir === 5){
        this.x-=this.speed;
        this.y+=this.speed;
    }
    if(this.dir === 6){
        this.y+=this.speed;
        this.x-=this.speed;
    }
    if(this.dir >= 7){
        this.y-=this.speed;
        this.x+=this.speed;
    }
    if(this.x < 0){
        this.x = 0;
    }
    if(this.x > 1200){
        this.x = 1200;
    }
    if(this.y < 400){
        this.y = 400;
    }
    if(this.y > height-this.height){
        this.y = height-this.height;
    }
    
};
var testAnimal = new Animal(300,400,5);
var game1 = function(){
    if(gunStats[weapon_equipped].ammo >= 0){
    pushMatrix();
    translate(pmouseX/-5,pmouseY/-5);
    background(0,150,200);
    noStroke();
    fill(0,180,0);
    rect(-100,400,900,400);
    strokeWeight(10);
    stroke(128, 100, 17);
    line(270,400,220,450);
    line(330,400,380,450);
    line(250,425,350,425);
    line(300,400,300,430);
    noStroke();
    fill(200, 0, 0);
    ellipse(300,375,100,100);
    fill(255);
    ellipse(300,375,80,80);
    fill(200,0,0);
    ellipse(300,375,60,60);
    fill(255);
    ellipse(300,375,40,40);
    fill(200,0,0);
    ellipse(300,375,20,20);
    noFill();
    stroke(255, 0, 0);
    strokeWeight(1);
    cursor("none");
    var xDist = mouseX-targetMouseX;
    var yDist = mouseY-targetMouseY;
    translate(pmouseX/5,pmouseY/5);
    pushMatrix();
    translate(targetMouseX,targetMouseY);
    scale(aimScale);
    ellipse(0,0,10,10);
    ellipse(0,0,100,100);
    line(0,-60,0,+60);
    line(-60,0,+60,0);
    for(var i = 0; i <= 120; i+=10){
        line(i-60,-5,i-60,5);
        line(-5,i-60,5,i-60);
    }
    popMatrix();
    translate(pmouseX/-5,pmouseY/-5);
    targetMouseX+=xDist/7.5;
    targetMouseY+=yDist/7.5;
    fill(0);
    translate(pmouseX/5,pmouseY/5);
    textSize(20);
    text("Weapon Equipped: "+weapon_equipped+";  Money: "+player.money,300,30);translate(pmouseX/-5,pmouseY/-5);
    
        translate(pmouseX/5,pmouseY/5);
        for(var i = 0; i <= gunStats[weapon_equipped].ammo; i++){
            noStroke();
            if(gunStats[weapon_equipped].bullet === "Pistol"){
            drawBullet(gunStats[weapon_equipped].bullet,i*30+20,550);
            }
            if(gunStats[weapon_equipped].bullet === "Rifle"){
            drawBullet(gunStats[weapon_equipped].bullet,i*30+20,550,0.5);
            }
            if(gunStats[weapon_equipped].bullet === "Sniper"){
            drawBullet(gunStats[weapon_equipped].bullet,i*30+20,530,0.5);
            }
            if(gunStats[weapon_equipped].bullet === "Shotgun"){
            drawBullet(gunStats[weapon_equipped].bullet,i*30+20,550,1);
            }
            if(gunStats[weapon_equipped].bullet === "Chain-Round"){
            drawBullet(gunStats[weapon_equipped].bullet,i*30+20,590,1,-90);
            }
        }
        if(gunStats[weapon_equipped].fireMode === "semi"||gunStats[weapon_equipped].fireMode === "multiple"){
        mouseClicked = function(){
            playSound(getSound("retro/hit2"));
        gunStats[weapon_equipped].ammo--;
        targetMouseY-=gunStats[weapon_equipped].recoil;
        aimScale = 1.1;
        if(targetMouseX > 250+xinc&&targetMouseX < 350+xinc&&targetMouseY-gunStats[weapon_equipped].recoil > 325+yinc&&targetMouseY-gunStats[weapon_equipped].recoil < 425+yinc){
            player.money+=gunStats[weapon_equipped].damage; 
        }
        if(targetMouseX > 290+xinc&&targetMouseX < 310+xinc&&targetMouseY-gunStats[weapon_equipped].recoil > 365+yinc&&targetMouseY-gunStats[weapon_equipped].recoil < 385+yinc){
            
          player.money+=50+gunStats[weapon_equipped].damage; 
            
        
        
        }
    };
        }else{
            if(mouseIsPressed){
                if(frameCount % gunStats[weapon_equipped].fireRate === 0){
                    playSound(getSound("retro/hit2"));
                gunStats[weapon_equipped].ammo--;
        targetMouseY-=gunStats[weapon_equipped].recoil;
        aimScale = 1.1;
        if(targetMouseX > 250+xinc&&targetMouseX < 350+xinc&&targetMouseY-gunStats[weapon_equipped].recoil > 325+yinc&&targetMouseY-gunStats[weapon_equipped].recoil < 425+yinc){
            player.money+=gunStats[weapon_equipped].damage; 
        }
        if(targetMouseX > 290+xinc&&targetMouseX < 310+xinc&&targetMouseY-gunStats[weapon_equipped].recoil > 365+yinc&&targetMouseY-gunStats[weapon_equipped].recoil < 385+yinc){
            
          player.money+=2*gunStats[weapon_equipped].damage; 
            
        
        
        }
            }
            }
        }
    if(aimScale > 1){
        aimScale-=0.01;
    }
    popMatrix();
    }
    else{
        scene = "game";
    }
};
var addAnimals = function(){
for(var i = 0; i < 3; i++){
        animals.push(new Animal(0,300,0));
        animals.push(new Animal(200,300,1));
        animals.push(new Animal(400,300,2));
        animals.push(new Animal(600,300,3));
        animals.push(new Animal(800,300,4));
        animals.push(new Animal(1000,300,5));
        animals.push(new Animal(1200,300,6));
        animals.push(new Animal(12000,300,7));
}
};
addAnimals();
var game = function(){
    if(scene === "game"){
    cursor(ARROW);
    background(100);
    a+=0.03;
    if(a > 3){
        a = 0;
        
    }
    for(var i = 0; i < width; i+=2){
        stroke(i/a*1);
        line(i+50, 0, i-50, 600);
        
    }
    var metalicTexture = get(0, 0, width, height);
    background(0,0,0);
    for(var i = 0; i < height; i+=25){
        fill(i/2,i/4,0);
        noStroke();
        rect(0,i,width,25);
        
    }
    textSize(50);
    for(var i = 20; i < 50; i+=2){
        textSize(i);fill((i*2)+100,(i*2),0);
        text("Gunfire",300,60);
        
    }
    for(var i = 10; i < 40; i+=2){
    textSize(i+20);fill((i*2)+80,(i*2)+30,0);
    text("←",70,585);
    textSize(i+20);
    text("→",530,585);
    textSize(i);
    text("Quit",300,585);
    }
    textSize(50);
    fill(100);
    text("Gunfire",300,60);
    textSize(60);
    text("←",70,585);
    textSize(60);
    text("→",530,585);
    textSize(40);
    text("Quit",300,585);
    var metalicText = get(0,0,600,600);
    metalicTexture.mask(metalicText);
    image(metalicTexture, 0, 0);
    
    
    
    
    
    
    if(gamePage === 0){
        stroke(0);
        strokeWeight(2);
        fill(0,150,250);
        rect(20,80,200,200,5);
        noStroke();
        fill(0,100,0);
        rect(22,220,197,60,0,0,5,5);
        fill(115, 65, 11);
        rect(110,180,20,50);
        fill(200,0,0);
        ellipse(120,180,70,60);
        fill(255);
        ellipse(120,180,60,50);
        fill(200,0,0);
        ellipse(120,180,50,40);
        fill(255);
        ellipse(120,180,40,30);
        fill(200,0,0);
        ellipse(120,180,30,20);
        fill(255);
        ellipse(120,180,20,10);
        fill(200,0,0);
        ellipse(120,180,10,7);
        if(mouseX > 20&&mouseX < 220&&mouseY > 80&&mouseY < 280){
        //target practice thing
        stroke(0);
        strokeWeight(2);
        fill(255,150);
        rect(20,80,200,200,5);
        cursor(HAND);
        fill(0);
        textSize(20);
        text("Target Practice",120,110);
        textSize(15);
        text("Put your accuracy\nskills to the test while\nbalancing both recoil,\npower, and other\nforces.",120,140);
        }
        //buttons
        noFill();
        stroke(0);
        strokeWeight(2);
        if(mouseX > 20&&mouseX < 220&&mouseY > 300&&mouseY < 350){
            fill(255,50);
            cursor(HAND);
        }else{ noFill(); }
        rect(20,300,200,50,15,0,15,0);
        fill(0);
        textSize(30);
        text("Shop",120,335);
        noFill();
        if(mouseX > 20&&mouseX < 220&&mouseY > 370&&mouseY < 350+70){
            cursor(HAND);
            fill(255,50);
        }else{ noFill(); }
        rect(20,370,200,50,15,0,15,0);
        fill(0);
        textSize(30);
        text("Guns",120,335+70);
        noFill();
        if(mouseX > 20&&mouseX < 220&&mouseY > 300+140&&mouseY < 350+140){
            cursor(HAND);
            fill(255,50);
        }else{ noFill(); }
        rect(20,440,200,50,15,0,15,0);
        fill(0);
        textSize(25);
        text("Save Game",120,335+140);
        //player stats and stuff
        strokeWeight(4);
        stroke(100);
        fill(255,50);
        rect(240,80,340,450,20,0,20,0);
        noFill();
        stroke(150);
        rect(238,82,340,450,20,0,20,0);
        fill(255,50);
        strokeWeight(2);
        stroke(0);
        rect(250,100,100,200,10,0,10,0);
        noStroke();
        player.draw(300,140,1);
        fill(0);
        textSize(20);
        textAlign(CORNER);
        text("Money :$"+player.money+"\nHealth Packs: "+player.healthpacks+"\nWeapon Equipped:\n"+weapon_equipped+"\nSkin: "+player.skin+"\nlevel: "+player.level+"\nxp: "+player.xp,370,115);
        //["Pistol","AK47","Rifle","Sniper-Rifle","Hunting-Rifle","Shotgun","Scorpion-Pistol","Chain-Gun","Tripod-Chain-Gun","Phaser"]
        
        switch(weapon_equipped){
            case "Pistol":
            drawGun("Pistol",300,350,4,0);
            break;
            case "AK47":
            drawGun("AK47",440,350,1.25,0);
            break;
            case "Rifle":
            drawGun("Rifle",410,350,0.95,0);
            break;
            case "Sniper_Rifle":
            drawGun("Sniper_Rifle",410,350,0.95,0);
            break;
            case "Hunting_Rifle":
            drawGun("Hunting_Rifle",410,350,0.95,0);
            break;
            case "Shotgun":
            drawGun("Shotgun",430,350,1,0);
            break;
            case "Scorpion_Pistol":
            drawGun("Scorpion_Pistol",400,350,2,0);
            break;
            case "Chain_Gun":
            drawGun("Chain_Gun",300,350,1.5,0);
            break;
            case "Tripod_Chain_Gun":
            drawGun("Tripod_Chain_Gun",300,350,1.5,0);
            break;
            case "Phaser":
            drawGun("Phaser",280,350,3.5,0);
            break;
        }
        textAlign(CENTER);
    }
    if(gamePage === 1){
        stroke(0);
        strokeWeight(2);
        //the hunting screenshot
        fill(0,20,100);
        rect(20,80,250,200,20,0,20,0);
        fill(0,100,0);
        noStroke();
        rect(22,180+49,247,50,0,0,20,0);
        image(getImage("avatars/duskpin-tree"),130,130,80,80);
        //the grass
        {
        var drawGrass = function(x,y){
            fill(0,100,0);
            stroke(0,120,0);
            quad(x,y,x+5,y+5,x+5,y+50,x,y+50);
        };
        drawGrass(22,180);
        drawGrass(22+5,190);
        drawGrass(22,180);
        drawGrass(22+10,190);
        drawGrass(22+15,180);
        drawGrass(22+20,190);
        drawGrass(22+25,180);
        drawGrass(22+30,190);
        pushMatrix();
        translate(35,0);
        drawGrass(22,180);
        drawGrass(22+5,190);
        drawGrass(22,180);
        drawGrass(22+10,190);
        drawGrass(22+15,180);
        drawGrass(22+20,190);
        drawGrass(22+25,180);
        drawGrass(22+30,190);
        popMatrix();
        pushMatrix();
        translate(70,0);
        drawGrass(22,180);
        drawGrass(22+5,190);
        drawGrass(22,180);
        drawGrass(22+10,190);
        drawGrass(22+15,180);
        drawGrass(22+20,190);
        drawGrass(22+25,180);
        drawGrass(22+30,190);
        popMatrix();
         pushMatrix();
        translate(105,0);
        drawGrass(22,180);
        drawGrass(22+5,190);
        drawGrass(22,180);
        drawGrass(22+10,190);
        drawGrass(22+15,180);
        drawGrass(22+20,190);
        drawGrass(22+25,180);
        drawGrass(22+30,190);
        popMatrix();
         pushMatrix();
        translate(140,0);
        drawGrass(22,180);
        drawGrass(22+5,190);
        drawGrass(22,180);
        drawGrass(22+10,190);
        drawGrass(22+15,180);
        drawGrass(22+20,190);
        drawGrass(22+25,180);
        drawGrass(22+30,190);
        popMatrix();
         pushMatrix();
        translate(175,0);
        drawGrass(22,180);
        drawGrass(22+5,190);
        drawGrass(22,180);
        drawGrass(22+10,190);
        drawGrass(22+15,180);
        drawGrass(22+20,190);
        drawGrass(22+25,180);
        drawGrass(22+30,190);
        popMatrix();
         pushMatrix();
        translate(175+35,0);
        drawGrass(22,180);
        drawGrass(22+5,190);
        drawGrass(22,180);
        drawGrass(22+10,190);
        drawGrass(22+15,180);
        drawGrass(22+20,190);
        drawGrass(22+25,180);
        drawGrass(22+30,190);
        popMatrix();
        }
        noFill();
        stroke(200,0,0);
        ellipse(145,170,50,50);
        line(145,140,145,200);
        line(115,170,175,170);
        stroke(0);
        //the zombie defender screenshot
        rect(20,300,250,200,20,0,20,0);
        fill(1, 19, 71);
        rect(20,300,250,150,20,0,0,0);
        fill(0);
        rect(20,450,250,50);
        noStroke();
        drawBullet("Rifle",30,470,0.25);
        drawBullet("Rifle",40,470,0.25);
        drawBullet("Rifle",50,470,0.25);
        drawBullet("Rifle",60,470,0.25);
        drawBullet("Rifle",70,470,0.25);
        drawGun("Rifle-Black",140,360,0.65,-20);
        pushMatrix();
        translate(120,350);
        scale(-1,1);
        drawGun("AK47-Black",0,0,0.85,-30);
        popMatrix();
        noFill();
        //the alien defender screenshot
        stroke(0);
        rect(320,80,250,200,0,20,0,20);
        fill(0,50,150);
        rect(320,80,250,150,0,20,0,0);
        fill(0, 163, 90);
        rect(320,80+150,250,50);
        noStroke();
        for(var i = 50; i > 0; i--){
            fill(i+200,i+150,0,i);
            ellipse(350,120,i,i);
            fill(0,i+100,i+200,i/2);
            ellipse(500,150,i/2,i/2);
        }
        pushMatrix();
        translate(450,250);
        scale(1,0.6);
        drawGun("Phaser",0,0,1,180);
        popMatrix();
        pushMatrix();
        translate(424,270);
        scale(1.2,0.8);
        drawGun("Shotgun",0,0,-0.6,5);
        popMatrix();
        noFill();
        //apocalypse FPS screenshot
        stroke(0);
        fill(160);
        rect(320,300,250,200,0,20,0,20);
        fill(50);
        noStroke();
        rect(320,300,50,200);
        rect(480-30,300,20,200);
        fill(30);
        rect(370,300,20,200);
        rect(470,300,10,200);
        fill(50);
        rect(390,300,30,200);
        rect(480,300,90,200,0,20,0,0);
        fill(100);
        triangle(440,330,335,500,555,500);
        stroke(255,255,0);
        strokeWeight(3);
        strokeCap(SQUARE);
        line(440,335,430,500);
        line(440,335,450,500);
        pushMatrix();
        translate(340,450);
        scale(0.5,1);
        drawGun("Scorpion_Pistol",0,0,0.75,-30);
        popMatrix();
        pushMatrix();
        translate(550,450);
        scale(-0.5,1);
        drawGun("Scorpion_Pistol",0,0,0.75,-30);
        popMatrix();
        
        if(mouseX > 20&&mouseY > 80&&mouseX < 270&&mouseY < 280){
            fill(255,150);
            rect(20,80,250,200,20,0,20,0);
            textSize(20);
            fill(0);
            text("Hunting",140,100);
            textSize(15);
            text("Put your shooting skills to the\ntest by shooting moving\ntargets.  This is an easy way\nto earn money but be careful\nnot to scare the animal off\nbefore you hit it.",145,130);
            cursor(HAND);
        }
        if(mouseX > 320&&mouseY > 80&&mouseX < 270+300&&mouseY < 280){
            fill(255,150);
            rect(320,80,250,200,0,20,0,20);
            textSize(20);
            fill(0);
            text("Alien Defender",440,100);
            textSize(15);
            text("Use your guns to fight off\naggresive aliens.  Make sure\nyou're well equipped before\nyou try this game.",145+300,130);
            cursor(HAND);
        }
        if(mouseX > 20&&mouseY > 300&&mouseX < 270&&mouseY < 500){
            fill(255,150);
            rect(20,300,250,200,20,0,20,0);
            textSize(20);
            fill(0);
            text("Zombie Sniper",140,330);
            textSize(15);
            text("Zombies will come and try to\neat everyone in your base\ncamp.  It is your night watch\nand you must defend your\nbase.  Did I mention that it\nwould be dark and hard to\nsee?",145,360);
            cursor(HAND);
        }
        if(mouseX > 320&&mouseY > 300&&mouseX < 270+300&&mouseY < 500){
            fill(255,150);
            rect(320,300,250,200,0,20,0,20);
            textSize(20);
            fill(0);
            text("Apocalypse Run",440,330);
            textSize(15);
            text("Run quickly along a road\nfull of infected zombies.\nIf you are good at First\nPerson Shooters, you'd like\nthis one.  Be sure to bring\nalong some fully automatic\nguns like the scorpion pistol\nor the chain gun.",145+300,360);
            cursor(HAND);
        }
    }
    if(gamePage === 2){
        noFill();
        strokeWeight(4);
        stroke(0);
        rect(20,80,560,440,30,0,30,0);
        line(300,80,300,100);
        line(300,150,300,520);
        rect(20,100,560,50);
        fill(150);
        textSize(30);
        text("Compete",300,135);
        noFill();
        ellipse(160,340,180,180);
        ellipse(160,340,140,140);
        ellipse(160,340,100,100);
        ellipse(160,340,60,60);
        ellipse(160,340,100,100);
        fill(0);
        ellipse(160,340,20,20);
        text("Speed Sniper",160,200);
        drawGun("AK47-Black",185,445);
        text("Night Hunting",140+300,200);
        drawGun("Sniper-Rifle-Black",350,360,0.75,-90);
        pushMatrix();
        translate(520,335);
        scale(1,-1);
        drawGun("AK47-Black",0,0,1,90);
        popMatrix();
        noFill();
        stroke(0);
        arc(450,270,100,100,ang(70),ang(280));
        arc(480,267,100,100,ang(105),ang(242));
        if(mouseX > 20&&mouseX < 300&&mouseY > 80&&mouseY < 500){
            noStroke();
            fill(255,100);
            rect(20,80+70,280,370); 
            cursor(HAND);
            fill(0);
            textSize(20);
            text("Compete against an AI\nplayer on how many\ntagets you can hit in a\nminute.  The entry fee is\n$100.  If you win, you\nget $500.  If not, you\nlose $500",160,250);
        }
        if(mouseX > 300&&mouseX < 580&&mouseY > 80&&mouseY < 500){
            noStroke();
            fill(255,100);
            rect(300,80+70,280,370); 
            cursor(HAND);
            fill(0);
            textSize(20);
            text("See how many animals\nyou can kill in one\nminute.  The entry fee is\n$250.  If you win, you\nget $2500.  You lose,\nyour loss will be a total\nof $2500",140+300,250);
        }
    }
    
    
    
    
    
    noFill();
    stroke(0);
    strokeWeight(2);
    if(mouseX > 20&&mouseX < 120&&mouseY > 540&&mouseY < 590){
        fill(255,30);
        cursor(HAND);
    }
    rect(20,540,100,50,15,0,15,0);
    noFill();
    if(mouseX > 460&&mouseX < 595&&mouseY > 540&&mouseY < 590){
        fill(255,30);
        cursor(HAND);
    }
    rect(460,540,135,50,0,15,0,15);
    if(mouseX > 250&&mouseX < 350&&mouseY > 540&&mouseY < 590){
        fill(255,30);
        cursor(HAND);
    }
    rect(250,540,100,50,15,15,0,0);
    mouseClicked = function(){
        if(mouseX > 250&&mouseX < 350&&mouseY > 540&&mouseY < 590){
            scene = "menu";
        }
        if(mouseX > 20&&mouseX < 120&&mouseY > 540&&mouseY < 590){
            gamePage--;
            if(gamePage < 0){gamePage = 2;}
        }
        if(mouseX > 460&&mouseX < 595&&mouseY > 540&&mouseY < 590){
            gamePage++;
            if(gamePage > 2){gamePage = 0;}
        }
        if(scene === "game"&&gamePage === 0&&mouseX > 20&&mouseX < 220&&mouseY > 80&&mouseY < 280){
        scene = "target-practice";  
        gunStats[weapon_equipped].ammo = gunStats[weapon_equipped].max_ammo;
        }
        if(scene === "game"&&gamePage === 0&&mouseX > 20&&mouseX < 220&&mouseY > 300&&mouseY < 350){
            scene = "shop";
            gunStats[weapon_equipped].ammo = gunStats[weapon_equipped].max_ammo;
        }
        if(scene === "game"&&gamePage === 0&&mouseX > 20&&mouseX < 220&&mouseY > 370&&mouseY < 350+70){
            scene = "guns";
            gunStats[weapon_equipped].ammo = gunStats[weapon_equipped].max_ammo;
        }
        if(scene === "game"&&gamePage === 0&&mouseX > 20&&mouseX < 220&&mouseY > 370+70&&mouseY < 350+140){
            saveGame();
        }
        if(scene === "game"&&gamePage === 1&&mouseX > 20&&mouseY > 80&&mouseX < 270&&mouseY < 280){
             huntingMags = 5;
            scene = "hunting";
            gunStats[weapon_equipped].ammo = gunStats[weapon_equipped].max_ammo;
            addAnimals();
        }
        if(scene === "game"&&gamePage === 1&&mouseX > 320&&mouseY > 80&&mouseX < 270+300&&mouseY < 280){
            enemyTimer = 150;
            scene = "alien-defense";
            aliens = [];
            baseHealth = 500;
            gunStats[weapon_equipped].ammo = gunStats[weapon_equipped].max_ammo;
        }
        if(scene === "game"&&gamePage === 1&&mouseX > 20&&mouseY > 300&&mouseX < 270&&mouseY < 500){
            scene = "zombie-defense";
            gunStats[weapon_equipped].ammo = gunStats[weapon_equipped].max_ammo;
        }
        if(scene === "game"&&gamePage === 1&&mouseX > 320&&mouseY > 300&&mouseX < 270+300&&mouseY < 500){
            scene = "zombie-fps-run";
            gunStats[weapon_equipped].ammo = gunStats[weapon_equipped].max_ammo;
        }
        if(scene === "game"&&gamePage === 2&&mouseX > 20&&mouseX < 300&&mouseY > 80&&mouseY < 500){
            scene = "speed-sniper";
            gunStats[weapon_equipped].ammo = gunStats[weapon_equipped].max_ammo;
        }
        if(scene === "game"&&gamePage === 2&&mouseX > 300&&mouseX < 580&&mouseY > 80&&mouseY < 500){
            scene = "night-hunting";
            gunStats[weapon_equipped].ammo = gunStats[weapon_equipped].max_ammo;
        }
    };
    }
};
var reloadText = false;
var game2 = function(){
    var xDist = mouseX-targetMouseX;
    var yDist = mouseY-targetMouseY;
    strokeWeight(2);
    pushMatrix();
    translate(world1X,0);
    cursor("none");
    background(0,50,100);
    noStroke();
    fill(0,50,0);
    rect(0,400,1200,200);
    
    
    
    for(var i = 0; i < animals.length; i++){
        if(!animals[i].dead){
            animals[i].draw();
            animals[i].move();
            animals[i].allowKill(targetMouseX,targetMouseY,world1X);
        }
    }
    
    fill(255);
    textSize(20);
    translate(world1X*-1,0);
    text("Weapon: "+weapon_equipped+"     Money: "+player.money+"    Ammo Mags: "+huntingMags,300,50);
    translate(world1X,0);
    noFill();
    stroke(255);
    pushMatrix();
    translate(targetMouseX-world1X,targetMouseY);
    ellipse(0,0,50,50);
    line(0,-40,0,40);
    line(40,0,-40,0);
    popMatrix();
    targetMouseX+=xDist/(100/player.speed);
    targetMouseY+=yDist/(100/player.speed);
    popMatrix();
    if(targetMouseX > 550){
        world1X-=5;
    }
    if(targetMouseX < 50){
        world1X+=5;
    }
    if(world1X < -600){
        world1X = -600;
    }
    if(world1X > 0){
        world1X = 0;
    }
    
    mouseClicked = function(){
        if(mouseButton === RIGHT){
            gunStats[weapon_equipped].ammo = gunStats[weapon_equipped].max_ammo;
            reloadText = false;
            playSound(getSound("rpg/step-heavy"));
            huntingMags--;
        }
        if(gunStats[weapon_equipped].fireMode === "semi"||gunStats[weapon_equipped].fireMode === "multiple"){
        if(mouseButton === LEFT){
            
        if(gunStats[weapon_equipped].ammo >= 0){
        playSound(getSound("retro/hit2"));
        gunStats[weapon_equipped].ammo--;
        
        }else{
            playSound(getSound("rpg/metal-clink"));
            reloadText = true;
        }
        }
        }
    };
    if(gunStats[weapon_equipped].fireMode === "auto"){if(frameCount % gunStats[weapon_equipped].fireRate === 0){
        if(mouseIsPressed){
            if(gunStats[weapon_equipped].ammo >= 0){
        playSound(getSound("retro/hit2"));
        gunStats[weapon_equipped].ammo--;
        
        }else{
            playSound(getSound("rpg/metal-clink"));
            reloadText = true;
        }
        }
    }
    }
    if(reloadText){
       text("R / Right Click to reload",300,100); 
    }
    fill(0,100);
    rect(0,0,600,600);
    for(var i = 0; i <= gunStats[weapon_equipped].ammo; i++){
            noStroke();
            if(gunStats[weapon_equipped].bullet === "Pistol"){
            drawBullet(gunStats[weapon_equipped].bullet,i*30+20,100);
            }
            if(gunStats[weapon_equipped].bullet === "Rifle"){
            drawBullet(gunStats[weapon_equipped].bullet,i*30+20,100,0.5);
            }
            if(gunStats[weapon_equipped].bullet === "Sniper"){
            drawBullet(gunStats[weapon_equipped].bullet,i*30+20,100,0.5);
            }
            if(gunStats[weapon_equipped].bullet === "Shotgun"){
            drawBullet(gunStats[weapon_equipped].bullet,i*30+20,100,1);
            }
            if(gunStats[weapon_equipped].bullet === "Chain-Round"){
            drawBullet(gunStats[weapon_equipped].bullet,i*30+20,150,1,-90);
            }
        }
    
    
    keyReleased = function(){
        if(key.toString() === "r"){
            gunStats[weapon_equipped].ammo = gunStats[weapon_equipped].max_ammo;
            reloadText = false;
            playSound(getSound("rpg/step-heavy"));
            huntingMags--;
        }
    };
    if(huntingMags < 0){
        scene = "game";
    }
};
var py = 0;
//took a lot of art from Orbitron TD for this game
var beaconTower = function(x,y,s,r){
        
        noStroke();
        pushMatrix();
        scale(s);
        translate(-250+x,-150+y);
        rotate(ang(r));
        //structure
          fill(50);
          rect(250,150,100,100);
          fill(120);
          rect(270,170,60,60);fill(80);
          quad(250,150,270,170,270,230,250,250);
          quad(350,150,330,170,330,230,350,250);
          
          //light details for the beacon tower
          {
          beginShape();
          stroke(0,200,200);
          strokeWeight(2);
          fill(0,255,255);
          vertex(250,200-22.5);
          vertex(270,200);
          vertex(290,200);
          vertex(300,190);
          vertex(310,190);
          vertex(320,200);
          vertex(330,200);
          vertex(350,220);
          vertex(350,225);
          vertex(330,205);
          vertex(320,205);
          vertex(310,195);
          vertex(300,195);
          vertex(290,205);
          vertex(270,205);
          vertex(250,200-22.5+5);
          endShape();
          stroke(70);
          beginShape();
          noFill();
          vertex(250,200-22.5);
          vertex(270,200);
          stroke(100);
          vertex(290,200);
          vertex(300,190);
          vertex(310,190);
          vertex(320,200);
          stroke(70);
          vertex(330,200);
          vertex(350,220);
          endShape();
          }
        popMatrix();
      };
var redBeaconTower = function(x,y,s,r){
        
        noStroke();
        pushMatrix();
        scale(s);
        translate(-250+x,-150+y);
        rotate(ang(r));
        //structure
          fill(50);
          rect(250,150,100,100);
          fill(120);
          rect(270,170,60,60);fill(80);
          quad(250,150,270,170,270,230,250,250);
          quad(350,150,330,170,330,230,350,250);
          
          //light details for the beacon tower
          {
          beginShape();
          stroke(200,0,0);
          strokeWeight(2);
          fill(255,0,0);
          vertex(250,200-22.5);
          vertex(270,200);
          vertex(290,200);
          vertex(300,190);
          vertex(310,190);
          vertex(320,200);
          vertex(330,200);
          vertex(350,220);
          vertex(350,225);
          vertex(330,205);
          vertex(320,205);
          vertex(310,195);
          vertex(300,195);
          vertex(290,205);
          vertex(270,205);
          vertex(250,200-22.5+5);
          endShape();
          stroke(70);
          beginShape();
          noFill();
          vertex(250,200-22.5);
          vertex(270,200);
          stroke(100);
          vertex(290,200);
          vertex(300,190);
          vertex(310,190);
          vertex(320,200);
          stroke(70);
          vertex(330,200);
          vertex(350,220);
          endShape();
          }
        popMatrix();
};
var purpleBeaconTower = function(x,y,s,r){
    
        noStroke();
        pushMatrix();
        scale(s);
        translate(-250+x,-150+y);
        rotate(ang(r));
        //structure
          fill(50);
          rect(250,150,100,100);
          fill(120);
          rect(270,170,60,60);fill(80);
          quad(250,150,270,170,270,230,250,250);
          quad(350,150,330,170,330,230,350,250);
          
          //light details for the beacon tower
          {
          beginShape();
          stroke(200,0,200);
          strokeWeight(2);
          fill(255,0,255);
          vertex(250,200-22.5);
          vertex(270,200);
          vertex(290,200);
          vertex(300,190);
          vertex(310,190);
          vertex(320,200);
          vertex(330,200);
          vertex(350,220);
          vertex(350,225);
          vertex(330,205);
          vertex(320,205);
          vertex(310,195);
          vertex(300,195);
          vertex(290,205);
          vertex(270,205);
          vertex(250,200-22.5+5);
          endShape();
          stroke(70);
          beginShape();
          noFill();
          vertex(250,200-22.5);
          vertex(270,200);
          stroke(100);
          vertex(290,200);
          vertex(300,190);
          vertex(310,190);
          vertex(320,200);
          stroke(70);
          vertex(330,200);
          vertex(350,220);
          endShape();
          }
        popMatrix();
};
var crystal = function(x,y,s,r,c,str){
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(ang(r));
        fill(c);
        stroke(str);
        strokeWeight(1);
        beginShape();
        vertex(0,0);
        vertex(10,-10);
        vertex(20,0);
        vertex(20,30);
        vertex(10,35);
        vertex(0,30);
        vertex(0,0);
        endShape();
        beginShape();
        vertex(0,0);
        vertex(10,5);
        vertex(20,0);
        vertex(10,-5);
        endShape();
        beginShape();
        vertex(10,-10);
        vertex(10,35);
        endShape();
        beginShape();
        vertex(0,30);
        vertex(10,25);
        vertex(20,30);
        vertex(10,35);
        endShape();
        popMatrix();
      };
var crystalGroup = function(x,y,s,r,c,strokeCol){
    pushMatrix();
    translate(x-100,y-100);
    scale(s);
    rotate(ang(r));
    fill(80);
    noStroke();
    ellipse(106,121,40,15);
    crystal(100,100,0.8,0,c,strokeCol);
    crystal(85,110,0.7,-30,c,strokeCol);
    crystal(115,105,0.6,30,c,strokeCol);      
    popMatrix();
};
var Alien = function(x,y,t){
    this.x = x;
    this.y = y;
    this.type = t;
    this.health = 20;
    this.damage = 10;
    this.reward = 5;
    this.speed = 2;
    this.height = 80;
    this.reward = 5;
    this.dead = false;
    switch(this.type){
        case 1:
        this.health = 40;
        this.speed = 3;
        this.reward = 10;
        this.damage = 15;
        break;
        case 2:
        this.health = 100;
        this.speed = 2;
        this.reward = 20;
        this.damage = 20;
        break;
        case 3:
        this.health = 150;
        this.speed = 3;
        this.reward = 50;
        this.damage = 25;
        break;
        case 4:
        this.health = 20;
        this.speed = 8;
        this.reward = 10;
        this.damage = 30;
        break;
        case 5:
        this.health = 200;
        this.speed = 2;
        this.reward = 100;
        this.damage = 35;
        break;
        case 6:
        this.health = 250;
        this.speed = 2;
        this.reward = 125;
        this.damage = 40;
        break;
        case 7:
        this.health = 500;
        this.speed = 5;
        this.reward = 250;
        this.damage = 50;
        break;
    }
};
Alien.prototype.draw = function() {
    switch(this.type){
        case 0:{
            pushMatrix();
            translate(this.x,this.y+10);
            scale(1);
            noStroke();
            rectMode(CENTER);
            fill(0);
            ellipse(0,10,12,12);
            pushMatrix();
            translate(0,7);
            rotate(ang(45));
            rect(0,0,10,10,3);
            rect(0,15,7,5,2,0,0,2);
            rect(15,0,5,7,2,2,0,0);
            popMatrix();
            rect(0,+15,7,5);
            rect(0,+20,15,5);
            quad(-8,+20,+8,+20,+5,+30,-5,+30);
            stroke(0);
            strokeWeight(3);
            line(-12,+15,-17,0);
            line(+12,+15,+17,0);
            line(-17,0,-30,+10);
            line(+17,0,+30,+10);
            line(-5,+25,-15,+30);
            line(+5,+25,+15,+30);
            line(-15,+30,-10,+40);
            line(0+15,+30,+10,+40);
            rect(0,+35,10,7.5,5,5,0,0);
            stroke(0,255,255);
            noFill();
            ellipse(0,+45,10,5);
            ellipse(0,+55,15,5);
            line(-5,+20,-0,+25);
            line(+5,+20,0,+25);
            noStroke();
            //eyes
            fill(0,255,255);
            ellipse(-2,+8,3,3);
            ellipse(+2,+8,3,3);
            popMatrix();
        }break;
        case 1:{
            pushMatrix();
            noStroke();
            translate(this.x,this.y+10);
            scale(1);
            fill(0);
            beginShape();
            vertex(-5,+20);
            vertex(+5,+20);
            vertex(+10,+30);
            vertex(+5,+40);
            vertex(-5,+40);
            vertex(-10,+30);
            endShape();
            stroke(0,255,255);
            strokeWeight(2);
            line(10,30,5,40);
            line(-10,30,-5,40);
            stroke(0);
            strokeWeight(3);
            line(-5,20,-15,10);
            line(5,20,15,10);
            line(-15,10,-20,20);
            line(15,10,20,20);
            stroke(255,200,0);
            line(-20,20,-20,15);
            line(-20,20,-15,22.5);
            line(-20,20,-25,22.5);
            line(20,20,20,15);
            line(20,20,15,22.5);
            line(20,20,25,22.5);
            stroke(0,255,255);
            noFill();
            ellipse(0,45,10,5);
            ellipse(0,55,15,5);
            noStroke();
            fill(0,255,255);
            arc(-3,25,5,5,ang(30),ang(210));
            arc(3,25,5,5,ang(-30),ang(-30+180));
            fill(0);
            noStroke();
            triangle(12,32,7,42,20,45);
            triangle(-12,32,-7,42,-20,45);
            noStroke();
            popMatrix();
        }break;
        case 2:{
            pushMatrix();
            translate(this.x,this.y+20);
            noStroke();
            scale(2);
            fill(255,30);
            fill(0);
            ellipse(0,0,15,15);
            stroke(0);
            strokeWeight(3);
            strokeCap(ROUND);
            line(-6,0,-6,20);
            line(-3,0,-3,13);
            line(0,0,0,25);
            line(6,0,6,20);
            line(3,0,3,13);
            
            noStroke();
            //eyes
            fill(255, 0, 0);
            arc(-3,-3,5,5,ang(0),ang(180));
            arc(3,-3,5,5,ang(0),ang(180));
            popMatrix();
        }break;
        case 3:{
            pushMatrix();
            noStroke();
            translate(this.x,this.y);
            scale(1);
            fill(0);
            //arms
            stroke(0);
            strokeWeight(3);
            line(-20,30,-15,18);
            line(-20,30,-20,40);
            line(20,30,15,18);
            line(20,30,20,40);
            noStroke();
            //body 'n stuff
            beginShape();
            vertex(-2.5,0);
            vertex(2.5,0);
            vertex(5,5);
            vertex(2.5,10);
            vertex(-2.5,10);
            vertex(-5,5);
            endShape();
            rect(-2.5,10,5,5);
            rect(-10,15,20,5);
            rotate(ang(-45));
            beaconTower(-100,150,0.1);
            noFill();
            stroke(0,255,255);
            ellipse(-30,20,5,10);
            rotate(ang(90));
            redBeaconTower(0,150,0.1);
            stroke(255,0,0);
            ellipse(30,20,5,10);
            rotate(ang(-45));
            noStroke();
            fill(30);
            quad(-5,15,5,15,2.5,25,-2.5,25);
            quad(-5,30,5,30,2.5,25,-2.5,25);
            triangle(-5,30,5,30,0,35);
            stroke(255);
            noFill();
            ellipse(0,45,15,5);
            ellipse(0,55,20,5);
            noStroke();
            //eyes
            fill(0,255,255);
            ellipse(-1.5,5,2,2);
            fill(255, 0, 0);
            ellipse(1.5,5,2,2);
            popMatrix();
        }break;
        case 4:{
            pushMatrix();
            noStroke();
            translate(this.x,this.y);
            scale(1);
            fill(0);
            //arms
            stroke(0);
            strokeWeight(5);
            line(-20,30,-13,18);
            line(-20,30,-20,40);
            line(20,30,13,18);
            line(20,30,20,40);
            noStroke();
            //body 'n stuff
            fill(0);
            ellipse(0,30,15,15);
            strokeWeight(3);
            stroke(0);
            line(-6,30,-6,55);
            line(-3,30,-3,45);
            line(0,30,0,65);
            line(3,30,3,45);
            line(6,30,6,55);
            noStroke();
            beginShape();
            vertex(-2.5,0);
            vertex(2.5,0);
            vertex(5,5);
            vertex(2.5,10);
            vertex(-2.5,10);
            vertex(-5,5);
            endShape();
            rect(-2.5,10,5,5);
            rect(-10,15,20,5);
            rotate(-45);
            redBeaconTower(-100,150,0.1);
            noFill();
            rotate(ang(90));
            redBeaconTower(0,150,0.1);
            rotate(ang(-45));
            noStroke();
            fill(30);
            quad(-7.5,15,7.5,15,5,25,-5,25);
            quad(-5,30,5,30,2.5,25,-2.5,25);
            stroke(255, 0, 0);
            strokeWeight(1);
            triangle(-5,30,5,30,0,35);
            noStroke();
            //eyes
            fill(255, 0, 0);
            ellipse(-1.5,5,2,2);
            ellipse(1.5,5,2,2);
            popMatrix();
        }break;
        case 5:{
            pushMatrix();
            noStroke();
            translate(this.x,this.y);
            scale(1.5);
            fill(0);
            //arms
            stroke(0);
            strokeWeight(5);
            line(-20,30,-13,18);
            line(-20,30,-20,40);
            line(20,30,13,18);
            line(20,30,20,40);
            noStroke();
            //body 'n stuff
            fill(0);
            ellipse(0,30,15,15);
            strokeWeight(3);
            stroke(0);
            line(-6,30,-6,55);
            line(-3,30,-3,45);
            line(0,30,0,65);
            line(3,30,3,45);
            line(6,30,6,55);
            noStroke();
            beginShape();
            vertex(-2.5,0);
            vertex(2.5,0);
            vertex(5,5);
            vertex(2.5,10);
            vertex(-2.5,10);
            vertex(-5,5);
            endShape();
            rect(-2.5,10,5,5);
            rect(-10,15,20,5);
            rotate(ang(-45));
            purpleBeaconTower(-100,150,0.1);
            noFill();
            rotate(ang(90));
            purpleBeaconTower(0,150,0.1);
            rotate(ang(-45));
            noStroke();
            fill(30);
            quad(-7.5,15,7.5,15,5,25,-5,25);
            quad(-5,30,5,30,2.5,25,-2.5,25);
            stroke(255, 0, 255);
            strokeWeight(1);
            triangle(-5,30,5,30,0,35);
            noStroke();
            crystalGroup(68,65,0.3,0,color(255,0,255,100),color(200,0,200,100));
            noStroke();
            //eyes
            fill(255, 0, 255);
            ellipse(-1.5,5,2,2);
            ellipse(1.5,5,2,2);
            popMatrix();
        }break;
        case 6:{
        pushMatrix();
        translate(this.x,this.y+10);
        noStroke();
        fill(0,255,255);
        ellipse(-57,0,15,10);
        ellipse(57,0,15,10);
        fill(0,100,100);
        noStroke();
        arc(0,0,80,50,ang(180),ang(360));
        fill(0);
        ellipse(0,0,120,30);
        fill(0,255,255);
        ellipse(-30,0,13,13);
        ellipse(0,0,15,15);
        ellipse(30,0,13,13);
        fill(0,100,100);
        arc(0,-13,65,10,0,ang(360));
        noFill();
        stroke(0,200,200);
        strokeWeight(5);
        ellipse(0,30,50,10);
        stroke(0,255,255);
        ellipse(0,50,70,10);
        noStroke();
        popMatrix();
        }break;
        case 7:{
            pushMatrix();
            translate(this.x,this.y-50);
            noStroke();
            fill(0);
            //body
            beginShape();
            vertex(-5,0);
            vertex(0,0);
            vertex(5,0);
            vertex(7,2);
            vertex(15,5);
            vertex(20,10);
            vertex(30,10);
            vertex(35,5);
            vertex(40,20);
            vertex(30,20);
            vertex(25,30);
            vertex(20,30);
            vertex(15,50);
            vertex(15,60);
            vertex(0,60);
            vertex(-15,60);
            vertex(-15,50);
            vertex(-20,30);
            vertex(-25,30);
            vertex(-30,20);
            vertex(-40,20);
            vertex(-35,5);
            vertex(-30,10);
            vertex(-20,10);
            vertex(-15,5);
            vertex(-7,2);
            endShape();
            crystalGroup(0,125,0.4,-60,color(0,255,255,150),color(0,200,200,100));
            crystalGroup(158,52,0.4,60,color(0,255,255,150),color(0,200,200,100));
            crystalGroup(32,60,0.4,0,color(0,255,255,150),color(0,200,200,100));
            crystalGroup(85,60,0.4,0,color(0,255,255,150),color(0,200,200,100));
            crystal(8,30,-0.75,0,color(255,0,0,100),color(200,0,0,100));
            fill(0);
            noStroke();
            ellipse(0,60,30,30);
            //power lines
            strokeWeight(5);
            stroke(0);
            line(-12,60,-12,120);
            line(12,60,12,120);
            line(0,60,0,130);
            line(-6,60,-6,100);
            line(6,60,6,100);
            strokeWeight(10);
            line(-25,15,-30,45);
            line(25,15,30,45);
            line(30,45,30,65);
            line(-30,45,-30,65);
            strokeWeight(3);
            strokeCap(SQUARE);
            stroke(0,255,255);
            noFill();
            beginShape();
            vertex(-5,2);
            vertex(5,2);
            vertex(20,30);
            vertex(25,30);
            vertex(30,20);
            vertex(15,20);
            vertex(-15,60);
            endShape();
            stroke(255, 0, 0);
            beginShape();
            vertex(0,2);
            vertex(-5,2);
            vertex(-20,30);
            vertex(-25,30);
            vertex(-30,20);
            vertex(-15,20);
            vertex(15,60);
            endShape();
            noStroke();
            fill(255, 0, 0,100);
            ellipse(-30,65,20,20);
            ellipse(-30,65,15,15);
            ellipse(-30,65,10,10);
            fill(0,255,255,100);
            ellipse(30,65,15,15);
            ellipse(30,65,10,10);
            ellipse(30,65,20,20);
            fill(0);
            beginShape();
            vertex(-20,-20);
            vertex(-20,-10);
            vertex(-15,0);
            vertex(-15,-5);
            vertex(-10,-7);
            vertex(-5,-5);
            vertex(-5,0);
            vertex(0,0);
            vertex(5,0);
            vertex(5,-5);
            vertex(10,-7);
            vertex(15,-5);
            vertex(15,0);
            vertex(20,-10);
            vertex(20,-20);
            vertex(0,-30);
            endShape();
            noStroke();
            fill(255, 0, 0);
            arc(-10,-20,10,10,0,ang(180));
            arc(10,-20,10,10,0,ang(180));
            popMatrix();
        }break;
    }
    rectMode(CENTER);
    fill(0,255,0);
    noStroke();
    rect(this.x,this.y-50,this.health,5);
    rectMode(CORNER);
};
Alien.prototype.move = function(){
    this.x-=this.speed;
    if(this.x < 0){
        if(this.dead !== true){
        baseHealth-=this.damage; 
        this.dead = true;
        }
    }
    if(this.health <= 0){
        if(this.dead !== true){
        baseHealth-=this.damage; 
        this.dead = true;
        player.money+=this.reward;
        }
    }
};
aliens.push(new Alien(500,300,6));
var Bullet = function(x,y,t,d){
    this.x = x;
    this.y = y;
    this.type = t;
    this.damage = gunStats[weapon_equipped].damage;
    this.speed = 10;
    this.radius = 15;
    this.dead = false;
    switch(this.type){
        case 1:
        this.radius = 5;
        break;
    }
    
};
Bullet.prototype.draw = function() {
    switch(this.type){
        case 0:
        strokeWeight(2);
        stroke(255, 255, 0);
        line(this.x,this.y,this.x+15,this.y);
        stroke(255, 213, 0);
        strokeWeight(1);
        line(this.x,this.y-2,this.x+15,this.y-2);
        line(this.x,this.y+1,this.x+15,this.y+1);
        break;
        case 1:
        noStroke();
        fill(100);
        ellipse(this.x,this.y,3,3);
        ellipse(this.x,this.y-2,3,3);
        ellipse(this.x,this.y-5,3,3);
        ellipse(this.x,this.y+2,3,3);
        ellipse(this.x,this.y+5,3,3);
        break;
        case 2:
        strokeWeight(2);
        stroke(0, 255, 255);
        line(this.x,this.y,this.x+15,this.y);
        stroke(75, 151, 232);
        strokeWeight(1);
        line(this.x,this.y-2,this.x+15,this.y-2);
        line(this.x,this.y+1,this.x+15,this.y+1);
        break;
    }
};
Bullet.prototype.move = function(){
    this.x+=this.speed;
};
Bullet.prototype.collide = function(){
    for(var i = 0; i < aliens.length; i++){
        var a = aliens[i];
        if(a.dead !== true&&this.x > a.x&&this.y > a.y&&this.y < a.y+a.height){
            a.health-=this.damage+player.damageInc;
            this.y = -100;
            a.x+=this.damage+player.damageInc;
            
        }
    }
};
var testB = new Bullet(300,300,3);
var fireHeight = 0;
var enemyType;
var fireLeft = 0;
var baseHealth2 = 50;
var Zombie = function(x,y,type){
    this.x = x;
    this.y = y;
    this.type = type;
    this.health = 20;
    this.damage = 1;
    this.speed = 0.5;
    this.reward = 5;
    this.rot = 0;
    switch(this.type){
        
    }
};
Zombie.prototype.draw = function() {
    switch(this.type){
        case 0:
        pushMatrix();
        translate(this.x,this.y);
        rotate(ang(this.rot+90));
        fill(0);
        noStroke();
        ellipse(0,0,20,20);
        rect(-15,-5,7,20,20,0,0,0);
        rect(+7,-5,7,20,0,20,0,0);
        fill(255, 0, 0);
        ellipse(-3,+5,3,3);
        ellipse(+3,+5,3,3);
        popMatrix();
        break;
    }
    rectMode(CENTER);
    fill(0,255,0);
    rect(this.x,this.y-20,this.health,5);
    rectMode(CORNER);
};
Zombie.prototype.applyDeath = function(){
    if(gunStats[weapon_equipped].ammo > 0&&mouseIsPressed&&mouseX > this.x-15&&mouseX < this.x+15&&mouseY > this.y-10&&mouseY < this.y+20){
        this.health-=gunStats[weapon_equipped].damage;
        if(this.health > 0){
            this.speed *=2;
        }else{
            this.dead = true;
            player.money+=this.reward;
        }
    }
};
Zombie.prototype.move = function(){
    var r = atan2(this.y-300,this.x-300);
    this.rot = r;
    if(this.x < 300){
        this.x+=this.speed;
    }
    if(this.y < 300){
        this.y+=this.speed;
    }
    if(this.x > 300){
        this.x-=this.speed;
    }
    if(this.y > 300){
        this.y-=this.speed;
    }
    if(this.x > 250&&this.x < 350&&this.y > 250&&this.y < 350){
    this.dead = true;
    this.reward = 0;
    baseHealth2-=this.damage;
    }
    
};
var z = new Zombie(random(-600,1200),random(-600,1200),0);
var enems = 0;
var finalUsed = false;
var zTime = 100;
var game3 = function(){
    var yDist = mouseY-py;
    py+=yDist/(100/player.speed);
    strokeWeight(1);
    noFill();
    background(0, 148, 106);
    cursor("crosshair");
    for(var i = 0; i <= width; i+=50){
        for(var j = 0; j <= height; j+=50){
            stroke(i,i,j,50);
            fill(i,j,i,50);
        ellipse(i,j,50,50);
        }
    }
    pushMatrix();
    scale(0.5);
    fill(0,255,0,50);
    rect(0,0,1200,1200);
    fill(235, 208, 162);
    rect(100-60,py*2-60,20,50);
    fill(77, 53, 15);
    ellipse(100-50,py*2-60,40,30);
    fill(235, 208, 162);
    arc(100-50,py*2-60,40,60,0,ang(180));
    if(weapon_equipped === "Chain_Gun"||weapon_equipped === "Tripod_Chain_Gun"){
        strokeWeight(15);
    stroke(0,0,200);
    line(50,py*2-10,130,py*2+10);
    noStroke();
    }
    fill(0,0,255);
    rect(75-50+10,py*2-25,30,50);
    fill(0,0,200);
    rect(75-50+15,py*2+25,25,90);
    rect(75-50+10,py*2+25,5,30);
    fill(0);
    ellipse(65,py*2-55,5,5);
    
    switch(weapon_equipped){
    case "Pistol":
    drawGun(weapon_equipped,90,py*2);
    strokeWeight(15);
    stroke(0,0,200);
    line(50,py*2-10,100,py*2+20);
    fireHeight = 3;
    fireLeft = -30;
    break;
    case "Scorpion_Pistol":
    drawGun(weapon_equipped,90,py*2);
    strokeWeight(15);
    stroke(0,0,200);
    line(50,py*2-10,100,py*2+20);
    fireHeight = 3;
    fireLeft = -30;
    break;
    case "AK47":
    drawGun(weapon_equipped,175,py*2,0.8);
    strokeWeight(15);
    stroke(0,0,200);
    line(50,py*2-10,120,py*2+10);
    fireHeight = 3;
    fireLeft = 30;
    break;
    case "Rifle":
    drawGun(weapon_equipped,175,py*2-15,0.8);
    strokeWeight(15);
    stroke(0,0,200);
    line(50,py*2-10,50,py*2+20);
    line(50,py*2+20,90,py*2+10);
    fireHeight = -6;
    fireLeft = 55;
    break;
    case "Sniper_Rifle":
    drawGun(weapon_equipped,175,py*2-15,0.8);
    strokeWeight(15);
    stroke(0,0,200);
    line(50,py*2-10,50,py*2+20);
    line(50,py*2+20,90,py*2+10);
    fireHeight = -6;
    fireLeft = 55;
    break;
    case "Hunting_Rifle":
    drawGun(weapon_equipped,175,py*2-15,0.8);
    strokeWeight(15);
    stroke(0,0,200);
    line(50,py*2-10,50,py*2+20);
    line(50,py*2+20,90,py*2+10);
    fireHeight = -6;
    fireLeft = 55;
    break;
    case "Shotgun":
    drawGun(weapon_equipped,175,py*2-15,0.8);
    strokeWeight(15);
    stroke(0,0,200);
    line(50,py*2-10,50,py*2+20);
    line(50,py*2+20,90,py*2+10);
    fireHeight = -5;
    fireLeft = 45;
    break;
    case "Phaser":
    drawGun(weapon_equipped,90,py*2);
    strokeWeight(15);
    stroke(0,0,200);
    line(50,py*2-10,100,py*2+20);
    fireHeight = 3;
    fireLeft = -15;
    break;
    case "Chain_Gun":
    drawGun(weapon_equipped,50,py*2+20);
    strokeWeight(15);
    stroke(0,0,200);
    line(50,py*2-10,50,py*2+20);
    line(100,py*2+30,50,py*2+20);
    fireHeight = 15;
    fireLeft = -10;
    break;
    case "Tripod_Chain_Gun":
    drawGun(weapon_equipped,50,py*2+20);
    strokeWeight(15);
    stroke(0,0,200);
    line(50,py*2-10,50,py*2+20);
    line(100,py*2+30,50,py*2+20);
    fireHeight = 15;
    fireLeft = -10;
    break;
    }
    popMatrix();
    
    
        mouseClicked = function(){
            if(gunStats[weapon_equipped].fireMode === "semi"){
            if(mouseButton === LEFT&&gunStats[weapon_equipped].ammo > 0){
            bullets.push(new Bullet(100+fireLeft,py+fireHeight,0));
            playSound(getSound("retro/hit2"));
            playSound(getSound("retro/boom1"));
            gunStats[weapon_equipped].ammo--;
            }
            if(gunStats[weapon_equipped].ammo <= 0){
                    playSound(getSound("rpg/metal-clink"));
            }
            }
            
        };
        
    if(gunStats[weapon_equipped].fireMode === "auto"){
        if(mouseIsPressed){
            if(mouseButton === LEFT&&frameCount % gunStats[weapon_equipped].fireRate === 0){
                if(gunStats[weapon_equipped].ammo > 0){
                bullets.push(new Bullet(100+fireLeft,py+fireHeight,0));
                gunStats[weapon_equipped].ammo--;
                playSound(getSound("retro/hit2"));
                }if(gunStats[weapon_equipped].ammo <= 0){
                    playSound(getSound("rpg/metal-clink"));
                }
            }
            
        }
    }
    
    keyPressed = function(){
        if(key.toString() === "r"){
            gunStats[weapon_equipped].ammo = gunStats[weapon_equipped].max_ammo;
        }
    };
   
        
    
    
    for(var i = 0; i < bullets.length; i++){
        if(bullets[i].x > 700){
            bullets[i].dead = true;
        }
            if(bullets[i].dead !== true){
            bullets[i].draw();
            bullets[i].move();
            bullets[i].collide();
            switch(weapon_equipped){
                case "Pistol":
                case "Rifle":
                case "Sniper_Rifle":
                case "Hunting_Rifle":
                case "AK47":
                case "Chain_Gun":
                case "Tripod_Chain_Gun":
                bullets[i].type = 0;
                break;
                case "Shotgun":
                bullets[i].type = 1;
                break;
                case "Phaser":
                bullets[i].type = 2;
                break;
            }
            }
        
    }
    
    fill(0);
    textSize(20);
    text("Ammo: "+gunStats[weapon_equipped].ammo+".  Base health: "+baseHealth+".\nMoney: "+player.money,300,50);
    if(gunStats[weapon_equipped].ammo <= 0){
        text("'R'  to reload",300,150);
    }
    if(frameCount % enemyTimer === 0){
        enemyType = floor(random(0,8));
        aliens.push(new Alien(600,random(50,550),enemyType));
        enemyTimer-=1;
    }
    for(var i = 0; i < aliens.length; i++){
        if(aliens[i].dead !== true){
        aliens[i].draw();
        aliens[i].move();
        }
    }
    if(baseHealth < 0){
        scene = "game";
    }
    
};
var game4 = function(){
    background(0,30,0);
    noStroke();
    //draw the base
    fill(100);
    cursor("crosshair");
    rect(250,250,100,100);
    fill(50);
    rect(260,260,35,35);
    rect(305,260,35,35);
    rect(260,305,35,35);
    rect(305,305,35,35);
    //functionalize the zombies
    if(frameCount % zTime === 0){
        zombies.push(new Zombie(random(-600,1200),random(-600,1200),0));
        zTime-=1;
        if(zTime <= 20){
        zTime = 20;
    }
    }
    
    for(var i = 0; i < zombies.length; i++){
        if(zombies[i].dead !== true){
        zombies[i].draw();
        zombies[i].move();
        zombies[i].applyDeath();
        if(zombies[i].x > 0&&zombies[i].x < 600&&zombies[i].y > 0&&zombies[i].y < 600&&keyIsPressed&&keyCode === 0&&finalUsed !== true){
            zombies = [];
            finalUsed = true; 
        }
        }
    }
    stroke(0);
    noFill();
    strokeWeight(1100);
    ellipse(mouseX,mouseY,1200,1200);
    strokeWeight(1);
    line(mouseX,mouseY-50,mouseX,mouseY+50);
    line(mouseX-50,mouseY,mouseX+50,mouseY);
    
    textSize(20);
    fill(255);
    text("Ammo: "+gunStats[weapon_equipped].ammo+".  Money: "+player.money+".  Base health: "+baseHealth2+"\nPress space to use your last defense attack.",300,50);
    if(gunStats[weapon_equipped].fireMode === "semi"){
    mouseClicked = function(){
        if(gunStats[weapon_equipped].ammo > 0&&mouseButton === LEFT){
            gunStats[weapon_equipped].ammo--;
            playSound(getSound("retro/hit2"));
        }if(gunStats[weapon_equipped].ammo <= 0){
            playSound(getSound("rpg/metal-clink"));
        }
    };
    }else{
        if(mouseIsPressed){
        if(frameCount % gunStats[weapon_equipped].fireRate === 0&& gunStats[weapon_equipped].ammo > 0&&mouseButton === LEFT){
            gunStats[weapon_equipped].ammo--;
            playSound(getSound("retro/hit2"));
        }if(gunStats[weapon_equipped].ammo <= 0){
            playSound(getSound("rpg/metal-clink"));
        }
        }
    }
    if(gunStats[weapon_equipped].ammo <= 0){
        fill(255);
        text("'R' to reload",300,100);
    }
    if(baseHealth2 <= 0){
        scene = "game";
    }
    if(keyIsPressed&&key.toString() === "r"){
        gunStats[weapon_equipped].ammo = gunStats[weapon_equipped].max_ammo;
            playSound(getSound("rpg/step-heavy"));
    }
};
var pHP = 10;
var game5 = function(){
    fill(0);
    textSize(100);
    text("Coming\nSoon",300,300);
    mouseClicked = function(){
        scene = "game";
    };
};
draw = function() {
    mouseIsReleased = false;
background(200);
if(scene === "menu"){
menu();
}if(scene === "how"){
rules();
}if(scene === "about"){
aboutScreen();
}if(scene === "guns"){
 gunScreen();   
}if(scene === "game"){
    game();
}if(scene === "shop"){
    shop();
}if(scene === "target-practice"){
    game1();
}if(scene === "hunting"){
    game2();
}if(scene === "alien-defense"){
    game3();   
}if(scene === "zombie-defense"){
    game4();
}if(scene === "zombie-fps-run"||scene === "speed-sniper"||scene === "night-hunting"){
    game5();
}
};

	    
    }};

// Get the canvas that ProcessingJS will use
  var canvas = document.getElementById("game"); 
  // Pass the function to ProcessingJS constructor
  var RenderPJS = new Processing(canvas, codeSource); 
