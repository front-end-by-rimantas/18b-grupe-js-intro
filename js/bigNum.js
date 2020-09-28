function bigNum(numberList) {
    // input validation
    if (typeof numberList !== 'object') {
        return 'ERROR: netinkamo tipo reiksme.';
    }
    if (numberList.length === 0) {
        return 'ERROR: tuscias sarasas';
    }

    // logika
    let biggestNumber = -Infinity;

    for (let i = 0; i < numberList.length; i++) {
        const currentNumber = numberList[i];

        if (typeof currentNumber === 'number') {
            if (currentNumber > biggestNumber) {
                biggestNumber = currentNumber;
            }
        }
    }

    if (biggestNumber === -Infinity) {
        return 'ERROR: sarase nebuvo nei vieno skaiciaus.';
    }

    return biggestNumber;
}

console.log(bigNum('pomidoras'));
console.log(bigNum(4155));
console.log(bigNum(true));
console.log(bigNum(false));
console.log(bigNum([]));
console.log(bigNum([true, false, null, [], 'asd', 'qwe']));

console.log(bigNum([1]), '->', 1);
console.log(bigNum([9]), '->', 9);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([1, 3, 2]), '->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum([9, 5, 'asd']), '->', 9);
console.log(bigNum([9, 'asd', 5]), '->', 9);
console.log(bigNum(['asd', 9, 5]), '->', 9);
console.log(bigNum(['asd', 'qwe', 5]), '->', 5);
console.log(bigNum(['asd', 5, 'qwe']), '->', 5);
console.log(bigNum([5, 'asd', 'qwe']), '->', 5);

// rekursija
console.log(bigNum([1, 2, [4, 7, 8], 3]), '->', 8);
console.log(bigNum([1, 2, [4, 7, [-4, -7, 16]], 3]), '->', 16);