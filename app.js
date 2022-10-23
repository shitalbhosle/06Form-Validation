const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
});

const setError = (element,message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');

}
const setSuccess = element =>{
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  inputControl.classList.remove('error');
  inputControl.classList.add('success');

}
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isAllLetter = username =>{
  var matches = sequence.match(/[a-zA-Z]/g);
  return matches.test(String(username));
}


const validateInputs = () =>{
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  // name validation
  if(usernameValue === ''){
    setError(username, 'Username is required');
  }
  else if(!isAllLetter){
    setError(username, 'only charactes are allowed');
  }
  else{
    setSuccess(username);
  }
  // email validation
  if(emailValue === ''){
    setError(email, 'Email is required');
  }
  else if(!isValidEmail){
    setError(email, 'Provide valid email address');
  }
  else{
    setSuccess(email);
  }
  //password validation
  if(passwordValue === ''){
    setError(password, 'Password is required');
  }
  else if(passwordValue.length < 8){
    setError(password, 'Password must be atleast 8 character.')
  }
  else{
    setSuccess(password);
  }

  //confirmation
  if(password2Value === ''){
    setError(password2 , 'Password is required');
  }
  else if(password2Value !== passwordValue){
    setError(password2, "Password doesn't matches");
  }
  
  else{
    setSuccess(password2);
  }

  // alert("form submitted successfully")

}