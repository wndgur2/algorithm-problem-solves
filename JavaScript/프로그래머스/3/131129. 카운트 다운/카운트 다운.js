// target으로 가는 bfs
// target으로 가는 dp

function solution(target) {
    const dp = Array(100001).fill(0).map(v=>[-1,-1])
    dp[0][0] = 0
    dp[0][1] = 0
    
    for(let i=1; i<=20; i++){
        dp[i][0]=1
        dp[i][1]=1
    }
    dp[50][0]=1
    dp[50][1]=1
    
    for(let i=0; i<=target; i++){
        if(i>=50){
            dp[i][0] = dp[i-50][0]+1
            dp[i][1] = dp[i-50][1]+1
        }
        let d1;
        for(let j=1; j<=20; j++){
            for(let k=1; k<=3; k++){
                if(k==1) d1=1
                else d1=0
                if(i-j*k<0) break
                const newTries = dp[i-j*k][0] + 1
                const newBullOrSingles = dp[i-j*k][1] + d1
                
                if(newTries<dp[i][0] ||
                    newTries==dp[i][0] && newBullOrSingles>dp[i][1] ||
                    dp[i][0]==-1
                  ){
                    dp[i][0] = newTries
                    dp[i][1] = newBullOrSingles
                }
            }
        }
    }
    return dp[target]
}