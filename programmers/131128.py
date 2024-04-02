from collections import Counter


def solution(X, Y):
    # 각 숫자 등장 횟수 카운트
    x_cnt = Counter(map(int, X))
    y_cnt = Counter(map(int, Y))

    # 숫자를 중복 제거후 내림차 정렬함
    common_keys = sorted(set(x_cnt.keys()) & set(y_cnt.keys()), reverse=True)

    print(common_keys, x_cnt.keys())
    print (y_cnt)

    # 짝궁이 존재 하지 않는 다면 -1 하나만 존재 하면 해당 숫자 리턴
    if not common_keys:
        return "-1"
    elif len(common_keys) == 1:
        return str(common_keys[-1])

    # 각 숫자가 등장한 횟수 만큼 숫자를 출력함
    answer = "".join(str(key) * min(x_cnt[key], y_cnt[key]) for key in common_keys)
    return answer

solution('42012', '123123999')