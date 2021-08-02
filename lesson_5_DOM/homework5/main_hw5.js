// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById("content");
// -- отримує текст з блоку з id "rules"
let rulesText = document.getElementById("rules");
// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerHTML = "Hello my dear friends!"
// -- замініть текст параграфа з id 'rules' на будь-який інший
rulesText.innerHTML = "Lalalalalalalalalalalalalalalalalalala"
// -- змініть кожному елементу колір фону на червоний
let  all = document.body.getElementsByTagName('*');

for (const allElement of all) {
    allElement.style.background = 'lightcoral';
}
// -- змініть кожному елементу колір тексту на синій
for (const allElement of all) {
    allElement.style.color = 'blue';
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

/*console.log(rulesText.classList);
// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
let fc_rules = document.getElementsByClassName('fc_rules');

function logSomeText() {
    console.log('Hello,World !!!');
}
for (const fcRule of fc_rules) {
    fcRule.onclick = function () {
        let color = fcRule.style.backgroundColor;
        console.log(fcRule.innerText);

        logSomeText();
    }

    fcRule.style.color = 'red';
}*/
