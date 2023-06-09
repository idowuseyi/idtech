'''same file i/o operation in different methods'''

tasks = open('todos.txt')
for chore in tasks:
    print(chore, end='')
tasks.close()



with open('todos.txt') as tasks:
    for chore in tasks:
        print(chore, end='')

