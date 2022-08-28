#include <stdio.h>
int main(void)
{
/**	printf("Question1\n");
	if (sizeof(int)>-1)
		printf("True\n");
	else
		printf("False\n");
// false: sizeof is unsinged and cannot be compaired with a negative value
// for any comparison opeerator the operands must be same type
// -1 if converted to unsigned is very large, so will always be greater than 4
	printf("-----Question2-----\n");
	float f = 0.1;
	if (f == 0.1)
		printf("True\n");
	else
		printf("False\n");
// false: f and 0.1 are 2 diff parameters, 0.1 comapred with var f is different from the one assigned to f, and double has more precision than the float f.

	printf("-----Question3-----\n");

	int a, b = 1, c = 1;

	a = sizeof(c = ++b + 1);
	printf("a = %d, b = %d, c = %d\n", a, b, c);
// a = 4, b = 1, c = 1	sizeof is a compile time operation

	printf("-----Question4-----\n");

	char *p = 0;//impossible operation, we cannot access that memory location not to talk of writing into it

	*p = 'A';
	printf("Value at p = %c\n", *p);
// error cos a pointer address cannot be turned to 0
// segmentation fault (core dumped)
// this is illegal access to memory or illegal memory operation. on linux we get a SIGSEGV
*/
	int x = 1, y = 3, z = 2;
	if (x > y)
		if (y > z)
			printf("a > b and b > c\n");
	else
		printf("something else\n");
	return (0);
// this will print something else always but no
// the else is part of the second if. 
}