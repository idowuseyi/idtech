'''
We can use constructor function to define what happens when our class is called
a class is also called a type
'''

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def move(self):
        print('move')

    def draw(self):
        print('draw')


point = Point(10, 20)
print(point.x)


'''
class class
#for a method
    def __init__(self, name):
        self.name = name
        
        
    def method():
        body
'''
class Person:
    def __int__(self, name):
        self.name = name

    def talk(self):
        print("talk")

john = Person("John Smith")
print(john.name)
john.talk()