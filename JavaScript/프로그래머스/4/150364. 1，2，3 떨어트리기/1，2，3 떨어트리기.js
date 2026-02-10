/**
리프노드에 도달하는 순서는 정해져있다.
이 순서를 파악하고, 가장 빨리 target을 만드는 조합을 만들면 될 듯?

입출력 예 #1

target [0, 0, 0, 3, 0, 0, 5, 1, 2, 3]
도달순서 [4, 8, 7, 9, 4, 10, 7, ...]
result [1, 1, 2, 2, 2, 3, 3]

1. 각 노드의 최소 도달 횟수를 구한다.
2. 이를 만족하는 리프 도달 순서 배열을 구한다.
    2.1 각 노드의 길 상태 유지 필요
3. 이 리프 배열을 사전순으로 채운다.
    3.1 우선 1로 모두 채운다.
    3.2 부족한 만큼 3으로 채워보고,
    3.3 부족한 만큼 2로 채운다.
*/

function solution(e, target) {
    const res = [];
    const l = target.length;
    
    let edges = Array(l).fill(0).map(_=>[]);
    
    e.forEach(([from, to])=>{
        from--;
        to--;
        edges[from].push(to);
    })
    
    // edges = edges.map(arr=>arr.sort());
    edges = edges.map(arr => arr.sort((a, b) => a - b));

    const path_indexes = Array(l).fill(-1);
    edges.forEach((children, i)=>{
        if(children.length>0)
            path_indexes[i] = 0;
    })
    
    // 1. 각 노드의 최소 도달 횟수를 구한다.
    const min_card_amounts = target.map(n=>Math.ceil(n/3));
    
    // 2. 이를 만족하는 리프 도달 배열을 구한다.
    const leaf_order = [];
    const card_amounts = Array(l).fill(0);
    
    while(!isArrayGTE(card_amounts, min_card_amounts)){
        simulate(0);
    }
    
    // 불가 판단
    for(let i=0; i<l; i++){
        if(target[i] < card_amounts[i]) return [-1];
    }
    
    // 입력 순서 계산
    const input_order = target.map((t,i)=>get_card_order(t, card_amounts[i]).reverse());
    
    // console.log(card_amounts)
    // console.log(leaf_order)
    // console.log(input_order)
    
    leaf_order.forEach(n=>{
        res.push(input_order[n].pop());
    })
    
    return res
    
    function simulate(node){
        let children = edges[node];
        let cur_node = node;
        while(children.length>0){
            const cur_path_index = path_indexes[cur_node];
            path_indexes[cur_node] = (cur_path_index+1)%children.length;
            cur_node = children[cur_path_index];
            children = edges[cur_node];
        }
        card_amounts[cur_node]++;
        leaf_order.push(cur_node);
    }
}

function isArrayGTE(arr, min_arr){
    for(let i=0; i<arr.length; i++)
        if(arr[i]<min_arr[i]) return false;
    return true;
}
    
function get_card_order(target_sum, amount){
    // amount개의 1,2,3으로 target_sum을 만들 수 있는 방법 중
    // 사전 순으로 가장 빠른 방법 구하기
    // *amount는 target_sum보다 작지 않다.
    // *amount는 target_sum*3보다 크지 않다.

    // fill with 1
    const cards = Array(amount).fill(1);
    let cur_sum = amount;
    let diff = target_sum - cur_sum;
    let last_unfilled_index = amount-1;

    // fill with 3
    const fill_length = Math.floor(diff/2);
    cards.fill(3, amount-fill_length);
    last_unfilled_index = amount-fill_length-1;
    diff %= 2;

    // fill with 2
    if(diff == 1){
        cards[last_unfilled_index] ++;
    }

    return cards;
}