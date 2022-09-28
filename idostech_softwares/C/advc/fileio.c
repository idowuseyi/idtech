#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
int main(void)
{
	int fd;

	if ((fd = open("/etc/hosts", O_RDONLY)) < 0)
	{
		perror("open");
		exit(1);
	}
	else
	{
		printf("failed to open and create file\n");
		exit(1);
	}
	return (0);
}