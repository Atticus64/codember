const res = await fetch('https://codember.dev/encrypted.txt')
const codedString = await res.text()

const asciiA = 97
const asciiZ = 122
let decodedMessage = ''

console.log(`Coded string -> ${codedString}`)
let arrCodes = []

let asciiNumber = ''
for (const l of codedString) {
  asciiNumber += l
  if (l === '') {
    asciiNumber.push(' ')
    continue
  }
  if (Number(asciiNumber) >= asciiA && Number(asciiNumber) <= asciiZ) {
    arrCodes.push(asciiNumber)
    asciiNumber = ''
  }
}

arrCodes = arrCodes.map((c) => {
  if (c.includes(' ')) {
    decodedMessage += ' '
  }
  return (decodedMessage += String.fromCharCode(c))
})

console.log(`Decoded message -> ${decodedMessage}`)
