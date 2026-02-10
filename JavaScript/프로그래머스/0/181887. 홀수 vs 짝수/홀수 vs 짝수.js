function solution(num_list) {
    let sumEven = 0
    let sumOdd = 0
    num_list.forEach((v, i)=>{
        if(i%2==0) sumEven += v
        else sumOdd += v
    })
    return sumEven>sumOdd?sumEven:sumOdd
}