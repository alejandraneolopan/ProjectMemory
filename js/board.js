/*
 * Author:  Alejandra & Ana & Samuel
 *  @class Board: Board Model
 *  dimension {int} property that indicates the dimension of the Board
 *  cells {array} property that is a collection of Figures
 *  @const CHARACTER_CELL_IN_BLANK {char} property that display a Happy face :)
 */

var Board = function()
{
    this.dimension = 0;
    this.cells = [];
    this.CHARACTER_CELL_IN_BLANK='\u263a'
};
/*
 * => returnCells Return the Board
 * @return {Board} Returns the Board
 */

Board.prototype.returnCells = function()
{
    return this.cells;
};
/*
 * @param {int} row This param choose the row
 * @param {int} column This param choose the column
 * @return {Figure} The Figure is displayed
 */

Board.prototype.returnOneCell = function(row, column)
{
    this.cells[row][column].setShowState(false);
    return this.cells[row][column];
};
/* => hiddenOneCell Hides a cell
 * @param {int} row this param choose the row
 * @param {int} column this param choose the column
 */

Board.prototype.hiddenOneCell = function(row, column)
{
    this.cells[row][column].setShowState(true);
};

/*
 * params{int} number Define the matrix dimension nxn
 */

Board.prototype.setDimension = function(number)
{
    //Initialize matrix
    this.dimension = number;

    for (var i = 0; i < number; i++ )
    {
        this.cells[i] = [];

        for (var j = 0; j < number; j++ )
        {
            this.cells[i][j] = new Figure();
        }
    }
};
/*
 * fillCharacter => fill the matrix randomly
 */

Board.prototype.fillCharacter = function()
{
    var text='',letter;
    var SOURCE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if( (this.dimension % 2) === 1 )
    {
        this.fillCharacterOneRanCell(this.CHARACTER_CELL_IN_BLANK);
    }

    var numberOfPairs = Math.floor( (this.dimension*this.dimension) / 2 );
    var charac;

    for(var i=0; i < numberOfPairs; i++)
    {
        letter = SOURCE.charAt(Math.floor( Math.random() * SOURCE.length ) );
        text += letter;
        SOURCE = SOURCE.replace(letter, '');
    }

    for(var j = 0; j < text.length; j++)
    {//For each letter, twice assign in a empty cell
        charac = text[j];

        this.fillCharacterOneRanCell(charac);
        this.fillCharacterOneRanCell(charac);
    }
};
/*
* => Fill a cell with a char in a ramdom position
* @param {char} charac This params sets a char
*/

Board.prototype.fillCharacterOneRanCell = function(charac)
{
    var x, y;

    x = Math.floor(Math.random() * this.dimension);
    y = Math.floor(Math.random() * this.dimension);

    var emptyCell = this.cells[x][y].isEmptyCell();

    while(emptyCell === false)
    {
        x = Math.floor(Math.random() * this.dimension);
        y = Math.floor(Math.random() * this.dimension);
        emptyCell = this.cells[x][y].isEmptyCell();
    }

    this.cells[x][y].setCharacter(charac);

    if (charac === this.CHARACTER_CELL_IN_BLANK)
    {
        this.cells[x][y].setShowState(false);
    }
};