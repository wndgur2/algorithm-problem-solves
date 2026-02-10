function solution(num_list) {
    var answer = 0;
    const add = (a, b) => a + b
    const mult = (a, b) => a * b
    
    answer = num_list.length>10?
        num_list.reduce(add):
        num_list.reduce(mult)
    
    return answer;
}