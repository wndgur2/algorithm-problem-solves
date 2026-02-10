function solution(todo_list, finished) {
    var answer = [];
    answer = todo_list.filter((s, i)=> !finished[i])
    return answer;
}