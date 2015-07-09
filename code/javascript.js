// A $( document ).ready() block.
$( document ).ready(function() {
console.log( "ready!" );

//Global Variables
    var colored;
    var content;
    var winningCombinations;
    var turn = 0;
    var grid;
    var c;
    var cxt;
    var squaresFilled = 0;


    //Instanciate Arrays
    window.onload=function(){

      colored = new Array();
      content = new Array();
      winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

      for(var i = 0; i <= 8; i++){
      colored[i] = false;
      content[i]='';
      }
    }

    //Game methods
    function canvasClicked(canvasNumber){
      theCanvas = "canvas"+canvasNumber;
      c = document.getElementById(grid);
      cxt = c.getContext("2d");

      if(colored[canvasNumber-1] ==false){
        if(turn%2==0){
          cxt.beginPath();
          cxt.moveTo(10,10);
          cxt.lineTo(40,40);
          cxt.moveTo(40,10);
          cxt.lineTo(10,40);
          cxt.stroke();
          cxt.closePath();
          content[canvasNumber-1] = 'X';
        }

        else{
          cxt.beginPath();
          cxt.arc(25,25,20,0,Math.PI*2,true);
          cxt.stroke();
          cxt.closePath();
          content[canvasNumber-1] = 'O';
        }

        turn++;
        colored[canvasNumber-1] = true;
        squaresFilled++;
        checkForWinners(content[canvasNumber-1]);

        if(squaresFilled==9){
          alert("THE GAME IS OVER!");
          location.reload(true);
        }

      }
      else{
        alert("THAT SPACE IS ALREADY OCCUPIED WITH YOUR HEART!");
      }

    }

    function checkForWinners(symbol){

      for(var a = 0; a < winningCombinations.length; a++){
      if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]== symbol&&content[winningCombinations[a][2]]==symbol){
        alert(symbol+ " WON!");
        playAgain();
      }
      }

    }

    function playAgain(){
      y=confirm("PLAY AGAIN?");
      if(y==true){
        alert("OKAY! ^^/>");
        location.reload(true);
      }
      else{
        alert("SO LONG,SUCKER!");
    }

    }

