//test if the login form has all the required fields
function validateLoginForm() {
  if ((document.forms['login'].username.value == "") ||
      (document.forms['login'].psw.value == "")) {
    alert("Please fill in all required field");
    return false;
  }
  return true;
}