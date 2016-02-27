/**
 * Created by alejandraneolopan on 2/4/2016.
 */
/*
* Class Player
* Save the Player Data
* Author: Alejandra & Ana 6 Samuel
 */

var Player = function(id, name, age)
{
    //Properties
    this.id = id;
    this.name = name;
    this.age = age;
    this.totalScore = 0;
    this.currentScore = 0;
    this.nickName = '';

};

//var p = new Player();

/*Player.prototype.getScore = function(){
    return this.playerScore.getScore();
};

Player.prototype.saveScore = function(score){
    this.playerScore.saveScore(score);
};*/

Player.prototype.getId = function()
{
    return this.id;
};

Player.prototype.getName = function()
{
    return this.name;
};

Player.prototype.getAge = function()
{
    return this.age;
};

Player.prototype.setId = function(id)
{
    this.id = id;
};

Player.prototype.setName = function(name)
{
    this.name = name;
};

Player.prototype.setAge = function(age)
{
    this.age = age;
};

Player.prototype.setCurrentScore = function(score)
{
    this.currentScore = score ;
};

Player.prototype.setTotalScore = function(score)
{
    this.currentScore = this.currentScore + score;
};

Player.prototype.getTotalScore = function()
{
    return this.currentScore;
};

Player.prototype.getNickName = function()
{
    return this.nickName;
};

Player.prototype.setNickName = function(nick)
{
    this.nickName = nick;
};
