export default function exercise1c() {
    const PHRASE = "une phrase sans majuscule";
    let words = PHRASE.split(' ');
    for(let word of words) {
        let characters = word.split('');
        let firstLetter = characters[0];
        characters[0] = firstLetter.toUpperCase();
        words[words.indexOf(word)] = characters.join('');
    }

    return "Starting with the string:<br />" +
        PHRASE +
        "<br />And putting the first letter in uppercase:<br /><strong>" +
        words.join(' ') +
        "</strong>";
}
