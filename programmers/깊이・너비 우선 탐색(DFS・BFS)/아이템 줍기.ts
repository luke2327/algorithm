function solution(rectangle: number[][], characterX: number, characterY: number, itemX: number, itemY: number): number {
    // Create a 2D array to represent the map
    const map = Array(51).fill(0).map(() => Array(51).fill(0));

    // Mark the rectangles on the map
    rectangle.forEach(([lx, ly, rx, ry]) => {
        for (let i = lx; i <= rx; i++) {
            for (let j = ly; j <= ry; j++) {
                map[i][j] = 1;
            }
        }
    });

    // Use BFS to find the shortest path from character to item
    const queue = [[characterX, characterY, 0]];
    const visited = Array(51).fill(0).map(() => Array(51).fill(false));
    visited[characterX][characterY] = true;

    while (queue.length > 0) {
        const [x, y, dist] = queue.shift() as number[];

        // If we reach the item, return the distance
        if (x === itemX && y === itemY) {
            return dist;
        }

        // Check all 4 directions
        const dx = [-1, 0, 1, 0];
        const dy = [0, 1, 0, -1];
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            // If the next position is within the map, on the rectangle border and not visited yet, add it to the queue
            if (nx >= 1 && nx <= 50 && ny >= 1 && ny <= 50 && map[nx][ny] === 1 && !visited[nx][ny]) {
                queue.push([nx, ny, dist + 1]);
                visited[nx][ny] = true;
            }
        }
    }

    // If there is no path to the item, return -1
    return -1;
}

console.log(solution([[1, 1, 7, 4], [3, 2, 5, 5], [4, 3, 6, 9], [2, 6, 8, 8]], 1, 3, 7, 8)); // 17

// 입출력 예
// rectangle	characterX	characterY	itemX	itemY	result
// [[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]]	1	3	7	8	17
// [[1,1,8,4],[2,2,4,9],[3,6,9,8],[6,3,7,7]]	9	7	6	1	11
// [[1,1,5,7]]	1	1	4	7	9
// [[2,1,7,5],[6,4,10,10]]	3	1	7	10	15
// [[2,2,5,5],[1,3,6,4],[3,1,4,6]]	1	4	6	3	10