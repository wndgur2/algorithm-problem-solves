function solution(a, edges){
    // O / X
    let sum = a.reduce((sum, t)=>sum+t, 0)
    if(sum!=0) return -1
    
    // 횟수
    // make 0 from leaves
    
    let n = a.length
    let edgeArray = Array(n).fill(0).map(v=>[])
    
    edges.forEach(([u,v])=>{
        edgeArray[u].push(v)
        edgeArray[v].push(u)
    })
    
    // root is always 0
    // store parents
    
    let nodes = [[0, 0]]
    let stack = []
    
    // BFS
    while(nodes.length>0){
        let [node, parent] = nodes.pop()
        stack.push([node, parent])
        
        edgeArray[node].forEach(child=>{
            if(child==parent) return
            nodes.push([child, node])
        })
    }
    
    let answer = 0n
    
    while(stack.length>0){
        let [node, parent] = stack.pop()
        a[parent] += a[node]
        answer += BigInt(Math.abs(a[node]))
    }
    
    return answer
}
