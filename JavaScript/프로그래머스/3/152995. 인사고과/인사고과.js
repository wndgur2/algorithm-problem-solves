function solution(scores) {
    const [myA, myB] = scores[0]
    const score = myA + myB
    const n = scores.length
        
    scores.sort((a,b)=>a[0]===b[0]?a[1]-b[1]:b[0]-a[0])
    let maxB = scores[0][1]
    let aOfMaxB = scores[0][0]
    
    let res = 1
    
    scores[0].push(true)
    if(scores[0][0]+scores[0][1]>score) res++
    
    for(let i=1; i<n; i++){
        const [a, b] = scores[i]
        
        if(b>maxB){
            maxB = b
            aOfMaxB = a
        }
        
        if(a<aOfMaxB && b<maxB){
            scores[i].push(false)
            if(a===myA && b===myB) return -1
        } else{
            scores[i].push(true)
            if(a+b>score) res++
        }
    }
    
    return res;
}