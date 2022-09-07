#include <stdio.h>
#include <stdlib.h>

struct emp {
	int emp_id;  /* 4 bytes */
	char emp_name[30]; /* 30 bytes */
};

struct emp e;

int main(void)
{
	

	printf("Enter the employee number: ");
	scanf("%d", &e.emp_id);

	printf("Enter the employee name: ");
	scanf("%s", e.emp_name);

	printf("Employee id : %d\n", e.emp_id);
	printf("Employee name: %s\n", e.emp_name);

	printf("Address of Emp. Id: %p \n Address of Emp. name: %p\n", &e.emp_id, &e.emp_name);
	
	printf("memory allocated in byte: Emp_id : %ld\n", sizeof(e.emp_id));
	printf("memory allocated in byte: Emp_name : %ld\n", sizeof(e.emp_name));
	printf("memory allocated in byte: Emp_e : %ld\n", sizeof(e)); /* we can see padding here */
	return (0);
}
/*
when you see the address boundary like 7ff you know is coming from stack 64 bits
the memory assigned is from the stack and we can confirm this because we use global variable and c global variable are automatic variable an should be allocated on the stack
when we change the variable e declaration space, the address is now coming from the data segment
*/