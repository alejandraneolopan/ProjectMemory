/**
 * Created by SamuelSahonero on 2/23/2016.
 */
var GUIView=function(gameToPlay)
{
    this.myGame=gameToPlay;
};

GUIView.prototype.readPlayer=function() {

    var player=new Player();
    //Get all data of html file
    return player;
};

GUIView.prototype.readBoardDimension=function() {
    var dimension = prompt("Enter the dimension of the board", "i.e. 6");
    if (dimension != null) {
        return dimension;
    }

};

  //DisplayOneCell(x,y)

                var figure1 = this.myBoard.returnOneCell(row1, col1);
                // Then ask again for a row and column and show it
                this.myBoard.showBoardConsole();

 //CompareTwoCell(x1,y1,x2,y2)

                if (figure1.character === figure2.character) {
                    alert("Congrats! you win 50 points");

                    //this.player.setCurrentScore(50);
                    this.player.setTotalScore(50);

                    wins = wins + 1;
                    // if they are equal add points and set the hidden property to false


                }
                else {
                    //HideOneCell
                    this.myBoard.hiddenOneCell(row1, col1);
                    this.myBoard.hiddenOneCell(row2, col2);
                    alert("Sorry! you have to try again");
                    this.myBoard.showBoardConsole();
                    // if they aren't equal hide the cells
                    fails = fails +1;
                }

//Winner
        if (wins == numberOfPairs){
            alert("Congratulations YOU WIN!!!");
            alert("Your Total Score is: " + this.player.getTotalScore());
        }
        else{
            alert("GAME OVER!");

        }


GUIView.prototype.showBoard=function()
{
    //Second time--> Quit table-->Clear
    //First time

    var cells=this.myGame.myBoard.returnCells();
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
            {// Create a text node with the cell value
                textButton = document.createTextNode(cells[i2][j].hiddenCharacter);
            }
            else
            {
                textButton = document.createTextNode(cells[i2][j].character);
            }
            newButton.appendChild(textButton);
            newButton.setAttribute('row',i2);
            newButton.setAttribute('col',j);
            newButton.addEventListener('click',function(e){
                //****************------------------------Otra funcion q cuente si ya son 2 ==>Compare
                rowActual=e.target.getAttribute('row');
                colActual=e.target.getAttribute('col');
                e.target.textContent=cells[rowActual][colActual].character;

            });
            //Put on td
            td2 = document.createElement('td');
            td2.appendChild(newButton);
            tr2.appendChild(td2);
        }
        table2.appendChild(tr2);

    }

    var body1=document.getElementsByTagName("body")[0];

    body1.appendChild(table2);
    document.body.appendChild(table2);
    //Next time is through by figures
};

