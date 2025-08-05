var heading = document.querySelector("h1");
var img1 = document.querySelector("#player1 img");
var img2 = document.querySelector("#player2 img")
var randNum1 = Math.floor(Math.random()*6 + 1);
var randNum2 = Math.floor(Math.random()*6 + 1);
if(randNum1>randNum2){
    heading.innerHTML = "Player 1 Wins!";
}else if(randNum1<randNum2){
    heading.innerHTML = "Player 2 Wins!";
}else{
    heading.innerHTML = "Draw!";
}
if(randNum1==1){
    img1.setAttribute("src","./assets/images/Dice_1-removebg-preview.png");
}else if(randNum1==2){
    img1.setAttribute("src","./assets/images/Dice_2-removebg-preview.png");
}else if(randNum1==3){
    img1.setAttribute("src","./assets/images/Dice_3-removebg-preview.png");
}else if(randNum1==4){
    img1.setAttribute("src","./assets/images/Dice_4-removebg-preview.png");
}else if(randNum1==5){
    img1.setAttribute("src","./assets/images/Dice_5-removebg-preview.png");
}else{
    img1.setAttribute("src","./assets/images/Dice_6-removebg-preview.png");
}
if(randNum2==1){
    img2.setAttribute("src","./assets/images/Dice_1-removebg-preview.png");
}else if(randNum2==2){
    img2.setAttribute("src","./assets/images/Dice_2-removebg-preview.png");
}else if(randNum2==3){
    img2.setAttribute("src","./assets/images/Dice_3-removebg-preview.png");
}else if(randNum2==4){
    img2.setAttribute("src","./assets/images/Dice_4-removebg-preview.png");
}else if(randNum2==5){
    img2.setAttribute("src","./assets/images/Dice_5-removebg-preview.png");
}else{
    img2.setAttribute("src","./assets/images/Dice_6-removebg-preview.png");
}
