
  var ranNum1 = Math.random();
  ranNum1 = ranNum1 * 6;
  ranNum1 = Math.floor(ranNum1) + 1;
  console.log(ranNum1);
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+ ranNum1 + ".png");


  var ranNum2 = Math.random();
  ranNum2 = ranNum2 * 6;
  ranNum2 = Math.floor(ranNum2) + 1;
  console.log(ranNum2);
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+ ranNum2 + ".png");


if(ranNum1>ranNum2){
  document.querySelector("h1").innerHTML = "Player 1 WON!!";
}
else if(ranNum1<ranNum2){
  document.querySelector("h1").innerHTML = "Player 2 WON!!";
}
else{
  document.querySelector("h1").innerHTML = "DRAW!!";
}
