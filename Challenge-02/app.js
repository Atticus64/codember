const res = await fetch('https://codember.dev/encrypted.txt')
const codedString = await res.text()
export const asciiZ = 122
export const asciiA = 50

const main = () => {
  console.log(`Coded string -> ${codedString}`)
  const asciiCodes = buildArrCodes(codedString)
  console.log(asciiCodes)
  const message = decodeMessage(asciiCodes)
  console.log(`Decoded message -> ${message}`)
}

export const buildArrCodes = (codedMessage) => {
  const arrCodes = []
  let asciiNumber = ''
  for (const l of codedMessage) {
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

  return arrCodes
}

export const decodeMessage = (arrCodes) => {
  let decodedMessage = ''
  arrCodes = arrCodes.map((c) => {
    if (c.includes(' ')) {
      decodedMessage += ' '
    }
    return (decodedMessage += String.fromCharCode(c))
  })

  return decodedMessage
}

main()
