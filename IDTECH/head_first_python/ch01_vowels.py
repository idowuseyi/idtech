# vowels = ['a', 'e', 'i', 'o', 'u']
# word = input("Enter any word: ")
# print("The vowel in '",word,"'include")
# for letter in set(word):
#     if letter in vowels:
#         print(letter)


vowels = ['a', 'e', 'i', 'o', 'u']
word = input("provide a word to search for vowels: ")
found = []
for letter in word:
    if letter in vowels:
        if letter not in found:
            found.append(letter)
for vowel in found:
    print(vowel)