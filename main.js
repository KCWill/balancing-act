var welcomeWindow = document.querySelector('.welcomeBox');
var closeButton = document.querySelector('#close');

closeButton.addEventListener('click', hide);

function hide() {
  welcomeWindow.classList.add('hiddenWindow');
}
