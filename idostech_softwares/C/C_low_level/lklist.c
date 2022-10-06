
#include <stdio.h>
#include <stdlib.h>

typedef struct node
{
int data;
struct node* next;
} nodeptr;



int main(void)
{

nodeptr *first = (nodeptr*)malloc(sizeof(nodeptr));

first->data = 32;
first->next =  NULL;

nodeptr *second = (nodeptr*)malloc(sizeof(nodeptr));
second->data = 73;
first->next = second;
second->next = NULL;

nodeptr *last = (nodeptr*)malloc(sizeof(nodeptr));
last->data = 3;
second->next = last;
last->next = NULL;

nodeptr *temp = first;
while(temp != NULL)
{
printf("%d\n", temp->data);
temp = temp->next;
}
return (0);
}

