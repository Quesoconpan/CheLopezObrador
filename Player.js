class Player {
consturctor(){
this.index=null;
this.distance=0;
this.name=null; 
}
getCount(){
var playerCountRef=database.ref("PlayerCount")
playerCountRef.on("value",function(data){
playerCount=data.val();
})

}
updateCount(count){
database.ref("/").update({playerCount:count})

}
update(){
var PlayerIndex="jugador"+playerCount
database.ref(PlayerIndex).set({Nombre:name,distance:this.distance})

}

static getPlayerInfo(){
var playerInfoRef=database.ref("players");
playerInfoRef.on("value",(data)=>{AllPlayers=data.val()});

}

}