// function inchToFeet(inch){

//     const feet = inch/12;
//     return feet;
// }

// const jionHight = inchToFeet(67.2);
// console.log(jionHight.toFixed(1))


// function milesToKilo(miles){

//     const kilo = miles*0.62;
//     return kilo;
// }

// const result = milesToKilo(20);
// console.log(result.toFixed(2))


function leapYear(year){
    const ly = year%4;
    const ly2 = year%400;
    const output = "It's a leap year";
    const output2 = "It's not leap year"

    if(ly===0 && ly2===0){
        console.log(output)
        
    }

    else{
        console.log(output2)
    }

    // return year
}

const result = leapYear(1900)
// console.log(result)