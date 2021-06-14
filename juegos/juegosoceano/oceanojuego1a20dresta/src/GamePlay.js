
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
    game.load.image('background3','assets/images/fondo3.png');
    game.load.image('inicio','assets/images/inicio.png');
   


    
    game.load.image('ovni1','assets/images/a1.png');
    game.load.image('ovni2','assets/images/madera.png');
    game.load.image('ovni3','assets/images/a1.png');
    

    game.load.image('asteroide','assets/images/madera.png');
    game.load.image('asteroide2','assets/images/a2.png');



    game.load.image('an1','assets/images/a1.png');
    game.load.image('an2','assets/images/a2.png');
    game.load.image('an3','assets/images/a3.png');
    game.load.image('an4','assets/images/a4.png');
    game.load.image('an5','assets/images/a5.png');
    game.load.image('an6','assets/images/a6.png');
    game.load.image('an7','assets/images/a7.png');
    game.load.image('an8','assets/images/a8.png');
    game.load.image('an9','assets/images/a9.png');
    game.load.image('an10','assets/images/a10.png');
    game.load.image('an11','assets/images/a11.png');
    game.load.image('an12','assets/images/a12.png');
    game.load.image('mbn1','assets/images/mbn1.png');

    game.load.atlas('button','assets/images/uv1a25.png','assets/images/uv1a25.json');



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








jugar=game.add.button(game.world.centerX - 180, 290, 'button',n1, this, 'ja2','ja1','ja2');











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


  cero=game.add.button(game.world.centerX - -100, 32, 'button',e1, this, 's1','p1','s1');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e1, this, 's3','p3','s3');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',n2, this, 's2','p2','s2');
  
  text = game.add.text(game.world.centerX- 150, 170, "5 - 3");
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



  image = game.add.image(30, 380, 'an2');
  images = game.add.image(590, 340, 'an8');




}




function e1(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n1, this, 'toz2','toz2_1','toz2');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij2','ij1','ij2');





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
  


    image = game.add.image(75, 330, 'an1');






  
  

}



function n2(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',e2, this, 's1','p1','s1');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n3, this, 's2','p2','s2');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e2, this, 's3','p3','s3');
  


  text = game.add.text(game.world.centerX- 150, 170, "6 - 4");
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



  image = game.add.image(60, 380, 'an2');
  images = game.add.image(590, 340, 'an8');



}




function e2(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n2, this, 'toz2','toz2_1','toz2');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij2','ij1','ij2');





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
  


    image = game.add.image(75, 330, 'an1');




  
  

}




function n3(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',e3, this, 's2','p2','s2');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e3, this, 's3','p3','s3');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',n4, this, 's4','p4','s4');
  


  text = game.add.text(game.world.centerX- 150, 170, "7 - 3");
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



  image = game.add.image(90, 330, 'an2');
  images = game.add.image(590, 340, 'an8');


  


}




function e3(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n3, this, 'toz2','toz2_1','toz1');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij2','ij1','ij2');





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
  


    image = game.add.image(75, 330, 'an1');



 

}




function n4(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',e4, this, 's1','p1','s1');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n5, this, 's5','p5','s5');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e4, this, 's4','p4','s4');
  


  text = game.add.text(game.world.centerX- 150, 170, "10 - 5");
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



  image = game.add.image(120, 330, 'an2');
  images = game.add.image(590, 340, 'an8');


  


}




function e4(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n4, this, 'toz2','toz2_1','toz2');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij2','ij1','ij2');





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
  


    image = game.add.image(75,330, 'an1');




  
  

}




function n5(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',e5, this, 's3','p3','s3');
  uno=game.add.button(game.world.centerX -  -70, 132, 'button',e5, this, 's4','p4','s4');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',n6, this, 's5','p5','s5');
  



  text = game.add.text(game.world.centerX- 150, 170, "15 - 10");
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



  image = game.add.image(150, 330, 'an2');
  images = game.add.image(590, 340, 'an8');

 


}




function e5(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n5, this, 'toz2','toz2_1','toz2');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij2','ij1','ij2');





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
  


    image = game.add.image(75, 330, 'an1');



    toz2.onInputOver.add(toz2,this);
    toz2_1.onInputOut.add(toz2_1,this);
    
    ij1.onInputOver.add(ij1,this);
    ij2.onInputOut.add(ij2,this);
  
  

}




function n6(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');

  cero=game.add.button(game.world.centerX - -100, 32, 'button',e6, this, 's6','p6','s6');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n7, this, 's7','p7','s7');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e6, this, 's4','p4','s4');
  



  text = game.add.text(game.world.centerX- 150, 170, "10 - 3");
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



  image = game.add.image(180, 330, 'an2');
  images = game.add.image(590, 340, 'an8');

 
  


}




function e6(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n6, this, 'toz2','toz2_1','toz2');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij2','ij1','ij2');





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
  


    image = game.add.image(75, 330, 'an1');




  
  

}





function n7(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  
  uno=game.add.button(game.world.centerX - -100, 32, 'button',e7, this, 's5','p5','s5');
  tres=game.add.button(game.world.centerX - -70, 132, 'button',e7, this, 's6','p6','s6');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',n8, this, 's8','p8','s8');
    
  
  
  text = game.add.text(game.world.centerX- 150, 170, "13 - 5");
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



  image = game.add.image(230, 330, 'an2');
  images = game.add.image(590, 340, 'an8');

  
  


}




function e7(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n7, this, 'toz2','toz2_1','toz1');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij2','ij1','ij2');





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
  


    image = game.add.image(75, 330, 'an1');




  

}







function n8(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',n9, this, 's9','p9','s9');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e8, this, 's5','p5','s5');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e8, this, 's8','p8','s8');
  


  text = game.add.text(game.world.centerX- 150, 170, "15 - 6");
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


  image = game.add.image(280, 330, 'an2');
  images = game.add.image(590, 340, 'an8');




}




function e8(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n8, this, 'toz2','toz2_1','toz2');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij2','ij1','ij2');





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
  


    image = game.add.image(75, 330, 'an1');



}




function n9(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',e9, this, 's7','p7','s7');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e9, this, 's8','p8','s8');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',n10, this, 's9','p9','s9');
  


  text = game.add.text(game.world.centerX- 150, 170, "18 - 9");
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

  image = game.add.image(350, 330, 'an2');
  images = game.add.image(590, 340, 'an8');

  
  


}




function e9(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n9, this, 'toz2','toz2_1','toz2');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij2','ij1','ij2');





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
  


    image = game.add.image(75, 330, 'an1');






}




function n10(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',n11, this, 's11','p11','s11');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e10, this, 's10','p10','s10');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e10, this, 's12','p12','s12');
  


  text = game.add.text(game.world.centerX- 150, 170, "16 - 5");
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

  //image = game.add.image(400, 330, 'an1');

  image = game.add.image(350, 430, 'an2');
  images = game.add.image(590, 340, 'an8');

 
  


}




function e10(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n10, this, 'toz2','toz2_1','toz2');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij2','ij1','ij2');





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
  


    image = game.add.image(75,330, 'an1');





    
    
  
  

}




function n11(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');



  cero=game.add.button(game.world.centerX - -100, 32, 'button',e11, this, 's11','p11','s11');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n12, this, 's13','p13','s13');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e11, this, 's12','p12','s12');
  


  text = game.add.text(game.world.centerX- 150, 170, "19 - 6");
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


//image = game.add.image(400, 330, 'an1');
image = game.add.image(350, 450, 'an2');
  images = game.add.image(590, 340, 'an8');

  p1.onInputOver.add(p1,this);
  s1.onInputOut.add(s1,this);
  
  p3.onInputOver.add(p3,this);
  s3.onInputOut.add(s3,this);
  
  
  p8.onInputOver.add(p8,this);
  s8.onInputOut.add(s8,this);
  
  


}




function e11(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n11, this, 'toz2','toz2_1','toz2');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij2','ij1','ij2');





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
  


    image = game.add.image(75, 330, 'an1');




  
  

}




function n12(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',n13, this, 's15','p15','s15');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e12, this, 's16','p16','s16');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e12, this, 's17','p17','s17');
  


  text = game.add.text(game.world.centerX- 150, 170, "20 - 5");
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

//image = game.add.image(400, 330, 'an1');

image = game.add.image(460,450, 'an2');
  images = game.add.image(590, 340, 'an8');



  
  


}




function e12(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n12, this, 'toz2','toz2_1','toz2');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij2','ij1','ij2');





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
  


    image = game.add.image(75, 330, 'an1');






    toz2.onInputOver.add(toz2,this);
    toz2_1.onInputOut.add(toz2_1,this);
    
    ij1.onInputOver.add(ij1,this);
    ij2.onInputOut.add(ij2,this);
    
  
  

}





function n13(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',e13, this, 's16','p16','s16');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n14, this, 's17','p17','s17');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e13, this, 's18','p18','s18');
  


  text = game.add.text(game.world.centerX- 150, 170, "20 - 3");
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



  image = game.add.image(460, 450, 'an2');
  images = game.add.image(590, 340, 'an8');




}




function e13(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n13, this, 'toz2','toz2_1','toz2');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij2','ij1','ij2');





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
  


    image = game.add.image(75, 330, 'an1');




}







function n14(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',e14, this, 's19','p19','s19');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',e14, this, 's17','p17','s17');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',n15, this, 's18','p18','s18');
  


  text = game.add.text(game.world.centerX- 150, 170, "25 - 7");
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



  image = game.add.image(520, 340, 'an2');
  images = game.add.image(590, 340, 'an8');

  

}




function e14(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n14, this, 'toz2','toz2_1','toz2');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij2','ij1','ij2');





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
  
   text2 = game.add.text(640, 55, " Nivel 14/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  


    image = game.add.image(75, 330, 'an1');
    images = game.add.image(600, 330, 'an3');


  
  

}






function n15(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - -100, 32, 'button',e15, this, 's20','p20','s20');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',g, this, 's19','p19','s19');
  dos=game.add.button(game.world.centerX -  -100, 232, 'button',e15, this, 's21','p21','s21');
  


  text = game.add.text(game.world.centerX- 150, 170, "27 - 8");
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



  image = game.add.image(560, 340, 'an2');
  images = game.add.image(590, 340, 'an8');

 
}




function e15(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  cero=game.add.button(game.world.centerX - 347, 132, 'button',n15, this, 'toz2','toz2_1','toz2');
  uno=game.add.button(game.world.centerX - -70, 132, 'button',n1, this, 'ij2','ij1','ij2');





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
  


    image = game.add.image(75, 330, 'an1');




}







function g(){

 
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


 
 



  uno=game.add.button(game.world.centerX - 130, 320, 'button',n1, this, 'ij2','ij1','ij2');





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
  


    image = game.add.image(50, 420, 'an2');
    image = game.add.image(106, 30, 'mbn1');
    images = game.add.image(560, 330, 'an8');



}
