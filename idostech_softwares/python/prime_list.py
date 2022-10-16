def prime(n):
    prime_list = []
    for i in range(1, n):
        for j in range(1, n):
            if i / j == 1:
                prime_list.append(i)
    return prime_list


n = int(input("Enter any number you want to find its prime factors: "))
prime(n)
