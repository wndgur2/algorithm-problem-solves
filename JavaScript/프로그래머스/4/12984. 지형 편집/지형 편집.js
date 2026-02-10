// log(10억)x300x300

const MAX_HEIGHT = 1000000000

function solution(land, P, Q) {
    const costs = new Map()
    const N = land.length
    
    let l=0, r=MAX_HEIGHT, mid, cost
    while(l+1 < r){
        mid = Number.parseInt((l + r)/2)
        cost = getCost(mid)
        if(cost > getCost(mid+1)) l = mid
        else if(cost > getCost(mid-1)) r = mid
        else break
    }
    while(getCost(mid)>getCost(mid+1))mid++
    while(getCost(mid)>getCost(mid-1))mid--
    
    return getCost(mid)
    
    function getCost(height){
        if(costs.has(height)){
            return costs.get(height)
        }
        
        let cost = 0
        for(let y=0; y<N; y++){
            for(let x=0; x<N; x++){
                if(land[y][x]>height){
                    cost += (land[y][x]-height) * Q
                } else{
                    cost += (height-land[y][x]) * P
                }
            }
        }
        
        costs.set(height, cost)
            
        return cost
    }
}