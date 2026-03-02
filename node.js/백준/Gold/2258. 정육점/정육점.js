const fs = require('fs')
// const lines = fs.readFileSync('inputs').toString().trim().split('\n')
const lines = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = lines.shift().split(' ').map(Number)
const ms = lines.map(v=>v.split(' ').map(Number))

ms.sort((a,b)=>a[1]===b[1]?b[0]-a[0]: a[1]-b[1])

let wSum = 0
let sameCostCount=1
let cost = 0
let minCost = 2200000000
let flag = false
for(let i=0; i<N; i++){
  const [w, c] = ms[i]
  wSum += w

  if(c>cost){
    // 가격이 증가하는 일반적인 상황
    cost = c
    sameCostCount=1

    if(wSum >= M){
      if(cost<minCost){
        flag = true
        minCost = cost
      }
    }
  } else{
    // 같은 가격의 고기 덩어리
    sameCostCount++
    if(wSum >= M){
      const tc = cost * sameCostCount
      if(tc<minCost){
        flag = true
        minCost = tc
      }
    }  
  }
}

console.log(flag?minCost:-1)