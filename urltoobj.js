const convertQueryToMap = qs => {
let r = {};
qs.split('&').map( x => {
    let [ks, v] = x.split('='), o = r;
    ks.split('.').map( (k, i, ks) => {
        if (i === ks.length - 1) {
            if (String(v).indexOf('%') !== -1) v = decodeURIComponent(v);
            o[k] = v;
        }
        else if (!o[k]) o[k] = {};
        o = o[k];
    });
});
return r;
}
