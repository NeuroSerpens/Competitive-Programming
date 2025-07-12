const determinant = arg => {
  let z = 0
  if (arg.length === 1) return arg[0][0]
  if (arg.length === 2) return arg[0][0] * arg[1][1] - arg[0][1] * arg[1][0]
  for (let a = 0; a < arg[0].length; a += 1) {
    let neg = (a % 2 === 0) ? 1 : -1,
        cf = []
    for (let b = 1; b < arg.length; b += 1) {
      let arr = []
      for (let c = 0; c < arg[b].length; c += 1) {
        if (c !== a) arr.push(arg[b][c])
      }
      cf.push(arr)
    }
    z += neg * arg[0][a] * determinant(cf)
  }
  return z
}
