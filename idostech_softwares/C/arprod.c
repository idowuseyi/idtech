#include <stdio.h>

int prod(int a[], int n)
{
	int i, res = 1;
	for (i = 0; i < n; i++)
	res = res * a[i];
	return (res);
}

int main(void)
{
int a[] = {2, 4, 7};
int n = sizeof(a)/sizeof(a[0]);
int b[n];
int i, rest = 1;

	print("How many value do you want in the array\n");
	scanf("%d", &n);
	
/**	for (i = 0; i < n; i++)
	{
		res = res * a[i];
	}*/
	rest = prod(a, n);
	for (i = 0; i < n; i++)
	{
		b[i] = (rest / a[i]);
		printf("%d\t", b[i]);
	}
	printf("\n");
	//printf("%d\n", rest);

return (0);
}