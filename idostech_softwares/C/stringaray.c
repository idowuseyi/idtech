#include <stdio.h>
#include <string.h>
int main(void)
{
    // for string array [1][2] the [2] = maximun lenght of the strings
    // each string is already an array of characters
    char houses[][10] = {"pent", "duplex", "apartment", "flat"};
    int i;

   // houses[0] = "mansion";
    strcpy(houses[0], "Mansion");
    //for (i = 0; i < sizeof(houses)/sizeof(houses[0]); i++)

    //to reverse the order
    for(i = sizeof(houses); i >= 0; i--)
    {
        printf("%s\n", houses[i]);
    }
    return (0);
}