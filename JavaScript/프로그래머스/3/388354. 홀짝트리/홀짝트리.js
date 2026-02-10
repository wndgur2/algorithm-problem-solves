function solution(nodes, edges) {
    var answer = [0, 0];
    
    const visited = new Map()
    nodes.forEach(n=>{
        visited.set(n, false)
    })
    
    const edgeMap = new Map()
    edges.forEach(([s, e])=>{
        if(edgeMap.has(s)){
            edgeMap.get(s).push(e)
        } else {
            edgeMap.set(s, [e])
        }
        if(edgeMap.has(e)){
            edgeMap.get(e).push(s)
        } else {
            edgeMap.set(e, [s])
        }
    })
    
    // 트리 구분하기
    const trees = []
    nodes.forEach(search)
    
    function search(node){
        if(visited.get(node)) return
        const newTree = []
        
        // dfs
        const q = [node]
        while(q.length>0){
            const node = q.pop()
            if(visited.get(node)) continue
            visited.set(node, true)
            newTree.push(node)
            const nearNodes = edgeMap.get(node)
            if(!nearNodes) continue
            nearNodes.forEach(n=>q.push(n))
        }
        
        trees.push(newTree)
    }
    
    // console.log(trees)
    
    // 엣지 개수 세기
    const edgeCount = new Map()
    nodes.forEach(n=>edgeCount.set(n, 0))
    
    edges.forEach(([s, e])=>{
        let count = edgeCount.get(s)
        edgeCount.set(s, count+1)
        count = edgeCount.get(e)
        edgeCount.set(e, count+1)
    })
    
    trees.forEach(tree=>{
        let canHJ = true
        let HJRoot = false
        
        let canRHJ = true
        let RHJRoot = false
        tree.forEach(node=>{
            if(node%2==0){
                if(edgeCount.get(node)%2==0){
                    // 짝수인데 자식도 짝수개
                    
                    // 루트가 되어야 짝수노드임
                    if(HJRoot){
                        canHJ=false
                    } else{
                        HJRoot = true
                    }
                    
                    // 루트가 안되어야 역짝수노드임
                    
                } else{
                    // 짝수인데 자식은 홀수개
                    
                    // 루트가 안되어야 짝수노드임
                    
                    // 루트가 되어야 역짝수노드임
                    if(RHJRoot){
                        canRHJ=false
                    } else{
                        RHJRoot = true
                    }
                }
            } else{
                if(edgeCount.get(node)%2==0){
                    // 홀수인데 자식은 짝수개
                    
                    // 루트가 안되어야 짝수노드임
                    
                    // 루트가 되어야 역짝수노드임
                    if(RHJRoot){
                        canRHJ=false
                    } else{
                        RHJRoot = true
                    }
                    
                } else{
                    // 홀수인데 자식도 홀수개
                    
                    // 루트가 되어야 짝수노드임
                    if(HJRoot){
                        canHJ=false
                    } else{
                        HJRoot = true
                    }
                    
                    // 루트가 되어야 역짝수노드임
                }
            }
        })
        if(canHJ && HJRoot) answer[0]++
        if(canRHJ && RHJRoot) answer[1]++
    })
    
    return answer;
}