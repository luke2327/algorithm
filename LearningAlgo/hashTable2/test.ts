const x = '12345';

function reverseArray(arr: number[]): number[] {
  return arr.reverse();
}

export default function solution(ingredient) {
    let cnt = 0;
    const take = (str = ingredient.join('')) => {
        if (str.includes('1231')) {
            cnt++;
            take(str.replace('1231', ''));
        }
        
        return;
    }
    
    take();
    
    let str = ingredient.join('');
    
    while(str.includes('1231')) {
        ++cnt;
        str = str.replace('1231', '')
    }
    
    return cnt;
}