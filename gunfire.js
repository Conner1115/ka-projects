var codeSource = function(processingInstance) {
    with (processingInstance) {


(function() {
	this[["KAInfiniteLoopCount"]] = -Infinity;
})();
frameRate(60);
smooth();
textFont(createFont("Orbitron"));
textAlign(CENTER);
var scene = "shop";
function storeData(func) {
  if(typeof(Storage) !== "undefined") {
    func();
  }
}
//setup
localStorage.maxhealth = 100;
localStorage.money = 0;
localStorage.weapon = "Pistol";
localStorage.healthpacks = 0;
localStorage.skin = "basic";
localStorage.level = 1;
localStorage.xp = 0;
var drawGun = function(type,x,y,s,r){
    noStroke();
    switch(type){
        case "AK47":{
            pushMatrix();
            translate(x,y);
            scale(s);
            rotate(r);
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
            rotate(20);
            fill(112, 78, 9);
            rect(-60,35,10,30,0,0,0,5);
            rect(-55,62,10,3);
            fill(130,90,9);
            rect(-60,45,3,15,0,0,0,5);
            fill(82, 57, 6);
            rect(-53,38,3,25,0,0,0,5);
            rotate(-20);
            noFill();
            stroke(100);
            strokeWeight(3);
            arc(-60,20,20,15,0,100);
            line(-60,20,-58,23);
            strokeCap(SQUARE);
            strokeWeight(20);
            arc(20,20,100,100,120,180);
            stroke(80);
            strokeWeight(5);
            arc(20,20,100,100,130,180);
            noStroke();
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
            rotate(r);
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
            rotate(20);
            fill(0);
            rect(-60,35,10,30,0,0,0,5);
            rect(-55,62,10,3);
            fill(0);
            rect(-60,45,3,15,0,0,0,5);
            fill(0);
            rect(-53,38,3,25,0,0,0,5);
            rotate(-20);
            noFill();
            stroke(0);
            strokeWeight(3);
            arc(-60,20,20,15,0,100);
            line(-60,20,-58,23);
            strokeCap(SQUARE);
            strokeWeight(20);
            arc(20,20,100,100,120,180);
            stroke(0);
            strokeWeight(5);
            arc(20,20,100,100,130,180);
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
        rotate(r);
        scale(s);
        noFill();
        stroke(80);
        arc(13,15,30,15,0,90);
        line(5,5,20,17);
        noStroke();
        fill(100);
        rect(0,0,50,12,5,0,5,0);
        rect(0,10,40,5,0,0,5,0);
        rotate(20);
        rect(10,0,12,30);
        fill(120);
        rect(10,10,3,20);
        fill(90);
        rect(10,28,15,2);
        rotate(-20);
        fill(120);
        rect(0,0,50,5,5,0,5,0);
        popMatrix();
        }break;
        case "Pistol-Black":{
        pushMatrix();
        translate(x,y);
        rotate(r);
        scale(s);
        fill(0);
        rect(0,0,50,12,5,0,5,0);
        rect(0,10,40,5,0,0,5,0);
        rotate(20);
        rect(10,0,12,30);
        rect(10,28,15,2);
        rotate(-20);
        noFill();
        stroke(0);
        arc(13,15,30,15,0,90);
        line(5,5,20,17);
        noStroke();
        popMatrix();
        }break;
        case "Scorpion-Pistol-Black":{
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(r);
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
        case "Scorpion-Pistol":{
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(r);
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
            rotate(r);
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
            rotate(r);
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
        case "Sniper-Rifle":{
        pushMatrix();
            translate(x,y);
            scale(s);
            rotate(r);
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
            rotate(r);
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
        case "Hunting-Rifle":{
        pushMatrix();
            translate(x,y);
            scale(s);
            rotate(r);
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
            rotate(r);
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
        rotate(r);
        scale(s);
        fill(100);
        rect(0,0,50,15,5,0,5,0);
        rect(50,1,15,10);
        rect(65,2,10,8);
        rect(10,39,25,2);
        rotate(20);
        rect(10,0,12,35);
        fill(120);
        rect(10,10,3,25);
        fill(90);
        rect(10,33,15,2);
        rotate(-20);
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
        rotate(r);
        fill(0);
        rect(0,0,50,15,5,0,5,0);
        rect(50,1,15,10);
        rect(65,2,10,8);
        rect(10,39,25,2);
        rotate(20);
        rect(10,0,12,35);
        fill(0);
        rect(10,10,3,25);
        fill(0);
        rect(10,33,15,2);
        rotate(-20);
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
        case "Chain-Gun":{
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(r);
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
        rotate(-20);
        rect(75,10,5,20);
        rotate(-20);
        rect(0,-15,5,17);
        rotate(40);
        rect(-25,-15,20,5);
        fill(100);
        arc(-7,-10,10,10,60,180);
        popMatrix();
        }break;
        case "Tripod-Chain-Gun":{
        pushMatrix();
        translate(x,y);
        scale(s+0.2);
        rotate(r);
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
        rotate(-20);
        rect(75,10,5,20);
        rotate(-20);
        rect(0,-15,5,17);
        rotate(40);
        rect(-25,-15,20,5);
        fill(100);
        arc(-7,-10,10,10,60,180);
        rect(70,40,20,10);
        arc(80,50,20,10,0,180);
        fill(80);
        rect(70,20,20,10,0,0,5,5);
        ellipse(80,40,20,10);
        fill(100);
        rect(75,30,10,10,0,0,5,5);
        arc(80,20,30,15,0,180);
        ellipse(65,90,10,5);
        ellipse(95,90,10,5);
        ellipse(80,80,10,5);
        popMatrix();
        }break;
        case "Chain-Gun-Black":{
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(r);
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
        rotate(-20);
        rect(75,10,5,20);
        rotate(-20);
        rect(0,-15,5,17);
        rotate(40);
        rect(-25,-15,20,5);
        fill(0);
        arc(-7,-10,10,10,60,180);
        popMatrix();
        }break;
        case "Tripod Chain Gun-Black":{
        pushMatrix();
        translate(x,y);
        scale(s+0.2);
        rotate(r);
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
        rotate(-20);
        rect(75,10,5,20);
        rotate(-20);
        rect(0,-15,5,17);
        rotate(40);
        rect(-25,-15,20,5);
        fill(0);
        arc(-7,-10,10,10,60,180);
        rect(70,40,20,10);
        arc(80,50,20,10,0,180);
        fill(0);
        rect(70,20,20,10,0,0,5,5);
        ellipse(80,40,20,10);
        fill(0);
        rect(75,30,10,10,0,0,5,5);
        arc(80,20,30,15,0,180);
        ellipse(65,90,10,5);
        ellipse(95,90,10,5);
        ellipse(80,80,10,5);
        popMatrix();
        }break;
        case "Shotgun":{
        pushMatrix();
            translate(x,y);
            scale(s);
            rotate(r);
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
     rotate(r);
     fill(173, 144, 0);
     rect(0,0,20,30);
     rect(2,30,16,2);
     rect(0,32,20,2);
     fill(166, 84, 30);
     arc(10,0,20,30,180,360);
     fill(189, 103, 38);
     arc(12,0,15,30,180,360);
     fill(200,120,50);
     rotate(-30);
     ellipse(15,1,8,13);
     fill(245, 190, 142);
     ellipse(15,1,5,8);
     fill(255);
     ellipse(15,1,3,5);
     rotate(30);
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
     rotate(r);
     fill(100);
     rect(5,0,20,10);
     rect(0,8,30,80,10,10,0,0);
     rect(3,88,24,2);
     rect(0,90,30,2);
     fill(166, 84, 30);
     arc(15,0,20,80,180,360);
     fill(189, 103, 38);
     arc(17,0,15,80,180,360);
     rotate(80);
     fill(204, 117, 55);
     ellipse(-20,-23,29,7);
     fill(224, 130, 62);
     ellipse(-20,-23,24,5);
     fill(255);
     ellipse(-20,-23,20,3);
     rotate(-80);
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
     rotate(r);
     fill(200,150,0);
     rect(5,0,20,10);
     rect(0,8,30,100,10,10,0,0);
     rect(3,88,24,2);
     rect(0,90,30,2);
     fill(112, 112, 112);
     arc(15,0,20,80,180,360);
     fill(156, 156, 156);
     arc(17,0,15,80,180,360);
     rotate(80);
     fill(171, 171, 171);
     ellipse(-20,-23,29,7);
     fill(201, 201, 201);
     ellipse(-20,-23,24,5);
     fill(255);
     ellipse(-20,-23,20,3);
     rotate(-80);
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
     rotate(r);
     fill(200,0,0);
     rect(0,0,20,40);
     fill(150,0,0);
     arc(5,0,10,4,180,360);
     arc(15,0,10,4,180,360);
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
     case "Chain Round":{
         pushMatrix();
         translate(x,y);
         rotate(r);
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
    text("This is my entry for the final challenge of\nthe Primavera contest.  I wanted to make\nsomething unique;  something different so\nI made this for everyone to enjoy.\n\nHave gun playing this game.\n\n-LeviathanProgramming",300,190);
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
var gunTypes = ["Pistol","AK47","Rifle","Sniper-Rifle","Hunting-Rifle","Shotgun","Scorpion-Pistol","Chain-Gun","Tripod-Chain-Gun","Phaser"];
var gamePage = 2;
var shopScene = 0;
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
        drawGun("Sniper-Rifle",200,250,0.75);
        fill(0);
        textSize(20);
        text(gunDescriptions[gunType],430,210);
    }
    if(gunType === 4){
        drawGun("Hunting-Rifle",200,250,0.75);
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
        drawGun("Scorpion-Pistol",180,250,1.8);
        fill(0);
        textSize(20);
        text(gunDescriptions[gunType],435,210);
    }
    if(gunType === 7){
        drawGun("Chain-Gun",110,250,1);
        fill(0);
        textSize(20);
        text(gunDescriptions[gunType],420,180);
    }
    if(gunType === 8){
        drawGun("Tripod-Chain-Gun",110,250,1);
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
var player = {
health:100,
maxhealth:localStorage.maxHealth,
money:localStorage.money,
healthpacks:localStorage.healthpacks,
weapon_equipped:localStorage.weapon,
skin:localStorage.skin,
level:localStorage.level,
xp:localStorage.xp,
draw:function(x,y,s){
    noStroke();
    switch(this.skin){
       case "basic":
           pushMatrix();
           translate(x,y);
           scale(s);
           fill(240, 217, 147);
           ellipse(0,0,50,50);
           fill(0,0,255);
           rect(-25,25,50,100);
           popMatrix();
       break;
    }
},
};
var saveGame = function(){
    
};
var game = function(){
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
        text("Money :$"+player.money+"\nHealth Packs: "+player.healthpacks+"\nWeapon Equipped:\n"+player.weapon_equipped+"\nSkin: "+player.skin+"\nlevel: "+player.level+"\nxp: "+player.xp,370,115);
        //["Pistol","AK47","Rifle","Sniper-Rifle","Hunting-Rifle","Shotgun","Scorpion-Pistol","Chain-Gun","Tripod-Chain-Gun","Phaser"]
        
        switch(player.weapon_equipped){
            case "Pistol":
            drawGun("Pistol",300,350,4,0);
            break;
            case "AK47":
            drawGun("AK47",440,350,1.25,0);
            break;
            case "Rifle":
            drawGun("Rifle",410,350,0.95,0);
            break;
            case "Sniper-Rifle":
            drawGun("Sniper-Rifle",410,350,0.95,0);
            break;
            case "Hunting-Rifle":
            drawGun("Hunting-Rifle",410,350,0.95,0);
            break;
            case "Shotgun":
            drawGun("Shotgun",430,350,1,0);
            break;
            case "Scorpion-Pistol":
            drawGun("Scorpion-Pistol",400,350,2,0);
            break;
            case "Chain-Gun":
            drawGun("Chain-Gun",300,350,1.5,0);
            break;
            case "Tripod-Chain-Gun":
            drawGun("Tripod-Chain-Gun",300,350,1.5,0);
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
        drawGun("Scorpion-Pistol",0,0,0.75,-30);
        popMatrix();
        pushMatrix();
        translate(550,450);
        scale(-0.5,1);
        drawGun("Scorpion-Pistol",0,0,0.75,-30);
        popMatrix();
        
        if(mouseX > 20&&mouseY > 80&&mouseX < 270&&mouseY < 280){
            fill(255,150);
            rect(20,80,250,200,20,0,20,0);
            textSize(20);
            fill(0);
            text("Hunting",140,100);
            textSize(15);
            text("Put your shooting skills to the\ntest by shooting moving\ntargets.  This is an easy way\nto earn money but be careful\nnot to scare the animal off\nbefore you hit it or you will\nlose money.",145,130);
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
            text("Zombie Defender",140,330);
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
            text("Run quickly through a long\nalley full of infected zombies.\nIf you are good at First\nPerson Shooters, you'd like\nthis one.  Be sure to bring\nalong some fully automatic\nguns like the scorpion pistol\nor the chain gun.",145+300,360);
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
        arc(450,270,100,100,70,280);
        arc(480,267,100,100,105,242);
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
        if(gamePage === 0&&mouseX > 20&&mouseX < 220&&mouseY > 80&&mouseY < 280){
        scene = "target-practice";    
        }
        if(gamePage === 0&&mouseX > 20&&mouseX < 220&&mouseY > 300&&mouseY < 350){
            scene = "shop";
        }
        if(gamePage === 0&&mouseX > 20&&mouseX < 220&&mouseY > 370&&mouseY < 350+70){
            scene = "guns";
        }
        if(gamePage === 0&&mouseX > 20&&mouseX < 220&&mouseY > 370+70&&mouseY < 350+140){
            saveGame();
        }
        if(gamePage === 1&&mouseX > 20&&mouseY > 80&&mouseX < 270&&mouseY < 280){
            scene = "hunting";
        }
        if(gamePage === 1&&mouseX > 320&&mouseY > 80&&mouseX < 270+300&&mouseY < 280){
            scene = "alien-defense";
        }
        if(gamePage === 1&&mouseX > 20&&mouseY > 300&&mouseX < 270&&mouseY < 500){
            scene = "zombie-defence";
        }
        if(gamePage === 1&&mouseX > 320&&mouseY > 300&&mouseX < 270+300&&mouseY < 500){
            scene = "zombie-fps-run";
        }
        if(gamePage === 2&&mouseX > 20&&mouseX < 300&&mouseY > 80&&mouseY < 500){
            scene = "speed-sniper";
        }
        if(gamePage === 2&&mouseX > 300&&mouseX < 580&&mouseY > 80&&mouseY < 500){
            scene = "night-hunting";
        }
    };
};
var shop = function(){
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
    textSize(30);
    
    textLeading(30);
    text("Health\n\nHealth Pack\n\nDamage\n\nArmor\n\nSpeed\n\nLevel",140,175);
    var metalicText = get(0,0,600,600);
    metalicTexture.mask(metalicText);
    image(metalicTexture, 0, 0);
    noFill();
    stroke(0);
    strokeWeight(2);
    if(mouseX > 20&&mouseX < 120&&mouseY > 540&&mouseY < 590){cursor(HAND);fill(255,50);}else{noFill();}
    rect(20,540,100,50,15,0,15,0);
    if(mouseX > 460&&mouseX < 595&&mouseY > 540&&mouseY < 590){cursor(HAND);fill(255,50);}else{noFill();}
    rect(460,540,135,50,0,15,0,15);
    
    stroke(0);
    if(mouseX > 20&&mouseX < 270&&mouseY > 80+60&&mouseY < 140+50){fill(255,100);cursor(HAND);}else{noFill();}
    rect(20,80+60,250,50,15,0,15,0);
    if(mouseX > 20&&mouseX < 270&&mouseY > 80+120&&mouseY < 140+60+50){fill(255,100);cursor(HAND);}else{noFill();}
    rect(20,80+120,250,50,15,0,15,0);
    if(mouseX > 20&&mouseX < 270&&mouseY > 80+180&&mouseY < 140+50+120){fill(255,100);cursor(HAND);}else{noFill();}
    rect(20,80+180,250,50,15,0,15,0);
    if(mouseX > 20&&mouseX < 270&&mouseY > 80+240&&mouseY < 140+50+180){fill(255,100);cursor(HAND);}else{noFill();}
    rect(20,80+180+60,250,50,15,0,15,0);
    if(mouseX > 20&&mouseX < 270&&mouseY > 80+300&&mouseY < 140+50+240){fill(255,100);cursor(HAND);}else{noFill();}
    rect(20,80+180+120,250,50,15,0,15,0);
    if(mouseX > 20&&mouseX < 270&&mouseY > 80+360&&mouseY < 140+50+300){fill(255,100);cursor(HAND);}else{noFill();}
    rect(20,80+360,250,50,15,0,15,0);
    
    
    mouseClicked = function(){
        if(mouseX > 20&&mouseX < 120&&mouseY > 540&&mouseY < 590){
            scene = "menu";
        }
        if(mouseX > 460&&mouseX < 595&&mouseY > 540&&mouseY < 590){
            scene = "game";
        }
        if(shopScene === 0){
             if(mouseX > 20&&mouseX < 270&&mouseY > 80+60&&mouseY < 140+50){
                storeData(
                function(){
                    if(localStorage.maxhealth){
                        localStorage.maxhealth+=10;
                        player.health = localStorage.maxhealth;
                    }else{
                     player.maxhealth = 100;   
                    }
                }
                );
             }
             if(mouseX > 20&&mouseX < 270&&mouseY > 80+120&&mouseY < 140+60+50){
                storeData(
                function(){
                    if(localStorage.healthpacks){
                        localStorage.healthpacks+=1;
                        player.healthpacks = localStorage.healthpacks;
                    }else{
                     localStorage.healthpacks = 0;   
                    }
                }
                );
             }
        }
    };
};
draw = function() {
background(200);
/*
drawGun("AK47",160,10);
drawGun("AK47-Black",420,10);
drawGun("Pistol",10,50);
drawGun("Pistol-Black",170,30);
drawGun("Scorpion-Pistol-Black",70,100);
drawGun("Scorpion-Pistol",210,100);
drawGun("Rifle",420,120);
drawGun("Shotgun",180,180);
drawGun("Sniper-Rifle",420,200);
drawGun("Hunting-Rifle",180,260);
drawGun("Phaser",500,220);
drawGun("Chain Gun",390,300);
drawGun("Tripod Chain Gun",360,350,1);
drawBullet("Pistol",430,40);
drawBullet("Rifle",460,50,0.6);
drawBullet("Sniper",490,50,0.6);
drawBullet("Shotgun",520,30,1.5);
drawBullet("Chain Round",300,80);*/
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
}
};
	    
    }};

// Get the canvas that ProcessingJS will use
  var canvas = document.getElementById("game"); 
  // Pass the function to ProcessingJS constructor
  var RenderPJS = new Processing(canvas, codeSource); 
