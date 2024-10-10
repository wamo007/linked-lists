class Node {
    constructor(value, nextNode = null) {
        this.value=value;
        this.next=nextNode;
    }
}

export class LinkedList {
    constructor() {
        this.heading = null;
        this.sizing = 0;
    }

    append(value) {
        let node = new Node(value);
        let current;

        if (!this.heading) {
           this.heading = node;
        } else {
           current = this.heading;

           while(current.next) {
               current = current.next;
           }
           
           current.next = node;
       }
       this.sizing++;
    }

    prepend(value) {
        this.heading = new Node(value, this.heading);
        this.sizing++;
    }

    size() {
        let size = this.sizing;
        console.log(size);
    }

    head() {
        let current = this.heading;
        console.log(current);
    }

    tail() {
        let current = this.heading;

        while(current.next) {
            current = current.next;
        }
        console.log(current.value);
    }

    at(index) {
        let current = this.heading;
        let count = 0;

        while(current) {
            if(count == index) {
                console.log(current.value);
            }
            count++;
            current = current.next;
        }
        return;
    }

    pop() {
        let previous;
        let current = this.heading;

        while(current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        this.sizing--;;
    }

    contains(value) {
        let current = this.heading;
        while(current.next) {
            if (current.value === value) {
                return true;
            }
            current = current.next
        } return false;
    } 

    find(value) {
        let current = this.heading;
        let count = 0;
        while(current.next) {
            if (current.value === value) {
                return count;
            }
            current = current.next
            count++;
        } return null;
    }

    toString() {
        let current = this.heading;
        let dataBank = '';
        while(current.next) {
            dataBank += `( ${current.value} ) -> `
            current = current.next
        } return `${dataBank}null`;
    }

    insertAt(value, index) {
        if(index < 0 || index > this.sizing) {
            return;
        }

        if(index === 0) {
            this.prepend();
            return;
        }

        let node = new Node(value);
        let current = this.heading;
        let count = 0;
        let previous;

        while(count < index) {
            previous = current;
            count++;
            current = current.next;
        }
        node.next = current;
        previous.next = node;
        this.sizing++;
    }

    removeAt(index) {
        if(index < 0 || index > this.sizing) {
            return;
        }
        let current = this.heading;
        let previous;
        let count = 0;

        if(index == 0) {
            this.heading = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.sizing--;
    }
}