names = {5: "seyi", 6: "ade", 7: "Segun"}
if 3 in names:
    print(names[3])

names.pop(6)
names[6] = "Tade"
print(names)

names[4] = "dell"
names[5] = "dkola"

names[2] = "femi"
names['bae'] = 'song'
print(names)
print(len(names))
nnames = list(names)
cnames = list([x for x in names])
for keys in names:
    print(keys, names.get(keys), sep=': ')
    #print(keys, names[keys], sep=': ')

# making a dictionary
'''
dic methods clear, getitems, keys, pop,popitems, values,


names.clear()
print(names)

names[1] = "Seyi"
names[2] = "Peter"
names.items()
#print(names)
names.items()
names.keys()
names.get()
'''
my_dic = dict(name = "Ade", age=15, city = "Akure")
print(my_dic)
#del, remove, pop
for k, v in my_dic.items():
    print(f"{k}: {v}")

#copying with assignment statement is not good in python cos if you manipulate one it affect the other
#use .copy instead

my_dic_2 = dict(name = "Ade", age=15, city = "Akure", Location="Alagbaka")
my_dic.update(my_dic_2)
print(my_dic)

my_dict_3 = {i: i**2 for i in range(3, 10, 3)}
print(my_dict_3)

my_dict_4 = {(i, i+1): i+i+1 for i in range(3, 10, 3)}
print(my_dict_4)
#in the above unlike tuple list cannot be used because it is mutable while tuple is not