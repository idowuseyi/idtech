#include <stdio.h>

/**
 * File transfer 
 * 10G of data = 128KB of data
 * state of a transaction (file transfer)
 */

struct id_header_file_tfr {
	unsigned long chunk;
	unsigned long data_tfr_so_far;
	unsigned long seq_no;
	...
}

/**
 * Since we will be dealing wiht both 32 and 64bits architecture, then we have to solve portability issue
 * linux give a way to do that
 * 
 */