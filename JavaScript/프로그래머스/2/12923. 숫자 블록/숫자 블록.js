// N의 최대 약수 구하기 (최대 1000만)
// O(N)
// 미리 구해놓는 건 시간 상 불가
// 범위가 주어지면 해당 숫자 배열을 빠르게 계산할 수 있다는 건데
// 5000개를 1000만개로 나누어보자니 O(500억)
// 5000개를 66만개(소수)로 나누어보면... 3억

// 10억이 들어왔을 때 1000만을 리턴하려면
// 1. 100으로 나눈다. (10억 / 100을 리턴한다)
// 2. 2, 2, 5, 5로 나눈다
// - 1000만개를 소인수분해 해놓는다..?
// 3. 1000만으로 나눈다. (1000만을 리턴한다.)

// 연속된 5000개... 연속된 5000개...
// 절반은 /2로 나뉠거고
// 1/3은 /3으로 나뉠거고
// 1/4는 /4로 ...
// ...
// 1000만 초과일 경우?
// 
// 각 숫자를 따로 구하는 게 아니라,
// 큰 번호의 블록부터 채워 넣는다.
// 그리고 start~end가 모두 찼다면 멈춘다.

const MAX_NUM = 10_000_000

function solution(begin, end) {
    const size = end-begin+1
    let answer = Array(size).fill(0)
    let filled = 0
    
    let number= Math.min(MAX_NUM, Math.ceil(end/2))
    for(; number>0; number--){
        if(filled==size) break
        
        let j = (number*2 >= begin) ? number*2 : Math.ceil(begin/number)*number;
        // number가 1000만에서 1까지 내려가는 사이에 begin으로 나누어 떨어지는 숫자가 있을 것이고...
        // 그걸로 하나를 처리하는 것이 아니라 begin~end을 최대한 채우고 number--로 넘어간다.
        // O(10,000,000)
        
        for(; j<=end; j+=number){
            if(filled==size) break
            if(answer[j-begin]==0){
                filled++
                answer[j-begin] = number
            }
        }
    }
    
    return answer;
}