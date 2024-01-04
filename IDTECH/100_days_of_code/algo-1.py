# # a = list(map(int, input().split()))
# c = input("Input a number value ")
# d = []
# d[:] = c
# a = []
# try:
#     for val in range(len(d)):
#         a.append(int(d[val]))
# except:
#     ValueError
#     print("Input a number value only")
#     exit
        
        
# b = []
# i = 0
# while i < len(a):
#     if a[i] == 2 or a[i] == 3:
#         b.append(a[i])
#         a[i] = 0
#     else:
#         i += 1
# print("A =", a)
# print(len(b))


# n = int(input("Number of people on the team"))
# players = {}
# for i in range(n):
#     name = input("Name")
#     size = input("Size")
#     players[name] = size

# name = input("Enter the person's name")
# if name in players:
#     print(players[name])
# else:
#     print("There is no such person on the team")

def make_list(number):
    names = []
    for i in range(number):
        names.append(input("Enter your name with a capital letter. "))
    print(names)
    
number = int(input("How many names need to be entered?"))
names = make_list(number)
for item in names:
    if item [1] == "A":
        print("Name ", item, " starts with A")