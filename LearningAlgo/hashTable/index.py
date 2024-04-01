class Entry:
    def __init__(self, k, v):
        self.key = k
        self.value = v

class HashTable:
    def __init__(self, M = 10):
        self.table = [None] * M
        self.M = M
        self.N = 0
    
    def get(self, k):
        hc = hash(k) % self.M
        while self.table[hc]:
            if self.table[hc].key == k:
                return self.table[hc].value
            hc = (hc + 1) % self.M
        return None
    
    def put(self, k, v):
        hc = hash(k) % self.M
        while self.table[hc]:
            if self.table[hc].key == k:
                self.table[hc].value = v
                return
            hc = (hc + 1) % self.M
        
        if self.N >= self.M - 1:
            raise Exception('Table is full')
        
        self.table[hc] = Entry(k, v)
        self.N += 1

h = HashTable()

h.put('asdfasdfasa', 1)
h.put('asdfasdfsfb', 1)

print(h.get('a'))
