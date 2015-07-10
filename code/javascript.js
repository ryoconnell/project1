//jQuery.ajax

    var turn = "x";
    var player1 = "";
    var player1score = 0;
    var player2 = "";
    var player2score = 0;
    var gameState = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    $(document).ready(function () {
      $("#newgame").click(function () {
        resetGame();
      });
    });

    function changeImage(clickedId){
        var check = clickedId.substring(3, 4);
        if(gameState[check] == 0)
        {
            document.getElementById("box"+check).src = "http://slredux.com/code/javatictactoe/"+turn+".png";
            gameState[check] = turn;
            if(turn == "x")
              turn = "o";
            else
              turn = "x";
            checkWinner();
        }
        else
        {
          alert("That box is not available!");
        }
    }

    function resetGame() {
      gameState = [0, 0, 0, 0, 0, 0, 0, 0, 0];

      //if (turn == "x")
        //turn = "o";
      //else
        //turn = "x";
      //alert("We have a winner!");

      var url = "http://www.cellphone-wallpapers.net/Wallpapers/User/11421-blank-white.jpg";
      $("#box0").attr("src", url);
      $("#box1").attr("src", url);
      $("#box2").attr("src", url);
      $("#box3").attr("src", url);
      $("#box4").attr("src", url);
      $("#box5").attr("src", url);
      $("#box6").attr("src", url);
      $("#box7").attr("src", url);
      $("#box8").attr("src", url);
    }

    function checkWinner()
    {
        var winner = 0;

        if (gameState[0] == gameState[1] && gameState[1] == gameState[2] &&gameState[2] != 0) {
          winner = gameState[0];
        }
        else if (gameState[3] == gameState[4] && gameState[4] == gameState[5]   && gameState[5] != 0) {
          winner = gameState[3];
        }
        else if (gameState[6] == gameState[7] && gameState[7] == gameState[8]   && gameState[8] != 0) {
          winner = gameState[6];
        }
        else if (gameState[0] == gameState[3] && gameState[3] == gameState[6]   && gameState[6] != 0) {
          winner = gameState[0];
        }
        else if (gameState[1] == gameState[4] && gameState[4] == gameState[7]   && gameState[7] != 0) {
          winner = gameState[1];
        }
        else if (gameState[2] == gameState[5] && gameState[5] == gameState[8]   && gameState[8] != 0) {
          winner = gameState[2];
        }
        else if (gameState[0] == gameState[4] && gameState[4] == gameState[8]   && gameState[8] != 0) {
          winner = gameState[0];
        }
        else if (gameState[2] == gameState[4] && gameState[4] == gameState[6]   && gameState[6] != 0) {
          winner = gameState[2];
        }

        if (winner != 0) {
          //alert("We have a winner!");
          if (winner == "x") {
            player1score ++;
            $("#p1score").text(player1score);
          }
          else if (winner == "o") {
            player2score ++;
            $("#p2score").text(player2score);
          }
        }
    }

    function setName(id)
    {
        if(id == "x")
        {
          player1 = prompt("Please enter your name", "Harry Potter");
    document.getElementById("p1").innerHTML = player1;
        }
        else if(id == "o")
        {
          player2 = prompt("Please enter your name, player 2", "Hermiomiony");
          document.getElementById("p2").innerHTML = player2;
        }
    }




