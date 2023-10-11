export default function exercise1b() {
    const START = "une chaine avec des lettres dans un certain ordre pour donner du sens";
    let result = START.replace(/\s+/g, '').split('').sort();

    return "Starting with the string:<br />" +
        START +
        "<br />And sorted alphabetically:<br /><strong>" +
        result +
        "</strong>";
}
