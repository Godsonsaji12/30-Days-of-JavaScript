//ACTIVITY - 1
//Task - 1

function evenOrOdd(num){
    let ans = num%2===0? "Even" : "Odd";
    console.log(`${num} is ${ans}`);
}
evenOrOdd(111);

//Task -2
function squareOfNum(num){
    let square = num * num;
    console.log(`Square of ${num} is ${square}`);
}
squareOfNum(2);

//ACTIVITY - 2
//Task - 3

function maximumOfTwoNum(num1,num2){
    if(num1>num2){
        console.log(`${num1} is greater than ${num2}`);
    }else{
        console.log(`${num2} is greater than ${num1}`);
    }
}
maximumOfTwoNum(20,2);

//Task - 4
function concentrateTwoStr(str1,str2){
    let str3= str1 + str2;
    console.log(`${str1} "+" ${str2} = ${str3}`);
}
concentrateTwoStr("Sun","Shine");

//ACTIVITY - 3
//Task - 5

let sumOfNumber = (num1, num2) =>{
    let ans = num1 + num2;
    return `Sum = ${ans}`;
}
console.log(sumOfNumber(1,2));;

//Task - 6
let characterChecker = (str, target) => {
    if(str.includes(target)){
        return (str.includes(target));
    }else{
        return(`Your given string is perfectly fine!`)
    }
}
console.log(characterChecker("Hi there!", "!"));

//ACTIVITY - 4
//Task - 7

function returnProduct(num1,num2 = 5){
    let ans = num1 * num2;
    return `Answer = ${ans}`;
}
console.log(returnProduct(5));

//Task - 8
function greetPerson(name, age = 19){
    return `Good Morning ${name}! You are ${age} years old!`;
}
console.log(greetPerson("Godson"));

//ACTIVITY - 5
//Task - 9

function Hello(){
    return "Hello!";
}
function callFunction(fnOfSomething,num){
    for(let i = 1; i<=num; i++){
        console.log(`${i}. ${fnOfSomething}`);
    }
};
callFunction(Hello(), 10);

//Task - 10
function applyFunction(func1,func2,value){
    let result1 = func1(value);
    let result2 = func2(result1);
    return result2;
};

    let addNum = (n) => n + 1;
    let mulNum = (n) => n * n;
console.log(applyFunction(addNum, mulNum, 2));