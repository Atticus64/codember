const main = async () => {
  const resp = await fetch('https://codember.dev/colors.txt')
  let colors = await resp.text()

  colors = colors.replaceAll("'", '"')
  colors = JSON.parse(colors)
  // const exampleColors = [
  //   'red',
  //   'blue',
  //   'green',
  //   'gray',
  //   'blue',
  //   'red',
  //   'blue',
  //   'blue',
  //   'red',
  //   'red',
  //   'green',
  //   'gray',
  //   'green',
  //   'red',
  //   'green',
  //   'red',
  //   'green',
  //   'red',
  //   'green',
  //   'red',
  //   'green',
  //   'red',
  //   'green',
  //   'red',
  //   'green',
  //   'blue',
  //   'red',
  //   'blue',
  //   'red',
  //   'blue',
  //   'red',
  //   'blue',
  //   'red',
  //   'blue',
  //   'red',
  //   'blue',
  //   'red',
  //   'blue',
  //   'red',
  //   'gray'
  // ]
  filterColors(colors)
}

const filterColors = (arrColors) => {
  const successions = []
  let currentSuccession = []
  let numberSuccession = 0
  arrColors.forEach((color, idx) => {
    currentSuccession.push(color)
    numberSuccession += 1
    const arr = {
      color,
      secondColor: arrColors[idx + 1],
      thirdColor: arrColors[idx + 2]
    }

    // ['blue', 'red', 'blue']
    if (color === arr.thirdColor && color !== arr.secondColor) {
      numberSuccession += 1
      console.log(currentSuccession, numberSuccession)
      color = arr.secondColor
    }

    if (color === arr.secondColor) {
      numberSuccession -= 1
      successions.push({ currentSuccession, numberSuccession })
      currentSuccession = []
      numberSuccession = 0
    }
  })
}

// const validSuccesion = (succession) => {
//   if (succession.length === 1) return 'uno!'

//   const lenghtZebra = 10
//   const color = 'blue'

//   return [lenghtZebra, color]
// }

main()
