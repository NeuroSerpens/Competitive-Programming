const simple_assembler = arg => {
  let reg = {}
  for (let i = 0; i < arg.length; i += 1) {
    let ins = arg[i].split(' ')
    switch (ins[0]) {
      case 'mov':
        if (isNaN(ins[2])) reg[ins[1]] = reg[ins[2]]
        else reg[ins[1]] = Number(ins[2])
        break
      case 'inc':
        reg[ins[1]] += 1
        break
      case 'dec':
        reg[ins[1]] -= 1
        break
      case 'jnz':
        if (reg[ins[1]] !== 0) i += (Number(ins[2]) - 1)
    }
  }
  return reg
}
