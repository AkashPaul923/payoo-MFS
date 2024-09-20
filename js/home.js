// console.log('hello');
// add money
// document.getElementById('btn-add-money').addEventListener('click', function(event){
//     event.preventDefault()

//     const addMoney = document.getElementById('add-money').value
//     const addMoneyPin = document.getElementById('add-money-pin').value
//     const balance = document.getElementById('available-balance').innerText

//     if(addMoneyPin === '1234'){
//         const updateBalance = parseFloat(addMoney) + parseFloat(balance)
//         // console.log(updateBalance);
//         document.getElementById('available-balance').innerText = updateBalance
//     }
//     else{
//         alert('wrong pin number')
//     }
// })

// document.getElementById('btn-cash-out').addEventListener('click', function(event){
//     event.preventDefault()

//     const cashOut = document.getElementById('cash-out').value
//     const cashOutPin = document.getElementById('cash-out-pin').value
//     const balance = document.getElementById('available-balance').innerText

//     if(cashOutPin === '1234'){
//         const updateBalance =  parseFloat(balance) - parseFloat(cashOut)
//         // console.log(updateBalance);
//         document.getElementById('available-balance').innerText = updateBalance
//     }
//     else{
//         alert('wrong pin number')
//     }
// })




// add money
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault()

    const addMoney = getInputFieldValueById('add-money-input')
    const addMoneyPin = getInputFieldValueById('add-money-pin')
    const balance = getTextFieldValueById('available-balance')

    if(addMoneyPin === 1234){
        const updateBalance = balance + addMoney
        // console.log(updateBalance);
        document.getElementById('available-balance').innerText = updateBalance
    }
    else{
        alert('wrong pin number')
    }
    console.log(addMoney , addMoneyPin , balance) ;
})



// cash out
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault()

    const cashOut = getInputFieldValueById('cash-out-input')
    const cashOutPin = getInputFieldValueById('cash-out-pin')
    const balance = getTextFieldValueById('available-balance')

    if(cashOutPin === 1234){
        const updateBalance = balance - cashOut
        // console.log(updateBalance);
        document.getElementById('available-balance').innerText = updateBalance
    }
    else{
        alert('wrong pin number')
    }
    
})