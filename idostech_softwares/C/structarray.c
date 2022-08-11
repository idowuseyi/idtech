#include <stdio.h>
#include <string.h>
 
 struct student
 {
	char name[12];
	float gpa;
 };

int main(void)
{
	struct student student1 = {"Franca", 4.1};
	struct student student2 = {"Ade", 3.5};
	struct student student3 = {"Sola", 2.1};
	struct student student4 = {"Francisca", 3.9};
	struct student student5 = {"Fola", 4.8};

	struct student students[] = {student1, student2, student3, student4, student5};

	for (int i = 0; i < sizeof(students)/sizeof(students[0]); i++)
	{
		printf("Name: %s\t", students[i].name);
		printf("GPA: %.2f\n", students[i].gpa); 
	}

	return (0);
}
