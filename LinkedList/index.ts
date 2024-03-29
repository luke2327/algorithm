class LinkedList {
    head: any;
    constructor() {
        this.head = null;
    }

    append(value: any) {
        if (!this.head) {
            this.head = { value: value, next: null };
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = { value: value, next: null };
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.append(90);
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.print();