function getBuyyerData(buyyername,productname,productPrice,Amount){
   const dataTransaction={
    databaseconnect:document.getElementById('money-list'),
    buyyeraddress:{
        el:document.createElement('option'),
        val:document.createTextNode('//nama pembeli:'+buyyername)
    },
    buyyerProduct:{
        el:document.createElement('option'),
        val:document.createTextNode(productname)
    },
    productPrice:{
        el:document.createElement('option'),
        val:document.createTextNode(productPrice)
    },
    productAmount:{
        el:document.createElement('option'),
        val:document.createTextNode(Amount)
    }
   }
   dataTransaction.buyyeraddress.el.style.color='green'
  dataTransaction.databaseconnect.appendChild(dataTransaction.buyyeraddress.el);
  dataTransaction.buyyeraddress.el.appendChild(dataTransaction.buyyeraddress.val);
  dataTransaction.databaseconnect.appendChild(dataTransaction.buyyerProduct.el);
  dataTransaction.buyyerProduct.el.appendChild(dataTransaction.buyyerProduct.val);
  dataTransaction.databaseconnect.appendChild(dataTransaction.productPrice.el);
  dataTransaction.productPrice.el.appendChild(dataTransaction.productPrice.val);
  dataTransaction.databaseconnect.appendChild(dataTransaction.productAmount.el);
  dataTransaction.productAmount.el.appendChild(dataTransaction.productAmount.val)
const PickCnfirm=confirm('pakai jasa pengantaran');
if(PickCnfirm==true){
    const addMoney=prompt('berapa')
    const userAddress=prompt('alamat dimana')
    const totalAll=Number(productPrice*Amount)+Number(addMoney)
    const addData={
       addmoney:{
         el:document.createElement('option'),
         val:document.createTextNode('ongkir:'+addMoney)
       },
       total:{
        el:document.createElement('option'),
        val:document.createTextNode('total:'+totalAll)
       },
       address:{
        el:document.createElement('option'),
        val:document.createTextNode(userAddress)
       },

    }
    dataTransaction.databaseconnect.appendChild(addData.addmoney.el);
    addData.addmoney.el.appendChild(addData.addmoney.val);
    dataTransaction.databaseconnect.appendChild(addData.total.el);
    addData.total.el.appendChild(addData.total.val);
    dataTransaction.databaseconnect.appendChild(addData.address.el);
    addData.address.el.appendChild(addData.address.val)
document.getElementById('money-data').innerHTML=Number(document.getElementById('money-data').innerHTML)+Number(totalAll);
document.getElementById('money-in').innerHTML=Number(document.getElementById('money-in').innerHTML)+Number(totalAll);

}
else{
    const total=Number(productPrice)*Number(Amount)
    const output={
        el:document.createElement('option'),
        val:document.createTextNode(total)
    }
    dataTransaction.databaseconnect.appendChild(output.el);
    output.el.appendChild(output.val)
    document.getElementById('money-data').innerHTML=Number(document.getElementById('money-data').innerHTML)+Number(total);
document.getElementById('money-in').innerHTML=Number(document.getElementById('money-in').innerHTML)+Number(total)
}
}

function getDealData(){
    const dataImport={
       sellerAddress:document.getElementById('seller-address'),
       productname:document.getElementById('userProduct'),
       productPrice:document.getElementById('product-price'),
       amount:document.getElementById('Amount-data').value
    }
    const dataTransaction={
        databaseConnect:document.getElementById('money-list'),
        selleraddress:{
            el:document.createElement('option'),
            val:document.createTextNode('nama penjual:'+dataImport.sellerAddress.innerHTML)
        },
        sellerproduct:{
            el:document.createElement('option'),
            val:document.createTextNode(dataImport.productname.innerHTML)
        },
        productPrice:{
            el:document.createElement('option'),
            val:document.createTextNode(dataImport.productPrice.innerHTML)
        },
        productAmount:{
            el:document.createElement('option'),
            val:document.createTextNode(dataImport.amount)
        }
    }
    dataTransaction.databaseConnect.appendChild(dataTransaction.selleraddress.el);
    dataTransaction.selleraddress.el.appendChild(dataTransaction.selleraddress.val);
    dataTransaction.databaseConnect.appendChild(dataTransaction.sellerproduct.el);
    dataTransaction.sellerproduct.el.appendChild(dataTransaction.sellerproduct.val);
    dataTransaction.databaseConnect.appendChild(dataTransaction.productPrice.el);
    dataTransaction.productPrice.el.appendChild(dataTransaction.productPrice.val);
    dataTransaction.databaseConnect.appendChild(dataTransaction.productAmount.el);
    dataTransaction.productAmount.el.appendChild(dataTransaction.productAmount.val)
    const PickBinary=document.getElementById('PickOption').value;
    if(PickBinary=='pengantaran'){
        const money=prompt('berapa')
        const Total=Number(dataImport.productPrice.innerHTML*dataImport.amount)+Number(money);
        const addData={
            moneyadd:{
                el:document.createElement('option'),
                val:document.createTextNode('ongkir:'+money)
            },
            tot:{
                el:document.createElement('option'),
                val:document.createTextNode(Total)
            }
        }
        dataTransaction.databaseConnect.appendChild(addData.moneyadd.el);
        addData.moneyadd.el.appendChild(addData.moneyadd.val);
        dataTransaction.databaseConnect.appendChild(addData.tot.el);
        addData.tot.el.appendChild(addData.tot.val)
        document.getElementById('money-data').innerHTML=Number(document.getElementById('money-data').innerHTML)-Number(Total);
        document.getElementById('money-out').innerHTML=Number(document.getElementById('money-in').innerHTML)+Number(Total)
    }
    else{
        const total=Number(dataImport.productPrice.innerHTML)*Number(dataImport.amount)
        const totalthis={
            el:document.createElement('option'),
            val:document.createTextNode(total)
        }
        dataTransaction.databaseConnect.apendChild(totalthis.el);
        totalthis.el.appendChild(totalthis.val)
        document.getElementById('money-data').innerHTML=Number(document.getElementById('money-data').innerHTML)-Number(total);
        document.getElementById('money-out').innerHTML=Number(document.getElementById('money-in').innerHTML)+Number(total)
    }
}

function databaseTransaction_connect1(){
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





function RenteringProduct(){
    const confirmStatus= confirm('pemilik/penyewa')
    if(confirmStatus==true){
        const renterDataImport={
            Renteraddress:prompt('nama penyewa'),
            renterProduk:prompt('nama barang'),
            productBugget:prompt('harga produk'),
            productType:prompt('tipe waktu'),
            timerent:prompt('berapa lama'),
        }
        getRenterData(renterDataImport.Renteraddress,renterDataImport.renterProduk,renterDataImport.productBugget,renterDataImport.productType,renterDataImport.timerent)
    }
    else{
        const OwnerData={
            useraddress:document.getElementById('useraddress-output'),
            owneraddress:prompt('nama pemilik'),
            userProduk:prompt('nama barang'),
            productPrice:prompt('nama barang'),
            timeType:prompt('tipe waktu')

        }
        const dataconnection=jasarentStructure(OwnerData.useraddress.innerHTML,OwnerData.owneraddress,OwnerData.userProduk,
            OwnerData.productPrice,OwnerData.timeType)
        document.getElementById('data-input').innerHTML=dataconnection
    }
}



function getRenterData(rentername,productname,budged,typeTime,time){
    const database=document.getElementById('money-list');
    const money={
        data:document.getElementById('money-data'),
        money_in:document.getElementById('money-in')
    }
    const getData={
        rentername:{
            el:document.createElement('option'),
            val:document.createTextNode('penyewa:'+rentername)
        },
      renterproduct:{
        el:document.createElement('option'),
        val:document.createTextNode('nama barang'+productname)
      },
      producPrice:{
        el:document.createElement('option'),
        val:document.createTextNode('harga:'+budged+'per'+typeTime)
      },
     time:{
        el:document.createElement('option'),
        val:document.createTextNode('waktu:'+time)
     }   
    }
    database.appendChild(getData.rentername.el);
    getData.rentername.el.appendChild(getData.rentername.val);
    database.appendChild(getData.renterproduct.el);
    getData.renterproduct.el.appendChild(getData.renterproduct.val);
    database.appendChild(getData.producPrice.el);
    getData.producPrice.el.appendChild(getData.producPrice.val);
    database.appendChild(getData.time.el);
    getData.time.el.appendChild(getData.time.val)

    const PickBinaryOption=confirm('pakai jasa pengantran/tidak');

    if(PickBinaryOption==true){
        const addmoney=prompt('bayar berapa');
        const  totalAll=Number(budged*time)+Number(addmoney)
        const address=prompt('alamat sekarang');
        const getdataAdd={
            pickBudget:{
                el:document.createElement('option'),
                val:document.createTextNode('ongkir:'+addmoney)
            },
            total:{
                el:document.createElement('option'),
                val:document.createTextNode('total:'+totalAll)
            },
            address:{
                el:document.createElement('option'),
                va:document.createTextNode(address)
            }
        }
        database.appendChild(getdataAdd.pickBudget.el);
        getdataAdd.pickBudget.el.appendChild(getdataAdd.pickBudget.val);
        database.appendChild(getdataAdd.total.el);
        getdataAdd.total.el.appendChild(getdataAdd.total.val);
        database.appendChild(getdataAdd.address.el);
        getdataAdd.address.el.appendChild(getdataAdd.address.va)
      money.data.innerHTML=Number(money.data.innerHTML)+Number(totalAll)
      money.money_in.innerHTML=Number(money.money_in.innerHTML)+Number(totalAll)
    }
    else{
     const total=Number(budged)*Number(time) 
     const totalData={
        el:document.createElement('option'),
        val:document.createTextNode(total)
     }
     database.appendChild(totalData.el);
     totalData.el.appendChild(totalData.val)
     money.data.innerHTML=Number(money.data.innerHTML)+Number(total)
     money.money_in.innerHTML=Number(money.money_in.innerHTML)+Number(total)

    }
}

function connect_transation1database(){
    const dataImport={
        owneraddress:document.getElementById('username-address'),
        productname:document.getElementById('product-name'),
        produtprice:document.getElementById('product-price'),
        productamount:document.getElementById('input-time').value
    }
 const database=document.getElementById('money-list');   
 const getData={
    owneraddress:{
        el:document.createElement('option'),
        val:document.createTextNode('nama pemilik:'+dataImport.owneraddress.innerHTML)
    },
    productname:{
        el:document.createElement('option'),
        val:document.createTextNode('nama barang:'+dataImport.productname.innerHTML)
    },
    productPrice:{
        el:document.createElement('option'),
        val:document.createTextNode('harga barang:'+dataImport.produtprice.innerHTML)
    },
    productamount:{
        el:document.createElement('option'),
        val:document.createTextNode('waktu:'+dataImport.productamount)
    }
 }
database.appendChild(getData.owneraddress.el);
getData.owneraddress.el.appendChild(getData.owneraddress.val);
database.appendChild(getData.productname.el);
getData.productname.el.appendChild(getData.productname.val);
database.appendChild(getData.productPrice.el);
getData.productPrice.el.appendChild(getData.productPrice.val);
database.appendChild(getData.productamount.el);
getData.productamount.el.appendChild(getData.productamount.val);
    const pickBinary=document.getElementById('pick-binary').value;
    const datamoney={
        data:document.getElementById('money-data'),
        money_out:document.getElementById('money-out')
    }
    if(pickBinary=='jasa pengantaran'){
        const addmoney=prompt('biaya ongkir')
        const totalAll=Number(dataImport.produtprice.innerHTML*dataImport.productamount)+Number(addmoney);
        const dataAdd={
            order:{
                el:document.createElement('option'),
                val:document.createTextNode(addmoney)
            },
            total:{
                el:document.createElement('option'),
                val:document.createTextNode(totalAll)
            }
        }
        database.appendChild(dataAdd.order.el);
        dataAdd.order.el.appendChild(dataAdd.order.val);
        database.appendChild(dataAdd.total.el);
        dataAdd.total.el.appendChild(dataAdd.total.val);
       
        datamoney.data.innerHTML=Number(datamoney.data.innerHTML)-Number(totalAll)
        datamoney.money_out.innerHTML=Number(datamoney.money_out.innerHTML)+Number(totalAll)

    }
    else{
        const total=Number(dataImport.produtprice.innerHTML)*Number(dataImport.productamount)
        const totalget={
            el:document.createElement('option'),
            val:document.createTextNode('total'+total)
        }
        database.appendChild(totalget.el);
        totalget.el.appendChild(totalget.val)

        datamoney.data.innerHTML=Number(datamoney.data.innerHTML)-Number(total)
        datamoney.money_out.innerHTML=Number(datamoney.money_out.innerHTML)+Number(total)

    }
}



function sentChat(){
    const chatInput={
        address:document.getElementById('useraddress-output'),
        chat_value:document.getElementById('input-chat').value
    }
    const post_chat={
        chat_database:document.getElementById('chat-container-database'),
        field:document.createElement('fieldset'),
        useraddress:{
            el:document.createElement('legend'),
            val:document.createTextNode(chatInput.address.innerHTML)
        },
        chat_val:{
            el:document.createElement('span'),
            val:document.createTextNode(chatInput.address)
        }
    }
    post_chat.field.style.borderColor='lightgreen';
    post_chat.useraddress.el.style.color='lightgreen';
    post_chat.chat_val.el.style.color='lightgreen';
    
    post_chat.chat_database.appendChild(post_chat.field);
    post_chat.field.appendChild(post_chat.useraddress.el);
    post_chat.useraddress.el.appendChild(post_chat.useraddress.val);
    post_chat.chat_database.appendChild(post_chat.chat_val.el);
    post_chat.chat_val.el.appendChild(post_chat.chat_val.val);
    
    document.getElementById('chat-input-place').innerHTML=btn_chat()

}

function backintoChat(){
    document.getElementById('chat-input-place').innerHTML=chatInputStructure()
}

