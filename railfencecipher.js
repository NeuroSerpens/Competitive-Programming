const encodeRailFenceCipher = (str, nrl) => {
 let sarr = Array(nrl).fill('')
 if (typeof(str) !== 'string' || str.length === 0) return ''
 if (nrl < 2 || nrl === undefined) return str
 for (let a = 0, c = 0, t = true; a < str.length; a += 1) {
  switch (t) {
   case true:
    sarr[c] += str[a]
    c += 1
    if (c === nrl) {
     t = false
     c -= 2
    }
    break
   case false:
    sarr[c] += str[a]
    c -= 1
    if (c === -1) {
     t = true
     c += 2
    }
    break
  }
 }
 return sarr.join('')
}

const decodeRailFenceCipher = (str, nrl) => {
 let narr = Array(nrl).fill(0),
     rails = Array(nrl).fill(''),
     rhelper = Array(nrl).fill(0),
     strcp = str,
     rtrn = ''
 if (typeof(str) !== 'string' || str.length === 0) return ''
 if (nrl < 2 || nrl === undefined) return str
 for (let a = 0, c = 0, t = true; a < str.length; a += 1) {
  switch (t) {
   case true:
    narr[c] += 1
    c += 1
    if (c === nrl) {
     t = false
     c -= 2
    }
    break
   case false:
    narr[c] += 1
    c -= 1
    if (c === -1) {
     t = true
     c += 2
    }
    break
  }
 }
 for (let a = 0; a < nrl; a += 1) {
  rails[a] = strcp.slice(0, narr[a])
  strcp = strcp.slice(narr[a])
 }
 for (let a = 0, c = 0, t = true; a < str.length; a += 1) {
  switch (t) {
   case true:
    rtrn += rails[c][rhelper[c]]
    rhelper[c] += 1
    c += 1
    if (c === nrl) {
     t = false
     c -= 2
    }
    break
   case false:
    rtrn += rails[c][rhelper[c]]
    rhelper[c] += 1
    c -= 1
    if (c === -1) {
     t = true
     c += 2
    }
    break
  }
 }
 return rtrn
}
