#include <stdio.h>

int main()
{
	struct id_bits {
		char f1:1,
			f2:2,
			f3:3;
	};

	struct id_bits b;
	
	b.f1 = 1;
	b.f2 = 2;
	b.f3 = 5;
	printf("f1, f2, f3 :%d %d %d\n", b.f1, b.f2, b.f3);
}