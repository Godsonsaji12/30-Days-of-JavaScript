//ACTIVITY- 1 
//Task- 1
let num1 = 10;
let num2 = 10;
let addAns = num1 + num2;
console.log(`Answer:- ${addAns}`);

//Task- 2
let inp1 = 10;
let inp2 = 5;
let subAns = inp1 - inp2;
console.log(`Answer:- ${subAns}`);

//Task-3
let mulNum1 = 5;
let mulNum2 = 10;
let mulAns = mulNum1 * mulNum2;
console.log(`Answer:- ${mulAns}`);

//Task- 4
let divNum1 = 4;
let divNum2 = 2;
let divAns = divNum1 / divNum2;
console.log(`Answer:- ${divAns}`);

//Task- 5
let riNum1 = 10;
let riNum2 = 7;
let riAns = riNum1 % riNum2;
console.log(`Answer:- ${riAns}`);


//ACTIVITY- 2
//Task- 6
let op1 = 10;
op1 += 5;
console.log(`Answer:- ${op1}`);

//Task- 7
let op2 = 10;
op2 -= 5;
console.log(`Answer:- ${op2}`);

//ACTIVITY- 3
//Task- 8
let mark1 = 100;
let mark2 = 80;
let highScoreOrNot1 = mark1 > mark2;
console.log(`High score or not:- ${highScoreOrNot1}`);

let mark3 = 90;
let mark4 = 100;
let highScoreOrNot2 = mark3 < mark4;
console.log(`Low mark or not:- ${highScoreOrNot2}`);

//Task- 9
let numb1 = 90;
let numb2 = 10;
let greatOrEquals = numb1 >= numb2;
console.log(`Greater or Equal Number:= ${greatOrEquals}`);

let numb3 = 1;
let numb4 = 2;
let lessOrEquals = numb3 <= numb4;
console.log(`Lesser or Equal Number:= ${lessOrEquals}`);

//Task- 10
let number1 = 100;
let number2 = 100;
console.log(number1==number2);
console.log(number1===number2);

//ACTIVITY- 4
let number3 = 5;
let number4 = 50;
//Task- 11
console.log(number3 && number4);
//Task- 12
console.log(number3 || number4);
//Task- 13
console.log(!(number3==number4));

//Task- 14
function positiveOrNegative(num){
   return num > 0? 'positive' : 'negative';
}
console.log(positiveOrNegative(5));