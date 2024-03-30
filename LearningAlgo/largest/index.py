def largest(A):
    max = A[0]
    for i in range(1, len(A)):
        if A[i] > max:
            max = A[i]
    return max

print(largest([2,4,1,2,3,9,3]))

def alternate(A):
    for v in A:
        v_is_largest = True
        for u in A:
            if u > v:
                v_is_largest = False
                break
        if v_is_largest:
            return v

    return None

print(alternate([2,4,1,2,3,9,3]))