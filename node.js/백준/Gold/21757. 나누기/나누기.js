const fs = require('fs')

function solve(){
  const [[n], seq] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>v.split(' ').map(Number))
  // const [[n], seq] = fs.readFileSync('inputs').toString().trim().split('\n').map(v=>v.split(' ').map(Number))
  
  const sum = seq.reduce((p,c)=>p+c, 0)
  const s = Number(sum/4)
  if(s%1!=0){
    console.log(0)
    return
  }
  
  const idxs = Array(4).fill(0).map(v=>[])
  const sums = Array(n).fill(0)
  sums[0] = seq[0]
  for(let i=0; i<n; i++){
    if(i>0)
      sums[i] = sums[i-1] + seq[i]
    if(s===0 && sums[i]===0){
      idxs[0].push(i)
      idxs[1].push(i)
      idxs[2].push(i)
      idxs[3].push(i)
    } else if(sums[i]%s==0){
      idxs[Math.floor(sums[i]/s)-1].push(i)
    }
  }

  let ans = 0
  
  for(let i=0; i<idxs[0].length; i++){
    ans += count(1, idxs[0][i])
  }

  function count(depth, prevIdx){
    if(depth===4) return 1
    
    let res = 0
    const startIdx = bs(idxs[depth], prevIdx)
    for(let i=startIdx; i<idxs[depth].length; i++){
      res += count(depth+1, i)
    }

    return res
  }

  console.log(ans)
}

function bs(arr, v){
  // arr에서 v 초과 최소 원소의 idx 리턴 (없다면 -1)
  let l=0, r=arr.length-1, mid;
  while(l+1<r){
    mid=Math.floor((l+r)/2)
    const midV = arr[mid]
    if(midV<v) l=mid
    else r=mid
  }
  while(arr[l]<=v) l++
  while(arr[l]>v) l--
  return l+1
}

solve()