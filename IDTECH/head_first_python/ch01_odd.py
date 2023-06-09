from datetime import datetime
from os import getcwd
import time
import random

#odds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 51, 53, 55, 57,59 ]



#if right_this_minute in odds:
for i in range(1, 5):
    t = random.randint(1, 60)

    right_this_minute = datetime.today().minute
    
    print("> The current minute is: ", datetime.today().minute, "\n")
    
    if right_this_minute % 2 != 0: #used to replace line 3 and 6.
        print(">>> This minute seems a little odd.\n")
    else:
        print(">>> Not an odd minute. \n")
    print("...Now sleeping for:", t, "seconds\n")
    time.sleep(t)
which_dir = getcwd()
print("Your present working directory is: ", which_dir)