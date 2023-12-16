document.addEventListener('DOMContentLoaded', () => {
  let mini = true;
  const debounceTime = 100;
  const animationDuration = 200;
  let timer;

  const sidebar = document.querySelector('.sidebar');
  const profileIcon = document.getElementById('profile-img');
  const profileName = document.querySelector('.profile-name');
  var mainContent = document.getElementById("main");

  profileIcon.style.visibility = 'hidden';
  profileName.style.visibility = 'hidden';

  function isMouseOverSidebarContent() {
    // Check if the mouse is over any link, profile name in the sidebar
    return Array.from(sidebar.querySelectorAll('a, .profile-name')).some(element => element.matches(':hover'));
  }

  function isMouseOverProfileIcon() {
    return profileIcon.matches(':hover');
  }

  function toggleSidebar() {
    if (mini && !isMouseOverSidebarContent()) {
      console.log('Opening sidebar');
      sidebar.style.width = '300px';
      mainContent.style.marginLeft = "300px";
      profileIcon.style.visibility = 'visible';
      profileName.style.visibility = 'visible';
      mini = false;
    } else if (!isMouseOverSidebarContent() && !isMouseOverProfileIcon()) {
      console.log('Closing sidebar');
      sidebar.style.width = '85px';
      mainContent.style.marginLeft = "0px";
      setTimeout(() => {
        profileIcon.style.visibility = 'hidden';
        profileName.style.visibility = 'hidden';
      }, animationDuration);
      mini = true;
    }
  }

  sidebar.addEventListener('mouseover', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      toggleSidebar();
    }, debounceTime);
  });

  sidebar.addEventListener('mouseleave', () => {
    clearTimeout(timer);
    if (!mini) {
      timer = setTimeout(() => {
        toggleSidebar();
      }, debounceTime);
    }
  });

  profileIcon.addEventListener('mouseenter', () => {
    clearTimeout(timer);
  });

  profileIcon.addEventListener('mouseleave', () => {
    if (!isMouseOverSidebarContent()) {
      timer = setTimeout(() => {
        toggleSidebar();
      }, debounceTime);
    }
  });
});



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