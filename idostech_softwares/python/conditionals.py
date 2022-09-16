#conditional helps in decision
'''
is_hot = False
is_cold = True

if is_hot:
    print("It's a hot day")
    print("Drink plenty of water")
elif is_cold:
    print("It's a cold day")
    print("Wear something warm")
else:
    print("It's a lovely day")
print("Enjoy your day")
'''

price = 1000000
good_credit_buyer = True

print("Your down payment is ")
if good_credit_buyer:
    print(price*(10/100))
else:
    print(price*(20/100))