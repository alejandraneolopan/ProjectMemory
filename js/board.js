/**
 *@class Board - contains the matrix
 *
 *
 *  Created by AnaPinto on 2/5/2016.
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

Board.prototype.createBoard= function(){
    var cells = new Array(this.dimension || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
};

/*
 * params{int} number Define the matrix dimension nxn
 */
Board.prototype.setDimension = function(number){
    //Inicilize matrix
    this.dimension=number;

    for (var i = 0; i < number ; i++ )
    {
        this.cells[i] = [];
        for (var j = 0; j < number ; j++ )
        {
            this.cells[i][j] = new Figure();

        }
    }


    /*Ejemplo 2

     array $tabla 2 x 3
     var $tabla = [[1,2,3],[3,4,5]];
     for ($indice in $tabla){
     print ($indice+ "=>" + $tabla[$indice]);
     }

     devuelve:
     0=>1,2,3
     1=>3,4,5 */
};

/*
 * fillCharacter => fill the matrix randomly
 */
Board.prototype.fillCharacter = function(){

    var text='',charac;
    var SOURCE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var x,y;
    var numberOfPairs=(this.dimension*this.dimension)/2;


    for( var i=0; i < numberOfPairs; i++ )
        text += SOURCE.charAt(Math.floor(Math.random() * SOURCE.length));

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



