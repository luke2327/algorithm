/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 12865                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: qwepoi8526 <boj.kr/u/qwepoi8526>            +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/12865                          #+#        #+#      #+#    */
/*   Solved: 2024/04/03 15:24:30 by qwepoi8526    ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

let [info, ...packInfo]: any = `4 7
6 13
4 8
3 6
5 12`.split('\n');
const [N, K] = info.split(' ').map(Number);
packInfo = packInfo.map((v) => v.split(' ').map(Number));

export default function solution() {
    // 2차원 배열 dp를 만들어준다.
    const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

    for (let i = 1; i <= N; i++) {
        const [W, V] = packInfo[i - 1];
        console.log('W, V', W, V);
        for (let j = 1; j <= K; j++) {
            console.log('I', i, 'J', j);
            if (j < W) {
                dp[i][j] = dp[i - 1][j];
            } else {
                console.log(`dp[${i} - 1][${j}]`, dp[i - 1][j], `dp[${i} - 1][${j} - ${W}] + ${V}`, dp[i - 1][j - W] + V)
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - W] + V);
            }

            console.log(`dp[${i}][${j}]`, dp[i][j])
        }

        console.log('\n');
    }

    console.log('Final N, K', N, K);
    console.log('Final DP', dp);

    return dp[N][K];
}

console.log(solution())