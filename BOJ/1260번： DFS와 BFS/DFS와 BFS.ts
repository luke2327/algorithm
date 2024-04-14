/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1260                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: qwepoi8526 <boj.kr/u/qwepoi8526>            +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1260                           #+#        #+#      #+#    */
/*   Solved: 2024/04/03 14:08:04 by qwepoi8526    ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

export default function solution(input: string[]) {
    const [N, M, V] = input.shift().split(' ').map(Number);
    const graph = Array.from({ length: N + 1 }, () => []);
    for (const edge of input) {
        const [a, b] = edge.split(' ').map(Number);
        graph[a].push(b);
        graph[b].push(a);
    }
    graph.forEach(v => v.sort((a, b) => a - b));
    const dfs = (v: number, visited: boolean[]) => {
        visited[v] = true;
        process.stdout.write(v + ' ');
        for (const next of graph[v]) {
            if (!visited[next]) {
                dfs(next, visited);
            }
        }
    }
    const bfs = (v: number, visited: boolean[]) => {
        const queue = [v];
        visited[v] = true;
        while (queue.length) {
            const current = queue.shift();
            process.stdout.write(current + ' ');
            for (const next of graph[current]) {
                if (!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                }
            }
        }
    }
    dfs(V, Array(N + 1).fill(false));
    bfs(V, Array(N + 1).fill(false));
}