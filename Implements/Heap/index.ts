// Heap algorithm

class Heap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    public insert(value: number): void {
        this.heap.push(value);
        this.bubbleUp();
    }

    public remove(): number | undefined {
        if (this.size() === 0) {
            return undefined;
        }

        this.swap(0, this.size() - 1);
        const max = this.heap.pop();
        this.bubbleDown();

        return max;
    }

    private size(): number {
        return this.heap.length;
    }

    private bubbleUp(): void {
        let index = this.size() - 1;

        console.log('INDEX', index);

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            console.log('PARENTINDEX', parentIndex);

            if (this.heap[parentIndex] >= this.heap[index]) {
                break;
            }

            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    private bubbleDown(): void {
        let index = 0;

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let maxIndex = index;

            if (leftChildIndex < this.size() && this.heap[leftChildIndex] > this.heap[maxIndex]) {
                maxIndex = leftChildIndex;
            }

            if (rightChildIndex < this.size() && this.heap[rightChildIndex] > this.heap[maxIndex]) {
                maxIndex = rightChildIndex;
            }

            if (maxIndex === index) {
                break;
            }

            this.swap(index, maxIndex);
            index = maxIndex;
        }
    }

    private swap(i: number, j: number): void {
        console.log(this.heap[i], this.heap[j])
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

export default Heap;

const heap = new Heap();
heap.insert(1);
heap.insert(3);
heap.insert(22);
heap.insert(5);
heap.insert(14);
heap.insert(6);
heap.insert(10);
heap.insert(8);
console.log(heap); // 6