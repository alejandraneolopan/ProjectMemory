/**
 * Created by alejandraneolopan on 2/4/2016.
 */
var PlayerScore=function()
{
    //properties
    this.score;
};

//methods

PlayerScore.prototype.getScore = function(){

    return this.score;

};

PlayerScore.prototype.saveScore = function(s){

    this.score = s;

};

