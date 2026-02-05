
function oddAvarge(numbers){
    
     const odd=[ ];

    for(number of numbers){
      
        if(number%2 === 0){
            // console.log(number)
            odd.push(number)

        }
    }
    // console.log(odd)
    let sum = 0;
    for(const number of odd){
        sum = sum + number;
        
    }
    const leth = odd.length;
    const avg = sum/leth;
    return avg;
    


}

const numbers =[42,13,58,65,81, 96, 7,5];
const avg = oddAvarge(numbers);
console.log('Average of the odd number is: ', avg)
