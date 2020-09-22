"use strict";

// 4 + 7 = 11

const pirmas = 4;
const antras = 7;

const suma = pirmas + antras;

console.log(pirmas);
console.log(antras);
console.log(suma);

let nuotaika = 'gera 👿';
console.log(nuotaika);

nuotaika = 'bloga 😇';
console.log(nuotaika);
console.log(nuotaika);
console.log(nuotaika);
console.log(nuotaika);
console.log(nuotaika);
console.log(nuotaika);
console.log(nuotaika);

nuotaika = '🙄';
console.log(nuotaika);
console.log(nuotaika);
console.log(nuotaika);

console.log(4 + 7);

const rez = 2 + 2 * 2;
console.log(rez);

const hi = 'Labas';
const mor = 'rytas';

const sayHi = hi + ' ' + mor + '.';
console.log(sayHi);

const hiStrong = hi + '!';
console.log(hiStrong);

const name = 'Vardenis';
const surname = 'Pavardenis';

const fullName = name + ' ' + surname;
console.log('Hi, I am ' + fullName);

const paz1 = 1;
const paz2 = 10;
const paz3 = 7;
const paz4 = 5;
const paz5 = 8;

// sarasas, array, list, masyvas
const marks = [1, 10, 7, 8, 5, 4];

const marksPaz = [paz1, paz2, paz3, paz4];

console.log(marks);
console.log(marksPaz);

console.log(marks);

let sum = 0;
let pazNum = -1;
sum += marks[++pazNum];
sum += marks[++pazNum];
sum += marks[++pazNum];
sum += marks[++pazNum];
sum += marks[++pazNum];
sum += marks[++pazNum];
const count = marks.length;
const average = sum / count;

console.log('Marks average:', sum, '/', count, '=', average);

console.log('----------------');
console.log('----------------');
console.log('----------------');

const num = [1, 2, 3, 4, 5];

let numSum = 0;
let index = 0;

numSum += num[index++];
console.log(numSum);

numSum += num[index++];
console.log(numSum);

numSum += num[index++];
console.log(numSum);

numSum += num[index++];
console.log(numSum);

numSum += num[index++];
console.log(numSum);

console.log('---------------');

let money = 0;

money += 7;
console.log(money, 'pegenu');

money += 15;
console.log(money, 'pegenu');

money += 31;
console.log(money, 'pegenu');



// matematiniai operatoriai:
// paprasti: +, -, *, /
// increment: ++ (before, after)
// decrement: -- (before, after)
// update: +=, -=, *=, /=

console.log('---------------');

const fruits = ['orange', 'apple', 'banana', 'pineapple', 'kiwi'];

console.log(fruits);

console.log(fruits[0] + ', ' + fruits[1] + ', ' + fruits[2] + ', ' + fruits[3] + ', ' + fruits[4]);


let fi = 0;
console.log(fruits[fi++] + ', ' + fruits[fi++] + ', ' + fruits[fi++] + ', ' + fruits[fi++] + ', ' + fruits[fi++]);


let fidi = -1;
console.log(fruits[++fidi] + ', ' + fruits[++fidi] + ', ' + fruits[++fidi] + ', ' + fruits[++fidi] + ', ' + fruits[++fidi]);