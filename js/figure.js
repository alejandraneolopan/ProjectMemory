/**
 * Created by SamuelSahonero on 2/4/2016.
 */
/*
 *  Class Cell save the content of cells
 *  This class creates a new cells matrix randomly
 */
function Figure(x,y){
    this.row =x;
    this.column =y;
    this.isEmpty = true;
    this.isHidden = true;
    this.hiddenCharacter = '*';
    this.character='';
}

/*
 * This method returns
 */

Figure.prototype.getCharacter = function(){
    return this.character;
};

Figure.prototype.setCharacter = function(character){
    this.character = character;
    this.setState(false);
};

Figure.prototype.isEmptyCell = function(){
    return this.isEmpty;
};

Figure.prototype.setState = function(state){
    this.isEmpty = state;
};

Figure.prototype.showState = function(){
    return this.isHidden;
};
Figure.prototype.setShowState = function(state){
    this.isHidden = state;
};
