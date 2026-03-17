let fs = require('fs')
let lines = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const G = lines.shift()
const P = lines.shift()
const planes = lines

let gates = Array(G+1).fill(false)
const dp = Array(G+1).fill(false) // dp[i] = i보다 작거나 같으면서 도킹되지 않은 최대 게이트 번호
const parents = Array(G+1).fill(0)

for(let i=0; i<G+1; i++){
  dp[i] = i
  parents[i] = i
}

let res = 0
for(let i=0; i<P; i++){
  let gp = planes[i]
  if(dp[gp]==0) break
  let root = findParent(gp)
  if(root==0) break

  gates[root] = true
  res++
  parents[root] = findParent(root-1)
}
console.log(res)

function findParent(g){
  if(parents[g]==g) return g
  parents[g] = findParent(parents[g])
  return parents[g]
}