def safe_print_division(a, b):
    res = 0
    try:
        res = a / b
        return res
    except ZeroDivisionError:
        res = None
        return res
    finally:
        print("Inside result: {}".format(res))


a = 12
b = -1
result = safe_print_division(a, b)
print("{:d} / {:d} = {}".format(a, b, result))

a = 12
b = -2
result = safe_print_division(a, b)
print("{:d} / {:d} = {}".format(a, b, result))
