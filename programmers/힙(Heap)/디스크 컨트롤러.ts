export default function solution(jobs: number[][]): number {
    let total = 0;
    let now = 0;
    let queue = [];
    const jobsLength = jobs.length;
    
    // Sort jobs by request time
    jobs.sort((a, b) => a[0] - b[0]);
    
    while (jobs.length > 0 || queue.length > 0) {
        if (jobs.length > 0 && now >= jobs[0][0]) {
            queue.push(jobs.shift());
            queue.sort((a, b) => b[1] - a[1]);
            console.log('QUEUE', queue)
            continue;
        }
        
        if (queue.length > 0) {
            let [start, work] = queue.pop();
            console.log('BEFORE NOW', now, start, work)
            now += work;
            total += now - start;
            console.log('NOW', now, 'TOTAL', total)
        } else {
            now = jobs[0][0];
            console.log(1);
        }

        console.log(queue, now);
    }
    
    return Math.floor(total / jobsLength);
}

export function solution2(jobs) {
    jobs.sort(([a, b], [c, d]) => a - c || b - d);
    const waiting = [];
    const count = jobs.length;
    let processed_time = 0;
    let time = 0;
    while (jobs.length + waiting.length) {
        let in_process;
        while (jobs.length && (jobs[0][0] <= time)) {
            waiting.push(jobs[0] && jobs.shift());
        }
        if (waiting.length) {
            in_process = waiting.sort(([a, b], [c, d]) => b - d || a - c).shift();
        } else {
            in_process = jobs.shift();
            time = in_process[0];
        }
        time += in_process[1];
        processed_time += time - in_process[0];
    }
    return Math.floor(processed_time / count);
}

console.log(solution([[0, 3], [1, 9], [2, 6]])); // 9