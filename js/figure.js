/**
 * Created by SamuelSahonero on 2/4/2016.
 */
/*  @class Figure: Save the content of cells
 *  isEmpty {boolean} property that indicates if the value is empty, this state
 *       changes when the character property is set.
  * isHidden {boolean} property that indicates the first time the character value
   *     can't displayed.
  * hiddenCharacter {char} property is the character displayed when the state isHidden is true
  * character {char} property is the value of figure e.g. A,?, ...
 */
function Figure()
{
    this.isEmpty = true;
    this.isHidden = true;
    this.hiddenCharacter = '*';
    this.character = '';
}

/*
 * @return {char} The actual value of Figure Character
 */

Figure.prototype.getCharacter = function()
{
    return this.character;
};
/*
 * @param {char|string} character This param set the Figure character value
 */
Figure.prototype.setCharacter = function(character)
{
    this.character = character;
    this.setState(false);
};
/*
 * @return {boolean} The state of Figure Character is empty
 */

Figure.prototype.isEmptyCell = function()
{
    return this.isEmpty;
};
/*
 * @param {bool} state This param set the Empty State
 */
Figure.prototype.setState = function(state)
{
    this.isEmpty = state;
};
/*
 * @return {boolean} The state of Figure Character is hidden
 */

Figure.prototype.showState = function()
{
    return this.isHidden;
};
/*
* @param {bool} state This param set the Hidden State
 */
Figure.prototype.setShowState = function(state)
{
    this.isHidden = state;
};