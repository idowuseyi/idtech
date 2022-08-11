#include <stdio.h>
#include <string.h>

//typedef char user[25];
typedef struct User
{
	char name[25];
	char location[11];
	long phonen;

} User;
int main(void)
{
	//typedef = reserved keyword that gives an existing datatype a "nickname"

	User user1 = {"Seyi", "Akure", 8136899991};
	User user2 = {"Femi", "Ibadan", 8136001230};
	printf("%s\n", user1.name);
	printf("%s\n", user1.location);
	printf("%ld\n", user1.phonen);
	printf("\n");
	printf("%s\n", user2.name);
	printf("%s\n", user2.location);
	printf("%ld\n", user2.phonen);
	printf("\n");
	return (0);
}