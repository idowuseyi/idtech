from timeit import default_timer as timer

#strings are unordered and immutable
#almost all this are same
my_string = 'Hello world'
my_string1 = "Hello world"
my_string2 = "H'ello world"
my_string3 = """Hello 
            world"""
my_string5 = """Hello / 
            world"""
'''
# we can index to get char
# we can slice to get a new string,
# we can concatenate, loop, check if a char is present
# methods with string
.strip() removes empty/white spaces spaces
.upper, .lower, startwith, endswith, return true or false
.find return the first index and -1 if not found.
.count(), replace()
dont forget string is immutable
'''

my_string4 = "How are you doing"
my_list = my_string4.split(" ")
print(my_list)

nstring = ' '.join(my_list)
print(nstring)

mlist = ['a'] * 1000000
#print(mlist)

#bad
start = timer()
clist = ''
for i in mlist:
    clist += i
stop = timer()
print(stop-start)

#good
start = timer()
clist = ''.join(mlist)
stop = timer()
print(stop-start)

'''
string formatting. 1. %s, .format(), f-strings
'''
