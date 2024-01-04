let closebtn = document.getElementById("Closebtn");
let openbtn = document.getElementById("Openbtn");
let linkscontainer = document.getElementById("links-container");
let profileImg = document.getElementById("profile-img");
let profileName = document.getElementById("profile-name");
let glassContainer = document.getElementById("glass-container");
openbtn.style.visibility = "visible";
closebtn.style.visibility = "hidden"
profileImg.style.visibility = "hidden";
profileName.style.visibility = "hidden";
function openNav() {
document.getElementById("mySidenav").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
document.getElementById("post-img").style.width = "620px";
glassContainer.style.height = "800px";
// document.getElementById("post-content-1").style.height = "100%";
document.getElementById("post-content-1").style.width = "100%";
document.getElementById("post-content-1").style.padding = " 10px";
document.getElementById("caption").style.width = "100%";
openbtn.style.visibility = "hidden";
closebtn.style.visibility = "visible";
profileImg.style.visibility = "visible";
profileName.style.visibility = "visible";
linkscontainer.style.backgroundColor = "#FFD93D";
linkscontainer.style.borderColor = "#FFD93D";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "85px";
document.getElementById("main").style.marginLeft= "85px";
glassContainer.style.height = "400px";
document.getElementById("post-img").style.width = "500px";
document.getElementById("post-content-1").style.width = "25%";
document.getElementById("post-content-1").style.padding = " 0px";
document.getElementById("caption").style.width = "200px";
openbtn.style.visibility = "visible";
closebtn.style.visibility = "hidden";
profileImg.style.visibility = "hidden";
profileName.style.visibility = "hidden";
linkscontainer.style.backgroundColor = "#F6F1E9";
linkscontainer.style.borderColor = "#FFD93D";
}



// Opening new profile page
function openProfileDisplay() {
  // Specify the URL of the new page you want to open
  var newPageUrl = 'http://127.0.0.1:5500/profile-display.html';

  // Open the new page in a new tab or window
  window.open(newPageUrl, '_blank');
}

function openNewPost() {
  // Specify the URL of the new page you want to open
  var newPageUrl = 'http://127.0.0.1:5500/new-post.html';

  // Open the new page in a new tab or window
  window.open(newPageUrl, '_blank');
}
function openProfileUpdate() {
  // Specify the URL of the new page you want to open
  var newPageUrl = 'http://127.0.0.1:5500/profile-update.html';

  // Open the new page in a new tab or window
  window.open(newPageUrl, '_blank');
}