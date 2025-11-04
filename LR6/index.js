// const fruits = [ 'apple', 'banana', 'orange'];
// console.log(fruits)
// fruits.push('strawberry');
// console.log(fruits)
// fruits.shift();
// console.log(fruits)
// for (let items of fruits ){
//     console.log(items)
// }
//
const  fruits = [
    {
        name: 'banana',
        c: 12,
        price: 18,
    },
    {
        name: 'apple',
        c: 17,
        price: 20,
    },
]
console.log(fruits);
fruits.unshift({
    name: 'strawberry',
    c: 19,
    price: 24
})
console.log(fruits[0].price)
