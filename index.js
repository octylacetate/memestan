let closebtn = document.getElementById("Closebtn");
let openbtn = document.getElementById("Openbtn");
let linkscontainer = document.getElementById("links-container");
let profileImg = document.getElementById("profile-img");
let profileName = document.getElementById("profile-name");
openbtn.style.visibility = "visible";
closebtn.style.visibility = "hidden"
profileImg.style.visibility = "hidden";
profileName.style.visibility = "hidden";
function openNav() {
document.getElementById("mySidenav").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
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
openbtn.style.visibility = "visible";
closebtn.style.visibility = "hidden";
profileImg.style.visibility = "hidden";
profileName.style.visibility = "hidden";
linkscontainer.style.backgroundColor = "#F6F1E9";
linkscontainer.style.borderColor = "#FFD93D";
}


// Grid Loop

// Grid Loop
function gridLoop() {
  // Variables for the loop
  let imageGrid = document.getElementById("imageGrid");
  
  // Clear previous content
  imageGrid.innerHTML = "";

  // Nested loop to iterate through images
  for (let i = 1; i <= 13; i++) {
      for (let j = 1; j <= 4; j++) {
          // Create image element
          let img = document.createElement("img");
          img.src = "/" + j + ".jpg";
          img.alt = "Image " + j;

          // Append image to the imageGrid div
          imageGrid.appendChild(img);
      }
  }
}

// Call gridLoop when the page loads
document.addEventListener('DOMContentLoaded', gridLoop);

document.getElementById('likeButton').addEventListener('click', function() {
  // Implement like functionality
  alert('Liked!');
});

document.getElementById('commentButton').addEventListener('click', function() {
  // Implement comment functionality
  alert('Commented!');
});

document.getElementById('shareButton').addEventListener('click', function() {
  // Implement share functionality
  alert('Shared!');
});

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