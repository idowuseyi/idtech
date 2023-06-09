phrase = "Don't panic!"
plist = list(phrase)
print(phrase)
print(plist)

for i in range(4):
    plist.pop() # plist = Don't pa

plist.pop(0)  # plist = on't pa
plist.remove("'") # plist = ont pa
plist.extend([plist.pop(), plist.pop()])  # plist = ont ap
plist.insert(2, plist.pop(3)) # plist = on tap



new_phrase = ''.join(plist)
print(plist)
print(new_phrase)