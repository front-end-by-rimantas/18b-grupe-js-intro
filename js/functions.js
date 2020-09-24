function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());



function daugyba(skaicius1, skaicius2) {
    const sandaugosRezultatas = skaicius1 * skaicius2;
    return sandaugosRezultatas;
}

console.log(daugyba(2, 3));
console.log(daugyba(-2, 4));


function interval(nuo, iki, daliklis) {
    let count = 0;

    for (let i = nuo; i <= iki; i++) {
        if (i % daliklis === 0) {
            count++;
        }
    }

    const rez = `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${count} vienetai.`;

    return rez;
}

console.log(interval(0, 21, 5));
console.log(interval(-21, 21, 5));
console.log(interval(-21, 1221, 5));