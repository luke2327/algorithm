
/**
 * 에라토스테네스의 체
 * @param n 1 이상 100,000 이하인 자연수
 */

export default function solution(n: number) {
    const primes = Array(n + 1).fill(true);
    primes[0] = false;
    primes[1] = false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }
    return primes.filter(Boolean).length;
}

console.log(solution(100)); // 4