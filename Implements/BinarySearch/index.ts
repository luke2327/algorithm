// Binary search

export default function solution(n: number[], target: number) {
    let answer = 0;

    let left = 0;
    let right = n.length - 1;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (target < n[mid]) {
            right = mid - 1;
        } else if (target > n[mid]) {
            left = mid + 1;
        } else {
            answer = mid;

            break;
        }
    }

    return answer
}

console.log(solution([1, 10, 20, 47, 59, 73 , 88, 94, 100, 121], 100));