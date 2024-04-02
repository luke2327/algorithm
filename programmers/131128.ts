export default function solution(X, Y) {
    let answer = '';
    const xArr = X.split('');
    const yArr = Y.split('');
    const yObj = {}
    
    xArr.sort((a,b)=>b-a);
    
    yArr.forEach(x => {
        if (yObj[x]) {
            yObj[x]++;
            
            return;
        }
        
        yObj[x] = 1;
    });
    
    xArr.forEach(x => {
        console.log(x);
        
        if (yObj[x]) {
            answer += x
            
            yObj[x]--;
        }
    });
    
    if (answer === '') return "-1";
    else if (answer[0] === '0') return '0';
    
    return answer;
}

export function solution2(X, Y) {
    let answer = '';
    const arrX = X.split('')
    const arrY = Y.split('')
    const yObj = {}

    arrX.sort((a,b)=>b-a)

    arrY.forEach((y)=>{
        if(yObj[y] === undefined)
            yObj[y] = 1
        else
            yObj[y]++
    })

    arrX.forEach(x=>{
        if(yObj[x] !== undefined && yObj[x] !== 0){
            yObj[x]--
            answer = answer.concat(x)
        }
    })

    if(answer.length === 0)
        return "-1"
    if(answer[0] === "0")
        return "0"
    return answer
}