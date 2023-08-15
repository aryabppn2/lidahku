
function structur_accountPage(){
    return'<img src=icon.jpg width=100% height=400px>'+    
    '<fieldset id=input-account class=account-inputContainer>'+
    '<input class=input-text id=input-username placeholder=username><br>'+
    '<input type=text class=input-text  id=input-userPasword placeholder=userPasword><br>'+
    '<textarea id=input-addresUser class=input-prg placeholder=status></textarea><br>'+
    '<button onclick=RegisteredAccount() class=btn-upload id=btn-registData>daftar</button></fieldset>'
}
function add_account(){
document.getElementById('input-data-place').innerHTML=structur_accountPage()
}

function structurePmail_page(){
    return '<select id=Pmail-recently-recept class=pmail-beranda >'+
    '<option>pmail masuk</option>'+
    '</select>'
}

function structur_header(){
    return'<fieldset id=header-user class=header-account>'+
    '<input type=color id=colorSet onclick=settingColor()>'+
    '<input type=color id=bgset onclick=settingBGCOLOR()><br>'+
    '<h1 id=username-output></h1>'+
    '<p id=useraddres-output onclick=change_status()></p>'+
    '<select id=save-status>'+
    '<option onclick=save_status()>status sebelumnya</option>'+
    '</select>'+
   '</fieldset>'
}
function addAccount(){
    document.getElementById('account-set-output').innerHTML=structur_accountPage();

}

function settingColor(){
    const inputStyling={
        element:[document.getElementById('username-output'),document.getElementById('useraddres-output'),document.getElementById('username')],
        color:document.getElementById('colorSet').value
    };
    for(var i=0; i<=inputStyling.element.length; i++){
        inputStyling.element[i].style.color=inputStyling.color;
    }
}
function settingBGCOLOR(){
    const inputStylingBG={
        element:[document.getElementById('header-user'),document.getElementById('input-data-place')],
        bgColor:document.getElementById('bgset').value

    };
for(var i=0; i<=inputStylingBG.element.length; i++){
    inputStylingBG.element[i].style.backgroundColor=inputStylingBG.bgColor;
}

}


function structurTextAdd_page(){
    const data={
        username:document.getElementById('username-output'),
        col:{
           bgcol:document.getElementById('bgset').value,
           col:document.getElementById('colorSet').value
        }
    }
    return'<fieldset style=border-color:'+data.col.bgcol+'>'+
    '<legend style=color:'+data.col.col+'>'+data.username.innerHTML+'</legend>'+
    '<fieldset style=color:'+data.col.col+'>'+
    '<input type=color id=input-titleColor >'+
    '<input type=color id=input-textColor>'+
    '<button onclick=runTextStyle() class=runstyle>run</button></fieldset><br>'+
    '<fieldset style=border-color:'+data.col.bgcol+'>'+
    '<input type =text id=input-title placeholder= judul class=input-text><br>'+
    '<textarea id=input-paragraf placeholder=isi class=input-paragraf></textarea><br>'+
    '</fieldset><br>'+
    '<div id=output-process-editingText class=dat-nav></div>'+
    '<button onclick=upload_data() class=btn-upload>upload</button>'+
    '<button onclick=upload_htmltype() class=btn-upload>upload html</button>'
}

function addNewUpdate(){
    document.getElementById('input-data-place').innerHTML=structurTextAdd_page();
}

function runTextStyle(){
    const input_syleCol={
        bgCol:document.getElementById('bgset').value,
        username:document.getElementById('colorSet').value,
        titleText:document.getElementById('input-titleColor').value,
        text:document.getElementById('input-textColor').value
    };
    const data_input={
        username:document.getElementById('username-output'),
        title:document.getElementById('input-title').value,
        text:document.getElementById('input-paragraf').value
    };
    document.getElementById('output-process-editingText').innerHTML=
    '<fieldset style=background-color:'+input_syleCol.bgCol+'>'+
    '<legend style=color:'+input_syleCol.username+'>'+data_input.username.innerHTML+'</legend>'+
    '<fieldset>'+'<h1 style=color:'+input_syleCol.titleText+'>'+data_input.title+'</h1></fieldset>'+
    '<fieldset style=color:'+input_syleCol.text+'>'+data_input.text+'</fieldset></fieldset>'
}

function toBeranda(){
    document.getElementById('input-data-place').innerHTML=null,
    document.getElementById('search-place').innerHTML=null
}







function friendsPage_structure(){
    return'<div id=friends-header class= friends-barPage>'+
'<h1 id=nameFriends onclick=res_sent()></h1>'+
'<select id= friends-hub>'+
'<option onclick=chatPageAcces() id=chat-fitur>chat</option>'+
'<option onclick=callPageAcces() id=call-fitur>panggil</option>'+
'</select>'+
'</div>'+
'<div id=chat-place-fitur></div>'+
'<div id=call-place-fitur></div>'
}

function chatPage_structure(){
    return'<div id=chat-outputPlace class=chat-page><div><br>'+
    '<div id=chat-input-place>'+inputTextPlace()+'</div>'+
    '<button id=btn-chatOutput onclick=sentMesenge()>kirim</button>'

}

 function  inputTextPlace(){
    return'<textarea id=input-chat class=input-prg placeholder=ketik></textarea>'
}

function chatPageAcces(){
    document.getElementById('chat-fitur').setAttribute('onclick','outFromChatFitur()');
    document.getElementById('chat-place-fitur').innerHTML=chatPage_structure();
    
}
function callPage_structure(){
    return'<div id=userPlace-call class=call-interface></div>'+
    '<div id=resUserPlace-call class=call-interface></div><br>'+
    '<button onclick=sound_setVol()>volume</button>'+
    '<button onclick=end_call() style=color= red>akhiri</button>'+
    '<button onclick=set_soundAppear() id=mic-setting>off</button>'
}
function callPageAcces(){
    document.getElementById('call-place-fitur').innerHTML=callPage_structure();
    
    
   
}










function messsagge_structurePage(){
   return'<fieldset id=chat-page-container class=chat-page>'+
   '<fieldset id=pmail-pengirim class=pengirim-container></fieldset><br>'+
   '<fieldset id=pmail-penerima class=penerima-container onclick=res_pmail()></fieldset><br>'+
   '<div id=input-mail><textarea id=pmail-input class=input-pmail-container placeholder=tulis-pesan></textarea></div><br>'+
   '<button onclick=sent_pmail() class=btn-upload id=btn-sent>kirim</button><br>'+
   '<div id=chat-room-pmail></div>'+
   '</fieldset>'
}
function mailInput(){
    return'<textarea id=pmail-input class=input-pmail-container placeholder=tulis-pesan></textarea>'
}

function pmailAcces(){
    const pmailData={
        writerAddres:document.getElementById('account-set'),
           targetAddress:prompt('alamat penerima')
    }
    document.getElementById('input-data-place').innerHTML=messsagge_structurePage();
    document.getElementById('pmail-pengirim').innerHTML=pmailData.writerAddres.innerHTML;
    document.getElementById('pmail-penerima').innerHTML=pmailData.targetAddress+'Pmail.com'; 

}
function structure_addLapak(){
  const data={
    username:document.getElementById('output-username'),
    coldata:{
        bgcolor:document.getElementById('bgset').value,
        col:document.getElementById('colorSet').value
    }

  }
  return'<fieldset style= border-color:'+data.coldata.bgcolor+'>'+
  '<legend style=color:'+data.coldata.col+'>'+data.username.innerHTML+'</legend>'
}