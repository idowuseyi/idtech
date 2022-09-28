#include <stdio.h>

int main(void)
{

    //nested loop = a loop inside a loop

    int rows;
    int columns;
    char symbol, unused;
    int i,j;

    printf("Enter # of rows: ");
    scanf("%d", &rows);

    printf("Enter # of columns: ");
    scanf("%d", &columns);

    printf("Enter the symbol to use: ");
    scanf("%c", &unused);
    scanf("%c", &symbol);

    for(i = 1; i <= rows; i++)
    {
        for(j = 1; j <= columns; j++)
        {
            printf("%c", symbol);

        }
        printf("\n");

    }



    return (0);
}