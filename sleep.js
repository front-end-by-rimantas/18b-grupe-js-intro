/**
 * miego trukme: 7
 * ciklo trukme: 1.5
 * 
 * kiek miego ciklo turesim?
 */
function sleep(duration, cicle) {
    return Math.floor(duration / cicle);
}

console.log(sleep(7, 1.5));     // 4