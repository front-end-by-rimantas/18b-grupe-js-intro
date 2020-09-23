// IF palyginimo operatoriai:
// naudotini: >, <, >=, <=, ===, !==
// nenaudotini: ==, !=

const limit = 21;
const age = 25;

if (limit === age) {
    console.log('Hepi birzdei tu ju 🎂🥳');
}

if (age !== 0) {
    console.log('Hmm...');
}

if (limit <= age) {
    console.log('Yap, saldainiai tavo 😉😉');
} else {
    console.log('Bandykite kita karta 🍼');
}

console.clear();

const color = 'asff';

if (color === 'melyna') {
    console.log('Tyros sielos... 😇');
} else {
    if (color === 'zalios') {
        console.log('Shrekas.. 🤢');
    } else {
        if (color === 'rudos') {
            console.log('Melagiai... 😓😲😤😱');
        } else {
            console.log('Velniu priede... 👿');
        }
    }
}


const month = 'Vasaris';

if (month === 'Sausis') {
    console.log(1);
} else if (month === 'Vasaris') {
    console.log(2);
} else if (month === 'Kovas') {
    console.log(3);
} else if (month === 'Balandis') {
    console.log(4);
} else {
    console.log('..........');
}

if (month === 'Sausis') console.log(1);
if (month === 'Vasaris') console.log(2);
if (month === 'Kovas') console.log(3);
if (month === 'Balandis') {
    console.log(4);
} else {
    console.log('......');
}