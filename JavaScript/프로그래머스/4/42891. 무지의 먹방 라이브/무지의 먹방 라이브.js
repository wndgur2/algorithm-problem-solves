// food_times.length <= 200_000

function solution(food_times, k) {
    var answer = -1;
    
    const turnBeforeFoodRemoved = []
    
    const sortedFoodTimes = Array.from(food_times).sort((a,b)=>a-b)
    
    let t = 0
    sortedFoodTimes.forEach(v=>{
        turnBeforeFoodRemoved.push(v-t)
        t = v
    })
    
    let foods = food_times.length
    let i = 0
    let turn = 0
    
    // turn*foods만큼씩 소진
    while(k >= foods*turnBeforeFoodRemoved[i]){
        turn += turnBeforeFoodRemoved[i]
        k -= foods*turnBeforeFoodRemoved[i]
        foods--
        i++
        if(i >= turnBeforeFoodRemoved.length) break
    }
    
    if(foods==0) return -1
    
    // 남은 턴 소진
    turn+=parseInt(k/foods)
    k%=foods
    
    //하나씩 먹기
    food_times.forEach((v, i)=>{
        if(v<=turn) return // 다먹은 음식
        if(k==0) answer = i+1
        k--
    })
    
    return answer;
}