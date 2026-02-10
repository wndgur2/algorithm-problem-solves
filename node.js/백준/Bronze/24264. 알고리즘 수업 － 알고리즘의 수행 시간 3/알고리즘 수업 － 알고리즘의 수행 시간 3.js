const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(input[0]*input[0])
console.log(2)