// -   - створити функцію яка обчислює та повертає площу прямокутника

/*function calcRectangle(w,h) {
    return w*h;
}
console.log(calcRectangle(10,20));*/

// - створити функцію яка обчислює та повертає площу кола

/*function calcCircle(r) {
    return Math.PI * Math.pow(r, 2);
}
console.log(calcCircle(4));*/

// - створити функцію яка обчислює та повертає площу циліндру

/*function calcCylinder(r,h) {
    return 2*(Math.PI * Math.pow(r, 2)) + (Math.PI * 2*r) * h;
}
console.log(calcCylinder(2,4));*/

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

/*function funcRElement(){
    // console.log(arguments);
    let min = arguments[0];
    let max = arguments[0];
    for (const funRandomElement of arguments) {
        if (funRandomElement > max) max = funRandomElement;
        if (funRandomElement < min) max = funRandomElement;
    };
    console.log("max ",max);
    return min;
};
const min = funcRElement(2,3,4,5,6,7,8);
console.log('-------------');
console.log("min ",min);*/


// - створити функцію яка  створює блок з текстом. Текст задати через аргумент

/*function createDiv(text) {
    document.write(`<div>
                       <p>${text}<p/>
                  </div>`);
}
createDiv("Hello,my friend!");*/

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*function createList(text) {
    document.write(`<ul>
                       <li>${text}<li/>
                       <li>${text}<li/>
                       <li>${text}<li/>
    </ul>`);
}
createList("Super puper Summer !");*/

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

/*function createList(text, num) {
    document.write(`<ul>`);
        for (let i = 0; i < num; i++) {
            document.write(`<li>${text}</li>`);
        }
    document.write(`</ul>`);
}
createList("Beautiful Life !",3);*/

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

/*
function createList(arr) {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}

createList([333, 'lucky', true]);*/
