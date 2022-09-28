#include <stdio.h>
int main(void)
{
	// memory = an array of bytes within RAM (street)
	// memory block = a single unit (byte) within memory, used to hold some value (person)
	// memory address = the address of where a memory block is located (house address)

	char a = 'X';
	double b = 'Y';
	double c[3];

	printf("%ld bytes\n", sizeof(a));
	printf("%ld bytes\n", sizeof(b));
	printf("%ld bytes\n", sizeof(c));

	printf("%p bytes\n", &a);
	printf("%p bytes\n", &b);
	printf("%p bytes\n", &c);

	return (0);
}