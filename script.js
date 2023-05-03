const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const btnPopupLogOut = document.querySelector('.btnLogin-popup1');
const iconClose = document.querySelector('.icon-close')



registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');

});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');

});


//this executes when top login button is clicked
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    document.getElementById('welcomemessage').style.display = "none";
    // console.log("document.getElementById('loginpopup').style.display == " + document.getElementById('loginpopup').style.display);
    // if(document.getElementById('loginpopup').style.display == "none"){
    //     document.getElementById('loginpopup').style.display = "";
    // }

});


//executes when logout button is clicked
btnPopupLogOut.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    if(wrapper.classList.contains('active')){
        wrapper.classList.remove('active');
    }
    console.log("document.getElementById('loginpopup').style.display == " + document.getElementById('loginpopup').style.display);
    //showing the login popup again when clicked on the log out button
    if(document.getElementById('loginpopup').style.display == "none"){
        document.getElementById('loginpopup').style.display = "";
    }

    //dislaying an alert for successfull log out
    window.alert('Logged Out Successfully');

    //clearing the values entered in the login screen
    document.getElementById('UserEmail').value = "";
    document.getElementById('UserPassword').value = "";

    //clearing the values entered in the registration screen
    document.getElementById('NewUserName').value = "";
    document.getElementById('NewUserEmail').value = "";
    document.getElementById('NewUserPassword').value = "";

    //showing the login button and hiding the logout button when logged out
    document.getElementById('login').style.display = "";
    document.getElementById('logout').style.display = "none";

    //hiding the login sucess message
    document.getElementById('loginmessage').style.display = "none";

});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');

});

//this function executes when the bottom log in button is clicked
function login(){
    wrapper.classList.remove('active-popup');
    document.getElementById('loginpopup').style.display = "none";
    // console.log("Login style: " + document.getElementById('login').style.display);

    //hiding the login button
    document.getElementById('login').style.display = "none";

    // console.log("Login style: " + document.getElementById('logout').style.display);

    //showing the logout button
    document.getElementById('logout').style.display = "";

    // console.log('login message: '+ document.getElementById('loginmessage').style.display);
    //showing the login message
    document.getElementById('loginmessage').style.display = "";

    console.log('Welcome msg: '+ document.getElementById('welcomemessage').style.display);

}



//this function executes when register button is clicked
function register(){
    wrapper.classList.remove('active-popup');
    document.getElementById('loginpopup').style.display = "none";
    // console.log("Login style: " + document.getElementById('login').style.display);
    document.getElementById('login').style.display = "none";
    // console.log("Login style: " + document.getElementById('logout').style.display);
    document.getElementById('logout').style.display = "";
}



//classList = ['active-popup', 'active'];














