# word = "bottles" # assign the string bottle to a variable named word
# for beer_num in range(99, 0, -1): # a range is set
#     print(beer_num, word, "of beer on the wall.") #for each value in the range, the value followed by the value of var word and a strign is printed
#     print(beer_num, word, "of beer.")
#     print("Take one down.")
#     print("Pass it around.") # each of the print is achieved as part of a suite
#     if beer_num == 1: # a condition to check when the valuecomes down to 1
#         print("No more bottles of beer on the wall.")
#     else:
#         new_num = beer_num - 1 # a new value is set
#         if new_num == 1: 
#             word = "bottle" # another string assignto word if the condition is met
#         print(new_num, word, "of beer on the wall.") # this is finally printed once all the condition is fulfilled as the final word
#     print() # this block is printed for spacing at the end of each loop. 

word = "green bottles"
for bottle_num in range(99, 0, -1):
    print(bottle_num, word, "standing on the wall.")
    #print(bottle_num, word, "standing on the wall.")
    print("If one green bottle.")
    print("Fall unexpectedly.")
    if bottle_num == 1:
        print("No more green bottles standing on the wall.")
    else:
        bottle_num = bottle_num - 1
        if bottle_num == 1:
            word = "green bottle"
        print(bottle_num, word, "standing on the wall.")
    print()