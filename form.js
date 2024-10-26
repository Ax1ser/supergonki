window.onload = function(){

const togglePassword = document.querySelectorAll('#togglePassword');

let id = (id) => document.getElementById(id);

let classes = (classes) => 
document.getElementsByClassName(classes);

let username = id("username"),
 email = id("email"),
 password = id("password"),
 confirm_password = id("confirm_password"),
 form = id("form"),
 
 errorMsg = classes("error"),
 successIcon = classes("success-icon"),
 failureIcon = classes("failure-icon");

 const requirementList = document.querySelectorAll(".requirement-list li");

 const requirements = [
    { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
    { regex: /[0-9]/, index: 1 }, // At least one number
    { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
    { regex: /[A-Z]/, index: 3 }, // At least one uppercase letter
    { regex: /[^A-Za-z0-9]/, index: 4 }, // At least one special character
]

const captcha = document.querySelector(".captcha-text"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector(".captcha-input input"),
checkBtn = document.querySelector(".check-btn"),
statusTxtError = document.querySelector(".status-text-error"),
statusTxtOkay = document.querySelector(".status-text-okay");

let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let status = false;

 form.addEventListener("submit", (e) => {
    engine(username, 0, "Надо придумать ник...");
    engine(email, 1, "Почта для связи нужна очень...");
    engine(password, 2, "Без пароля никак, брат...");
    if(status == true) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
    }
    else { 
        e.preventDefault();
    }
    //sendMail();
   });

   let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
        status = false;
    } 
    
    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";

    }
   }

   let checker = () => {
    let counter = 0;
    requirementList.forEach(item => {
        if(item.classList.contains("valid")) {
            counter++;
        }
     })
        if (counter==5) {
            errorMsg[2].innerHTML = "";
            password.style.border = "2px solid green";
            failureIcon[2].style.opacity = "0";
            successIcon[2].style.opacity = "1";
        }
        else {
            errorMsg[2].innerHTML = "А все ли галочки стоят?";
            password.style.border = "2px solid red";
            failureIcon[2].style.opacity = "1";
            successIcon[2].style.opacity = "0";
        }
    
   }
   

   password.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        // Check if the password matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];
        // Updating class and icon of requirement item if requirement matched or not
        if (isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fas fa-solid fa-check";
            checker();
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fas fa-solid fa-circle";
            checker();
        }
    });
});
        username.addEventListener("keyup", () => {
            errorMsg[0].innerHTML = "";
            username.style.border = "2px solid #c4c4c4";
            failureIcon[0].style.opacity = "0";
            successIcon[0].style.opacity = "0";
        })
        email.addEventListener("keyup", () => {
            errorMsg[1].innerHTML = "";
            email.style.border = "2px solid #c4c4c4";
            failureIcon[1].style.opacity = "0";
            successIcon[1].style.opacity = "0";
        })


    confirm_password.addEventListener("keyup", (e) => {
        if (confirm_password.value.trim() == "") {
            errorMsg[3].innerHTML = "";
            confirm_password.style.border = "2px solid #c4c4c4";
            failureIcon[3].style.opacity = "0";
            successIcon[3].style.opacity = "0";
            status = false;
        }
        else if (confirm_password.value==password.value) {
            errorMsg[3].innerHTML = "";
            confirm_password.style.border = "2px solid green";
            failureIcon[3].style.opacity = "0";
            successIcon[3].style.opacity = "1";
            status = true;
        }
        else {
            errorMsg[3].innerHTML = "Пароли не совпадают";
            confirm_password.style.border = "2px solid red";
            failureIcon[3].style.opacity = "1";
            successIcon[3].style.opacity = "0";
            status = false;
        }
       
    });

    function sendMail() {
        var mailmessage = document.getElementById("finaltext").value;
        window.location.href = "mailto:li-vai@mail.com?subject=Ты в гонке!&mailmessage"+mailmessage;
    }

    togglePassword[0].addEventListener('click', function (e) {

        const type1 = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type1);

    this.classList.toggle('fa-eye-slash');
    });

    togglePassword[1].addEventListener('click', function (e) {

        const type2 = confirm_password.getAttribute('type') === 'password' ? 'text' : 'password';
        confirm_password.setAttribute('type', type2);

    this.classList.toggle('fa-eye-slash');
    });

    function getCaptcha(){
        captcha.innerText = null;
        for (let i = 0; i < 6; i++) { 
          let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
          captcha.innerText += ` ${randomCharacter}`; 
        }
      }

    getCaptcha();

    reloadBtn.addEventListener("click", ()=>{
        removeContent();
        getCaptcha();
    });

    checkBtn.addEventListener("click", e =>{
        e.preventDefault(); 
        statusTxtError.style.display = "block";
        statusTxtOkay.style.display = "block";

        let inputVal = inputField.value.split('').join(' ');
        
        if(inputVal == captcha.innerText){ 
            inputField.style.border = "2px solid green";
            statusTxtOkay.innerHTML = "Ты не автобот!";
            statusTxtError.innerHTML = "";
            status = true;
        } 
        else if (inputVal.trim() == "") {
            inputField.style.border = "2px solid red";
            statusTxtError.innerHTML = "Ничё не написал ну";
            statusTxtOkay.innerHTML = "";
            status = false;
        }
        else{
            inputField.style.border = "2px solid red";
            statusTxtError.innerHTML = "Ты кто, автобот? Попробуй ещё раз!";
            statusTxtOkay.innerHTML = "";
            status = false;
        }
      });

      function removeContent(){
        inputField.value = "";
        captcha.innerText = "";
        statusTxtError.style.display = "none";
        statusTxtOkay.style.display = "none";
        inputField.style.border = "2px solid #c4c4c4";
        status = false;
       }

   
}