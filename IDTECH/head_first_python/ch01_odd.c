#include <stdio.h>
#include <time.h>

int main() {

    time_t now = time(NULL); // get current time
    struct tm *t = localtime(&now); // convert to local time
    printf("Current time: %02d:%02d:%02d\n", t->tm_hour, t->tm_min, t->tm_sec);
    int right_this_minute = t->tm_min;
    if (right_this_minute % 2 != 0) {
        printf("This minute seems a little odd.\n");
        }
    else {
        printf("Not an odd minute.\n");
    }
    return 0;
}

// #include <stdio.h>
// #include <time.h>

// int main() {
//     time_t now = time(NULL); // get current time
//     struct tm *t = localtime(&now); // convert to local time
//     char time_str[9]; // buffer for formatted time string (HH:MM:SS\0)
//     strftime(time_str, sizeof(time_str), "%T", t); // format time as HH:MM:SS
//     printf("Current time of day: %s\n", time_str);
//     return 0;
// }
