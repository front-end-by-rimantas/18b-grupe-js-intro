function dvygubaSuma(a, b) {
    return (a + b) * 2;
}

const pirmaSuma = dvygubaSuma(7, 8);
const antraSuma = dvygubaSuma(77, -88);

console.log(pirmaSuma);         // 30
console.log(antraSuma);         // -22


console.clear();

// function asiuSkaicius(ratuKiekis) {
//     let asys = 1;
//     let nepanaudotiRatai = ratuKiekis - 2;

//     if (nepanaudotiRatai === 2) {
//         asys++;
//     } else {
//         asys += nepanaudotiRatai / 4;
//     }

//     return asys;
// }

// function asiuSkaicius(ratuKiekis) {
//     if (ratuKiekis === 4) {
//         return 2;
//     } else {
//         return (ratuKiekis + 2) / 4;
//     }
// }

/**
 * Funkcija skirta rasti asiu kieki automobilyje is duotu ratu skaiciaus
 * @param {number} r ratu kiekis
 * @returns {number} asiu skaicius
 */
function asiuSkaicius(r) {
    return r === 4 ? 2 : (r + 2) / 4;
}

console.log(asiuSkaicius(4))      // 2 -> 2+2
console.log(asiuSkaicius(10))     // 3 -> 2+4+4
console.log(asiuSkaicius(14))     // 4 -> 2+4+4+4
console.log(asiuSkaicius(18))     // 5 -> 2+4+4+4+4


// 5 aukstu eglute

//    *
//   ***
//  *****
// *******
//*********
//    #



// 3 aukstu eglute

//  *
// ***
//*****
//  #
console.clear();

function str(string, count) {
    let text = '';
    for (let i = 0; i < count; i++) {
        text += string;
    }
    return text;
}

function tree(height) {
    // virsune
    console.log(str(' ', height - 1) + '|');

    // zemiau esantys sluoksniai
    for (let i = 1; i < height; i++) {
        let sluoksnis = '';
        // atstumiame is kaires puses
        sluoksnis += str(' ', height - i - 1);
        // uzdedu kairi zaisliuka
        sluoksnis += '@';
        // piesiu eglutes sakas
        sluoksnis += str('*', i * 2 - 1)
        // uzdedu desini zaisliuka
        sluoksnis += '@';

        console.log(sluoksnis);
    }

    // kamienas
    console.log(str(' ', height - 1) + '#');
}

tree(15);


// *            2
// ***          1
// *****        0
// *            2