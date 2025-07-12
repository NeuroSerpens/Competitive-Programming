const topThreeWords = arg => {
  let list = arg.toLowerCase().split(/[\s\\/.,:#]+/),
      count = {},
      resp = undefined
  for (let a = 0; a < list.length; a += 1) {
    if (list[a] === '' || list[a] === "'") continue
    else {
      if (count.hasOwnProperty(list[a])) count[list[a]] += 1
      else count[list[a]] = 1
    }
  }
  resp = Object.entries(count)
  return resp.sort((a, b) => {
    if (b[1] > a[1]) return 1
    else return -1
  }).slice(0, 3).map(a => a[0])
}
