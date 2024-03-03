const datetimesetter = document.getElementById("datetime");
// create a function to update the date and time
function updateDateTime() {
  const now = new Date();
  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();
  datetimesetter.textContent = currentDateTime;
}
setInterval(updateDateTime, 1000);

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});
searchBtn.addEventListener("click", () => {
  // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});
// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
  }
}

function redirectToComplaintPage() {
  window.location.href = "complaint/index.html"; // Replace "another_page.html" with the actual URL of the page you want to navigate to
}
// redirectToSafetyPage
// redirectToviewfirPage
function redirectToviewcasePage() {
  window.location.href = "progress/progres.html"; // Replace "another_page.html" with the actual URL of the page you want to navigate to
}
function redirectToMissingPage() {
  window.location.href = "another.html"; // Replace "another_page.html" with the actual URL of the page you want to navigate to
}
function redirectToTelephonePage() {
  window.location.href = "phoneno/index.html"; // Replace "another_page.html" with the actual URL of the page you want to navigate to
}
function redirectTostationPage() {
  window.location.href = "another_page.html"; // Replace "another_page.html" with the actual URL of the page you want to navigate to
}
function redirectToconstituPage() {
  window.location.href = "constitution/Constitu.html"; // Replace "another_page.html" with the actual URL of the page you want to navigate to
}
