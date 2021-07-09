let paybill_charge=22;
let usd= 100;
localb= 40;
paypal_commission= 5;
international_comission= 1.5;


$(document).ready(function(){
    $('button#btn').click(function(event){
        event.preventDefault();
    let amount=parseInt( document.getElementById('amount').value)    
     //mpesa
    let mpesa = amount
    let u_mpesa = amount/usd;
    
    //paybill
    let paybill= mpesa + paybill_charge
    let paybill_usd= paybill/usd
    

    // local bank
    let localbank= paybill + localb;
    let localbank_usd = localbank/usd;
    

    // international bank
    let commission = (international_comission * mpesa)/100;
    let ibank= localbank + commission;
    let ibank_usd= ibank/usd;
    

    // paypal charges

    let pcommission = (paypal_commission*ibank)/100;
    paypal = pcommission+ibank; 
    paypal_usd =paypal/usd;
    alert(paypal_usd);



    


    
    // document.write(amount);  
    // $('.table table').show();
    })
 });