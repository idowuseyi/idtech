#include <stdio.h>
int main()
{
	union id_un {
		short val;
		char ch;
	};

	union id_un u;

	u.val = 258;
	u.ch = 1;

	printf("idostech val :%d\n", u.val);
	printf("idostech val :%d\n", u.ch);
}	