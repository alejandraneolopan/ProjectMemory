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
    var x,y;
    var numberOfPairs=(this.dimension*this.dimension)/2;


    for( var i=0; i < numberOfPairs; i++ ) {
        letter=SOURCE.charAt(Math.floor(Math.random() * SOURCE.length));
        text += letter;
        SOURCE.replace(letter, '');
    }
    for (var j=0;j<text.length;j++)
    {//For each letter, twice assign in a empty cell
        charac=text[j];

        x=Math.floor(Math.random() * this.dimension);
        y=Math.floor(Math.random() * this.dimension);
        while (this.cells[x][y].isEmptyCell()===false)
        {
            x = Math.floor(Math.random() * this.dimension);
            y = Math.floor(Math.random() * this.dimension);
        }

        this.cells[x][y].setCharacter(charac);


        x=Math.floor(Math.random() * this.dimension);
        y=Math.floor(Math.random() * this.dimension);
        while (this.cells[x][y].isEmptyCell()===false)
        {
            x = Math.floor(Math.random() * this.dimension);
            y = Math.floor(Math.random() * this.dimension);
        }

        this.cells[x][y].setCharacter(charac);


    }
};

Board.prototype.showBoardConsole = function(){
    console.clear();
    for (var i = 0; i < this.dimension ; i++ )
    {
        var line = '' + i;
        var ishidden, characterObtained;
        var headerLine = '';

        for (var j = 0; j < this.dimension ; j++ )
        {
            if(i === 0)
            {
                if(j === 0)
                {
                    headerLine = headerLine + '__| ' + j;
                }else
                {
                    headerLine = headerLine + ' | ' + j;
                }
            }

            ishidden = this.cells[i][j].showState();

            if(ishidden)
            {
                characterObtained = this.cells[i][j].hiddenCharacter;
                line = line + ' | ' + characterObtained;

            }else
            {
                characterObtained = this.cells[i][j].character;
                line = line + ' | ' + characterObtained;
            }
        }

        line = line + ' | ';

        if(i === 0)
        {
            headerLine = headerLine + ' | ';
            console.log(headerLine);
        }

        console.log(line);
    }
};



