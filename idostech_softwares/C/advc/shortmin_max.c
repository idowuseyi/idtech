#include <stdio.h>
int main(void)
{
	short var1 = sizeof(short);
	unsigned short var2;
	short maxcount = 0;
	short mincount = 0;
	short umincount = 0;
	short umaxcount = 0; 
	short i = 1;
	short j = -1;
	short k = 0;

	while (i > 0)
	{
		if (sizeof(var1) == var1)
		{
			maxcount += 1;
		}
		i++;
	}
	while (j < 0)
	{
		if (sizeof(var1) == var1)
		{
			mincount -= 1;
		}
		j--;
	}
/*	while (k > 0)
	{
		if (sizeof(var2) == var2)
		{
			umincount += 1;
		}
		k++;
	}*/
	printf("Signed short Data Type min = %d and max = %d\n", mincount, maxcount);
	printf("Unsigned short Data Type min = %u and max = %u\n", umincount, (maxcount*2 + 1));
	//printf("signed long Data Type min = %ld\n", sizeof(long));
	return (0);
}