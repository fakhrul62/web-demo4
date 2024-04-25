document.getElementById('btn-deposit').addEventListener('click', function(){
// getting deposit value and coverting it to string
    const depositValue = document.getElementById('user-deposit');
    const newDepositString = depositValue.value;
    const newDeposit = parseFloat(newDepositString);

// adding it to the previous deposit value
    const depositNow = document.getElementById('deposit-total');
    const prevDepositTotalString = depositNow.innerText;
    const prevDepositTotal = parseFloat(prevDepositTotalString);
    const currentDepositTotal = prevDepositTotal+newDeposit;
    depositNow.innerText = currentDepositTotal;

    // getting the balance value and coverting it to string
    const balanceValue = document.getElementById('balance-total');
    const prevBalanceTotalString= balanceValue.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalString);

    // adding the current deposit to the current balance
    const balanceNow = newDeposit + prevBalanceTotal;
    balanceValue.innerText = balanceNow;


    depositValue.value = '';
})