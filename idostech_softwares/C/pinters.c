#include <stdio.h>

void printAge(int *pAge)
{
	printf("You are %d years old\n",*pAge);
}

int main(void)
{
	// pointers = a "variable-like" reference that holds a memory address
	// 				to another variable
	// 			* = indirection operator (value at address)
// advantages: less time in prog exection, manipulating variable, create data structures(linked-list, stack, queue),
// returning more than one values from functions, searching & sorting large data very easily, dynamic memory allocation

	int age = 21;
	int *pAge = NULL; // good practice to NULL if declaring a pointer
	 pAge= &age;

//	printf("address of age: %p\n", &age);
//	printf("value of pAge: %p\n", pAge);
//	printf("size of age: %ld bytes\n", sizeof(age));
//	printf("size of pAge: %ld bytes\n", sizeof(pAge));
//	printf("value of age: %d\n", age);
//	printf("value at stored address: %d\n", *pAge);//dereferencing

	printAge(pAge);
	return (0);
}