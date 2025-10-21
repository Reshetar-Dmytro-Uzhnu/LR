const sport={
    name: 'Football',
    number: 11,
    year: 2025
}
console.log(sport.year)
sport.year=2000
console.log(('Мій улюблений спорт '+ sport.name + '. Я займаюся ним з '+ sport.year + ' нас у команді '+ sport.number))
// for (let key in sport){
//     console.log(key+' : '+ sport[key])
// }
const keys= Object.keys(sport)
console.log(keys)
