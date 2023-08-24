function Registered_account(){
    const inputData={
       datainput:document.getElementById('private-database'),
        useraddress:document.getElementById('input-useraddress').value,
        userpassword:document.getElementById('input-user-pass').value,
        address:document.getElementById('input-address').value
        
    }
  
if(inputData.useraddress==""){
    alert('mohon maaf usernam kosong')
    console.log('usernam kosong')
}
else if(inputData.userpassword==""){
    alert('mohon maaf password kosong')
    console.log('password kosong')
}
else if(inputData.address==""){
    alert('mohon maaf alamat kosong')
    console.log('alamat kosong')
}
else{
    inputData.datainput.innerHTML=structure_accountHeader(inputData.useraddress,inputData.userpassword,inputData.address)
    document.getElementById('btn-news').setAttribute('onclick',' connect_toAddNews()')
    document.getElementById('btn-market').setAttribute('onclick',' connect_toMarketPage()')
    toBeranda()
    
}

    
}

function toBeranda(){
    const pageNull=[document.getElementById('search-container'),document.getElementById('data-input')]
    for(var i=0; i<=pageNull.length; i++){
        pageNull[i].innerHTML=null
    }
}

function setting_account(){
    const dataUserAppear={
        useraddress:document.getElementById('useraddress-output'),
        pass:document.getElementById('user-pass'),
        address:document.getElementById('user-address')
    };
    document.getElementById('data-input').innerHTML=settAcount(dataUserAppear.useraddress.innerHTML,dataUserAppear.pass.innerHTML,dataUserAppear.address.innerHTML)
}





function settinguseraddress(){
    const settdata={
        place:document.getElementById('sett-address'),
        dataplace:document.getElementById('useraddress-output'),
        new:prompt('username baru')
    }
    settdata.place.innerHTML=settdata.new
    settdata.dataplace.innerHTML=settdata.new
    document.getElementById('address-this').innerHTML=settdata.new+'@pmail'
}
function setPass(){
    const passdata={
        new:prompt('pasword baru'),
        place:document.getElementById('set-pass'),
        dataplace:document.getElementById('user-pass')
    }
   passdata.place.innerHTML=passdata.new
   passdata.dataplace.innerHTML=passdata.new

}


function setaddressLoc(){
const addressImportData=prompt('alamat baru');
document.getElementById('set-address').innerHTML=addressImportData
document.getElementById('user-address').innerHTML=addressImportData;
}




function loggin_out(){
    const dataUser={
        databefore:document.getElementById('private-database'),
        dataupload:document.getElementById('uploader-database'),
        dataaadrees:document.getElementById('useraddress-output'),
       databaseaddress:document.getElementById('public-database/192.168.120.189'),
       style:{
        color:document.getElementById('input-sign-color').value,
        borderColor:document.getElementById('input-borderColor')
       }
    }
    dataUser.databefore.innerHTML=null
   dataUser.databaseaddress.innerHTML +='<div id='+dataUser.dataaadrees.innerHTML+'@pmail>'+
   '<fieldset style=border-color:'+dataUser.style.borderColor+' class=private-database>'+
  '<legend style=color:'+dataUser.style.color+' onclick=followMore()>'+dataUser.dataaadrees.innerHTML+'</legend>'+
    dataUser.dataupload.innerHTML
'</fieldset>'
 toBeranda()
}

function showAll(){
    const data=document.getElementById('public-database/192.168.120.189');
    document.getElementById('search-container').innerHTML=data.innerHTML
}


function openPmail(){
    const pmaiAddress=document.getElementById('visitor-data').value
    document.getElementById('search-container').innerHTML=chat_pageStructure(pmaiAddress)



}