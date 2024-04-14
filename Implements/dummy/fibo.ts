const arr = Array(200).fill(0);

let cntDP = 0;

function fibo(n) {
    if (n <= 1) {
        return n;
    }

    cntDP++;
    
    if (arr[n] !== 0) {
        return arr[n];
    }
    
    arr[n] = fibo(n - 1) + fibo(n - 2);
    return arr[n];
}

function fiboBottomUp(n) {
    const arr = Array(n + 1).fill(0);
    arr[1] = 1;

    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[n] % 1234567;
}

let cntNonDP = 0;

function fiboNonDP(n) {
    if (n <= 1) {
        return n;
    }

    cntNonDP++;

    return fiboNonDP(n - 1) + fiboNonDP(n - 2);
}

console.log(fibo(5), cntDP);
console.log(fiboBottomUp(10));