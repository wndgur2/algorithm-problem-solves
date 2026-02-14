const fs = require('fs')
// const [capA, capB, resA, resB] = fs.readFileSync('inputs').toString().trim().split(' ').map(Number)
const [capA, capB, resA, resB] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const answer = bfs()
console.log(answer)

function bfs(){
  const visited = new Map()
  const q = [[0, 0, 0]]
  let head = 0
  while(head<q.length){
    const [a, b, c] = q[head++]
    if(a===resA && b===resB) return c

    const nexts = [[capA,b, c+1], [0,b, c+1], [a,capB, c+1], [a,0, c+1], a+b>capA? [capA, b-(capA-a), c+1]:[a+b, 0, c+1], a+b>capB? [a-(capB-b), capB, c+1]:[0, a+b, c+1]]

    for(let i=0; i<nexts.length; i++){
      const [na, nb] = nexts[i]
      if(visited.has(na)) {
        if(visited.get(na).has(nb))
          continue
      } else{
        visited.set(na, new Set())
      }
      visited.get(na).add(nb)
      q.push(nexts[i])
    }
  }

  return -1
}
