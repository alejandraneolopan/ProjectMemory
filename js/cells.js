/**
 * Created by SamuelSahonero on 2/4/2016.
 */
/*
 *  Class Cell save the content of cells
 *
 */
function Cell(){
    var character=[];
};

/*
 * This method returns
 */

Cell.prototype.getCharacter = function(){
    return this.character;
};

/*
 * params{int dimensionNumber} Define the matrix dimension nxn
 */
Cell.prototype.fillCharacter = function(dimensionNumber){

    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var numberOfPairs=(dimensionNumber*dimensionNumber)/2


    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    this.character = newCharacter;

};

