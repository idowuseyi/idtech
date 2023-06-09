print(range(5)) # only the stop value was set, the starting value is set to 0
print(list(range(5))) # the generated values is put in a list
print(list(range(5, 10))) # the start and stopvalue was set to 5 and 10
print(list(range(0, 10, 2))) # the start value was set to 0 second value the stop or max whilethe third is the increament
print(list(range(10, 0, -2))) # starting with the max, then the stop and a decreament
print(list(range(10, 0, 2))) # if the order was not properly set, nothing happen. An empty list is presented
print(list(range(99, 0, -1))) # start from 99, stop at 0 and decrease by 1