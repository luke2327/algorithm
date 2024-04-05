// 문제 설명
// 회사원 Demi는 가끔은 야근을 하는데요, 야근을 하면 야근 피로도가 쌓입니다. 야근 피로도는 야근을 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값입니다. Demi는 N시간 동안 야근 피로도를 최소화하도록 일할 겁니다.Demi가 1시간 동안 작업량 1만큼을 처리할 수 있다고 할 때, 퇴근까지 남은 N 시간과 각 일에 대한 작업량 works에 대해 야근 피로도를 최소화한 값을 리턴하는 함수 solution을 완성해주세요.

// 제한 사항
// works는 길이 1 이상, 20,000 이하인 배열입니다.
// works의 원소는 50000 이하인 자연수입니다.
// n은 1,000,000 이하인 자연수입니다.
// 입출력 예
// works	n	result
// [4, 3, 3]	4	12
// [2, 1, 2]	1	6
// [1,1]	3	0


class PriorityQueue {
    private heap = [];
    private compare: (a, b) => boolean;

    constructor(compare: (a, b) => boolean) {
        this.compare = compare;
    }

    public push(item): void {
        this.heap.push(item);
        this.bubbleUp();
    }

    public pop() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0 && end !== undefined) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return max;
    }

    public isEmpty(): boolean {
        return this.heap.length === 0;
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        const element = this.heap[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (this.compare(element, parent)) {
                this.heap[index] = parent;
                this.heap[parentIndex] = element;
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    private sinkDown(): void {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let swapIndex = null;

            if (leftChildIndex < length) {
                if (this.compare(this.heap[leftChildIndex], element)) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                if ((swapIndex === null && this.compare(this.heap[rightChildIndex], element)) ||
                    (swapIndex !== null && this.compare(this.heap[rightChildIndex], this.heap[leftChildIndex]))) {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex === null) break;

            this.heap[index] = this.heap[swapIndex];
            this.heap[swapIndex] = element;
            index = swapIndex;
        }
    }
}

export default function solution(n: number, works: number[]): number {
    let answer = 0;
    let pq = new PriorityQueue((a, b) => a > b);

    for (let work of works) {
        pq.push(work);
    }

    while (n > 0) {
        let max: any = pq.pop();
        if (max > 0) {
            pq.push(max - 1);
            n--;
        } else {
            break;
        }
    }

    while (!pq.isEmpty()) {
        let work: any = pq.pop();
        answer += work * work;
    }

    return answer;
}


console.log(solution(4, [4, 3, 3])); // 12
console.log(solution(1, [2, 1, 2])); // 6
console.log(solution(3, [1, 1])); // 0