"use strict"
// let login = prompt("Введите логин", '')
// let password = prompt("Введите пароль", '')
// let dataLogin = 'admin';
// let dataPassword = 12345;
// if(login == dataLogin && password == dataPassword) {
//     alert('Доступ разрешен')
// } else {
//     alert('Доступ запрещен')
// }

// //*Задача 1: Високосный год и магическая дата
// Напишите программу, которая:
// 1. Проверяет, является ли год високосным (делится на 4, но не на 100, если только не делится на 400).
// 2. Если год високосный, проверьте, равна ли дата "29 февраля".
// 3. Если оба условия верны, выведите "Магическая дата!", иначе "Обычная дата".*//



// let year = prompt('Какой сейчас год?', '');
// let yearLeap = (year % 4 == 0 && year % 100 != 0 && year  % 400 != 0);
// let date = prompt('Какое сегодня число?', '')
// let magicDate = "29 февраля";

// if(yearLeap){
//     if(date == magicDate) {
//         alert('Магическая дата!')
//     } else {
//         alert('Обычная дата!')
//     }
// } else {
//     alert('Год НЕ высокосный и дата обычная!')
// }


// const str = 'dsalkfjsadk42342830-=<rfddf32/>*';

// // for(let i of str) {
// //     if(i >= 0) {
// //         console.log(i);
// //     }
// // }


// // for(let i of str) {
// //     if(Number(i)) {
// //         console.log(i);
// //     }
// // }

// let variable = "><=*/-+";

// // for(let i of str) {
// //     if(i.includes("><=*/-+")) {
// //         console.log(i);
// //     }
// // }


// for(let i of str) {
//     if(!variable.includes(i) && isNaN(i)) {
//         console.log(i);
//     }
// }


// const findValue = str.includes('><=*/-+')
// console.log(findValue);



///////////////////////////////////////////////////////////////////

// let hour = prompt('Какой теперь час?','')

// if(hour >= 6 && hour <= 11){
//     alert('Доброе утро!')
// } else if(hour >= 12 && hour <= 17){
//     alert('Добрый день!')
// } else if(hour >= 18 && hour <= 22){
//     alert('Добрый вечер!')
// } else {
//     alert('Спокойной ночи!')
// }

////////////////////////////////////////////////////////////////////

// let num = prompt('Введите число', '')

// if (num % 3 === 0 && num % 5 === 0) {
//     alert('Число делится на 3 и 5')
// } else if(num % 3 === 0){
//     alert('Число делится на 3')
// } else if(num % 5 === 0){
//     alert('Число делится на 5')
// } else if(num % 3 != 0 && num % 5 != 0){
//     alert('Число не делится на 3 и 5')
// }


//////////////////////////////////////////////////////////////////////


// let password = prompt('Введите пароль', '');


// let passwordUser = "qwerty123";
// let x = 3;
// for(; x>0; i--){
//     if(password == passwordUser){
//         alert('Доступ разрешен')
//     } else if(password != passwordUser){
//         alert(`Неверный пароль. Осталось ${x} попыток`)
//     } if(password == passwordUser){
//         alert('Доступ разрешен')
//     } else if(password != passwordUser){
//         alert(`Неверный пароль. Осталось ${x-1} попыток`)
//     } else{
//     alert ('Аккаунт заблокирован')
// }
// }


////////////////////////////////////////////////////////////////////////////////////////


// let temperature = prompt('Какая температура на улице?', '')
// temperature = Number(temperature);

// if(temperature < -10){
//     alert('Очень холодно! Наденьте теплую куртку, шапку и перчатки')
// } else if(temperature >= -10 && temperature <= 10){
//     alert('Прохладно! Наденьте куртку')
// } else if(temperature >= 11 && temperature <= 20){
//     alert('Комфортно! Можно выйти в легкой одежде')
// } else{
//     alert('Жарко! Одевайтесь легко')
// }

//////////////////////////////////////////////////////////////////////////////////////////////

// let sum = prompt('Введите сумму покупки', '');
// sum = Number(sum);

// if (sum < 1000) {
//     alert('Скидка 0%');
// } else if (sum >= 1000 && sum <= 5000) {
//     alert('Скидка 5%');
// } else if (sum >= 5001 && sum <= 10000) {
//     alert('Скидка 10%')
// } else if (sum > 10000) {
//     alert('Скидка 15%')
// }

////////////////////////////////////////////////////////////////////////////////////////////

// let N = +prompt('Введите число', '')
// let sum = 0;

// for(let i = 1; i <= N; i++){
//     sum = sum + i;
// }

// console.log(sum)

////////////////////////////////////////////////////////////////////////////////////////

// let N = +prompt('Введите число', '')

// for(let i = 1; i <= 10; i++){
//     console.log(i*N)
// }

//////////////////////////////////////////////////////////////////////////////////////

// for(let i = 0; i <= 100; i++){
//     console.log(i)
// }

//////////////////////////////////////////////////////////////////////////////////////

let N = prompt('Введите число', '')

let array = []

while(N < 0){
    array.unshift(N % 10);
    num = num/10
}

console.log(array)
array.reverse()
console.log(N)














