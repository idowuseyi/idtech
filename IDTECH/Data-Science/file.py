# file = open('data.csv').read()

# fitzzy = open('C:/Users/IDOS-TECH/Documents/data.csv').read()

# # print(file)
# print(fitzzy)


temp2 = open('C:/Users/IDOS-TECH/Documents/ftemps.txt', 'w')
temperatures = [line.strip() for line in open('C:/Users/IDOS-TECH/Documents/temps.txt')]
# print(temperatures)
for t in temperatures:
    print(int(t)*9/5+32, file=temp2)
temp2.close()

newTemp = open('C:/Users/IDOS-TECH/Documents/ftemps.txt').read()
print(newTemp)

