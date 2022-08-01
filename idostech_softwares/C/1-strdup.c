
#include <stdio.h>
#include <stdlib.h>
char *strdup(char *str)
{
int i = 1, j = 0;
char *s;

if (str == NULL)
{
return (NULL);
}
while (str[i])
i++;


s = (char *)malloc(i * sizeof(char) + 1);
if (s == NULL)
{
return (NULL);
}
while (j < i)
{
s[j] = str[j];
j++;
}
s[j] = '\0';
return (s);
}



int main(void)
{
char *s;

s = strdup("ALX SE");
if (s == NULL)
{
printf("failed to allocate memory");
return (1);
}
printf("%s\n", s);
free(s);
return (0);
}
