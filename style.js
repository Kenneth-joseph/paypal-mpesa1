$(document).ready(function(){
    $('button#btn').click(function(event){
        event.preventDefault();
    let amount=document.getElementById('amount').value
    // document.write(amount);  
    $('.table table').show();
    })
 });