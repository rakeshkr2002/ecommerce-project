let form = document.getElementById('signup-form');
let username = document.getElementById('username');
let email = document.getElementById('mail');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmpassword');
let usernameErrors = document.getElementById('usernameErrors');
let mailErrors= document.getElementById('mailErrors');
let passwordErrors = document.getElementById('passwordErrors');
let confirmpasswordErrors= document.getElementById('confirmpasswordErrors');


form.addEventListener('submit', (e) => {
    e.preventDefault();
        let valid=true;

    username.textContent='';
    email.textContent='';
    password.textContent='';
    confirmPassword.textContent='';


    if (username.value.length < 3) {
        usernameErrors.textContent='enter minimum 3 character';
        usernameErrors.style.color='red';
        valid=false;
    } else {
        usernameErrors.textContent='';
    }

    if (!email.validity.valid) {
        mailErrors.textContent="enter valid mail";
        mailErrors.style.color="red";
        email.focus();
        valid=false;

    }else{
        mailErrors.textContent="";
    }

    if(password.value.length<6){
        passwordErrors.textContent="enter minimum 6 characters";
        passwordErrors.style.color="red";
        valid=false;

    }

    if (password.value!=confirmPassword.value) {
        confirmpasswordErrors.textContent="password is not matching";
        confirmpasswordErrors.style.color='red';
        valid=false;

    }else{
        confirmpasswordErrors.textContent='';
    }

    if(valid){
        userData={
            username:username.value,
            email:email.value,
           password:password.value
        }
    }

    localStorage.setItem("signupData",JSON.stringify(userData));
    alert("signup succesfully redirect into login page");
    form.reset();
    window.location.href="login.html";
})
