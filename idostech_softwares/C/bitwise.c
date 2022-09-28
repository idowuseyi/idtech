#include <stdio.h>

int main(void)
{
int a = 1;// 00000001
int b = 2;// 00000010
unsigned c = ~5;

//c = a & b;
printf("%ud\n", c);

return (0);
}