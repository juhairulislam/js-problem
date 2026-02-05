

const phones = [
    {name: 'Samsung', price: 20000},
    {name: 'Iphone', price: 120000},
    {name: 'Xiomi', price: 10000},
    {name: 'Oppo', price: 30000},
    {name: 'Infinix', price: 12000},
    {name: 'HTC', price: 50000}

]

function getChepestPhone(phones){
    
    let max = phones[0];

    for(const phone of phones){
        if(max.price < phone.price){
            max = phone;
        }
        
    }
    return max;
}

const phone = getChepestPhone(phones)
console.log('The boroloki phone is :', phone)