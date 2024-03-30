import sys

print(sys.getsizeof(range(100)))

print(sys.getsizeof(range(1000)))

print(sys.getsizeof(range(10000)))

print(sys.getsizeof(list(range(100000))))

print(sys.getsizeof(list(range(1000000))))

print(sys.getsizeof(list(range(10000000))))

print(sys.getsizeof(list(range(100000000))))