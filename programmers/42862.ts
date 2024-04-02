export default function solution(n, lost, reserve) {
    let answer = 0;
    let lost_filter;
    let reserve_filter;

    // 1) 2)
    lost_filter = lost.filter(e => !reserve.includes(e)).sort((a, b)=> a-b)
    // 1) 2)
    reserve_filter = reserve.filter(e => !lost.includes(e)).sort((a, b)=> a-b)

    for(let i=0; i<lost_filter.length; i++) {
        for(let j=0; j<reserve_filter.length; j++) {
            // 3)
            if(lost_filter[i]-1 == reserve_filter[j] || lost_filter[i]+1 == reserve_filter[j]) {
                // 4)
                lost_filter.shift();
            }
        }
    }

    // 5)
    answer = n - lost_filter.length;

    return answer;
}