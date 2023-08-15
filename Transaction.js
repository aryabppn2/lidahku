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
document.getElementById('money-in').innerHTML=Number(document.getElementById('money-in').innerHTML)+Number(totalAll)
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



