vowels = ['a', 'e', 'i', 'o', 'u']
word = input("provide a word to search for vowels in: ")

found = {}

for letter in word:
    if letter in vowels:
        if letter not in found:
            found[letter] = 0
            found[letter] += 1

for k, v in sorted(found.items()):
    print(k, 'was found', v, 'time(s).')
