
var game = new Phaser.Game(776, 570, Phaser.AUTO.CANVAS, 'phaser-example', { preload: preload, create: create });



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
    game.load.image('background','assets/images/juego.png');
 
    game.load.image('inicio','assets/images/iniciodibujos.png');
    game.load.image('ganaste','assets/images/ganaste.png');
    game.load.image('correctouno','assets/images/correcto.png');
   
    game.load.image('erroruno','assets/images/error.png');



    
    game.load.image('ovni1','assets/images/ovni1.png');
    game.load.image('ovni2','assets/images/ovni2.png');
    game.load.image('ovni3','assets/images/ovni3.png');
    
  
    game.load.image('ovnig1','assets/images/ovnig1.png');
    game.load.image('ovnig2','assets/images/ovnig2.png');
    game.load.image('ovnig3','assets/images/ovnig3.png');
        
  
    game.load.image('planetag1','assets/images/planetag1.png');
    game.load.image('planetag2','assets/images/planetag2.png');
    game.load.image('planetag3','assets/images/planetag3.png');
    






    game.load.image('asteroide','assets/images/asteroide.png');
    game.load.image('asteroide2','assets/images/asteroide2.png');


    game.load.atlas('button','assets/images/espacio.png','assets/images/espacio.json');
    game.load.atlas('button','assets/images/figuras.png','assets/images/figuras.json');


 //  Load the Google WebFont Loader script
 game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');


}




function create() {
 
  inicio();
 
}





var fondosumas;
var fondosumasdos;
var inicio;
var ganaste;
var correctouno;
var correctodos;
var correctotres;
var correctocuatro;
var correctocinco;
var correctoseis;
var erroruno;
var errordos;



var botonsumas1a5;
var botonsumas6a10;


var numerocero;








var text = null;
var grd;
var text2 = null;
var grd;








function out() {
  text.fill = grd;
}

function over() {
  text.fill = '#09F1BC';
}



function out() {
text2.fill = grd;
}

function over() {
text2.fill = '#09F1BC';
}
var text2;













function cero(){
  console.log('button cero');
}
function cerouno(){
  console.log('button cerouno');
}
function uno(){
  console.log('button uno');
}
function unouno(){
console.log('button unouno');
}
function dos(){
  console.log('button dos');
}
function dosuno(){
   console.log('button dosuno');
}
function tres(){
  console.log('button tres');
}
function tresuno(){
   console.log('button tresuno');
}
function cuatro(){
  console.log('button cuatro');
}
function cuatrouno(){
  console.log('button cuatrouno');
}
function cinco(){
  console.log('button cinco');
}
function cincouno(){
  console.log('button cincouno');
}

function iniciajuego(){
  console.log('button iniciarjuego');
}
function iniciajuego1(){
  console.log('button iniciarjuego1');
}
function signievlmorado(){
  console.log('button signievlmorado');
}
function signivelmoradod(){
  console.log('button signivelmoradod');
}
function signivel(){
  console.log('button signivel');
}
function signiveld(){
  console.log('button signiveld');
}
function tratar(){
  console.log('button tratar');
}
function tratard(){
  console.log('button tratard');
}


function planetag2(){
  console.log('planetag2');
}






function botonsumas1a5(){
console.log('button botonsumas1a5');
}

function botonsumas1a5d(){
  console.log('button botonsumas1a5d');
  }
 







function inicio(){





inicio = game.add.tileSprite(0, 0, 776, 570, 'inicio');








botonsumas1a5=game.add.button(game.world.centerX - 90, 350, 'button',niveluno, this, 'botonsumas1a5d','botonsumas1a5','botonsumas1a5d');







text = game.add.text(game.world.centerX, 220, "   Sumas en el Espacio  ");
text.anchor.setTo(0.5);

text.font = 'Showcard Gothic';
text.fontSize = 50;

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



text2 = game.add.text(380, 300,  "Cuenta los planetas");
text2.anchor.setTo(0.5);

text2.font = 'Showcard Gothic';
text2.fontSize = 25;










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

















botonsumas1a5.onInputOver.add(botonsumas1a5,this);
botonsumas1a5.onInputOut.add(botonsumas1a5d,this);












}


function niveluno(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  image = game.add.image(110, 155, 'planetag2');
  image = game.add.image(190, 155, 'planetag2');
  image = game.add.image(270, 155, 'planetag2');



  image = game.add.image(415, 155, 'planetag2');
  image = game.add.image(495, 155, 'planetag2');
  image = game.add.image(575, 155, 'planetag2');





  cero=game.add.button(game.world.centerX - 280, 375, 'button',errorniveluno, this, 'cerouno','cero','cerouno');
  uno=game.add.button(game.world.centerX - 60, 375, 'button',errorniveluno, this, 'unouno','uno','unouno');
  dos=game.add.button(game.world.centerX -  -145, 375, 'button',correctonivel1, this, 'dosuno','dos','dosuno');
  


  text = game.add.text(game.world.centerX, 205, " \n+\n=?");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 43;

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


  text2 = game.add.text(55, 30, " Nivel 1");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;





  cero.onInputOver.add(cero,this);
  cero.onInputOut.add(cerouno,this);
  
  uno.onInputOver.add(uno,this);
 uno.onInputOut.add(unouno,this);
  
  
  dos.onInputOver.add(dos,this);
  dos.onInputOut.add(dosuno,this);
  
  


}

var iniciojuego;
var tratar;



function errorniveluno(){

  erroruno = game.add.tileSprite(0, 0, 776, 570, 'erroruno');


  


  iniciajuego=game.add.button(game.world.centerX - 350, 365, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
  tratar=game.add.button(game.world.centerX - -100, 430, 'button',niveluno, this, 'tratard','tratar','tratar');






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
  
   text2 = game.add.text(650, 35, " Nivel 1/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  
















  iniciojuego.onInputOver.add(iniciajuego,this);
  iniciojuego.onInputOut.add(iniciajuego1,this);
  tratar.onInputOver.add(tratar,this);
  tratar.onInputOut.add(tratard,this);
  
  
  
  
  
  
  

}


function correctonivel1(){
correctouno=game.add.tileSprite(0,  0, 776, 570, 'correctouno');
iniciajuego=game.add.button(game.world.centerX - 350, 30, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
signivel=game.add.button(game.world.centerX - -80, 380, 'button',niveldos, this, 'signivelmoradod','signievlmorado','signivelmoradod');






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

 text2 = game.add.text(650, 35, " Nivel 1/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;




iniciojuego.onInputOver.add(iniciajuego,this);
iniciojuego.onInputOut.add(iniciajuego1,this);
signivel.onInputOver.add(signievlmorado,this);
signivel.onInputOut.add(signivelmoradod,this);



}











function niveldos(){

  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  image = game.add.image(110, 155, 'ovnig1');
  image = game.add.image(190, 155, 'ovnig1');
  image = game.add.image(270, 155, 'ovnig1');



  image = game.add.image(415, 155, 'ovnig1');
  image = game.add.image(495, 155, 'ovnig1');
  image = game.add.image(575, 155, 'ovnig1');





  cero=game.add.button(game.world.centerX - 280, 375, 'button',errorniveldos, this, 'cerouno','cero','cerouno');
  uno=game.add.button(game.world.centerX - 60, 375, 'button',errorniveldos, this, 'unouno','uno','unouno');
  dos=game.add.button(game.world.centerX -  -145, 375, 'button',correctonivel2, this, 'dosuno','dos','dosuno');
  


  text = game.add.text(game.world.centerX, 205, " \n+\n=?");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 43;

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


  text2 = game.add.text(55, 30, " Nivel 2");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;





  cero.onInputOver.add(cero,this);
  cero.onInputOut.add(cerouno,this);
  
  uno.onInputOver.add(uno,this);
 uno.onInputOut.add(unouno,this);
  
  
  dos.onInputOver.add(dos,this);
  dos.onInputOut.add(dosuno,this);
  
  
  
  





}




function errorniveldos(){

  erroruno = game.add.tileSprite(0, 0, 776, 570, 'erroruno');


  


  iniciajuego=game.add.button(game.world.centerX - 350, 365, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
  tratar=game.add.button(game.world.centerX - -100, 430, 'button',niveldos, this, 'tratard','tratar','tratar');




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
  
   text2 = game.add.text(650, 35, " Nivel 2/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  

  iniciojuego.onInputOver.add(iniciajuego,this);
  iniciojuego.onInputOut.add(iniciajuego1,this);
  tratar.onInputOver.add(tratar,this);
  tratar.onInputOut.add(tratard,this);
  
  
  
  
  
  
  

}




function correctonivel2(){
  correctodos=game.add.tileSprite(0,  0, 776, 570, 'correctouno');
  iniciajuego=game.add.button(game.world.centerX - 280, 360, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
  signivel=game.add.button(game.world.centerX - -80, 380, 'button',niveltres, this, 'signiveld','signivel','signiveld');
  
  
  


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

 text2 = game.add.text(650, 35, " Nivel 2/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

  
  
  
  
  iniciojuego.onInputOver.add(iniciajuego,this);
  iniciojuego.onInputOut.add(iniciajuego1,this);
  signivel.onInputOver.add(signivel,this);
  signivel.onInputOut.add(signiveld,this);
  
  
  
  }
  








function niveltres(){
  
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');






  cero=game.add.button(game.world.centerX - 280, 375, 'button',errorniveltres, this, 'cerouno','cero','cerouno');
  uno=game.add.button(game.world.centerX - 60, 375, 'button',errorniveltres, this, 'unouno','uno','unouno');
  dos=game.add.button(game.world.centerX -  -145, 375, 'button',correctonivel3, this, 'dosuno','dos','dosuno');
  


  text = game.add.text(game.world.centerX, 205, "3 + 5 = ?");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 43;

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


  text2 = game.add.text(55, 30, " Nivel 3");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;





  cero.onInputOver.add(cero,this);
  cero.onInputOut.add(cerouno,this);
  
  uno.onInputOver.add(uno,this);
 uno.onInputOut.add(unouno,this);
  
  
  dos.onInputOver.add(dos,this);
  dos.onInputOut.add(dosuno,this);
  


}



function errorniveltres(){

  erroruno = game.add.tileSprite(0, 0, 776, 570, 'erroruno');


  


  iniciajuego=game.add.button(game.world.centerX - 350, 365, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
  tratar=game.add.button(game.world.centerX - -100, 430, 'button',niveltres, this, 'tratard','tratar','tratar');




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
  
   text2 = game.add.text(650, 35, " Nivel 3/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  

  iniciojuego.onInputOver.add(iniciajuego,this);
  iniciojuego.onInputOut.add(iniciajuego1,this);
  tratar.onInputOver.add(tratar,this);
  tratar.onInputOut.add(tratard,this);
  
  
  
  
  
  
  

}



function correctonivel3(){
  correctodos=game.add.tileSprite(0,  0, 776, 570, 'correctouno');
  iniciajuego=game.add.button(game.world.centerX - 280, 360, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
  signivel=game.add.button(game.world.centerX - -80, 380, 'button',nivelcuatro, this, 'signiveld','signivel','signiveld');
  
  
  
  


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

 text2 = game.add.text(650, 35, " Nivel 3/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

  
  
  
  iniciojuego.onInputOver.add(iniciajuego,this);
  iniciojuego.onInputOut.add(iniciajuego1,this);
  signivel.onInputOver.add(signivel,this);
  signivel.onInputOut.add(signiveld,this);
  
  
  
  }
  





  function nivelcuatro(){
  
    fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  image = game.add.image(110, 155, 'planetag1');
  image = game.add.image(190, 155, 'planetag1');
  image = game.add.image(270, 155, 'planetag1');



  image = game.add.image(415, 155, 'planetag1');
  image = game.add.image(495, 155, 'planetag1');
  image = game.add.image(575, 155, 'planetag1');





  cero=game.add.button(game.world.centerX - 280, 375, 'button',errornivelcuatro, this, 'cerouno','cero','cerouno');
  uno=game.add.button(game.world.centerX - 60, 375, 'button',errornivelcuatro, this, 'unouno','uno','unouno');
  dos=game.add.button(game.world.centerX -  -145, 375, 'button',correctonivel4, this, 'dosuno','dos','dosuno');
  


  text = game.add.text(game.world.centerX, 205," \n+\n=?");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 43;

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


  text2 = game.add.text(55, 30, " Nivel 4");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;





  cero.onInputOver.add(cero,this);
  cero.onInputOut.add(cerouno,this);
  
  uno.onInputOver.add(uno,this);
 uno.onInputOut.add(unouno,this);
  
  
  dos.onInputOver.add(dos,this);
  dos.onInputOut.add(dosuno,this);
  
  
  
  
  
  
  }
  
  
  
  function errornivelcuatro(){
  
    erroruno = game.add.tileSprite(0, 0, 776, 570, 'erroruno');
  
  
    
  
  
    iniciajuego=game.add.button(game.world.centerX - 350, 365, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
    tratar=game.add.button(game.world.centerX - -100, 430, 'button',nivelcuatro, this, 'tratard','tratar','tratar');
  
  


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

 text2 = game.add.text(650, 35, " Nivel 4/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

  
    iniciojuego.onInputOver.add(iniciajuego,this);
    iniciojuego.onInputOut.add(iniciajuego1,this);
    tratar.onInputOver.add(tratar,this);
    tratar.onInputOut.add(tratard,this);
    
    
    
    
    
    
    
  
  }
  
  
  
  function correctonivel4(){
    correctouno=game.add.tileSprite(0,  0, 776, 570, 'correctouno');
    iniciajuego=game.add.button(game.world.centerX - 350, 30, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
    signivel=game.add.button(game.world.centerX - -80, 380, 'button',nivelcinco, this, 'signivelmoradod','signievlmorado','signivelmoradod');
    
    
    


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

 text2 = game.add.text(650, 35, " Nivel 4/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

    
    
    
    
    iniciojuego.onInputOver.add(iniciajuego,this);
    iniciojuego.onInputOut.add(iniciajuego1,this);
    signivel.onInputOver.add(signievlmorado,this);
    signivel.onInputOut.add(signivelmoradod,this);
    
    
    
    }
    
  
  
  






    function nivelcinco(){
      fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


      image = game.add.image(110, 155, 'ovnig1');
      image = game.add.image(190, 155, 'ovnig1');
      image = game.add.image(270, 155, 'ovnig1');
    
    
    
      image = game.add.image(415, 155, 'ovnig1');
      image = game.add.image(495, 155, 'ovnig1');
      image = game.add.image(575, 155, 'ovnig1');
    
    
    
    
    
      cero=game.add.button(game.world.centerX - 280, 375, 'button',errornivelcinco, this, 'cerouno','cero','cerouno');
      uno=game.add.button(game.world.centerX - 60, 375, 'button',errornivelcinco, this, 'unouno','uno','unouno');
      dos=game.add.button(game.world.centerX -  -145, 375, 'button',correctonivel5, this, 'dosuno','dos','dosuno');
      
    
    
      text = game.add.text(game.world.centerX, 205," \n+\n=?");
      text.anchor.setTo(0.5);
    
      text.font = 'Showcard Gothic';
      text.fontSize = 43;
    
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
    
    
      text2 = game.add.text(55, 30, " Nivel 5");
      text2.anchor.setTo(0.5);
    
      text2.font = 'Showcard Gothic';
      text2.fontSize = 20;
    
    
    
    
    
      cero.onInputOver.add(cero,this);
      cero.onInputOut.add(cerouno,this);
      
      uno.onInputOver.add(uno,this);
     uno.onInputOut.add(unouno,this);
      
      
      dos.onInputOver.add(dos,this);
      dos.onInputOut.add(dosuno,this);
      
      
    }
    
    
    
    
    function errornivelcinco(){
    
      erroruno = game.add.tileSprite(0, 0, 776, 570, 'erroruno');
    
    
      
    
    
      iniciajuego=game.add.button(game.world.centerX - 350, 365, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
      tratar=game.add.button(game.world.centerX - -100, 430, 'button',nivelcinco, this, 'tratard','tratar','tratar');
    
    


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

 text2 = game.add.text(650, 35, " Nivel 5/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

    
      iniciojuego.onInputOver.add(iniciajuego,this);
      iniciojuego.onInputOut.add(iniciajuego1,this);
      tratar.onInputOver.add(tratar,this);
      tratar.onInputOut.add(tratard,this);
      
      
      
      
      
      
      
    
    }
    
    
    
    
    function correctonivel5(){
      correctodos=game.add.tileSprite(0,  0, 776, 570, 'correctouno');
      iniciajuego=game.add.button(game.world.centerX - 280, 360, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
      signivel=game.add.button(game.world.centerX - -80, 380, 'button',nivelseis, this, 'signiveld','signivel','signiveld');
      
      
      
      


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

 text2 = game.add.text(650, 35, " Nivel 5/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

      
      
      
      iniciojuego.onInputOver.add(iniciajuego,this);
      iniciojuego.onInputOut.add(iniciajuego1,this);
      signivel.onInputOver.add(signivel,this);
      signivel.onInputOut.add(signiveld,this);
      
      
      
      }
      
    




      


function nivelseis(){
  
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');







  cero=game.add.button(game.world.centerX - 280, 375, 'button',errornivelseis, this, 'cerouno','cero','cerouno');
  uno=game.add.button(game.world.centerX - 60, 375, 'button',errornivelseis, this, 'unouno','uno','unouno');
  dos=game.add.button(game.world.centerX -  -145, 375, 'button',correctonivel6, this, 'dosuno','dos','dosuno');
  


  text = game.add.text(game.world.centerX, 205, "3 + 5 = ?");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 43;

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


  text2 = game.add.text(55, 30, " Nivel 6");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;





  cero.onInputOver.add(cero,this);
  cero.onInputOut.add(cerouno,this);
  
  uno.onInputOver.add(uno,this);
 uno.onInputOut.add(unouno,this);
  
  
  dos.onInputOver.add(dos,this);
  dos.onInputOut.add(dosuno,this);
  



}



function errornivelseis(){

  erroruno = game.add.tileSprite(0, 0, 776, 570, 'erroruno');


  


  iniciajuego=game.add.button(game.world.centerX - 350, 365, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
  tratar=game.add.button(game.world.centerX - -100, 430, 'button',nivelseis, this, 'tratard','tratar','tratar');




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
  
   text2 = game.add.text(650, 35, " Nivel 6/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  

  iniciojuego.onInputOver.add(iniciajuego,this);
  iniciojuego.onInputOut.add(iniciajuego1,this);
  tratar.onInputOver.add(tratar,this);
  tratar.onInputOut.add(tratard,this);
  
  
  
  
  
  
  

}



function correctonivel6(){
  correctodos=game.add.tileSprite(0,  0, 776, 570, 'correctouno');
  iniciajuego=game.add.button(game.world.centerX - 280, 360, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
  signivel=game.add.button(game.world.centerX - -80, 380, 'button',nivelsiete, this, 'signiveld','signivel','signiveld');
  
  
  
  


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

 text2 = game.add.text(650, 35, " Nivel 6/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

  
  
  
  iniciojuego.onInputOver.add(iniciajuego,this);
  iniciojuego.onInputOut.add(iniciajuego1,this);
  signivel.onInputOver.add(signivel,this);
  signivel.onInputOut.add(signiveld,this);
  
  
  
  }
  







  


  function nivelsiete(){
  
    fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


    image = game.add.image(110, 155, 'planetag1');
    image = game.add.image(190, 155, 'planetag1');
    image = game.add.image(270, 155, 'planetag1');
  
  
  
    image = game.add.image(415, 155, 'planetag1');
    image = game.add.image(495, 155, 'planetag1');
    image = game.add.image(575, 155, 'planetag1');
  
  
  
  
  
    cero=game.add.button(game.world.centerX - 280, 375, 'button',errornivelsiete, this, 'cerouno','cero','cerouno');
    uno=game.add.button(game.world.centerX - 60, 375, 'button',errornivelsiete, this, 'unouno','uno','unouno');
    dos=game.add.button(game.world.centerX -  -145, 375, 'button',correctonivel7, this, 'dosuno','dos','dosuno');
    
  
  
    text = game.add.text(game.world.centerX, 205," \n+\n=?");
    text.anchor.setTo(0.5);
  
    text.font = 'Showcard Gothic';
    text.fontSize = 43;
  
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
  
  
    text2 = game.add.text(55, 30, " Nivel 7");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 20;
  
  
  
  
  
    cero.onInputOver.add(cero,this);
    cero.onInputOut.add(cerouno,this);
    
    uno.onInputOver.add(uno,this);
   uno.onInputOut.add(unouno,this);
    
    
    dos.onInputOver.add(dos,this);
    dos.onInputOut.add(dosuno,this);
    
    
  
  
  
    
  
  
  
  
  
  }
  
  
  
  function errornivelsiete(){
  
    erroruno = game.add.tileSprite(0, 0, 776, 570, 'erroruno');
  
  
    
  
  
    iniciajuego=game.add.button(game.world.centerX - 350, 365, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
    tratar=game.add.button(game.world.centerX - -100, 430, 'button',nivelsiete, this, 'tratard','tratar','tratar');
  
  


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

 text2 = game.add.text(650, 35, " Nivel 7/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

  
    iniciojuego.onInputOver.add(iniciajuego,this);
    iniciojuego.onInputOut.add(iniciajuego1,this);
    tratar.onInputOver.add(tratar,this);
    tratar.onInputOut.add(tratard,this);
    
    
    
    
    
    
    
  
  }
  
  
  
  function correctonivel7(){
    correctouno=game.add.tileSprite(0,  0, 776, 570, 'correctouno');
    iniciajuego=game.add.button(game.world.centerX - 350, 30, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
    signivel=game.add.button(game.world.centerX - -80, 380, 'button',nivelocho, this, 'signivelmoradod','signievlmorado','signivelmoradod');
    
    
    
    


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

 text2 = game.add.text(650, 35, " Nivel 7/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

    
    
    
    iniciojuego.onInputOver.add(iniciajuego,this);
    iniciojuego.onInputOut.add(iniciajuego1,this);
    signivel.onInputOver.add(signievlmorado,this);
    signivel.onInputOut.add(signivelmoradod,this);
    
    
    
    }
    
  







    
    function nivelocho(){

      fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  image = game.add.image(110, 155, 'ovnig2');
  image = game.add.image(190, 155, 'ovnig2');
  image = game.add.image(270, 155, 'ovnig2');



  image = game.add.image(415, 155, 'ovnig2');
  image = game.add.image(495, 155, 'ovnig2');
  image = game.add.image(575, 155, 'ovnig2');





  cero=game.add.button(game.world.centerX - 280, 375, 'button',errornivelocho, this, 'cerouno','cero','cerouno');
  uno=game.add.button(game.world.centerX - 60, 375, 'button',errornivelocho, this, 'unouno','uno','unouno');
  dos=game.add.button(game.world.centerX -  -145, 375, 'button',correctonivel8, this, 'dosuno','dos','dosuno');
  


  text = game.add.text(game.world.centerX, 205," \n+\n=?");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 43;

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


  text2 = game.add.text(55, 30, " Nivel 8");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;





  cero.onInputOver.add(cero,this);
  cero.onInputOut.add(cerouno,this);
  
  uno.onInputOver.add(uno,this);
 uno.onInputOut.add(unouno,this);
  
  
  dos.onInputOver.add(dos,this);
  dos.onInputOut.add(dosuno,this);
  
    
    
    
    
    
    }
    
    
    
    
    function errornivelocho(){
    
      erroruno = game.add.tileSprite(0, 0, 776, 570, 'erroruno');
    
    
      
    
    
      iniciajuego=game.add.button(game.world.centerX - 350, 365, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
      tratar=game.add.button(game.world.centerX - -100, 430, 'button',nivelocho, this, 'tratard','tratar','tratar');
    
    


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

 text2 = game.add.text(650, 35, " Nivel 8/16");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

    
      iniciojuego.onInputOver.add(iniciajuego,this);
      iniciojuego.onInputOut.add(iniciajuego1,this);
      tratar.onInputOver.add(tratar,this);
      tratar.onInputOut.add(tratard,this);
      
      
      
      
      
      
      
    
    }
    
    
    
    
    function correctonivel8(){
      correctodos=game.add.tileSprite(0,  0, 776, 570, 'correctouno');
      iniciajuego=game.add.button(game.world.centerX - 280, 360, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
      signivel=game.add.button(game.world.centerX - -80, 380, 'button',nivelnueve, this, 'signiveld','signivel','signiveld');
      
      
      
      


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

 text2 = game.add.text(650, 35, " Nivel 8/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

      
      
      
      iniciojuego.onInputOver.add(iniciajuego,this);
      iniciojuego.onInputOut.add(iniciajuego1,this);
      signivel.onInputOver.add(signivel,this);
      signivel.onInputOut.add(signiveld,this);
      
      
      
      }
      
    






      

function nivelnueve(){
  
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');






  cero=game.add.button(game.world.centerX - 280, 375, 'button',errornivelnueve, this, 'cerouno','cero','cerouno');
  uno=game.add.button(game.world.centerX - 60, 375, 'button',errornivelnueve, this, 'unouno','uno','unouno');
  dos=game.add.button(game.world.centerX -  -145, 375, 'button',correctonivel9, this, 'dosuno','dos','dosuno');
  


  text = game.add.text(game.world.centerX, 205,"3 + 5 = ?");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 43;

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


  text2 = game.add.text(55, 30, " Nivel 9");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;





  cero.onInputOver.add(cero,this);
  cero.onInputOut.add(cerouno,this);
  
  uno.onInputOver.add(uno,this);
 uno.onInputOut.add(unouno,this);
  
  
  dos.onInputOver.add(dos,this);
  dos.onInputOut.add(dosuno,this);
  
  





}



function errornivelnueve(){

  erroruno = game.add.tileSprite(0, 0, 776, 570, 'erroruno');


  


  iniciajuego=game.add.button(game.world.centerX - 350, 365, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
  tratar=game.add.button(game.world.centerX - -100, 430, 'button',nivelnueve, this, 'tratard','tratar','tratar');




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
  
   text2 = game.add.text(650, 35, " Nivel 9/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  

  iniciojuego.onInputOver.add(iniciajuego,this);
  iniciojuego.onInputOut.add(iniciajuego1,this);
  tratar.onInputOver.add(tratar,this);
  tratar.onInputOut.add(tratard,this);
  
  
  
  
  
  
  

}



function correctonivel9(){
  correctodos=game.add.tileSprite(0,  0, 776, 570, 'correctouno');
  iniciajuego=game.add.button(game.world.centerX - 280, 360, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
  signivel=game.add.button(game.world.centerX - -80, 380, 'button',niveldiez, this, 'signiveld','signivel','signiveld');
  
  
  
  


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

 text2 = game.add.text(650, 35, " Nivel 9/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

  
  
  
  iniciojuego.onInputOver.add(iniciajuego,this);
  iniciojuego.onInputOut.add(iniciajuego1,this);
  signivel.onInputOver.add(signivel,this);
  signivel.onInputOut.add(signiveld,this);
  
  
  
  }
  










  

  function niveldiez(){
  
    fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


    image = game.add.image(110, 155, 'planetag2');
    image = game.add.image(190, 155, 'planetag2');
    image = game.add.image(270, 155, 'planetag2');
  
  
  
    image = game.add.image(415, 155, 'planetag2');
    image = game.add.image(495, 155, 'planetag2');
    image = game.add.image(575, 155, 'planetag2');
  
  
  
  
  
    cero=game.add.button(game.world.centerX - 280, 375, 'button',errorniveldiez, this, 'cerouno','cero','cerouno');
    uno=game.add.button(game.world.centerX - 60, 375, 'button',errorniveldiez, this, 'unouno','uno','unouno');
    dos=game.add.button(game.world.centerX -  -145, 375, 'button',correctonivel10, this, 'dosuno','dos','dosuno');
    
  
  
    text = game.add.text(game.world.centerX, 205," \n+\n=?");
    text.anchor.setTo(0.5);
  
    text.font = 'Showcard Gothic';
    text.fontSize = 43;
  
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
  
  
    text2 = game.add.text(55, 30, " Nivel 10");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 20;
  
  
  
  
  
    cero.onInputOver.add(cero,this);
    cero.onInputOut.add(cerouno,this);
    
    uno.onInputOver.add(uno,this);
   uno.onInputOut.add(unouno,this);
    
    
    dos.onInputOver.add(dos,this);
    dos.onInputOut.add(dosuno,this);
    
  
  }
  
  
  
  function errorniveldiez(){
  
    erroruno = game.add.tileSprite(0, 0, 776, 570, 'erroruno');
  
  
    
  
  
    iniciajuego=game.add.button(game.world.centerX - 350, 365, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
    tratar=game.add.button(game.world.centerX - -100, 430, 'button',niveldiez, this, 'tratard','tratar','tratar');
  
  


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

 text2 = game.add.text(650, 35, " Nivel 10/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

  
    iniciojuego.onInputOver.add(iniciajuego,this);
    iniciojuego.onInputOut.add(iniciajuego1,this);
    tratar.onInputOver.add(tratar,this);
    tratar.onInputOut.add(tratard,this);
    
    
    
    
    
    
    
  
  }
  
  
  
  function correctonivel10(){
    correctouno=game.add.tileSprite(0,  0, 776, 570, 'correctouno');
    iniciajuego=game.add.button(game.world.centerX - 350, 30, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
    signivel=game.add.button(game.world.centerX - -80, 380, 'button',nivel11, this, 'signivelmoradod','signievlmorado','signivelmoradod');
    
    
    
    


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

 text2 = game.add.text(650, 35, " Nivel 10/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

    
    
    
    iniciojuego.onInputOver.add(iniciajuego,this);
    iniciojuego.onInputOut.add(iniciajuego1,this);
    signivel.onInputOver.add(signievlmorado,this);
    signivel.onInputOut.add(signivelmoradod,this);
    
    
    
    }
    
  





    

    function nivel11(){

      fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


      image = game.add.image(110, 155, 'ovnig1');
      image = game.add.image(190, 155, 'ovnig1');
      image = game.add.image(270, 155, 'ovnig1');
    
    
    
      image = game.add.image(415, 155, 'ovnig1');
      image = game.add.image(495, 155, 'ovnig1');
      image = game.add.image(575, 155, 'ovnig1');
    
    
    
    
    
      cero=game.add.button(game.world.centerX - 280, 375, 'button',errornivel11, this, 'cerouno','cero','cerouno');
      uno=game.add.button(game.world.centerX - 60, 375, 'button',errornivel11, this, 'unouno','uno','unouno');
      dos=game.add.button(game.world.centerX -  -145, 375, 'button',correctonivel11, this, 'dosuno','dos','dosuno');
      
    
    
      text = game.add.text(game.world.centerX, 205, " \n+\n=?");
      text.anchor.setTo(0.5);
    
      text.font = 'Showcard Gothic';
      text.fontSize = 43;
    
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
    
    
      text2 = game.add.text(55, 30, " Nivel 11");
      text2.anchor.setTo(0.5);
    
      text2.font = 'Showcard Gothic';
      text2.fontSize = 20;
    
    
    
    
    
      cero.onInputOver.add(cero,this);
      cero.onInputOut.add(cerouno,this);
      
      uno.onInputOver.add(uno,this);
     uno.onInputOut.add(unouno,this);
      
      
      dos.onInputOver.add(dos,this);
      dos.onInputOut.add(dosuno,this);
      
    
    }
    
    
    
    
    function errornivel11(){
    
      erroruno = game.add.tileSprite(0, 0, 776, 570, 'erroruno');
    
    
      
    
    
      iniciajuego=game.add.button(game.world.centerX - 350, 365, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
      tratar=game.add.button(game.world.centerX - -100, 430, 'button',nivel11, this, 'tratard','tratar','tratar');
    
    


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

 text2 = game.add.text(650, 35, " Nivel 11/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

    
      iniciojuego.onInputOver.add(iniciajuego,this);
      iniciojuego.onInputOut.add(iniciajuego1,this);
      tratar.onInputOver.add(tratar,this);
      tratar.onInputOut.add(tratard,this);
      
      
      
      
      
      
      
    
    }
    
    
    
    
    function correctonivel11(){
      correctodos=game.add.tileSprite(0,  0, 776, 570, 'correctouno');
      iniciajuego=game.add.button(game.world.centerX - 280, 360, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
      signivel=game.add.button(game.world.centerX - -80, 380, 'button',nivel12, this, 'signiveld','signivel','signiveld');
      
      
      
      
      


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

 text2 = game.add.text(650, 35, " Nivel 11/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

      
      
      iniciojuego.onInputOver.add(iniciajuego,this);
      iniciojuego.onInputOut.add(iniciajuego1,this);
      signivel.onInputOver.add(signivel,this);
      signivel.onInputOut.add(signiveld,this);
      
      
      
      }
      




      





      function nivel12(){
        fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


      
      
        cero=game.add.button(game.world.centerX - 280, 375, 'button',errornivel12, this, 'cerouno','cero','cerouno');
        uno=game.add.button(game.world.centerX - 60, 375, 'button',errornivel12, this, 'unouno','uno','unouno');
        dos=game.add.button(game.world.centerX -  -145, 375, 'button',correctonivel12, this, 'dosuno','dos','dosuno');
        
      
      
        text = game.add.text(game.world.centerX, 205, "3 + 5 = ?");
        text.anchor.setTo(0.5);
      
        text.font = 'Showcard Gothic';
        text.fontSize = 43;
      
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
      
      
        text2 = game.add.text(55, 30, " Nivel 12");
        text2.anchor.setTo(0.5);
      
        text2.font = 'Showcard Gothic';
        text2.fontSize = 20;
      
      
      
      
      
        cero.onInputOver.add(cero,this);
        cero.onInputOut.add(cerouno,this);
        
        uno.onInputOver.add(uno,this);
       uno.onInputOut.add(unouno,this);
        
        
        dos.onInputOver.add(dos,this);
        dos.onInputOut.add(dosuno,this);
        
        
      
      
      
      
      
      }
      
      
      
      function errornivel12(){
      
        erroruno = game.add.tileSprite(0, 0, 776, 570, 'erroruno');
      
      
        
      
      
        iniciajuego=game.add.button(game.world.centerX - 350, 365, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
        tratar=game.add.button(game.world.centerX - -100, 430, 'button',nivel12, this, 'tratard','tratar','tratar');
      
      


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

 text2 = game.add.text(650, 35, " Nivel 12/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

      
        iniciojuego.onInputOver.add(iniciajuego,this);
        iniciojuego.onInputOut.add(iniciajuego1,this);
        tratar.onInputOver.add(tratar,this);
        tratar.onInputOut.add(tratard,this);
        
        
        
        
        
        
        
      
      }
      
      
      
      function correctonivel12(){
        correctodos=game.add.tileSprite(0,  0, 776, 570, 'correctouno');
        iniciajuego=game.add.button(game.world.centerX - 280, 360, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
        signivel=game.add.button(game.world.centerX - -80, 380, 'button',nivel13, this, 'signiveld','signivel','signiveld');
        
        
        
        


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

 text2 = game.add.text(650, 35, " Nivel 12/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

        
        
        
        iniciojuego.onInputOver.add(iniciajuego,this);
        iniciojuego.onInputOut.add(iniciajuego1,this);
        signivel.onInputOver.add(signivel,this);
        signivel.onInputOut.add(signiveld,this);
        
        
        
        }
        
      
      
      






        function nivel13(){
  
          
          fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


          image = game.add.image(110, 155, 'planetag1');
          image = game.add.image(190, 155, 'planetag1');
          image = game.add.image(270, 155, 'planetag1');
        
        
        
          image = game.add.image(415, 155, 'planetag1');
          image = game.add.image(495, 155, 'planetag1');
          image = game.add.image(575, 155, 'planetag1');
        
        
        
        
        
          cero=game.add.button(game.world.centerX - 280, 375, 'button',errornivel13, this, 'cerouno','cero','cerouno');
          uno=game.add.button(game.world.centerX - 60, 375, 'button',errornivel13, this, 'unouno','uno','unouno');
          dos=game.add.button(game.world.centerX -  -145, 375, 'button',correctonivel13, this, 'dosuno','dos','dosuno');
          
        
        
          text = game.add.text(game.world.centerX, 205," \n+\n=?");
          text.anchor.setTo(0.5);
        
          text.font = 'Showcard Gothic';
          text.fontSize = 43;
        
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
        
        
          text2 = game.add.text(55, 30, " Nivel 13");
          text2.anchor.setTo(0.5);
        
          text2.font = 'Showcard Gothic';
          text2.fontSize = 20;
        
        
        
        
        
          cero.onInputOver.add(cero,this);
          cero.onInputOut.add(cerouno,this);
          
          uno.onInputOver.add(uno,this);
         uno.onInputOut.add(unouno,this);
          
          
          dos.onInputOver.add(dos,this);
          dos.onInputOut.add(dosuno,this);
          
        
        
        
        }
        
        
        
        function errornivel13(){
        
          erroruno = game.add.tileSprite(0, 0, 776, 570, 'erroruno');
        
        
          
        
        
          iniciajuego=game.add.button(game.world.centerX - 350, 365, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
          tratar=game.add.button(game.world.centerX - -100, 430, 'button',nivel13, this, 'tratard','tratar','tratar');
        
        


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

 text2 = game.add.text(650, 35, " Nivel 13/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

        
          iniciojuego.onInputOver.add(iniciajuego,this);
          iniciojuego.onInputOut.add(iniciajuego1,this);
          tratar.onInputOver.add(tratar,this);
          tratar.onInputOut.add(tratard,this);
          
          
          
          
          
          
          
        
        }
        
        
        
        function correctonivel13(){
          correctouno=game.add.tileSprite(0,  0, 776, 570, 'correctouno');
          iniciajuego=game.add.button(game.world.centerX - 350, 30, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
          signivel=game.add.button(game.world.centerX - -80, 380, 'button',nivel14, this, 'signivelmoradod','signievlmorado','signivelmoradod');
          
          
          
          


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

 text2 = game.add.text(650, 35, " Nivel 13/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

          
          
          
          iniciojuego.onInputOver.add(iniciajuego,this);
          iniciojuego.onInputOut.add(iniciajuego1,this);
          signivel.onInputOver.add(signievlmorado,this);
          signivel.onInputOut.add(signivelmoradod,this);
          
          
          
          }
          
        






    

          function nivel14(){

            fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');


  image = game.add.image(110, 155, 'ovnig1');
  image = game.add.image(190, 155, 'ovnig1');
  image = game.add.image(270, 155, 'ovnig1');



  image = game.add.image(415, 155, 'ovnig1');
  image = game.add.image(495, 155, 'ovnig1');
  image = game.add.image(575, 155, 'ovnig1');





  cero=game.add.button(game.world.centerX - 280, 375, 'button',errornivel14, this, 'cerouno','cero','cerouno');
  uno=game.add.button(game.world.centerX - 60, 375, 'button',errornivel14, this, 'unouno','uno','unouno');
  dos=game.add.button(game.world.centerX -  -145, 375, 'button',correctonivel14, this, 'dosuno','dos','dosuno');
  


  text = game.add.text(game.world.centerX, 205, " \n+\n=?");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 43;

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


  text2 = game.add.text(55, 30, " Nivel 14");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;





  cero.onInputOver.add(cero,this);
  cero.onInputOut.add(cerouno,this);
  
  uno.onInputOver.add(uno,this);
 uno.onInputOut.add(unouno,this);
  
  
  dos.onInputOver.add(dos,this);
  dos.onInputOut.add(dosuno,this);
  
          
          }
          
          
          
          
          function errornivel14(){
          
            erroruno = game.add.tileSprite(0, 0, 776, 570, 'erroruno');
          
          
            
          
          
            iniciajuego=game.add.button(game.world.centerX - 350, 365, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
            tratar=game.add.button(game.world.centerX - -100, 430, 'button',nivel14, this, 'tratard','tratar','tratar');
          
          


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

 text2 = game.add.text(650, 35, " Nivel 14/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

          
            iniciojuego.onInputOver.add(iniciajuego,this);
            iniciojuego.onInputOut.add(iniciajuego1,this);
            tratar.onInputOver.add(tratar,this);
            tratar.onInputOut.add(tratard,this);
            
            
            
            
            
            
            
          
          }
          
          
          
          
          function correctonivel14(){
            correctodos=game.add.tileSprite(0,  0, 776, 570, 'correctouno');
            iniciajuego=game.add.button(game.world.centerX - 280, 360, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
            signivel=game.add.button(game.world.centerX - -80, 380, 'button',nivelquince, this, 'signiveld','signivel','signiveld');
            
            
            
            


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

 text2 = game.add.text(650, 35, " Nivel 14/15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 25;

            
            
            
            iniciojuego.onInputOver.add(iniciajuego,this);
            iniciojuego.onInputOut.add(iniciajuego1,this);
            signivel.onInputOver.add(signivel,this);
            signivel.onInputOut.add(signiveld,this);
            
            
            
            }
            
      
      

        



  

         

function nivelquince(){
  
  fondosumas = game.add.tileSprite(0, 0, 776, 570, 'background');






  cero=game.add.button(game.world.centerX - 280, 375, 'button',errornivelquince, this, 'cerouno','cero','cerouno');
  uno=game.add.button(game.world.centerX - 60, 375, 'button',errornivelquince, this, 'unouno','uno','unouno');
  dos=game.add.button(game.world.centerX -  -145, 375, 'button',ganaste, this, 'dosuno','dos','dosuno');
  


  text = game.add.text(game.world.centerX, 205, "3 + 5 = ?");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 43;

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


  text2 = game.add.text(55, 30, " Nivel 15");
  text2.anchor.setTo(0.5);

  text2.font = 'Showcard Gothic';
  text2.fontSize = 20;





  cero.onInputOver.add(cero,this);
  cero.onInputOut.add(cerouno,this);
  
  uno.onInputOver.add(uno,this);
 uno.onInputOut.add(unouno,this);
  
  
  dos.onInputOver.add(dos,this);
  dos.onInputOut.add(dosuno,this);
  



}



function errornivelquince(){

  erroruno = game.add.tileSprite(0, 0, 776, 570, 'erroruno');


  


  iniciajuego=game.add.button(game.world.centerX - 350, 365, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
  tratar=game.add.button(game.world.centerX - -100, 430, 'button',nivelquince, this, 'tratard','tratar','tratar');




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
  
   text2 = game.add.text(650, 35, " Nivel 15/15");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  

  iniciojuego.onInputOver.add(iniciajuego,this);
  iniciojuego.onInputOut.add(iniciajuego1,this);
  tratar.onInputOver.add(tratar,this);
  tratar.onInputOut.add(tratard,this);
  
  
  
  
  
  
  

}


    
    
    function ganaste(){
     
      ganaste = game.add.tileSprite(0, 0, 776, 570, 'ganaste');
    

  iniciajuego=game.add.button(game.world.centerX - 280, 365, 'button',niveluno, this, 'iniciajuego1','iniciajuego','iniciajuego1');
  
  
  text = game.add.text(game.world.centerX, 205, "¡Ganaste!\n Salvaste a los planetas");
  text.anchor.setTo(0.5);

  text.font = 'Showcard Gothic';
  text.fontSize = 43;

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





  text2 = game.add.text(650, 50,  " Nivel 15 / 15 \n ¡Felicidades!");
    text2.anchor.setTo(0.5);
  
    text2.font = 'Showcard Gothic';
    text2.fontSize = 25;
  
    
    
    
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

    
    
 
    
      iniciojuego.onInputOver.add(iniciajuego,this);
      iniciojuego.onInputOut.add(iniciajuego1,this);
      
      
      }
      
























































































































































































