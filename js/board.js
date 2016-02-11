/**
 * Created by AnaPinto on 2/5/2016.
 */
/*
*
*
*
*
*
* */ /* REVIEW THIS
*
**/
var Board=function(dimension)
{
    this.dimension = dimension;
    this.cells=[];

};
Board.prototype.returnCells = function(){
    return this;
};

Board.prototype.returnOneCell = function(row, column){
    return this.cells[row][column];
};

Board.prototype.createBoard= function(){
    var cells = new Array(this.dimenssion || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
};


Board.prototype.setDimension = function(number){
    //Inicilize matrix

    for (var i = 0; i < number ; i++ )
    {
        this.cells[i] = [];
        for (var j = 0; j < number ; j++ )
        {
            this.cells[i][j] = new Figure(i,j);

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
 * params{int dimensionNumber} Define the matrix dimension nxn
 */
Board.prototype.fillCharacter = function(){

    var text='',charac;
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var x,y;
    var numberOfPairs=(this.dimension*this.dimension)/2;


    for( var i=0; i < numberOfPairs; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

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

        this.cells[x][y].setCharacter(text.charAt());




    }
};



