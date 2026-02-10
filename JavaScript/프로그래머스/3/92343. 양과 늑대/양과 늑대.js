function solution(info, edges) {
    var answer = 0;
    
    let size = info.length
    let stacks = Array(size).fill(0)
    
    let edges_array = Array(size).fill(0).map(v=>[])
    edges.forEach(([parent, child])=>{
        edges_array[parent].push(child)
    })
    
    // 완탐
    
    simulate(0, 0, 0, [])
    
    return answer;
    
    function simulate(node, sheeps, wolves, adjacents){
        if(info[node] == 0) sheeps += 1
        else wolves += 1
        
        if(sheeps <= wolves) return
        
        edges_array[node].forEach(child=>adjacents.push(child))
        
        if(sheeps > answer) answer = sheeps
        
        adjacents.forEach(new_node=>{
            simulate(new_node, sheeps, wolves, [...adjacents.filter(adj=>adj!=new_node)])
        })
        
    }
}