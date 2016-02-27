/**
 * Created by SamuelSahonero on 2/23/2016.
 */
var ConsoleView = function()
{
};

ConsoleView.prototype.showBoard = function()
{
    //Setting a new player
    if (arguments[0].length>0)
    {
        this.player.setId(arguments[0]);
    }
    else
    {
        this.player.setId(1);
    }

    if (arguments[1].length>0)
    {
        this.player.setName(arguments[1]);
    }
    else
    {
        this.player.setName('Canito');
    }

    var fails = 0;
    var wins = 0;

    var dimension = prompt("Enter the dimension of the board", "i.e. 6");

    if (dimension !== null)
    {
        this.myBoard.setDimension(dimension);
        this.myBoard.fillCharacter();
        this.myBoard.showBoardConsole(); // AL

        var numberOfPairs = (dimension*dimension) / 2;

        while ( fails < dimension && wins < numberOfPairs )
        {
            var col1 = prompt("What column do you choose?", "i.e. 2");
            var row1 = prompt("What row do you choose?", "i.e. 1");

            if ( (col1 !== null) && (row1 !== null) )
            {
                var figure1 = this.myBoard.returnOneCell(row1, col1);
                // Then ask again for a row and column and show it
                this.myBoard.showBoardConsole();

                var col2 = prompt("What column do you choose?", "i.e. 1");
                var row2 = prompt("What row do you choose?", "i.e. 1");

                if ( (col2 !== null) && (row2 !== null) )
                {
                    var figure2 = this.myBoard.returnOneCell(row2, col2);
                    this.myBoard.showBoardConsole();
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
                    this.myBoard.showBoardConsole();
                    // if they aren't equal hide the cells
                    fails = fails +1;
                }
            }
            else
            {
                alert("You need to choose a row and a column to continue playing");
            }
        }

        if (wins == numberOfPairs)
        {
            alert("Congratulations YOU WIN!!!");
            alert("Your Total Score is: " + this.player.getTotalScore());
        }
        else
        {
            alert("GAME OVER!");
        }
    }
    else
    {
        alert("You need to dimension the board to start playing!");
    }
};

Board.prototype.showBoardConsole = function()
{
    console.clear();

    for (var i = 0; i < this.dimension; i++ )
    {
        var line = '' + i;
        var ishidden, characterObtained;
        var headerLine = '';

        for (var j = 0; j < this.dimension; j++ )
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

            ishidden = this.cells[i][j].showState();

            if(ishidden)
            {
                characterObtained = this.cells[i][j].hiddenCharacter;
                line = line + ' | ' + characterObtained;

            }else
            {
                characterObtained = this.cells[i][j].character;
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