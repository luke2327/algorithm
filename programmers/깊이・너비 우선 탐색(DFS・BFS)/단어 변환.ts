// 문제 설명
// 두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

// 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
// 2. words에 있는 단어로만 변환할 수 있습니다.
// 예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.

// 두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 각 단어는 알파벳 소문자로만 이루어져 있습니다.
// 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
// words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
// begin과 target은 같지 않습니다.
// 변환할 수 없는 경우에는 0를 return 합니다.

export default function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }
    // 방문 여부를 추적하기 위한 배열 (모든 요소는 0으로 초기화)
    const visited = Array(words.length).fill(0);
    // BFS를 위한 큐 (단어와 변환 횟수를 저장)
    const queue = [[begin, 0]];

    // 큐가 빌 때까지 반복
    while (queue.length) {
        // 큐에서 단어와 변환 횟수를 가져옴
        const [word, count] = queue.shift();

        // 단어가 타겟 단어와 같으면 변환 횟수를 반환
        if (word === target) {
            return count;
        }

        // 단어를 하나씩 비교
        for (let i = 0; i < words.length; i++) {
            // 이미 방문한 단어는 건너뜀
            if (visited[i]) {
                continue;
            }

            // 단어가 얼마나 다른지 확인
            let diff = 0;

            // 단어의 길이만큼 반복
            for (let j = 0; j < word.length; j++) {
                // 다른 글자가 있으면 diff 증가
                if (word[j] !== words[i][j]) {
                    diff++;
                }
            }

            // 다른 글자가 하나인 경우
            if (diff === 1) {
                // 방문 여부를 체크하고 큐에 추가
                visited[i] = 1;
                queue.push([words[i], count + 1]);
            }
        }
    }
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); // 4
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])); // 0