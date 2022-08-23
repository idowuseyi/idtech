#include <stdio.h>

int main(void)
{
	FILE *pF = fopen("/home/idowu/Desktop/newfile.txt", "r");
	char buffer[1000];
	
	if(pF == NULL)
	{
		printf("Unable to open file\n");
	}
	else
	{
		while(fgets(buffer, sizeof(buffer), pF) != NULL)
		{
			printf("%s", buffer);
		}
	}
	fclose(pF);
}