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
        amount:document.getElementById('input-product-amount').value
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
            val:document.createTextNode(dataInput.num.price+'||'+dataInput.num.amount),
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
dataPost.btnBuy.el.setAttribute('onclick','databaseTransaction_connect()')

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

function databaseTransaction_connect(){
    const statusConfirm=confirm('penjual/pembeli')
    if(statusConfirm==true){
        const getData={
            buyyername:prompt('nama pembeli'),
            buyyerproduct:prompt('nama barang'),
            productPrice:prompt('harga barang'),
            productAmount:prompt('jumlah produk')
        }
        getBuyyerData(getData.buyyername,getData.buyyerproduct,getData.productPrice,getData.productAmount)
    }
    else{
        const userData={
           address:document.getElementById('useraddress-output'),
           selleraddress:prompt('nama penjual'),
           productname:prompt('nama barang'),
           productPrice:prompt('harga barang')
        }
        document.getElementById('data-input').innerHTML=getSellerData(userData.address.innerHTML,userData.selleraddress,userData.productname,userData.productPrice) 
    
    }
}