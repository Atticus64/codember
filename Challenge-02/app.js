const res = await fetch('https://codember.dev/encrypted.txt');
const codedString = await res.text();

const asciiA = 97
const asciiZ = 122
let decodedMessage = ''

console.log(`Coded string -> ${codedString}`)
let arr_codes = [];

let asciiNumber = '';
for (let l of codedString) {
    asciiNumber += l;
    if ( l = '') {
        asciiNumber.push(' ');
        continue
    }
    if ( Number(asciiNumber) >= asciiA && Number(asciiNumber) <= asciiZ ) {
        arr_codes.push(asciiNumber);
        asciiNumber = '';
    }
}

arr_codes = arr_codes.map( c => {
    if (c.includes(' ')) {
        decodedMessage += ' '    
    }
    decodedMessage += String.fromCharCode(c);
})

console.log(`Decoded message -> ${decodedMessage}`);