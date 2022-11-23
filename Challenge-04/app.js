const minRange = 11098
const maxRange = 98123

const main = () => {
  const numbers = []
  for (let i = minRange; i <= maxRange; i++) {
    numbers.push(i)
  }

  const answers = []

  for (const number of numbers) {
    if (isAscending(number) && haveTwoFive(number)) {
      answers.push(number)
    }
  }

  console.log(`Lenght ${answers.length}`)
  console.log(`password ${answers[55]}`)
}

// 12345
export const isAscending = (numero) => {
  const convertToNumber = (num) => Number(num)
  const arr = Array.from(String(numero)).map(convertToNumber)
  return arr.every((n, i) => {
    return i === 0 || n >= arr[i - 1]
  })
}

// haveFive(465) -> false
// haveFive(255) -> true
export const haveTwoFive = (num) => {
  const cantOfFive = `${num}`.split('5').length - 1

  return cantOfFive >= 2
}

main()
