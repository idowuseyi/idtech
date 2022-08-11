#include <stdio.h>
#include <stdlib.h>

struct node {
	int value;
	struct node* next;
};

typedef struct node node_t;

//function that prints the list
void printlist(node_t *head)
{
	node_t *temporary = head;

	while (temporary != NULL)
	{
		printf("%d - ", temporary->value);
		temporary = temporary->next;
	}
	printf("\n");
}
	// we can also write a function that create the node for us
	node_t *create_new_node(int value)
	{
		node_t *result = malloc(sizeof(node_t));
		result->value = value;
		result->next = NULL;
		return result;
		// now we can change up the main function
	}

	//say we want to have more function that does things for us
	node_t *insert_at_head(node_t *head, node_t *node_to_insert)
	{	//say we dont want to make the head ourselvves we use pointer to pointer
		node_to_insert->next = head;
		return node_to_insert;
	}

int main()
{
	node_t *head = NULL;
	node_t *tmp;

	//say we want to make a lot of nodes
	for (int i = 0; i < 25; i++)
	{
		tmp = create_new_node(i);
		//tmp->next = head;
		//3.
		//head = tmp;

		tmp = create_new_node(i);
		head = insert_at_head(head, tmp);
	}

/**	tmp = create_new_node(32);
	head = tmp;
	tmp = create_new_node(8);
	tmp->next = head;
2.	head = tmp;
	tmp = create_new_node(34);
	tmp->next = head;
	head = tmp;
*/
/**	n1 = malloc(sizeof(node_t));
	n1.value = 45; //we can always play with the order
	n2.value = 8;
	n3.value = 32;

	// link them up
1.	head = &n3;	// head point to the address n3
	n3.next = &n2;
	n2.next = &n1;
	n1.next = NULL; //so we know whento stop.

	// we can always add a new node
	node_t n4;
	n4.value = 13;
	n4.next = NULL;
	n2.next = &n4;	

	// always get your bearing before you move on
	head = head->next;
*/
	printlist(head);

	return (0);
}