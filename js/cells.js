/**
 * Created by SamuelSahonero on 2/4/2016.
 */
/*
 *  Class Cell save the content of cells
 *  This class creates a new cells matrix randomly
 */
function Cell(){
    this.character = [];
    this.isEmpty = true;
    this.isHidden = true;
    this.hiddenCharacter = '*';
    //this.dimensionNumber=0;
}

/*
 * This method returns
 */

Cell.prototype.getCharacter = function(){
    return this.character;
};

Cell.prototype.setCharacter = function(character){
    this.character = character;
};

Cell.prototype.getState = function(){
    return this.isEmpty;
};

Cell.prototype.setState = function(state){
    this.isEmpty = state;
};
Cell.prototype.setDimension = function(number){
    //Inicilize matrix

    for (var i = 0; i < number ; i++ )
    {
        this.character[i] = [];
        for (var j = 0; j < number ; j++ )
        {
            this.character[i][j] = '';

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
Cell.prototype.fillCharacter = function(){

    var text='',charac;
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var x,y;
    var numberOfPairs=(dimensionNumber*dimensionNumber)/2;


    for( var i=0; i < numberOfPairs; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    for (var j=0;j<text.length;j++)
    {//For each letter, twice assign in a empty cell
        charac=text[j];
        x=Math.floor(Math.random() * dimensionNumber);
        y=Math.floor(Math.random() * dimensionNumber);
        if (this.character[x][y]==='')
        {
            this.character[x][y]=text.charAt();
        }
    }
};

Cell.prototype


Cell.prototype.showState = function(){
    return this.isHidden;
};

Cell.prototype.setShowState = function(state){
    this.isHidden = state;
};
