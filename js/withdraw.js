document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawValue = document.getElementById('user-withdraw');
    const newWithdrawString = withdrawValue.value;
    const newWithdraw = parseFloat(newWithdrawString);

    // adding it to the previous deposit value
    const withdrawNow = document.getElementById('withdraw-total');
    const prevWithdrawTotalString = withdrawNow.innerText;
    const prevWithdrawTotal = parseFloat(prevWithdrawTotalString);
    const currentWithdrawTotal = prevWithdrawTotal+newWithdraw;
    withdrawNow.innerText = currentWithdrawTotal;

    // getting the balance value and coverting it to string
    const balanceValue = document.getElementById('balance-total');
    const prevBalanceTotalString= balanceValue.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalString);

    // adding the current deposit to the current balance
    const balanceNow =  prevBalanceTotal - newWithdraw;
    balanceValue.innerText = balanceNow;


    withdrawValue.value = '';


})