/**
 * Created by alejandraneolopan on 2/10/2016.
 */
/**
 * Game Class
 * @author Team QA
 */
var Game=function()
{
    var player=new Player(1,'Canito',23 );

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

        var col1 = prompt("What column do you choose?","i.e. A");
        var row1 = prompt("What row do you choose?","i.e. 1");

        if(col1 != null && row1 != null){

            myBoard.returnOneCell(row1, col1);
            // Then ask again for a row and column and show it

            var col2 = prompt("What column do you choose?","i.e. A");
            var row2 = prompt("What row do you choose?","i.e. 1");
            if(col2 != null && row2 != null){
                myBoard.returnOneCell(row2, col2);
            }

            if(col1 === col2 && row1 === row2){
                console.log("Congrats! you win 50 points");

                player.setCurrentScore(50);
                player.setTotalScore(50);
                // if they are equal add points and set the hidden property to false

            }
            else{
                console.log("Sorry! you have to try again");
                // if they aren't equal hide the cells
            }


        }
        else{
            console.log("You need to choose a row and a column to continue playing");
        }


    }
    else{
       console.log("You need to dimension the board to start playing!");
    }


}