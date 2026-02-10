function solution(m, n, startX, startY, balls) {
    var answer = [];
    
    balls.forEach(([x, y])=>{
        answer.push(getMinDistSquare(x, y))
    })
    
    return answer;
    
    function getMinDistSquare(targetX, targetY){
        let dists = []
        
        
        // 동
        if(startX>targetX || startY!=targetY){
            let newX = startX + (m-startX)*2
            let newY = startY
            dists.push(Math.pow(newX-targetX,2) + Math.pow(newY-targetY,2))
        }
        
        
        // 서
        if(startX<targetX || startY!=targetY){
            newX = -startX
            newY = startY
            dists.push(Math.pow(newX-targetX,2) + Math.pow(newY-targetY,2))
        }
        
        // 남
        if(startY<targetY || startX!=targetX){
            newX = startX
            newY = -startY
            dists.push(Math.pow(newX-targetX,2) + Math.pow(newY-targetY,2))
        }
        
        // 북
        if(startY>targetY || startX!=targetX){
            newX = startX
            newY = startY + (n-startY)*2
            dists.push(Math.pow(newX-targetX,2) + Math.pow(newY-targetY,2))
        }
        
        return Math.min(...dists)
    }
}