window.onload = function(){

    document.getElementById("finaldata").value=localStorage.getItem("username");
    let user1 = localStorage.getItem("username");
    let email1 = localStorage.getItem("email");
    let password1 = localStorage.getItem("password");
    
    function Racer(user, email, password) {
        this.user = user;
        this.email = email;
        this.password = password;
      }
    
    var log = new Racer(user1,email1,password1);
    
    console.table(log);
    
    }