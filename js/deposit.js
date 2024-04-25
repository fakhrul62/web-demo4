document.getElementById('btn-deposit').addEventListener('click', function(){
    const deposit = document.getElementById('user-deposit').value;
    const depositNow = document.getElementById('deposit-total');
    const depositTotal = depositNow.innerText;
    depositNow.innerText = deposit;
})