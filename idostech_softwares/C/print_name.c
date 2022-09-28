#include <stdio.h>
void print_name(char *name,void (*f)(char *))
{
    
}
void print_name_as_is(char *name)
{
    printf("Hello, my name is %s\n", name);
}
int main()
{
    print_name("Bob", print_name_as_is);
    return (0);
}