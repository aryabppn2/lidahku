function getIntoHouse(){
   document.getElementById('4,3').innerHTML=null;
   document.getElementById('8,4').setAttribute('onclick','intoRoom()')
   document.getElementById('0,3').innerHTML=player
   document.getElementById('0,4').setAttribute('onclick','starGame()')
   document.getElementById('1,2').setAttribute('onclick','sitdown()')
   document.getElementById('3,2').setAttribute('onclick','sitdown1()');
   
   Vec_03()
   HouseInterior(
   [document.getElementById('1,3'),document.getElementById('2,3'),document.getElementById('3,3'),document.getElementById('4,3')],'url(kursi.png)','100px 100px','url(meja.png)','url(aquarium.png)'
    ,[document.getElementById('5,3'),document.getElementById('8,3')],'url(door.jpg)',
    [document.getElementById('6,3'),document.getElementById('7,3')],'url(ruangtengah.png)',
    [document.getElementById('10,3'),document.getElementById('9,3')],'url(kompor.png)','url(kulkas.png)',
    [document.getElementById('12,3'),document.getElementById('13,3')],'url(lemari.png)',
	document.getElementById('11,3'),'url(wasapel.png)'
   	)
 


}



function sitdown(){
	var vecy=[document.getElementById('1,3'),document.getElementById('1,2')]
	setTimeout(function(){
		sitDownAnimation(vecy[0])
		vecy[1].setAttribute('onclick','stand()')
		document.getElementById('1,4').setAttribute('onclick','call_()')
	},1000/2)
	
	
}
function stand(){
	var yvec=[document.getElementById('1,3'),document.getElementById('1,2')]
	setTimeout(function(){
		standUpAnimation(yvec[0])
		yvec[1].setAttribute('onclick','sitdown()')
	},1000+500)
}

function sitdown1(){
	var vecy=[document.getElementById('3,3'),document.getElementById('3,2')]
	setTimeout(function(){
		sitDownAnimation(vecy[0]);
		vecy[1].setAttribute('onclick','stand1()')
	},1000/2)
}
function stand1(){
	var yvec=[document.getElementById('3,3'),document.getElementById('3,2')];
	setTimeout(function(){
		standUpAnimation(yvec[0])
		yvec[1].setAttribute('onclick','sitdown()')
	},1000)
}





function HouseInterior(position,kursi,size,meja,aquarium,position1,door,position2,ruangtengah,position3,kompor,kulkas,position4,lemari,wasapelpos,obj){
	position[0].style.backgroundImage=kursi;
	position[0].style.backgroundSize=size;
	position[1].style.backgroundImage=meja;
	position[1].style.backgroundSize=size
    position[2].style.backgroundImage=kursi;
	position[2].style.backgroundSize=size;	
   position[3].style.backgroundImage=aquarium
   position[3].style.backgroundSize=size;
   
    position1[0].style.backgroundImage= door;
    position1[0].style.backgroundSize=size;
    position1[1].style.backgroundImage=door
    position1[1].style.backgroundSize=size;
   position2[0].style.backgroundImage=ruangtengah;
   position2[0].style.backgroundSize=size;
   position2[1].style.backgroundImage=meja;
   position2[1].style.backgroundSize=size;
   position3[0].style.backgroundImage=kompor;
   position3[0].style.backgroundSize=size;
   position3[1].style.backgroundImage=kulkas;
   position3[1].style.backgroundSize=size;
   position4[0].style.backgroundImage=lemari;
   position4[0].style.backgroundSize=size;
   position4[1].style.backgroundImage=meja;
   position4[1].style.backgroundSize=size;
   wasapelpos.style.backgroundImage=obj;
   wasapelpos.style.backgroundSize='100px 100px'
   
    
}


function getOutRoom(){
   getIntoHouse()
   document.getElementById('0,3').innerHTML=null

}


function intoRoom(){
   document.getElementById('8,4').setAttribute('onclick','getOutRoom()')
   roomInterior(
    [document.getElementById('9,3'),document.getElementById('10,3')],
    'url(lemari.png)','100px 100px'
      )
}

function roomInterior(position,table,tableSize){
   
   for(var i=0; i<=position.length; i++){
      position[i].style.backgroundImage=table;
      position[i].style.backgroundSize=tableSize;
   }
}



function getInhouse1(){
	document.getElementById(12-3+',4').setAttribute('onclick','getOuthouse1()')
	document.getElementById(12-3+',3').innerHTML=player;
	document.getElementById('12,3').innerHTML=null
	house1roomInterior(
	[document.getElementById('9,3'),document.getElementById('10,3'),document.getElementById('11,3'),document.getElementById('12,3')],'url(kursi.png)','url(door.jpg)','url(kompor.png)','100px 100px'
	)
}



function house1roomInterior(position,kursi,door,kompor,size){
	position[0].style.backgroundImage=kursi;
	position[0].style.backgroundSize=size;
	position[1].style.backgroundImage=door;
	position[1].style.backgroundSize=size;
	position[2].style.backgroundImage=door;
	position[2].style.backgroundSize=size;
	position[3].style.backgroundImage=kompor
	position[3].style.backgroundSize=size;
	
}


function getOuthouse1(){
	  house1out(
	  [document.getElementById('12,3'),document.getElementById(12-3+','+3),document.getElementById(12-1+','+3)],
	  null,'url(door.jpg)'
	  )
}

function house1out(position,stylenull,door){
	for(var i=1;i<=position.length; i++){
		position[i].style.backgroundImage=stylenull;
		position[1].innerHTML=null
		position[0].style.backgroundImage=door;
		position[0].style.backgroundSize=100+'px'+100+'px';
		position[0].innerHTML=player
		
	}
}


function call_(){
	
	
	
	const opsi=confirm(' 2 orang/ satu')
if(opsi==true){
	call_duaOrang()
}
else{
	call_satuOrang()
}

}