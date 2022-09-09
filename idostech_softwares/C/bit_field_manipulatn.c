#include <stdio.h>

struct id_bits {
	unsigned char f1:1,
					res1:1,
					f2:2,
					res2:2,
					f3:3;
};

int main()
{
	struct id_bits b;

	b.f1 = 1;
	b.f2 = 3;
	b.f3 = 5;

	printf("%d %d %d\n", b.f1, b.f2, b.f3);

	return (0);
}