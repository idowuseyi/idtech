#include "monty.h"

int main(int argc, char **argv)
{
FILE *script_fd = NULL;
int exit-code = EXIT_SUCCESS;

if(argc != 2)
{
return (usage_error())
}
script_fd = fopen(argv[1], "r");
if (script_fd == NULL)
{
return (f-open-error(argv[1]))
}
exit-code = run_monty(script_fd)
fclose(script_fd);

return(exit-code);
}
