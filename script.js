'use strict';

function jediName(firstName, lastName) {
    return lastName.slice(0, 3) + firstName.slice(0, 2);

}
jediName('Kamela', 'Williamson');



//to infinity

function beyond(num) {

    switch(num) {
        case Infinity:
            console.log('And beyond');
            break;
        case num > 0:
            console.log('To infinity');
            break;
        case num < 0:
            console.log('To negative infinity');
            break;
        case num === 0:
            console.log('Staying home');
            break;
    }
    
}
beyond(Infinity);


//Cracking the code

function crackingTheCode(str) {
    let code = [];
    let arr = str.split(' ');

    for(let word of arr) {
        switch (word[0]) {
            case 'a':
                code.push(word[1]);
                break;
            case 'b':
                code.push(word[2]);
                break;
            case 'c':
                code.push(word[3]);
                break;
            case 'd':
                code.push(word[4]);
                break;
            default:
                code.push(' ');
                break;
        }
    }
    return code.join('');
}

console.log(crackingTheCode('craft block argon meter bells brown croon droop'));


// How many days in a month

function daysInAMonth(month, leapYear) {
    switch(month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            return 31;
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            return 30;
            break;
        case 'February':
            switch(leapYear) {
                case true:
                    return 29;
                    break;
                case false:
                    return 28;
                    break;
            }
    }
}

console.log(daysInAMonth('February', true));

// Rock Paper Scissors

function rockPaperScissors(num) {
    const randomNo = Math.floor(Math.random() * 3) + 1;

    if(num > 3 || num < 1) {
        throw new Error("Invalid Input");
    } else if(num === randomNo) {
        console.log(`It's a tie!`);
    } else if(num === 1) {
        if(randomNo === 2) {
            console.log("You Lose.");
        } else if(randomNo === 3) {
            console.log("You Win!");
        }
    } else if(num === 2) {
        if(randomNo === 3) {
            console.log("You Lose.");
        } else if(randomNo === 1) {
            console.log("You Win!");
        }
    } else if(num === 3) {
        if(randomNo === 1) {
            console.log("You Lose.");
        } else if(randomNo === 2) {
            console.log("You Win!");
        }
    }
}

rockPaperScissors(3);
rockPaperScissors(2);
rockPaperScissors(5);

