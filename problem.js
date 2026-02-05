function wordFrequency(sentence){

    let words = sentence.split(" ")
     let wordCount={};

    for(let word of words){
        let wordLowerCase = word.toLowerCase();
        if(wordCount.hasOwnProperty(wordLowerCase)){
            wordCount[wordLowerCase]++;
        }

        else{
            wordCount[wordLowerCase] = 1;
        }
       
    
    
    }
    return wordCount;

}

let sentence = wordFrequency("I Love js and i love coding becuse coiding is good For me")
console.log(sentence)