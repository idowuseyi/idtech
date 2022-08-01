

#include <stdio.h>
#include <stdlib.h>

int main(int sc, char *av[])
{
char *s;

s = argstostr(ac, av);
if (s == NULL)
{
return (1);
}
printf("%s", s);
free(s);
return (0);
}
