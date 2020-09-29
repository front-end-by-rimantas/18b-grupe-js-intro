/**
 * Geliu auginimas
 * 
 * vazonu kiekis: 20
 * pradinis geliu kiekis: 1
 * dauginasi: 1 (viena gele kasmet uzaugina 1 vaika)
 * 
 * Per kiek metu uzauginsime tiek geliu, jog butu uzimti visi vazonai?
 */
function flowers(totalPotCount, initialFlowers, childrenGrowRate) {
    let flowersCount = initialFlowers;
    let year = 1;

    while (flowersCount < totalPotCount) {
        flowersCount = flowersCount + flowersCount * childrenGrowRate;
        year++;

        console.log(year, '-', flowersCount);
    }

    return year;
}

console.log(flowers(200, 7, 2));     // 6