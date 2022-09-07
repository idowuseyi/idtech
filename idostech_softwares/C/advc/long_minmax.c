#include <stdio.h>

void long_max_method1(void);
void long_max_method2(void);
void long_max_method3(void);
void long_max_method4(void);

int main(void)
{
	long_max_method1();
	long_max_method2();
	long_max_method3();
	long_max_method4();
}

/*
* long data type : 8 bytes = 64 bits of data
* 					1111 1111, 1111 1111, 1111 1111, 1111 1111, 1111 1111, 1111 1111, 1111 1111, 1111 1111
*					0000 0000, 0000 0000, 0000 0000, 0000 0000, 0000 0000, 0000 0000, 0000 0000, 0000 0000
* signed data		0/1 (msb), 63-bits, maximum
* unsigned			64 bits are used for data value
*/

void long_max_method4(void)
{
	long s;
	/*
	* if we know our environment, we can Hardcode our value
	* long 16 bits: 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111
	* long 15 bits:  111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111
	* Hexadecimal: 		7	f	  f	  f  = 0x7FFFFFFFFFFFFFFF
	* When hardcoding value, only use binary and Hexadecimal-preferably
	*/
	s = 0x7fffffffffffffff;
	printf("Method4: Max value for long data type (signed) is %ld\n", s);
}
void long_max_method3(void)
{
	long s;
	s = 0;

	while (++s > 0);
	--s;
	printf("Method3: Max value for long data type (signed) is %ld\n", s);
}
void long_max_method2(void)
{
	long s;
	long tmp;
	s = 0;
	tmp = s - 1;

	while (++s > ++tmp);
	
	printf("Method2: Max value for long data type (signed) is %ld\n", tmp);
}
void long_max_method1(void)
{
	long s;
	long tmp;
	s = 0;
	tmp = s - 1;
	/*
	* Loop to calculate the max value of a long datatype
	*/
	while (s > tmp)
	{
		s++;
		tmp++;
	}
	printf("Method1: Max value for long data type (signed) is %ld\n", tmp);
}