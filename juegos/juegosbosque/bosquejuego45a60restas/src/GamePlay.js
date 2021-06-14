
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
    game.load.image('background','assets/images/fondo2.png');
    game.load.image('background2','assets/images/fondo2.png');
    game.load.image('inicio','assets/images/inicio.png');
   


    
    game.load.image('ovni1','assets/images/a1.png');
    game.load.image('ovni2','assets/images/a7.png');
    game.load.image('ovni3','assets/images/a1.png');
    

    game.load.image('asteroide','assets/images/madera.png');
    game.load.image('asteroide2','assets/images/a2.png');



    game.load.image('an1','assets/images/a6.png');
    game.load.image('an2','assets/images/a2.png');
    game.load.image('an3','assets/images/a3.png');
    game.load.image('an4','assets/images/a4.png');
    game.load.image('an5','assets/images/a5.png');
    game.load.image('an6','assets/images/a6.png');
    game.load.image('an7','assets/images/a7.png');
    game.load.image('an8','assets/images/a8.png');
    game.load.image('mbn1','assets/images/mbn1.png');

    game.load.atlas('button','assets/images/ts31a60naranja.png','assets/images/ts31a60naranja.json');



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








jugar=game.add.button(game.world.centerX - 180, 350, 'button',n1, this, 'jb2','jb1','jb2');











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
//46

  cero=game.add.button(game.world.centerX - -100, 32, 'button',n2, this, 's46','p46','s46');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e1, this, 's45','p45','s45');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e1, this, 's47','p47','s47');
  


  text = game.add.text(game.world.centerX- 150, 170, "  48\n-     \n   2\n _______");
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


  text2 = game.add.text(80, 70, "\n Nivel 1 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(30, 420, 'an1');


  
  


}




function e1(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n1, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij4','ij3','ij4');





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
  


    image = game.add.image(75, 420, 'an1');





  

}



function n2(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',e2, this, 's47','p47','s47');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n3, this, 's46','p46','s46');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e2, this, 's49','p49','s49');
  


  text = game.add.text(game.world.centerX- 150, 170, "  49\n-     \n   3\n _______");
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


  text2 = game.add.text(80, 70, "\n Nivel 2 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(60, 420, 'an1');


  
  


}




function e2(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n2, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij4','ij3','ij4');





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
  


    image = game.add.image(75, 420, 'an1');




    
  
  

}




function n3(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',n4, this, 's48','p48','s48');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e3, this, 's45','p45','s45');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e3, this, 's46','p46','s46');
  


  text = game.add.text(game.world.centerX- 150, 170, "  56\n-     \n   8\n _______");
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


  text2 = game.add.text(80, 70, "\n Nivel 3 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(90, 420, 'an1');



  


}




function e3(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n3, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij4','ij3','ij4');





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
  


    image = game.add.image(75, 420, 'an1');



    
  
  

}




function n4(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',e4, this, 's40','p40','s40');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e4, this, 's45','p45','s45');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',n5, this, 's48','p48','s48');
  


  text = game.add.text(game.world.centerX- 150, 170, "  53\n-     \n   5\n _______");
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


  text2 = game.add.text(80, 70, "\n Nivel 4 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(120, 420, 'an1');


  
  


}




function e4(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n4, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij4','ij3','ij4');





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
  


    image = game.add.image(75, 420, 'an1');





}




function n5(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',n6, this, 's50','p50','s50');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e5, this, 's46','p46','s46');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e5, this, 's42','p42','s42');
  


  text = game.add.text(game.world.centerX- 150, 170, "  53\n-     \n   3\n _______");
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


  text2 = game.add.text(80, 70, "\n Nivel 5 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(150, 420, 'an1');


  


}




function e5(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n5, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij4','ij3','ij4');





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
  


    image = game.add.image(75, 420, 'an1');





  

}




function n6(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',e6, this, 's42','p42','s42');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e6, this, 's49','p49','s49');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',n7, this, 's50','p50','s50');
  


  text = game.add.text(game.world.centerX- 150, 170, "  60\n-     \n  10\n _______");
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


  text2 = game.add.text(80, 70, "\n Nivel 6 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(180, 420, 'an1');


 
  


}




function e6(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n6, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij4','ij3','ij4');





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
  


    image = game.add.image(75, 420, 'an1');



  

}





function n7(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',e7, this, 's53','p53','s53');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n8, this, 's52','p52','s52');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e7, this, 's48','p48','s48');
  


  text = game.add.text(game.world.centerX- 150, 170, "  56\n-     \n   4\n _______");
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


  text2 = game.add.text(80, 70, "\n Nivel 7 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(210, 420, 'an1');

  


}




function e7(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n7, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij4','ij3','ij4');





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
  


    image = game.add.image(75, 420, 'an1');






  
  

}







function n8(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',n9, this, 's52','p52','s52');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e8, this, 's51','p51','s51');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e8, this, 's55','p55','s55');
  


  text = game.add.text(game.world.centerX- 150, 170, "  58\n-     \n   6\n _______");
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


  text2 = game.add.text(80, 70, "\n Nivel 8 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(240, 420, 'an1');




}




function e8(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n8, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij4','ij3','ij4');





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
  


    image = game.add.image(75, 420, 'an1');




    
  
  

}




function n9(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');
//54

  cero=game.add.button(game.world.centerX - -100, 32, 'button',n10, this, 's54','p54','s54');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e9, this, 's55','p55','s55');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e9, this, 's57','p57','s57');
  


  text = game.add.text(game.world.centerX- 150, 170, "  54\n-     \n   0\n _______");
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


  text2 = game.add.text(80, 70, "\n Nivel 9 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(270, 420, 'an1');


  
  
  


}




function e9(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n9, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij4','ij3','ij4');





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
  


    image = game.add.image(75, 420, 'an1');





  
  

}




function n10(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');
//54

  cero=game.add.button(game.world.centerX - -100, 32, 'button',e10, this, 's56','p56','s56');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n11, this, 's54','p54','s54');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e10, this, 's55','p55','s55');
  


  text = game.add.text(game.world.centerX- 150, 170, " 58\n-     \n   4\n _______");
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


  text2 = game.add.text(80, 70, "\n Nivel 10 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(300, 420, 'an1');


  

}




function e10(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n10, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij4','ij3','ij4');





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
  


    image = game.add.image(75, 420, 'an1');






  

}




function n11(){


  //56
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',e11, this, 's54','p54','s54');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n12, this, 's56','p56','s56');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e11, this, 's51','p51','s51');
  


  text = game.add.text(game.world.centerX- 150, 170, "  60\n-     \n   4\n _______");
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


  text2 = game.add.text(80, 70, "\n Nivel 11 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(350, 420, 'an1');


  


}




function e11(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n11, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij4','ij3','ij4');





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
  


    image = game.add.image(75, 420, 'an1');






 
    
  
  

}




function n12(){
//56
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',n13, this, 's56','p56','s56');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e12, this, 's50','p50','s50');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e12, this, 's57','p57','s57');
  


  text = game.add.text(game.world.centerX- 150, 170, "   63\n-     \n   7\n _______");
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


  text2 = game.add.text(80, 70, "\n Nivel 12 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(380, 420, 'an1');





}




function e12(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n12, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij4','ij3','ij4');





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
  


    image = game.add.image(75, 420, 'an1');






  

}





function n13(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');

//58

  cero=game.add.button(game.world.centerX - -100, 32, 'button',e13, this, 's51','p51','s51');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e13, this, 's50','p50','s50');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',n14, this, 's58','p58','s58');
  


  text = game.add.text(game.world.centerX- 150, 170, "   64\n-     \n   6\n _______");
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


  text2 = game.add.text(80, 70, "\n Nivel 13 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(440, 420, 'an1');


}




function e13(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n13, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij4','ij3','ij4');





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
  


    image = game.add.image(75, 420, 'an1');



    
  
  

}







function n14(){
//58
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',n15, this, 's58','p58','s58');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e14, this, 's59','p59','s59');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e14, this, 's56','p56','s56');
  


  text = game.add.text(game.world.centerX- 150, 170, "  69\n-     \n  11\n _______");
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


  text2 = game.add.text(80, 70, "\n Nivel 14 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(470, 420, 'an1');


  
  


}




function e14(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n14, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij4','ij3','ij4');





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
  


    image = game.add.image(75, 420, 'an1');





  

}






function n15(){

//60

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',g, this, 's60','p60','s60');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e15, this, 's59','p59','s59');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e15, this, 's54','p54','s54');
  


  text = game.add.text(game.world.centerX- 150, 170, "  70\n-     \n  10\n _______");
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


  text2 = game.add.text(80, 70, "\n Nivel 15 \n \n Resuelve:");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;



  image = game.add.image(550, 420, 'an1');



}




function e15(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n15, this, 'toz4','toz3','toz4');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij4','ij3','ij4');





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
  
   text2 = game.add.text(650, 55, " Nivel 15/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  


    image = game.add.image(75, 420, 'an1');




  
  

}







function g(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


 
 



  uno=game.add.button(game.world.centerX - 130, 350, 'button',n1, this, 'ij4','ij3','ij4');





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



  
  

}
