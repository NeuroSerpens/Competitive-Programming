const validateBattlefield = field => {
  let occ = [],
      ships = [4, 3, 2, 1]
  for (let a = 0 ; a < 10 ; a += 1)
    for (let b = 0; b < 10 ; b += 1)
      if (field[a][b] === 1) occ.push(`${a}${b}`)
  if (occ.length !== 20) return false
  for (let a = 0 ; a < occ.length ; a += 1) {
    let [y, x] = [Number(occ[a][0]), Number(occ[a][1])]
    if (occ.includes(`${y + 1}${x - 1}`) || occ.includes(`${y + 1}${x + 1}`))
      return false
    if (
      (occ.includes(`${y - 1}${x}`) || occ.includes(`${y + 1}${x}`)) && 
      (occ.includes(`${y}${x - 1}`) || occ.includes(`${y}${x + 1}`))
    ) return false
  }
  while (occ.length > 0) {
    let [y, x] = [Number(occ[0][0]), Number(occ[0][1])],
        step = 0
    occ.splice(occ.indexOf(`${y}${x}`), 1)
    for (a = 1; occ.includes(`${y + a}${x}`); a += 1) {
      occ.splice(occ.indexOf(`${y + a}${x}`), 1)
      step += 1
    }
    for (a = 1; occ.includes(`${y}${x + a}`); a += 1) {
      occ.splice(occ.indexOf(`${y}${x + a}`), 1)
      step += 1
    }
    ships[step] -= 1
  }
  return ships.every(e => e === 0)
}
