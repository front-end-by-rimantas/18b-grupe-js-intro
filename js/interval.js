const nuo = -18;
const iki = 18;
const daliklis = 7;
let count = 0;

// % - dalykos liekana

for (let i = nuo; i <= iki; i++) {
    if (i % daliklis === 0) {
        count++;
    }
}

const rez = `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${count} vienetai.`;

console.log(rez);

const nuo2 = -7;
const iki2 = 13;
const daliklis2 = 7;
let count2 = 0;

for (let i = nuo2; i <= iki2; i++) {
    if (i % daliklis2 === 0) {
        count2++;
    }
}

const rez2 = `Skaičių intervale tarp ${nuo2} ir ${iki2}, besidalijančių be liekanos iš ${daliklis2} yra ${count2} vienetai.`;

console.log(rez2);

const nuo3 = 17;
const iki3 = 88;
const daliklis3 = 5;
let count3 = 0;

for (let i = nuo3; i <= iki3; i++) {
    if (i % daliklis3 === 0) {
        count3++;
    }
}

const rez3 = `Skaičių intervale tarp ${nuo3} ir ${iki3}, besidalijančių be liekanos iš ${daliklis3} yra ${count3} vienetai.`;

console.log(rez3);


