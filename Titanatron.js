
  var runProgram = function(processingCode) {
    with (processingCode) {
      size(600, 600); 
      frameRate(60);
      textFont(createFont("Orbitron"));
      textAlign(CENTER);
      smooth();
(function() {
	this[["KAInfiniteLoopCount"]] = -Infinity;
})();

      let scene = "game";
      let level = 0;
      let keys = [];
      let blocks = [];
      var particles = [];
      var enemies = [];
      let blockCollidedIn = [false,false];
      var pageX = 0;
      var pageY = 0;
      var ang = function(input){
          return input*(PI/180);
      }
      let polygon = function(coords,close){
          beginShape();
          for(var i = 0; i < coords.length; i++){
              vertex(coords[i][0],coords[i][1]);
          }
          if(close === undefined){
          endShape();
          }else{
              endShape(CLOSE);
          }
      }
      let Particle = function(x,y,type){
          this.x = x;
          this.y = y;
          this.ySpeed = -2;
          this.type = type;
          this.opacity = 50;
          switch(this.type){
              case 0:
                this.opacity = 50;
                
          }
      }
      Particle.prototype.draw = function(){
          if(!this.dead){
          fill(255,255,255,this.opacity);
          noStroke();
          ellipse(this.x,this.y,5,5);
          this.opacity--;
          this.y+=this.ySpeed/particles.length;
          }
          if(this.opacity <= 0){
              this.dead = true;
          }
          
      }
      let beaconTower = function(x,y,s,r){
        noStroke();
        pushMatrix();
        
        translate(x,y);
        scale(s);
        rotate(r);
        
          fill(50);
          rect(0,0,100,100);
          fill(120);
          rect(20,20,60,60);fill(80);
          quad(0,0,20,20,20,80,0,100);
          quad(100,0,80,20,80,80,100,100);
          
          
          {
          pushMatrix();
          translate(-250,-150);
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
          popMatrix();
          }
        popMatrix();
      };
      let redBeaconTower = function(x,y,s,r){
        noStroke();
        pushMatrix();
        
        translate(x,y);
        scale(s);
        rotate(r);
        
          fill(50);
          rect(0,0,100,100);
          fill(120);
          rect(20,20,60,60);fill(80);
          quad(0,0,20,20,20,80,0,100);
          quad(100,0,80,20,80,80,100,100);
          
          
          {
          pushMatrix();
          translate(-250,-150);
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
          popMatrix();
          }
        popMatrix();
};
      let dangerFloor = function(x,y){
          noStroke();
          for(var i = 0; i < 50; i+=5){
              fill(i*2+70);
              rect(0,i,50,5);
          }
          fill(0);
          rect(0,17,50,15);
          fill(255,255,0);
          triangle(0,17,0,33,5,17);
          quad(10,17,5,32,10,32,15,17)
          quad(20,17,15,32,20,32,25,17)
          quad(30,17,25,32,30,32,35,17)
          quad(40,17,35,32,40,32,45,17)
          quad(50,17,45,32,50,32,50,17)
      };
      let chargerSource = function(x,y){
          noStroke();
          for(var i = 0; i < 50; i+=5){
              fill(i*2+70);
              rect(0,i,50,5);
          }
          strokeWeight(2);
          stroke(0,200,200);
          line(0,25,50,25);
          line(25,0,25,50);
          noStroke();
          for(var i = 0; i <= 31; i+=3){
              fill(i*5)
              rect(i+9,15,3,15);
              pushMatrix();
              translate(25,30);
              rotate(ang(180));
              fill(i,20);
              arc(0,0,32,15,ang(i+170),ang(i+330));
              popMatrix();
          }
          fill(0,255,255)
          stroke(0,200,200);
          ellipse(25,15,30,15);
          
          noStroke();
          
      };
      var lightup = 50;
      var lightSpeed = 1;
      let healingBlock = function(x,y){
          noStroke();
          for(var i = 0; i < 50; i+=5){
              fill(i*2+70);
              rect(0,i,50,5);
          }
          stroke(200,0,0);
          fill(lightup,0,0);
          lightup+=lightSpeed;
          if(lightup > 255){
              lightSpeed = -1;
          }if(lightup < 50){
              lightSpeed = 1;
          }
          strokeWeight(5);
          polygon([
              [20,5],
              [30,5],
              [30,20],
              [45,20],
              [45,30],
              [30,30],
              [30,45],
              [20,45],
              [20,30],
              [5,30],
              [5,20],
              [20,20]
              
          ],true);
          
          noStroke();
          pushMatrix();
          translate(25,25);
          for(var i = 0; i < 360; i+=90){
              rotate(ang(i));
              fill(50)
          quad(-5,-20,5,-20,10,-25,-10,-25);
          fill(80)
          quad(10,-25,5,-20,5,-5,10,-5);
          fill(100);
          quad(-10,-25,-5,-20,-5,-5,-10,-5);
          }
          popMatrix();
          noStroke(0);
      };
      var floorFlare = 0;
      var b;
      let hotBlock = function(x,y){
          noStroke();
          for(var i = 0; i < 50; i+=5){
              fill(i*2+100,i+floorFlare,0);
              rect(0,i,50,5);
          }
          floorFlare+=0.1;
          if(floorFlare > 50){
              floorFlare = 0;
          }
          
          
      }
      let normalFloor = function(x,y){
          noStroke();
          fill(150)
          rect(x,y,50,50)
      }
      let Block = function(x,y,type){
          this.x = x;
          this.y = y;
          this.type = type;
          this.radius = 25;
          this.constrainPlayer = true;
          switch(this.type){
              case 4:
              case 5:
              case 6:
              case 7:
              case 8:
              case 9:
                  this.constrainPlayer = false;
              break;
          }
      }
      Block.prototype.draw = function(){
          switch(this.type){
              case 0:
                beaconTower(this.x,this.y,0.5,0);
              break;
              case 1:
                  pushMatrix();
                  translate(this.x+50,this.y);
                  scale(-1,1);
                beaconTower(0,0,0.5,0)
                popMatrix();
              break;
              case 2:
                redBeaconTower(this.x,this.y,0.5,0);
              break;
              case 3:
                  pushMatrix();
                  translate(this.x+50,this.y);
                  scale(-1,1);
                redBeaconTower(0,0,0.5,0)
                popMatrix();
              break;
              case 4:
                pushMatrix();
                  translate(this.x,this.y);
                  
                dangerFloor(0,0);
                popMatrix();  
              break;
              case 5:
                pushMatrix();
                  translate(this.x+50,this.y);
                  rotate(ang(90));
                dangerFloor(0,0);
                popMatrix();  
              break;
              case 6:
                pushMatrix();
                  translate(this.x,this.y);
                chargerSource(0,0);
                popMatrix();  
              break;
              case 7:
                pushMatrix();
                  translate(this.x,this.y);
                healingBlock(0,0);
                popMatrix();  
              break;
              case 8:
                pushMatrix();
                  translate(this.x,this.y);
                hotBlock(0,0);
                popMatrix();  
              break;
              case 9:
                pushMatrix();
                  translate(this.x,this.y);
                normalFloor(0,0);
                popMatrix();  
              break;
          }
      }
      var drawMap = function(arr){
          blocks = [];
          for(var i = 0; i < arr.length; i++){
              var z = arr[i].split('');
              for(var j = 0; j < z.length; j++){
                  
                      blocks.push(new Block(j*50,i*50,parseInt(z[j])))
                     
                  }
          }
          
      }
      let Player = function(x,y){
          this.kills = 0;
          this.money = 0;
          this.pulsing = false;
          this.pulseWidth = 0;
          this.x = x;
          this.y = y;
          this.speed = 5;
          this.facing = 0;
          this.width = 40;
          this.height = 60;
          this.energy = 100;
          this.health = 100;
          this.EMFInterval = 100;
          this.maxHealth = 100;
          this.damage = 10;
          if(this.energy <= 0){
              this.energy = 0;
          }
      };
      Player.prototype.draw = function(){
          switch(this.facing){
          case 0:{
              pushMatrix();
              translate(this.x+20,this.y+60);
              
              
              noStroke();
              fill(80);
              rect(-23,-34,7,14);
              rect(23-7,-34,7,14);
              pushMatrix();
              translate(-10,-50);
              rotate(ang(110));
              rect(0,0,20,7);
              fill(60)
              rect(0,0,20,3);
              popMatrix();
              pushMatrix();
              translate(16,-30);
              rotate(ang(-110));
              fill(80)
              rect(0,0,20,7);
              fill(60)
              rect(0,0,20,3);
              popMatrix();
              fill(50);
              polygon([
                [-13,-50],
                [-8,-25],
                [0,-25]
              ]);
              polygon([
                [13,-50],
                [8,-25],
                [0,-25]
              ]);
              polygon([
                [-10,-50],
                [-20,-55],
                [-25,-40],
                [-20,-45],
                [-10,-40],
              ]);
              polygon([
                [10,-50],
                [20,-55],
                [25,-40],
                [20,-45],
                [10,-40],
              ]);
              rect(-5,-30,10,5);
              fill(100);
              polygon([
                [0,-50],
                [-10,-50],
                [-20,-55],
                [-25,-55],
                [-30,-45],
                [-25,-50],
                [-10,-45],
                [-5,-30],
                [0,-30]
              ]);
              polygon([
                [0,-50],
                [10,-50],
                [20,-55],
                [25,-55],
                [30,-45],
                [25,-50],
                [10,-45],
                [5,-30],
                [0,-30]
              ]);
              fill(200);
              polygon([
                [-12,-40],
                [-2,-40],
                [-6,-38],
                [-9,-36],
                [-7,-36],
                [-2,-36],
                [-9,-32]
              ]);
              polygon([
                [12,-40],
                [2,-40],
                [6,-38],
                [9,-36],
                [7,-36],
                [2,-36],
                [9,-32]
              ]);
              
              fill(50);
              rect(-8,-25,5,15);
              rect(3,-25,5,15);
              fill(100)
              ellipse(-6,-9,7,5);
              ellipse(6,-9,7,5);
              fill(50);
              if(keys[DOWN]){
              polygon([
                [-8,-9],
                [-8,-5],
                [-10,(frameCount % 50)/10],
                [-3,(frameCount % 50)/10],
                [-3,-9]
              ]);
              polygon([
                [8,-9],
                [8,-5],
                [10,(frameCount % 25)/5],
                [3,(frameCount % 25)/5],
                [3,-9]
              ]);
              }else{
                  polygon([
                [-8,-9],
                [-8,-5],
                [-10,9],
                [-3,9],
                [-3,-9]
              ]);
              polygon([
                [8,-9],
                [8,-5],
                [10,9],
                [3,9],
                [3,-9]
              ]);
              }
              rect(-3,-25,6,8,2);
              fill(70);
              arc(0,-25,20,10,ang(-30),ang(210));
              fill(0,200,200);
              arc(0,-25,10,5,ang(-30),ang(210));
              
              fill(0,255,255);
              stroke(0,200,200);
              strokeWeight(2);
              line(-7,-43,7,-43);
              line(-7,-43,-10,-50);
              line(7,-43,10,-50);
              ellipse(0,-43,5,5);
              noStroke();
              fill(50);
              rect(-3,-53,6,3);
              fill(80)
              ellipse(0,-60,8,5);
              arc(0,-60,8,20,ang(0),ang(180));
              fill(0,255,255);
              ellipse(-2,-60,2,2);
              ellipse(2,-60,2,2);
              popMatrix();
          }break;
          case 1:{
              pushMatrix();
              translate(this.x+20,this.y+60);
              
              
              noStroke();
              fill(80);
              rect(-23,-34,7,14);
              rect(23-7,-34,7,14);
              pushMatrix();
              translate(-10,-50);
              rotate(ang(110));
              rect(0,0,20,7);
              fill(60)
              rect(0,0,20,3);
              popMatrix();
              pushMatrix();
              translate(16,-30);
              rotate(ang(-110));
              fill(80)
              rect(0,0,20,7);
              fill(60)
              rect(0,0,20,3);
              popMatrix();
              fill(50);
              polygon([
                [-13,-50],
                [-8,-25],
                [0,-25]
              ]);
              polygon([
                [13,-50],
                [8,-25],
                [0,-25]
              ]);
              polygon([
                [-10,-50],
                [-20,-55],
                [-25,-40],
                [-20,-45],
                [-10,-40],
              ]);
              polygon([
                [10,-50],
                [20,-55],
                [25,-40],
                [20,-45],
                [10,-40],
              ]);
              rect(-5,-30,10,5);
              fill(100);
              polygon([
                [0,-50],
                [-10,-50],
                [-20,-55],
                [-25,-55],
                [-30,-45],
                [-25,-50],
                [-10,-45],
                [-5,-30],
                [0,-30]
              ]);
              polygon([
                [0,-50],
                [10,-50],
                [20,-55],
                [25,-55],
                [30,-45],
                [25,-50],
                [10,-45],
                [5,-30],
                [0,-30]
              ]);
              
              fill(50);
              rect(-8,-25,5,15);
              rect(3,-25,5,15);
              fill(100)
              ellipse(-6,-9,7,5);
              ellipse(6,-9,7,5);
              fill(50);
              if(keys[UP]){
              polygon([
                [-8,-9],
                [-8,-5],
                [-10,(frameCount % 50)/10],
                [-3,(frameCount % 50)/10],
                [-3,-9]
              ]);
              polygon([
                [8,-9],
                [8,-5],
                [10,(frameCount % 25)/5],
                [3,(frameCount % 25)/5],
                [3,-9]
              ]);
              }else{
                  polygon([
                [-8,-9],
                [-8,-5],
                [-10,9],
                [-3,9],
                [-3,-9]
              ]);
              polygon([
                [8,-9],
                [8,-5],
                [10,9],
                [3,9],
                [3,-9]
              ]);
              }
              rect(-3,-25,6,8,2);
              fill(70);
              arc(0,-25,20,10,ang(-30),ang(210));
              fill(0,200,200);
              arc(0,-25,10,5,ang(-30),ang(210));
              
              
              noStroke();
              fill(50);
              rect(-3,-53,6,3);
              fill(80)
              ellipse(0,-60,8,5);
              arc(0,-60,8,20,ang(0),ang(180));
              
              popMatrix();
          }break;
          case 2:{
              pushMatrix();
              translate(this.x+20,this.y+70);
              
              noStroke();
              fill(100)
              ellipse(0,-65,10,10);
              fill(0,255,255)
            ellipse(-7,-51,2,5);
            ellipse(-3,-65,2,2);
            fill(80);
            arc(0,-40,10,7,ang(-30),ang(220));
              fill(100);
              quad(-8,-60,8,-60,3,-40,-3,-40);
              fill(50)
              quad(-5,-60,5,-60,3,-40,-3,-40);
            polygon([
            [-10,-55],
            [10,-55],
            [0,-50],
            ]);
            fill(120)
            rect(-3,-58,6,15);
            pushMatrix();
            fill(120);
            translate(0,-47);
            rotate(ang(60));
            rect(0,0,6,15);
            popMatrix();
            fill(100);
            polygon([
            [-10,-60],
            [10,-60],
            [0,-50],
            ]);
            
            if(keys[LEFT]){
                pushMatrix();
                translate(-3,-40);
                rotate(ang(frameCount % 25)/2);
                fill(50)
                rect(0,0,6,15);
                fill(100);
                ellipse(3,15,10,5);
                fill(50)
                rect(0,15,6,15);
                triangle(-2,30,0,30,0,25);
                popMatrix();
                pushMatrix();
                translate(-3,-40);
                rotate(-1*ang(frameCount % 25)/2);
                fill(50)
                rect(0,0,6,15);
                fill(100);
                ellipse(3,15,10,5);
                fill(50)
                rect(0,15,6,15);
                triangle(-2,30,0,30,0,25);
                popMatrix();
            }else{
                pushMatrix();
                translate(-3,-40);
                fill(50)
                rect(0,0,6,15);
                fill(100);
                ellipse(3,15,10,5);
                fill(50)
                rect(0,15,6,15);
                triangle(-2,30,0,30,0,25);
                popMatrix();
                pushMatrix();
                translate(-3,-40);
                fill(50)
                rect(0,0,6,15);
                fill(100);
                ellipse(3,15,10,5);
                fill(50)
                rect(0,15,6,15);
                triangle(-2,30,0,30,0,25);
                
                popMatrix();
            }
            
            popMatrix();
          }break;
          case 3:{
                 pushMatrix();
                 
              translate(this.x+20,this.y+70);
              scale(-1,1);
              noStroke();
              fill(100)
              ellipse(0,-65,10,10);
              fill(0,255,255)
            ellipse(-7,-51,2,5);
            ellipse(-3,-65,2,2);
            fill(80);
            arc(0,-40,10,7,ang(-30),ang(220));
              fill(100);
              quad(-8,-60,8,-60,3,-40,-3,-40);
              fill(50)
              quad(-5,-60,5,-60,3,-40,-3,-40);
            polygon([
            [-10,-55],
            [10,-55],
            [0,-50],
            ]);
            fill(120)
            rect(-3,-58,6,15);
            pushMatrix();
            fill(120);
            translate(0,-47);
            rotate(ang(60));
            rect(0,0,6,15);
            popMatrix();
            fill(100);
            polygon([
            [-10,-60],
            [10,-60],
            [0,-50],
            ]);
            
            if(keys[RIGHT]){
                pushMatrix();
                translate(-3,-40);
                rotate(ang(frameCount % 25)/2);
                fill(50)
                rect(0,0,6,15);
                fill(100);
                ellipse(3,15,10,5);
                fill(50)
                rect(0,15,6,15);
                triangle(-2,30,0,30,0,25);
                popMatrix();
                pushMatrix();
                translate(-3,-40);
                rotate(-1*ang(frameCount % 25)/2);
                fill(50)
                rect(0,0,6,15);
                fill(100);
                ellipse(3,15,10,5);
                fill(50)
                rect(0,15,6,15);
                triangle(-2,30,0,30,0,25);
                popMatrix();
            }else{
                pushMatrix();
                translate(-3,-40);
                fill(50)
                rect(0,0,6,15);
                fill(100);
                ellipse(3,15,10,5);
                fill(50)
                rect(0,15,6,15);
                triangle(-2,30,0,30,0,25);
                popMatrix();
                pushMatrix();
                translate(-3,-40);
                fill(50)
                rect(0,0,6,15);
                fill(100);
                ellipse(3,15,10,5);
                fill(50)
                rect(0,15,6,15);
                triangle(-2,30,0,30,0,25);
                
                popMatrix();
            }
            
            popMatrix();}break;
          
          }
          
          
          fill(255,0,0);
          rect(this.x-30,this.y-20,100,5);
          fill(0,255,0);
          rect(this.x-30,this.y-20,this.health,5);
          fill(0,255,255);
          rect(this.x-30,this.y-13,this.energy,5);
      };
      Player.prototype.collide = function(){
          //block the player from the left side
          for(var i = 0; i < blocks.length; i++){
              var b = blocks[i];
               if(blocks[i].constrainPlayer){
                 
                  
                  if(this.facing === 0 && 
             this.x+this.width > b.x &&
             this.y+this.height > b.y &&
             this.y < b.y+b.radius*2 &&
             this.x < b.x+b.radius*2){
              this.y = constrain(this.y,0,b.y-this.height);
              
          }
          if(this.facing === 1 && 
             this.x+this.width > b.x &&
             this.y+this.height > b.y &&
             this.y < b.y+b.radius*2 &&
             this.x < b.x+b.radius*2){
              this.y = constrain(this.y,b.y+b.radius*2,height);
              
          }
          if(this.facing === 3 && 
             this.x+this.width > b.x &&
             this.y+this.height > b.y &&
             this.y < b.y+b.radius*2 &&
             this.x < b.x+b.radius*2){
              this.x = constrain(this.x,0,b.x-this.width);
              
          }
          if(this.facing === 2 && 
             this.x+this.width > b.x &&
             this.y+this.height > b.y &&
             this.y < b.y+b.radius*2 &&
             this.x < b.x+b.radius*2){
              this.x = constrain(this.x,b.x+b.radius*2,width);
              
          }
                  
              }else{
                  if(
             this.x+this.width > b.x &&
             this.y+this.height > b.y &&
             this.y < b.y+b.radius*2 &&
             this.x < b.x+b.radius*2){
              blockCollidedIn = [true,b.type];
              
          }
              }
          }
          
          
      };
      Player.prototype.allowMove = function(){
          
          if(keys[UP]){
              this.y-=this.speed;
              this.facing = 1;
          }
          if(keys[DOWN]){
              this.y+=this.speed;
              this.facing = 0;
          }
          if(keys[LEFT]){
              this.x-=this.speed;
              this.facing = 2;
          }
          if(keys[RIGHT]){
              this.x+=this.speed;
              this.facing = 3;
          }
          
          
      };
      Player.prototype.allowAttack = function(){
          
              if(keyCode === 0){
                  if(this.energy > 0){
                  noFill();
                  strokeWeight(3);
                  stroke(0,255,255)
                  ellipse(this.x+20,this.y+30,this.pulseWidth,this.pulseWidth);
                  noStroke();
                  
                  this.pulsing = true;
                  }
              }else{
                  this.pulseWidth = 0;
              }
              if(this.pulsing){
                  this.pulseWidth+=5;
                  if(this.pulseWidth % this.EMFInterval === 0){
                      
                      for(var i = 0; i < enemies.length; i++){
                      
                      if(
            enemies[i].x > (this.x+20-this.pulseWidth/2)&&
            enemies[i].x < (this.x+20+this.pulseWidth/2)&&
            enemies[i].y > (this.y+30-this.pulseWidth/2)&&
            enemies[i].y < (this.y+30+this.pulseWidth/2)
                          ){
                          enemies[i].health-=this.damage;
                      }
                        }
                  }
                  if(this.pulseWidth === width){
                      this.pulseWidth = 0;
                      this.energy-=5;
                  }
                  
              }
          
      };
      var player = new Player(300,200);
      
      
      var Enemy = function(x,y,type){
          this.x = x;
          this.y = y;
          this.type = type;
          this.Xspeed = 2;
          this.Yspeed = 2;
          this.health = 20;
          this.damage = 10;
          this.attackSpeed = 50;
          //you have to have the width and height attributes or the player attack wave collision will not work
          this.width = 20;
          this.height = 30;
          this.reward = 10;
          switch(type){
              case 1:
                this.health = 30;
                this.damage = 15;
                this.attackSpeed = 45;
                this.width = 30;
                this.height = 60;
                this.reward = 25;
              break;
              case 2:
                this.health = 40;
                this.damage = 20;
                this.speed = 3;
                this.attackSpeed = 50;
                this.width = 45;
                this.height = 90;
                this.reward = 50;
              break;
              case 3:
                this.health = 100;
                this.damage = 5;
                this.speed = 5;
                this.attackSpeed = 25;
                this.width = 40;
                this.height = 60;
                this.reward = 100;
              break;
              case 4:
                this.health = 200;
                this.damage = 10;
                this.speed = 7.5;
                this.attackSpeed = 15;
                this.width = 45;
                this.height = 100;
                this.reward = 250;
              break;
              case 5:
                this.health = 20;
                this.damage = 50;
                this.speed = 10;
                this.attackSpeed = 25;
                this.width = 30;
                this.height = 40;
              break;
          }
      }
      Enemy.prototype.move = function(){
          this.x+=this.Xspeed;
          this.y+=this.Yspeed;
          if(this.x < player.x){
              this.Xspeed = 2;
          }if(this.x > player.x){
              this.Xspeed = -2;
          }if(this.y < player.y){
              this.Yspeed = 2;
          }if(this.y > player.y){
              this.Yspeed = -2;
          }
      }
      Enemy.prototype.attack = function(){
          if(this.x+this.width > player.x&&this.y+this.height > player.y&&this.x < player.x+player.width&&this.y < player.y+player.height){
              if(frameCount % this.attackSpeed === 0){
                  player.health-=this.damage;
              }
          }
      }
      Enemy.prototype.draw = function(){
          switch(this.type){
              case 0:{
                noStroke();
                pushMatrix();
                translate(this.x,this.y);
                fill(0,50)
                rect(0,10,20,20);
                arc(10,10,20,20,ang(180),ang(360));
                arc(10,30,20,10,ang(0),ang(180));
                fill(255,0,0);
                stroke(255,0,0);
                strokeWeight(2);
                ellipse(5,10,3,3);
                ellipse(15,10,3,3);
                //does the same as strokeCap(SQUARE)
                strokeCap("butt");
                noFill();
                stroke(0)
                arc(10,20,20,10,ang(frameCount-30),ang(frameCount+180-30));
                arc(10,25,20,10,ang(frameCount),ang(frameCount+180));
                arc(10,30,20,10,ang(frameCount+30),ang(frameCount+180+30));
                
                popMatrix();
              }break;
              case 1:{
                pushMatrix();
                translate(this.x,this.y);
                stroke(200,0,0);
                strokeWeight(2);
                noFill();
                ellipse(15,45,20,10);
                ellipse(15,50,20,10);
                ellipse(15,55,20,10);
                noStroke();
                fill(80);
                rect(0,18,5,15);
                rect(25,18,5,15);
                rect(9,25,12,10,0,0,15,15);
                rect(5,35,20,5,15,15,0,0);
                arc(15,40,20,10,ang(0),ang(180))
                fill(100);
                ellipse(15,20,20,15);
                ellipse(5,20,10,10);
                ellipse(25,20,10,10);
                fill(120);
                ellipse(5,18,10,5);
                ellipse(25,18,10,5);
                ellipse(15,18,15,10);
                fill(255,0,0);
                stroke(100,0,0);
                strokeWeight(2);
                ellipse(15,20,5,5);
                popMatrix();
              }break; 
              case 2:{
                pushMatrix();
                translate(this.x,this.y);
                scale(1.5)
                stroke(0,200,200);
                strokeWeight(2);
                noFill();
                ellipse(15,45,20,10);
                ellipse(15,50,20,10);
                ellipse(15,55,20,10);
                noStroke();
                fill(80);
                rect(0,18,5,15);
                rect(25,18,5,15);
                rect(9,25,12,10,0,0,15,15);
                rect(5,35,20,5,15,15,0,0);
                arc(15,40,20,10,ang(0),ang(180))
                fill(100);
                ellipse(15,20,20,15);
                ellipse(5,20,10,10);
                ellipse(25,20,10,10);
                fill(120);
                ellipse(5,18,10,5);
                ellipse(25,18,10,5);
                ellipse(15,18,15,10);
                fill(0,255,255);
                stroke(0,100,100);
                strokeWeight(2);
                ellipse(15,20,5,5);
                popMatrix();
              }break; 
              case 3:{
                  {
              pushMatrix();
              translate(this.x+20,this.y+60);
              
              
              noStroke();
              fill(80);
              rect(-23,-34,7,14);
              rect(23-7,-34,7,14);
              pushMatrix();
              translate(-10,-50);
              rotate(ang(110));
              rect(0,0,20,7);
              fill(60)
              rect(0,0,20,3);
              popMatrix();
              pushMatrix();
              translate(16,-30);
              rotate(ang(-110));
              fill(80)
              rect(0,0,20,7);
              fill(60)
              rect(0,0,20,3);
              popMatrix();
              fill(50);
              polygon([
                [-13,-50],
                [-8,-25],
                [0,-25]
              ]);
              polygon([
                [13,-50],
                [8,-25],
                [0,-25]
              ]);
              polygon([
                [-10,-50],
                [-20,-55],
                [-25,-40],
                [-20,-45],
                [-10,-40],
              ]);
              polygon([
                [10,-50],
                [20,-55],
                [25,-40],
                [20,-45],
                [10,-40],
              ]);
              rect(-5,-30,10,5);
              fill(100);
              polygon([
                [0,-50],
                [-10,-50],
                [-20,-55],
                [-25,-55],
                [-30,-45],
                [-25,-50],
                [-10,-45],
                [-5,-30],
                [0,-30]
              ]);
              polygon([
                [0,-50],
                [10,-50],
                [20,-55],
                [25,-55],
                [30,-45],
                [25,-50],
                [10,-45],
                [5,-30],
                [0,-30]
              ]);
              fill(200);
              polygon([
                [-12,-40],
                [-2,-40],
                [-6,-38],
                [-9,-36],
                [-7,-36],
                [-2,-36],
                [-9,-32]
              ]);
              polygon([
                [12,-40],
                [2,-40],
                [6,-38],
                [9,-36],
                [7,-36],
                [2,-36],
                [9,-32]
              ]);
              
              fill(50);
              rect(-8,-25,5,15);
              rect(3,-25,5,15);
              fill(100)
              ellipse(-6,-9,7,5);
              ellipse(6,-9,7,5);
              fill(50);
              polygon([
                [-8,-9],
                [-8,-5],
                [-10,(frameCount % 50)/10],
                [-3,(frameCount % 50)/10],
                [-3,-9]
              ]);
              polygon([
                [8,-9],
                [8,-5],
                [10,(frameCount % 25)/5],
                [3,(frameCount % 25)/5],
                [3,-9]
              ]);
              
              rect(-3,-25,6,8,2);
              fill(70);
              arc(0,-25,20,10,ang(-30),ang(210));
              fill(200,0,0);
              arc(0,-25,10,5,ang(-30),ang(210));
              
              fill(255,0,0);
              stroke(200,0,0);
              strokeWeight(2);
              line(-7,-43,7,-43);
              line(-7,-43,-10,-50);
              line(7,-43,10,-50);
              ellipse(0,-43,5,5);
              noStroke();
              fill(50);
              rect(-3,-53,6,3);
              fill(80)
              ellipse(0,-60,8,5);
              arc(0,-60,8,20,ang(0),ang(180));
              fill(255,0,0);
              ellipse(-2,-60,2,2);
              ellipse(2,-60,2,2);
              popMatrix();
          }
              }break;
              case 4:{
                {
              pushMatrix();
              translate(this.x+20,this.y+100);
              scale(1.5)
              
              noStroke();
              fill(80);
              rect(-23,-34,7,14);
              rect(23-7,-34,7,14);
              pushMatrix();
              translate(-10,-50);
              rotate(ang(110));
              rect(0,0,20,7);
              fill(60)
              rect(0,0,20,3);
              popMatrix();
              pushMatrix();
              translate(16,-30);
              rotate(ang(-110));
              fill(80)
              rect(0,0,20,7);
              fill(60)
              rect(0,0,20,3);
              popMatrix();
              fill(50);
              polygon([
                [-13,-50],
                [-8,-25],
                [0,-25]
              ]);
              polygon([
                [13,-50],
                [8,-25],
                [0,-25]
              ]);
              polygon([
                [-10,-50],
                [-20,-55],
                [-25,-40],
                [-20,-45],
                [-10,-40],
              ]);
              polygon([
                [10,-50],
                [20,-55],
                [25,-40],
                [20,-45],
                [10,-40],
              ]);
              rect(-5,-30,10,5);
              fill(100);
              polygon([
                [0,-50],
                [-10,-50],
                [-20,-55],
                [-25,-55],
                [-30,-45],
                [-25,-50],
                [-10,-45],
                [-5,-30],
                [0,-30]
              ]);
              polygon([
                [0,-50],
                [10,-50],
                [20,-55],
                [25,-55],
                [30,-45],
                [25,-50],
                [10,-45],
                [5,-30],
                [0,-30]
              ]);
              fill(200);
              polygon([
                [-12,-40],
                [-2,-40],
                [-6,-38],
                [-9,-36],
                [-7,-36],
                [-2,-36],
                [-9,-32]
              ]);
              polygon([
                [12,-40],
                [2,-40],
                [6,-38],
                [9,-36],
                [7,-36],
                [2,-36],
                [9,-32]
              ]);
              
              fill(50);
              rect(-8,-25,5,15);
              rect(3,-25,5,15);
              fill(100)
              ellipse(-6,-9,7,5);
              ellipse(6,-9,7,5);
              fill(50);
              polygon([
                [-8,-9],
                [-8,-5],
                [-10,(frameCount % 50)/10],
                [-3,(frameCount % 50)/10],
                [-3,-9]
              ]);
              polygon([
                [8,-9],
                [8,-5],
                [10,(frameCount % 25)/5],
                [3,(frameCount % 25)/5],
                [3,-9]
              ]);
              
              rect(-3,-25,6,8,2);
              fill(70);
              arc(0,-25,20,10,ang(-30),ang(210));
              fill(200,0,0);
              arc(0,-25,10,5,ang(-30),ang(210));
              
              fill(255,0,0);
              stroke(200,0,0);
              strokeWeight(2);
              line(-7,-43,7,-43);
              line(-7,-43,-10,-50);
              line(7,-43,10,-50);
              ellipse(0,-43,5,5);
              noStroke();
              fill(50);
              rect(-3,-53,6,3);
              fill(80)
              ellipse(0,-60,8,5);
              arc(0,-60,8,20,ang(0),ang(180));
              fill(255,0,0);
              ellipse(-2,-60,2,2);
              ellipse(2,-60,2,2);
              popMatrix();
          }  
              }break;
              case 5:{
                  pushMatrix();
            translate(this.x+15,this.y);
            scale(0.5);
            noStroke();
            rectMode(CENTER);
            fill(0);
            ellipse(0,10,12,12);
            pushMatrix();
            translate(0,7);
            rotate(45);
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
            rectMode(CORNER);
              }break;
          }
          noStroke();
          rectMode(CENTER);
          fill(0,255,0);
          rect(this.x+this.width/2,this.y-10,this.health,5);
          rectMode(CORNER);
      }
      
      
      function drawLevels(){
      if(pageX === 0&&pageY === 0){
      drawMap([
        "010101010101",
        "199999999990",
        "099999999961",
        "199999999930",
        "099999999951",
        "199999999955",
        "099999999955",
        "199999999950",
        "099999999921",
        "199999999990",
        "099999999971",
        "010104410101",
      ]);
      enemies = [];
      }
      if(pageX === 1&&pageY === 0){
      drawMap([
        "010101010101",
        "199999999990",
        "099999999991",
        "199999999990",
        "589999999995",
        "559999999955",
        "559999999955",
        "589999999995",
        "099999999991",
        "199999999990",
        "099999999991",
        "010104410101",
      ]);
      enemies = [new Enemy(500,300,0)];
      }
      if(pageX === 2&&pageY === 0){
          drawMap([
            "030303030303",
            "398998998993",
            "099999999990",
            "399899899893",
            "099999999990",
            "598998998995",
            "599999999995",
            "399899899893",
            "099999999990",
            "398998998993",
            "099999999990",
            "303034430303",
          ]);
          enemies = [new Enemy(300,600,2)];
      }
      if(pageX === 3&&pageY === 0){
          drawMap([
            "232323232323",
            "589999999982",
            "598999999893",
            "599889988992",
            "599899998993",
            "599996799992",
            "599997699993",
            "599899998992",
            "599889988993",
            "598999999892",
            "589999999983",
            "544444444442"
            
          ]);
          enemies = [new Enemy(300,0,0),new Enemy(0,300,0),new Enemy(600,300,0),new Enemy(300,600,0)];
      }
      if(pageX === 0&&pageY === 1){
          drawMap([
            "232324423232",
            "388889988883",
            "288999999882",
            "382323232383",
            "299992399992",
            "399993299993",
            "232392393232",
            "323263272323",
            "299999999992",
            "399999999995",
            "299999999995",
            "121212121212"
          ]);
          enemies = [new Enemy(50,550,0),new Enemy(550,550,0)];
      }
      if(pageX === 1&&pageY === 1){
          drawMap([
              "232324423232",
              "099999999991",
              "169999999960",
              "088889988881",
              "199999999990",
              "099999999995",
              "199999999995",
              "099999999991",
              "188889988880",
              "579999999971",
              "599999999990",
              "232324432323",
          ]);
          enemies = [new Enemy(600,600,1),new Enemy(0,600,1)];
      }
      if(pageX === 2&&pageY === 1){
          drawMap([
            "010104410101",
            "899999999998",
            "899999999998",
            "899999999998",
            "899999999998",
            "597999999695",
            "596999999795",
            "899999999998",
            "899999999998",
            "899999999998",
            "899999999998",
            "010104410101"
          ]);
          enemies = [new Enemy(300,300,4)];
      }
      if(pageX === 3&&pageY === 1){
          drawMap([
            "121214421212",
            "299989989991",
            "198989989892",
            "298999999891",
            "188888888892",
            "599999999891",
            "599998889892",
            "288898999891",
            "199988988892",
            "299988999991",
            "199989989892",
            "212124412121"
            
          ]);
          enemies = [new Enemy(0,300,3),new Enemy(600,300,3)];
      }
      if(pageX === 0&&pageY === 2){
          drawMap([
              "010104401010",
              "199989989991",
              "099988889990",
              "199999999991",
              "099999999880",
              "199999999895",
              "099999999895",
              "199999999881",
              "099999999990",
              "199988889991",
              "099989989990",
              "101014410101"
          ]);
          enemies = [new Enemy(300,600,5)];
      }
      if(pageX === 1&&pageY === 2){
          drawMap([
            "232324432323",
            "399989989992",
            "296989989793",
            "399989989992",
            "288889988883",
            "599999999995",
            "599999999995",
            "388889988882",
            "299989989993",
            "397989989692",
            "299989989993",
            "323234423232"
          ]);
      }
      if(pageX === 2&&pageY === 2){
          drawMap([
            "010104410101",
            "199919999090",
            "097909999191",
            "199910199990",
            "099991999101",
            "599990991095",
            "599191999195",
            "099090199091",
            "199191999190",
            "099099999991",
            "196199999990",
            "101014401010"
          ]);
          enemies = [];
      }
      if(pageX === 3&&pageY === 2){
          drawMap([
            "232324432323",
            "199989989990",
            "099989989991",
            "199989989990",
            "088889989990",
            "599999989991",
            "599999989991",
            "188889989990",
            "099989989991",
            "199989989990",
            "099989989991",
            "323234423232",
              
          ]);
          enemies = [new Enemy(0,0,1),new Enemy(600,0,1),new Enemy(0,600,1),new Enemy(600,600,1)]
      }
      if(pageX === 0&&pageY === 3){
          drawMap([
            "388888888888",
            "399999999998",
            "399999399998",
            "399993399998",
            "399999399998",
            "399999399998",
            "399999399998",
            "399999399998",
            "399999399998",
            "399993339998",
            "399999999998",
            "333333333333",
          ]);
          enemies = [new Enemy(0,0,1),new Enemy(600,0,1),new Enemy(0,600,1),new Enemy(600,600,1)]
      }
      if(pageX === 1&&pageY === 3){
          drawMap([
            "888888888888",
            "899999999998",
            "893333333998",
            "899999993998",
            "899999993998",
            "899999993998",
            "893333333998",
            "893999999998",
            "893999999998",
            "893333333998",
            "899999999998",
            "333333333333",
          ]);
          enemies = [new Enemy(0,0,2),new Enemy(600,0,2),new Enemy(0,600,2),new Enemy(600,600,2)]
      }
      if(pageX === 2&&pageY === 3){
          drawMap([
            "888888888888",
            "899999999998",
            "893333333998",
            "899999993998",
            "899999993998",
            "893333333998",
            "899999993998",
            "899999993998",
            "899999993998",
            "893333333998",
            "899999999998",
            "333333333333",
          ]);
          enemies = [new Enemy(0,0,3),new Enemy(600,0,4),new Enemy(0,600,3),new Enemy(600,600,4)]
      }
      if(pageX === 3&&pageY === 3){
          drawMap([
            "888888888883",
            "899999999993",
            "893999993993",
            "893999993993",
            "893999993993",
            "893333333993",
            "899999993993",
            "899999993993",
            "899999993993",
            "899999993993",
            "899999999993",
            "333333333333",
          ]);
          enemies = [new Enemy(0,0,5),new Enemy(600,0,5),new Enemy(0,600,5),new Enemy(600,600,5)]
      }
      };
      drawLevels();


      draw = function(){
          
          if(scene === "game"){
          background(150);
          
          
          if(player.x <= 0){
              pageX-=1;
              drawLevels();
              player.x = 600-52-player.width;
          }
          if(player.y <= 0){
              pageY-=1;
              drawLevels();
              player.y = 600-52-player.height;
          }
          if(player.y >= 600){
              pageY+=1;
              drawLevels();
              player.y = 50;
          }
          if(player.x >= 600){
              pageX+=1;
              drawLevels();
              player.x = 50;
          }
          
          
          
          for(var i = 0; i < blocks.length; i++){
          blocks[i].draw();
          }
          
          for(var i = 0; i < enemies.length; i++){
              if(enemies[i].health > 0){
          enemies[i].draw();
          enemies[i].move();
          enemies[i].attack();
              }if(enemies[i].health <= 0&&enemies[i].health > -100){
                 player.money+=enemies[i].reward;
                 player.kills++;
                  enemies[i].health = -200;
              }
          }
          
          
          player.draw();
          player.allowMove();
          player.collide();
          player.allowAttack();
          if(blockCollidedIn[0]&&blockCollidedIn[1] === 6){
              if(player.energy < 100){
              player.energy+=0.10;
              }else{
                  player.health-=0.05;
              }
          }
          
          if(blockCollidedIn[0]&&blockCollidedIn[1] === 7){
              if(player.health < 100){
              player.health+=0.10;
              }else{
                  player.energy-=0.05;
              }
          }
          if(blockCollidedIn[0]&&blockCollidedIn[1] === 8){
              
              player.health-=0.5;
              
          }
          if(player.health <= 0){
              scene = "lose"
          }
          
          
          
          
          
          }
          if(scene === "lose"){
              background(255,0,0);
              textSize(30);
              fill(0);
              text("You Lose\nYour Final Score: "+player.kills*player.money,300,300);
              
          }
          
      }
      keyPressed = function(){
          keys[keyCode] = true;
          
      }
      keyReleased = function(){
          keys[keyCode] = false;
      }
    }
  };

  // Get the canvas that ProcessingJS will use
  var getCanvas = document.getElementById("mycanvas"); 
  // Pass the function to ProcessingJS constructor
  var processingInstance = new Processing(getCanvas, runProgram);
