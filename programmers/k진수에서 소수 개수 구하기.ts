/**
 * 
 * @param n 정수 (1보다 크고 1000000보다 작은 정수)
 * @param m 변환할 진법 (3보다 크고 10보다 작은 정수)
 */
export default function solution(n, m) {
    let ans = 0;
    let str = '';
    while (n !== 0) {
        str = (n % m) + str;
        n = Math.floor(n / m);
    }

    str.split('0').forEach((s) => {
        if (s.length === 0) return;
        if (isPrime(Number(s))) ans++;
    });

    return ans;
}

export function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(solution(110011, 10)); // 120