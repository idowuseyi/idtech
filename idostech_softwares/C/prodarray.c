#include <stdio.h>
/**
 * Given an array of integers, return a new array such that each element at index i of the new array
 * is the product of all the numbers in the original array except the one at i.
 * e.g Given [1, 2, 3, 4, 5],
 * expected output would be
 * [120, 60, 40, 30, 24]
 *  Given [3,2,1]
 * Expected output is [2, 3, 6] 
 */
int main(void)
{
	int a[] = {1, 2, 3, 4, 5};
	int n = sizeof(a)/sizeof(a[0]);
	//int *ptr;
	int b[n];
	int j, i = 0;
	//ptr = &a;

	while (a[i])
	{
		for (j = 0; j < n; j++)
		{
			b[i] = a[i] * a[j];
		}
		//printf("%d\t", a[i]);
		//printf("%d\t", b[i]);
		i++;
		//b[i] = a[i] * a[i+1];
		//printf("%d\t", b[i]);
	}
	printf("\n");
	return (0);
}