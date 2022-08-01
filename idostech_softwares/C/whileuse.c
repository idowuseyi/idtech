#include <stdio.h>
#include <string.h>

int main()
{
    // while loop = repeats a section of code possibly unlimited times
    // WHILE somecodition remains true
    // a while loop might not execute at all

    // This program forcefully take the user input

/**
    char name[25];

    printf("\n What's is your name?: ");
    fgets(name, 25, stdin);
    name[strlen(name) - 1] = '\0';

    while(strlen(name) == 0)
    {
        printf("\nYou did not enter your name");
        printf("\n What's is your name?: ");
        fgets(name, 25, stdin);
        name[strlen(name) - 1] = '\0';
    }

    printf("Hello %s", name);
*/
  // while loop = checks a condition, THEN executes a block of code if condition is true
  // do while loop = always executes a block of code once, THEN checks a condition

    int number = 0;
    int sum = 0;


    do{
        printf("Enter a # above 0: ");
        scanf("%d", &number);
        if(number > 0)
        {
            sum += number;
        }
    }while(number > 0);

    printf("sum: %d\n3", sum);

// a while loop check the condition first when a do while loop check the condition last

    return (0);
}
