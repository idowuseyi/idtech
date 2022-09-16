# This program takes user input weight and convert it to the other unit

weight = int(input('Input your weight: '))

weight_unit = input("(L)bs or (K)g: ")

if weight_unit == L or l:
    weight /= 2.2
    print(f"You are {weight} kg ")
elif weight_unit == K or k:
    weight *= 2.2
    print(f"You are {weight} pounds")
else:
    print("Input the right weight unit")