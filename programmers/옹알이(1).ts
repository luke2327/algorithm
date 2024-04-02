
/**
 * 
 * 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다.
 * 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
 */
export default function solution(babbling) {
  const word = ['aya', 'ye', 'woo', 'ma'];

  return babbling.map((str) => {
      for (const w of word) {
        console.log(str);
        if (str.includes(w)) {
          str = str.replace(w, ' '); // 빈칸을 주어 wyeoo -> woo 같은 케이스를 방지한다 w oo
        }
      }
      return str;
    }).filter((str) => !str.trim()).length;
}


console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));

// 참고용
function solution2(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach(word => {
    if (regex.test(word)) answer++;  
  })

  return answer;
}