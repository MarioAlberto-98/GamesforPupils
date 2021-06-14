
var game = new Phaser.Game(775, 570, Phaser.AUTO.CANVAS, 'phaser-example', { preload: preload, create: create });



WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Fontdiner Swanky']
    }

};





function preload() {
    game.load.image('background','assets/images/fondo1.png');
    game.load.image('background2','assets/images/fondo2.png');
    game.load.image('inicio','assets/images/inicio.png');
   


    
    game.load.image('ovni1','assets/images/a1.png');
    game.load.image('ovni2','assets/images/madera.png');
    game.load.image('ovni3','assets/images/a1.png');
    

    game.load.image('asteroide','assets/images/a2.png');
    game.load.image('asteroide2','assets/images/a2.png');



    game.load.image('an1','assets/images/a1.png');
    game.load.image('an2','assets/images/a2.png');
    game.load.image('an3','assets/images/a3.png');
    game.load.image('an4','assets/images/a4.png');
    game.load.image('an5','assets/images/a5.png');
    game.load.image('an6','assets/images/a6.png');
    game.load.image('an7','assets/images/a7.png');
    game.load.image('an8','assets/images/a8.png');
    game.load.image('mbn1','assets/images/mbn1.png');

    game.load.atlas('button','assets/images/uat1a30.png','assets/images/uat1a30.json');



 //  Load the Google WebFont Loader script
 game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');


}




function create() {
  game.scale.pageAlignHorizontally = 100;
  game.scale.pageAlignVertically = 100;
  game.scale.refresh();
  inicio();
 
}





var text = null;
var grd;
var text2 = null;
var grd;











function out() {
text2.fill = grd;
}

function over() {
text2.fill = '#0757ED';
}
var text2;





var iniciojuego;
var tratar;







function inicio(){





inicio = game.add.tileSprite(0, 0, 776, 570, 'inicio');








jugar=game.add.button(game.world.centerX - 100, 350, 'button',n1, this, 'jb2','jb1','jb2');











ovni=game.add.group();
asteroide=game.add.group();

ovni.enableBody=true;
asteroide.enableBody=true;

ovni.physicsBodyType=Phaser.Physics.ARCADE;
asteroide.physicsBodyType=Phaser.Physics.ARCADE;

for(var i=0;i<70;i++){

var ovni=ovni.create(100+ i*17,1,'ovni1');
var asteroide=asteroide.create(1003+ i*50,67,'asteroide');
ovni.body.collideWorldBounds=true;
asteroide.body.collideWorldBounds=true;
ovni.body.gravity.x=game.rnd.integerInRange(-100,100);
asteroide.body.gravity.x=game.rnd.integerInRange(-100,100);
ovni.body.gravity.y=100+Math.random()* 189;
asteroide.body.gravity.y=100+Math.random()* 1000;
ovni.body.bounce.setTo(0.9);
asteroide.body.bounce.setTo(0.9);

}




jb1.onInputOver.add(jb1,this);
jb2.onInputOut.add(jb2,this);




}


function n1(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -130, 32, 'button',e1, this, 's1','p1','s1');
  uno=game.add.button(game.world.centerX - -10, 120, 'button',e1, this, 's3','p3','s3');
  dos=game.add.button(game.world.centerX -  -130, 182, 'button',n2, this, 's2','p2','s2');
  


  text = game.add.text(game.world.centerX- 150, 170, "  2\n-     \n  0\n _______");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 37;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FF8F00');   
  grd.addColorStop(1, '#FF8F00');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#FFD500';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(110, 70, "\n Nivel 1 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(50, 330, 'an1');
  images = game.add.image(180, 400, 'an3');
  images = game.add.image(300, 470, 'an3');


 

}




function e1(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 250, 102, 'button',n1, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -50, 102, 'button',n1, this, 'ij4','ij3','ij4');





  text = game.add.text(game.world.centerX,-80, 100, "");
  text.anchor.setTo(0.5);
  
  text.font = 'Showcard Gothic';
  text.fontSize = 20;
  
  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);
  
  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FFB600');   
  grd.addColorStop(1, '#FFB608');
  text.fill = grd;
  
  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
  
  text.inputEnabled = true;
  text.input.enableDrag();
  
  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);
  
   text2 = game.add.text(650, 55, " Nivel 1/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');



    
  
  

}



function n2(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');

//3
  
  cero=game.add.button(game.world.centerX - -130, 32, 'button',e2, this, 's1','p1','s1');
  uno=game.add.button(game.world.centerX - -10, 120, 'button',n3, this, 's3','p3','s3');
  dos=game.add.button(game.world.centerX -  -130, 182, 'button',e2, this, 's2','p2','s2');
  

  text = game.add.text(game.world.centerX- 150, 170, "  4\n-     \n  1\n _______");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 37;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FF8F00');   
  grd.addColorStop(1, '#FF8F00');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#FFD500';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(110, 70, "\n Nivel 2 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(80, 310, 'an1');
  images = game.add.image(100, 400, 'an2');
  images = game.add.image(500, 470, 'an3');


  
  


}




function e2(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 250, 102, 'button',n2, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -50, 102, 'button',n1, this, 'ij4','ij3','ij4');





  text = game.add.text(game.world.centerX,-80, 100, "");
  text.anchor.setTo(0.5);
  
  text.font = 'Showcard Gothic';
  text.fontSize = 20;
  
  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);
  
  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FFB600');   
  grd.addColorStop(1, '#FFB608');
  text.fill = grd;
  
  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
  
  text.inputEnabled = true;
  text.input.enableDrag();
  
  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);
  
   text2 = game.add.text(650, 55, " Nivel 2/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');






    
  
  

}




function n3(){
//4
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -130, 32, 'button',n4, this, 's4','p4','s4');
  uno=game.add.button(game.world.centerX - -10, 120, 'button',e3, this, 's3','p3','s3');
  dos=game.add.button(game.world.centerX -  -130, 182, 'button',e3, this, 's5','p5','s5');
  


  text = game.add.text(game.world.centerX- 150, 170, "  6\n-     \n  2\n _______");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 37;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FF8F00');   
  grd.addColorStop(1, '#FF8F00');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#FFD500';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(110, 70, "\n Nivel 3 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(90, 310, 'an1');
  images = game.add.image(200, 420, 'an3');
  images = game.add.image(400, 470, 'an3');


  


}




function e3(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');

  cero=game.add.button(game.world.centerX - 250, 102, 'button',n3, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -50, 102, 'button',n1, this, 'ij4','ij3','ij4');





  text = game.add.text(game.world.centerX,-80, 100, "");
  text.anchor.setTo(0.5);
  
  text.font = 'Showcard Gothic';
  text.fontSize = 20;
  
  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);
  
  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FFB600');   
  grd.addColorStop(1, '#FFB608');
  text.fill = grd;
  
  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
  
  text.inputEnabled = true;
  text.input.enableDrag();
  
  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);
  
   text2 = game.add.text(650, 55, " Nivel 3/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');



  
  

}




function n4(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');
//5

  cero=game.add.button(game.world.centerX - -130, 32, 'button',n5, this, 's5','p5','s5');
  uno=game.add.button(game.world.centerX - -10, 120, 'button',e4, this, 's4','p4','s4');
  dos=game.add.button(game.world.centerX -  -130, 182, 'button',e4, this, 's6','p6','s6');
  


  text = game.add.text(game.world.centerX- 150, 170, "  8\n-     \n  3\n _______");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 37;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FF8F00');   
  grd.addColorStop(1, '#FF8F00');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#FFD500';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(110, 70, "\n Nivel 4 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(120, 310, 'an1');
  images = game.add.image(100, 400, 'an2');
  images = game.add.image(500, 470, 'an3');


 

}




function e4(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 250, 102, 'button',n4, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -50, 102, 'button',n1, this, 'ij4','ij3','ij4');





  text = game.add.text(game.world.centerX,-80, 100, "");
  text.anchor.setTo(0.5);
  
  text.font = 'Showcard Gothic';
  text.fontSize = 20;
  
  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);
  
  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FFB600');   
  grd.addColorStop(1, '#FFB608');
  text.fill = grd;
  
  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
  
  text.inputEnabled = true;
  text.input.enableDrag();
  
  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);
  
   text2 = game.add.text(650, 55, " Nivel 4/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');




  

}




function n5(){
//6
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


 
  cero=game.add.button(game.world.centerX - -130, 32, 'button',e5, this, 's8','p8','s8');
  uno=game.add.button(game.world.centerX - -10, 120, 'button',n6, this, 's6','p6','s6');
  dos=game.add.button(game.world.centerX -  -130, 182, 'button',e5, this, 's7','p7','s7');
  


  text = game.add.text(game.world.centerX- 150, 170, "  7\n-     \n  1\n _______");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 37;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FF8F00');   
  grd.addColorStop(1, '#FF8F00');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#FFD500';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(110, 70, "\n Nivel 5 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(150, 310, 'an1');
  images = game.add.image(300, 400, 'an3');
  images = game.add.image(100, 470, 'an3');

  
  


}




function e5(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 250, 102, 'button',n5, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -50, 102, 'button',n1, this, 'ij4','ij3','ij4');





  text = game.add.text(game.world.centerX,-80, 100, "");
  text.anchor.setTo(0.5);
  
  text.font = 'Showcard Gothic';
  text.fontSize = 20;
  
  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);
  
  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FFB600');   
  grd.addColorStop(1, '#FFB608');
  text.fill = grd;
  
  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
  
  text.inputEnabled = true;
  text.input.enableDrag();
  
  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);
  
   text2 = game.add.text(650, 55, " Nivel 5/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');




  

}




function n6(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');

//7
  
  cero=game.add.button(game.world.centerX - -130, 32, 'button',e6, this, 's6','p6','s6');
  uno=game.add.button(game.world.centerX - -10, 120, 'button',e6, this, 's5','p5','s5');
  dos=game.add.button(game.world.centerX -  -130, 182, 'button',n7, this, 's7','p7','s7');
  

  text = game.add.text(game.world.centerX- 150, 170, "  7\n-     \n  0\n _______");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 37;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FF8F00');   
  grd.addColorStop(1, '#FF8F00');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#FFD500';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(110, 70, "\n Nivel 6 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(180, 310, 'an1');
  images = game.add.image(500, 390, 'an2');
  images = game.add.image(400, 470, 'an3');

  
  
  


}




function e6(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 250, 102, 'button',n6, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -50, 102, 'button',n1, this, 'ij4','ij3','ij4');





  text = game.add.text(game.world.centerX,-80, 100, "");
  text.anchor.setTo(0.5);
  
  text.font = 'Showcard Gothic';
  text.fontSize = 20;
  
  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);
  
  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FFB600');   
  grd.addColorStop(1, '#FFB608');
  text.fill = grd;
  
  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
  
  text.inputEnabled = true;
  text.input.enableDrag();
  
  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);
  
   text2 = game.add.text(650, 55, " Nivel 6/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');






    
  
  

}





function n7(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');

//7
 
  cero=game.add.button(game.world.centerX - -130, 32, 'button',e7, this, 's6','p6','s6');
  uno=game.add.button(game.world.centerX - -10, 120, 'button',n8, this, 's7','p7','s7');
  dos=game.add.button(game.world.centerX -  -130, 182, 'button',e7, this, 's8','p8','s8');
  


  text = game.add.text(game.world.centerX- 150, 170, "  10\n-     \n  3\n _______");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 37;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FF8F00');   
  grd.addColorStop(1, '#FF8F00');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#FFD500';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(110, 70, "\n Nivel 7 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(210, 310, 'an1');
  images = game.add.image(400, 430, 'an3');
  images = game.add.image(200, 470, 'an3');

 
  
  


}




function e7(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 250, 102, 'button',n7, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -50, 102, 'button',n1, this, 'ij4','ij3','ij4');





  text = game.add.text(game.world.centerX,-80, 100, "");
  text.anchor.setTo(0.5);
  
  text.font = 'Showcard Gothic';
  text.fontSize = 20;
  
  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);
  
  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FFB600');   
  grd.addColorStop(1, '#FFB608');
  text.fill = grd;
  
  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
  
  text.inputEnabled = true;
  text.input.enableDrag();
  
  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);
  
   text2 = game.add.text(650, 55, " Nivel 7/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');




  
  

}







function n8(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');
//9

  
  cero=game.add.button(game.world.centerX - -130, 32, 'button',n9, this, 's9','p9','s9');
  uno=game.add.button(game.world.centerX - -10, 120, 'button',e8, this, 's10','p10','s10');
  dos=game.add.button(game.world.centerX -  -130, 182, 'button',e8, this, 's8','p8','s8');
  

  text = game.add.text(game.world.centerX- 150, 170, "  12\n-     \n   3\n _______");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 37;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FF8F00');   
  grd.addColorStop(1, '#FF8F00');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#FFD500';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(110, 70, "\n Nivel 8 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(240, 310, 'an1');
  images = game.add.image(500, 400, 'an2');
  images = game.add.image(200, 460, 'an3');



  


}




function e8(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 250, 102, 'button',n8, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -50, 102, 'button',n1, this, 'ij4','ij3','ij4');





  text = game.add.text(game.world.centerX,-80, 100, "");
  text.anchor.setTo(0.5);
  
  text.font = 'Showcard Gothic';
  text.fontSize = 20;
  
  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);
  
  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FFB600');   
  grd.addColorStop(1, '#FFB608');
  text.fill = grd;
  
  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
  
  text.inputEnabled = true;
  text.input.enableDrag();
  
  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);
  
   text2 = game.add.text(650, 55, " Nivel 8/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');






  

}




function n9(){
//10
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  
  cero=game.add.button(game.world.centerX - -130, 32, 'button',e9, this, 's11','p11','s11');
  uno=game.add.button(game.world.centerX - -10, 120, 'button',e9, this, 's12','p12','s12');
  dos=game.add.button(game.world.centerX -  -130, 182, 'button',n10, this, 's10','p10','s10');
  

  text = game.add.text(game.world.centerX- 150, 170, "  15\n-     \n   5\n _______");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 37;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FF8F00');   
  grd.addColorStop(1, '#FF8F00');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#FFD500';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(110, 70, "\n Nivel 9 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(270, 310, 'an1');
  
  images = game.add.image(240, 410, 'an3');
  images = game.add.image(600, 460, 'an3');




}




function e9(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


 
  cero=game.add.button(game.world.centerX - 250, 102, 'button',n9, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -50, 102, 'button',n1, this, 'ij4','ij3','ij4');





  text = game.add.text(game.world.centerX,-80, 100, "");
  text.anchor.setTo(0.5);
  
  text.font = 'Showcard Gothic';
  text.fontSize = 20;
  
  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);
  
  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FFB600');   
  grd.addColorStop(1, '#FFB608');
  text.fill = grd;
  
  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
  
  text.inputEnabled = true;
  text.input.enableDrag();
  
  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);
  
   text2 = game.add.text(650, 55, " Nivel 9/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');


    
  
  

}




function n10(){
//10
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');



  cero=game.add.button(game.world.centerX - -130, 32, 'button',n11, this, 's10','p10','s10');
  uno=game.add.button(game.world.centerX - -10, 120, 'button',e10, this, 's11','p11','s11');
  dos=game.add.button(game.world.centerX -  -130, 182, 'button',e10, this, 's12','p12','s12');
  

  text = game.add.text(game.world.centerX- 150, 170, "  13\n-     \n   3\n _______");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 37;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FF8F00');   
  grd.addColorStop(1, '#FF8F00');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#FFD500';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(110, 70, "\n Nivel 10 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(300, 310, 'an1');
  images = game.add.image(150, 400, 'an2');
  images = game.add.image(400, 450, 'an3');


  


}




function e10(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 250, 102, 'button',n10, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -50, 102, 'button',n1, this, 'ij4','ij3','ij4');





  text = game.add.text(game.world.centerX,-80, 100, "");
  text.anchor.setTo(0.5);
  
  text.font = 'Showcard Gothic';
  text.fontSize = 20;
  
  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);
  
  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FFB600');   
  grd.addColorStop(1, '#FFB608');
  text.fill = grd;
  
  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
  
  text.inputEnabled = true;
  text.input.enableDrag();
  
  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);
  
   text2 = game.add.text(650, 55, " Nivel 10/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');





    
  
  

}




function n11(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');
//12

 
  cero=game.add.button(game.world.centerX - -130, 32, 'button',n12, this, 's12','p12','s12');
  uno=game.add.button(game.world.centerX - -10, 120, 'button',e11, this, 's13','p13','s13');
  dos=game.add.button(game.world.centerX -  -130, 182, 'button',e11, this, 's11','p11','s11');
  


  text = game.add.text(game.world.centerX- 150, 170, "  15\n-     \n   3\n _______");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 37;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FF8F00');   
  grd.addColorStop(1, '#FF8F00');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#FFD500';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(110, 70, "\n Nivel 11 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(350, 310, 'an1');
  images = game.add.image(300, 420, 'an3');
  images = game.add.image(600, 460, 'an3');


  


}




function e11(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 250, 102, 'button',n11, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -50, 102, 'button',n1, this, 'ij4','ij3','ij4');





  text = game.add.text(game.world.centerX,-80, 100, "");
  text.anchor.setTo(0.5);
  
  text.font = 'Showcard Gothic';
  text.fontSize = 20;
  
  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);
  
  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FFB600');   
  grd.addColorStop(1, '#FFB608');
  text.fill = grd;
  
  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
  
  text.inputEnabled = true;
  text.input.enableDrag();
  
  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);
  
   text2 = game.add.text(650, 55, " Nivel 11/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');


}




function n12(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');
//12

  
  cero=game.add.button(game.world.centerX - -130, 32, 'button',e12, this, 's11','p11','s11');
  uno=game.add.button(game.world.centerX - -10, 120, 'button',n13, this, 's12','p12','s12');
  dos=game.add.button(game.world.centerX -  -130, 182, 'button',e12, this, 's13','p14','s14');
  


  text = game.add.text(game.world.centerX- 150, 170, "  12\n-     \n   0\n _______");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 37;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FF8F00');   
  grd.addColorStop(1, '#FF8F00');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#FFD500';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(110, 70, "\n Nivel 12 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(380, 310, 'an1');
  images = game.add.image(300, 400, 'an2');
  images = game.add.image(100, 460, 'an3');




}




function e12(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


 
  cero=game.add.button(game.world.centerX - 250, 102, 'button',n12, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -50, 102, 'button',n1, this, 'ij4','ij3','ij4');





  text = game.add.text(game.world.centerX,-80, 100, "");
  text.anchor.setTo(0.5);
  
  text.font = 'Showcard Gothic';
  text.fontSize = 20;
  
  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);
  
  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FFB600');   
  grd.addColorStop(1, '#FFB608');
  text.fill = grd;
  
  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
  
  text.inputEnabled = true;
  text.input.enableDrag();
  
  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);
  
   text2 = game.add.text(650, 55, " Nivel 12/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');




  

}





function n13(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');
//14


  cero=game.add.button(game.world.centerX - -130, 32, 'button',e13, this, 's15','p15','s15');
  uno=game.add.button(game.world.centerX - -10, 120, 'button',e13, this, 's13','p13','s13');
  dos=game.add.button(game.world.centerX -  -130, 182, 'button',n14, this, 's14','p14','s14');
  


  text = game.add.text(game.world.centerX- 150, 170, "  15\n-     \n   1\n _______");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 37;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FF8F00');   
  grd.addColorStop(1, '#FF8F00');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#FFD500';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(110, 70, "\n Nivel 13 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(440, 310, 'an1');
  images = game.add.image(200, 400, 'an2');
  images = game.add.image(534, 460, 'an3');
  



}




function e13(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 250, 102, 'button',n13, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -50, 102, 'button',n1, this, 'ij4','ij3','ij4');





  text = game.add.text(game.world.centerX,-80, 100, "");
  text.anchor.setTo(0.5);
  
  text.font = 'Showcard Gothic';
  text.fontSize = 20;
  
  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);
  
  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FFB600');   
  grd.addColorStop(1, '#FFB608');
  text.fill = grd;
  
  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
  
  text.inputEnabled = true;
  text.input.enableDrag();
  
  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);
  
   text2 = game.add.text(650, 55, " Nivel 13/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');



    
  
  

}







function n14(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');

//14
  
  cero=game.add.button(game.world.centerX - -130, 32, 'button',n15, this, 's14','p14','s14');
  uno=game.add.button(game.world.centerX - -10, 120, 'button',e14, this, 's15','p15','s15');
  dos=game.add.button(game.world.centerX -  -130, 182, 'button',e14, this, 's16','p16','s16');
  

  text = game.add.text(game.world.centerX- 150, 170, "   16\n-     \n   2\n _______");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 37;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FF8F00');   
  grd.addColorStop(1, '#FF8F00');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#FFD500';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(110, 70, "\n Nivel 14 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(550, 310, 'an1');
  images = game.add.image(300, 430, 'an2');
  images = game.add.image(600, 460, 'an3');

  
  


}




function e14(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 250, 102, 'button',n14, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -50, 102, 'button',n1, this, 'ij4','ij3','ij4');





  text = game.add.text(game.world.centerX,-80, 100, "");
  text.anchor.setTo(0.5);
  
  text.font = 'Showcard Gothic';
  text.fontSize = 20;
  
  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);
  
  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FFB600');   
  grd.addColorStop(1, '#FFB608');
  text.fill = grd;
  
  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
  
  text.inputEnabled = true;
  text.input.enableDrag();
  
  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);
  
   text2 = game.add.text(650, 55, " Nivel 14/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');


  
  

}






function n15(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');

//15

  cero=game.add.button(game.world.centerX - -130, 32, 'button',e15, this, 's14','p14','s14');
  uno=game.add.button(game.world.centerX - -10, 120, 'button',g, this, 's15','p15','s15');
  dos=game.add.button(game.world.centerX -  -130, 182, 'button',e15, this, 's16','p16','s16');
  

  text = game.add.text(game.world.centerX- 150, 170, "  18\n-     \n   3\n _______");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 37;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FF8F00');   
  grd.addColorStop(1, '#FF8F00');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#FFD500';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(110, 70, "\n Nivel 15 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(620, 310, 'an1');
  images = game.add.image(200, 400, 'an3');
  images = game.add.image(500, 460, 'an3');

 
}




function e15(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 250, 102, 'button',n15, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -50, 102, 'button',n1, this, 'ij4','ij3','ij4');





  text = game.add.text(game.world.centerX,-80, 100, "");
  text.anchor.setTo(0.5);
  
  text.font = 'Showcard Gothic';
  text.fontSize = 20;
  
  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);
  
  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FFB600');   
  grd.addColorStop(1, '#FFB608');
  text.fill = grd;
  
  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
  
  text.inputEnabled = true;
  text.input.enableDrag();
  
  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);
  
   text2 = game.add.text(650, 55, " Nivel 1/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');




}







function g(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


 
 



  uno=game.add.button(game.world.centerX - 100, 320, 'button',n1, this, 'ij4','ij3','ij4');





  text = game.add.text(game.world.centerX,-80, 100, "");
  text.anchor.setTo(0.5);
  
  text.font = 'Showcard Gothic';
  text.fontSize = 20;
  
  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);
  
  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#FFB600');   
  grd.addColorStop(1, '#FFB608');
  text.fill = grd;
  
  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 2;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
  
  text.inputEnabled = true;
  text.input.enableDrag();
  
  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);
  
   text2 = game.add.text(650, 55, "");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  


    image = game.add.image(100, 420, 'an1');
    image = game.add.image(106, 30, 'mbn1');
    images = game.add.image(480, 450, 'an3');



    
}
