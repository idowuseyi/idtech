word = "nothing"
wlist = list(word)

for i in wlist:
    wlist.extend(wlist.pop())

print(wlist)