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
    this.player=new Player(1,'Canito',23 );
    this.myBoard = new Board();

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

Game.prototype.showBoard=function()
{
    //First time
    var cells=this.myBoard.returnCells();
    var cols=this.myBoard.dimension;
    var rows=this.myBoard.dimension;
    var rowActual,colActual;
    var table2= document.createElement('table');
    table2.setAttribute('align','center');
    var newButton,textButton;
    var tr2,td2;
    var cellIsHidden;
    for (var i2 = 0; i2 < rows; i2++) {
        tr2 = document.createElement('tr');
        for (var j = 0; j < cols; j++)
        {
            //Add a button
            newButton = document.createElement('button');
            cellIsHidden=cells[i2][j].showState();
            if (cellIsHidden)
            {
                textButton = document.createTextNode(cells[i2][j].hiddenCharacter);
            }// Create a text node with the cell value
            else {
                textButton = document.createTextNode(cells[i2][j].character);
            }
            newButton.appendChild(textButton);
            newButton.setAttribute('row',i2);
            newButton.setAttribute('col',j);
            newButton.addEventListener('click',function(e){
                rowActual=e.target.getAttribute('row');
                colActual=e.target.getAttribute('col');
                e.target.textContent=cells[rowActual][colActual].character;

            });
            //Put on td
            td2 = document.createElement('td');
            td2.appendChild(newButton);
            //tr2.innerHTML = tr2.innerHTML.concat( td2.outerHTML);
            tr2.appendChild(td2);
        }
        table2.appendChild(tr2);

    }

    var body1=document.getElementsByTagName("body")[0];

    body1.appendChild(table2);
    document.body.appendChild(table2);
    //Next time is through by figures
};

Game.prototype.showBoardConsole=function()
{
    //First time
    var cells=this.myBoard.returnCells();
    var cols=this.myBoard.dimension;
    var rows=this.myBoard.dimension;
    var table2= document.createElement('table');
    table2.setAttribute('align','center');
    var newButton,textButton;
    var tr2,td2;

    for (var i2 = 0; i2 < rows; i2++) {
        tr2 = document.createElement('tr');
        for (var j = 0; j < cols; j++)
        {
            //Add a button
            newButton = document.createElement('button');

            if (cells[i2][j].showState)
            {
                textButton = document.createTextNode(cells[i2][j].hiddenCharacter);
            }// Create a text node with the cell value
            else {
                textButton = document.createTextNode(cells[i2][j].character);
            }
            newButton.appendChild(textButton);
            newButton.setAttribute('row',i2);
            newButton.setAttribute('col',j);
            newButton.addEventListener('click',function(e){
                e.target.textContent=cells[e.target.getAttribute('row')][e.getAttribute('col')].character;

            });
            //Put on td
            td2 = document.createElement('td');
            td2.appendChild(newButton);
            //tr2.innerHTML = tr2.innerHTML.concat( td2.outerHTML);
            tr2.appendChild(td2);
        }
        table2.appendChild(tr2);

    }

    var body1=document.getElementsByTagName("body")[0];

    body1.appendChild(table2);
    document.body.appendChild(table2);
    //Next time is through by figures
};
window.onload=function() {
    var game3 = new Game();
};