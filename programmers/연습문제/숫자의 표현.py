def solution(n):
    
    # 결과값을 1로 설정(자기 자신의 수를 말함)
    # 예) 15 = 15 또한, 한 개의 표현
    result = 1
    
    # 1부터 n의 절반까지 순회
    # 연속된 자연수들의 합이 n을 초과하는 경우는 고려하지 않아도 되기 때문
    for i in range(1, n//2 + 1):
        
        # 각 반복에서의 연속된 자연수들의 합을 저장할 변수를 0으로 초기화
        total = 0
        
        # 연속된 자연수들을 더하는 동안 그 합이 n보다 작은 경우에는 계속 반복
        while total < n:
            
            total += i
            
            # total 값이 n과 같다면 결과값을 1 증가시키고, 이 반복문을 종료
            if total == n:
                result += 1
                break
            
            i += 1 # 다음 연속된 자연수로 넘어갑니다.
            
    return result

print(solution(15))