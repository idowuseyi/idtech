'''
set is like a math sets

it has unique values. Different data types or value that are never repeated
set is just like dictionary but we only have values

it can contain many data types
'''

nlist = [1, 2, 2, 5, 3, 4, 5]
print(nlist)
nset = set(nlist)
print(nset)
nset.add(6)
print(nset)
#nset.remove(), .pop(), .clear(), iterate

cset = {6, 7, 3, 9}

union_set = nset.union(cset)
print(union_set)

intersection_set = nset.intersection(cset)
print(intersection_set)
diff = nset.difference(cset)
#return element(s) in the first set not in the second set
print(diff)

adiff = nset.symmetric_difference(cset)
# return a set with all the elements in both a and b that are not in both set
print(adiff)

subs = nset.issubset(cset)
#if all the elent of the first set is contained in the second return true or false
print(subs)

supset = nset.issuperset(cset)
#if first set contains all the elent in the second
print(supset)

disjoint_set = nset.isdisjoint(cset)
#returns true or false if set a and be has no union
print(disjoint_set)
#we can update our set with update
#nset.intersection_update(cset)
'''
1256
x[2]['bar']['z']
'''

x = ['a', 'b', {'foo': 1, 'bar': {'x': 10, 'y': 20, 'z': 30}, 'baz': 3}, 'c', 'd']
print(x)

#always use the .copy or set(original) to copy

# a frozen set is immutable
# remove, add, etc will not work but union and others will