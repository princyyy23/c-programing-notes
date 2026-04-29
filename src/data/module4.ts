import type { CourseOutcome } from "@/types"

export const module4: CourseOutcome = {
  id: "qb-m4",
  title: "Question Bank - Module 4: Arrays and Strings",
  shortTitle: "Module 4",
  description: "Arrays, strings, matrix operations, sorting, and standard string library functions in C.",
  icon: "Grid3X3",
  color: "violet",
  questions: [
    {
      id: "qb-m4-q1",
      title: "Define Array.",
      source: "Question Bank - Module 4",
      marks: 5,
      notes: `**Array = a collection of same-type elements stored in contiguous memory locations, accessed by index**

**Memory picture (int arr[5]):**
\`\`\`
Address:  1000   1004   1008   1012   1016
Index:    [0]    [1]    [2]    [3]    [4]
Value:     10     20     30     40     50
\`\`\`

**Key rules to remember:**
| Rule | Detail |
|------|--------|
| Indexing | Starts from **0**, last index = size-1 |
| Size | Must be a **constant** (not variable in C89) |
| Type | All elements must be **same data type** |
| Memory | Elements are stored in **contiguous** locations |

**Declaration syntax:** \`datatype arrayName[size];\`
**Initialisation:** \`int arr[5] = {10, 20, 30, 40, 50};\`

**Common mistake:** Accessing \`arr[5]\` in a size-5 array → undefined behaviour (valid indices: 0–4).

**Types of arrays:** 1D (list), 2D (matrix/table), Multi-dimensional.`,
      blocks: [
        {
          type: "text",
          content:
            "An **array** is a collection of elements of the **same data type** stored in **contiguous memory locations**. Each element is accessed using an **index** (starting from 0).\n\n**Advantages:**\n- Efficient access using index — O(1) time\n- Easy to iterate using loops\n- Useful for storing lists, tables, matrices\n\n**Syntax:**\n```\ndatatype arrayName[size];\n```\n\n**Types of Arrays:**\n1. **One-dimensional array** — a simple list of values\n2. **Two-dimensional array** — a table/matrix with rows and columns\n3. **Multi-dimensional array** — arrays of arrays",
        },
        {
          type: "code",
          language: "c",
          title: "Array declaration, initialisation & access",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int arr[5] = {10, 20, 30, 40, 50};
    int i;

    printf("Array elements:\\n");
    for (i = 0; i < 5; i++) {
        printf("arr[%d] = %d\\n", i, arr[i]);
    }

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Array Memory Layout",
          content: `graph LR
    subgraph "int arr[5] — contiguous memory"
        A["arr[0]<br/>10"] --> B["arr[1]<br/>20"]
        B --> C["arr[2]<br/>30"]
        C --> D["arr[3]<br/>40"]
        D --> E["arr[4]<br/>50"]
    end`,
        },
      ],
    },
    {
      id: "qb-m4-q2",
      title: "Write a program to print the sum of any 10 natural numbers entered using the keyboard.",
      source: "Question Bank - Module 4",
      marks: 5,
      notes: `**Simple pattern: Read into array using loop → sum using another loop (or same loop)**

\`\`\`c
int arr[10], sum = 0, i;
for(i = 0; i < 10; i++) {
    scanf("%d", &arr[i]);
    sum += arr[i];       // accumulate in same loop
}
\`\`\`

**Why use an array?** Question says "10 numbers entered" — array stores all values. Without array you'd need 10 separate variables!

**Dry run (first 3 inputs: 5, 3, 7):**
| i | arr[i] | sum |
|---|--------|-----|
| 0 | 5 | 5 |
| 1 | 3 | 8 |
| 2 | 7 | 15 |

**Initialise sum = 0** before the loop, otherwise garbage value corrupts result.

**Optimisation:** You can skip the array entirely if you only need the sum (just use a temp variable). But question implies array usage.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Sum of 10 numbers using array",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int arr[10], sum = 0, i;

    printf("Enter 10 numbers:\\n");
    for (i = 0; i < 10; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }

    printf("Sum = %d\\n", sum);
    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m4-q3",
      title: "W.A.P. to find the reverse of a string without using standard library functions.",
      source: "Question Bank - Module 4",
      marks: 5,
      notes: `**Two-pointer swap technique — no library functions needed**

\`\`\`
Original:  H  E  L  L  O
Index:     0  1  2  3  4
           ↑              ↑
          start          end
\`\`\`
Swap \`str[start]↔str[end]\`, then move both inward until they cross.

**Step 1:** Find length manually (loop until \`'\\0'\`).
**Step 2:** Swap characters from both ends moving inward.

**Trace for "HELLO":**
| start | end | swap | result |
|-------|-----|------|--------|
| 0 | 4 | H↔O | OELLH |
| 1 | 3 | E↔L | OLLEH |
| 2 | 2 | done | OLLEH |

**Why no strrev/strlen?** Question explicitly says "without standard library functions". Using them = zero marks!

**Manual strlen replacement:**
\`\`\`c
int len = 0;
while(str[len] != '\\0') len++;
\`\`\``,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Reverse string without library functions",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    char str[100], temp;
    int i, len = 0;

    printf("Enter a string: ");
    gets(str);

    // Find length manually (no strlen)
    while (str[len] != '\\0')
        len++;

    // Swap from both ends
    for (i = 0; i < len / 2; i++) {
        temp = str[i];
        str[i] = str[len - 1 - i];
        str[len - 1 - i] = temp;
    }

    printf("Reversed string: %s\\n", str);
    getch();
}`,
        },
        {
          type: "diagram",
          title: "Two-pointer swap process",
          content: `graph LR
    subgraph "Step 1: i=0"
        A1["[H] E L L [O]"] -->|"swap H↔O"| B1["[O] E L L [H]"]
    end
    subgraph "Step 2: i=1"
        A2["O [E] L [L] H"] -->|"swap E↔L"| B2["O [L] L [E] H"]
    end
    subgraph "Done: i=2 (middle)"
        A3["O L [L] E H"] -->|"no swap needed"| B3["O L L E H"]
    end`,
        },
      ],
    },
    {
      id: "qb-m4-q4",
      title: "W.A.P. to print the transpose of a matrix.",
      source: "Question Bank - Module 4",
      marks: 5,
      notes: `**Transpose = rows become columns and columns become rows**

**Rule: trans[j][i] = original[i][j]**

**Visual example (2×3 → 3×2):**
\`\`\`
Original (2×3):      Transpose (3×2):
1  2  3              1  4
4  5  6              2  5
                     3  6
\`\`\`

**The nested loop pattern:**
\`\`\`c
for(i = 0; i < r; i++)
    for(j = 0; j < c; j++)
        trans[j][i] = mat[i][j];  // just swap i,j
\`\`\`

**Key insight:** Original matrix is r×c → Transpose is c×r. So when printing transpose, outer loop runs \`c\` times, inner runs \`r\` times.

**Square matrix shortcut:** For n×n matrix, you can transpose in-place by swapping \`mat[i][j]↔mat[j][i]\` for \`j > i\` (upper triangle only).`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Transpose of a matrix",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int mat[10][10], trans[10][10];
    int r, c, i, j;

    printf("Enter rows and columns: ");
    scanf("%d %d", &r, &c);

    printf("Enter matrix elements:\\n");
    for (i = 0; i < r; i++)
        for (j = 0; j < c; j++)
            scanf("%d", &mat[i][j]);

    // Transpose: swap rows and columns
    for (i = 0; i < r; i++)
        for (j = 0; j < c; j++)
            trans[j][i] = mat[i][j];

    printf("Transpose:\\n");
    for (i = 0; i < c; i++) {
        for (j = 0; j < r; j++)
            printf("%d ", trans[i][j]);
        printf("\\n");
    }

    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m4-q5",
      title: "W.A.P. for the addition of two matrices.",
      source: "Question Bank - Module 4",
      marks: 5,
      notes: `**Matrix addition: C[i][j] = A[i][j] + B[i][j] — element by element**

**Both matrices MUST have same dimensions (r×c).**

**Visual example (2×2):**
\`\`\`
A:        B:        C = A+B:
1  2      5  6      6   8
3  4      7  8      10  12
\`\`\`

**The pattern is dead simple — 3 nested-loop blocks:**
1. Read matrix A
2. Read matrix B
3. Add: \`c[i][j] = a[i][j] + b[i][j]\`

**Common exam mistake:** Using different loop limits for A and B — they must be identical (same r, c).

**For subtraction:** Just change \`+\` to \`-\`. Same code structure!`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Addition of two matrices",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int a[10][10], b[10][10], c[10][10];
    int r, col, i, j;

    printf("Enter rows and columns: ");
    scanf("%d %d", &r, &col);

    printf("Enter Matrix A:\\n");
    for (i = 0; i < r; i++)
        for (j = 0; j < col; j++)
            scanf("%d", &a[i][j]);

    printf("Enter Matrix B:\\n");
    for (i = 0; i < r; i++)
        for (j = 0; j < col; j++)
            scanf("%d", &b[i][j]);

    // Addition
    for (i = 0; i < r; i++)
        for (j = 0; j < col; j++)
            c[i][j] = a[i][j] + b[i][j];

    printf("Result (A + B):\\n");
    for (i = 0; i < r; i++) {
        for (j = 0; j < col; j++)
            printf("%d ", c[i][j]);
        printf("\\n");
    }

    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m4-q6",
      title: "W.A.P. for matrix multiplication.",
      source: "Question Bank - Module 4",
      marks: 5,
      notes: `**Matrix multiplication rule: A(m×n) × B(n×p) = C(m×p)**

**Condition: columns of A must equal rows of B (n must match).**

**Formula:** \`C[i][j] = Σ (A[i][k] × B[k][j])\` for k = 0 to n-1

**Visual (2×3 × 3×2 = 2×2):**
\`\`\`
A:          B:          C:
1  2  3     7  8        58   64
4  5  6     9  10       139  154
            11 12
C[0][0] = 1×7 + 2×9 + 3×11 = 7+18+33 = 58
\`\`\`

**Triple nested loop — mnemonic i-j-k:**
\`\`\`c
for(i) for(j) {
    c[i][j] = 0;           // MUST initialise to 0
    for(k) c[i][j] += a[i][k] * b[k][j];
}
\`\`\`

**Critical mistake:** Forgetting \`c[i][j] = 0\` before the k-loop — garbage values get added!`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Matrix multiplication",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int a[10][10], b[10][10], c[10][10];
    int m, n, p, i, j, k;

    printf("Enter rows & cols of A (m n): ");
    scanf("%d %d", &m, &n);
    printf("Enter cols of B (p): ");
    scanf("%d", &p);

    printf("Enter Matrix A (%dx%d):\\n", m, n);
    for (i = 0; i < m; i++)
        for (j = 0; j < n; j++)
            scanf("%d", &a[i][j]);

    printf("Enter Matrix B (%dx%d):\\n", n, p);
    for (i = 0; i < n; i++)
        for (j = 0; j < p; j++)
            scanf("%d", &b[i][j]);

    // Multiplication
    for (i = 0; i < m; i++) {
        for (j = 0; j < p; j++) {
            c[i][j] = 0;
            for (k = 0; k < n; k++)
                c[i][j] += a[i][k] * b[k][j];
        }
    }

    printf("Result (A x B):\\n");
    for (i = 0; i < m; i++) {
        for (j = 0; j < p; j++)
            printf("%d ", c[i][j]);
        printf("\\n");
    }

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Matrix multiplication dimension rule",
          content: `graph LR
    A["A<br/>m × n"] -->|"n must match"| B["B<br/>n × p"]
    B --> C["C = A × B<br/>m × p"]`,
        },
      ],
    },
    {
      id: "qb-m4-q7",
      title: "W.A.P. for sorting an array.",
      source: "Question Bank - Module 4",
      marks: 5,
      notes: `**Bubble Sort — simplest sorting algorithm for exams**

**Idea:** Repeatedly compare adjacent elements and swap if out of order. Largest element "bubbles" to the end each pass.

**Trace for [5, 3, 8, 1]:**
| Pass | Comparisons & Swaps | Result |
|------|---------------------|--------|
| 1 | 5↔3, 5↔8, 8↔1 | [3, 5, 1, 8] |
| 2 | 3↔5, 5↔1 | [3, 1, 5, 8] |
| 3 | 3↔1 | [1, 3, 5, 8] ✓ |

**Nested loop pattern:**
\`\`\`c
for(i = 0; i < n-1; i++)        // n-1 passes
    for(j = 0; j < n-1-i; j++)  // shrinking window
        if(arr[j] > arr[j+1])   // compare adjacent
            swap arr[j], arr[j+1];
\`\`\`

**Why \`n-1-i\`?** After each pass, the largest unsorted element is already at the end — no need to check it again.

**Time complexity:** O(n²) — not efficient but easiest to write in exams.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Bubble Sort",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int arr[50], n, i, j, temp;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter %d elements:\\n", n);
    for (i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    // Bubble Sort
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    printf("Sorted array:\\n");
    for (i = 0; i < n; i++)
        printf("%d ", arr[i]);

    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m4-q8",
      title: "Explain any five string functions in C.",
      source: "Question Bank - Module 4",
      marks: 5,
      notes: `**All string functions need \`#include<string.h>\`**

**Quick reference table:**
| Function | Purpose | Returns |
|----------|---------|---------|
| \`strlen(s)\` | Length (excl. \\0) | int |
| \`strcpy(dest, src)\` | Copy src → dest | dest pointer |
| \`strcat(dest, src)\` | Append src to dest | dest pointer |
| \`strcmp(s1, s2)\` | Compare two strings | 0 if equal, +/- otherwise |
| \`strrev(s)\` | Reverse in-place | reversed string |

**strcmp return value trick:**
- Returns **0** → strings are equal
- Returns **< 0** → s1 comes before s2 (alphabetically)
- Returns **> 0** → s1 comes after s2

**Common mistake:** Using \`==\` to compare strings → compares addresses, not content! Always use \`strcmp()\`.

**Memory safety:** \`strcpy\` and \`strcat\` don't check destination size — buffer overflow risk!`,
      blocks: [
        {
          type: "text",
          content:
            "All string functions require `#include<string.h>`. Strings in C are character arrays terminated by `'\\0'`.\n\n**1. `strlen(str)`** — Returns the length of the string (excluding the null character `'\\0'`).\n\n**2. `strcpy(dest, src)`** — Copies the source string into the destination string.\n\n**3. `strcat(dest, src)`** — Concatenates (appends) the source string at the end of the destination string.\n\n**4. `strcmp(s1, s2)`** — Compares two strings character by character. Returns `0` if equal, a negative value if `s1 < s2`, and a positive value if `s1 > s2`.\n\n**5. `strrev(str)`** — Reverses the string in place (Turbo C specific, not part of standard C).",
        },
        {
          type: "code",
          language: "c",
          title: "Demonstrating five string functions",
          content: `#include<stdio.h>
#include<conio.h>
#include<string.h>

void main() {
    clrscr();
    char s1[50] = "Hello";
    char s2[50] = "World";
    char s3[100];

    // 1. strlen
    printf("Length of s1 = %d\\n", strlen(s1));     // 5

    // 2. strcpy
    strcpy(s3, s1);
    printf("After strcpy: s3 = %s\\n", s3);         // Hello

    // 3. strcat
    strcat(s3, s2);
    printf("After strcat: s3 = %s\\n", s3);         // HelloWorld

    // 4. strcmp
    int result = strcmp(s1, s2);
    if (result == 0)
        printf("s1 and s2 are equal\\n");
    else
        printf("s1 and s2 are NOT equal\\n");        // NOT equal

    // 5. strrev
    strrev(s1);
    printf("After strrev: s1 = %s\\n", s1);         // olleH

    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m4-q9",
      title: "W.A.P. to check if the entered string is a palindrome or not.",
      source: "Question Bank - Module 4",
      marks: 5,
      notes: `**Palindrome = reads same forwards and backwards (e.g., MADAM, LEVEL, RACECAR)**

**Two-pointer approach (without library functions):**
\`\`\`c
int isPalindrome = 1;  // assume true
int start = 0, end = len - 1;
while(start < end) {
    if(str[start] != str[end]) {
        isPalindrome = 0;  // mismatch found
        break;
    }
    start++; end--;
}
\`\`\`

**Trace for "MADAM":**
| start | end | str[start] | str[end] | Match? |
|-------|-----|-----------|----------|--------|
| 0 | 4 | M | M | ✓ |
| 1 | 3 | A | A | ✓ |
| 2 | 2 | done | — | Palindrome! |

**Alternative using strrev + strcmp:**
\`\`\`c
strcpy(temp, str);
strrev(temp);
if(strcmp(str, temp) == 0) printf("Palindrome");
\`\`\`
This is shorter but uses library functions.

**Case sensitivity:** "Madam" ≠ "madaM" unless you convert to same case first with \`tolower()\`.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Palindrome check (without library functions)",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    char str[100];
    int i, len = 0, isPalin = 1;

    printf("Enter a string: ");
    gets(str);

    // Find length manually
    while (str[len] != '\\0')
        len++;

    // Compare from both ends
    for (i = 0; i < len / 2; i++) {
        if (str[i] != str[len - 1 - i]) {
            isPalin = 0;
            break;
        }
    }

    if (isPalin)
        printf("%s is a Palindrome\\n", str);
    else
        printf("%s is NOT a Palindrome\\n", str);

    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m4-q10",
      title: "Write a program to count the number of digits, alphabets, and special characters in an input string.",
      source: "Question Bank - Module 4",
      marks: 5,
      notes: `**Three-category classifier — check each character one by one**

| Category | ASCII Range | Check |
|----------|-------------|-------|
| Uppercase | 65–90 | \`ch >= 'A' && ch <= 'Z'\` |
| Lowercase | 97–122 | \`ch >= 'a' && ch <= 'z'\` |
| Digit | 48–57 | \`ch >= '0' && ch <= '9'\` |
| Special | everything else (excl. space) | \`else\` |

**Or use \`<ctype.h>\` functions:** \`isalpha(ch)\`, \`isdigit(ch)\` — cleaner code.

**Trace for "Hello@123":**
| Char | H | e | l | l | o | @ | 1 | 2 | 3 |
|------|---|---|---|---|---|---|---|---|---|
| Type | A | A | A | A | A | S | D | D | D |

Result: Alphabets=5, Digits=3, Special=1

**Tip:** Decide whether spaces count as special. Most exam answers exclude spaces from special characters.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Count digits, alphabets, and special characters",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    char str[200];
    int i = 0, alphabets = 0, digits = 0, special = 0;

    printf("Enter a string: ");
    gets(str);

    while (str[i] != '\\0') {
        if ((str[i] >= 'A' && str[i] <= 'Z') ||
            (str[i] >= 'a' && str[i] <= 'z'))
            alphabets++;
        else if (str[i] >= '0' && str[i] <= '9')
            digits++;
        else if (str[i] != ' ' && str[i] != '\\n')
            special++;
        i++;
    }

    printf("Alphabets = %d\\n", alphabets);
    printf("Digits = %d\\n", digits);
    printf("Special Characters = %d\\n", special);

    getch();
}`,
        },
      ],
    },
  ],
}
