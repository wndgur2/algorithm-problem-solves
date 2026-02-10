function solution(triangle) {
    var answer = 0;
    const size = triangle.length
    
    // 층별로 돌면서 각 지점에 도달한 최댓값 유지하기
    const maxValues = triangle.map(arr=>arr.map(v=>v))
    
    let level = 0
    while(++level < size){
        for(let i=0; i<level; i++){
            const cur = maxValues[level-1][i]
            if(maxValues[level][i] < cur + triangle[level][i]){
                maxValues[level][i] = cur + triangle[level][i]
            }
            
            if(maxValues[level][i+1] < cur + triangle[level][i+1]){
                maxValues[level][i+1] = cur + triangle[level][i+1]
            }
        }
    }
    
    maxValues[size-1].forEach(v=>answer=v>answer?v:answer)
    
    return answer;
}