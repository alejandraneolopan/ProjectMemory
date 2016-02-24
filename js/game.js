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

var Game=function()
{
    this.player=new Player();
    this.myBoard = new Board();
    //this.viewByConsole = new ConsoleView();
    this.viewByGUI = new GUIView();
    this.attemps=0;
    this.numberOfClicks=0;
    this.row1=0;
    this.row2=0;
    this.col1=0;
    this.col2=0;
    this.figure1=new Figure();
    this.figure2=new Figure();
    this.fails = 0;
    this.wins = 0;
};
Board.prototype.showBoardConsole = function(){

    this.viewByConsole.ShowBoard();
};
Board.prototype.showBoardGUI = function(){

    this.viewByGUI.ShowBoard();
};
Game.prototype.startGame=function(){
    //Setting a new player
    this.player=this.viewByGUI.readPlayer();
    //Inicialize Board
    var dimension=this.viewByGUI.readBoardDimension();
    this.myBoard.setDimension(dimension);
    this.myBoard.fillCharacter();

    this.viewByGUI.showBoard(this.myBoard);



};
var playGame;
window.onload=function() {
   playGame = new Game();
    playGame.startGame();
};