function solution(strArr) {
    var answer = [];
    answer = strArr.map((v, i)=>{
        if(i%2==0) return v.toLowerCase()
        else return v.toUpperCase()
    })
    return answer;
}