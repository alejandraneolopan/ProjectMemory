/**
 * @Class Game : Creates and starts a new game.
 * @author Team QA
 *
 * @method compareCells : Compares the characters of two cells
 * @method verifyWinner : Verify if the player has won or lost.
 * @method compareCells : Compares the characters of two cells
 * @method verifyWinner : Verify if the player has won or lost.
 * @method startGame : Creates a new game
 * @method showBoardGUI : Shows the game board GUI.
 * @method showBoardConsole : Shows the game board on the console
 */
var Game = function()
{
    this.player = new Player();
    this.myBoard = new Board();
    //this.viewByConsole = new ConsoleView();
    this.viewByGUI = new GUIView();
    this.attemps = 0;
    this.numberOfClicks = 0;
    this.row1 = 0;
    this.row2 = 0;
    this.col1 = 0;
    this.col2 = 0;
    this.figure1 = new Figure();
    this.figure2 = new Figure();
    this.fails = 0;
    this.wins = 0;
};
/*
 * @method showBoardConsole : Shows the game board on the console
 */
Board.prototype.showBoardConsole = function()
{

    this.viewByConsole.ShowBoard();
};
/*
 * @method showBoardGUI : Shows the game board GUI.
 */
Board.prototype.showBoardGUI = function()
{

    this.viewByGUI.ShowBoard();
};
/*
* @method startGame : Creates a new game
*/
Game.prototype.startGame = function()
{
    //Setting a new player
    playGame.player = playGame.viewByGUI.readPlayer();
    //Inicialize Board
    playGame.dimension = parseInt(playGame.viewByGUI.readBoardDimension());
    playGame.myBoard.setDimension(playGame.dimension);
    playGame.myBoard.fillCharacter();
//Setting the at
    playGame.attemps = Math.floor( (playGame.myBoard.dimension*playGame.myBoard.dimension) / 2 );
    //Game Type
    var gameType=playGame.viewByGUI.readGameType();
    if (gameType == 'GUI')
    {
        playGame.viewByGUI.printMessage('Welcome ' + playGame.player.getName() + ' !')
    }


    playGame.viewByGUI.showBoard(playGame.myBoard);


    $('form').find('button').off('click',playGame.startGame);
    //$('form').css({"display":"none"});
    $('form').hide();
    //var button = $
};
/*
 * @method verifyWinner : Verify if the player has won or lost.
 */
Game.prototype.verifyWinner = function()
{
    if (this.wins === this.attemps)
    {
        this.viewByGUI.printMessage('Congratulations YOU WIN!!!\\\nYour Total Score is:' + this.player.getTotalScore());
        var restart = function(){location.reload();};
        var restartButton = $('<button class="StartButton">RESTART</button>');
        restartButton.on('click',restart);
        $('body').append(restartButton);
        //Hide table

    }

    if (this.fails === this.dimension)
    {
        this.viewByGUI.printMessage('GAME OVER!\\\nYour Total Score is: ' + this.player.getTotalScore());
        var restart = function(){location.reload();};
        var restartButton = $('<center><button class="StartButton">RESTART</button></center>');
        restartButton.on('click',restart);
        $('body').append(restartButton);
        $('table').hide();
    }

};
/*
 * @method compareCells : Compares the characters of two cells
 */
Game.prototype.compareCells = function()
{
    var char1 = this.figure1.getCharacter();
    var char2 = this.figure2.getCharacter();

    if (char1 === char2)
    {//Aciertos
        this.wins++;
        this.player.setCurrentScore(50);
        this.player.setTotalScore(50);
        this.viewByGUI.printMessage('Congrats! you win 50 points. You miss ' + (this.attemps - this.wins) + ' pairs');

    }
    else
    {
        this.fails++;
        this.viewByGUI.printMessage('Sorry! Try again. You have ' + (this.dimension - this.fails) + ' attempts more for fails.');

    }
    this.verifyWinner();
};
