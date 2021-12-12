// ex06: increment score if the answer is right
var readlineSync = require('readline-sync');//ex02
var score = 0 ;


var userName = readlineSync.question("what is your name? ");
var welcomeMessage = "Welcome " + userName;//ex03
console.log(welcomeMessage);
var userAge  = readlineSync.question(userName  +" : what is ashutosh age? " );

//conditional statement

if (userAge === "24"){
  console.log( userName + " you are Right!  you are welcome! ");
  score = score + 1;
  

}else{
  console.log(userName + " Sorry. you are wrong : ")
score = score - 1;
}



//Programming is all about (input >> processing >> output)