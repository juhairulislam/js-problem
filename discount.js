function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

function sabstract(num1, num2){
    const biyog = num1 - num2;
    return biyog;
}
function multiply(num1, num2){
    const gun = num1 * num2;
    return gun;
}
function divide(num1, num2){
    const vag= num1 / num2;
    return vag;
}


function calculator(a, b, oparation){

    if( oparation === 'add'){
        const sum = add(a, b);
        return sum;
    }

    else if ( oparation === 'multiply'){
        const gun = multiply(a, b);
        return gun;
    }
}

const result = calculator(5, 6, 'multiply');
console.log('Result is:', result)



// kk

