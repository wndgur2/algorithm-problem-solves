const fs = require('fs')
const [capA, capB, resA, resB] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
// const [capA, capB, resA, resB] = fs.readFileSync('inputs').toString().trim().split(' ').map(Number)
let answer

// 1) res 둘 중 하나는 0 or FULL
const posSet = new Set()

posSet.add(0)
posSet.add(capA)
posSet.add(capB)
const big = capA>capB?capA:capB
const small = capA<capB?capA:capB

let b = big
let sm = small
while(b-=sm>0)
  posSet.add(b)
posSet.add(small-(big%small))

if(!posSet.has(resA) || !posSet.has(resB)) answer=-1
else answer = bfs()
console.log(answer)

function bfs(){
  const visited = new Map()
  const q = [[0, 0, 0]]
  let head = 0
  while(head<q.length){
    const [a, b, c] = q[head++]
    if(a===resA && b===resB) return c

    const nexts = []

    nexts.push([capA,b])
    nexts.push([0,b])
    nexts.push([a,capB])
    nexts.push([a,0])

    if(a+b>capA) nexts.push([capA, b-(capA-a)])
    else nexts.push([a+b, 0])
    if(a+b>capB) nexts.push([a-(capB-b), capB])
    else nexts.push([0, a+b])

    for(let i=0; i<nexts.length; i++){
      const key = nexts[i].join('-')
      if(visited[key]) continue
      visited[key] = true
      q.push([...nexts[i], c+1])
    }
  }

  return -1
}
