#include <stdio.h>

void short_max_method1(void);
void short_max_method2(void);
void short_max_method3(void);
void short_max_method4(void);

int main(void)
{
	short_max_method1();
	short_max_method2();
	short_max_method3();
	short_max_method4();
}

/*
* short data type : 2 bytes = 16 bits of data
* 					1111 1111 1111 1111
*					0000 0000 0000 0000
* signed data		0/1 (msb), 15-bits, maximum
* unsigned			16 bits are used for data value
*/

void short_max_method4(void)
{
	short s;
	/*
	* if we know our environment, we can Hardcode our value
	* short 16 bits: 1111 1111 1111 1111
	* short 15 bits:  111 1111 1111 1111
	* Hexadecimal: 		7	f	  f	  f  = 0x7FFF
	* When hardcoding value, only use binary and Hexadecimal-preferably
	*/
	s = 0x7fff;
	printf("Method4: Max value for short data type (signed) is %d\n", s);
}
void short_max_method3(void)
{
	short s;
	s = 0;

	while (++s > 0);
	--s;
	printf("Method3: Max value for short data type (signed) is %d\n", s);
}
void short_max_method2(void)
{
	short s;
	short tmp;
	s = 0;
	tmp = s - 1;

	while (++s > ++tmp);
	
	printf("Method2: Max value for short data type (signed) is %d\n", tmp);
}
void short_max_method1(void)
{
	short s;
	short tmp;
	s = 0;
	tmp = s - 1;
	/*
	* Loop to calculate the max value of a short datatype
	*/
	while (s > tmp)
	{
		s++;
		tmp++;
	}
	printf("Method1: Max value for short data type (signed) is %d\n", tmp);
}