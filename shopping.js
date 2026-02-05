
const products = [
    {name: 'Shampoo', price: 300, quantity: 2},
    {name: 'Chiruni', price: 100, quantity: 3},
    {name: 'Shirt', price: 700, quantity: 5},
    {name: 'pant', price: 1200, quantity: 1}
]

function getShopping(product){

    let total = 0;
    for(const product of products){

        const thisProductCost = product.price * product.quantity;

        total = total +thisProductCost;
    }
    return total;
}
const bazar = getShopping(products);
console.log(bazar)




