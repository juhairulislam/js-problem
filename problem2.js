function markAnalyzar (marksObj) {

    let total = 0;
    let highestMark = -Infinity;
    let lowestMark = Infinity;

    let highestSub =null;
    let lowestSub = null;

    for(let subject in marksObj){

        let mark = marksObj[subject];
        total = total + mark;


        if(mark > highestMark){
        highestMark = mark;
        highestSub = subject;
    }

    if(mark <lowestMark){
        lowestMark = mark; 
        lowestSub = subject;

    }

    }

    let avarage = total/Object.values(marksObj).length;

    

    return {
        total,
        avarage,
        highestSub,
        lowestSub,
        
    }

        
}

let output = markAnalyzar({ math: 78,
  english: 65,
  physics: 88,
  bangla: 55,
  biology: 99,});

  console.log(output)