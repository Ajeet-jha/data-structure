class Node {
    constructor(val) {
      this.val = val,
        this.next = null
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null
    }
  
    append(val) {
  
      if (this.head == null) {
        this.head = new Node(val)
        return;
      }
  
      let current = this.head;
  
      while (current.next != null) {
        current = current.next;
      }
      current.next = new Node(val)
    }
  
    print () {
      let current = this.head;
      let list = "";
      while (current != null) {
        list += `${current.val} => `
        current = current.next;
      }
      if(current == null){
        list += null
      }
      console.log("list : ", list)
    }
  
  }
  
  const list = new SinglyLinkedList();
  list.append(1)
  list.append(2)
  list.append(3)
  list.append(4)
  list.append(5)
  list.append(6)
  list.print()