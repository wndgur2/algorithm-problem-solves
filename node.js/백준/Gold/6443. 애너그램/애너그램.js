const fs = require('fs')
const lines = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const N = Number(lines[0])
const res = []
for(let i=0; i<N; i++){
  const word = lines[1+i]
  const visited = new Set()
  const leftCharCounts = new Map()
  for(let j=0; j<word.length; j++){
    const char = word[j]
    if(!leftCharCounts.has(char)) leftCharCounts.set(char, 0)
    leftCharCounts.set(char, leftCharCounts.get(char)+1)
  }

  dfs(Array(word.length).fill(''), 0, leftCharCounts, visited)

  function dfs(charArray, idx){
    let key = charArray.slice(0, idx).join('')
    if(visited.has(key)) return
    visited.add(key)
  
    if(idx==word.length) {res.push(charArray.join('')); return}
  
    for(let i=0; i<word.length; i++){
      const c = word[i]
      if(leftCharCounts.get(c)===0) continue
      leftCharCounts.set(c, leftCharCounts.get(c)-1)
      charArray[idx] = c
      dfs(charArray, idx+1)
      leftCharCounts.set(c, leftCharCounts.get(c)+1)
    }
  }
}
res.sort()
res.sort((a,b)=>a.length-b.length)

console.log(res.join('\n'))
