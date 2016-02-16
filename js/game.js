/**
 * Created by alejandraneolopan on 2/10/2016.
 */
/**
 * Game Class
 * @author Team QA
 */
var Game=function()
{
    this.player=new Player(1,'Canito',23 );

    /* My tasks for tomorrow (Ana's tasks):
    * Create a object called Board
    * Ask user the dimension of the board
    * Save that dimension in a var
    * MyBoard will call .SetDimension(var)
    * MyBoard.fillcharacters
    * Then showBoard in the view--Al
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
    * */

    var myBoard = new Board();

    var dimension = prompt("Enter the dimension of the board", "i.e. 6");
    if (dimension != null) {
       myBoard.setDimension(dimension);
        myBoard.fillCharacter();
        myBoard.showBoard(); // AL

        var col = prompt("What column do you choose?","i.e. A");
        var row = prompt("What row do you choose?","i.e. 1");

        if(col != null && row != null){

            myBoard.returnOneCell(row, col);
            // Then ask again for a row and column and show it 
        }
        else{
            console.log("You need to choose a row and a column to continue playing");
        }


    }
    else{
       console.log("You need to dimension the board to start playing!");
    }


}