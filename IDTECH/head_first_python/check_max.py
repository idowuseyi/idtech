# def maxret(lists):
#     if type(lists) == list:
#         return
lists = [1, 4, 6, 3, 9, 10]
max_val = 0
for val in lists:
    if val > max_val:
       max_val = val
    else:
       continue
print(max_val)