/**
 *@class Board - contains the matrix
 *
 *
 *  Author: Alejandra & Ana 6 Samuel
 */
var Board=function()
{
    this.dimension = 0;
    this.cells=[];

};
Board.prototype.returnCells = function(){
    return this.cells;
};

Board.prototype.returnOneCell = function(row, column){
    this.cells[row][column].setShowState(false);
    return this.cells[row][column];

};
Board.prototype.hiddenOneCell = function(row, column){
    this.cells[row][column].setShowState(true);


};



/*
 * params{int} number Define the matrix dimension nxn
 */
Board.prototype.setDimension = function(number){
    //Initialize matrix
    this.dimension=number;

    for (var i = 0; i < number ; i++ )
    {
        this.cells[i] = [];
        for (var j = 0; j < number ; j++ )
        {
            this.cells[i][j] = new Figure();

        }
    }

};

/*
 * fillCharacter => fill the matrix randomly
 */
Board.prototype.fillCharacter = function(){

    var text='',letter;
    var SOURCE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if((this.dimension % 2) === 1)
    {
        this.fillCharacterOneRanCell('~');

    }
    var numberOfPairs=Math.floor((this.dimension*this.dimension)/2);
    var charac;

    for( var i=0; i < numberOfPairs; i++ ) {
        letter=SOURCE.charAt(Math.floor(Math.random() * SOURCE.length));
        text += letter;
        SOURCE=SOURCE.replace(letter, '');
    }
    for (var j=0;j<text.length;j++)
    {//For each letter, twice assign in a empty cell
        charac=text[j];

        this.fillCharacterOneRanCell(charac);

        this.fillCharacterOneRanCell(charac);


    }
};
Board.prototype.fillCharacterOneRanCell = function(charac){
    var x,y;
    x=Math.floor(Math.random() * this.dimension);
    y=Math.floor(Math.random() * this.dimension);
    var emptyCell= this.cells[x][y].isEmptyCell();
    while (emptyCell === false)
    {
        x = Math.floor(Math.random() * this.dimension);
        y = Math.floor(Math.random() * this.dimension);
        emptyCell= this.cells[x][y].isEmptyCell();
    }

    this.cells[x][y].setCharacter(charac);

    if (charac === '~')
    {
        this.cells[x][y].setShowState(false);
    }

}



