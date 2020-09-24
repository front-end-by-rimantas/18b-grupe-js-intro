// if (text === 'NaN') {
//     return 'Netinkama reiksme (turi buti normalus skaicius).';
// }
// if (text === 'Infinity') {
//     return 'Netinkama reiksme (turi buti normalus skaicius).';
// }
// if (text === '-Infinity') {
//     return 'Netinkama reiksme (turi buti normalus skaicius).';
// }

function numCount(number) {
    const text = '' + number;

    // bendrinis patikrinimas
    // if (typeof number !== 'number' ||
    //     isFinite(number) === false) {
    //     return 'Ne normalus skaicius.';
    // }

    // gaudome ne skaiciaus tipus
    if (typeof number !== 'number') {
        return 'Netinkamo tipo reiksme (turi buti skaicius).';
    }

    // gaudome skaiciau tipa, bet ne skaicius (pvz: NaN, Infinity)
    if (isFinite(number) === false) {
        return 'Netinkama reiksme (turi buti normalus skaicius).';
    }

    let ilgis = text.length;

    // o jeigu tai desimtainis, tai eliminuojame taska
    if (number % 1 !== 0) {
        ilgis--;
    }

    // jeigu neigiamas skaicius, tai eliminuojame minusa
    if (number < 0) {
        ilgis--;
    }

    return ilgis;
}


console.log(numCount(true));
console.log(numCount(false));
console.log(numCount('asd'));
console.log(numCount(NaN));
console.log(numCount(Infinity));
console.log(numCount(-Infinity));

console.log(numCount(5), '->', 1);
console.log(numCount(781), '->', 3);
console.log(numCount(37060123456), '->', 11);
console.log(numCount(3.14), '->', 3);
console.log(numCount(3.141592564), '->', 10);
console.log(numCount(-781), '->', 3);
console.log(numCount(-5), '->', 1);
console.log(numCount(-3.14), '->', 3);
console.log(numCount(-3.141592564), '->', 10);

console.log(numCount(56161611664649849849849848498464494949494488), '->', 44);