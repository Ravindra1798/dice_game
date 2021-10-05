

var randomNumber1=Math.floor(Math.random() * 6) + 1; //random number 1 to 6;
var dicestring = "dice" + randomNumber1 + ".png"; //dice1 to dice 6;
var randomimgsource1 = "images/" + dicestring;
var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomimgsource1);


var randomNumber2 =Math.floor(Math.random() * 6) + 1;
var randomimgsource2="images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomimgsource2);

//if playr 1 wins;

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML=" Player 2 wins! 🚩";
}
else
{

document.querySelector("h1").innerHTML=" DRAW! ";
}
