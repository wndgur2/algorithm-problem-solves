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
  
  const idxs = Array(3).fill(0).map(v=>[])
  const sums = Array(n).fill(0)
  sums[0] = seq[0]  
  for(let i=0; i<n; i++){
    if(i>0)
      sums[i] = sums[i-1] + seq[i]
    if(s===0 && sums[i]===0){
      idxs[0].push(i)
      idxs[1].push(i)

      if(((sum-sums[i])!==s) || (i==n-1)) continue
      idxs[2].push(i)
    } else if(sums[i]%s==0 && Math.floor(sums[i]/s)>0){
      const mod = Math.floor(sums[i]/s)-1
      if((mod>2) || (mod===2 && (sum-sums[i])!==s)) continue
      idxs[mod].push(i)
    }
  }

  let ans = 0
  
  ans += count(0, -1)

  function count(depth, prevIdx){
    const l = idxs[depth].length
    const nextIdxIdx = bs(idxs[depth], prevIdx)
    
    if(nextIdxIdx>l-1) return 0
    if(depth===2){
      const res = l - nextIdxIdx
      return res
    }

    let res = 0
    for(let i=nextIdxIdx; i<l; i++){
      res += count(depth+1, idxs[depth][i])
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