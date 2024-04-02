export default function solution(t, p) {
    var answer = [];
    for(var i =0; i < t.length - p.length +1; i++){
        console.log(i,p.length)
       answer.push(t.substr(i,p.length));
    }
    console.log(answer)
    answer = answer.filter(a=>a<=parseInt(p));
    return answer.length;
}

console.log(solution("3141592", "271"))
console.log(solution("500220839878",	"7"))