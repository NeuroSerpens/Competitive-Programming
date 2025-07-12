const sudoku = arg => {
    let repeat = true
    while (repeat) {
        repeat = false
        for (let y = 0; y < 9; y += 1)
            for (let x = 0; x < 9; x += 1) {
                if (arg[y][x] === 0) {
                    let pssb = [1, 2, 3, 4, 5, 6, 7, 8, 9],
                        l1 = undefined,
                        l2 = undefined
                    for (let c = 0; c < 9; c += 1) {
                        let i = pssb.indexOf(arg[y][c])
                        if (i !== -1) pssb.splice(i, 1)
                    }
                    for (let c = 0; c < 9; c += 1) {
                        let i = pssb.indexOf(arg[c][x])
                        if (i !== -1) pssb.splice(i, 1)
                    }
                    if (y <= 2) l1 = [0, 2]
                    else if (y <= 5) l1 = [3, 5]
                    else l1 = [6, 8]
                    if (x <= 2) l2 = [0, 2]
                    else if (x <= 5) l2 = [3, 5]
                    else l2 = [6, 8]
                    for (let c1 = l1[0]; c1 <= l1[1]; c1 += 1)
                        for (let c2 = l2[0]; c2 <= l2[1]; c2 += 1) {
                            let i = pssb.indexOf(arg[c1][c2])
                            if (i !== -1) pssb.splice(i, 1)
                        }
                    if (pssb.length !== 1) repeat = true
                    else arg[y][x] = pssb[0]
                }
            }
    }
    return arg
}
