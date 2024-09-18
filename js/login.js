


document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault()
    // console.log('log in btn clicked');

    const phoneNumber = document.getElementById('mobile-number').value;
    const pinNumber = document.getElementById('pin-number').value

    if(phoneNumber === "01500000000" && pinNumber === "1234"){
        window.location.href = '/home.html'
    }
    else{
        alert('wrong mobile number or pin')
    }

    // console.log(phoneNumber ,pinNumber);

})