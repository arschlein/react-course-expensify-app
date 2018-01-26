
// Object destructuring

// const person = {
//     name: 'Mona',
//     age: 33,
//     location: {
//         city: 'Brno',
//         temp: 1
//     }
// };


// const { name: firstname = 'Anonymous', age } = person;  //jiný zápis dvou řádků níže
// const name = person.name;
// const age = person.age;

// console.log(`${firstname} is ${age}.`);

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`Its ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);




//Array destructuring

const address = ['1299 Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'York'] = address; //názvy odpovídaji pozici v poli, pokud chci nejaky vynechat, oddelime prazdne misto carkou
console.log(`you are in ${city} ${state}.`);

const item = ['coffee', '25 Kc', '45 Kc', '59 Kc'];
const [product, , medium] = item;

console.log(`A medium ${product} a stoji ${medium}.`);