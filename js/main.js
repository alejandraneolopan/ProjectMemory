/*
 * Author:  Alejandra & Ana & Samuel
 * @var playGame : Global variable
 */
var playGame;
/*
 * @method : Creates a new game and starts the game
 */
window.onload = function()
{
    playGame = new Game();

    $('form').find('button').on('click',playGame.startGame);

};
