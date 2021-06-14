
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
    game.load.image('ovni2','assets/images/a2.png');
    game.load.image('ovni3','assets/images/a3.png');
    




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
var asteroide=asteroide.create(1003+ i*50,67,'ovni2');
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

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');


  cero=game.add.button(game.world.centerX - -100, 380, 'button',n2, this, 's1','p1','s1');
  uno=game.add.button(game.world.centerX - 70, 380, 'button',e1, this, 's3','p3','s3');
  dos=game.add.button(game.world.centerX -  250, 380, 'button',e1, this, 's2','p2','s2');
  


  text = game.add.text(game.world.centerX- 0, 200, "1  x  1");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 60;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#279EF7');   
  grd.addColorStop(1, '#279EF7');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 3;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(130, 115, "\n  \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;




}




function e1(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');


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
  
   text2 = game.add.text(650, 55, " Nivel 1/10");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');



    
  
  

}



function n2(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');


  cero=game.add.button(game.world.centerX - -100, 380, 'button',e2, this, 's1','p1','s1');
  uno=game.add.button(game.world.centerX - 70, 380, 'button',n3, this, 's3','p3','s3');
  dos=game.add.button(game.world.centerX -  250, 380, 'button',e2, this, 's2','p2','s2');
  


  text = game.add.text(game.world.centerX- 0, 200, "1  x  3");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 60;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#279EF7');   
  grd.addColorStop(1, '#279EF7');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 3;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);

  text2 = game.add.text(130, 115, "\n  \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;

  
  


}




function e2(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');


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
  
   text2 = game.add.text(650, 55, " Nivel 2/10");
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
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');


  cero=game.add.button(game.world.centerX - -100, 380, 'button',e3, this, 's2','p2','s2');
  uno=game.add.button(game.world.centerX - 70, 380, 'button',e3, this, 's3','p3','s3');
  dos=game.add.button(game.world.centerX -  250, 380, 'button',n4, this, 's4','p4','s4');
  


  text = game.add.text(game.world.centerX- 0, 200, "1  x  4");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 60;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#279EF7');   
  grd.addColorStop(1, '#279EF7');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 3;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(130, 115, "\n  \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;
  


}




function e3(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');

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
  
   text2 = game.add.text(650, 55, " Nivel 3/10");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');



  
  

}




function n4(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');
//5

cero=game.add.button(game.world.centerX - -100, 380, 'button',n5, this, 's2','p2','s2');
uno=game.add.button(game.world.centerX - 70, 380, 'button',e4, this, 's4','p4','s4');
dos=game.add.button(game.world.centerX -  250, 380, 'button',e4, this, 's5','p5','s5');



text = game.add.text(game.world.centerX- 0, 200, "1  x  2");
text.anchor.setTo(0.5);

text.font = 'Showcard Gothic';
text.fontSize = 60;

//  If we don't set the padding the font gets cut off
//  Comment out the line below to see the effect
text.padding.set(10, 16);

grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
grd.addColorStop(0, '#279EF7');   
grd.addColorStop(1, '#279EF7');

text.fill = grd;

text.align = 'center';
text.stroke = '#000000';
text.strokeThickness = 3;
text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

text.inputEnabled = true;
text.input.enableDrag();

text.events.onInputOver.add(over, this);
text.events.onInputOut.add(out, this);


text2 = game.add.text(130, 115, "\n  \n \n Resuelve:");
text2.anchor.setTo(0.5);

text2.font = 'Showcard Gothic';
text2.fontSize = 20;

 

}




function e4(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');


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
  
   text2 = game.add.text(650, 55, " Nivel 4/10");
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
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');

  cero=game.add.button(game.world.centerX - -100, 380, 'button',e5, this, 's4','p4','s4');
  uno=game.add.button(game.world.centerX - 70, 380, 'button',n6, this, 's6','p6','s6');
  dos=game.add.button(game.world.centerX -  250, 380, 'button',e5, this, 's5','p5','s5');
  


  text = game.add.text(game.world.centerX- 0, 200, "1  x  6");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 60;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#279EF7');   
  grd.addColorStop(1, '#279EF7');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 3;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(130, 115, "\n  \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;
  


}




function e5(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');


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
  
   text2 = game.add.text(650, 55, " Nivel 5/10");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');




  

}




function n6(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');

//7
  cero=game.add.button(game.world.centerX - -100, 380, 'button',e6, this, 's6','p6','s6');
  uno=game.add.button(game.world.centerX - 70, 380, 'button',e6, this, 's7','p7','s7');
  dos=game.add.button(game.world.centerX -  250, 380, 'button',n7, this, 's5','p5','s5');
  


  text = game.add.text(game.world.centerX- 0, 200, "1  x  5");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 60;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#279EF7');   
  grd.addColorStop(1, '#279EF7');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 3;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(130, 115, "\n  \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;
  


}




function e6(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');


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
  
   text2 = game.add.text(650, 55, " Nivel 6/10");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');






    
  
  

}





function n7(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');

//7
  cero=game.add.button(game.world.centerX - -100, 380, 'button',e7, this, 's9','p9','s9');
  uno=game.add.button(game.world.centerX - 70, 380, 'button',n8, this, 's8','p8','s8');
  dos=game.add.button(game.world.centerX -  250, 380, 'button',e7, this, 's7','p7','s7');
  


  text = game.add.text(game.world.centerX- 0, 200, "1  x  8");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 60;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#279EF7');   
  grd.addColorStop(1, '#279EF7');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 3;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);

  text2 = game.add.text(130, 115, "\n  \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;
 
  
  


}




function e7(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');


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
  
   text2 = game.add.text(650, 55, " Nivel 7/10");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');




  
  

}







function n8(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');
//9

  
cero=game.add.button(game.world.centerX - -100, 380, 'button',n9, this, 's7','p7','s7');
uno=game.add.button(game.world.centerX - 70, 380, 'button',e8, this, 's8','p8','s8');
dos=game.add.button(game.world.centerX -  250, 380, 'button',e8, this, 's9','p9','s9');



text = game.add.text(game.world.centerX- 0, 200, "1  x  7");
text.anchor.setTo(0.5);

text.font = 'Showcard Gothic';
text.fontSize = 60;

//  If we don't set the padding the font gets cut off
//  Comment out the line below to see the effect
text.padding.set(10, 16);

grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
grd.addColorStop(0, '#279EF7');   
grd.addColorStop(1, '#279EF7');

text.fill = grd;

text.align = 'center';
text.stroke = '#000000';
text.strokeThickness = 3;
text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

text.inputEnabled = true;
text.input.enableDrag();

text.events.onInputOver.add(over, this);
text.events.onInputOut.add(out, this);

text2 = game.add.text(130, 115, "\n  \n \n Resuelve:");
text2.anchor.setTo(0.5);

text2.font = 'Showcard Gothic';
text2.fontSize = 20;



  


}




function e8(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');


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
  
   text2 = game.add.text(650, 55, " Nivel 8/10");
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
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');


  
  cero=game.add.button(game.world.centerX - -100, 380, 'button',e9, this, 's8','p8','s8');
  uno=game.add.button(game.world.centerX - 70, 380, 'button',e9, this, 's9','p9','s9');
  dos=game.add.button(game.world.centerX -  250, 380, 'button',n10, this, 's10','p10','s10');
  


  text = game.add.text(game.world.centerX- 0, 200, "1  x  10");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 60;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#279EF7');   
  grd.addColorStop(1, '#279EF7');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 3;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(130, 115, "\n  \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



}




function e9(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');


 
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
  
   text2 = game.add.text(650, 55, " Nivel 9/10");
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
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');



  cero=game.add.button(game.world.centerX - -100, 380, 'button',g, this, 's9','p9','s9');
  uno=game.add.button(game.world.centerX - 70, 380, 'button',e10, this, 's10','p10','s10');
  dos=game.add.button(game.world.centerX -  250, 380, 'button',e10, this, 's8','p8','s8');
  


  text = game.add.text(game.world.centerX- 0, 200, "1  x  9");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 60;

  //  If we don't set the padding the font gets cut off
  //  Comment out the line below to see the effect
  text.padding.set(10, 16);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#279EF7');   
  grd.addColorStop(1, '#279EF7');

  text.fill = grd;

  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 3;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  text.inputEnabled = true;
  text.input.enableDrag();

  text.events.onInputOver.add(over, this);
  text.events.onInputOut.add(out, this);


  text2 = game.add.text(130, 115, "\n  \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;

  


}




function e10(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');


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
  
   text2 = game.add.text(650, 55, " Nivel 10/10");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  





    image = game.add.image(600, 330, 'an1');
    images = game.add.image(180, 430, 'an3');

    image = game.add.image(310, 380, 'an7');
    images = game.add.image(390, 380, 'an6');





    
  
  

}








function g(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background2');


 
 



  uno=game.add.button(game.world.centerX - 100, 370, 'button',n1, this, 'ij4','ij3','ij4');





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
    image = game.add.image(106, 60, 'mbn1');
    images = game.add.image(480, 450, 'an3');



    
}
