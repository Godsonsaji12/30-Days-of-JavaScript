//ACTIVITY - 1
//Task - 1

console.log("Task - 1");
function printNum(num){
for(let i = 1; i<=num; i++){
        console.log(i);
    };
}
printNum(10);

//Task - 2
console.log("Task - 2");
function multiTable(num){
    for(let i = 1; i <= 10; i++){
        let ans = num * i;
        console.log(`${num} * ${i} = ${ans}`);
    }
}
multiTable(5);

//ACTIVITY - 2
//Task - 3 

console.log('Task - 3');
function printSum(num){
    let i = 0;
    while (i<=num) {
        let ans = i + i;
        console.log(`${i} + ${i} = ${ans}`);
        i++
    }
}
printSum(10);

//Task - 4 
console.log('Task - 4');
function printNumber(num){
    while (num>=0){
        console.log(num);
        num--;
    }
}
printNumber(10);

//ACTIVITY - 3
//Task - 5

console.log('Task - 5');
function printDoNum(num){
    let i = 1;
    do {
        console.log(i)
        i++;
    } while (i <= num);
}
printDoNum(5);

//Task - 6 
console.log('Task - 6');
function findFactorial(num){
    let result = 1;
    let i = num;
    do {
        result *= i;
        i--;
    } while (i > 0);
    console.log(`Factorial of ${num} = ${result}`);

}
findFactorial(5);

//ACTIVITY - 4
//Task - 7
console.log('Task - 7');
function printStar(row){
    for(let i = 1; i<=row; i++){
        let star = '';
        for (let j = 1; j <= i ; j++) {
            star += '*';
        }
        console.log(star);
    }
}
printStar(5);

//ACTIVITY - 5
//Task - 8
console.log('Task - 8');
function skipNum(num){
    for(let i = 1; i<=10; i++){
        if(i == num){
            continue;
        }
        console.log(i);
    }
}
skipNum(5);

//Task - 9
console.log('Task - 9');
function breakNum(num){
    for(let i = 1; i<=10; i++){
        if (i == num) {
            break;
        }
        console.log(i);
    }
}
breakNum(7);