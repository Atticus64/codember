const resp = await fetch('https://codember.dev/mecenas.json')
const mecenas = await resp.json()

const players = mecenas.map((mecena, idx) => {
  return { name: mecena, idx, is_alive: true }
})

const hungerGames = (players) => {
  const idxPlayers = [...players.keys()]

  while (players.length !== 1) {
    // si no es par automaticamente eliminado
    players.forEach((p, i) => {
      if (idxPlayers[i] % 2 !== 0) {
        players[i].is_alive = false
      }
    })

    // si el ultimo esta vivo y el primero tambien
    // el primero se va a un lugar mejor
    if (players.at(-1).is_alive && players.at(0).is_alive) {
      players[0].is_alive = false
    }

    // se quitan del array los jugadores eliminados
    players = players.filter((p) => p.is_alive)
  }

  return players
}

console.log(hungerGames(players))
