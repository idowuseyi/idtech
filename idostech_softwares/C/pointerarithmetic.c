#include <stdio.h>

int main(void)
{
    int n, i;
    int a[5];
    int *p;

    a[2] = 1024;
    p = &n;

    *(p + 4) = 88;
    *(p + 5) = 98;
    *(p + 6) = 108;
    *(p + 7) = 208;
    *(p + 8) = 308;
    *(p + 9) = 408;
    for(i = 0; i <= sizeof(a)/sizeof(a[0]); i++)
    {
        printf("\na[%d] = %d\n", i, a[i]);

    }
    return (0);
}