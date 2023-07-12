''' python function that check if a string
    is a palindrome or not'''

def checkPalindrome(string: str) -> bool:
    ''' This function takes a string parameter and check if palindrome or not.'''
    check = True
    newString = "".join(c for c in string if c.isalpha())
    newString = newString.lower()
    stringSecond = newString[::-1]
    #print(newString + " reversed string: " + stringSecond)
    if (newString == stringSecond):
        print(string + " is a palindrome")
    else: print(string + " is not a palindrome")
    return check

checkPalindrome("A man, a plan, a canal,Panama.")
checkPalindrome("Step on no pets.")
checkPalindrome("Was it a car or a cat I saw?")
checkPalindrome("Mr.Owl ate my metal worm.")
checkPalindrome("Never odd or even.")
