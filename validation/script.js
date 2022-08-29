function validate() {
    var email = document.getElementById('email').value
    var pass = document.getElementById('password').value

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var isValidEmail = re.test(email);

    var pwdre = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    var isValidPWD = pwdre.test(pass)

    if (isValidPWD && isValidEmail) {
        alert("Valid Email Address and Password");
        return true;
    } else { 
        alert("Not a valid e-mail address or password");
        return false;
    }
}

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }