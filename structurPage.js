function logiageStructure(){
    return'<h2 style=color:aqua>login sekarang</h2> '+
'<input type=text id=input-useraddress class=input-text-loggin placeholder=username><br>'+
'<input type=text id=input-user-pass class=pass-container placeholder=password><br>'+
'<textarea id=input-address class=input-add-container placeholder=alamat-rumah></textarea><br>'+
'<button onclick=Registered_account() class=btn-upload>daftar</button>'
}


function connect_loginPage(){
    document.getElementById('data-input').innerHTML=logiageStructure()
    
}

function structure_accountHeader(ADDRESS,PASS,Address){
    return'<fieldset id=data-field>'+
'<legend  id=useraddress-output onclick=setting_account()>'+ADDRESS+'</legend>'+
'<input type=color id=input-sign-color onclick=runStylecol()><input type=color id=input-borderColor onclick=runBorderColor()><br><br>'+
'<select class=account-bar id=user-data>'+
'<option>'+ADDRESS+'Pmail.com</option>'+
'<option id=user-pass>'+PASS+'</option>'+
'<option id=user-address>'+Address+'</option>'+
'</select>'+
'<select id=visitor-data class=account-bar>'+
'<option>pembeli</option>'+
'</select><button onclick=openPmail() class=open>buka</button><br>'+
'<select id=money-list class=money-container>'+
'<option style=color:aqua id=money-data>0</option>'+
'<option style=color:lightgreen id=money-in>0</option>'+
'<option style=color:red id=money-out>0</option>'+
'</select>'+
'<button onclick=connect_toAddNews() style=color:aqua;background-color:orange class=private-menu>ngomong</button>'+
'<button onclick=connect_toMarketPage() style=color:blue;background-color:whitesmoke  class=private-menu>market</button>'+
'<div id=uploader-database class=dat-private></div>'+    
'<div>'+

'</fieldset>'
    
}



function structure_settAcount(username,pass){
    return'<fieldset style=border-color:blue>'+
'<fieldset style=boder-color:lightblue;color:aqua onclick=settinguseraddress() class=sett-account id=sett-address>'+username+'</fieldset><br>'+
'<fieldset style=border-color:orange;color:lightgray id=set-pass onclick=setPass()>'+pass+'</fieldset><br>'+
'<button onclick=settingAccount() class=btn-upload style=color:blue>setting</button>'+
'<button onclick=loggin_out() class=btn-upload style=border-color:red; color:red>log out</button>'+
    '</fieldset>'
}

function connect_toAddNews(){
const address=document.getElementById('useraddress-output');
const color=document.getElementById('input-sign-color').value
document.getElementById('data-input').innerHTML=addNews_structure(address.innerHTML,color)


}
function addNews_structure(address,color){
    return'<fieldset style=border-color:blue>'+
'<legend style=color:'+color+'>'+address+'</legend>'+
'<input type=color id=input-signColor onclick=runTitileColor()><input type=color id=input-bordercolor onclick=runContainerColor()><br>'+
'<input type=text id=input-title class=input-text-data placeholder=judul><br>'+
'<textarea id=input-data-contain class=input-prg-data placeholder=isi></textarea><br>'+
'<button onclick=database_connect() class=btn-upload style=color:orange>upload</button>'+
    '</fieldset>'
}


function runTitileColor(){
    const inpuColor=document.getElementById('input-signColor').value
    document.getElementById('input-title').style.color=inpuColor;
    document.getElementById('input-data-contain').style.borderColor=inpuColor
}

function runContainerColor(){
    const inputColor=document.getElementById('input-bordercolor').value;
    document.getElementById('input-data-contain').style.color=inputColor
}

function runStylecol(){
    const inputcolor=document.getElementById('input-sign-color').value;
    const el=[document.getElementById('useraddress-output'),document.getElementById('bar-private'),document.getElementById('visitor-data')]
    for(var i=0; i<=el.length; i++){
        el[i].style.color=inputcolor
    }

    

}

function runBorderColor(){
    const inputColor=document.getElementById('input-borderColor').value
    const el=[document.getElementById('data-field'),document.getElementById('user-data'),document.getElementById('visitor-data')]
  for(var i=0; i<=el.length;i++){
    el[i].style.borderColor=inputColor
  }

}

function connect_toMarketPage(){
    const useraddess={
        username:document.getElementById('useraddress-output'),
        color:document.getElementById('input-sign-color').value,
        borderColor:document.getElementById('input-borderColor').value
    }
    document.getElementById('data-input').innerHTML=InputProductDataStructure(useraddess.username.innerHTML,useraddess.color,
        useraddess.borderColor)



    
}


function InputProductDataStructure(address,color,borderColor){
    return'<fieldset style=border-color:'+borderColor+'>'+
  '<legend style=color:'+color+'>'+address+'</legend>'+
'<input type=color id=input-color onclick=runproductcolor()><br>'+
'<input type=text id=input-product-name class=text-market placeholder=nama-produk><br>'+
'<input type=number id=input-product-price placeholder=harga class=num-input>'+
'<input type=number id=input-product-amount placeholder=jumlah class=num-input><br>'+
'<textarea id=input-description-product placeholder=deskripsi-produk class=input-text-market></textarea><br>'+
'<button onclick=connect_toDatabase1() class=btn-upload style=color:gold>jual</button>'+
    '</fieldset>'
}



function runproductcolor(){
    const inputcolor=document.getElementById('input-color').value
    const el=[document.getElementById('input-product-name'),document.getElementById('input-description-product')]
 for(var i=0;i<=el.length;i++){
    el[i].style.color=inputcolor
 }
}



function getSellerData(useraddress,sellerAddress,userProduct,productPrice){
    return'<fieldset style=border-color:blue;color:gold>'+
'<legend style=color:aqua>'+useraddress+'</legend><span id=userProduct>'+userProduct+'</span><br>'+
'<span style=color:aqua id=seller-address>'+sellerAddress+'</span></fieldset>'+
'<span style=color:orange id=product-price>'+productPrice+'</span>'+
'<input type=number style=color:aqua placeholder=jumlah id=Amount-data><br>'+
'<select id=PickOption>'+
'<option>pengantaran</option>'+
'<option>tidak prlu</option>'+
'</select>'+'<button onclick=getDealData()>beli</button>'
}



