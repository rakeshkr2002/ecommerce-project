let userData = JSON.parse(localStorage.getItem('signupData'));

if(!userData  || !userData.username){
    alert("invalid sesion please login properly");
    window.location.href = "login.html";
}else{
let messageAlert = document.getElementById('message');

messageAlert.textContent = `Welcome ${userData.username}`; 
}

let logout = document.getElementById('logout');
logout.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="login.html";
alert(" the user is logged out");

})



let mens = document.getElementById('men');
mens.addEventListener('click', (e)=>{
e.preventDefault();
window.location.href = "mens.html";

});

let kids = document.getElementById('kid');
kids.addEventListener('click', (e)=>{
e.preventDefault();
window.location.href = "kids.html";
})