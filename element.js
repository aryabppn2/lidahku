function fillSky(w,h){
	const sky=document.createElement('div');
	canvas.appendChild(sky);
	sky.style.width=w;
	sky.style.height=h
}

function house_fill(house,w,h){
	const obj=document.createElement('img');
	canvas.appendChild(obj);

    obj.setAttribute('src',house)


   obj.style.width=w;
   obj.style.height=h;


}



function garden(g,w,h){
	const garden=document.createElement('img')
	canvas.appendChild(garden);

	garden.style.width=w;
	garden.style.height=h;
	garden.setAttribute('src',g)
}

function fillSoil(soil,w,h){
	const this_soil=document.createElement('div');
    const player= document.createElement('img');
    const npc={
    	orang:document.createElement('img')
    }

	canvas.appendChild(this_soil);
	this_soil.appendChild(player);
	this_soil.appendChild(npc.orang)

    this_soil.style.height=h
	this_soil.style.width=w;
   this_soil.style.backgroundImage='url('+soil+')';
	

    npc.orang.style.width=38+'px';
    npc.orang.style.height=98+"px";
   
 

    player.style.width=38+'px';
	player.style.height=100+'px';
	player.style.left=100;
	player.style.top=370;
    player.style.position="absolute";
	player.setAttribute('src','element/player.png');
    player.setAttribute('id','player');

	npc.orang.style.width=38+'px';
    npc.orang.style.height=98+"px";
    npc.orang.setAttribute("src","element/orang.png");
    npc.orang.setAttribute('id','orang-lewat')

}