// - створити функцію яка приймає масив та виводить його

// let array = [1,2,3,4,5];
// function printArray(array){
//     console.log(array);
// }
// printArray(array);

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

/*function min(a1, a2, a3) {
    if (a1 < a2 && a1 < a3) {
        console.log(a1);
    } else if (a2 < a3 && a2 < a1){
        console.log(a2);
    } else {
        console.log(a3);
    }
}
min(7,15,5);*/

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

/*function max(a1, a2, a3) {
    if (a1 > a2 && a1 > a3) {
        console.log(a1);
    } else if (a2 > a3 && a2 > a1){
        console.log(a2);
    } else {
        console.log(a3);
    }
}
max(7,15,5);*/

// - створити функцію яка повертає найбільше число з масиву

/*function maxOf(arr){
    let max = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= max){
            max = arr[i];
        }
    }
    console.log("max:" + max);
    return max;
}
maxOf([7,2,3,4,8,5,9,1]);*/


/*function arrayMax(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr [i] > max) {
            max = arr[i];
        }
    }
    return max;
}
const arrayMaxReturn = arrayMax([3,15,7,11,9,13,5]);
console.log(arrayMaxReturn);*/



// - створити функцію яка повертає найменьше число з масиву

/*function arrayMin(arr) {
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr [i] < min) {
            min = arr[i];
        }
    }
    return min;
}
const arrayMinReturn = arrayMin([3,15,7,11,9,13,5]);
console.log(arrayMinReturn);*/

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

     /*  function sumElem(arr){
         let sum = 0

           for (let i = 0; i < arr.length; i++) {
               sum += arr[i]
           }
           return sum;
       }
    console.log(sumElem([1, 2, 3, 4, 5, 8, 17, 55]));*/

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

/*function midValue(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]/arr.length

    }
    return sum;
}
console.log(midValue([11, 22, 33, 44, 55, 66, 77, 88]));*/

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

/*function randomArray(arrLength) {
    let arr = [];
    for (let i = 0; i < arrLength; i++) {
        arr[i] = Math.round(Math.random()*100);
    }
    return arr;
}*/

//!!! - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE: [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

/*function keyArray(arr) {
    let keyArr = [];
   for (let i = 0; i < arr.length; i++) {
        for(let key in arr[i]) {
            keyArr.push(key);
        }
    }
return keyArr
}

console.log(keyArray([{name: 'Dima', age: 13}, {model: 'Camry'}]));*/

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE: [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

/*function valueArray(arr) {
    let valArr = [];
   for (let i = 0; i < arr.length; i++) {
        for(let key in arr[i]) {
            valArr.push(arr[i][key]);
        }
    }
return valArr;
}
console.log(valueArray([{name: 'Dima', age: 13}, {model: 'Camry'}]));*/

//     - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:[1,2,3,4] [2,3,4,5] результат [3,5,7,9]
/*
function arraySumElements(arr1, arr2) {
    let resultArray = [];

    for (let i = 0; i < arr1.length; i++) {
        resultArray[i] = arr1[i] + arr2[i];
    }
    return resultArray;
}
console.log(arraySumElements([1,2,3,4] ,[2,3,4,5]));*/

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

/*let arr = ['a', 'b', 'c'];
for (let i = 1; i <= 3; i++) {
    arr.push(i);
}
console.log(arr);*/

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

/*let  arrRevers = [];
let arr = [1, 2, 3];
for (let i = 0, j = arr.length - 1; i < arr.length, j >= 0; i++, j--) {
    arrRevers[i] = arr[j];
}
console.log(arrRevers);*/

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

/*let arr = [1, 2, 3];
for (let i = 4; i <= 6; i++) {
    arr.push(i);
}
console.log(arr);*/

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

/*let arr = [1, 2, 3];
for (i = 4; i <= 6; i++) {
    arr.unshift(i);
}
console.log(arr);*/

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

/*let arr = [1, 2, 3, 4, 5];
arr = arr.slice(3, 5)
console.log(arr);*/

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

/*let arr = [1, 2, 3, 4, 5];
arr = arr.slice(0, 2);
console.log(arr);*/

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].

/*let arr = [1, 2, 3, 4, 5];
arr.push('a', 'b', 'c');
console.log(arr);*/

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}*/

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу
// скопіювати значення одного масиву в інший.

/*let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
}
console.log(arr2);*/

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

/*let arr = [ 'a', 'b', 'c'];
let str = '';
for (let i = 0; i < arr.length; i++) {
    str += arr[i];
}
console.log(str);*/

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
/*

let arr = [ 'a', 'b', 'c'];
let str = '';
let i = 0;
while (i < arr.length) {
    str += arr[i];
}
console.log(str);
*/

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

/*let arr = [ 'a', 'b', 'c'];
let str = '';
for (const char of arr) {
    str += char;
}
console.log(str);*/
