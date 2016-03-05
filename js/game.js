/*
 * Author:  Alejandra & Ana & Samuel
 * @Class Game : Creates and starts a new game.
 * @method showBoardGUI : Shows the game board GUI.
 *
 */
var Game = function()
{
    this.player = new Player();
    this.myBoard = new Board();
    this.viewByConsole = null;
    this.viewByGUI = new GUIView();
    this.numberOfPairs = 0;
    this.numberOfClicks = 0;
    this.row1 = 0;
    this.row2 = 0;
    this.col1 = 0;
    this.col2 = 0;
    this.figure1 = new Figure();
    this.figure2 = new Figure();
    this.fails = 0;
    this.wins = 0;
    this.gameType='GUI';
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
    //Setting the number of pairs
    playGame.numberOfPairs = Math.floor( (playGame.myBoard.dimension*playGame.myBoard.dimension) / 2 );
    //Game Type
    this.gameType=playGame.viewByGUI.readGameType();
    //HTML - GUI - View
    if (this.gameType == 'GUI')
    {
        playGame.viewByGUI.printMessage('Welcome ' + playGame.player.getName() + ' !')
        playGame.viewByGUI.showBoard(playGame.myBoard);
    }
    else //Console - View
    {
         //Open DevTools
        // var openDevToolEvent=jQuery.Event( 'keydown', { keyCode: 123, which: 123 });
       // $('body').trigger(openDevToolEvent);
        alert('Press F12 key');
        playGame.viewByConsole = new ConsoleView(playGame.myBoard);
        playGame.viewByGUI.hideSettings();
        alert('Welcome ' + playGame.player.getName() + ' !');
        playGame.viewByConsole.showBoard(playGame.myBoard);
        playGame.playGameByConsole();
    }

    playGame.viewByGUI.hideSettings();
};
/*
 * @method verifyWinner : Verify if the player has won or lost.
 */
Game.prototype.verifyWinner = function()
{ var msg='';
    if (this.wins === this.numberOfPairs)
    {
        msg='Congratulations YOU WIN!!!\\\nYour Total Score is:' + this.player.getTotalScore();
        this.viewByGUI.printMessage(msg);

    }

    if (this.fails === this.dimension)
    {
        msg='GAME OVER!\\\nYour Total Score is: ' + this.player.getTotalScore();
        this.viewByGUI.printMessage(msg);
        if (this.gameType == 'GUI') {
            this.viewByGUI.hideBoard();
        }

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
    {//wins
        this.wins++;
        this.player.setCurrentScore(50);
        this.player.setTotalScore(50);
        this.viewByGUI.printMessage('Congrats! you win 50 points. You miss ' + (this.numberOfPairs - this.wins) + ' pairs');

    }
    else
    {
        this.fails++;
        this.viewByGUI.printMessage('Sorry! Try again. You have ' + (this.dimension - this.fails) + ' attempts more for fails.');

    }
    this.verifyWinner();
};
/*
 * @method showBoardConsole : Shows the game board on the console
 */
Game.prototype.playGameByConsole=function(){

    while ( this.fails < this.myBoard.dimension && this.wins < this.numberOfPairs)
    {
        this.col1 = prompt("1.What column do you choose?", "i.e. 2");
        this.row1 = prompt("1.What row do you choose?", "i.e. 1");

        if ( (this.col1 !== null) && (this.row1 !== null) )
        {
            this.figure1 = this.myBoard.returnOneCell(this.row1, this.col1);
            // Then ask again for a row and column and show it
            this.viewByConsole.showBoard();

            this.col2 = prompt("2. What column do you choose?", "i.e. 1");
            this.row2 = prompt("2. What row do you choose?", "i.e. 1");

            if ( (this.col2 !== null) && (this.row2 !== null) )
            {
                this.figure2 = this.myBoard.returnOneCell(this.row2, this.col2);
                this.viewByConsole.showBoard();
            }
            else
            {
                alert("You need to choose a row and a column to continue playing, please restart the game");
                break;
            }
            this.compareCells();
        }
        else
        {
            alert("You need to choose a row and a column to continue playing");
        }
    }
};