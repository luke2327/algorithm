// 문제 설명
// Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15
// 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

// 제한사항
// n은 10,000 이하의 자연수 입니다.

export default function solution(n) {
    let half = Math.round(n / 2);
    let mid = 0;
    let answer = 1; // 자기 자신

    for (let i = half; i > 0; i--) {
        for (let j = i - 1; j > 0; j--) {
            if (i + j + mid === n) {
                answer++;
                break;
            }
            mid += j;
        }

        mid = 0;
    }

    return answer;
}

export function solution2(n) {
    // 자기 자신의 수도 연속된 수로 포함하기에 자신의 수를 미리 더한 상태에서 시작 
    let answer = 1;

    for(let i=1; i<=n/2; i++) {
        let sum = 0;
        let k = i;

        while(sum < n) {
            sum += k;
            k++

            if(sum == n) {
                answer += 1;
                break; // break 문으로 빠져나와야 필요없는 연산을 줄일 수 있다.
            }
        }
    }

    return answer;
}

export function solution3(n) {
    let answer = 1;
    let sum = 1;

    for (let i = 2; i <= n; i++) {
        sum += i;

        let x = n - sum;

        if (x < 0) {
            break;
        }
        if (n % i === 0) {
            answer += 1;
        }
    }

    return answer;
}

export function solution4(n) {
    var answer = 0;
    let  i = 0;
    while(n > 0){
        i++;
       if(n % i  === 0)  answer++;
        n -= i;
    }
    return answer;
}

console.log(solution2(15)); // 4
console.log(solution(15)); // 4
console.log(solution3(15)); // 4
console.log(solution4(1000000000)); // 4