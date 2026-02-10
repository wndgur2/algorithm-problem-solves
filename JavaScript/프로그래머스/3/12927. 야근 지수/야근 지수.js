function solution(n, works) {
    var answer = 0;
    let worksByCost = Array(50001).fill(0)
    works.forEach(c=>{
        worksByCost[c]++
    })
    
    let top = 0
    for(let i=50000; i>=1; i--){
        let amount = worksByCost[i]
        if(amount==0) continue
        if(n<=amount) {
            top = i
            worksByCost[i] -= n
            worksByCost[i-1] += n
            break;
        } else{
            n-=worksByCost[i]
            worksByCost[i-1] += worksByCost[i]
            worksByCost[i] = 0
        }
    }
    
    for(let i=top; i>=1; i--){
        answer += Math.pow(i, 2) * worksByCost[i]
    }
    return answer;
}