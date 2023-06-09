paranoid_android = "Marvin, the Paranoid Android"
letters = list(paranoid_android)
for char in letters[:6]:
    print('\t', char)
print()
for char in letters[-7:]:
    print('\t'*2, char)
print()
for char in letters[12:20]:
    print('\t'*3, char)

"""
Lists understand the square bracket notation,
which can be used to select individual objects
from any list.
  Like a lot of other programming languages,
Python starts counting from zero, so the first
object in any list is at index location 0, the
second at 1, and so on.
  Unlike a lot of other programming languages,
Python lets you index into a list from either end.
Using –1 selects the last item in the list, –2 the
second last, and so on.
  Lists also provide slices (or fragments) of a list
by supporting the specification of start, stop,
and step as part of the square bracket notation

"""