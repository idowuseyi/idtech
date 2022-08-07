#include <stdarg.h>
#include <stdio.h>
// for args you trust the the caller of the function to nput the right no of parameter, input the parameter in the right type
int get_average(int numberOfParams, ...)
{
    int i, sum = 0;
    va_list args; // declaration of our argument and holds our extra parameter
    va_start(args, numberOfParams); // it is where we initialize our declaration, you include
                                    // the declared argument and the last fixe paramenter.
                                    // It fetch all the argument and store them in the va_list
    for (i = 0; i < numberOfParams; i++)
    {
        sum += va_arg(args, int);     // va_arg is the macro we used to access our next parameter followed by the type.
    }

    va_end(args);

    return (sum / numberOfParams);


}

int main(void)
{
    int average;
    average = get_average(3, 'a', 3, 4);

    printf("average of the input numbers = %d \n", average);

    return (0);
}