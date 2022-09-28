#include <stdio.h>
#define ABS(x) ((x < 0) ? -(x) : (x))
int main(void)
{
    int i, j;

    i = ABS(-1);
    j = ABS(6);
    printf("%d, %d\n", i, j);
    return (0);


}