const checkUserName = () => {
   const username = document.getElementById("usertext").value;
   if (username == "" ) {
     document.getElementById("name_error").innerHTML += "<p> username should not be blank </p>";
     setTimeout(() => {
       document.getElementById("name_error").innerHTML = "";
     }, 2000);
     return false;
   }
    else if ( username.length >= 15 ) {
      document.getElementById("name_error").innerHTML += "<p> username exceeds 15 characters </p>";
      console.log("chkk");
      setTimeout(() => {
        document.getElementById("name_error").innerHTML = "";
      }, 2000);
      return false;
    }
    else  if ( username.length < 8) {
       document.getElementById("name_error").innerHTML +=
         "<p> username too short . :) </p>";
       setTimeout(() => {
         document.getElementById("name_error").innerHTML = "";
       }, 2000);
       return false;
     }
   return true;
 };
 const checkEmail = () => {
   const email = document.getElementById("emailtext").value;
   if (!email.includes("@", 1) || /^[\!#$%&*_+|/>,<;{}[]()]*$/.test(email)) {
     document.getElementById("email_error").innerHTML += "<p>Wrong email id</p>";
     setTimeout(() => {
       document.getElementById("email_error").innerHTML = "";
     }, 2000);
     return false;
   }
   return true;
 };
 const checkPassword = () => {
   const password = document.getElementById("passwordtext").value;
   if (!/[0-9 a-z A-Z]+/.test(password)) {
     document.getElementById("password_error").innerHTML +=
       "<p>Wrong password</p>";
     setTimeout(() => {
       document.getElementById("password_error").innerHTML = "";
     }, 2000);
     return false;
   }
   else if (password.length < 8) {
     document.getElementById("password_error").innerHTML += "<p>Too short</p>";
     setTimeout(() => {
       document.getElementById("password_error").innerHTML = "";
     }, 2000);
     return false;
   }
   else if (!/[!@#$%^&*()_]+/.test(password)) {
     document.getElementById("password_error").innerHTML +=
       "<p>No special symbols included add !@#$%^&*()_</p>";
     setTimeout(() => {
       document.getElementById("password_error").innerHTML = "";
     }, 2000);
     return false;
   }
   return true;
 };
 document.querySelector(".submit").addEventListener("click", (e) => {
   e.preventDefault();
   const validUserName = checkUserName();
   const validEmail = checkEmail();
   const validPassword = checkPassword();
   if (validUserName && validEmail && validPassword)
     console.log("Everything is Valid :)))");
 });