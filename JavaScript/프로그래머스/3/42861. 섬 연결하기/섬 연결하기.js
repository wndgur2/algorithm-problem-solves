const parent = []

function init(){
    for(let i=0; i<100; i++)
        parent.push(i)
}

function find(a){
    if(a == parent[a]) return a
    return parent[a] = find(parent[a])
}

function union(a, b){
    let rootA = find(a)
    let rootB = find(b)
    if(rootA == rootB)
        return false
    parent[rootA] = b
    return true
}

function solution(n, costs) {
    var answer = 0;
    init(n, costs)
    costs.sort((a,b)=>
        a[2] - b[2]
    )
    costs.map(v=>{
        const a = v[0]
        const b = v[1]
        const cost = v[2]
        if(union(a,b)) answer += cost
    })
    return answer;
}