#include <stdio.h>
#include <stdlib.h>

struct dog
{
    char *name;
    float age;
    char *owner;

};

/**void init_dog(struct dog *d, char *name, float age, char *owner)
{
    if (d != NULL)
    {
        d->name = name;
        d->age = age;
        d->owner = owner;
    }

}
*/

void print_dog(struct dog *d)
{  
    struct dog *my_dog;

    my_dog = malloc(sizeof(struct dog));
    if (my_dog != NULL)
    {
        my_dog->name = name;
        my_dog->age = age;
        my_dog->owner = owner;

    }

}

int main(void)
{
    struct dog my_dog;

    my_dog.name = "puppy";
    my_dog.age = 3.5;
    my_dog.owner = "Bob";
    print_dog(&my_dog);
    return (0);
}
