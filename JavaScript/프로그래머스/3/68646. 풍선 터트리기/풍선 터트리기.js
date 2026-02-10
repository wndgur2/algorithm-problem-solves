// 양 쪽 둘 다, 나보다 작은애가 하나라도 있으면 안 된다.
// 두 측 중 한 측이라도 최솟값이면 통과(답++)

const MIN_VAL = -1_000_000_000
const MAX_VAL = 1_000_000_000

function solution(a) {
    let answer = a.length
    const isMinFrom = {
        left:Array.from(a, v=>false),
        right:Array.from(a, v=>false)
    }
    
    let tempMin = MAX_VAL
    a.forEach((v, i)=>{
        if(v<tempMin) {
            isMinFrom.left[i]=true
            tempMin = v
        }
    })
    
    isMinFrom.left[0] = true
    isMinFrom.left[a.length-1] = true
    
    tempMin = MAX_VAL
    for(let i=a.length-1; i>=0; i--){
        const v = a[i]
        if(v<tempMin) {
            isMinFrom.right[i]=true
            tempMin = v
        } else{
            if(!isMinFrom.left[i]){
                answer--
            }
        }
    }
    
    return answer;
}