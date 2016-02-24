/**
 * Created by SamuelSahonero on 2/23/2016.
 */
var GUIView=function()
{
    this.myBoard=null;
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


GUIView.prototype.showBoard=function(boardToPlay)
{   this.myBoard=boardToPlay;
    //Second time--> Quit table-->Clear
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
            newButton.addEventListener('click',this.displayOneCell);
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


GUIView.prototype.displayOneCell=function(e){

        var cells=playGame.myBoard.returnCells();
        var rowActual=e.target.getAttribute('row');
        var colActual=e.target.getAttribute('col');
        e.target.textContent=cells[rowActual][colActual].character;//*****Hidden==>False......displayOneCell
        playGame.numberOfClicks++;
        switch (playGame.numberOfClicks)
        {
            case 1:
                playGame.figure1=cells[rowActual][colActual];
                playGame.row1=rowActual;
                playGame.col1=colActual;
                break;
            case 2:
                playGame.figure2=cells[rowActual][colActual];
                playGame.row2=rowActual;
                playGame.col2=colActual;
                var char1=playGame.figure1.getCharacter();
                var char2=playGame.figure2.getCharacter();
                if (char1 === char2) {//Aciertos
                    playGame.wins++;
                    playGame.player.setCurrentScore(50);
                    this.printMessage("Congrats! you win 50 points");  //*****HTML ==> Cuadro de texto que diga q gano 50
                    playGame.verifyWinner();//*****Verify winner
                }
                else
                {
                    playGame.fails++;
                    //Set en Oculto
                }
                break;
            default:
                var char1=playGame.figure1.getCharacter();
                var char2=playGame.figure2.getCharacter();
                if (char1 != char2) {
                    this.hiddeSelectedButtons();///*******myBoard.hiddenOneCell(x,y)//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                }

                break;
        }

};
/*                else {
 //HideOneCell
 this.myGame.myBoard.hiddenOneCell(row1, col1);
 this.myGame.myBoard.hiddenOneCell(row2, col2);
 alert("Sorry! you have to try again");
 this.myGame.myBoard.showBoardConsole();
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
 */