/*
    30만 -> 최대 NlogN
    모든 팀이 참가하면서, 최소가 되는 매출 손실액
    DP
*/

const INFINITE = 2147483647

class Node{
    static nodes = new Map()
    
    constructor(value){
        this.value = value
        this.children = []
    }
    
    addChild(child){
        this.children.push(child)
    }
}

function solution(sales, links) {
    const N = sales.length
    var answer = 0;
    
    const nodes = Node.nodes
    const teams = new Map()
    
    sales.forEach((v, i)=>{
        nodes.set(i+1, new Node(v));
    })
    
    links.forEach(([p,c])=>{
        nodes.get(p).addChild(nodes.get(c))
        teams.set(p, nodes.get(p))
    })
    
    answer = Math.min(...dfs(nodes.get(1)))
    
    return answer;
    
    function dfs(node){
        // node의 모든 자식 팀을 워크숍에 보내는 데에 드는 최소비용
        if(node.children.length==0){
            return [0, node.value]
        }
        
        let cost = 0
        let minDif = Infinity
        let isAllNotGo = true
        
        node.children.forEach((child)=>{
            const costs = dfs(child)
            cost += Math.min(...costs)
            if(costs[1]>costs[0]){
                const dif = costs[1] - costs[0]
                if(minDif > dif) minDif = dif
            } else{
                isAllNotGo = false
            }
        })
        
        return [cost + ((isAllNotGo)?minDif:0), cost + node.value]
        
    }
}