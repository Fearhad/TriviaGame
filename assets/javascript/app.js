
var menuSong = $("#menuMusic");
var gameSong = $("#gameMusic");
var creditsSong = $("#creditsMusic")
var gameMenu = $("#menuScreen");
var gameMain = $("#gameScreen");
var gameCredits = $("#creditsScreen")
var displayScreens = [menuScreen, gameScreen, creditsScreen, gameOverScreen];

var game = {
    showScreen: function (activeDisplay) {
        displayScreens.forEach(function (currentDisplay) {
            console.log(currentDisplay);
            console.log(activeDisplay);
          if (currentDisplay == activeDisplay[0]) {
            $(currentDisplay).css("display", "block");
          } else {
            $(currentDisplay).css("display", "none");
          }
        })
      },

}

$(document).ready(function() {
    function mainMenu() {
        game.showScreen(gameMenu);
        menuSong[0].play();
      }
      mainMenu();
});

document.querySelectorAll('#play')[0].addEventListener('click', function () {
    game.showScreen(gameMain);
    // game.gameUI.initGame();
    menuSong[0].pause();
    gameSong[0].play();
  });

  document.querySelectorAll('#credits')[0].addEventListener('click', function () {
    menuSong[0].pause();
    game.showScreen(gameCredits);
    creditsSong[0].play();
  
  });