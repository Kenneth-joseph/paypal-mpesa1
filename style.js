// declaring the global neccessary variable 
let paybill_charge=22;
let usd= 100;
localb= 40;
paypal_commission= 5;
international_comission= 1.5;


$(document).ready(function(){
    $('button#btn').click(function(event){
        event.preventDefault();
    let amount=parseInt( document.getElementById('amount').value)
    // document.getElementById("pay_k").innerHTML = paypill;


     //mpesa
    let mpesa = amount
    let u_mpesa = amount/usd;
    $("#mpesa_k").html(mpesa);
    $("#mpesa_u").html(u_mpesa);

    //paybill
    let paybill= mpesa + paybill_charge
    let paybill_usd= paybill/usd
    $("#pay_k").html(paybill);
    $("#pay_u").html(paybill_usd);

    // local bank
    let localbank= paybill + localb;
    let localbank_usd = localbank/usd;
    $("#local_k").html(localbank);
    $("#local_u").html(localbank_usd);
    

    // international bank
    let commission = (international_comission * mpesa)/100;
    let ibank= localbank + commission;
    let ibank_usd= ibank/usd;
    $("#inter_k").html(ibank);
    $("#inter_u").html(ibank_usd);

    // paypal charges

    let pcommission = (paypal_commission*ibank)/100;
    paypal = pcommission+ibank; 
    paypal_usd =paypal/usd;
    $("#fin_k").html(paypal);
    $("#fin_u").html(paypal_usd);

    // client paypal
    // let pcommission = (paypal_commission*ibank)/100;
    // paypal = pcommission+ibank; 
    // paypal_usd =paypal/usd;
    // $("#client_k").html(paypal);
    // $("#client_u").html(paypal_usd);
    // document.write(paypal_usd);

    



    


    
    // document.write(amount);  
    // $('.table table').show();
    })
 });