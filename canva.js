var player_width=100+'px';
var player_height=100+'px';
var player= player(player_width,player_height)


function player(width,height){
	return'<img src=Rama.png width='+width+'height='+height+'>'
	
	
}
function tree(position,tree){
	position[0].style.backgroundImage=tree;
	position[1].style.backgroundImage=tree;
	position[2].style.backgroundImage=tree;
	position[3].style.backgroundImage=tree
	
}
function Garage(position,color){
	position[0].style.backgroundColor=color
	position[1].style.backgroundColor=color
	
	
	
}


function house(position,stylebg,door,doorSize){
	for(var i=5; i<=position.length;i++){
		position[i].style.backgroundColor=stylebg
		position[0].style.backgroundImage=door;
	   position[0].style.backgroundSize=doorSize
	   position[0].style.backgroundrepeat='no-repeat';
	   position[1].style.backgroundImage=door;
	   position[1].style.backgroundSize=doorSize;
	     position[2].style.backgroundImage=door;
	   position[2].style.backgroundSize=doorSize;
	   position[3].style.backgroundImage=door;
	   position[3].style.backgroundSize=doorSize
	   position[4].style.backgroundImage=door;
	   position[4].style.backgroundSize=doorSize
	}
}



function Toko(position,doorPos,wallstyle,doorobj){
	position[0].style.backgroundColor=wallstyle;
	position[1].style.backgroundColor=wallstyle;
	position[2].style.backgroundColor=wallstyle;
	doorPos[0].style.backgroundImage=doorobj;
	doorPos[1].style.backgroundImage=doorobj
	
	
	
}


function starGame(){
	document.getElementById("canvas").innerHTML=canvaGame(100+'px',100+'px','lightblue')
	document.getElementById('5,3').innerHTML=player
    document.getElementById('6,3').setAttribute('onclick','vec_63()')
	document.getElementById('4,3').setAttribute('onclick','vec_43()');
	document.getElementById('4,4').setAttribute('onclick','getIntoHouse()');
	document.getElementById('12,4').setAttribute('onclick','getInhouse1()');
	document.getElementById('10,4').setAttribute('onclick','getInhouse2()')
	document.getElementById('26,2').setAttribute('onclick','getInPrivate()')
	
	
	tree(
	[document.getElementById('7,3'),document.getElementById('8,3'),document.getElementById('17,3'),document.getElementById('18,3'),
	document.getElementById('29,3')],'url(pohon.png)'
	)
	Garage(
	[document.getElementById('0,3'),document.getElementById('1,3')],'lightgray'
	)
	
	Toko(
	 [document.getElementById('24,3'),document.getElementById('25,3'),document.getElementById('28,3')],
	 [document.getElementById('26,3'),document.getElementById('27,3')],'gray','url(door.jpg)'
	 
	 )
	
	 house([document.getElementById('4,3'),document.getElementById('10,3'),document.getElementById('12,3'),document.getElementById('15,3'),document.getElementById('20,3'),document.getElementById('5,3'),document.getElementById('6,3'),document.getElementById('3,3'),document.getElementById('2,3'),document.getElementById('4,4'),document.getElementById('5,4'),document.getElementById('6,4'),document.getElementById('3,4'),document.getElementById('2,4'),
	 document.getElementById('9,3'),document.getElementById('11,3'),document.getElementById('9,4'),document.getElementById('10,4'),document.getElementById('11,4'),
	 document.getElementById('13,3'),document.getElementById('14,3'),document.getElementById('12,4'),document.getElementById('20,3'),document.getElementById('13,4'),document.getElementById('15,4'),document.getElementById('14,4'),document.getElementById('16,3'),document.getElementById('16,4'),document.getElementById('19,3'),document.getElementById('20,4'),document.getElementById('19,4'),document.getElementById('21,3'),document.getElementById('21,4'),document.getElementById('22,4'),document.getElementById('22,3')
	 ],'whitesmoke','url(door.jpg)','100px 100px')
	 
	 
	 
	 
}



starGame()

function canvaGame(WIDTH,HEIGHT,BGSTYLE){
	return'<table border=0 style=background-color:'+BGSTYLE+'>'+
	'<tr>'+
	'<td id=0,9 style=width:'+WIDTH+';height:'+HEIGHT+
	'></td><td id=1,9 style=width:'+WIDTH+'></td><td id=2,9 style=width:'+WIDTH+
	'></td><td id=3,9 style=width:'+WIDTH+'></td><td id=4,9  style=width:'+WIDTH+'><td id=5,9 style=width:'
	+WIDTH+'></td><td id=6,9 style=width:'+WIDTH+
	'></td><td id=7,9 style=width:'+WIDTH+'></td><td id=8,9 style=width:'+WIDTH+'></td><td id=9,9 style=width:'+WIDTH+'></td><td id=10,9 style=width:'+WIDTH+
	'></td>'+'<td id=11,9 style=width:'+WIDTH+'></td><td id=12,9 style=width:'+WIDTH+'></td>'+
	'<td id=13,9 style=width:'+WIDTH+';height:'+HEIGHT+
	'></td><td id=14,9 style=width:'+WIDTH+'></td><td id=15,9 style=width:'+WIDTH+
	'></td><td id=16,9 style=width:'+WIDTH+'></td><td id=17,9  style=width:'+WIDTH+'><td id=18,9 style=width:'
	+WIDTH+'></td><td id=19,9 style=width:'+WIDTH+
	'></td><td id=20,9 style=width:'+WIDTH+'></td><td id=21,9 style=width:'+WIDTH+'></td><td id=22,9 style=width:'+WIDTH+'></td><td id=23,9 style=width:'+WIDTH+
	'></td>'+'<td id=24,9 style=width:'+WIDTH+'></td><td id=25,9 style=width:'+WIDTH+'></td>'+

	'</tr>'+
	'<tr>'+
	'<td id=0,8 style=width:'+WIDTH+';height:'+HEIGHT+
	'></td><td id=1,8 style=width:'+WIDTH+'></td><td id=2,8 style=width:'+WIDTH+
	'></td><td id=3,8 style=width:'+WIDTH+'></td><td id=4,8  style=width:'+WIDTH+'><td id=5,8 style=width:'
	+WIDTH+'></td><td id=6,8 style=width:'+WIDTH+
	'></td><td id=7,8 style=width:'+WIDTH+'></td><td id=8,8 style=width:'+WIDTH+'></td><td id=9,8 style=width:'+WIDTH+'></td><td id=10,8 style=width:'+WIDTH+
	'></td>'+'<td id=11,8 style=width:'+WIDTH+'></td><td id=12,8 style=width:'+WIDTH+'></td>'+
	'<td id=13,8 style=width:'+WIDTH+';height:'+HEIGHT+
	'></td><td id=14,8 style=width:'+WIDTH+'></td><td id=15,8 style=width:'+WIDTH+
	'></td><td id=16,8 style=width:'+WIDTH+'></td><td id=17,8  style=width:'+WIDTH+'><td id=18,8 style=width:'
	+WIDTH+'></td><td id=19,8 style=width:'+WIDTH+
	'></td><td id=20,8 style=width:'+WIDTH+'></td><td id=21,8 style=width:'+WIDTH+'></td><td id=22,8 style=width:'+WIDTH+'></td><td id=23,8 style=width:'+WIDTH+
	'></td>'+'<td id=24,8 style=width:'+WIDTH+'></td><td id=25,8 style=width:'+WIDTH+'></td>'+
	'</tr>'+
	'<tr>'+
	'<td id=0,7 style=width:'+WIDTH+';height:'+HEIGHT+
	'></td><td id=1,7 style=width:'+WIDTH+'></td><td id=2,7 style=width:'+WIDTH+
	'></td><td id=3,7 style=width:'+WIDTH+'></td><td id=4,7  style=width:'+WIDTH+'><td id=5,7 style=width:'
	+WIDTH+'></td><td id=6,7 style=width:'+WIDTH+
	'></td><td id=7,7 style=width:'+WIDTH+'></td><td id=8,7 style=width:'+WIDTH+'></td><td id=9,7 style=width:'+WIDTH+'></td><td id=10,7 style=width:'+WIDTH+
	'></td>'+'<td id=11,7 style=width:'+WIDTH+'></td><td id=12,7 style=width:'+WIDTH+'></td>'+
	'<td id=13,7 style=width:'+WIDTH+';height:'+HEIGHT+
	'></td><td id=14,7 style=width:'+WIDTH+'></td><td id=15,7 style=width:'+WIDTH+
	'></td><td id=16,7 style=width:'+WIDTH+'></td><td id=17,7  style=width:'+WIDTH+'><td id=18,7 style=width:'
	+WIDTH+'></td><td id=19,7 style=width:'+WIDTH+
	'></td><td id=20,7 style=width:'+WIDTH+'></td><td id=21,7 style=width:'+WIDTH+'></td><td id=22,7 style=width:'+WIDTH+'></td><td id=23,7 style=width:'+WIDTH+
	'></td>'+'<td id=24,7 style=width:'+WIDTH+'></td><td id=25,7 style=width:'+WIDTH+'></td>'+

	'</tr>'+
	'<tr>'+
	'<td id=0,6 style=width:'+WIDTH+';height:'+HEIGHT+
	'></td><td id=1,6 style=width:'+WIDTH+'></td><td id=2,6 style=width:'+WIDTH+
	'></td><td id=3,6 style=width:'+WIDTH+'></td><td id=4,6  style=width:'+WIDTH+'><td id=5,6 style=width:'
	+WIDTH+'></td><td id=6,6 style=width:'+WIDTH+
	'></td><td id=7,6 style=width:'+WIDTH+'></td><td id=8,6 style=width:'+WIDTH+'></td><td id=9,6 style=width:'+WIDTH+'></td><td id=10,6 style=width:'+WIDTH+
	'></td>'+'<td id=11,6 style=width:'+WIDTH+'></td><td id=12,6 style=width:'+WIDTH+'></td>'+
	'<td id=13,6 style=width:'+WIDTH+';height:'+HEIGHT+
	'></td><td id=14,6 style=width:'+WIDTH+'></td><td id=15,6 style=width:'+WIDTH+
	'></td><td id=16,6 style=width:'+WIDTH+'></td><td id=17,6  style=width:'+WIDTH+'><td id=18,6 style=width:'
	+WIDTH+'></td><td id=19,6 style=width:'+WIDTH+
	'></td><td id=20,6 style=width:'+WIDTH+'></td><td id=21,6 style=width:'+WIDTH+'></td><td id=22,6 style=width:'+WIDTH+'></td><td id=23,6 style=width:'+WIDTH+
	'></td>'+'<td id=24,6 style=width:'+WIDTH+'></td><td id=25,6 style=width:'+WIDTH+'></td>'+

	'</tr>'+
	'<tr>'+
	'<td id=0,5 style=width:'+WIDTH+';height:'+HEIGHT+
	'></td><td id=1,5 style=width:'+WIDTH+'></td><td id=2,5 style=width:'+WIDTH+
	'></td><td id=3,5 style=width:'+WIDTH+'></td><td id=4,5  style=width:'+WIDTH+'><td id=5,5 style=width:'
	+WIDTH+'></td><td id=6,5 style=width:'+WIDTH+
	'></td><td id=7,5 style=width:'+WIDTH+'></td><td id=8,5 style=width:'+WIDTH+'></td><td id=9,5 style=width:'+WIDTH+'></td><td id=10,5 style=width:'+WIDTH+
	'></td>'+'<td id=11,5 style=width:'+WIDTH+'></td><td id=12,5 style=width:'+WIDTH+'></td>'+
	'<td id=13,5 style=width:'+WIDTH+';height:'+HEIGHT+
	'></td><td id=14,5 style=width:'+WIDTH+'></td><td id=15,5 style=width:'+WIDTH+
	'></td><td id=16,5 style=width:'+WIDTH+'></td><td id=17,5  style=width:'+WIDTH+'><td id=18,5 style=width:'
	+WIDTH+'></td><td id=19,5 style=width:'+WIDTH+
	'></td><td id=20,5 style=width:'+WIDTH+'></td><td id=21,5 style=width:'+WIDTH+'></td><td id=22,5 style=width:'+WIDTH+'></td><td id=23,5 style=width:'+WIDTH+
	'></td>'+'<td id=24,5 style=width:'+WIDTH+'></td><td id=25,5 style=width:'+WIDTH+'></td>'+

	'</tr>'+
	'<tr>'+
	'<td id=0,4 style=width:'+WIDTH+';height:'+HEIGHT+
	'></td><td id=1,4 style=width:'+WIDTH+'></td><td id=2,4 style=width:'+WIDTH+
	'></td><td id=3,4 style=width:'+WIDTH+'></td><td id=4,4  style=width:'+WIDTH+'><td id=5,4 style=width:'
	+WIDTH+'></td><td id=6,4 style=width:'+WIDTH+
	'></td><td id=7,4 style=width:'+WIDTH+'></td><td id=8,4 style=width:'+WIDTH+'></td><td id=9,4 style=width:'+WIDTH+'></td><td id=10,4 style=width:'+WIDTH+
	'></td>'+'<td id=11,4 style=width:'+WIDTH+'></td><td id=12,4 style=width:'+WIDTH+'></td>'+
	'<td id=13,4 style=width:'+WIDTH+';height:'+HEIGHT+
	'></td><td id=14,4 style=width:'+WIDTH+'></td><td id=15,4 style=width:'+WIDTH+
	'></td><td id=16,4 style=width:'+WIDTH+'></td><td id=17,4  style=width:'+WIDTH+'><td id=18,4 style=width:'
	+WIDTH+'></td><td id=19,4 style=width:'+WIDTH+
	'></td><td id=20,4 style=width:'+WIDTH+'></td><td id=21,4 style=width:'+WIDTH+'></td><td id=22,4 style=width:'+WIDTH+'></td><td id=23,4 style=width:'+WIDTH+
	'></td>'+'<td id=24,4 style=width:'+WIDTH+'></td><td id=25,4 style=width:'+WIDTH+'></td>'+

	'</tr>'+
	'<tr>'+
	'<td id=0,3 style=width:'+WIDTH+';height:'+HEIGHT+
	'></td><td id=1,3 style=width:'+WIDTH+'></td><td id=2,3 style=width:'+WIDTH+
	'></td><td id=3,3 style=width:'+WIDTH+'></td><td id=4,3  style=width:'+WIDTH+'><td id=5,3 style=width:'
	+WIDTH+'></td><td id=6,3 style=width:'+WIDTH+
	'></td><td id=7,3 style=width:'+WIDTH+'></td><td id=8,3 style=width:'+WIDTH+'></td><td id=9,3 style=width:'+WIDTH+'></td><td id=10,3 style=width:'+WIDTH+
	'></td>'+'<td id=11,3 style=width:'+WIDTH+'></td><td id=12,3 style=width:'+WIDTH+'></td>'+
	'<td id=13,3 style=width:'+WIDTH+';height:'+HEIGHT+
	'></td><td id=14,3 style=width:'+WIDTH+'></td><td id=15,3 style=width:'+WIDTH+
	'></td><td id=16,3 style=width:'+WIDTH+'></td><td id=17,3  style=width:'+WIDTH+'><td id=18,3 style=width:'
	+WIDTH+'></td><td id=19,3 style=width:'+WIDTH+
	'></td><td id=20,3 style=width:'+WIDTH+'></td><td id=21,3 style=width:'+WIDTH+'></td><td id=22,3 style=width:'+WIDTH+'></td><td id=23,3 style=width:'+WIDTH+
	'></td>'+'<td id=24,3 style=width:'+WIDTH+'></td><td id=25,3 style=width:'+WIDTH+'></td>'+
	'<td id=26,3 style=width:'+WIDTH+
	'></td><td id=27,3 style=width:'+WIDTH+'></td><td id=28,3 style=width:'+WIDTH+'></td><td id=29,3 style=width:'+WIDTH+'></td>'+'<td id=30,3 style=width:'+WIDTH+'></td><td id=31,3 style=width:'+WIDTH+'></td>'+

	'</tr>'+
	'<tr>'+
	'<td id=0,2 style=width:'+WIDTH+';height:'+HEIGHT+
	'>'+soil()+'</td><td id=1,2 style=width:'+WIDTH+'>'+soil()+'</td><td id=2,2 style=width:'+WIDTH+
	'>'+soil()+'</td><td id=3,2 style=width:'+WIDTH+'>'+soil()+'</td><td id=4,2  style=width:'+WIDTH+'>'+soil()+'<td id=5,2 style=width:'
	+WIDTH+'>'+soil()+'</td><td id=6,2 style=width:'+WIDTH+
	'>'+soil()+'</td><td id=7,2 style=width:'+WIDTH+'>'+soil()+'</td><td id=8,2 style=width:'+WIDTH+'>'+soil()+'</td><td id=9,2 style=width:'+WIDTH+'>'+soil()+'</td><td id=10,2 style=width:'+WIDTH+
	'>'+soil()+'</td>'+'<td id=11,2 style=width:'+WIDTH+'>'+soil()+'</td><td id=12,2 style=width:'+WIDTH+'>'+soil()+'</td>'+
	'<td id=13,2 style=width:'+WIDTH+';height:'+HEIGHT+
	'>'+soil()+'</td><td id=14,2 style=width:'+WIDTH+'>'+soil()+'</td><td id=15,2 style=width:'+WIDTH+
	'>'+soil()+'</td><td id=16,2 style=width:'+WIDTH+'>'+soil()+'</td><td id=17,2  style=width:'+WIDTH+'>'+soil()+'<td id=18,2 style=width:'
	+WIDTH+'>'+soil()+'</td><td id=19,2 style=width:'+WIDTH+
	'>'+soil()+'</td><td id=20,2 style=width:'+WIDTH+'>'+soil()+'</td><td id=21,2 style=width:'+WIDTH+'>'+soil()+'</td><td id=22,2 style=width:'+WIDTH+'>'+soil()+'</td><td id=23,2 style=width:'+WIDTH+
	'>'+soil()+'</td>'+'<td id=24,2 style=width:'+WIDTH+'>'+soil()+'</td><td id=25,2 style=width:'+WIDTH+'>'+soil()+'</td>'+
	'<td id=26,2 style=width:'+WIDTH+
	'>'+soil()+'</td><td id=27,2 style=width:'+WIDTH+'>'+soil()+'</td><td id=28,2 style=width:'+WIDTH+'>'+soil()+'</td><td id=29,2 style=width:'+WIDTH+'>'+soil()+'</td>'+'<td id=30,2 style=width:'+WIDTH+'>'+soil()+'</td><td id=31,2 style=width:'+WIDTH+'>'+soil()+'</td>'+
	'</tr>'+
	'</table>'
	
	
}	
	
	function soil(){
		return'<img src=soil.png width+100px height=100px>'
	}





