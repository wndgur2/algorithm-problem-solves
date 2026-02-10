function solution(clockHands) {
    const SIZE = clockHands.length
    
    var answer = Infinity;
    dfs(clockHands, 0, 0)
    return answer;
    
    function rotate(board, y, x, num) {
        const dy = [0, 1, -1, 0, 0];
        const dx = [0, 0, 0, 1, -1];
        for (let d = 0; d < 5; d++) {
            let ny = y + dy[d];
            let nx = x + dx[d];
            if (0 <= ny && ny < SIZE && 0 <= nx && nx < SIZE) {
                board[ny][nx] = (board[ny][nx] + num) % 4;
            }
        }
    }
    
    function dfs(arr, x, count){
        if(x===SIZE) return simulate(arr, count)
        for(let i=0; i<4; i++){
            const newArr = arr.map(e=>e.slice())
            rotate(newArr, 0, x, i)
            dfs(newArr, x+1, count+i)
        }
    }
    
    function simulate(arr, count){
        for(let y=1; y<SIZE; y++){
            for(let x=0; x<SIZE; x++){
                if(arr[y-1][x]==0) continue
                count+=(4-arr[y-1][x])%4
                rotate(arr, y, x, (4-arr[y-1][x])%4)
            }
            if(count>answer) return
        }
        
        for(let x=0; x<SIZE; x++)
            if(arr[SIZE-1][x]!==0) return
        
        if(answer>count){
            answer = count
        }
    }
}