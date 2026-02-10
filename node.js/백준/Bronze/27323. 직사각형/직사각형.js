let fs = require('fs')
let [A,B] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
console.log(A*B)