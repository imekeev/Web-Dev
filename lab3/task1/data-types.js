// DATA TYPES числа

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(1 / 0);
console.log(-1 / 0);

console.log("text" / 2);

// DATA TYPES стрки

let firstName = "Beibit";
let lastName = "Imekeev";

let fullName = firstName + " " + lastName;
console.log(fullName);

console.log(fullName.length);

console.log(fullName[0]);  

let message = `My name is ${fullName}`;
let mynam = `My name is ${fullName}`;
console.log(message);
console.log(mynam);

// DATA TYPES булевые значения

let isStudent = true;
let hasFinishedHomework = false;

console.log(isStudent);
console.log(hasFinishedHomework);

console.log(5 > 3);
console.log(5 < 3);
console.log(10 === 10);
console.log(10 !== 5);

// DATA TYPES пустое значение и неизвестное

let age;
console.log(age);

let selectedItem = null;
console.log(selectedItem);

// DATA TYPES типы данных 

console.log(typeof 10);           //Числовое
console.log(typeof "hello");      // Строка
console.log(typeof true);         //Булевое
console.log(typeof undefined);    //Неизвестное
console.log(typeof null);         //Object (особенность js)

//Task 1

let names = "Ilya";


console.log("Hello " + names);

console.log(`Hello ${names}`);

// Task 2 typeof

console.log(typeof 0);
console.log(typeof "0");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol("id"));

// Task 3 Interaction

let userName = prompt("What is your name?");
console.log(typeof userName); // stroka

let isAdult = confirm("Are you over 18?");
console.log(typeof isAdult);






