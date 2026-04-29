import type { CourseOutcome } from "@/types"

export const module6: CourseOutcome = {
  id: "qb-m6",
  title: "Question Bank - Module 6: Pointers and Files",
  shortTitle: "Module 6",
  description: "Pointers, dynamic memory allocation, call by reference, and file handling operations in C.",
  icon: "FileCode2",
  color: "indigo",
  questions: [
    {
      id: "qb-m6-q1",
      title: "Explain various memory allocation techniques and its methods.",
      source: "Question Bank - Module 6",
      marks: 5,
      notes: `**Memory allocation = reserving memory at either compile-time or run-time**

**Two types:**
| Type | When | How | Location |
|------|------|-----|----------|
| Static | Compile-time | Fixed size declaration | Stack |
| Dynamic | Run-time | malloc/calloc/realloc | Heap |

**Four dynamic memory functions (all need \`#include<stdlib.h>\`):**
| Function | Syntax | Initialises? |
|----------|--------|--------------|
| malloc() | \`malloc(size)\` | No (garbage) |
| calloc() | \`calloc(n, size)\` | Yes (zeros) |
| realloc() | \`realloc(ptr, newSize)\` | Preserves data |
| free() | \`free(ptr)\` | Releases memory |

**Key rule:** Always cast the return value and check for NULL:
\`\`\`c
int *p = (int*) malloc(5 * sizeof(int));
if(p == NULL) { printf("Memory failed"); exit(1); }
\`\`\`

**Heap vs Stack:**
- Stack: automatic, limited size, freed on function return
- Heap: manual, large, freed only when you call \`free()\`

**Memory leak** = forgetting to call \`free()\` after dynamic allocation.`,
      blocks: [
        {
          type: "text",
          content:
            "Memory allocation in C refers to reserving memory for variables and data structures. There are two types:\n\n**1. Static Memory Allocation**\n- Memory is allocated at **compile time**.\n- Size must be known in advance and cannot change at runtime.\n- Stored on the **Stack**.\n- Example: `int arr[10];`\n\n**2. Dynamic Memory Allocation**\n- Memory is allocated at **runtime** as needed.\n- Size can be decided during program execution.\n- Stored on the **Heap**.\n- Managed using functions from `<stdlib.h>`.\n\n**Dynamic Memory Allocation Functions:**\n\n**`malloc(size)`** — Allocates a block of `size` bytes. Memory is **uninitialized** (contains garbage values). Returns a `void*` pointer.\n\n**`calloc(n, size)`** — Allocates memory for `n` elements each of `size` bytes. Memory is **initialized to zero**. Returns a `void*` pointer.\n\n**`realloc(ptr, newSize)`** — **Resizes** a previously allocated memory block pointed to by `ptr`. Preserves existing data. Returns pointer to the new block.\n\n**`free(ptr)`** — **Releases** the dynamically allocated memory back to the heap. Always free memory after use to avoid memory leaks.",
        },
        {
          type: "code",
          language: "c",
          title: "Demonstrating malloc, calloc, realloc, and free",
          content: `#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

void main() {
    clrscr();
    int *p1, *p2, i, n;

    // malloc: allocate memory for 5 integers (uninitialized)
    p1 = (int*) malloc(5 * sizeof(int));
    if (p1 == NULL) {
        printf("malloc failed\\n");
        exit(1);
    }
    printf("malloc allocated memory (garbage values):\\n");
    for (i = 0; i < 5; i++)
        printf("%d ", p1[i]);   // may print garbage

    // calloc: allocate memory for 5 integers (initialized to 0)
    p2 = (int*) calloc(5, sizeof(int));
    if (p2 == NULL) {
        printf("calloc failed\\n");
        exit(1);
    }
    printf("\\ncalloc allocated memory (zero-initialized):\\n");
    for (i = 0; i < 5; i++)
        printf("%d ", p2[i]);   // prints 0 0 0 0 0

    // realloc: resize p2 to hold 10 integers
    p2 = (int*) realloc(p2, 10 * sizeof(int));
    printf("\\nAfter realloc to 10 elements.\\n");

    // free: release memory
    free(p1);
    free(p2);
    printf("Memory freed successfully.\\n");

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Memory layout — Stack vs Heap",
          content: `graph TD
    subgraph "Program Memory"
        A["Stack (Static)<br/>int x=10; int arr[5];"]
        B["↕ grows toward each other"]
        C["Heap (Dynamic)<br/>malloc / calloc / realloc"]
    end
    A -->|"compile-time, auto-freed"| B
    C -->|"runtime, free() required"| B`,
        },
      ],
    },
    {
      id: "qb-m6-q2",
      title: "Differentiate between calloc() and malloc().",
      source: "Question Bank - Module 6",
      marks: 5,
      notes: `**Quick memory trick: calloc = "clear alloc" (initialises to zero), malloc = "memory alloc" (raw, garbage)**

| Feature | malloc() | calloc() |
|---------|----------|----------|
| Full form | Memory allocation | Contiguous allocation |
| Arguments | 1 (total bytes) | 2 (count, size each) |
| Initialisation | No — garbage values | Yes — all zeros |
| Syntax | \`malloc(n * sizeof(int))\` | \`calloc(n, sizeof(int))\` |
| Speed | Slightly faster | Slightly slower (fills zeros) |
| Return type | \`void*\` | \`void*\` |
| On failure | Returns NULL | Returns NULL |

**Memory size calculation:**
- malloc: \`malloc(5 * sizeof(int))\` → 5 × 4 = 20 bytes
- calloc: \`calloc(5, sizeof(int))\` → 5 × 4 = 20 bytes (same!)

**When to use which:**
- Use **malloc** when you're going to overwrite all values anyway (e.g., reading from file/input).
- Use **calloc** when you need zero-initialised memory (e.g., building a count table).`,
      blocks: [
        {
          type: "text",
          content:
            "Both `malloc()` and `calloc()` are used for **dynamic memory allocation** in C and are declared in `<stdlib.h>`. The key differences are:\n\n**`malloc(size_in_bytes)`**\n- Takes **one argument**: the total number of bytes to allocate.\n- Does **not initialise** memory — it contains garbage (random) values.\n- Slightly **faster** since it skips the zero-fill step.\n- Syntax: `ptr = (type*) malloc(n * sizeof(type));`\n\n**`calloc(count, size_per_element)`**\n- Takes **two arguments**: number of elements and size of each element.\n- **Initialises all allocated memory to zero** automatically.\n- Slightly **slower** due to the zero-initialisation step.\n- Syntax: `ptr = (type*) calloc(n, sizeof(type));`\n\n**Both functions:**\n- Return a `void*` pointer that must be cast to the required type.\n- Return `NULL` if memory allocation fails.\n- Allocated memory must be released using `free()` when no longer needed.",
        },
        {
          type: "code",
          language: "c",
          title: "malloc vs calloc — side by side comparison",
          content: `#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

void main() {
    clrscr();
    int *m, *c, i;

    // malloc — allocates 5 ints, NOT initialised
    m = (int*) malloc(5 * sizeof(int));

    // calloc — allocates 5 ints, ALL SET TO ZERO
    c = (int*) calloc(5, sizeof(int));

    printf("malloc (garbage values):\\n");
    for (i = 0; i < 5; i++)
        printf("%d ", m[i]);     // unpredictable output

    printf("\\ncalloc (zero-initialised):\\n");
    for (i = 0; i < 5; i++)
        printf("%d ", c[i]);     // always: 0 0 0 0 0

    free(m);
    free(c);
    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m6-q3",
      title: "W.A.P. to swap two numbers using Pointers.",
      source: "Question Bank - Module 6",
      marks: 5,
      notes: `**Swap via pointers = pass addresses, dereference to change actual values**

**Why pointers are needed:**
- Without pointers (call by value): changes inside function are LOCAL — originals unchanged.
- With pointers (call by reference): function directly modifies the caller's variables.

**Dereferencing operator \`*\`:**
- \`*p\` means "value at the address stored in p"
- \`p = &a\` means "p holds the address of a"

**Swap logic inside function:**
\`\`\`c
void swap(int *p, int *q) {
    int temp = *p;   // save value at address p
    *p = *q;         // put value at q into address p
    *q = temp;       // put saved value into address q
}
\`\`\`

**Calling:** \`swap(&a, &b);\` — always pass ADDRESS with \`&\`

**Dry run (a=5, b=10):**
| Step | *p (a) | *q (b) | temp |
|------|--------|--------|------|
| Before | 5 | 10 | — |
| temp = *p | 5 | 10 | 5 |
| *p = *q | 10 | 10 | 5 |
| *q = temp | 10 | 5 | 5 |
| After | 10 | 5 | — |`,
      blocks: [
        {
          type: "text",
          content:
            "A **pointer** is a variable that stores the **memory address** of another variable. Declared using `*` and assigned using `&` (address-of operator).\n\nTo swap two variables using pointers, we pass their **addresses** to a function. Inside the function, we use the **dereference operator `*`** to access and modify the actual values at those addresses.\n\n**Key pointer operators:**\n- `&var` → gives the address of `var`\n- `*ptr` → gives the value at the address stored in `ptr`",
        },
        {
          type: "code",
          language: "c",
          title: "Swap two numbers using pointers",
          content: `#include<stdio.h>
#include<conio.h>

// Function takes addresses of two integers
void swap(int *p, int *q) {
    int temp;
    temp = *p;    // store value at address p
    *p   = *q;    // assign value at q to address p
    *q   = temp;  // assign saved value to address q
}

void main() {
    clrscr();
    int a, b;

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    printf("Before swap: a = %d, b = %d\\n", a, b);

    swap(&a, &b);   // pass ADDRESSES, not values

    printf("After swap:  a = %d, b = %d\\n", a, b);

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Pointer swap — memory view",
          content: `graph LR
    subgraph "main()"
        A["a = 5<br/>addr: 2000"]
        B["b = 10<br/>addr: 3000"]
    end
    subgraph "swap(p, q)"
        P["p = 2000<br/>*p = 5"]
        Q["q = 3000<br/>*q = 10"]
    end
    P -->|"points to"| A
    Q -->|"points to"| B
    A -->|"after swap: a=10"| A
    B -->|"after swap: b=5"| B`,
        },
      ],
    },
    {
      id: "qb-m6-q4",
      title: "Differentiate between Call by Value and Call by Reference.",
      source: "Question Bank - Module 6",
      marks: 5,
      notes: `**Golden rule: Call by value → copy is sent. Call by reference → address is sent.**

| Feature | Call by Value | Call by Reference |
|---------|--------------|-------------------|
| What is passed | **Copy** of actual value | **Address** of variable |
| Original affected? | **No** — original unchanged | **Yes** — original modified |
| Declaration | \`void func(int x)\` | \`void func(int *x)\` |
| Call | \`func(a)\` | \`func(&a)\` |
| Safety | Safer — no side effects | Less safe — can change caller's data |
| Memory | Uses extra memory for copy | More efficient (just passes address) |
| Use case | When you don't want to modify original | When you need to modify original (swap, sort) |

**Classic analogy:**
- Call by value = giving someone a **photocopy** of a document
- Call by reference = giving someone the **original** document

**Exam tip:** Swap program is the best example for call by reference. Without pointers (call by value), the swap function cannot change the original variables.`,
      blocks: [
        {
          type: "text",
          content:
            "**Call by Value** and **Call by Reference** are two ways to pass arguments to a function in C.\n\n**Call by Value:**\n- A **copy** of the actual argument is passed to the function.\n- Any changes made inside the function do **not affect** the original variable.\n- Default method in C for basic data types.\n\n**Call by Reference:**\n- The **address (pointer)** of the actual argument is passed.\n- Changes made inside the function **directly affect** the original variable.\n- Achieved in C using **pointers**.",
        },
        {
          type: "code",
          language: "c",
          title: "Call by Value vs Call by Reference — demonstration",
          content: `#include<stdio.h>
#include<conio.h>

// Call by VALUE — changes do NOT affect original
void addTen_val(int x) {
    x = x + 10;
    printf("Inside addTen_val: x = %d\\n", x);  // 20
}

// Call by REFERENCE — changes DO affect original
void addTen_ref(int *x) {
    *x = *x + 10;
    printf("Inside addTen_ref: *x = %d\\n", *x); // 20
}

void main() {
    clrscr();
    int a = 10, b = 10;

    // Call by Value
    addTen_val(a);
    printf("After addTen_val: a = %d\\n", a);   // still 10 (unchanged!)

    // Call by Reference
    addTen_ref(&b);
    printf("After addTen_ref: b = %d\\n", b);   // 20 (changed!)

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Call by Value vs Call by Reference",
          content: `graph TD
    subgraph "Call by Value"
        A["main: a = 10"] -->|"copy of 10"| B["func: x = 10<br/>(local copy)"]
        B -->|"x=20 (local)"| C["main: a still = 10"]
    end
    subgraph "Call by Reference"
        D["main: b = 10<br/>addr: 5000"] -->|"address 5000"| E["func: *p → addr 5000"]
        E -->|"*p = 20"| F["main: b now = 20"]
    end`,
        },
      ],
    },
    {
      id: "qb-m6-q5",
      title: "Find smallest number and its position in an array using Pointers.",
      source: "Question Bank - Module 6",
      marks: 5,
      notes: `**Use pointer arithmetic to traverse array — \`*(arr+i)\` is same as \`arr[i]\`**

**Key pointer-array relationship:**
\`\`\`c
int arr[5] = {3, 1, 4, 1, 5};
int *p = arr;     // p points to first element
*(p + 0) == arr[0]  // 3
*(p + 2) == arr[2]  // 4
\`\`\`

**Algorithm:**
1. Set \`min = *p\` (first element), \`pos = 0\`
2. Traverse with pointer: for each element, if \`*(p+i) < min\`, update min and pos
3. Print min and pos+1 (1-indexed for humans)

**Trace for [3, 1, 4, 1, 5]:**
| i | *(p+i) | min | pos |
|---|--------|-----|-----|
| 0 | 3 | 3 | 0 |
| 1 | 1 | **1** | **1** |
| 2 | 4 | 1 | 1 |
| 3 | 1 | 1 | 1 (tie, not updated) |
| 4 | 5 | 1 | 1 |
Result: Smallest = 1 at position 2 (1-indexed)

**Pointer increment style:** Some solutions use \`p++\` instead of \`*(p+i)\` — both are valid.`,
      blocks: [
        {
          type: "text",
          content:
            "Since arrays and pointers are closely related in C, we can use a pointer to traverse an array. If `p = arr`, then:\n- `*p` or `*(p+0)` → first element\n- `*(p+1)` → second element\n- `*(p+i)` → element at index `i`\n\nTo find the smallest element, we initialise the minimum to the first element and compare every other element using pointer arithmetic, tracking the position of the minimum.",
        },
        {
          type: "code",
          language: "c",
          title: "Find smallest element and position using pointers",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int arr[50], n, i;
    int *p;
    int min, pos;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter %d elements:\\n", n);
    for (i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    p = arr;          // pointer to first element
    min = *p;         // assume first element is smallest
    pos = 0;

    // Traverse using pointer arithmetic
    for (i = 1; i < n; i++) {
        if (*(p + i) < min) {
            min = *(p + i);
            pos = i;
        }
    }

    printf("Smallest number = %d\\n", min);
    printf("Position in array = %d (1-indexed)\\n", pos + 1);

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Pointer traversal of array",
          content: `graph LR
    subgraph "int arr[5] = {3, 1, 4, 1, 5}"
        A["*(p+0)<br/>arr[0]=3"] --> B["*(p+1)<br/>arr[1]=1 ← min"]
        B --> C["*(p+2)<br/>arr[2]=4"]
        C --> D["*(p+3)<br/>arr[3]=1"]
        D --> E["*(p+4)<br/>arr[4]=5"]
    end
    P["p = arr<br/>(base address)"] -->|"points to"| A`,
        },
      ],
    },
    {
      id: "qb-m6-q6",
      title: "Write a short note on: a) fopen  b) fclose",
      source: "Question Bank - Module 6",
      marks: 5,
      notes: `**fopen opens a file and returns a FILE pointer. fclose closes it and flushes the buffer.**

**fopen syntax:**
\`\`\`c
FILE *fp = fopen("filename.txt", "mode");
if(fp == NULL) { printf("Cannot open file"); exit(1); }
\`\`\`

**File opening modes:**
| Mode | Meaning | File exists? | File absent? |
|------|---------|-------------|--------------|
| "r" | Read | Opens it | Returns NULL |
| "w" | Write | Overwrites | Creates new |
| "a" | Append | Appends | Creates new |
| "r+" | Read+Write | Opens it | Returns NULL |
| "w+" | Read+Write | Overwrites | Creates new |

**fclose syntax:**
\`\`\`c
fclose(fp);
\`\`\`
Returns 0 on success, EOF on error.

**Why fclose is critical:**
- Flushes all buffered writes to disk
- Releases the FILE handle
- Without it: data may be lost or file may be corrupted!

**Header needed:** \`#include<stdio.h>\` for ALL file functions.`,
      blocks: [
        {
          type: "text",
          content:
            "File handling in C is done using a `FILE` pointer and functions from `<stdio.h>`.\n\n---\n\n**a) `fopen()` — Open a File**\n\n`fopen()` opens a file and returns a `FILE*` pointer to it. If the file cannot be opened, it returns `NULL`.\n\n**Syntax:** `FILE *fp = fopen(\"filename\", \"mode\");`\n\n**Common modes:**\n- `\"r\"` — Open for **reading** (file must exist)\n- `\"w\"` — Open for **writing** (creates new or overwrites existing)\n- `\"a\"` — Open for **appending** (creates new or appends to existing)\n- `\"r+\"` — Open for **both reading and writing**\n\nAlways check if `fp == NULL` after `fopen()` to handle errors gracefully.\n\n---\n\n**b) `fclose()` — Close a File**\n\n`fclose()` closes an open file. It flushes any data remaining in the output buffer to disk and releases the `FILE` pointer.\n\n**Syntax:** `fclose(fp);`\n\n**Why it is important:**\n- Ensures all buffered data is **written to disk**.\n- **Frees system resources** (file descriptors).\n- Prevents **data corruption** or loss.\n- Returns `0` on success and `EOF` on failure.",
        },
        {
          type: "code",
          language: "c",
          title: "Using fopen and fclose",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    FILE *fp;

    // fopen: open file for writing (creates if not exists)
    fp = fopen("sample.txt", "w");

    // Always check for NULL
    if (fp == NULL) {
        printf("Error: Cannot open file!\\n");
        exit(1);
    }

    printf("File opened successfully.\\n");

    // Write something to the file
    fprintf(fp, "Hello, File Handling in C!\\n");

    // fclose: close the file, flush buffers
    if (fclose(fp) == 0)
        printf("File closed successfully.\\n");
    else
        printf("Error closing file.\\n");

    getch();
}`,
        },
        {
          type: "diagram",
          title: "File open-use-close lifecycle",
          content: `graph LR
    A["fopen()<br/>Open file, get FILE*"] -->|"fp != NULL"| B["Read/Write<br/>fprintf, fscanf, fgets, fputs"]
    B --> C["fclose()<br/>Flush buffer, release handle"]
    A -->|"fp == NULL"| D["Error handling<br/>exit(1)"]`,
        },
      ],
    },
    {
      id: "qb-m6-q7",
      title: "W.A.P. to read a text file and then print its content on the screen.",
      source: "Question Bank - Module 6",
      marks: 5,
      notes: `**Pattern: fopen with "r" → read char by char with fgetc → fclose**

**fgetc reads one character at a time. EOF signals end of file.**

\`\`\`c
FILE *fp = fopen("file.txt", "r");
char ch;
while((ch = fgetc(fp)) != EOF)
    putchar(ch);
fclose(fp);
\`\`\`

**Alternative using fgets (line by line):**
\`\`\`c
char line[200];
while(fgets(line, 200, fp) != NULL)
    printf("%s", line);
\`\`\`

**Common mistakes:**
1. Opening with "w" instead of "r" → wipes the file!
2. Not checking for NULL after fopen
3. Using \`fclose\` before printing
4. Forgetting EOF check → infinite loop

**EOF = End Of File marker**
- \`fgetc\` returns EOF (usually -1) when file ends
- Declared as macro in \`<stdio.h>\`

**The file must exist before running the program** — or fopen returns NULL.`,
      blocks: [
        {
          type: "text",
          content:
            "To read and display a file's content, we:\n1. Open the file in **read mode** (`\"r\"`) using `fopen()`.\n2. Read the file **character by character** using `fgetc()` until `EOF` is reached.\n3. Print each character to the screen using `putchar()` or `printf()`.\n4. Close the file using `fclose()`.\n\n**Key function — `fgetc(fp)`:**\n- Reads one character from the file pointed to by `fp`.\n- Returns the character read as an `int`.\n- Returns `EOF` (End Of File) when there are no more characters to read.",
        },
        {
          type: "code",
          language: "c",
          title: "Read and print a text file",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    FILE *fp;
    char ch;

    // Open file in READ mode
    fp = fopen("sample.txt", "r");

    if (fp == NULL) {
        printf("Error: File not found or cannot be opened!\\n");
        exit(1);
    }

    printf("Contents of sample.txt:\\n");
    printf("------------------------\\n");

    // Read and print one character at a time until EOF
    while ((ch = fgetc(fp)) != EOF) {
        putchar(ch);    // print character to screen
    }

    printf("\\n------------------------\\n");
    printf("End of file.\\n");

    // Close the file
    fclose(fp);

    getch();
}`,
        },
        {
          type: "diagram",
          title: "File reading flow",
          content: `graph TD
    A["fopen('sample.txt', 'r')"] --> B{fp == NULL?}
    B -->|"Yes"| C["Print error<br/>exit(1)"]
    B -->|"No"| D["fgetc(fp)<br/>Read one char"]
    D --> E{ch == EOF?}
    E -->|"No"| F["putchar(ch)<br/>Print character"]
    F --> D
    E -->|"Yes"| G["fclose(fp)<br/>Done"]`,
        },
      ],
    },
    {
      id: "qb-m6-q8",
      title: "W.A.P. to copy the contents from one file to another.",
      source: "Question Bank - Module 6",
      marks: 5,
      notes: `**Pattern: Open source for "r" + destination for "w" → copy char by char → close both**

\`\`\`c
FILE *src  = fopen("source.txt", "r");
FILE *dest = fopen("dest.txt",   "w");
char ch;
while((ch = fgetc(src)) != EOF)
    fputc(ch, dest);    // write char to destination
fclose(src);
fclose(dest);
\`\`\`

**fputc(char, fp):** writes a single character to the file.

**Key points:**
1. Open SOURCE with "r" and DESTINATION with "w"
2. "w" will create dest file if it doesn't exist, or overwrite if it does
3. Copy character by character using fgetc + fputc
4. Close BOTH files at the end

**Error checks to add:**
- Check src != NULL (source must exist)
- Check dest != NULL (disk might be full)

**Can also use fgets/fputs for line-by-line copy:**
\`\`\`c
char line[200];
while(fgets(line, 200, src) != NULL)
    fputs(line, dest);
\`\`\`

**After running:** open dest.txt — it will be an exact copy of source.txt.`,
      blocks: [
        {
          type: "text",
          content:
            "To copy a file's contents to another file, we:\n1. Open the **source file** in read mode (`\"r\"`).\n2. Open the **destination file** in write mode (`\"w\"`) — this creates it if it doesn't exist.\n3. Read each character from the source using `fgetc()` and write it to the destination using `fputc()`, until `EOF`.\n4. Close **both** files.\n\n**Key function — `fputc(ch, fp)`:**\n- Writes the character `ch` to the file pointed to by `fp`.\n- Returns the character written, or `EOF` on error.",
        },
        {
          type: "code",
          language: "c",
          title: "Copy contents from one file to another",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    FILE *src, *dest;
    char ch;
    char srcName[50], destName[50];

    printf("Enter source file name: ");
    scanf("%s", srcName);
    printf("Enter destination file name: ");
    scanf("%s", destName);

    // Open source in READ mode
    src = fopen(srcName, "r");
    if (src == NULL) {
        printf("Error: Source file '%s' not found!\\n", srcName);
        exit(1);
    }

    // Open destination in WRITE mode
    dest = fopen(destName, "w");
    if (dest == NULL) {
        printf("Error: Cannot create destination file!\\n");
        fclose(src);
        exit(1);
    }

    // Copy character by character
    while ((ch = fgetc(src)) != EOF) {
        fputc(ch, dest);
    }

    printf("File copied successfully from '%s' to '%s'.\\n", srcName, destName);

    // Close both files
    fclose(src);
    fclose(dest);

    getch();
}`,
        },
        {
          type: "diagram",
          title: "File copy flow",
          content: `graph LR
    subgraph "Source"
        A["source.txt<br/>(fopen 'r')"]
    end
    subgraph "Copy loop"
        B["fgetc(src)<br/>read one char"] -->|"not EOF"| C["fputc(ch, dest)<br/>write to dest"]
        C --> B
        B -->|"EOF"| D["Close both files"]
    end
    subgraph "Destination"
        E["dest.txt<br/>(fopen 'w')"]
    end
    A --> B
    C --> E`,
        },
      ],
    },
    {
      id: "qb-m6-q9",
      title: "W.A.P. to input text from the keyboard and write it in a file.",
      source: "Question Bank - Module 6",
      marks: 5,
      notes: `**Pattern: fopen with "w" → take input from keyboard → write to file with fputs/fprintf → fclose**

**Three common ways to write to a file:**
| Function | Use for |
|----------|---------|
| \`fputc(ch, fp)\` | Single character |
| \`fputs(str, fp)\` | A string (no newline auto-added) |
| \`fprintf(fp, fmt, ...)\` | Formatted output (like printf) |

**Taking multi-line input from keyboard:**
\`\`\`c
char line[200];
printf("Enter text (type 'done' to stop):\\n");
while(1) {
    gets(line);
    if(strcmp(line, "done") == 0) break;
    fputs(line, fp);
    fputc('\\n', fp);
}
\`\`\`

**Alternatively — read entire input at once:**
\`\`\`c
gets(text);
fputs(text, fp);
\`\`\`

**After running:** the file is created on disk. Open it with a text editor to verify!

**Common mistake:** Opening with "r" instead of "w" — program will crash since "r" can't write.`,
      blocks: [
        {
          type: "text",
          content:
            "To write keyboard input to a file:\n1. Open a file in **write mode** (`\"w\"`) using `fopen()` — creates the file if it doesn't exist.\n2. Accept input from the user using `gets()` or `scanf()`.\n3. Write the input to the file using `fputs()` or `fprintf()`.\n4. Close the file using `fclose()` to ensure data is saved.\n\n**`fputs(str, fp)`** — writes a string to a file (does not add a newline automatically).\n\n**`fprintf(fp, format, ...)`** — works exactly like `printf()` but writes to a file instead of the screen.",
        },
        {
          type: "code",
          language: "c",
          title: "Input text from keyboard and write to file",
          content: `#include<stdio.h>
#include<conio.h>
#include<string.h>

void main() {
    clrscr();
    FILE *fp;
    char filename[50];
    char line[200];

    printf("Enter the file name to write to: ");
    scanf("%s", filename);
    getchar();  // consume leftover newline from scanf

    // Open file in WRITE mode
    fp = fopen(filename, "w");
    if (fp == NULL) {
        printf("Error: Cannot create file!\\n");
        exit(1);
    }

    printf("Enter text line by line.\\n");
    printf("Type 'done' on a new line to stop.\\n\\n");

    // Read lines from keyboard and write to file
    while (1) {
        fgets(line, 200, stdin);   // read one line from keyboard

        // Remove trailing newline from fgets
        int len = strlen(line);
        if (len > 0 && line[len-1] == '\\n')
            line[len-1] = '\\0';

        // Stop if user types 'done'
        if (strcmp(line, "done") == 0)
            break;

        // Write line to file (add newline back)
        fprintf(fp, "%s\\n", line);
    }

    printf("\\nText written to '%s' successfully.\\n", filename);

    // Close the file
    fclose(fp);

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Keyboard to file write flow",
          content: `graph TD
    A["fopen(filename, 'w')<br/>Create/open file"] --> B{fp == NULL?}
    B -->|"Yes"| C["Error: exit(1)"]
    B -->|"No"| D["fgets(line, stdin)<br/>Read line from keyboard"]
    D --> E{line == 'done'?}
    E -->|"No"| F["fprintf(fp, line)<br/>Write line to file"]
    F --> D
    E -->|"Yes"| G["fclose(fp)<br/>Save and close"]`,
        },
      ],
    },
  ],
}