/**
 * Created by alejandraneolopan on 2/4/2016.
 */
/*
* Author:  Ana & Samuel
*  @class Player: Player Model
*  id {string} property that indicates Player code
*  name {string} property that indicates the Player Name
*  age {int} property  that indicates the Player Age
*  tot {char} property is the value of figure e.g. A,?, ...
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
/*
 * @param {string} Id This param set the Player Id
 */

Player.prototype.setId = function(id)
{
    this.id = id;
};
/*
 * @param {string} score This param set the Player Name
 */

Player.prototype.setName = function(name)
{
    this.name = name;
};
/*
 * @param {int} age This param set the Player Age
 */

Player.prototype.setAge = function(age)
{
    this.age = age;
};
/*
 * @param {int} score This param set the Current Score
 */
Player.prototype.setCurrentScore = function(score)
{
    this.currentScore = score ;
};
/*
 * @param {int} score This param add the total score.
 */
Player.prototype.setTotalScore = function(score)
{
    this.totalScore = this.totalScore + score;
};

Player.prototype.getTotalScore = function()
{
    return this.totalScore;
};

Player.prototype.getNickName = function()
{
    return this.nickName;
};
/*
 * @param {string} nick This param set the Nick Name
 */
Player.prototype.setNickName = function(nick)
{
    this.nickName = nick;
};