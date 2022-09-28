// task 1 
//Создать произвольную переменную, присвоить ей значение. C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let x = 'smth';
if (x == 'hidden') {
    x = 'visible';
} else {
    x = 'hidden';
}

// task 2
/*Создать переменную и присвоить ей число.
Записать условие:
- если переменная равна нулю, присвоить ей 1;
- если меньше нуля - строку “less then zero”;
- если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).*/

let a = 4;
if (a == 0){
    a = 1;
} else if (a < 0) {
    a = 'less then zero' ;
} else if (a > 0) {
    a *= 10;
}

// task 3
/* 
Запросите у пользователя число и запишите его в переменную. 

(Не забывайте, что от пользователя мы всегда получаем строку).

Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.

Выполните это задание, используя тернарный оператор (: ?)
*/

let n = prompt('enter any number');
let result = (n < 5) ? '0' : 
 '1' ;
console.log(result);

// task 4
/* 
Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).


* предусмотреть вариант ввода одинаковых чисел
*/

let number1 = prompt('enter any number');
let number2 = prompt('enter any number');
if (number1 > number2) {
    console.log(number1, ' is the biggest');
} else if (number1 < number2) {
    console.log(number2, ' is the biggest');
} else if (number1 = number2) {
    console.log('both numbers are equal');
};


// task 5
/*
Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль.
*/

let num1 = prompt('enter any number');
let num2 = prompt('enter any number');
if (num1 % num2 == 0) {
    console.log('the first number is a multiple of the second');
} else {
    console.log('the first number is not a multiple of the second')
};


// task 6
/*
Запросить у пользователя средний балл, записать в переменную.

Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).
*/

let GPA = prompt('enter your GPA');
if (GPA <= 4 && GPA >= 1) {
    console.log('you\'re a two-biter, go study!');
} else if (GPA <= 8 && GPA >= 5) {
    console.log('not bad, but you can better!');
} else if (GPA <= 10 && GPA >= 9 ) {
    console.log('wow, you\'re a real exellent srudent!');
} else {
    console.log('there can be no such value, try again!');
};


// task 7
/*
Запросить у пользователя ответы на 2 вопроса:

- балл за экзамен (от 0 до 100)

- количество выполненных проектов (от 0 и больше)

Вывести в консоль общий выпускной балл в соответствии с этими значениями:

- 100, если балл за экзамен более 90 или количество проектов более 10.
- 90, если балл за экзамен более 75 и количество проектов не менее 5.
- 75, если балл за экзамен более 50 и количество проектов не менее 2.
- 0 во всех других случаях.
*/


// option 1
let examScore = prompt('what is your exam score?');
let projects = prompt('how many projects have you done?');

if (examScore > 90 || projects > 10) {
    console.log(100);
} else if (examScore > 75 && projects >= 5) {
    console.log(90);
} else if (examScore > 50 && projects >= 2) {
    console.log(75);
} else {
    console.log(0);
};

// option 2
let examScore2 = prompt('what is your exam score?');
let projects2 = prompt('how many projects have you done?');
let finalScore = (examScore2 > 90 || projects2 > 10) ? 100 : 
(examScore2 > 75 && projects2 >= 5) ? 90 :
(examScore2 > 50 && projects2 >= 2) ? 75 : 
0;
console.log(finalScore);


// task 8
/*
День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.

Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.
*/

let rentalTime = prompt('hjw many days do you want to rent a car for?');
let price = (rentalTime <= 2 && rentalTime > 0) ? rentalTime * 40 :
( rentalTime >= 3 && rentalTime <=6) ? rentalTime * 40 - 20 : 
(rentalTime >= 7) ? rentalTime * 40 - 50 : 
'incorrect value';
console.log(price, '$');


// task 9
/*
Создать переменную и записать в нее число, например 10.

10 раз увеличивать значение этой переменной на 1. Результат вывести в консоль.
*/

let ok = 10;
for (let i = 0; i < 10; i++){
    ok++;
};
console.log(ok);


// task 10
/*
Увеличивая счетчик цикла на 2, нужно 5 раз:

- запрашивать у пользователя ввод числа

- проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"
*/

for (let enter = 2; enter <= 10; enter += 2) {
let cat = prompt('enter any number');
    if (cat == 10) {
        console.log('equal to 10');
    } else {
        console.log('not equal to 10');
    }
}




// task 11
/*
Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...


* Задавать количество чисел, которые нужно вывести, при помощи функции prompt.
*/

for ( let square = 0; square < 100; square++){
console.log(square ** 2);
}


// task 12
/*
Напишите программу, которая выводит в консоль числа от 1 до 100.
При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»
*/


for (let x = 1; x <= 100; x++) {
    if (x % 3 == 0 && x  % 5 == 0) {
        console.log('FizzBuzz');
    } else if (x % 3 == 0) {
        console.log('Fizz');
    } else if (x % 5 == 0) {
        console.log('Buzz');
    } else {
    console.log(x);

    }
}