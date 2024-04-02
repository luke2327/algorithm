export default function solution(n, lost, reserve) {
    lost.sort((a, b) => (a - b))
    reserve.sort((a, b) => (a - b))
    lost.forEach((x, i) => {
        if (reserve.includes(x)) {
            reserve.splice(reserve.indexOf(x), 1);
            lost.splice(i, 1)
        }
    });
    
    var answer = n - lost.length;
    
    lost.forEach(x => {
        if (reserve.includes(x - 1)) {
            reserve.splice(reserve.indexOf(x - 1), 1);
            answer++;
        }
        else if (reserve.includes(x + 1)) {
            reserve.splice(reserve.indexOf(x + 1), 1);
            answer++;
        }
    })
    return answer;
}