const MAX_WAIT = 987654321
let min_wait = MAX_WAIT

function solution(k, n, reqs) {
    // const a = [1,2,3]
    // a.unshift()
    // a.shift()
    // console.log(a)
    
    combination(k, n-k, reqs, 0, Array(k).fill(1))
    
    return min_wait;
}

function combination(k, n, reqs, depth, amounts){
    // k개의 유형에 대한 멘토 수 조합 찾기(각 최소 1명)
    if(depth == k){
        if(n>0) return
        simulate(k, n, reqs, amounts)
        return
    }
    
    for(let i=0; i<=n; i++){
        amounts[depth] += i
        combination(k, n-i, reqs, depth+1, amounts)
        amounts[depth] -= i
    }
}

function simulate(k, n, reqs, amounts){
    const queues = Array(k).fill(1).map(v=>[])
    
    reqs.forEach(req=>{
        const [start, duration, type] = req
        queues[type-1].push(req)
    })
    
    let total_wait = 0
    
    queues.forEach((queue, type)=>{
        const ends_at = [] // 정렬되어있어야함
        let temp_wait = 0
        queue.forEach((req)=>{
            let start_at = req[0]
            while(ends_at.length>0 && req[0]>ends_at[0]){
                ends_at.shift()
            }
            if(ends_at.length>0 && req[0]<ends_at[0] && amounts[type]==ends_at.length){
                // 기다림
                temp_wait += ends_at[0]-req[0]
                start_at = ends_at[0]
                ends_at.shift()
            }
            ends_at.push(start_at + req[1])
            ends_at.sort((a,b)=>a-b)
        })
        total_wait += temp_wait
    })
    
    if(total_wait<min_wait) min_wait = total_wait
}