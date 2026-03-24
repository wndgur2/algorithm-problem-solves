const MAX_DISTANCE = 10_000_000_000

let fs = require('fs');
let lines = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let lines = fs.readFileSync('inputs').toString().trim().split('\n');

const N = Number(lines.shift())


const dp = Array(N+1).fill(0).map(v=>Array(5).fill(MAX_DISTANCE))
const ds = [[0, 0], [0, 1], [0, -1], [1, 0], [-1, 0]]

let [y, x] = lines.shift().split(' ').map(Number)
dp[0] = [0,1,1,1,1]

for(let i=1; i<=N; i++){
  const [ny, nx] = lines[i-1].split(' ').map(Number)
  for(let di=0; di<5; di++){
    const [cy, cx] = [y+ds[di][0], x+ds[di][1]]
    const oc = dp[i-1][di]
    for(let dj=0; dj<5; dj++){
      const [ty, tx] = [ny+ds[dj][0], nx+ds[dj][1]]
      const nc = Math.abs(cy-ty) + Math.abs(cx-tx)

      if(oc+nc < dp[i][dj]){
        dp[i][dj] = oc+nc
        // console.log('-----------------------')
        // console.log(cy, cx)
        // console.log('to')
        // console.log(ty, tx)
        // console.log('cost---')
        // console.log(oc, nc)
        // console.log('-----------------------')
      }
    }
  }
  [y, x] = [ny, nx]
  // console.log(dp[i])
}

console.log(Math.min(...dp[N]))
