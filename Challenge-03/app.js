const main = async () => {
  const resp = await fetch('https://codember.dev/colors.txt')
  let colors = await resp.text()

  colors = colors.replaceAll("'", '"')
  colors = JSON.parse(colors)

  filterColors(colors)
}

export const filterColors = (arrColors) => {
  console.log(arrColors)
  let maxZebraCount = 0
  let maxZebraColor = ''

  let lastColor = ''
  let nextColor = arrColors[0]
  let currentZebraCount = 1
  arrColors.forEach((color, idx) => {
    if (color !== nextColor || lastColor === color) {
      currentZebraCount = 1 // reset the counter
    }

    color === lastColor ? (currentZebraCount = 1) : currentZebraCount++

    nextColor = lastColor
    lastColor = color

    if (currentZebraCount > maxZebraCount) {
      maxZebraCount = currentZebraCount
      maxZebraColor = lastColor
    }
  })

  console.log({
    maxZebraColor,
    maxZebraCount
  })

  return {
    maxZebraColor,
    maxZebraCount
  }
}

main()
