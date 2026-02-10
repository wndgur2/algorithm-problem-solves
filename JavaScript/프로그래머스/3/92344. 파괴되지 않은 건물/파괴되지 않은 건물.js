function solution(board, skill) {
    var answer = 0;
    let height = board.length
    let width = board[0].length
    
    let stack = Array(height+1).fill(0).map(_=>Array(width+1).fill(0))
    
    skill.forEach(([type, r1, c1, r2, c2, degree])=>{
        if(type==1) apply(r1, c1, r2, c2, -degree)
        else apply(r1, c1, r2, c2, degree)
    })
    
    for(let x=0; x<width; x++){
        for(let y=0; y<height; y++)
            stack[y+1][x] += stack[y][x]
    }
    
    for(let y=0; y<height; y++){
        for(let x=0; x<width; x++)
            stack[y][x+1] += stack[y][x]
    }
    
    for(let y=0; y<height; y++){
        for(let x=0; x<width; x++)
            if(board[y][x]+stack[y][x]>0)
                answer++
    }
    
    return answer;
    
    function apply(r1, c1, r2, c2, degree){
        stack[r1][c1] += degree
        stack[r1][c2+1] -= degree
        stack[r2+1][c1] -= degree
        stack[r2+1][c2+1] += degree
    }
}