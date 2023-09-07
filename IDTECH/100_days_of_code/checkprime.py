def checkPrime(number):
    if (type(number) != int):
        return "Try again and input an integer"
    factors = []
    for num in range(2, number):
        if (number % num > 0):
            continue
        else:
            factors.append(num)
    if len(factors) > 0:
        print("Factors of ", number, " includes ", factors)
        return number, " is not a prime number"
    else:
        return number, " is a prime number"

print(checkPrime(10))