const biriyaniKhor = ['abul','babul', ';cabul','abul','babul','dabul','kabul','cabul'];

const numbers = [1,5,61,5,87,7,81,61];

function noDuplicet(array){
    const uniqe = [ ];
    for(const item of array){
        if(uniqe.includes(item) === false){
            uniqe.push(item);
        }
    }

    return uniqe;


    
}

const uniqArray = noDuplicet(biriyaniKhor);
console.log(uniqArray)