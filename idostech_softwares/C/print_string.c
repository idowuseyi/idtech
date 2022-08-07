#include "main.h"

int _puts(char *str)
{
    int i = 0;
    while (str[i])
    {
        _putchar(str[i]);
        i++;
    }
    return (i);
}
int print_string(va_list args)
{
    return (_puts(va_arg(args, char *)));
}