/**
 *
 *  Tasks:
 * Create a object called Board
 * Ask user the dimension of the board
 * Save that dimension in a var
 * MyBoard will call .SetDimension(var)
 * MyBoard.fillcharacters
 * Then show Board in the view
 * And display the board with the JS task
 *
 * Ask user what row and columm he wants to see
 * Then show that cell
 *
 * Then Ask again for a row and column
 * and show it
 *
 * Verify that that cells ara equal
 * and
 * if they are equal add points and set the hidden property to false
 * if they aren't hide the cells
 *
 *
 */
/**
 * Game Class
 * @author Team QA
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

Board.prototype.showBoardConsole = function()
{

    this.viewByConsole.ShowBoard();
};

Board.prototype.showBoardGUI = function()
{

    this.viewByGUI.ShowBoard();
};
/*
*The button activate this
*
 */
Game.prototype.startGame = function()
{
    //Setting a new player
   // this.player=this.viewByGUI.readPlayer();
    //Inicialize Board
    var dimension = playGame.viewByGUI.readBoardDimension();
    //var dimension=3;
    playGame.myBoard.setDimension(dimension);
    playGame.attemps = Math.floor( (playGame.myBoard.dimension*playGame.myBoard.dimension) / 2 );
    playGame.myBoard.fillCharacter();
    playGame.viewByGUI.showBoard(playGame.myBoard);
};

Game.prototype.verifyWinner = function()
{
    if (this.wins === this.attemps)
    {
        this.viewByGUI.printMessage('Congratulations YOU WIN!!!','Your Total Score is: ' + this.player.getTotalScore());
    }

    if (this.fails === this.dimension)
    {
        this.viewByGUI.printMessage('GAME OVER!','Your Total Score is: ' + this.player.getTotalScore());
    }
};

Game.prototype.compareCells = function()
{
    var char1 = this.figure1.getCharacter();
    var char2 = this.figure2.getCharacter();

    if (char1 === char2)
    {//Aciertos
        this.wins++;
        this.player.setCurrentScore(50);
        this.viewByGUI.printMessage('Congrats! you win 50 points');
        this.verifyWinner();
    }
    else
    {
        this.viewByGUI.printMessage('Sorry! Try again');
        this.fails++;
    }
};

var playGame;

window.onload = function()
{
    playGame = new Game();
    var buttonSave = document.getElementsByName('save_btn')[0];
    buttonSave.addEventListener('click',playGame.startGame);
};