export default function solution(N, stages) {
    var answer: any = [];
    const answerObj = {}
    const stagesObj = {}
    stages.sort((a,b) => a-b).forEach((s) => {
        if(stagesObj[s] === undefined)
            stagesObj[s] = 1
        else
            stagesObj[s]++
    });
    for(let i=1; i<=N; i++){
        const failPersent = stagesObj[i] ? stagesObj[i] / stages.length : 0

        stages.splice(0, stagesObj[i]);

        answerObj[i] = failPersent
        
        console.log(failPersent)
    }

    answer = Object.keys(answerObj).sort((a,b) => answerObj[b] - answerObj[a]).map((key) => parseInt(key))
    return answer;
}