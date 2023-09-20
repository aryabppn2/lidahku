var orang_width=100+'px';
var orang_height=100+'px';
var orang=orang(orang_width,orang_height)
var tetangga=tetangga(orang_width,orang_height)
var tetangga1= tetangga1(orang_width,orang_height)


document.getElementById('10,3').innerHTML=orang


function NpcAnimation(Xmove,moveX,Character){
	Xmove.innerHTML=null;
	moveX.innerHTML=Character
}

function orang(width,height){
	return'<img src=orangrumah.png width='+width+'height='+height+'>'
	
}
function tetangga(width,height){
	return'<img src=others.png width='+width+'height='+height+'>'
}
function tetangga1(width,height){
	return'<img src=others.png width='+width+' height='+height+'>'
}


NpcMove()

function NpcMove(){
	var vec=[document.getElementById('10,3'),document.getElementById('11,3')];
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang)
		Npc1()
	},1000)
}

function Npc1(){
	var vec=[document.getElementById('11,3'),document.getElementById('12,3')];
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang)
		Npc2(1000)
	},2000)
}
function Npc2(time){
	var vec=[document.getElementById('12,3'),document.getElementById('13,3')];
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang)
		document.getElementById('19,3').innerHTML=tetangga1
	  Npc3(1000)
	},time)
}

function Npc3(time){
	var vec=[document.getElementById('13,3'),document.getElementById(13+1+',3')];
	var vec2=[document.getElementById('19,3'),document.getElementById(19+1+',3')]
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang);
		NpcAnimation(vec2[0],vec2[1],tetangga1);
		Npc4(1000)
	},time)
}

function Npc4(time){
	var vec=[document.getElementById('14,3'),document.getElementById(14+1+',3')]
	var vec2=[document.getElementById('20,3'),document.getElementById(20+1+',3')]
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang);
		NpcAnimation(vec2[0],vec2[1],tetangga1);
		Npc5(1000)
	},time)
}
function Npc5(time){
	var vec=[document.getElementById('15,3'),document.getElementById(15+1+',3')];
	var vec2=[document.getElementById('21,3'),document.getElementById(21-1+',3')]
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang)
		NpcAnimation(vec2[0],vec2[1],tetangga1)
		Npc6(1000)
	},time)
}

function Npc6(time){
	var vec=[document.getElementById(16+',3'),document.getElementById(16+1+',3')];
	var vec2=[document.getElementById('20,3'),document.getElementById(20-1+',3')]
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang)
		NpcAnimation(vec2[0],vec2[1],tetangga1)
		Npc7(1000)
	},2000)
}
function Npc7(time){
	var vec=[document.getElementById(17+',3'),document.getElementById(17+1+',3')];
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang)
	  Npc8(1000)
	},time)
}

function Npc8(time){
	var vec=[document.getElementById(18+',3'),document.getElementById(18+1+',3')];
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang);
		document.getElementById('14,3').innerHTML=tetangga
		Npc9(1000)
	},time)
}

function Npc9(time){
	var vec=[document.getElementById(19+',3'),document.getElementById(19+1+',3')]
	var vec1=[document.getElementById('14,3'),document.getElementById(14+1+',3')]
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang);
		NpcAnimation(vec1[0],vec1[1],tetangga)
		Npc10(1000)
	},time)
}

function Npc10(time){
	var vec=[document.getElementById(20+',3'),document.getElementById(20-1+',3')];
	var vec1=[document.getElementById('15,3'),document.getElementById(15+1+',3')];
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang)
		NpcAnimation(vec1[0],vec1[1],tetangga)
		Npc11(1000)
	},time)
}

function Npc11(time){
	var vec=[document.getElementById('19,3'),document.getElementById(19-1+',3')];
	var vec1=[document.getElementById('16,3'),document.getElementById(16+1+',3')];
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang)
		NpcAnimation(vec1[0],vec1[1],tetangga);
		Npc12(1000)
	},2000)
}
function Npc12(time){
	var vec=[document.getElementById('18,3'),document.getElementById(18-1+',3')];
	var vec1=[document.getElementById('17,3'),document.getElementById(17+1+',3')];
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang)
		NpcAnimation(vec1[0],vec1[1],tetangga)
	  Npc13(1000)
	},time)
}

function Npc13(time){
	var vec=[document.getElementById('17,3'),document.getElementById(17-1+',3')];
	var vec1=[document.getElementById('18,3'),document.getElementById(18+1+',3')];
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang);
		NpcAnimation(vec1[0],vec1[1],tetangga)
		Npc14(1000)
	},time)
}

function Npc14(time){
	var vec=[document.getElementById('16,3'),document.getElementById(16-1+',3')]
	var vec1=[document.getElementById('19,3'),document.getElementById(19+1+',3')]
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang);
		NpcAnimation(vec1[0],vec1[1],tetangga)
		Npc15(1000)
	},time)
}

function Npc15(time){
	var vec=[document.getElementById('15,3'),document.getElementById(15-1+',3')];
	var vec1=[document.getElementById('20,3'),document.getElementById(20-1+',3')]
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang)
		NpcAnimation(vec1[0],vec1[1],tetangga);
		Npc16(1000)
	},time)
	
}
function Npc16(time){
	var vec=[document.getElementById('14,3'),document.getElementById(14-1+',3')]
	var vec1=[document.getElementById('19,3'),document.getElementById(19-1+',3')]
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang);
		NpcAnimation(vec1[0],vec1[1],tetangga);
		Npc17(1000)
	},time)
}

function Npc17(time){
	var vec=[document.getElementById('13,3'),document.getElementById(13-1+',3')]
	var vec1=[document.getElementById('18,3'),document.getElementById(18-1+',3')]
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang)
		NpcAnimation(vec1[0],vec1[1],tetangga)
		Npc18(1000)
	},time)
}

function Npc18(time){
	var vec=[document.getElementById('12,3'),document.getElementById(12-1+',3')]
	var vec1=[document.getElementById('17,3'),document.getElementById(17-1+',3')]
    setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang)
		NpcAnimation(vec1[0],vec1[1],tetangga)
		Npc19(1000)
	},time)
}

function Npc19(time){
	var vec=[document.getElementById('11,3'),document.getElementById(11-1+',3')]
    var vec1=[document.getElementById('16,3'),document.getElementById(16-1+',3')]
	setTimeout(function(){
		NpcAnimation(vec[0],vec[1],orang);
		NpcAnimation(vec1[0],vec1[1],tetangga)
		NpcMove()
	},time)
}
