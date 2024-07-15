//ACTIVITY- 1
//Task-1
function positiveOrNegative(num){
    if(num > 0){
    console.log(`${num} is Positive`);
    }else if(num < 0) {
        console.log(`${num} is Negative`);
    }else{
        console.log(`${num} is Zero!`);
    }
}
positiveOrNegative(-10);

//Task-2
function eligibleOrNot(age){
    if(age >= 18){
        console.log(`You are ${age} & you are eligible for voting!`);
    } else{
        console.log(`You are not eligible for voting because you are ${age}!`);
    }
}
eligibleOrNot(20);

//ACTIVITY-2
//Task- 3
function findLargest(num1,num2,num3){
    if(num1 > num2){
        if(num1 > num3){
            console.log(`${num1} is the Largest!`);
        }else{
            console.log(`${num3} is the Largest!`);
        }
        }else{
            if(num2 > num3){
                console.log(`${num2} is the Largest!`);
        }else{
            console.log(`${num3} is the Largest!`)
        }
    }  
}
findLargest(15,20,10);

//ACTIVITY-3
//Task- 4
function dayBasedOnNum(num){
    switch(num){
        case num = 1:
            console.log(`${num} is Sunday!`);
            break;
        case num = 2:
            console.log(`${num} is Monday!`);
            break;
        case num = 3:
            console.log(`${num} is Tuesday!`);
            break;
        case num = 4:
            console.log(`${num} is Wednesday!`);
            break;
        case num = 5:
            console.log(`${num} is Thursday!`);
            break;
        case num = 6:
            console.log(`${num} is Friday!`);
            break;
        case num = 7:
            console.log(`${num} is Saturday!`);
            break;
    }
}
dayBasedOnNum(7);

//Task- 5
function gradeBasedOnScore(score){
    switch(true){
        case score <= 100 && score >=80:
            console.log("You got A grade!");
        break;
        case score < 80 && score >=60:
            console.log("You got B grade!");
        break;
        case score < 60 && score >=40:
            console.log("You got C grade!");
        break;
        case score < 40 && score >=20:
            console.log("You got D grade!");
        break;
        case score < 20 && score >=0:
            console.log("You got F grade!");
        break;

        default:
            console.log("Enter a valid score!")
    }
}
gradeBasedOnScore(79);

//ACTIVITY-4
//Task- 6
function oddOrEven(num) {
    num%2==0? console.log(`${num} is Even`) : console.log(`${num} is Odd`);
}
oddOrEven(2);

//ACTIVITY-5
//Task- 7
function leapYearOrNot(year) {
    let leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    if(leapYear){
        console.log(`${year}  is an Leap Year!`);
    }else{
        console.log(`${year} is an Normal Year`);
    }
}
leapYearOrNot(2020);