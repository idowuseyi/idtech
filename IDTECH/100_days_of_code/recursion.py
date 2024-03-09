from timeit import default_timer as timer

# RECURSION 

def triRecurse2(k):
    if (k > 0):
        result = k + triRecurse2(k-1)
        # print(result)
    else:
        result = 0
    return result


def triRecurse1(k):
    result1 = 0
    for number in range(k+1):
        result1 += number
        # print(result1)
    return result1

start = timer()
print(triRecurse2(900))
stop = timer()
print(stop - start)

start = timer()
print(triRecurse1(900))
stop = timer()
print(stop - start)
