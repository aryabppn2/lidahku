const canvas=document.getElementById('canvas');


canvas.style.backgroundColor='lightblue';

var w=1270+'px';

fillSky(w,250+'px');


house_fill('element/house.png',w-780+'px',200+'px');
garden('element/garden.png',440+'px',200+'px');

fillSoil('element/soil.png',w,350+'px');




