/**
 * Kiek pokstu per duota pasirodymui laika papasakos, net kai jie kartojasi
 */
function joke(jokesList, brake, showtime) {
    let jokesCount = 0;
    let jokeIndex = 0;
    let time = 0;

    while (time < showtime) {
        const jokeDuration = jokesList[jokeIndex];

        time += jokeDuration;
        console.log(jokeDuration, time);

        time += brake;
        jokesCount++;
        jokeIndex++;

        if (jokeIndex === jokesList.length) {
            jokeIndex = 0;
        }
    }

    return jokesCount;
}

const jonasJokes = [11, 3, 2, 4, 2, 5];      // kiek minuciu trunka kiekvienas pokstas
const timeout = 1;                          // laikas tarp pokstu
const showLength = 60;                      // viso pasirodymo trukme

// console.log(joke(jonasJokes, timeout, showLength));

const anosJokes = [7, 5, 8, 4, 9];
const anosShow = 45;

console.log(joke(anosJokes, timeout, anosShow));