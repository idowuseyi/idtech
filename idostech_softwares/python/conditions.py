#character input check

name = input('Enter your name ')

if len(name) < 3:
    print("name must be at least 3 characters")
elif len(name) > 50:
    print("name can only a maximum of 50characters")
