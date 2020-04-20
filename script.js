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

