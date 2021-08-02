
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

function randomArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    return arr;
}
    randomArray();



// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

/*function randomArray(arrLength) {
    let arr = [];
    for (let i = 0; i < arrLength; i++) {
        arr[i] = Math.round(Math.random()*100);
    }
    return arr;
}
console.log(randomArray(100));*/

// - створити  масив  цілих числових значень.
// Відсортувати його за допомоги sort

/*let numbers = [12,34,105,77,48,32,17,55,81];
let sort = numbers.sort( (a,b) => {
    return a-b
});
    console.log(sort);*/

// - створити  масив  цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

/*let numbers = [12,34,105,77,48,32,17,55,81];
let result = numbers.filter(num => num % 2 === 0);
console.log(result);*/

// - створити масив  цілих числових значень  .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

/*let numbers = [12,34,105,77,48,32,17,55,81];
let result = numbers.map(num => num + '');
console.log(result);*/

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
/*unction User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}*/

// Взяти масив цей  users[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter)

/*let users = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

let result = users.filter(user => user.id % 2 === 0 );
console.log(result);*/

//  Взяти масив цей  users[] та:Відсортувати його по id. по зростанню (sort)

/*let users = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

let sort = users.sort((a,b) => {
    return a.id - b.id
});
console.log(sort);*/

