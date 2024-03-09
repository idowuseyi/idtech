# function that search if a given paramenter is part of a given list

from pyparsing import deque
from timeit import default_timer as timer

def searchItem(a, lst=[]):
    d = deque(lst)
    for i in range(len(lst)):
        if a == d[0]:
            print("found")
            return d[0]
        else:
            d.rotate(-1)
    return "not found"
        
        
def searchItem2(a, lst=[]):
    for i in range(len(lst)):
        if a == lst[i]:
            print("found")
            return lst[i]
    return "Not found"


def searchItem3(a, lst=[]):
    for val in lst:
        if val == a:
            print("found")
            return val
    return "Not found"



start = timer()
print(searchItem(5, [1,2,4,5,8,10,21,34,23,35,56,45,76,67,78]))
stop = timer()
print(stop - start)

start = timer()
print(searchItem2(5, [1,2,4,5,8,10,21,34,23,35,56,45,76,67,78]))
stop = timer()
print(stop - start)

start = timer()
print(searchItem3(5, [1,2,4,5,8,10,21,34,23,35,56,45,76,67,78]))
stop = timer()
print(stop - start)
