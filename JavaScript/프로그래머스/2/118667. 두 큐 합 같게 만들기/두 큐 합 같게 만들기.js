// 큐의 합이 총합/2보다 크면, 무조건 원소를 빼야한다.
// => 큐의 합이 큰 큐에서 pop을 반복한다.
// 종료 조건 : 2*N || sum1==sum2

class Dequeue{
    head = null
    tail = null
    sum = 0
    size = 0
    
    pop(){
        if(this.size===0)
            return null
        
        const res = this.head
        
        this.head = res.next
        
        if(this.head) this.head.prev = null
        else this.tail = null
        
        this.sum -= res.value
        this.size --
        
        return res
    }
    
    push(node){
        if(this.size===0){
            this.head = node
            this.tail = node
        } else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.sum += node.value
        this.size++
    }
}

class Node{
    prev = null
    next = null
    constructor(v){
        this.value = v
    }
}

function solution(queue1, queue2) {
    const N = queue1.length
    var answer = -1;
    const deq1 = new Dequeue()
    const deq2 = new Dequeue()
    
    for(let i=0; i<N; i++){
        deq1.push(new Node(queue1[i]))
        deq2.push(new Node(queue2[i]))
    }
    
    let r = 0
    while(deq1.sum!==deq2.sum){
        
        if(deq1.sum>deq2.sum){
            const n = deq1.pop()
            deq2.push(new Node(n.value))
        } else{
            const n = deq2.pop()
            deq1.push(new Node(n.value))
        }
        if(r++ === N*2+1) break
    }
    if(deq1.sum === deq2.sum) answer = r
    
    return answer;
}

function sum(q){
    return q.reduce((a,c)=>a+c)
}