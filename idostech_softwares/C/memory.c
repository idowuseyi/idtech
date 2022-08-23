#include <stdio.h>

int main(void)
{
	// memory = an array of bytes within RAM (street)
	// memory block = a single unit (byte) within memory, used to hold some value (person)
	// memory address = the address of where a memory block is located (house address)

	char a; //char 1, short 2, int 4, double 8, p
	char b[1]; // array uses the product of its sizeof datatype and size bytes
	short c = 'z';

	printf("%ld bytes\n", sizeof(a));
	printf("%ld bytes\n", sizeof(b));
	printf("%ld bytes\n", sizeof(c));

	printf("%p\n", &a); // memory address comes in hexadecimal
	printf("%p\n", &b);
	printf("%p\n", &c);

	return (0);
}