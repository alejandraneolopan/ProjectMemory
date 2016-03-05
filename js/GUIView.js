/*
 * Author:  Alejandra & Ana & Samuel
 * @class GUIView: Manage the components in the HTML view
 * myBoard{Board} Board object for manage its visualization
 */
var GUIView = function()
{
    this.myBoard = null;
};
/*
 * @return {Player} Read from HTML view the Player data
 */
GUIView.prototype.readPlayer = function()
{
    var player = new Player();
    player.setName($('input#name').val());
    player.setNickName($('input#nick').val());
    //player.setAge($('input#age').val());

    var age =$('input#age').val();

    if ( !( age >= 1 && age <= 100 ) ){

        alert("The age must be a number between 1 and 100");
        return false;
    }

    player.setAge(age);

    return player;
};
/*
 * @return {int} Read from HTML Board dimension and return this
 */
GUIView.prototype.readBoardDimension = function()
{
    var dimensionBoard = $('input#dim').val();
    return dimensionBoard;
};
/*
 * @param {Board} boardToPlay This param set the Board to display in the HTML view
 */
GUIView.prototype.showBoard = function(boardToPlay)
{
    this.myBoard = boardToPlay;
    var cells = this.myBoard.returnCells();
    var cols = this.myBoard.dimension;
    var rows = this.myBoard.dimension;
    var table2 = $('<table></table>');
    table2.attr('align','center');

    var newButton,textButton;
    var tr2,td2;
    var cellIsHidden;

    for (var i = 0; i < rows; i++)
    {

        tr2 = $('<tr></tr>');

        for (var j = 0; j < cols; j++)
        {


            newButton = $('<button></button>');
            cellIsHidden = cells[i][j].showState();

            if (cellIsHidden)
            {

                textButton = cells[i][j].hiddenCharacter;
            }
            else
            {

                textButton = cells[i][j].character;
            }


            newButton.text(textButton);
            newButton.attr('row',i);
            newButton.attr('col',j);
            newButton.attr('class','buttonGame');
            //If it isn't the wild card cell
            var charToFill = cells[i][j].character;
            if (charToFill != this.myBoard.CHARACTER_CELL_IN_BLANK) {

                newButton.on('click', this.displayOneCell);
            }

            td2 = $('<td></td>');
            td2.append(newButton);
            tr2.append(td2);

        }


        table2.append(tr2);
    }


    $('body').append(table2);

};
/*
 * @param {Event} eventClick This param is executed as callback from a button object when a Cell button is pressed
 */
GUIView.prototype.displayOneCell=function(eventClick)
{
        var rowActual = eventClick.currentTarget.getAttribute('row');
        var colActual = eventClick.currentTarget.getAttribute('col');
        var figure = playGame.myBoard.returnOneCell(rowActual, colActual);
        var textContent = figure.getCharacter();
        //removeEventListener
        var myButtonPath = 'button[row="'+ rowActual+'"][col="'+ colActual +'"]';
        var myButtonObject = jQuery('table').find(myButtonPath);
        myButtonObject.text(textContent);
        //RemoveListener
        myButtonObject.off('click', playGame.viewByGUI.displayOneCell);
        //e.target.removeEventListener('click', this.displayOneCell);
        playGame.numberOfClicks++;

        switch (playGame.numberOfClicks)
        {
            case 1:
                playGame.figure1 = figure;
                playGame.row1 = rowActual;
                playGame.col1 = colActual;
                break;

            case 2:
                playGame.figure2 = figure;
                playGame.row2 = rowActual;
                playGame.col2 = colActual;
                playGame.compareCells();
                break;

            default:
                var char1 = playGame.figure1.getCharacter();
                var char2 = playGame.figure2.getCharacter();

                if (char1 != char2)
                {
                    playGame.viewByGUI.hideSelectedButtons();

                }

                playGame.figure1 = figure;
                playGame.row1 = rowActual;
                playGame.col1 = colActual;
                playGame.numberOfClicks = 1;
                break;
        }
};
/*
* @param {arguments} By arguments, the text area show the message in arguments[0]
*/
GUIView.prototype.printMessage = function()
{
    var textMessage = $('textarea');
    textMessage.text(arguments[0]);
};
/*
 * Hide two cells which are differents
 * @param {}
 */
GUIView.prototype.hideSelectedButtons = function()
{
    //First Cell
    playGame.myBoard.hiddenOneCell(playGame.row1, playGame.col1);
    var myButtonPath = 'button[row="' + playGame.row1 + '"][col="' + playGame.col1 + '"]';
    var myButtonObject = jQuery('table').find(myButtonPath);
    myButtonObject.text(playGame.figure1.hiddenCharacter);
    myButtonObject.on('click', playGame.viewByGUI.displayOneCell);

    //Second Cell
    playGame.myBoard.hiddenOneCell(playGame.row2, playGame.col2);
    myButtonPath = 'button[row="' + playGame.row2 + '"][col="' + playGame.col2 +'"]';
    myButtonObject = jQuery('table').find(myButtonPath);
    myButtonObject.text(playGame.figure2.hiddenCharacter);
    //addListener
    myButtonObject.on('click', playGame.viewByGUI.displayOneCell);

};
/*
 * Reads the Game type
 * @param {}
 */
GUIView.prototype.readGameType=function()
{
    var type = $("#type").val();
    return type;
};
/*
 * Hide the form Settings
 * @param {}
 */
GUIView.prototype.hideSettings=function()
{
    $('form').find('button').off('click', playGame.startGame);
    $('form').hide();
    var restart = function(){location.reload();};
    var restartButton = $('<center><button class="StartButton">RESTART</button></center>');
    restartButton.on('click',restart);
    $('body').append(restartButton);
};
/*
 * Hide the Board
 * @param {}
 */
GUIView.prototype.hideBoard=function()
{$('table').hide();}