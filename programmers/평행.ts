export default function solution(dots) {
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;

    console.log((x1 - x2) / (y1 - y2), (x3 - x4) / (y3 - y4))

    if ((x1 - x2) / (y1 - y2) === (x3 - x4) / (y3 - y4)) {
        return 1;
    } else if ((x1 - x3) / (y1 - y3) === (x2 - x4) / (y2 - y4)) {
        return 1;
    } else if ((x1 - x4) / (y1 - y4) === (x2 - x3) / (y2 - y3)) {
        return 1;
    }
}

console.log(solution([[1, 4], [9, 2], [3, 8], [11, 6]]))