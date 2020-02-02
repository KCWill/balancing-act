// Hiding Welcome Window
var welcomeWindow = document.querySelector('.welcomeBox');
var closeButton = document.querySelector('#close');

closeButton.addEventListener('click', hide);

function hide() {
  welcomeWindow.classList.add('hiddenWindow');
};

//Page Navigation

//Defining input images
var navDashboard = document.querySelector('#dashboardIcon');
var navWallet = document.querySelector('#walletIcon');
var navProfile = document.querySelector('#profileIcon');

//Page variables

var dashboard = document.querySelector('.dashboard');


//Clicking on dashboard icon
navDashboard.addEventListener('click', borderDash);
function borderDash(){
  if (navDashboard.classList.contains('navImageCurrent')){
    return
  }
  else {
  navWallet.classList.remove('navImageCurrent');
  navProfile.classList.remove('navImageCurrent');
  navDashboard.classList.remove('navImageUnmarked');
  navDashboard.classList.add('navImageCurrent');
  navWallet.classList.add('navImageUnmarked');
  navProfile.classList.add('navImageUnmarked');
  dashboard.style.display = 'inline';
}}

//Clicking on wallet icon
navWallet.addEventListener('click', borderWall);
function borderWall(){
  if (navWallet.classList.contains('navImageCurrent')){
    return
  }
  else {
  navDashboard.classList.remove('navImageCurrent');
  navProfile.classList.remove('navImageCurrent');
  navWallet.classList.remove('navImageUnmarked');
  navWallet.classList.add('navImageCurrent');
  navDashboard.classList.add('navImageUnmarked');
  navProfile.classList.add('navImageUnmarked')
  dashboard.style.display = 'none';
}
}

//Clicking on profile icon
navProfile.addEventListener('click', borderProf);
function borderProf(){
  if (navProfile.classList.contains('navImageCurrent')){
    return
  }
  else {
  navDashboard.classList.remove('navImageCurrent');
  navWallet.classList.remove('navImageCurrent');
  navProfile.classList.remove('navImageUnmarked')
  navProfile.classList.add('navImageCurrent');
  navWallet.classList.add('navImageUnmarked');
  navDashboard.classList.add('navImageUnmarked')
}
}
