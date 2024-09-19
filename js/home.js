// console.log('hello');
// add money
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault()

    const addMoney = document.getElementById('add-money').value
    const addMoneyPin = document.getElementById('add-money-pin').value
    const balance = document.getElementById('available-balance').innerText

    if(addMoneyPin === '1234'){
        const updateBalance = parseFloat(addMoney) + parseFloat(balance)
        // console.log(updateBalance);
        document.getElementById('available-balance').innerText = updateBalance
    }
    else{
        alert('wrong pin number')
    }
})