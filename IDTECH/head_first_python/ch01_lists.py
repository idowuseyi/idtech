# vowels = ['a', 'e', 'i', 'o', 'u']
# word = input("Enter any word: ")
# print("The vowel in '",word,"'include")
# for letter in set(word):
#     if letter in vowels:
#         print(letter)

vowels = ['a', 'e', 'i', 'o', 'u']
word = input("Enter any word: ")
found = []
print("The vowel in '",word,"'include")
for letter in word:
    if letter in vowels:
        if letter not in found:
            found.append(letter)

for vowel in found:
    print(vowel)

# append method -at element to a list end
# remove method - remove a specific value supplied as argument ifnot found raise an error
# pop method - removes an object from an existing list based on objects index value. if index not specified, the last elemet is removed and returned. raise error is not found
                # object from pop can be assigned to a variable and its memory retained or versa
# extend combines two list into one, takes a list a arg, if empty do nothing but append will
# insert - insert element before and index. takes the value and index as argument