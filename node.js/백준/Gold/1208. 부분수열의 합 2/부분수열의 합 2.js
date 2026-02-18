const fs = require('fs')
// const lines = fs.readFileSync('inputs').toString().trim().split('\n')
const lines = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, S] = lines[0].split(' ').map(Number)
const nums = lines[1].split(' ').map(Number)
const combi1 = {0:1}
const combi2 = {0:1}


for(let i=0; i<Number.parseInt(N/2); i++){
  const temp = {}
  for (const key in combi1){
    const nKey = Number(key)+nums[i]
    temp[nKey] = temp[nKey]? temp[nKey]+combi1[key]:combi1[key] 
  }
  for(const key in temp){
    combi1[key] = combi1[key]? combi1[key]+temp[key]:temp[key]
  }
}

for(let i=0; i<Math.ceil(N/2); i++){
  const idx = Number.parseInt(N/2) + i
  const temp = {}
  for (const key in combi2){
    const nKey = Number(key)+nums[idx]
    temp[nKey] = temp[nKey]? temp[nKey]+combi2[key]:combi2[key] 
  }
  for(const key in temp){
    combi2[key] = combi2[key]? combi2[key]+temp[key]:temp[key]
  }
}

let ans = 0

for(const key in combi1){
  const key2 = S-Number(key)
  if(combi2[key2]){
    ans += combi2[key2] * combi1[key]
    if(key==0 && key2==0) ans--
  }
}

console.log(ans)