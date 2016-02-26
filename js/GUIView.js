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
   /* var dimension = prompt('Enter the dimension of the board', 'i.e. 6');
    if (dimension != null) {
        return dimension;
    }*/
    var dimensionBoard=document.getElementsByName('board_dim')[0].value;
    return dimensionBoard;

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

    document.body.appendChild(table2);
    //Next time is through by figures
};


GUIView.prototype.displayOneCell=function(e){

        var cells=playGame.myBoard.returnCells();
        var rowActual=e.target.getAttribute('row');
        var colActual=e.target.getAttribute('col');
        var figure = playGame.myBoard.returnOneCell(rowActual, colActual);
        e.target.textContent=figure.getCharacter();
        playGame.numberOfClicks++;
        switch (playGame.numberOfClicks)
        {
            case 1:
                playGame.figure1=figure;
                playGame.row1=rowActual;
                playGame.col1=colActual;
                break;
            case 2:
                playGame.figure2=figure;
                playGame.row2=rowActual;
                playGame.col2=colActual;
                playGame.compareCells();
                break;
            default:
                var char1=playGame.figure1.getCharacter();
                var char2=playGame.figure2.getCharacter();
                if (char1 != char2) {
                    playGame.hideSelectedButtons();
                }

                break;
        }

};
/*
* @param string msg This is the message for display into a textarea
*/
GUIView.prototype.printMessage=function()
{
    var textmessage=getElementById('msg')[0];
    var msg='';

    for (var i = 0; i <arguments.length ; i++)
    {
        msg=arguments[i]+'&#13;&#10;';
    }

    textmessage.value=msg;

};
GUIView.prototype.hideSelectedButtons=function()
{

    playGame.myBoard.hiddenOneCell(playGame.row1, playGame.col1);
    playGame.myBoard.hiddenOneCell(playGame.row2, playGame.col2);

};
