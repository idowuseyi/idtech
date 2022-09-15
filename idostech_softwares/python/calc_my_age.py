#This program calculate your age

birth_year = (input('Birth year: '))
print('data type of input ' + type(birth_year))
#any input is astring
age = 2022 - int(birth_year)
#type conversion has been carried out here
print('data type of age > ' + type(age))
print(age)