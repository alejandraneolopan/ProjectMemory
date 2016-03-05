/**
 * Created by SamuelSahonero on 2/23/2016.
 */
var ConsoleView = function(boardToPlay)
{
    this.myBoard=boardToPlay;
};

ConsoleView.prototype.playOnConsole = function()
{

        while ( playGame.fails < this.myBoard.dimension && playGame.wins < playGame.numberOfPairs)
        {
            var col1 = prompt("What column do you choose?", "i.e. 2");
            var row1 = prompt("What row do you choose?", "i.e. 1");

            if ( (col1 !== null) && (row1 !== null) )
            {
                var figure1 = this.myBoard.returnOneCell(row1, col1);
                // Then ask again for a row and column and show it
                this.showBoard();

                var col2 = prompt("What column do you choose?", "i.e. 1");
                var row2 = prompt("What row do you choose?", "i.e. 1");

                if ( (col2 !== null) && (row2 !== null) )
                {
                    var figure2 = this.myBoard.returnOneCell(row2, col2);
                    this.showBoard();
                }//here must be an ELSE!!!!

                if ( (figure1.character) === (figure2.character) )
                {
                    alert("Congrats! you win 50 points");
                    //this.player.setCurrentScore(50);
                    this.player.setTotalScore(50);
                    wins = wins + 1;
                    // if they are equal add points and set the hidden property to false
                }
                else
                {
                    this.myBoard.hiddenOneCell(row1, col1);
                    this.myBoard.hiddenOneCell(row2, col2);
                    alert("Sorry! you have to try again");
                    this.showBoard();
                    // if they aren't equal hide the cells
                    fails = fails +1;
                }
            }
            else
            {
                alert("You need to choose a row and a column to continue playing");
            }
        }

        if (wins == playGame.numberOfPairs)
        {
            this.printMessage("Congratulations YOU WIN!!!");
            alert("Your Total Score is: " + this.player.getTotalScore());
        }
        else
        {
            alert("GAME OVER!");
        }

};

ConsoleView.prototype.showBoard = function()
{

    console.clear();

    for (var i = 0; i < this.myBoard.dimension; i++ )
    {
        var line = '' + i;
        var ishidden, characterObtained;
        var headerLine = '';

        for (var j = 0; j < this.myBoard.dimension; j++ )
        {
            if(i === 0)
            {
                if(j === 0)
                {
                    headerLine = headerLine + '__| ' + j;
                }else
                {
                    headerLine = headerLine + ' | ' + j;
                }
            }

            ishidden = this.myBoard.cells[i][j].showState();

            if(ishidden)
            {
                characterObtained = this.myBoard.cells[i][j].hiddenCharacter;
                line = line + ' | ' + characterObtained;

            }else
            {
                characterObtained = this.myBoard.cells[i][j].character;
                line = line + ' | ' + characterObtained;
            }
        }

        line = line + ' | ';

        if(i === 0)
        {
            headerLine = headerLine + ' | ';
            console.log(headerLine);
        }

        console.log(line);
    }
};
/*
 * @param {arguments} By arguments, the text area show the message in arguments[0]
 */
ConsoleView.prototype.printMessage = function(msg)
{
   console.log(msg);
};