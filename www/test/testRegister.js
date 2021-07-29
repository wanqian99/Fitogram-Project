//test if the register form has all the required fields
function validateRegisterForm() {
  if ((document.forms['register'].username.value == "") ||
      (document.forms['register'].email.value == "") ||
      (document.forms['register'].number.value == "") ||
      (document.forms['register'].psw.value == "")){
    alert("Please fill in all required field");
    return false;
  }
  return true;
}