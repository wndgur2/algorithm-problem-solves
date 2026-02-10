// 완전탐색

// get winner (DFS 완전탐색. 이길 수 밖에 없는 사람 찾기.)

// simulate best play

function solution(board, aloc, bloc) {
    var answer = -1;
    
    const is_a_winner = simulate_winner(board, aloc, bloc, 0, 0)
    const winner = is_a_winner?0:1
    
    answer = simulate(board, aloc, bloc, 0, winner)
    
    return answer;
}

const ds = [[-1, 0], [1, 0], [0,-1], [0, 1]]

function simulate_winner(board, aloc, bloc, turn, team){
    let loc = turn%2==0?aloc:bloc
    let opponent_loc = turn%2==1?aloc:bloc
    
    if(board[loc[0]][loc[1]]==0) return false
    
    let win = false
    
    ds.forEach(d=>{
        const ny = loc[0] + d[0]
        const nx = loc[1] + d[1]
        
        if(ny<0 || ny>=board.length || nx<0 || nx>=board[0].length) return
        if(board[ny][nx] == 0) return
        
        const new_board = board.map(row=>[...row])
        new_board[loc[0]][loc[1]] = 0
        
        let opponent_result
        if(turn%2==0) opponent_result = simulate_winner(new_board, [ny, nx], bloc, turn+1, team)
        else opponent_result = simulate_winner(new_board, aloc, [ny, nx], turn+1, team)
        
        if(!opponent_result) win=true
    })
    return win
}

function simulate(board, aloc, bloc, turn, winner){
    // winner 입장에서는 가장 빨리 끝나는 판
    // loser 입장에서는 가장 오래 버티는 판
    const results = []
    
    let loc = turn%2==0?aloc:bloc
    let opponent_loc = turn%2==1?aloc:bloc
    
    // -1이 나와서는 안됨 (winner가 지는 경우)
    if(board[loc[0]][loc[1]]==0) return turn%2==winner?99999:turn
    
    ds.forEach(d=>{
        const ny = loc[0] + d[0]
        const nx = loc[1] + d[1]
        
        if(ny<0 || ny>=board.length || nx<0 || nx>=board[0].length) return
        if(board[ny][nx] == 0) return
        
        const new_board = board.map(row=>[...row])
        new_board[loc[0]][loc[1]] = 0
        
        if(turn%2==0) results.push(simulate(new_board, [ny, nx], bloc, turn+1, winner))
        else results.push(simulate(new_board, aloc, [ny, nx], turn+1, winner))
    })
    
    // console.log(turn%2, results)
    
    if(results.length==0) return turn%2==winner?99999:turn
    
    if(turn%2==winner) return Math.min(...results)
    else return Math.max(...results)
}