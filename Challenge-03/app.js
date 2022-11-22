const main = async () => {
  const resp = await fetch('https://codember.dev/colors.txt')
  let colors = await resp.text()

  colors = colors.replaceAll("'", '"')
  colors = JSON.parse(colors)

  filterColors(colors)
}

const filterColors = (arrColors) => {
  // const successions = []
  // const currentSuccession = []
  // const numberSuccession = 0

  let maxZebraCount = 0
  let maxZebraColor = ''

  let lastColor = ''
  let nextColor = arrColors[0]
  let currentZebraCount = 1
  arrColors.forEach((color, idx) => {
    // currentSuccession.push(color)
    // numberSuccession += 1
    // const arr = {
    //   color,
    //   secondColor: arrColors[idx + 1],
    //   thirdColor: arrColors[idx + 2]
    // }

    // // ['blue', 'red', 'blue']
    // if (color === arr.thirdColor && color !== arr.secondColor) {
    //   numberSuccession += 1
    //   console.log(currentSuccession, numberSuccession)
    //   color = arr.secondColor
    // }

    // if (color === arr.secondColor) {
    //   numberSuccession -= 1
    //   successions.push({ currentSuccession, numberSuccession })
    //   currentSuccession = []
    //   numberSuccession = 0
    // }

    if (color !== nextColor || lastColor === color) {
      currentZebraCount = 1 // reseto el contador
    }
    currentZebraCount++
    nextColor = lastColor
    lastColor = color
    if (currentZebraCount > maxZebraCount) {
      maxZebraCount = currentZebraCount
      maxZebraColor = lastColor
    }

    return {
      maxZebraColor,
      maxZebraCount
    }
  })

  console.log({
    maxZebraColor,
    maxZebraCount
  })
}

// const validSuccesion = (succession) => {
//   if (succession.length === 1) return 'uno!'

//   const lenghtZebra = 10
//   const color = 'blue'

//   return [lenghtZebra, color]
// }

main()
