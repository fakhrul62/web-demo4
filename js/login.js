document.getElementById('btn-sbmt').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passField = document.getElementById('user-pass');
    const password = passField.value;
    
    if(email === 'boss@mail.com' && password === 'pass'){
        window.location.href = 'bank.html';
    }
    else{
        alert("get the hell outta here");
    }
})

