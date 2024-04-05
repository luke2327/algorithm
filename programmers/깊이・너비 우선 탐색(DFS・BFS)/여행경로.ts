// 문제 설명
// 주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다.

// 항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 모든 공항은 알파벳 대문자 3글자로 이루어집니다.
// 주어진 공항 수는 3개 이상 10,000개 이하입니다.
// tickets의 각 행 [a, b]는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미입니다.
// 주어진 항공권은 모두 사용해야 합니다.
// 만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
// 모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.
// 입출력 예
// tickets	return
// [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]	["ICN", "JFK", "HND", "IAD"]
// [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]	["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]

// DFS 를 사용해서 풀이하였습니다.

// 1. 사용한 티켓이거나 출발지가 다른 경우 X
// 2. 사용하지 않은 티켓이고 출발지가 동일한 경우
//    - 다음 출발지 순회
//    - 만약 모든 티켓을 사용완료했다면, 경로 저장
//    - 이전 노드로 되돌아갈 경우, 해당 노드의 값으로 돌아가게끔 코드를 구성하였습니다.
// 3. 문자열로 join 한 뒤 정렬해서 index 값을 구함
// 4. 정답 반환

export default function solution(tickets: string[][]): string[] {
  const visited = new Array(tickets.length).fill(false);
  const startAirport = "ICN";
  const paths = [];

  const dfs = (visited, stopover, paths) => {
    // 모든 티켓을 사용한 경우, 경유지 반환
    if (
      stopover.length === tickets.length + 1) {
      paths.push([...stopover]);
    }
    for (let i = 0; i < tickets.length; i++) {
      const [from, to] = tickets[i];
      const located = stopover[stopover.length - 1];

      // 사용한 티켓이거나, 시작 위치가 다른 경우 다음 스텝으로 진행
      if (visited[i] || located !== from) {
        continue;
      }

      visited[i] = true;
      stopover.push(to);

      dfs(visited, stopover, paths);

      // 재귀함수가 완료되면 이전 노드 상태로 초기화
      visited[i] = false;
      stopover.pop();
    }

    return paths;
  };

  dfs(visited, [startAirport], paths);
  return paths.sort((a, b) => a.toString().localeCompare(b.toString()))[0];
}

console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]])); // ["ICN", "JFK", "HND", "IAD"]
console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]));