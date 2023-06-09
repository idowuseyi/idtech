// Topic: 3 Integers

// Given 3 integers, return the middle value. You can use any language but you cannot use any external functions (max, min, etc). You must code everything yourself.

// Example: 
// If 3, 1, 2: Return 2
// If 4, 0, 2: Return 2
// If 5, 7, 9: Return 7

// Function Prototype in JS (you can do this in any language)
// function  threeIntegers(a, b, c)

#include <stdio.h>

int midfinder(int a, int b, int c) {
  int max, min, mid;
  if (a > b &&  a < c) {
    mid = a;
    return (a);
    }
    else if (b > a && b < c) {
      mid = b;
      return (b); 
    }
    else {
      return (c);
    }
}


int main()
{
  int middle;
  middle = midfinder(-1, 4, 0);
  printf("%d\n", middle);

  return (0);
}