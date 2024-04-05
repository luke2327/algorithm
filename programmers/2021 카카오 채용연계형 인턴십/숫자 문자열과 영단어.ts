function solution(s) {
    const collections = {
        0 : "zero",
        1 : "one",
        2 : "two",
        3 : "three",
        4 : "four",
        5 : "five",
        6 : "six",
        7 : "seven",
        8 : "eight",
        9 : "nine",
    };

    const regex = new RegExp(Object.values(collections).join('|'), 'g');

    return Number(s.replace(regex, (match) => Object.keys(collections).find(key => collections[key] === match)));
}

console.log(solution("one4seveneight")); // 1478

// 다른 사람의 풀이
export function solution2(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}