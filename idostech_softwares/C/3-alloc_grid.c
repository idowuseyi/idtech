

#include <stdio.h>
#include <stdlib.h>
int **alloc_grid(int width, int height)
{
m,int i, j, k, l;
int **a;

if (width <= 0 || height <= 0)
return (NULL);
a = malloc(height * sizeof(int *));
if (a == NULL)
{
free(a);
return (NULL);
}
for (i = 0; i < height; i++)
{
a[i] = malloc(width * sizeof(int));
if (a[i] == NULL)
{
for (j = i; j >= 0; j--)
{
free(a[j]);

}
free(a);
return (NULL);
}
}
for (k = 0; k < height; k++)
{
for (l = 0; l < width; l++)
a[k][l] = 0;
}
return (a);
}



void print_grid(int **grid, int width, int height)
{
int w;
int h;

h = 0;
while (h < height)
{
w = 0;
while (w < width)
{
printf("%d ", grid[h][w]);
w++;

}
printf("\n");
h++;
}
}

int main(void)
{
int **grid;

grid = alloc_grid(6, 4);
if (grid == NULL)
{
return (1);
}
print_grid(grid, 6, 4);
printf("\n");
grid[0][3] = 98;
grid[3][4] = 402;
print_grid(grid, 6, 4);
return (0);
}
