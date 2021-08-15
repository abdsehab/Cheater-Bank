// Login Btn

document.getElementById("login").addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const emailValue = emailField.value;
    

    const passwordField = document.getElementById('user-password');
    const passwordValue = passwordField.value;
    
    if (emailValue == "hudai@gmail.com" && passwordValue == 'asdf'){
        window.location.href ='banking.html'
    }
})

// Banking Html 

