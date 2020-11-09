function myFunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//* Calculator on CoD link *//

function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}

function addby()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 + num2;
}

// These functions are for changing logos on the games.html page //

function owlogochg()
{
        document.getElementById("overwatchMO").src="images/owlogochange.jpg";
}

function owlogoret()
{
        document.getElementById("overwatchMO").src="images/OW1.jpg";
}

function codchg()
{
        document.getElementById("codMO").src="images/codlogochange.jpg";
}

function codret()
{
        document.getElementById("codMO").src="images/codlogo.png";
}

function wowchg()
{
        document.getElementById("wowMO").src="images/wowlogochange.jpg";
}

function wowret()
{
        document.getElementById("wowMO").src="images/wowicon.jpg";
}

// This is for the hide/show function in the games.html file //

function hiddenjs() {
        var x = document.getElementById("hiddenjs");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }

