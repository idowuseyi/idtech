 #include <stdio.h>

 int main(void)
 {
    // continue = skips rest of code & forces the next iteration of the loop
    // break = exists a loop/switch
    int i = 0;
   //printf("%d\n", i);

    for(i = 1; i <= 20; i++)
    {
       if(i == 13)
        {
            continue;
        }
        else
        {
            if (i == 16)
            {
            break;
            }
        }
        printf("%d\n", i);
    }
    return (0);
 }
