#include <stdio.h>

int main()
{
	char str[] = {'I', 'D', 'O', 'W', 'U'};
	char surname[] = {"IDOWU"};

	printf("sizeof str = %lu\n", sizeof(str));
	printf("sizeof surname = %lu\n", sizeof(surname));
	printf("strlen str = %lu\n", strlen(str));
	printf("strlen surname = %lu\n", strlen(surname));

	return (0);
}