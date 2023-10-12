export default function exercise1a() {
    let rangeList = [];
    let iterationCounter = 0;

    for(let i = 0; i < 100; i++) {
        rangeList.push(i);
    }

    while(rangeList.length > 0 || iterationCounter > 1_000_000) {
        rangeList.splice(getRandomInt(), 1)

        iterationCounter++
    }

    if (iterationCounter == 1_000_000) {
        return "Error, the loop overflowed."
    } else {
        return "<strong>" +
        iterationCounter +
        "</strong> was the number of iteration necessary to draw all the number in the range of [0;100["
    }

    function getRandomInt(max = 99) {
        return Math.floor(Math.random() * max);
    }
}
