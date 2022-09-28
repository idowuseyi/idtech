#include <stdio.h>
#include <stdlib.h>

typedef struct  node *nodePtr; //node pointer is a pointer to a struct node

	// struct define and typedef below are
	// broken into two parts for clarity of explaining
	// in our code we woud usually combine the two together
	// a node is a struct that contains a node pointer

struct node // a struct contains a value and a node pointer pointing to it
{
	int data;
	nodePtr next;	/* data */
};

typedef struct node node; // we say call d struct node a node not struct anymore

int main(int argc, const char * argv[])
{ 
	//we set a pointer in memory then use malloc to set a memory
	nodePtr first = NULL;

	first = malloc (sizeof(node));
	first->next = NULL;

	// dont do this at home
	// node firstNode;
	// firstNode.next;

	// to set another data, we set another memory and set the null to point to it.

	first->data = 61;
	
	first->next = malloc (sizeof(node));
	first->next->next = NULL;
	first->next->data = 62;			// we can use bracket but its not necessary

	nodePtr temp = malloc(sizeof(node));
	temp->next = first;
	first = temp;

	printf("Hello, Nigerian!\n");
	return (0);
}

// we set a pointer to the first element on the list.
// a list is a natural recursive data
// LIST either a NULL or a piece of data and a list following it. So a list can be defined with recursion
//	is either a	-NULL
//	or	Data, LIST