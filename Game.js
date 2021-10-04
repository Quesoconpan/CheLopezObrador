class Game{
constructor(){}
gameState(){

var gameStateRef=database.ref('GameState');
gameStateRef.on("value",function(data){
gameState=data.val();
})

}

update(){
datebase.ref("/").update({
gameState:state
})

}

start(){
if(gameState===0){
Player1=new Player();
Player1.getCount();
Form1=new Form();
Form1.display();
}

}

play(){
Form1.hide();
textSize(30);
text("Game Start",120,110);
Player.getPlayerInfo();

if(AllPlayers!==undefined){
var displayPosition=130;
displayPosition+=20;
textSize=15;
text(AllPlayers[plr].name +":"+AllPlayers[plr].distance,120,displayPosition);
}

}

if(keyIsDown(UP_ARROW)&& player.index!==null){
player.distance+=50;
player.update
}

}
