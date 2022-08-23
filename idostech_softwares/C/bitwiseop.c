#include <stdio.h>

int main(void)
{
	// BITWISE OPERATIONS = special operators used in bit level programming
		//(knowing binary is important for this topic)

		// & = AND, | = OR, ^ = XOR, << left shift, >> right shift

		int x = 6;	// 6 = 1100
		int y = 12;	// 12 = 1100
		int z = 0;	// 0 = 0000

		z = x & y;
		printf("AND = %d\n", z);

		z = x | y;
		printf("OR = %d\n", z);

		z = x ^ y;
		printf("XOR = %d\n", z);

		z = x << 2; // it doubles
		printf("SHIFT LEFT = %d\n", z);

		z = x >> 2; // divide by 2
		printf("SHIFT RIGHT = %d\n", z);


		return (0);
}