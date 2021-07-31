// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
/*

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
*/

// створити пустий масив, наповнити його 10 об'єктами Client


class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let client1 = new Client (1,"Jonny","Depp","j.d@gmail.com","+123456789",["milk","eggs","jem","bread","water","juice","banana","meat","ice-cream"]);
let client2 = new Client (2,"Kelly","Smith","k.s@gmail.com","+12343558",["water","jem","bread","water","orange","yogurt",]);
let client3 = new Client (3,"Kelly","Smith","k.s@gmail.com","+12343558",["juice","banana","meat","ice-cream","water","yogurt","shugar"]);
let client4 = new Client (4,"Kelly","Smith","k.s@gmail.com","+12343558",["fish","water","bread","oil"]);
let client5 = new Client (5,"Kelly","Smith","k.s@gmail.com","+12343558",["water","yogurt"]);
let client6 = new Client (6,"Kelly","Smith","k.s@gmail.com","+12343558",["banana","water","yogurt","juice","banana","meat"]);
let client7 = new Client (7,"Kelly","Smith","k.s@gmail.com","+12343558",["strawberry","potato","tomato","water","yogurt"]);
let client8 = new Client (8,"Kelly","Smith","k.s@gmail.com","+12343558",["water","yogurt"]);
let client9 = new Client (9,"Kelly","Smith","k.s@gmail.com","+12343558",["water","yogurt","juice","banana","meat","milk","strawberry","potato","tomato","solt"]);
let client10 = new Client (10,"Kelly","Smith","k.s@gmail.com","+12343558",["yogurt"]);

let clients = [];
clients.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
console.log(clients);

//  Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientsSort = clients.sort((client1, client2) => client1.order.length - client2.order.length);

console.log(clientsSort);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

/*function Car( manufacturer,model,maxSpeed,productionYear,volume) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.maxSpeed = maxSpeed;
    this.productionYear = productionYear;
    this.volume = volume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю - ${maxSpeed} км/год`);
    }

    this.info = function () {
        console.log(`модель - ${model}, виробник - ${manufacturer}, рік випуску - ${productionYear}
            , максимальна швидкість - ${maxSpeed}, об'єм двигуна - ${volume} л`)
    }

    this.increaseMaxSpeed = function(newSpeed) {
        maxSpeed = maxSpeed + newSpeed;
    }

    this.changeYear = function (newValue) {
        productionYear = newValue;
    }

    this.addDriver = function(driverName, driverAge) {
        let driver = {
            name: driverName,
            age: driverAge
        };
        return this.driver = driver;
    }
}

let jeep = new Car('Jeep', 'Wrangler', 300, 2015, 3.6);
jeep.info();
jeep.increaseMaxSpeed(20);
jeep.info();
jeep.addDriver('Max', 35);
console.log(jeep);*/


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
/*class Car {
    constructor (manufacturer,model,maxSpeed,productionYear,volume) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.productionYear = productionYear;
        this.volume = volume;
    }
    drive () {
        console.log(`їдемо зі швидкістю - ${this.maxSpeed} км/год`);
    }

    info  () {
        console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.productionYear}
            , максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.volume} л`)
    }

    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }

   changeYear (newValue) {
        this.productionYear = newValue;
    }

    addDriver = (name,age) {
        this.driver = {
            name: driverName,
            age: driverAge
        }
        return this.driver
    }
}

let jeep = new Car('Jeep', 'Wrangler', 300, 2015, 3.6);
jeep.info();
jeep.increaseMaxSpeed(20);
jeep.info();
jeep.changeYear(2020);
jeep.addDriver('Max', 35);
console.log(jeep);*/
//

class Car {
    constructor (manufacturer,model,maxSpeed,productionYear,volume) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.productionYear = productionYear;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю - ${this.maxSpeed} км/год`);
    }

    info() {
        console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.productionYear}
                        , максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.volume} л`)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }

    changeYear(newValue) {
        this.productionYear = newValue;
    }

    addDriver(name, age) {
        this.driver = {
            name: name,
            age: age
        };
        return this.driver;
    }

}

let jeep = new Car('Jeep', 'Wrangler', 300, 2015, 3.6);
jeep.info();
jeep.increaseMaxSpeed(20);
jeep.info();
jeep.changeYear(2020);
jeep.addDriver('Max', 35);
console.log(jeep)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(age,footSize,name) {
        this.age = age;
        this.footSize = footSize;
        this.name = name;
    }
}

let cinderella1 = new Cinderella(15,34,"Izabella");
let cinderella2 = new Cinderella(23,38,"Marianna");
let cinderella3 = new Cinderella(16,34,"Natali");
let cinderella4 = new Cinderella(18,36,"Amanda");
let cinderella5 = new Cinderella(25,34,"Jessica");
let cinderella6 = new Cinderella(17,37,"Kamilla");
let cinderella7 = new Cinderella(24,39,"Barbara");
let cinderella8 = new Cinderella(18,36,"Anjelina");
let cinderella9 = new Cinderella(21,35,"Mirabella");
let cinderella10 = new Cinderella(20,34,"Katarina");

let cinderellas = [];
cinderellas.push(cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10);
console.log(cinderellas);

class Prince {
    constructor(age,name,shoesSize) {
        this.age = age;
        this.name = name;
        this.shoesSize = shoesSize;
    }
}
let prince1 = new Prince(28,"William",35);

for (let i = 0; i < cinderellas.length; i++) {
    if (cinderellas[i].footSize === prince1.shoesSize) {
        console.log(`Prince found ${cinderellas[i].name}'s shoe!`);
    }
}

let result = cinderellas.find(cinderellas => cinderellas.footSize === prince1.shoesSize);
console.log(result);