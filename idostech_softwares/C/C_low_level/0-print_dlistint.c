#include "lists.h"

size_t print_dlistint(const dlistint_t *h)
{

int count = 0;
// print reverse h = h->next;
while (h != NULL)
{
printf("%d\n", h->n);
count += 1;
h = h->next;
// print reverse h = h->prev;
}
return (count);
}
