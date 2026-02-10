let fs = require('fs')
// let lines = fs.readFileSync('inputs').toString().trim().split('\n')
let lines = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [L, S] = lines.shift().split(' ').map(Number)

const visited = Array(100).fill(-1)
const board = Array(100).fill(0)

lines = lines.map((v) => v.split(' ').map(Number))

for (let i = 0; i < lines.length; i++) {
  const [from, to] = lines[i]
  board[from - 1] = to - 1
}

visited[0] = 0
const q = [0]
let head=0

while (head<q.length) {
  const kan = q[head++]
  for (let dice = 6; dice >= 1; dice--) {
    const nk = board[kan + dice] ? board[kan + dice] : kan + dice
    if (nk<100 && visited[nk]===-1) {
        visited[nk] = visited[kan]+1
        q.push(nk)
    }
  }
}

console.log(visited[99])
