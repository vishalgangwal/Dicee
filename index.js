var randomnum1= Math.floor(Math.random()*6+1);
var randomimage1= "dice"+randomnum1+".png";
var fulldirectory1="./images/"+randomimage1;

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",fulldirectory1);

var randomnum2= Math.floor(Math.random()*6+1);
var randomimage2= "dice"+randomnum2+".png";
var fulldirectory2="./images/"+randomimage2;

var img2=document.querySelectorAll("img")[1].setAttribute("src",fulldirectory2);
if(randomimage1> randomimage2 ){
    document.querySelector("h1").innerHTML="player A win";
    document.getElementById("player1").style.textDecoration="underline";
}
else if(randomimage1<randomimage2){
    document.querySelector("h1").innerHTML="player B win";
    document.getElementById("player2").style.textDecoration="underline";
}
else{
    document.querySelector("h1").innerHTML="Draw !!";
    
}
