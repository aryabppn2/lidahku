
const get_player=document.getElementById('player');
const npc={
	orang:document.getElementById('orang-lewat')
}



document.addEventListener('keydown',function(event){
	const key=String.fromCharCode(event.keyCode);
   if(key=="D"){
   	get_player.style.left=(get_player.offsetLeft +=10) +"px";
	get_player.style.duration=3000
   }
   else if(key=="A"){
   	get_player.style.left=(get_player.offsetLeft -=10) +"px";
		get_player.style.duration=3000
   }
   else if(key=="S"){
   	get_player.style.top=(get_player.offsetTop +=10) +"px";
	get_player.style.duration=3000
   }
   else if(key=="W"){
   	get_player.style.top=(get_player.offsetTop -=10) +"px";
		get_player.style.duration=3000
   }

})




document.addEventListener('keyup',function(event){
     get_player.style.animationPlayState="paused"
})



npc.orang.animate(
[
{transform:`translateX(${700}px)`},
{transform:`translateX(${800}px)`},
{transform:`translateX(${700}px)`},
{transform:`translateX(${700-200}px)`},
{transform:`translateX(${700}px)`}


],
{
	iterations:Infinity,
	duration:3000
}




	)