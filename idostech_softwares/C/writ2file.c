#include <stdio.h>
int main(void)
{
	
	FILE *pF = fopen("/home/idowu/Desktop/test.txt", "w"); //w for write, a for append

	fprintf(pF, "Patrick Alex");

	fclose(pF);
/**
	if(remove("test.txt") == 0)
	{
		printf("That file was deleted successfully");
	}
	else
	{
		printf("That file was NOT deleted");
	}*/
	return (0);
}