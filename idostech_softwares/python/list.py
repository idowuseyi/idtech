numbers = [2, 4, 6, 3, 4]

numbers.sort()

for i in range(numbers):
	if numbers[i] == numbers[i+1]:
		numbers.pop(numbers[i])
	
print(numbers)
