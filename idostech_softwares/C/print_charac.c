#include <stdio.h>
#include <unistd.h>
int _putchar(char c)
{
	return(write(1, &c, 1));
}
int main(void)
{
	int i = 0;
	char *a = "thisstring";

	while (a[i] != '\0')
	{
		_putchar(a[i]);
		i++;
	}
	_putchar('\n');

	return(0);
}