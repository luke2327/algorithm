class LinkedEntry:
    def __init__(self, key, value, rest = None):
        self.key = key
        self.value = value
        self.next = rest

class HashTable:
    def __init__(self, M = 10):
        self.table = [None] * M
        self.M = M
        self.N = 0
    
    def get(self, k):
        hc = hash(k) % self.M
        entry = self.table[hc]

        while entry:
            if entry.key == k:
                return entry.value
            entry = entry.next
        return None
    
    def put(self, k, v):
        hc = hash(k) % self.M
        print(hc)
        entry = self.table[hc]

        while entry:
            if entry.key == k:
                entry.value = v
                return
            entry = entry.next

        self.table[hc] = LinkedEntry(k, v, self.table[hc])
        self.N += 1

h = HashTable()
h.put('a', 1)
h.put('b', 2)
h.put('c', 3)
h.put('d', 4)
h.put('e', 5)
h.put('f', 6)

print(h.get('a'))
print(h.get('b'))
print(h.get('c'))
print(h.get('d'))
print(h.get('e'))
print(h.get('f'))