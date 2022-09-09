// convert binary to decimal
#include <stdio.h>
#include <math.h>

int convert(long long n)
{
	int dec = 0, i = 0, rem;

	while (n != 0)
	{
		rem = n % 10;
		n /= 10;
		dec += (rem * (pow(2, i)));
		i++;
	}
	return (dec);
}

int main(void)
{
	long long n;
	printf("Enter a binary number: ");
	scanf("%lld", &n);
	printf("%lld in binary = %d in decimal\n", n, convert(n));
	return (0);
}