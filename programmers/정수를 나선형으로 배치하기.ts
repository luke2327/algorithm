export default function solution(n) {
    let answer: any[] = Array(n).fill(null).map(() => []);
    const dx = [1,0,-1,0];
    const dy = [0,1,0,-1];

    let [x, y] = [0, 0];
    let direction = 0;

    for (let i = 1; i <= n*n; i++) {
        answer[y][x] = i;

        const [nx, ny] = [x + dx[direction], y + dy[direction]];

        if (nx < 0 || nx >= n || ny < 0 || ny >= n || answer[ny][nx]) {
            direction = (direction + 1) % 4;
            x += dx[direction];
            y += dy[direction];

            console.log('x, y', x, y)
        } else {
            console.log('nx, ny', nx, ny)
            x = nx;
            y = ny;
        }
    }

    return answer;
}

console.log(solution(5));