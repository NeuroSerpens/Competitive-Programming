const solution = l1 => {
let l2 = [], r;
for (let i = 0; i < l1.length; i += 1) {
    if (l1[i + 2] - l1[i] === 2) {
        r = l1[i];
        i += 2;
        while (l1[i + 1] - l1[i] === 1) i += 1;
        l2.push(`${r}-${l1[i]}`);
    } else l2.push(l1[i]);
}
return l2.join(',');
}
