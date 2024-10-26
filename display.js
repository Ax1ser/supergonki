window.onload = function(){

document.getElementById("finaldata").innerHTML=localStorage.getItem("username");
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

setTimeout(function () {
      window.location.href = "mainpage.html"; //will redirect to your blog page (an ex: blog.html)
  }, 3000); //will call the function after 2 secs.
}