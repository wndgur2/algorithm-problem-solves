const fs = require('fs')
const lines = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const lines = fs.readFileSync('inputs').toString().trim().split('\n')
const [M, bpm] = lines[0].split(' ').map(Number)

const changes = lines.splice(1).map(v=>v.split(' ').map(Number))
const changesMap = new Map()
changes.forEach(([m, bpm])=>{
  changesMap.set(m, bpm)
})

let b = bpm
let res = 0

for(let m=1; m<=M; m++){
  if(changesMap.has(m)) b = changesMap.get(m)
  const beat_per_second = b/60
  const second_per_beat = 1/beat_per_second
  res += second_per_beat*4
}

console.log(res.toFixed(12))