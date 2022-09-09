#include <stdio.h>
int main()
{
	union id_un {
		short val;
		char ch;
	};

	union id_un u;

	u.val = 258;
	printf("Before idostech val :%d\n", u.val);
	
	u.ch = 1;

	printf("After idostech val :%d\n", u.val);
	printf("After idostech ch :%d\n", u.ch);
}	