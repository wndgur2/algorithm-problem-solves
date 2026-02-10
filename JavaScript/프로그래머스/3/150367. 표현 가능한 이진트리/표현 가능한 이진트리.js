function toBinary(n){
    const str = n.toString(2)
    
    let length = str.length
    let saturatedLength = 2
    while(saturatedLength-1<length)saturatedLength*=2
    
    return str.padStart(saturatedLength-1, '0')
}

// 포화로 만들었을 때, 이진수의 중앙값이 0이면 나머지도 0이어야 한다.
// 길이가 1일 때까지 반복 (분할정복)

function solution(numbers) {
    var answer = [];
    
    const binaries = numbers.map(toBinary)
    binaries.forEach(b=>{
        answer.push(check(b)?1:0)
    })
    
    function check(binary, shouldZero=false){
        // length should be always odd
        if(binary.length==0) return true
        const middleIndex = Number.parseInt(binary.length/2)
        const front = binary.slice(0, middleIndex)
        const rear = binary.slice(middleIndex+1)
        // console.log('----', binary)
        // console.log(front)
        // console.log(rear)
        if(binary[middleIndex] == '1'){
            if(shouldZero) return false
            else return check(front) && check(rear)
        } else{
            // all sides should be zero
            return check(front, true) && check(rear, true)
        }
    }
    
    return answer;
}