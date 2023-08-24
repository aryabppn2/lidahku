function Registered_account(){
    const inputData={
       datainput:document.getElementById('private-database'),
        useraddress:document.getElementById('input-useraddress').value,
        userpassword:document.getElementById('input-user-pass').value,
        address:document.getElementById('input-address').value
        
    }
   inputData.datainput.innerHTML=structure_accountHeader(inputData.useraddress,inputData.userpassword,inputData.address)
    toBeranda()
}

function toBeranda(){
    const pageNull=[document.getElementById('search-container'),document.getElementById('data-input')]
    for(var i=0; i<=pageNull.length; i++){
        pageNull[i].innerHTML=null
    }
}

function setting_account(){
    const dataUserAppear={
        address:document.getElementById('useraddress-output'),
        pass:document.getElementById('user-pass')
    };
    document.getElementById('data-input').innerHTML=structure_settAcount(dataUserAppear.address.innerHTML,dataUserAppear.pass.innerHTML)
}


function settinguseraddress(){
    const settdata={
        place:document.getElementById('sett-address'),
        new:prompt('username baru')
    }
    settdata.place.innerHTML=settdata.new
}
function setPass(){
    const passdata={
        new:prompt('pasword baru'),
        place:document.getElementById('set-pass')
    }
   passdata.place.innerHTML=passdata.new

}

function settingAccount(){
    const dataSave={
        databaseCall:document.getElementById('private-database'),
        address:document.getElementById('sett-address'),
        pass:document.getElementById('set-pass'),
        
    }
    dataSave.databaseCall.innerHTML=structure_accountHeader(dataSave.address.innerHTML,dataSave.pass.innerHTML,dataSave)
        toBeranda()
    
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

}

function showAll(){
    const data=document.getElementById('public-database/192.168.120.189');
    document.getElementById('search-container').innerHTML=data.innerHTML
}


function openPmail(){
    const pmaiAddress=document.getElementById('visitor-data').value
    document.getElementById('search-container').innerHTML=chat_pageStructure(pmaiAddress)



}