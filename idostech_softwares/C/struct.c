#include <stdio.h>
#include <string.h>

struct Player
{
    char name[15];
    int score; 
};


int main(void)
{
    // struct - collection of related members ("variables")
    //          they can be of different data
    //          listed under one name in a block of memory  
    //          VERY SIMILAR to classes in other languages (but no methods)
    

    struct Player player1;
    struct Player player2;

    strcpy(player1.name, "Seyi");
    player1.score = 3;

    strcpy(player2.name, "Femi");
    player2.score = 7;

    printf("%s\n", player1.name);
    printf("%d\n", player1.score);

    printf("%s\n", player2.name);
    printf("%d\n", player2.score);

    return (0);

}