from itertools import accumulate
import random
from timeit import default_timer as timer

d = []
for i in range(100):
    d.append(random.randint(1, 100000000000))
    
def addList(x):
    sum = 0
    for i in range(len(x)):
        sum = sum + x[i]
    return sum

def listAddition(l):
    sum = 0
    for number in l:
        sum = sum + number
    return sum

def accList(l):
    acc = accumulate(l)
    return (list(acc))[-1]


start = timer()
print(addList(d))
stop = timer()
print(stop - start)

start = timer()
print(listAddition(d))
stop = timer()
print(stop - start)

start = timer()
print(accList(d))
stop = timer()
print(stop - start)
