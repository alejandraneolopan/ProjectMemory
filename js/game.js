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
    this.viewByConsole = new ConsoleView(this.myBoard);
    this.viewByGUI = new GUIView(this.myBoard);
};
Board.prototype.showBoardConsole = function(){

    this.viewByConsole.ShowBoard();
};
Board.prototype.showBoardGUI = function(){

    this.viewByGUI.ShowBoard();
};
Game.prototype.startGame=function(){
    //Setting a new player
    this.player.createPlayer();


    var fails = 0;
    var wins = 0;

    var dimension = prompt("Enter the dimension of the board", "i.e. 6");
    if (dimension != null) {
        this.myBoard.setDimension(dimension);
        this.myBoard.fillCharacter();
        this.myBoard.showBoardConsole(); // AL
        var numberOfPairs = (dimension*dimension)/2;
        while ( fails < dimension && wins < numberOfPairs ) {
            var col1 = prompt("What column do you choose?", "i.e. 2");
            var row1 = prompt("What row do you choose?", "i.e. 1");

            if (col1 != null && row1 != null) {

                var figure1 = this.myBoard.returnOneCell(row1, col1);
                // Then ask again for a row and column and show it
                this.myBoard.showBoardConsole();
                var col2 = prompt("What column do you choose?", "i.e. 1");
                var row2 = prompt("What row do you choose?", "i.e. 1");
                if (col2 != null && row2 != null) {
                    var figure2 = this.myBoard.returnOneCell(row2, col2);
                    this.myBoard.showBoardConsole();
                }//here must be an ELSE!!!!

                if (figure1.character === figure2.character) {
                    alert("Congrats! you win 50 points");

                    //this.player.setCurrentScore(50);
                    this.player.setTotalScore(50);

                    wins = wins + 1;
                    // if they are equal add points and set the hidden property to false


                }
                else {
                    this.myBoard.hiddenOneCell(row1, col1);
                    this.myBoard.hiddenOneCell(row2, col2);
                    alert("Sorry! you have to try again");
                    this.myBoard.showBoardConsole();
                    // if they aren't equal hide the cells
                    fails = fails +1;
                }


            }
            else {
                alert("You need to choose a row and a column to continue playing");
            }
        }

        if (wins == numberOfPairs){
            alert("Congratulations YOU WIN!!!");
            alert("Your Total Score is: " + this.player.getTotalScore());
        }
        else{
            alert("GAME OVER!");

        }


    }
    else{
        alert("You need to dimension the board to start playing!");
    }




};
