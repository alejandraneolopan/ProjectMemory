/**
 * Created by alejandraneolopan on 3/5/2016.
 */
/*
 * @var playGame : Global variable
 */
var playGame;
/*
 * @method : Creates a new game and starts the game
 */
window.onload = function()
{
    playGame = new Game();
    //var buttonSave = document.getElementsByName('save_btn')[0];
    //buttonSave.addEventListener('click',playGame.startGame);
    $('form').find('button').on('click',playGame.startGame);
    //$('form').find('button').off('click',playGame.startGame)
};
