window.onload = function(){

    const username_reg = localStorage.getItem("username");
    const email_reg = localStorage.getItem("email");
    const password_reg = localStorage.getItem("password");

    const togglePassword = document.querySelector('#togglePassword');
    
    let id = (id) => document.getElementById(id);
    
    let classes = (classes) => 
    document.getElementsByClassName(classes);
    
    let username = id("username"),
     email = id("email"),
     password = id("password"),
     form = id("form"),
     
     errorMsg = classes("error"),
     successIcon = classes("success-icon"),
     failureIcon = classes("failure-icon");
    
     form.addEventListener("submit", (e) => {
        validator_username();
        validator_email();
        validator_password();
        let engine_res = engine();
        if(engine_res != true) {
            e.preventDefault();
          }
       });
    
       let engine = () => {
        if (username.value==username_reg && email.value==email_reg && password.value==password_reg) {
            for (let i=0; i<3; ++i) {
                errorMsg[i].innerHTML = "";
                failureIcon[i].style.opacity = "0";
                successIcon[i].style.opacity = "1";
            }
            username.style.border = "2px solid green";
            email.style.border = "2px solid green";
            password.style.border = "2px solid green";
            localStorage.setItem("username_new", username.value);
            localStorage.setItem("email_new", email.value);
            localStorage.setItem("password_new", password.value);
            return true;
        }
       } 

       /*username.addEventListener("keyup", (e) =>{
        if (username.value.trim() == "") {
            errorMsg[0].innerHTML = "";
            confirm_password.style.border = "2px solid #c4c4c4";
            failureIcon[0].style.opacity = "0";
            successIcon[0].style.opacity = "0";
        }
        else if (username.value==username_reg) {
            errorMsg[0].innerHTML = "";
            username.style.border = "2px solid green";
            failureIcon[0].style.opacity = "0";
            successIcon[0].style.opacity = "1";
        }
        else if (username.value!=username_reg){
            errorMsg[0].innerHTML = "Что-то тут не так";
            username.style.border = "2px solid red";
            failureIcon[0].style.opacity = "1";
            successIcon[0].style.opacity = "0";
            document.getElementById('btn').disabled = true;
        }
       });

       email.addEventListener("keyup", (e) => {
        if (email.value.trim() == "") {
            errorMsg[1].innerHTML = "";
            confirm_password.style.border = "2px solid #c4c4c4";
            failureIcon[1].style.opacity = "0";
            successIcon[1].style.opacity = "0";
        }
        else if (email.value==email_reg) {
            errorMsg[1].innerHTML = "";
            email.style.border = "2px solid green";
            failureIcon[1].style.opacity = "0";
            successIcon[1].style.opacity = "1";
        }
        else if (email.value!=email_reg){
            errorMsg[1].innerHTML = "Что-то тут не так";
            email.style.border = "2px solid red";
            failureIcon[1].style.opacity = "1";
            successIcon[1].style.opacity = "0";
            document.getElementById('btn').disabled = true;
        }
       });

       password.addEventListener("keyup", (e) => {
        if (password.value.trim() == "") {
            errorMsg[2].innerHTML = "";
            confirm_password.style.border = "2px solid #c4c4c4";
            failureIcon[2].style.opacity = "0";
            successIcon[2].style.opacity = "0";
        }
        else if (password.value==password_reg) {
            errorMsg[2].innerHTML = "";
            password.style.border = "2px solid green";
            failureIcon[2].style.opacity = "0";
            successIcon[2].style.opacity = "1";
            document.getElementById('btn').disabled = false;
        }
        else if (password.value!=password_reg){
            errorMsg[2].innerHTML = "Что-то тут не так";
            password.style.border = "2px solid red";
            failureIcon[2].style.opacity = "1";
            successIcon[2].style.opacity = "0";
            document.getElementById('btn').disabled = true;
        }
       }); */

        username.addEventListener("keyup", (e) => {
            if (username.value.trim() == "") {
                errorMsg[0].innerHTML = "";
                username.style.border = "2px solid #c4c4c4";
                failureIcon[0].style.opacity = "0";
                successIcon[0].style.opacity = "0";
            }
       
         });

        email.addEventListener("keyup", (e) => {
            if (email.value.trim() == "") {
                errorMsg[1].innerHTML = "";
                email.style.border = "2px solid #c4c4c4";
                failureIcon[1].style.opacity = "0";
                successIcon[1].style.opacity = "0";
            }
       
        });

        password.addEventListener("keyup", (e) => {
            if (password.value.trim() == "") {
                errorMsg[2].innerHTML = "";
                password.style.border = "2px solid #c4c4c4";
                failureIcon[2].style.opacity = "0";
                successIcon[2].style.opacity = "0";
            }
       
        }); 

      let validator_username = () => {
        if (username.value.trim() == "") {
            errorMsg[0].innerHTML = "";
            username.style.border = "2px solid #c4c4c4";
            failureIcon[0].style.opacity = "0";
            successIcon[0].style.opacity = "0";
        }
        else if (username.value==username_reg) {
            errorMsg[0].innerHTML = "";
            username.style.border = "2px solid green";
            failureIcon[0].style.opacity = "0";
            successIcon[0].style.opacity = "1";
        }
        else {
            errorMsg[0].innerHTML = "Что-то тут не так";
            username.style.border = "2px solid red";
            failureIcon[0].style.opacity = "1";
            successIcon[0].style.opacity = "0";
        }
       
    };

    let validator_email = () => {
        if (email.value.trim() == "") {
            errorMsg[1].innerHTML = "";
            email.style.border = "2px solid #c4c4c4";
            failureIcon[1].style.opacity = "0";
            successIcon[1].style.opacity = "0";
        }
        else if (email.value==email_reg) {
            errorMsg[1].innerHTML = "";
            email.style.border = "2px solid green";
            failureIcon[1].style.opacity = "0";
            successIcon[1].style.opacity = "1";
        }
        else if (email.value!=email_reg){
            errorMsg[1].innerHTML = "Что-то тут не так";
            email.style.border = "2px solid red";
            failureIcon[1].style.opacity = "1";
            successIcon[1].style.opacity = "0";
        }
       
    };

    let validator_password = () => {
        if (password.value.trim() == "") {
            errorMsg[2].innerHTML = "";
            password.style.border = "2px solid #c4c4c4";
            failureIcon[2].style.opacity = "0";
            successIcon[2].style.opacity = "0";
        }
        else if (password.value==password_reg) {
            errorMsg[2].innerHTML = "";
            password.style.border = "2px solid green";
            failureIcon[2].style.opacity = "0";
            successIcon[2].style.opacity = "1";
        }
        else if (password.value!=password_reg){
            errorMsg[2].innerHTML = "Что-то тут не так";
            password.style.border = "2px solid red";
            failureIcon[2].style.opacity = "1";
            successIcon[2].style.opacity = "0";
        }
       
    }; 


    
        togglePassword.addEventListener('click', function (e) {
            // toggle the type attribute
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });
    
       
    }