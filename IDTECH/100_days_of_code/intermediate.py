from timeit import default_timer as timer

""" We are jumping many things to start from set
"""
    
# myset = set() # To declare a new set If we make it just two braces it will be a tuple.
# set is mutable, we can add, remove, discar, clear, 
# pop removes and return the element removed
# myset.add(1)
# myset.add(2)

# myset.discard(1)
# myset.remove(3) # if not present it gives key error

# we can iterate, check membership

odds = {1, 3, 5, 7, 9}
evens = {0, 2, 4, 6, 8}
primes = {2, 3, 5, 7}

uNion = odds.union(evens)
# print(uNion)

i = evens.intersection(primes)
# print(i)

# difference  returns all element from the first not in the second
diff = odds.difference(evens)
# print(diff)

# symetric difference returns set containing the items in the union of the two set
syDiff = odds.symmetric_difference(primes)
# print(syDiff)
# union, intersection & difference does not modify the set in place

# we can update a set with another set, it add the element from the set that are not already present in the set
odds.update(evens)
# print(odds)

# interception_update update only the element that intersect with the set passed in
odds.intersection_update(evens)
# print(odds)
# we can also have difference_update, symetric_difference_update
# we can also check subset or superset, disjoint check if they dont have any element in common, .copy is what can be use to copy a set.
# frozenset is an immutable form of a set. You cannot update but you can see difference or subset but update is not allowed.

# STRING : ordered, immutable, text representation
# we can access a character at an index but cannot reassign. We can slice, concatenate, loop through
# we can check a sub string or sub char using the membership operator
# spaces are part of a string, can be removed with strip

my_string = "Hello World"
my_string = my_string.strip()
# print(my_string)
# to make it mutable we have to reassign it
# We can convert to upercase or lower, check if it starts with a particular char, or ends with another, fidn the index of a char/substring if it doesn't find it returns -1
# we can check the no of occurence of a char or substr. We can repalce a word or string - it returns a new string. if it doesn't find the string it does nothing.
# We can convert to a list with split - d default delimeter is a space but we can set the delimeter, we can reverse this with .join
 
# my_string = 'how,are,you,doing'
# my_list = my_string.split(",")
# print(my_list)
# new_string = ' '.join(my_list)
# print(new_string)


my_list = ['a'] * 1000000
# print(my_list)

# Bad python Code - very expensive operation
# start = timer()
# my_string = ''
# for i in my_list:
#     my_string += i
# stop = timer()
# print(stop - start)

# Good python code
# start = timer()
# my_string = ''.join(my_list)
# stop = timer()
# print(stop - start)


# STRING FORMATING the Old and the new
# %s/d/f, .format(), f-Strings

var = "Tom"
# my_string = "the variable is %s" % var
# print(my_string)

var2 = 100
my_string = "{} variable is {}".format(var, var2)

var1 = 3.14273
my_string = "{} variable is {:.2f}".format(var, var1)
my_string = f"{var} variable is {var1*2}"

# print(my_string)


# COLLECTIONS works with all iterables
# Collections: Counter, namedtuple, OrderedDict, defaultdict, deque

from collections import Counter
a = "aaaabbbbcccc"
my_counter = Counter(a)

# print(my_counter.items())
# print(my_counter.most_common(2)[0][0])
# print(list(my_counter.elements()))

from collections import namedtuple
point = namedtuple("point", "x,y")
pt = point(1, -4)
# print(pt.x, pt.y)

from collections import OrderedDict # OrderedDict are like normal dictionary but it remeber the order of the items
# But since python 3 dictionary are now ordered.

# ordered_dict = OrderedDict()
ordered_dict = {}
ordered_dict["d"] = 2
ordered_dict["b"] = 2
ordered_dict["c"] = 2
ordered_dict["a"] = 2
print(ordered_dict)

from collections import defaultdict # we can set a type and if a key not present is assesed it will return a default value of that type e.g if we say int d value for a key not present is 0
