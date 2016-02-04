/**
 * Created by alejandraneolopan on 2/4/2016.
 */
/*
* Class Player
* Save the Player Data
* Author: Ale & Ana 6 Samuel
 */

var Player=function(id,name,age)
{
    //Properties
    this.id=id;
    this.name=name;
    this.age=age;
    this.playerScore=new PlayerScore();
  //methods

    /*Player.prototype.playGame=function()
    {

    }
    ;*/
};

Player.prototype.getScore = function(){
    return this.playerScore.getScore();
};

Player.prototype.saveScore = function(score){
    this.playerScore.saveScore(score);
};

Player.prototype.getId = function(){
    return this.id;
};

Player.prototype.getName = function(){
    return this.name;
};

Player.prototype.getAge = function(){
    return this.age;
};

Player.prototype.setId = function(id){
    this.id = id;
};

Player.prototype.setName = function(name){
    this.name = name;
};

Player.prototype.setAge = function(age){
    this.age = age;
};