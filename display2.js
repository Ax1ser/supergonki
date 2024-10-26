window.onload = function(){

    document.getElementById("finishdata").innerHTML=localStorage.getItem("username_new");
    let user2 = localStorage.getItem("username_new");
    let email2 = localStorage.getItem("email_new");
    let password2 = localStorage.getItem("password_new");
    
    function Racer2(user, email, password) {
        this.user = user;
        this.email = email;
        this.password = password;
      }
    
    var log2 = new Racer2(user2,email2,password2);
    
    console.table(log2);

    /*document.getElementsByClassName("button").onclick = function() {
      window.location.href = 'http://www.google.com';
    }*/
    
    }