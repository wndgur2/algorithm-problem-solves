let fs = require('fs')
let N = Number(fs.readFileSync('/dev/stdin').toString().trim())
console.log(4*N)