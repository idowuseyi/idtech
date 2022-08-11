#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void)
{
	// pseudo random numbers = A set of values or elements that are statistically random
	// 							(Don't use these for any sort of cryptogragic security)

	srand(time(0)); //this makes the output change per time

	int number1 = (rand() % 500) + 1;
	int number2 = (rand() % 500) + 1;
	int number3 = (rand() % 500) + 1;

	printf("%d\n", number1);
	printf("%d\n", number2);
	printf("%d\n", number3);
}