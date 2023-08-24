function database_connect(){
    const datainput={
        address:document.getElementById('useraddress-output'),
        style:{
            col:document.getElementById('input-signColor').value,
            borderColor:document.getElementById('input-bordercolor').value,

            privateVar:{
                col:document.getElementById('input-sign-color').value,
                borderColor:document.getElementById('input-borderColor').value
            }
        },
        title:document.getElementById('input-title').value,
        text:document.getElementById('input-data-contain').value

    }
  const postData={
    database:document.getElementById('uploader-database'),
    data_host:document.createElement('div'),
    field:document.createElement('fieldset'),
    useraddress:{
        el:document.createElement('legend'),
        val:document.createTextNode(datainput.address.innerHTML)
    },
    title:{
        el:document.createElement('h2'),
        val:document.createTextNode(datainput.title)
    },
    contain:{
        el:document.createElement('fieldset'),
        val:document.createTextNode(datainput.text)
    }  
}
// setting data id//
postData.data_host.setAttribute('id',datainput.title+'-'+datainput.address.innerHTML)
postData.contain.el.setAttribute('class','flex')
postData.data_host.style.margin='15px'
//setting color style data//
postData.field.style.borderColor='blue';
postData.useraddress.el.style.color=datainput.style.privateVar.col;
postData.title.el.style.color=datainput.style.col;
postData.contain.el.style.borderColor=datainput.style.col;
postData.contain.el.style.color=datainput.style.borderColor

postData.database.appendChild(postData.data_host);
postData.data_host.appendChild(postData.field);
postData.field.appendChild(postData.useraddress.el);
postData.useraddress.el.appendChild(postData.useraddress.val)
postData.field.appendChild(postData.title.el);
postData.title.el.appendChild(postData.title.val);
postData.field.appendChild(postData.contain.el);
postData.contain.el.appendChild(postData.contain.val);
toBeranda()
}


function search(){
    const searchInput=document.getElementById('input-search-text').value
    const dataRes=document.getElementById(searchInput);
    document.getElementById('search-container').innerHTML=dataRes.innerHTML
     document.getElementById('data-input').innerHTML=null
     

}

function connect_toDatabase1(){
    const dataInput={
    address:{
        useraddress:document.getElementById('useraddress-output'),
        color:document.getElementById('input-sign-color').value,
        borderColor:document.getElementById('input-borderColor').value,
    },
    dataaddress:{
        productname:document.getElementById('input-product-name').value,
        color:document.getElementById('input-color').value
    },
    num:{
        price:document.getElementById('input-product-price').value,
    },
    des:document.getElementById('input-description-product').value
        
    }
const dataPost={
    database:document.getElementById('uploader-database'),
    Host:document.createElement('div'),
    field:document.createElement('fieldset'),
    useaddress:{
        el:document.createElement('legend'),
        val:document.createTextNode(dataInput.address.useraddress.innerHTML)
    },
    dataProduct:{
        field:document.createElement('fieldset'),
        productname:{
            el:document.createElement('legend'),
            val:document.createTextNode(dataInput.dataaddress.productname)
        },
        num:{
            el:document.createElement('span'),
            val:document.createTextNode(dataInput.num.price),
            ds:document.createElement('br')
        },
        productdes:{
            el:document.createElement('b'),
            val:document.createTextNode(dataInput.des)
        }
    },
  
   btnBuy:{
    el:document.createElement('button'),
    val:document.createTextNode('beli')
   }


}

dataPost.Host.setAttribute('id','beli-'+dataInput.dataaddress.productname+'-'+dataInput.address.useraddress.innerHTML)
dataPost.btnBuy.el.setAttribute('onclick','ProductBuy')
dataPost.btnBuy.el.setAttribute('class','btn-upload')
dataPost.btnBuy.el.setAttribute('onclick','databaseTransaction_connect1()')

// style//
dataPost.useaddress.el.style.color=dataInput.address.color;
dataPost.field.style.borderColoe=dataInput.address.borderColor;
dataPost.dataProduct.productname.el.style.color=dataInput.dataaddress.color;
dataPost.dataProduct.field.style.borderColor=dataInput.dataaddress.color


dataPost.database.appendChild(dataPost.Host);
dataPost.Host.appendChild(dataPost.field);
dataPost.field.appendChild(dataPost.useaddress.el);
dataPost.useaddress.el.appendChild(dataPost.useaddress.val);
dataPost.field.appendChild(dataPost.dataProduct.field)
dataPost.field.appendChild(dataPost.dataProduct.field);
dataPost.dataProduct.field.appendChild(dataPost.dataProduct.productname.el)
dataPost.dataProduct.productname.el.appendChild(dataPost.dataProduct.productname.val)
dataPost.dataProduct.field.appendChild(dataPost.dataProduct.num.el);
dataPost.dataProduct.num.el.appendChild(dataPost.dataProduct.num.val);
dataPost.dataProduct.field.appendChild(dataPost.dataProduct.num.ds)
dataPost.dataProduct.field.appendChild(dataPost.dataProduct.productdes.el);
dataPost.dataProduct.productdes.el.appendChild(dataPost.dataProduct.productdes.val)
dataPost.field.appendChild(dataPost.btnBuy.el);
dataPost.btnBuy.el.appendChild(dataPost.btnBuy.val)

toBeranda()

}
function connection_toDatabase11(){
    const dataInput={
        address:{
            username:document.getElementById('useraddress-output'),
            productname:document.getElementById('input-product-name').value,
            color:document.getElementById('input-sign-color').value,
            borderColor:document.getElementById('input-borderColor').value,
            productColor:document.getElementById('input-color').value
        },
        numProduct:{
            price:document.getElementById('input-product-price').value,
             timeType:document.getElementById('input-product-type').value
        },
        productdes:document.getElementById('input-description-product').value
    
 }
const importData={
    database:document.getElementById('uploader-database'),
    datahost:document.createElement('div'),
    datafield:document.createElement('fieldset'),
    useraddress:{
        el:document.createElement('legend'),
        val:document.createTextNode(dataInput.address.username.innerHTML),
    },
    databody:{
        field:document.createElement('fieldset'),
        produtaddress:{
            el:document.createElement('legend'),
            val:document.createTextNode(dataInput.address.productname)
        },
        num:{
            el:document.createElement('span'),
            val:document.createTextNode(dataInput.numProduct.price+'/'+dataInput.numProduct.timeType)
        },
        dataDis:document.createElement('br'),
       description:{
        el:document.createElement('span'),
        val:document.createTextNode(dataInput.productdes)
       }

    },
    btnbuy:{
        el:document.createElement('button'),
        val:document.createTextNode('sewa')
    }
    
}   
// data setting//
importData.datahost.setAttribute('id','sewa-'+dataInput.address.productname+'-'+dataInput.address.username.innerHTML)
importData.btnbuy.el.setAttribute('onclick','RenteringProduct()')
importData.databody.num.el.setAttribute('id','berapa biaya sewa '+dataInput.address.productname+'-'+dataInput.address.username.innerHTML)
// settingcolor/
importData.datafield.style.borderColor=dataInput.address.borderColor;
importData.useraddress.el.style.color=dataInput.address.color;
importData.databody.field.style.borderColor=dataInput.address.productColor;
importData.databody.produtaddress.el.style.color=dataInput.address.productname;
//data impoert//
importData.database.appendChild(importData.datahost);
importData.datahost.appendChild(importData.datafield);
//header//
importData.datafield.appendChild(importData.useraddress.el);
importData.useraddress.el.appendChild(importData.useraddress.val);
//data body//
importData.datafield.appendChild(importData.databody.field);
importData.databody.field.appendChild(importData.databody.produtaddress.el);
importData.databody.produtaddress.el.appendChild(importData.databody.produtaddress.val);
importData.databody.field.appendChild(importData.databody.num.el);
importData.databody.num.el.appendChild(importData.databody.num.val);
importData.databody.field.appendChild(importData.databody.dataDis);
importData.databody.field.appendChild(importData.databody.description.el);
importData.databody.description.el.appendChild(importData.databody.description.val);
importData.datafield.appendChild(importData.btnbuy.el);
importData.btnbuy.el.appendChild(importData.btnbuy.val);

toBeranda()

}




