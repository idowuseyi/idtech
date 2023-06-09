phrase = "Don't panic!"
plist = list(phrase)
print(phrase)
print(plist)

new_phrase1 = plist[1:3]
new_phrase1 += plist[5]
new_phrase1 += plist[4]
new_phrase1 += plist[-5:-7:-1]
new_phrase = ''.join(new_phrase1)
print(plist)
print(new_phrase)