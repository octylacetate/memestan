let closebtn = document.getElementById("Closebtn");
let openbtn = document.getElementById("Openbtn");
let linkscontainer = document.getElementById("links-container");
let profileImg = document.getElementById("profile-img");
let profileName = document.getElementById("profile-name");
openbtn.style.visibility = "visible";
document.getElementById('Closebtn').style.visibility = "hidden";
profileImg.style.visibility = "hidden";
profileName.style.visibility = "hidden";
function openNav() {
document.getElementById("mySidenav").style.width = "250px";
console.log("gggg");
openbtn.style.visibility = "hidden";
closebtn.style.visibility = "visible";
profileImg.style.visibility = "visible";
profileName.style.visibility = "visible";
linkscontainer.style.backgroundColor = "#FFD93D";
linkscontainer.style.borderColor = "#FFD93D";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "85px";

openbtn.style.visibility = "visible";
closebtn.style.visibility = "hidden";
profileImg.style.visibility = "hidden";
profileName.style.visibility = "hidden";
linkscontainer.style.backgroundColor = "#F6F1E9";
linkscontainer.style.borderColor = "#FFD93D";
}