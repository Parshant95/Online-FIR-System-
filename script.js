const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const datetimesetter = document.getElementById("datetime");

signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

// create a function to update the date and time
function updateDateTime() {
  const now = new Date();
  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();
  datetimesetter.textContent = currentDateTime;
}
setInterval(updateDateTime, 1000);

