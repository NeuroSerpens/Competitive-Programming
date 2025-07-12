const solution = (s, a) => {
let s1 = s.split('\n');
for (let i = 0; i < s1.length; i += 1) {
    for (let j = 0; j < a.length; j += 1) {
        if (s1[i].indexOf(a[j]) !== -1)
            s1[i] = s1[i].substring(0, s1[i].indexOf(a[j])).trim();
    }
}
return s1.join('\n');
}
