from itertools import permutations
from scipy.special import factorial

def factorial_model(n, a):
    return factorial(n) * a

def check_sorted(a):
    for i, val in enumerate(a):
        if i > 0 and val < a[i-1]:
            return False
    return True

def permutation_sort(A):
    print (permutations(A)) 
    for attempt in permutations(A):
        print (attempt)
        if check_sorted(attempt):
            A[:] = attempt[:]
            return A

A = [3, 2, 1, 4,23, 423, 11, 23 ]
print (permutation_sort(A))