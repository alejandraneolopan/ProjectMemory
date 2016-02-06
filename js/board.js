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
*
var Board=function(dimenssion)
{
    this.dimenssion = dimenssion;
    this.cells;

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

*/
