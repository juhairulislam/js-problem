const height = [65, 9, 66, 68, 72, 78, 60, 65, 66,665] ;

function getmin(number){
    
    let min = number[0];
    for(const num of number){
        if(num < min){

            min = num;
        }
        
    }
    return min;
}

const min = getmin(height);
console.log('Minimum value is: ', min)
