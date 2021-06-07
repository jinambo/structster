# structster
Structster - simple data structures javascript library

# Structster.js
Structster - simple data structures javascript library

## Stack
##### Stack initialization
```javascript
let stack = new Stack('<value of the first element>')
```
##### Push to the stack
```javascript
stack.nodePush('<value>')
```
##### Pop from the stack
```javascript
stack.nodePop
```

## Queue
##### Queue initialization
```javascript
let queue = new Queue('<value of the first element>')
```
##### Add to the queue
```javascript
stack.nodeEnqueue('<value>')
```

##### Remove from the queue
```javascript
stack.nodeDequeue()
```

## Singly Linked List
##### Singly Linked List initialization
```javascript
let list = new LinkedList()
```
##### Create new node and insert it at the beginning
```javascript
list.insertFirst('<value>')
```
##### Set active node
```javascript
list.setActive('<value>')
```
##### Create new node and insert it behind the active node
```javascript
list.postInsert('<value>')
```
##### Delete the first node
```javascript
list.deleteFirst()
```
##### Delete the node after the active one
```javascript
list.postDelete()
```
