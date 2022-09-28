#include <stdlib.h>
/**
 * _putchar -> write i byte of char to stdout 
 * 
 * @c: Character parameter 
 * Return: returns 0 (success0 
 */
int _putchar(char c)
{
    return (write(1, &c, 1));
}