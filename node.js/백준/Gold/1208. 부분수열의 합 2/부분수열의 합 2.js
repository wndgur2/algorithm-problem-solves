const fs = require('fs')
const lines = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, S] = lines[0].split(' ').map(Number)
const nums = lines[1].split(' ').map(Number)

const mid = Math.floor(nums.length/2)
const combi = {0:1}

let ans = S===0?-1:0

dfs(0, 0, mid)
dfs2(mid, 0, N)

ans += combi[S]?combi[S]:0
console.log(ans)

function dfs(idx, prevSum, maxIdx){
  if(idx===maxIdx) return
  const newSum = prevSum + nums[idx]
  combi[newSum] = combi[newSum]? combi[newSum]+1: 1

  dfs(idx+1, newSum, maxIdx)
  dfs(idx+1, prevSum, maxIdx)
}

function dfs2(idx, prevSum, maxIdx){
  if(idx===maxIdx) return
  const newSum = prevSum + nums[idx]
  if(combi[S-newSum]){
    ans += combi[S-newSum]
  }

  dfs2(idx+1, newSum, maxIdx)
  dfs2(idx+1, prevSum, maxIdx)
}