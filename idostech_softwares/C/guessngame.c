#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void)
{
	const int MIN = 1;
	const int MAX = 100;
	int guess = 0;
	int guesses = 0;
	int answer = 0;

	//uses the current time as a seed
	srand(time(0));

	answer = (rand() % MAX) + MIN;

	do{
		printf("Enter a guess: ");
		scanf("%d", &guess);
		if(guess > answer)
		{
			printf("%d is Too high!\n", guess);
		}
		else if(guess < answer)
		{
			printf("%d is Too low!\n", guess);
		}
		else
		{
			printf(" %d is CORRECT! Congratulation!\n", guess);
		}
		guesses++;
	}while(guess != answer);

	printf("**************************\n");
	printf("answer: %d\n", answer);
	printf("guesses: %d\n", guesses);
	printf("**************************\n");

	return (0);
}