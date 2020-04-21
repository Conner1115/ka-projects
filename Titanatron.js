
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
      let keys = [];
      let blocks = [];
      var particles = [];
      var levelMaps = [
        [
            
            "010103210101",
            "444444444444",
            
        ],
        [
        
        ],
        [
        
        ],
        [
        
        ],
      ];
      let blockCollidedIn = [false,false];
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
          this.y+=this.ySpeed;
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
          for(var i = 0; i < 50; i++){
              fill(i*2+70);
              rect(0,i,50,1);
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
          for(var i = 0; i < 50; i++){
              fill(i*2+70);
              rect(0,i,50,1);
          }
          stroke(0,200,200);
          line(0,25,50,25);
          line(25,0,25,50);
          noStroke();
          for(var i = 0; i <= 31; i++){
              fill(i*5)
              rect(i+9,15,1,15);
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
          for(var i = 0; i < 50; i++){
              fill(i*2+70);
              rect(0,i,50,1);
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
      let hotBlock = function(x,y){
          noStroke();
          for(var i = 0; i < 50; i++){
              fill(i*2+100,i+floorFlare,0);
              rect(0,i,50,1);
          }
          floorFlare+=0.1;
          if(floorFlare > 50){
              floorFlare = 0;
          }
          if(frameCount % 3 === 0){
          particles.push(new Particle(random(0,50),random(0,50),0));
          
          }
          for(var i = 0; i < particles.length; i++){
              particles[i].draw();
              if(particles[i].dead){
                  particles.splice(0,1);
              }
          }
      }
      let normalFloor = function(x,y){
          noStroke();
          for(var i = 0; i < 50; i++){
              fill(i*2+70);
              rect(0,i,50,1);
          }
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
                  translate(this.x,this.y);
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
      let drawMap = function(){
          for(var i = 0; i < levelMaps.length; i++){
              for(var j = 0; j < levelMaps[i].length; j++){
                  var z = levelMaps[i][j][0];
                  for(var q = 0; q < 600/50; q++){
                    var b = levelMaps[i][j][q];
                    //this is not local storage.  parseFloat() is.
            //parseInt gets rid of the quatation marks around the number
                    blocks.push(new Block(q*50,j*50,parseInt(b)));
                  }
            
                  
              }
          }
      }
      let Player = function(x,y){
          this.pulsing = false;
          this.pulseWidth = 0;
          this.x = x;
          this.y = y;
          this.speed = 3;
          this.facing = 0;
          this.width = 40;
          this.height = 60;
          this.energy = 100;
          this.health = 100;
          this.maxHealth = 100;
          this.damage = 0;
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
              
          }else{
              blockCollidedIn = [false,false];
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
                  noFill();
                  strokeWeight(3);
                  stroke(0,255,255)
                  ellipse(this.x+20,this.y+30,this.pulseWidth,this.pulseWidth);
                  noStroke();
                  this.pulsing = true;
              }else{
                  this.pulseWidth = 0;
              }
              if(this.pulsing){
                  this.pulseWidth+=5;
                  if(this.pulseWidth >200){
                      this.pulseWidth = 0;
                      
                  }
              }
          
      };
      var player = new Player(300,100);
      blocks.push(new Block(100,100,0),new Block(150,100,1),new Block(100,150,2),new Block(150,150,3),new Block(200,150,4),new Block(150,250,9))
      draw = function(){
          
          if(scene === "game"){
          background(150);
          for(var i = 0; i < blocks.length; i++){
          blocks[i].draw();
          }
          drawMap();
          player.draw();
          player.allowMove();
          player.collide();
          player.allowAttack();
          if(blockCollidedIn[0]&&blockCollidedIn[1] === 6){
              if(player.energy < 100){
              player.energy+=0.05;
              }else{
                  player.health-=0.05;
              }
          }
          if(blockCollidedIn[0]&&blockCollidedIn[1] === 7){
              if(player.health < 100){
              player.health+=0.05;
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
              textSize(50);
              text("You Lose",300,300)
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
