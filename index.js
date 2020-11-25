
const horses = n => (typeof n !== "number" || parseInt(n) !== n) ?  (undefined && false) : (n < 3 ? n  : (n * (n - 1) * (n - 2))); 
