// KINT. INICIAVIMAS: const, let
// KINTAMIEJI: array, string, number
// OPERATORIAI: =, +, -,

const name = 'Vardenis';
console.log(name);

let luckyNumber = 5;
console.log(luckyNumber);

luckyNumber = 7;
console.log(luckyNumber);

const animals = ['doggo', 'catto', 'piggo'];
console.log(animals);

console.log('Pirmas gyvunas:', animals[0]);
console.log('Antras gyvunas:', animals[1]);
console.log('Trecias gyvunas:', animals[2]);
console.log('Ketvirtas gyvunas:', animals[3]);

const sentence = animals[0] + ' lucky number is ' + luckyNumber;

console.log(sentence);


const pirmas = -88;
const antras = 100;
const suma = pirmas + antras;

const rez = 'Skaiciu ' + pirmas + ' ir ' + antras + ' suma yra ' + suma + '.';

console.log(rez);


const word = 'MisterSir';

const heloSirr = 'Heloo, ' + word + '. How do do you?';

const helloSir = 'Heloo, vardenis.\
How do do you?';

const links = ['Home', 'Services', 'Contact us'];

const HTML = '<header>\n\
                < img src = "#" alt = "Logo" />\n\
                    <nav>\n\
                        <a href="#">'+ links[0] + '</a>\n\
                        <a href="#">'+ links[1] + '</a>\n\
                        <a href="#">'+ links[2] + '</a>\n\
                    </nav>\n\
            </header >';

console.log(HTML);

console.clear();

// Viengubos (') ir dvygubos (").

const pradzia = 'Viengubos (\') ir \\\\ dvygubos (").';
console.log(pradzia);

const vardas = 'Serloko';
const imgAlt = `${vardas} nuotrauka`;
const links2 = ['A', 'bb', 'CcC'];

const HTML2 = `
<header>
    <img src="" alt="${imgAlt}"/>
    <nav>
        <a href="">${links2[0]}</a>
        <a href="">${links2[1]}</a>
        <a href="">${links2[2]}</a>
    </nav>
</header>`;
console.log(HTML2);