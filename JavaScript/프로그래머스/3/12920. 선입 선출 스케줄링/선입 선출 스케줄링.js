function solution(n, cores) {
    var answer = 0;
    let l=1, r=500000000, mid;
    while(l<r){
        mid = Number.parseInt((l+r)/2)
        let jobDone = getJobDone(mid)
        if(jobDone < n){
            l = mid+1
        } else{
            r = mid-1
        }
    }
    while(getJobDone(mid)<n){
        mid++
    }
    while(getJobDone(mid)>=n){
        mid--
    }
    const preJobDone = getJobDone(mid)
    let jobDone = preJobDone
    cores.forEach((core,i)=>{
        if((mid)%core===0) {
            jobDone++
            if(jobDone==n)
                answer = i+1
        }
    })
    
    return answer;
    
    function getJobDone(time){
        let jobDone = 0
        for(let c=0; c<cores.length; c++){
            const core = cores[c]
            jobDone+=Number.parseInt((time-1)/core)+1
        }
        return jobDone
    }
}