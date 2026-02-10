function solution(grid) {
    let answer = []
    
    const H = grid.length
    const W = grid[0].length
    const board = Array(H).fill(0).map((v, i)=>grid[i].split(""))
    const visited = Array(H).fill(0).map((_)=>Array(W).fill(0).map((__)=>Array(4).fill(0)))
    let visitIndex = 0
    const ds = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    
    for(let y=0; y<H; y++){
        for(let x=0; x<W; x++){
            ds.forEach((d, di)=>{
                visited[y][x][di] = checkCycle(y, x, di)
            })
        }
    }
    
    return answer.sort((a, b)=>a-b)
    
    function checkCycle(y, x, di){
        visitIndex++
        if(visited[y][x][di]>0){
            return false
        }
        
        let ny = y + ds[di][0]
        let nx = x + ds[di][1]
        
        if(ny<0) ny = H-1
        else if(ny>=H) ny = 0
        if(nx<0) nx = W-1
        else if(nx>=W) nx = 0
        
        let ndi = getNdi(di, ny, nx)
        
        let length = 1
        
        while(ny!==y || nx!==x || ndi!==di){
            length++
            
            if(visited[ny][nx][ndi]>0 && visited[ny][nx][ndi]!=visitIndex){
                return false
            }
            visited[ny][nx][ndi] = visitIndex
            
            ny += ds[ndi][0]
            nx += ds[ndi][1]
            if(ny<0) ny = H-1
            else if(ny>=H) ny = 0
            if(nx<0) nx = W-1
            else if(nx>=W) nx = 0
            
            ndi = getNdi(ndi, ny, nx)
        }
        
        answer.push(length)
        
        return true
    }
    
    function getNdi(di, ny, nx){
        const type = board[ny][nx]
        if(type=='R'){
            return (di+1)%4
        } else if(type=='L'){
            return (di+3)%4
        } else if(type=='S'){
            return di
        }
    }
}