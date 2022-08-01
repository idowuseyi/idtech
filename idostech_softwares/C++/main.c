/**#include "myheader.h"

int main(void)
{

    basicc(6, 7);
    printf("Now these are the result\n");
    return (0);

}
*/
#include <stdio.h>
#include <stdlib.h>

char *str_concat(char *si, char *s2)
{
int i = 0, j = 0, k = 0, l;
char *s;

if (s1 == NULL)
s1 = "";
if (s2 == NULL)
s2 = "";
while (s1[i])
i++;
while (s2[j])
j++;

l = i + j;
s = (char *)malloc(l * sizeof(char) + 1);
if (s == NULL)
return (NULL);

j = 0;
while (k < l)
{
if (k <= i)
s[k] = s1[k];
if (k > i)
{
s[k] = s2[j];
j++;
}
k++;
}
s[k] = '\0';
return (s);

}



int main(void)
{
char *s;

s = str_concat("Betty ", "Holberton");
if (s == NULL)
{
printf("failed\n");
return (1);
}
printf("%s\n", s);
free(s);
return (0);
}
