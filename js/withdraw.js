document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawValue = document.getElementById('user-withdraw');
    const newWithdrawString = withdrawValue.value;
    const newWithdraw = parseFloat(newWithdrawString);


    const withdrawNow = document.getElementById('withdraw-total');
    const prevWithdrawTotalString = withdrawNow.innerText;
    const prevWithdrawTotal = parseFloat(prevWithdrawTotalString);
    
  
    const balanceValue = document.getElementById('balance-total');
    const prevBalanceTotalString= balanceValue.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalString);
 

    const balanceNow =  prevBalanceTotal - newWithdraw;
    

    withdrawValue.value = '';
    
    if(newWithdraw>balanceNow){
        alert("No money No honey");
        return;
    }
    const currentWithdrawTotal = prevWithdrawTotal+newWithdraw;
    withdrawNow.innerText = currentWithdrawTotal;

  
    balanceValue.innerText = balanceNow;
    
})