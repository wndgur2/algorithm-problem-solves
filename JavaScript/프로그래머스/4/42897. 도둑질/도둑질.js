function solution(money) {
    const length = money.length
    const dpA = [0,0,0,0]
    const dpB = [0,0,0,0]
    const dps = [dpA, dpB]
    let curDp, prevDp
    
    dpA[0] = money[0]
    
    for(let i=1; i<length; i++){
        curDp = dps[i%2]
        prevDp = dps[(i+1)%2]
        
        // 0을 뽑은 경우
        curDp[0] = prevDp[1] + money[i]
        curDp[1] = max(prevDp[0], prevDp[1])
        
        // 0을 안 뽑은 경우
        curDp[2] = prevDp[3] + money[i]
        curDp[3] = max(prevDp[2], prevDp[3])
        
    }
    
    curDp[0] -= money[0]
    
    const a = max(curDp[0], curDp[1])
    const b = max(curDp[2], curDp[3])
    
    
    return max(a, b)
}
    
function max(a, b){
    if(a>b) return a
    else return b
}
