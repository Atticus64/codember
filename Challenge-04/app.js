const minRange = 11098
const maxRange = 98123

const main = () => {
  let numbers = []
  for (let i = minRange; i <= maxRange; i++) {
    numbers.push(i)
  }

  numbers = numbers.filter((i) => i.toString().includes('5'))
  const answers = []

  for (const number of numbers) {
    let count = 0
    const i = 0

    if (number.toString()[i] === '5') count++
    if (number.toString()[i + 1] === '5') count++
    if (number.toString()[i + 2] === '5') count++
    if (number.toString()[i + 3] === '5') count++
    if (number.toString()[i + 4] === '5') count++

    if (count >= 2) {
      if (isAscending(number)) {
        answers.push(number)
      }
    }
  }
  console.log(`Lenght ${answers.length}`)
  console.log(`password ${answers[55]}`)
}

// 12345
const isAscending = (numero) => {
  const convertToNumber = (num) => Number(num)
  const arr = Array.from(String(numero)).map(convertToNumber)
  return arr.every((n, i) => {
    return i === 0 || n >= arr[i - 1]
  })
}

main()
