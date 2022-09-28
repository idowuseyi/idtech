#include <stdio.h>

//<enum> <identifier>{}
enum Day{Sun = 1, Mon = 2, Tue = 3, Wed = 4, Thu = 5, Fri = 6, Sat = 7};

int main(void)
{
	// enum = a user defined type of named integer identifiers
	//		helps to make a program more readable
	// 		can be declared within d main or outside the main
 
	enum Day today = Fri;

	//printf("%d\n", today); // enums are NOT STRINGS, but they cna be treated as int
	if (today == Sun || today == Sat)
	{
		printf(" :) It's the weekend! Party time\n");
	}
	else
	{
		printf(" :( You have to work today\n");
	}
	
	return(0);
}