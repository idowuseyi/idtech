#include <stdio.h>
int main()
{
	union id_un {
		int val;
		char ch[4];
	};

	union id_un u;
	int i;

	u.val = 0xAABBCCDD;

	printf("Address of u	= %p\n", &u);
	printf("Address of u	= %p\n", &u.val);
	printf("Address of u	= %p\n", &u.ch);

	printf("Value at Address	%p = 0x%x\n", &u.val, u.val);
	for (i = 0; i < 4; i++)
		printf("Value at address %p = 0x%x\n", &u.ch[1], (unsigned char)(u.ch[i]));

	return (0);
}