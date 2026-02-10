function solution(players, m, k) {
    var answer = 0;
    let server_added = []
    let si = 0
    for(let i=0; i<players.length; i++){
        const n = Number(players[i])
        while(server_added.length>si && server_added[si]<=i-k)
            si++
        let need_servers = Math.floor(n/m) - (server_added.length-si)
        if(need_servers<=0) continue
        answer += need_servers
        while((need_servers--) > 0)
            server_added.push(i)
    }
    return answer;
}