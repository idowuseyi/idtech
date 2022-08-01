#include <stdio.h>

void sort(char arrayc[], int size)
{
    int i, j, temp;
    for(i = 0; i < size -1; i++)
    {
        for(j = 0; j < (size - i - 1); j++)
        {
            if(arrayc[j] > arrayc[j+1])
            {
                temp = arrayc[j];
                arrayc[j] = arrayc[j + 1];
                arrayc[j + 1] = temp;
            }
        }
    }
}

void printArray(char arrayc[], int size)
{
    int i;
    for(i = 0; i < size; i++)
    {
        printf("%c ", arrayc[i]);
    }

    printf("\n");
}

int main(void)
// arrayc is used for the character while array is used for numbers.
{
    int array[] = {5, 3, 7, 8, 1, 4, 9};
    int size = sizeof(array)/sizeof(array[0]);

    char arrayc[] = {'a', 'r', 's', 'p', 'z'};

    sort(arrayc, size);
    printArray(arrayc, size);

    return (0);
}
