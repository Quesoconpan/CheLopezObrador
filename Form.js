class Form{
constructor(){

this.input=createInput("nombre");
this.button=createButton("play");
this.greeting=createElement("h3");

}

hide(){
this.input.hide();
this.button.hide();
this.greeting.hide();
}

display(){

var title=createElement("h2");
title.html("juego de carrearas 2077");
title.position(130,0);

this.input.position(130,60);
this.button.position(250,200);

this.button.mousePressed(function(){

player.name=this.input.value();
playerCount=+1;
player.index=playerCount;
player.update();
player.updateCount(playerCount)

this.greeting.html("hola"+name);
this.greeting.position(130,160)

})

}

}
