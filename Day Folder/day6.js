//ACTIVITY -1
//Task -1 
let arrOfNumbers = [1,2,3,4,5];
console.log(arrOfNumbers);

//Task -2
console.log(`First number in the array is ${arrOfNumbers[0]}`);
console.log(`Last number in the array is ${arrOfNumbers[4]}`);

//ACTIVITY -2
//Task -3
arrOfNumbers.push(6)
console.log(arrOfNumbers);

//Task -4
arrOfNumbers.pop();
console.log(arrOfNumbers);

//Task -5
arrOfNumbers.shift();
console.log(arrOfNumbers)

//Task -6
arrOfNumbers.unshift(1);
console.log(arrOfNumbers);

//ACTIVITY -3
//Task -7
let newArr1 = arrOfNumbers.map((a) => (a * 2));
console.log(newArr1);

//Task -8
let newArr2 = arrOfNumbers.filter((a) => (a%2 === 0));
console.log(newArr2);

//Task -9
let newArr3 = arrOfNumbers.reduce((a,b) => (a + b));
console.log(newArr3);

//ACTIVITY -4
//Task -10
for(let i = 0; i<=arrOfNumbers.length-1; i++){
    console.log([i]);
}

//Task -11
arrOfNumbers.forEach(a => {
    console.log(a);
});

//ACTIVITY -5
//Task -12
let Arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(Arr);

//Task -13
console.log(Arr[1]);