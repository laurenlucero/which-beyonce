var bCards = document.querySelector('.b-cards');
var winScreen = document.querySelector('.win-screen');
var mainScreen = document.querySelector('main');

window.onload = function hideWinPage() {
  winScreen.classList.add('hidden');
}


// sample event to add back in win page

// bCards.addEventListener('click', switchScreens)
//
// function switchScreens() {
//   winScreen.classList.remove('hidden');
//   mainScreen.classList.add('hidden');
// }
