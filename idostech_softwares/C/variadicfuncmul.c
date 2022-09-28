#include <stdlib.h>
#include <stdio.h>
#include <stdarg.h>

int mul(const unsigned int n, ...)
// <return datatype> <function name>(<datatypeparam> paramnames) 
{
    int i, multin = 0;
    va_list args;

    va_start(args, n);

    for (i = 0; i < n; i++)
    {
        multin  = multin * va_arg(args, int);
    }

    va_end(args);

    return (multin);
}

int main(void)
{
    unsigned int multi;

    multi = mul(3, 3, 5, 6);

    printf("multiplication = %d\n", multi);

    return (0);
}
