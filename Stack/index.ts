class Stack {
    private arr: any[];

    constructor() {
        this.arr = [];
    }

    push(data) {
        this.arr.push(data);
    }

    pop(index: number) {
        if (index === this.arr.length - 1) {
            return this.arr.pop();
        }

        let result = this.arr.splice(index, 1);

        return result;
    }

    empty() {
        return !this.arr.length;
    }

    top() {
        return this.arr[this.arr.length - 1];
    }

    bottom() {
        return this.arr[0];
    }
}

let s = new Stack();

s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.pop(2);

console.log(s)
console.log(s.top())
console.log(s.bottom())
console.log(s.empty())