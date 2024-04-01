def binary_array_search(A, target):
    lo = 0
    hi = len(A) - 1

    while lo <= hi:
        mid = (lo + hi) // 2

        if target < A[mid]:
            hi = mid -1
        elif target > A[mid]:
            lo = mid + 1
        else:
            return mid + 1
    return False


print(binary_array_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)) # True