# unpacking
'''
coordinates = (5, 6, 2, 1, 2)
x, y, *z = coordinates
print(x, y, z)
i1, i2, *i3 = coordinates
print(i1, i2, i3)

if 1 in coordinates:
    print("yes")
else:
    print("No")
'''
#print(coordinates.index(5))

import sys
import timeit
#tuple are more efficient than list in both space and time complexity
my_list = [4, 5, 6, "me", "you"]
my_tuple = (4, 5, 6, "me", "you")
print(sys.getsizeof(my_list), "bytes")
print(sys.getsizeof(my_tuple), "bytes")

print(timeit.timeit(stmt="[0, 1, 2, 3, 4, 5]", number=1000000))
print(timeit.timeit(stmt="(0, 1, 2, 3, 4, 5)", number=1000000))