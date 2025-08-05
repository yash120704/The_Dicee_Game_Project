var heading = document.querySelector("h2");
var img1 = document.querySelector("#player1 img");
var img2 = document.querySelector("#player2 img")
var randNum1 = Math.floor(Math.random()*6 + 1);
var randNum2 = Math.floor(Math.random()*6 + 1);
if(randNum1>randNum2){
    heading.innerHTML = "Player 1 Wins! (Refresh To Play Again)";
}else if(randNum1<randNum2){
    heading.innerHTML = "Player 2 Wins! (Refresh To Play Again)";
}else{
    heading.innerHTML = "Draw! (Refresh To Play Again)";
}
img1.setAttribute("src","./assets/images/Dice_"+randNum1+"-removebg-preview.png");
img2.setAttribute("src","./assets/images/Dice_"+randNum2+"-removebg-preview.png");
