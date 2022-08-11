#include "main.h"
#include <stdarg.h>

void my_printf(const char *format, ...)
{
int printed = 0;
int i = 0;
va_list args;

va_start(args, format);
while (format[i])
{
    while (format[i] == '%')
    {
        switch (format[i + 1])
        {
            case 'c':
                printed += print_char(args);
                i += 2;
                break;
            case '%':
                _putchar('%');
                printed++;
                i += 2;
                break;
            case 's':
                printed += print_string(args);
                i += 2;
                break;
            default:
                _putchar(format[i]);
                _putchar(format[i + 1]);
                i += 2;
        }
    }
    if (format[i])

    _putchar(format[i]);
    printed++;
}
i++

}
va_end;
return (printed)