#include <stdio.h>
#include <stdlib.h>
/**
 * given a lsit of numbers and a number k, return
 * whether any two numbers from the list add up to k
 *
 * e.g [10, 15, 3, 7] and k of 17
 * return true since 10 + 7 is 17 
 * declare the list, initialize it, loop through the list
 * with a for loop and another for loop within it,
 * if any of first loop data + any of the second loop index
 * is equal to k, return true else false
 */
int main(void)
{
	int a[]; // = {11, 15, 3, 7, 5, 8, 2, 4};
	int i, j;
	int k; //= 6;
	int n = 0;

	//printf("Enter several whole number separated by a comma");
	//scanf("%d", &a[]);
	for (i = 0; i < (sizeof(a)/sizeof(a[0])); i++)
	//while (a[i])
	{
		for (j = (i + 1); j < (sizeof(a)/sizeof(a[0])); j++)
		{
			n = a[i] + a[j];
		
			if (n == k)
			{
				printf("True %d + %d = %d\n", a[i], a[j], k);
				exit(0);
			}
		}
	/**	if (n == k)
		{
			printf("True\n");
			break;
		}
		*/
	}
	printf("false\n");
	return (0);
}
