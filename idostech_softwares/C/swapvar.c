#include <stdio.h>
#include <string.h>

int main(void)
{
    char x[12] = "petrol";
    char y[12] = "carosine";
    char temp[12];

    // for proper behaviour of strcpy the arrays must have the same size

    strcpy(temp, x);
    strcpy(x, y);
    strcpy(y, temp);

    printf("x = %s\n", x);
    printf("y = %s\n", y);

    return (0);

}