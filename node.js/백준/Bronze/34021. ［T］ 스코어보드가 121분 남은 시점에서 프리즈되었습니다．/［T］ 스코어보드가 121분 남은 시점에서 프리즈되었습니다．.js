const fs = require('fs')
const lines = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const lines = fs.readFileSync('inputs').toString().trim().split('\n')
const T = Number(lines[0])
let t = 0
while(t++<T){
  const [N, M, L] = lines[t*2-1].split(' ').map(Number)
  const finishTimes = lines[t*2].split(' ').map(Number).filter(v=>v>=0)
  const res = M-Math.min(M-L, ...finishTimes)
  console.log(`The scoreboard has been frozen with ${res} minute${res===1?'':'s'} remaining.`)
}