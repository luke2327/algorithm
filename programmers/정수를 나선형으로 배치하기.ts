function solution(n) {
    const answer = Array(n).fill(null).map(() => []);
    let side = n - 1;
    for (let i = 1; i <= n*n; i++) {
        console.log(i);
    }
    return answer;
}

console.log(solution(5));