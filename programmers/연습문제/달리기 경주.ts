// 문제 설명
// 얀에서는 매년 달리기 경주가 열립니다. 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다.
// 예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때, 해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다.
// 즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.

// 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때,
// 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.

// 제한사항
// 5 ≤ players의 길이 ≤ 50,000
// players[i]는 i번째 선수의 이름을 의미합니다.
// players의 원소들은 알파벳 소문자로만 이루어져 있습니다.
// players에는 중복된 값이 들어가 있지 않습니다.
// 3 ≤ players[i]의 길이 ≤ 10
// 2 ≤ callings의 길이 ≤ 1,000,000
// callings는 players의 원소들로만 이루어져 있습니다.
// 경주 진행중 1등인 선수의 이름은 불리지 않습니다.

export default function solution(players, callings) {
    var answer = [];

    // 1)
    let obj = {}
    // 2)
    players.forEach((e, i)=> {
        obj[e] = (obj[e] |0) + i
    })

    console.log(obj)

    // 3)
    for(let i=0; i<callings.length; i++) {
        // 4)
        let player_index = obj[callings[i]];

        if(player_index > 0 && player_index != undefined) {

            // 5)
            // players 배열 변경
            let temp = players[player_index -1]; // 앞의 값을 temp에 담기
            players[player_index -1] = players[player_index]; // 현재 값을 앞의 값에 넣기
            players[player_index] = temp; // temp 값을 현재 값에 넣기

            // 6)
            // players를 찾기 위한 obj 객체 값도 바뀐대로 변경
            // ["mumu", "soe", "poe", "kai", "mine"]  ->  { mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4 }
            // ['mumu', 'soe', 'kai', 'poe', 'mine']  ->  { mumu: 0, soe: 1, poe: 3, kai: 2, mine: 4 }
            obj[players[player_index -1]] =  player_index -1;
            obj[players[player_index]] = player_index;
            console.log(players);
            console.log('player_index: ', player_index)
            console.log('obj', obj)

            console.log('\n')
        }
    }

    // 7)
    answer = players;

    return answer;
}

console.log(solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"])) // 