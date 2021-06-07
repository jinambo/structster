// ***********************
// Stack data structure
// ***********************
class Stack {
    array = []

    constructor (top) {
        this.top = null
        this.nodePush(top)
    }

    nodePush(data) {
        let node = new StackNode(data)

        node.setNext(this.top)
        this.top = node
        this.array.push(this.top)
    }

    nodePop() {
        this.array.pop()
        this.top = this.top.next
    }
}

class StackNode {
    constructor (data) {
        this.data = data
        this.next = null
    }

    setNext(node) {
        this.next = node
    }
}

// ***********************
// Queue data structure
// ***********************
class Queue {
    array = []

    constructor (head) {
        this.head = this.tail = new QueueNode(head)
        this.nodePush(head)
    }

    nodePush(data) {
        let node = new QueueNode(data)

        // Set tail's next node
        this.array.length === 1 ? this.tail.setNext(node) : ''

        this.head.setNext(node)
        this.head = node
        this.array.push(this.head)
    }

    nodePop() {
        this.array.shift()
        this.tail = this.tail.next
    }
}

class QueueNode {
    constructor (data) {
        this.data = data
        this.next = null
    }

    setNext(node) {
        this.next = node
    }
}

// ***********************
// Linked list data structure
// ***********************
class LinkedList {
    constructor() {
        this.first = null
    }

    insertFirst(data) {
        let node = new LinkedListNode(data)

        // if there is no node yet
        if (this.first === null) {
            this.first = node
            return
        }

        let tmpNode = this.first
        this.first = node
        node.setNext(tmpNode)
    }

    deleteFirst() {
        if (this.first === this.active) {
            this.active = null
        }

        this.first = this.first.next
    }

    postInsert(data) {
        if (this.active === null) {
            return
        }

        let node  = new LinkedListNode(data)
        let tmpNode = this.active.next

        list.active.setNext(node)
        node.setNext(tmpNode)
    }

    postDelete() {
        if (this.active === null) {
            return
        }

        let tmp = this.active.next
        this.active.next = tmp.next
    }

    setActive(node) {
        let nodeToFind = this.first

        while (nodeToFind) {
            if (nodeToFind.data === node) {
                this.active = nodeToFind
                break
            }

            nodeToFind = nodeToFind.next
        }
    }
}

class LinkedListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }

    setNext(node) {
        this.next = node
    }
}

// Stack Test
let stack = new Stack(1)

for (let i = 2; i <= 10; i++) {
    stack.nodePush(i)
}

stack.nodePop()
stack.nodePop()

console.log(stack)


// Queue Test
let queue = new Queue(1)

for (let i = 2; i <= 10; i++) {
    queue.nodePush(i)
}

queue.nodePop()
queue.nodePop()

console.log(queue)


// List Test
let list = new LinkedList()

list.insertFirst(1)
list.insertFirst(2)
list.insertFirst(3)
list.insertFirst(4)

list.setActive(3)
list.postInsert(9)
list.postDelete()
// list.deleteFirst()

console.log(list)