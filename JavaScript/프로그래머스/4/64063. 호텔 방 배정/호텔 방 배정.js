const nodes = new Map()

function solution(k, room_number) {
    const results = []
    
    room_number.forEach(n=>{
        if(nodes.has(n)){
            const nextNumber = nodes.get(n).getLastNode().number+1
            const node = new Node(nextNumber)
            nodes.set(nextNumber, node)
            results.push(nextNumber)
        } else{
            const node = new Node(n)
            nodes.set(n, node)
            results.push(n)
        }
    })
    return results
}

class Node{
    constructor(number){
        this.number = number
        this.next = null
    }

    getLastNode(){
        if(this.next){
            this.next = this.next.getLastNode()
            return this.next
        } else{
            if(nodes.has(this.number+1)){
                this.next  = nodes.get(this.number+1).getLastNode()
                return this.next
            } else{
                return this
            }
        }
    }
}