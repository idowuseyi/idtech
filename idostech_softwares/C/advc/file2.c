#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

int main(int argc, char *argv[])
{
	int fd;
	char buf[14];
/* create ad write */
	fd = open("myfilet.txt", O_CREAT | O_WRONLY, 0600);
	if (fd == -1)
	{
		printf("Failed to create and open file\n");
		exit(1);
	}

	write(fd, "Hello seyi!\n", 13);

	close(fd);

	/* read */

	fd = open("myfilet.txt", O_RDONLY);

	if (fd == -1)
	{
		printf("Failed to open and read the file.\n");
		exit(1);
	}
	read(fd, buf, 14);
	buf[14] = '\0';

	close(fd);

	printf("buf: %s\n", buf);
	return (0);
}