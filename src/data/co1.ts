import type { CourseOutcome } from "@/types"

export const co1: CourseOutcome = {
  id: "co1",
  title: "CO1: Algorithms, Operators, and Data Types",
  shortTitle: "CO1",
  description:
    "Fundamentals of algorithms, flowcharts, operators, data types, and tokens in C",
  icon: "GitBranch",
  color: "violet",
  questions: [
    // ────────────────────────────────────────────
    // Q1 – Flowchart: Largest of Three Numbers
    // ────────────────────────────────────────────
    {
      id: "co1-q1",
      title: "Draw flowchart to find largest of Three Numbers",
      source: "May 2022 End Semester Exam",
      marks: 5,
      blocks: [
        {
          type: "text",
          content:
            "The flowchart below reads three numbers **A**, **B**, and **C** and determines the largest among them by using a series of comparisons.\n\n**Logic:**\n1. Compare A with B.\n2. If A > B, compare A with C to decide between A and C.\n3. If B >= A, compare B with C to decide between B and C.",
        },
        {
          type: "diagram",
          title: "Flowchart – Largest of Three Numbers",
          content: `graph TD
    S([Start]) --> IN[/Read A, B, C/]
    IN --> D1{Is A > B?}
    D1 -->|Yes| D2{Is A > C?}
    D1 -->|No| D3{Is B > C?}
    D2 -->|Yes| RA[/Print A is Largest/]
    D2 -->|No| RC1[/Print C is Largest/]
    D3 -->|Yes| RB[/Print B is Largest/]
    D3 -->|No| RC2[/Print C is Largest/]
    RA --> E([End])
    RC1 --> E
    RB --> E
    RC2 --> E
    style S fill:#6366f1,stroke:#4f46e5,color:#fff
    style IN fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style D1 fill:#f59e0b,stroke:#d97706,color:#fff
    style D2 fill:#f59e0b,stroke:#d97706,color:#fff
    style D3 fill:#f59e0b,stroke:#d97706,color:#fff
    style RA fill:#10b981,stroke:#059669,color:#fff
    style RC1 fill:#10b981,stroke:#059669,color:#fff
    style RB fill:#10b981,stroke:#059669,color:#fff
    style RC2 fill:#10b981,stroke:#059669,color:#fff
    style E fill:#6366f1,stroke:#4f46e5,color:#fff`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q2 – Program: Numbers 1-9 and their Cubes
    // ────────────────────────────────────────────
    {
      id: "co1-q2",
      title:
        "Write a program in C to print numbers from 1 to 9 and their Cubes",
      source: "June 2022 End Semester Exam",
      marks: 5,
      blocks: [
        {
          type: "text",
          content:
            "We use a simple `for` loop iterating from 1 to 9. In each iteration we compute the cube as `i * i * i` and print both the number and its cube in a formatted table.",
        },
        {
          type: "code",
          language: "c",
          title: "Program – Numbers and their Cubes",
          content: `#include <stdio.h>

int main() {
    int i;

    printf("Number\\tCube\\n");
    printf("------\\t------\\n");

    for (i = 1; i <= 9; i++) {
        printf("%d\\t%d\\n", i, i * i * i);
    }

    return 0;
}`,
        },
        {
          type: "text",
          content:
            "**Expected Output:**\n\n| Number | Cube |\n|--------|------|\n| 1 | 1 |\n| 2 | 8 |\n| 3 | 27 |\n| 4 | 64 |\n| 5 | 125 |\n| 6 | 216 |\n| 7 | 343 |\n| 8 | 512 |\n| 9 | 729 |",
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q3 – Header Files in C
    // ────────────────────────────────────────────
    {
      id: "co1-q3",
      title: "What is a header file in C? Explain with an example",
      source: "May 2022 End Semester Exam",
      marks: 5,
      blocks: [
        {
          type: "text",
          content:
            "## Header Files in C\n\nA **header file** is a file with the `.h` extension that contains C declarations, macro definitions, and function prototypes that can be shared across multiple source files.\n\n### Purpose of Header Files\n- **Code reusability** -- declarations are written once and included wherever needed.\n- **Modularity** -- separate interface (`.h`) from implementation (`.c`).\n- **Consistency** -- every source file that includes the header sees the same declarations.\n\n### Types of Header Files\n\n| Type | Description | Example |\n|------|-------------|---------|\n| **Standard / System** | Provided by the C compiler/library | `<stdio.h>`, `<math.h>` |\n| **User-defined** | Created by the programmer | `\"myutils.h\"` |\n\n### Commonly Used Standard Header Files\n\n- `<stdio.h>` -- Standard I/O functions (`printf`, `scanf`, `fopen`, ...)\n- `<stdlib.h>` -- Memory allocation, process control (`malloc`, `exit`, ...)\n- `<string.h>` -- String manipulation (`strlen`, `strcpy`, ...)\n- `<math.h>` -- Mathematical functions (`sqrt`, `pow`, ...)\n- `<ctype.h>` -- Character classification (`isalpha`, `toupper`, ...)\n\nHeader files are included using the `#include` preprocessor directive. Angle brackets (`< >`) are used for system headers and double quotes (`\" \"`) for user-defined headers.",
        },
        {
          type: "code",
          language: "c",
          title: "Example – Using a Standard Header File",
          content: `#include <stdio.h>   /* standard I/O header */
#include <math.h>    /* math header for sqrt() */

int main() {
    double num = 25.0;
    double result;

    result = sqrt(num);   /* sqrt declared in math.h */

    printf("Square root of %.1f = %.1f\\n", num, result);

    return 0;
}
/* Output: Square root of 25.0 = 5.0 */`,
        },
        {
          type: "code",
          language: "c",
          title: "Example – Creating a User-Defined Header File (mymath.h)",
          content: `/* ----- mymath.h ----- */
#ifndef MYMATH_H
#define MYMATH_H

int add(int a, int b);
int multiply(int a, int b);

#endif

/* ----- mymath.c ----- */
#include "mymath.h"

int add(int a, int b) {
    return a + b;
}

int multiply(int a, int b) {
    return a * b;
}

/* ----- main.c ----- */
#include <stdio.h>
#include "mymath.h"

int main() {
    printf("Sum = %d\\n", add(3, 4));
    printf("Product = %d\\n", multiply(3, 4));
    return 0;
}`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q4 – Flowchart: Fibonacci Series
    // ────────────────────────────────────────────
    {
      id: "co1-q4",
      title: "Draw flowchart to display Fibonacci Series",
      source: "June 2022 End Semester Exam",
      marks: 5,
      blocks: [
        {
          type: "text",
          content:
            "## Fibonacci Series\n\nThe **Fibonacci series** is a sequence of numbers where each number is the sum of the two preceding ones:\n\n**0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...**\n\n**Algorithm:**\n1. Read `n` (number of terms).\n2. Set `a = 0`, `b = 1`.\n3. Print `a`.\n4. Compute `c = a + b`.\n5. Shift: `a = b`, `b = c`.\n6. Decrement counter and repeat until all terms are printed.",
        },
        {
          type: "diagram",
          title: "Flowchart – Fibonacci Series",
          content: `graph TD
    S([Start]) --> IN[/Read n/]
    IN --> INIT["Set a = 0, b = 1, i = 1"]
    INIT --> CHECK{Is i <= n?}
    CHECK -->|Yes| PRINT[/Print a/]
    PRINT --> CALC["c = a + b"]
    CALC --> SHIFT["a = b, b = c"]
    SHIFT --> INC["i = i + 1"]
    INC --> CHECK
    CHECK -->|No| E([End])
    style S fill:#6366f1,stroke:#4f46e5,color:#fff
    style IN fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style INIT fill:#06b6d4,stroke:#0891b2,color:#fff
    style CHECK fill:#f59e0b,stroke:#d97706,color:#fff
    style PRINT fill:#ec4899,stroke:#db2777,color:#fff
    style CALC fill:#10b981,stroke:#059669,color:#fff
    style SHIFT fill:#10b981,stroke:#059669,color:#fff
    style INC fill:#06b6d4,stroke:#0891b2,color:#fff
    style E fill:#6366f1,stroke:#4f46e5,color:#fff`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q5 – Precedence and Associativity
    // ────────────────────────────────────────────
    {
      id: "co1-q5",
      title: "What is precedence and associativity of operators",
      source: "May 2023 End Semester Exam",
      marks: 5,
      blocks: [
        {
          type: "text",
          content:
            '## Operator Precedence and Associativity in C\n\n### Operator Precedence\n\n**Precedence** determines the order in which operators are evaluated when an expression contains more than one operator.\n\nFor example, in the expression `2 + 3 * 4`, multiplication (`*`) has **higher precedence** than addition (`+`), so the expression evaluates as `2 + (3 * 4) = 14`, not `(2 + 3) * 4 = 20`.\n\n### Operator Associativity\n\n**Associativity** determines the order of evaluation when two operators of the **same precedence** appear in an expression.\n\n- **Left-to-right (L-R):** Most operators -- e.g. `a - b - c` is evaluated as `(a - b) - c`.\n- **Right-to-left (R-L):** Assignment, unary, ternary -- e.g. `a = b = 5` is evaluated as `a = (b = 5)`.\n\n### Precedence Table (High to Low)\n\n| Precedence | Operator(s) | Description | Associativity |\n|-----------|-------------|-------------|---------------|\n| 1 | `()` `[]` `->` `.` | Postfix / Member access | Left to Right |\n| 2 | `++` `--` (prefix) `+` `-` (unary) `!` `~` `*` `&` `sizeof` `(type)` | Unary | Right to Left |\n| 3 | `*` `/` `%` | Multiplicative | Left to Right |\n| 4 | `+` `-` | Additive | Left to Right |\n| 5 | `<<` `>>` | Bitwise Shift | Left to Right |\n| 6 | `<` `<=` `>` `>=` | Relational | Left to Right |\n| 7 | `==` `!=` | Equality | Left to Right |\n| 8 | `&` | Bitwise AND | Left to Right |\n| 9 | `^` | Bitwise XOR | Left to Right |\n| 10 | `\\|` | Bitwise OR | Left to Right |\n| 11 | `&&` | Logical AND | Left to Right |\n| 12 | `\\|\\|` | Logical OR | Left to Right |\n| 13 | `?:` | Ternary / Conditional | Right to Left |\n| 14 | `=` `+=` `-=` `*=` `/=` `%=` etc. | Assignment | Right to Left |\n| 15 | `,` | Comma | Left to Right |\n\n### Examples\n\n```\nint x = 2 + 3 * 4;       // x = 14  (multiplication first)\nint y = (2 + 3) * 4;     // y = 20  (parentheses override precedence)\nint z = 10 - 4 - 3;      // z = 3   (left-to-right associativity)\nint a, b;\na = b = 10;              // b = 10 first, then a = 10 (right-to-left)\n```\n\n**Key takeaway:** Use parentheses whenever the evaluation order is not obvious -- it improves readability and prevents subtle bugs.',
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q6 – Algorithm & Flowchart: Even or Odd
    // ────────────────────────────────────────────
    {
      id: "co1-q6",
      title: "Write an algorithm to check if given number even or odd",
      source: "June 2023 End Semester Exam",
      marks: 5,
      blocks: [
        {
          type: "text",
          content:
            "## Algorithm -- Check if a Number is Even or Odd\n\n**Algorithm: EvenOdd(N)**\n\n1. **Start**\n2. Read the number `N`.\n3. Compute `R = N mod 2` (remainder when N is divided by 2).\n4. If `R == 0`, then print **\"N is Even\"**.\n5. Else, print **\"N is Odd\"**.\n6. **Stop**\n\n**Explanation:**\n- A number is **even** if it is perfectly divisible by 2 (remainder = 0).\n- A number is **odd** if dividing by 2 leaves a remainder of 1.",
        },
        {
          type: "diagram",
          title: "Flowchart -- Even or Odd",
          content: `graph TD
    S([Start]) --> IN[/Read N/]
    IN --> CALC["R = N mod 2"]
    CALC --> CHECK{R == 0?}
    CHECK -->|Yes| EVEN[/Print N is Even/]
    CHECK -->|No| ODD[/Print N is Odd/]
    EVEN --> E([End])
    ODD --> E
    style S fill:#6366f1,stroke:#4f46e5,color:#fff
    style IN fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style CALC fill:#06b6d4,stroke:#0891b2,color:#fff
    style CHECK fill:#f59e0b,stroke:#d97706,color:#fff
    style EVEN fill:#10b981,stroke:#059669,color:#fff
    style ODD fill:#ef4444,stroke:#dc2626,color:#fff
    style E fill:#6366f1,stroke:#4f46e5,color:#fff`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q7 – Primitive Data Types in C
    // ────────────────────────────────────────────
    {
      id: "co1-q7",
      title: "What are the primitive data types in C?",
      source: "May 2022 End Semester Exam",
      marks: 5,
      blocks: [
        {
          type: "text",
          content:
            '## Primitive (Basic) Data Types in C\n\nPrimitive data types are the fundamental built-in types provided by the C language. They are also called **basic** or **primary** data types.\n\n### 1. Integer Type (`int`)\n- Stores whole numbers (positive, negative, or zero).\n- Typical size: **2 or 4 bytes** (platform-dependent).\n- Range (4 bytes): `-2,147,483,648` to `2,147,483,647`.\n- Example: `int age = 25;`\n\n### 2. Character Type (`char`)\n- Stores a single character (internally stored as an ASCII value).\n- Size: **1 byte**.\n- Range: `-128` to `127` (signed) or `0` to `255` (unsigned).\n- Example: `char grade = \'A\';`\n\n### 3. Floating-Point Type (`float`)\n- Stores single-precision decimal numbers.\n- Size: **4 bytes**.\n- Precision: ~6-7 significant digits.\n- Example: `float pi = 3.14f;`\n\n### 4. Double Type (`double`)\n- Stores double-precision decimal numbers.\n- Size: **8 bytes**.\n- Precision: ~15-16 significant digits.\n- Example: `double velocity = 29979245800.0;`\n\n### 5. Void Type (`void`)\n- Represents the **absence of a type**.\n- Used for functions that return nothing, generic pointers (`void *`), and function parameters that accept nothing.\n- Example: `void displayMenu(void);`\n\n### Type Modifiers\n\nPrimitive types can be modified with the following keywords:\n\n| Modifier | Effect | Example |\n|----------|--------|---------|\n| `short` | Reduces storage size | `short int count;` |\n| `long` | Increases storage size | `long int population;` |\n| `signed` | Allows negative values (default for int/char) | `signed int temp;` |\n| `unsigned` | Only non-negative values, doubles positive range | `unsigned int marks;` |\n\n### Summary Table\n\n| Data Type | Size (bytes) | Format Specifier | Range (typical) |\n|-----------|:------------:|:----------------:|:----------------|\n| `char` | 1 | `%c` | -128 to 127 |\n| `int` | 4 | `%d` | -2,147,483,648 to 2,147,483,647 |\n| `float` | 4 | `%f` | 3.4e-38 to 3.4e+38 |\n| `double` | 8 | `%lf` | 1.7e-308 to 1.7e+308 |\n| `short int` | 2 | `%hd` | -32,768 to 32,767 |\n| `long int` | 4 or 8 | `%ld` | varies |\n| `unsigned int` | 4 | `%u` | 0 to 4,294,967,295 |',
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q8 – Bitwise Operators in C
    // ────────────────────────────────────────────
    {
      id: "co1-q8",
      title: "Explain various Bitwise Operators in C",
      source: "June 2023 End Semester Exam",
      marks: 10,
      blocks: [
        {
          type: "text",
          content:
            '## Bitwise Operators in C\n\nBitwise operators work at the **bit level** -- they perform operations on individual bits of integer operands.\n\n### List of Bitwise Operators\n\n| Operator | Symbol | Description |\n|----------|:------:|-------------|\n| Bitwise AND | `&` | Sets bit to 1 if **both** bits are 1 |\n| Bitwise OR | `\\|` | Sets bit to 1 if **at least one** bit is 1 |\n| Bitwise XOR | `^` | Sets bit to 1 if bits are **different** |\n| Bitwise NOT | `~` | **Inverts** all bits (one\'s complement) |\n| Left Shift | `<<` | Shifts bits to the **left** by n positions |\n| Right Shift | `>>` | Shifts bits to the **right** by n positions |\n\n---\n\n### 1. Bitwise AND (`&`)\nReturns 1 only when **both** corresponding bits are 1.\n\n```\n  5  =  0101\n  3  =  0011\n-----------\n5 & 3 = 0001 = 1\n```\n\n### 2. Bitwise OR (`|`)\nReturns 1 when **at least one** corresponding bit is 1.\n\n```\n  5  =  0101\n  3  =  0011\n-----------\n5 | 3 = 0111 = 7\n```\n\n### 3. Bitwise XOR (`^`)\nReturns 1 when the corresponding bits are **different**.\n\n```\n  5  =  0101\n  3  =  0011\n-----------\n5 ^ 3 = 0110 = 6\n```\n\n### 4. Bitwise NOT (`~`)\nInverts every bit (one\'s complement). For a 32-bit int, `~5` = `-6`.\n\n```\n  5 = 00000000 00000000 00000000 00000101\n ~5 = 11111111 11111111 11111111 11111010 = -6 (in two\'s complement)\n```\n\n### 5. Left Shift (`<<`)\nShifts all bits to the left by a specified number of positions. Vacant bits on the right are filled with 0. Equivalent to multiplying by 2^n.\n\n```\n5 << 1 = 0101 << 1 = 1010 = 10\n5 << 2 = 0101 << 2 = 10100 = 20\n```\n\n### 6. Right Shift (`>>`)\nShifts all bits to the right by a specified number of positions. Equivalent to integer division by 2^n.\n\n```\n20 >> 1 = 10100 >> 1 = 01010 = 10\n20 >> 2 = 10100 >> 2 = 00101 = 5\n```',
        },
        {
          type: "code",
          language: "c",
          title: "Program Demonstrating All Bitwise Operators",
          content: `#include <stdio.h>

int main() {
    int a = 5, b = 3;

    printf("a = %d (binary: 0101)\\n", a);
    printf("b = %d (binary: 0011)\\n\\n", b);

    printf("a & b  = %d\\n", a & b);   /* AND:  0001 = 1  */
    printf("a | b  = %d\\n", a | b);   /* OR:   0111 = 7  */
    printf("a ^ b  = %d\\n", a ^ b);   /* XOR:  0110 = 6  */
    printf("~a     = %d\\n", ~a);      /* NOT:  -6        */
    printf("a << 1 = %d\\n", a << 1);  /* Left shift:  10 */
    printf("a >> 1 = %d\\n", a >> 1);  /* Right shift: 2  */

    return 0;
}

/*
Output:
a = 5 (binary: 0101)
b = 3 (binary: 0011)

a & b  = 1
a | b  = 7
a ^ b  = 6
~a     = -6
a << 1 = 10
a >> 1 = 2
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q9 – Largest of 3 using Ternary (with explanation)
    // ────────────────────────────────────────────
    {
      id: "co1-q9",
      title:
        "Develop a program to find the largest of given 3 numbers using ternary operator",
      source: "May 2023 End Semester Exam",
      marks: 5,
      blocks: [
        {
          type: "text",
          content:
            "## Ternary Operator in C\n\nThe **ternary (conditional) operator** `?:` is a shorthand for `if-else`.\n\n**Syntax:** `condition ? value_if_true : value_if_false`\n\n**Approach:** We nest two ternary operations:\n1. First, compare `a` and `b` to find the larger of the two.\n2. Then compare that result with `c` to find the overall largest.",
        },
        {
          type: "code",
          language: "c",
          title: "Program -- Largest of Three Numbers using Ternary Operator",
          content: `#include <stdio.h>

int main() {
    int a, b, c, largest;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);

    /* Nested ternary operator */
    largest = (a > b) ? ((a > c) ? a : c)
                      : ((b > c) ? b : c);

    printf("The largest number is: %d\\n", largest);

    return 0;
}

/*
Sample Run:
Enter three numbers: 12 45 28
The largest number is: 45
*/`,
        },
        {
          type: "text",
          content:
            "**How the nested ternary works step-by-step (for a=12, b=45, c=28):**\n\n1. `(a > b)` => `(12 > 45)` => **false**\n2. Since false, evaluate the third operand: `(b > c) ? b : c`\n3. `(b > c)` => `(45 > 28)` => **true**\n4. Result = `b` = **45**\n\nThe largest number is **45**.",
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q10 – Different Data Types in C
    // ────────────────────────────────────────────
    {
      id: "co1-q10",
      title: "Which are the different data types used in C?",
      source: "June 2022 End Semester Exam",
      marks: 5,
      blocks: [
        {
          type: "text",
          content:
            '## Data Types in C\n\nData types in C specify the **type of data** that a variable can store and the **amount of memory** allocated to it. They are broadly classified into the following categories:\n\n---\n\n### 1. Primary (Basic / Primitive) Data Types\n\nThese are the fundamental data types built into the language.\n\n| Data Type | Size | Description | Example |\n|-----------|------|-------------|---------|\n| `int` | 2 or 4 bytes | Whole numbers | `int x = 10;` |\n| `char` | 1 byte | Single character | `char ch = \'A\';` |\n| `float` | 4 bytes | Single-precision decimal | `float f = 3.14f;` |\n| `double` | 8 bytes | Double-precision decimal | `double d = 3.14159;` |\n| `void` | 0 bytes | No value / empty type | `void func(void);` |\n\n---\n\n### 2. Derived Data Types\n\nThese are built from the primary data types.\n\n- **Array** -- Collection of elements of the same type.\n  - Example: `int marks[5] = {90, 85, 78, 92, 88};`\n- **Pointer** -- Variable that stores the address of another variable.\n  - Example: `int *ptr = &x;`\n- **Function** -- A block of code that performs a specific task and can return a value.\n  - Example: `int add(int a, int b) { return a + b; }`\n\n---\n\n### 3. User-Defined Data Types\n\nThese allow programmers to create custom types.\n\n- **Structure (`struct`)** -- Groups variables of different types under one name.\n  - Example: `struct Student { char name[50]; int roll; float marks; };`\n- **Union (`union`)** -- Similar to struct but all members share the same memory location.\n  - Example: `union Data { int i; float f; char str[20]; };`\n- **Enumeration (`enum`)** -- Defines a set of named integer constants.\n  - Example: `enum Color { RED, GREEN, BLUE };`\n- **Typedef** -- Creates an alias for an existing type.\n  - Example: `typedef unsigned long ulong;`\n\n---\n\n### 4. Type Modifiers\n\nModifiers alter the size or sign of basic data types:\n\n| Modifier | Purpose |\n|----------|---------|\n| `short` | Reduces the size of `int` (usually 2 bytes) |\n| `long` | Increases the size of `int` or `double` |\n| `signed` | Allows negative values (default for `int` and `char`) |\n| `unsigned` | Restricts to non-negative values only |\n\n**Examples of modified types:**\n- `short int` -- 2 bytes\n- `long int` -- 4 or 8 bytes\n- `long long int` -- 8 bytes\n- `unsigned int` -- 4 bytes (0 to ~4.29 billion)\n- `long double` -- 10 or 16 bytes',
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q11 – Operators in C
    // ────────────────────────────────────────────
    {
      id: "co1-q11",
      title:
        "Discuss what is an operator? Illustrate the different operators used in C",
      source: "May 2023 End Semester Exam",
      marks: 10,
      blocks: [
        {
          type: "text",
          content:
            '## Operators in C\n\nAn **operator** is a special symbol that tells the compiler to perform a specific mathematical, relational, or logical operation on one or more operands. In the expression `a + b`, `+` is the operator and `a`, `b` are operands.\n\n---\n\n### 1. Arithmetic Operators\n\nPerform basic mathematical operations.\n\n| Operator | Description | Example | Result |\n|:--------:|-------------|---------|--------|\n| `+` | Addition | `5 + 3` | `8` |\n| `-` | Subtraction | `5 - 3` | `2` |\n| `*` | Multiplication | `5 * 3` | `15` |\n| `/` | Division | `7 / 2` | `3` (integer) |\n| `%` | Modulus (remainder) | `7 % 2` | `1` |\n\n---\n\n### 2. Relational (Comparison) Operators\n\nCompare two values and return 1 (true) or 0 (false).\n\n| Operator | Description | Example | Result |\n|:--------:|-------------|---------|--------|\n| `==` | Equal to | `5 == 5` | `1` |\n| `!=` | Not equal to | `5 != 3` | `1` |\n| `>` | Greater than | `5 > 3` | `1` |\n| `<` | Less than | `5 < 3` | `0` |\n| `>=` | Greater than or equal | `5 >= 5` | `1` |\n| `<=` | Less than or equal | `3 <= 5` | `1` |\n\n---\n\n### 3. Logical Operators\n\nCombine conditions and return a Boolean result.\n\n| Operator | Description | Example | Result |\n|:--------:|-------------|---------|--------|\n| `&&` | Logical AND | `(5>3) && (2<4)` | `1` |\n| `\\|\\|` | Logical OR | `(5>3) \\|\\| (2>4)` | `1` |\n| `!` | Logical NOT | `!(5>3)` | `0` |\n\n---\n\n### 4. Assignment Operators\n\nAssign values to variables.\n\n| Operator | Description | Equivalent |\n|:--------:|-------------|------------|\n| `=` | Simple assignment | `a = 5` |\n| `+=` | Add and assign | `a = a + 5` |\n| `-=` | Subtract and assign | `a = a - 5` |\n| `*=` | Multiply and assign | `a = a * 5` |\n| `/=` | Divide and assign | `a = a / 5` |\n| `%=` | Modulus and assign | `a = a % 5` |\n\n---\n\n### 5. Increment / Decrement Operators\n\n| Operator | Description | Example |\n|:--------:|-------------|--------|\n| `++a` | Pre-increment -- increment first, then use | `x = ++a;` |\n| `a++` | Post-increment -- use first, then increment | `x = a++;` |\n| `--a` | Pre-decrement | `x = --a;` |\n| `a--` | Post-decrement | `x = a--;` |\n\n---\n\n### 6. Bitwise Operators\n\nOperate on individual bits.\n\n| Operator | Description |\n|:--------:|-------------|\n| `&` | Bitwise AND |\n| `\\|` | Bitwise OR |\n| `^` | Bitwise XOR |\n| `~` | Bitwise NOT |\n| `<<` | Left Shift |\n| `>>` | Right Shift |\n\n---\n\n### 7. Conditional (Ternary) Operator\n\nShorthand for `if-else`.\n\n**Syntax:** `condition ? expression1 : expression2`\n\n**Example:** `max = (a > b) ? a : b;`\n\n---\n\n### 8. Special Operators\n\n| Operator | Description | Example |\n|:--------:|-------------|--------|\n| `sizeof` | Returns size of a type/variable in bytes | `sizeof(int)` => `4` |\n| `,` | Comma -- separates expressions | `a = (x=5, x+3);` => `a=8` |\n| `&` | Address-of | `ptr = &x;` |\n| `*` | Dereference / Pointer | `val = *ptr;` |\n| `->` | Arrow (structure pointer member) | `ptr->name` |\n| `.` | Dot (structure member) | `student.name` |',
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q12 – Tokens in C
    // ────────────────────────────────────────────
    {
      id: "co1-q12",
      title:
        "What do you mean by token? What are the different tokens used in C?",
      source: "June 2023 End Semester Exam",
      marks: 5,
      blocks: [
        {
          type: "text",
          content:
            "## Tokens in C\n\nA **token** is the smallest individual unit (building block) in a C program that is meaningful to the compiler. During compilation, the source code is broken down into tokens by the **lexical analyzer**.\n\n---\n\n### Types of Tokens in C\n\nC has **six** types of tokens:\n\n### 1. Keywords\n- Pre-defined reserved words with special meaning.\n- Cannot be used as identifiers (variable/function names).\n- C has **32 keywords** (in ANSI C).\n- Examples: `int`, `float`, `char`, `if`, `else`, `while`, `for`, `return`, `void`, `struct`, `switch`, `break`, `continue`, `typedef`, `sizeof`, `do`, `static`, `extern`, `const`, `volatile`, etc.\n\n### 2. Identifiers\n- Names given to variables, functions, arrays, structures, etc.\n- **Rules for identifiers:**\n  - Must begin with a letter (a-z, A-Z) or underscore (`_`).\n  - Can contain letters, digits (0-9), and underscores.\n  - Cannot be a keyword.\n  - Case-sensitive (`sum` and `Sum` are different).\n- Examples: `total`, `_count`, `student_name`, `MAX_SIZE`\n\n### 3. Constants (Literals)\n- Fixed values that do not change during program execution.\n- Types:\n  - **Integer constants:** `10`, `-25`, `0x1A` (hex), `077` (octal)\n  - **Floating-point constants:** `3.14`, `2.5e3`\n  - **Character constants:** `'A'`, `'\\n'`, `'\\0'`\n  - **String constants:** `\"Hello World\"`\n\n### 4. Strings (String Literals)\n- A sequence of characters enclosed in double quotes.\n- Automatically terminated with a null character (`\\0`).\n- Examples: `\"Computer Programming\"`, `\"Hello\\n\"`\n\n### 5. Operators\n- Symbols that perform operations on operands.\n- Types: Arithmetic (`+`, `-`, `*`, `/`, `%`), Relational (`<`, `>`, `==`, `!=`), Logical (`&&`, `||`, `!`), Assignment (`=`, `+=`), Bitwise (`&`, `|`, `^`, `~`), etc.\n\n### 6. Special Symbols (Punctuators)\n- Characters with special meaning in C syntax.\n- Examples:\n  - `{ }` -- Block delimiters\n  - `( )` -- Function calls, grouping\n  - `[ ]` -- Array subscript\n  - `;` -- Statement terminator\n  - `,` -- Separator\n  - `#` -- Preprocessor directive\n  - `*` -- Pointer declaration\n\n---\n\n### Example: Identifying Tokens\n\n```c\nint main() {\n    int sum = 10 + 20;\n    printf(\"%d\", sum);\n    return 0;\n}\n```\n\n| Token | Type |\n|-------|------|\n| `int` | Keyword |\n| `main` | Identifier |\n| `(` `)` | Special Symbol |\n| `{` `}` | Special Symbol |\n| `sum` | Identifier |\n| `=` | Operator |\n| `10`, `20`, `0` | Integer Constant |\n| `+` | Operator |\n| `printf` | Identifier |\n| `\"%d\"` | String Literal |\n| `;` | Special Symbol |\n| `return` | Keyword |",
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q13 – Flowchart: Odd or Even with Explanation
    // ────────────────────────────────────────────
    {
      id: "co1-q13",
      title:
        "Explain flowchart with an example to check if number is ODD or EVEN",
      source: "May 2022 End Semester Exam",
      marks: 5,
      blocks: [
        {
          type: "text",
          content:
            "## Flowchart\n\nA **flowchart** is a graphical representation of an algorithm or process. It uses standardized symbols connected by arrows to show the step-by-step flow of a program.\n\n### Common Flowchart Symbols\n\n| Symbol | Shape | Purpose |\n|--------|-------|---------|\n| **Terminal** | Rounded rectangle / Oval | Marks Start or End |\n| **Process** | Rectangle | Represents a computation or action |\n| **Decision** | Diamond | Represents a condition (Yes/No) |\n| **Input/Output** | Parallelogram | Data input or output |\n| **Flow Line** | Arrow | Shows direction of flow |\n\n### Example: Check if a Number is ODD or EVEN\n\n**Logic:** Read a number `N`. Compute `N % 2`. If the remainder is `0`, the number is **EVEN**; otherwise it is **ODD**.",
        },
        {
          type: "diagram",
          title: "Flowchart -- Check ODD or EVEN",
          content: `graph TD
    S([Start]) --> INPUT[/Read N/]
    INPUT --> PROCESS["R = N % 2"]
    PROCESS --> DECISION{R == 0?}
    DECISION -->|Yes| EVEN[/Display N is EVEN/]
    DECISION -->|No| ODD[/Display N is ODD/]
    EVEN --> STOP([End])
    ODD --> STOP
    style S fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style INPUT fill:#06b6d4,stroke:#0891b2,color:#fff
    style PROCESS fill:#ec4899,stroke:#db2777,color:#fff
    style DECISION fill:#f59e0b,stroke:#d97706,color:#fff
    style EVEN fill:#10b981,stroke:#059669,color:#fff
    style ODD fill:#ef4444,stroke:#dc2626,color:#fff
    style STOP fill:#8b5cf6,stroke:#7c3aed,color:#fff`,
        },
        {
          type: "text",
          content:
            "**Dry Run:**\n\n| Step | Operation | Value |\n|------|-----------|-------|\n| 1 | Read N | N = 7 |\n| 2 | R = N % 2 | R = 7 % 2 = 1 |\n| 3 | R == 0? | 1 == 0? **No** |\n| 4 | Output | \"7 is ODD\" |",
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q14 – Types of Tokens (Explain One)
    // ────────────────────────────────────────────
    {
      id: "co1-q14",
      title: "Mention different types of Tokens in C and explain one",
      source: "May 2023 End Semester Exam",
      marks: 5,
      blocks: [
        {
          type: "text",
          content:
            "## Types of Tokens in C\n\nThe six types of tokens in C are:\n\n1. **Keywords** -- Reserved words with predefined meaning (e.g., `int`, `return`, `if`)\n2. **Identifiers** -- User-defined names for variables, functions, etc.\n3. **Constants** -- Fixed values (integer, float, character literals)\n4. **String Literals** -- Sequences of characters in double quotes\n5. **Operators** -- Symbols for operations (`+`, `-`, `*`, `=`, `&&`, etc.)\n6. **Special Symbols / Punctuators** -- Syntax characters (`{`, `}`, `;`, `(`, `)`, etc.)\n\n---\n\n### Detailed Explanation: Keywords\n\n**Keywords** (also called **reserved words**) are predefined words in C that have a special, fixed meaning to the compiler. They form the vocabulary of the C language and **cannot be used as identifiers** (variable names, function names, etc.).\n\n**Properties of Keywords:**\n- All keywords are in **lowercase**.\n- They are **reserved** -- you cannot redefine them.\n- C (ANSI C89) defines **32 keywords**.\n\n**List of all 32 Keywords in ANSI C:**\n\n| | | | | |\n|---|---|---|---|---|\n| `auto` | `break` | `case` | `char` | `const` |\n| `continue` | `default` | `do` | `double` | `else` |\n| `enum` | `extern` | `float` | `for` | `goto` |\n| `if` | `int` | `long` | `register` | `return` |\n| `short` | `signed` | `sizeof` | `static` | `struct` |\n| `switch` | `typedef` | `union` | `unsigned` | `void` |\n| `volatile` | `while` | | | |\n\n**Example:**\n\n```c\nint main() {       /* 'int', 'return' are keywords */\n    float avg;      /* 'float' is a keyword         */\n    if (avg > 50)   /* 'if' is a keyword             */\n        return 1;   /* 'return' is a keyword         */\n    return 0;\n}\n```\n\n**Note:** Using a keyword as a variable name (e.g., `int float = 5;`) will produce a **compilation error**.",
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q15 – Algorithm: Definition, Need, Properties
    // ────────────────────────────────────────────
    {
      id: "co1-q15",
      title: "Define an algorithm. Need and properties of algorithms",
      source: "June 2022 End Semester Exam",
      marks: 5,
      blocks: [
        {
          type: "text",
          content:
            "## Algorithm\n\n### Definition\n\nAn **algorithm** is a finite, well-defined, step-by-step sequence of instructions designed to solve a specific problem or perform a computation. It takes some input, processes it, and produces the desired output.\n\n---\n\n### Need for Algorithms\n\n1. **Planning before coding** -- An algorithm lets you plan the logic before writing actual code, reducing errors.\n2. **Language-independent** -- Algorithms are written in plain English or pseudocode, so the same algorithm can be implemented in any programming language.\n3. **Clear understanding** -- Helps programmers understand the problem and its solution thoroughly.\n4. **Debugging and maintenance** -- Well-defined steps make it easier to find and fix errors.\n5. **Communication** -- Serves as documentation that other developers can follow.\n6. **Efficiency analysis** -- Allows comparison of different approaches based on time and space complexity before implementation.\n\n---\n\n### Properties (Characteristics) of a Good Algorithm\n\n1. **Finiteness** -- The algorithm must terminate after a **finite** number of steps. It should not run indefinitely.\n\n2. **Definiteness (Unambiguous)** -- Each step must be **precisely and clearly** defined. There should be no ambiguity in any instruction.\n\n3. **Input** -- An algorithm should have **zero or more** well-defined inputs supplied externally.\n\n4. **Output** -- An algorithm must produce **at least one** output (the result of the computation).\n\n5. **Effectiveness** -- Every instruction must be **basic enough** to be carried out, in principle, by a person using pencil and paper. Operations must be feasible.\n\n---\n\n### Example: Algorithm to find the sum of two numbers\n\n**Algorithm: SumOfTwo**\n1. **Start**\n2. Read two numbers `A` and `B`.\n3. Compute `SUM = A + B`.\n4. Print `SUM`.\n5. **Stop**\n\nThis algorithm satisfies all five properties:\n- **Finite** -- 5 steps, terminates at Step 5.\n- **Definite** -- Each step is clear.\n- **Input** -- A and B.\n- **Output** -- SUM.\n- **Effective** -- Addition is a basic operation.",
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q16 – Flowchart: Leap Year
    // ────────────────────────────────────────────
    {
      id: "co1-q16",
      title:
        "Develop a flowchart to display whether the given year is a leap year or not",
      source: "May 2023 End Semester Exam",
      marks: 5,
      blocks: [
        {
          type: "text",
          content:
            "## Leap Year Logic\n\nA year is a **leap year** if:\n1. It is divisible by **4** AND not divisible by **100**, OR\n2. It is divisible by **400**.\n\n**Examples:**\n- 2024 -- Leap year (divisible by 4, not by 100)\n- 1900 -- **Not** a leap year (divisible by 100, but not by 400)\n- 2000 -- Leap year (divisible by 400)",
        },
        {
          type: "diagram",
          title: "Flowchart -- Leap Year Check",
          content: `graph TD
    S([Start]) --> IN[/Read Year/]
    IN --> C1{Year % 400 == 0?}
    C1 -->|Yes| LEAP[/Print Leap Year/]
    C1 -->|No| C2{Year % 100 == 0?}
    C2 -->|Yes| NOTLEAP[/Print Not a Leap Year/]
    C2 -->|No| C3{Year % 4 == 0?}
    C3 -->|Yes| LEAP2[/Print Leap Year/]
    C3 -->|No| NOTLEAP2[/Print Not a Leap Year/]
    LEAP --> E([End])
    NOTLEAP --> E
    LEAP2 --> E
    NOTLEAP2 --> E
    style S fill:#6366f1,stroke:#4f46e5,color:#fff
    style IN fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style C1 fill:#f59e0b,stroke:#d97706,color:#fff
    style C2 fill:#f59e0b,stroke:#d97706,color:#fff
    style C3 fill:#f59e0b,stroke:#d97706,color:#fff
    style LEAP fill:#10b981,stroke:#059669,color:#fff
    style LEAP2 fill:#10b981,stroke:#059669,color:#fff
    style NOTLEAP fill:#ef4444,stroke:#dc2626,color:#fff
    style NOTLEAP2 fill:#ef4444,stroke:#dc2626,color:#fff
    style E fill:#6366f1,stroke:#4f46e5,color:#fff`,
        },
        {
          type: "text",
          content:
            "**Dry Run (Year = 2024):**\n\n| Step | Condition | Result |\n|------|-----------|--------|\n| 1 | 2024 % 400 == 0? | 2024 % 400 = 24 => **No** |\n| 2 | 2024 % 100 == 0? | 2024 % 100 = 24 => **No** |\n| 3 | 2024 % 4 == 0? | 2024 % 4 = 0 => **Yes** |\n| 4 | Output | **\"2024 is a Leap Year\"** |",
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q17 – Logical and Assignment Operators
    // ────────────────────────────────────────────
    {
      id: "co1-q17",
      title:
        "Explain the Logical and Assignment Operators with an example",
      source: "June 2022 End Semester Exam",
      marks: 5,
      blocks: [
        {
          type: "text",
          content:
            '## Logical Operators in C\n\nLogical operators are used to combine or invert **Boolean (true/false) conditions**. In C, any non-zero value is treated as **true** and `0` is treated as **false**.\n\n| Operator | Name | Description | Example |\n|:--------:|------|-------------|---------|\n| `&&` | Logical AND | Returns true if **both** operands are true | `(a>0) && (b>0)` |\n| `\\|\\|` | Logical OR | Returns true if **at least one** operand is true | `(a>0) \\|\\| (b>0)` |\n| `!` | Logical NOT | Inverts the truth value | `!(a>0)` |\n\n**Truth Table:**\n\n| A | B | A && B | A \\|\\| B | !A |\n|---|---|--------|----------|----|\n| 1 | 1 | 1 | 1 | 0 |\n| 1 | 0 | 0 | 1 | 0 |\n| 0 | 1 | 0 | 1 | 1 |\n| 0 | 0 | 0 | 0 | 1 |\n\n**Short-circuit evaluation:** In `&&`, if the left operand is false, the right operand is **not evaluated**. In `||`, if the left operand is true, the right operand is **not evaluated**.\n\n---\n\n## Assignment Operators in C\n\nAssignment operators store a value in a variable. The **simple assignment** operator is `=`, and C provides several **compound assignment** operators that combine an arithmetic/bitwise operation with assignment.\n\n| Operator | Name | Equivalent To | Example |\n|:--------:|------|:-------------:|---------|\n| `=` | Assign | -- | `a = 10;` |\n| `+=` | Add & assign | `a = a + b` | `a += 5;` |\n| `-=` | Subtract & assign | `a = a - b` | `a -= 3;` |\n| `*=` | Multiply & assign | `a = a * b` | `a *= 2;` |\n| `/=` | Divide & assign | `a = a / b` | `a /= 4;` |\n| `%=` | Modulus & assign | `a = a % b` | `a %= 3;` |\n| `<<=` | Left shift & assign | `a = a << n` | `a <<= 2;` |\n| `>>=` | Right shift & assign | `a = a >> n` | `a >>= 1;` |\n| `&=` | Bitwise AND & assign | `a = a & b` | `a &= 0xF;` |\n| `\\|=` | Bitwise OR & assign | `a = a \\| b` | `a \\|= 0x1;` |\n| `^=` | Bitwise XOR & assign | `a = a ^ b` | `a ^= mask;` |',
        },
        {
          type: "code",
          language: "c",
          title: "Example Program -- Logical and Assignment Operators",
          content: `#include <stdio.h>

int main() {
    int a = 10, b = 20, c = 0;

    /* --- Logical Operators --- */
    printf("=== Logical Operators ===\\n");

    /* Logical AND */
    if (a > 5 && b > 15) {
        printf("AND: Both conditions are true\\n");
    }

    /* Logical OR */
    if (a > 50 || b > 15) {
        printf("OR:  At least one condition is true\\n");
    }

    /* Logical NOT */
    if (!c) {   /* c is 0, so !c is true */
        printf("NOT: c is zero (false), !c is true\\n");
    }

    /* --- Assignment Operators --- */
    printf("\\n=== Assignment Operators ===\\n");

    int x = 100;
    printf("Initial x = %d\\n", x);

    x += 10;   /* x = 100 + 10 = 110 */
    printf("After x += 10 : x = %d\\n", x);

    x -= 20;   /* x = 110 - 20 = 90 */
    printf("After x -= 20 : x = %d\\n", x);

    x *= 2;    /* x = 90 * 2 = 180 */
    printf("After x *= 2  : x = %d\\n", x);

    x /= 3;    /* x = 180 / 3 = 60 */
    printf("After x /= 3  : x = %d\\n", x);

    x %= 7;    /* x = 60 % 7 = 4 */
    printf("After x %%= 7  : x = %d\\n", x);

    return 0;
}

/*
Output:
=== Logical Operators ===
AND: Both conditions are true
OR:  At least one condition is true
NOT: c is zero (false), !c is true

=== Assignment Operators ===
Initial x = 100
After x += 10 : x = 110
After x -= 20 : x = 90
After x *= 2  : x = 180
After x /= 3  : x = 60
After x %= 7  : x = 4
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q18 – Variables and Constants
    // ────────────────────────────────────────────
    {
      id: "co1-q18",
      title: "Explain variables and constants. Types of variables in C",
      source: "May 2023 End Semester Exam",
      marks: 5,
      blocks: [
        {
          type: "text",
          content:
            "## Variables in C\n\n### Definition\nA **variable** is a named memory location that can store a data value which **may change** during program execution.\n\n### Syntax\n```c\ndata_type variable_name = initial_value;\n```\n**Example:** `int age = 25;`\n\n### Rules for Naming Variables\n- Must begin with a letter or underscore (`_`).\n- Can contain letters, digits, and underscores.\n- Cannot be a C keyword.\n- Case-sensitive (`Sum` and `sum` are different variables).\n\n### Types of Variables in C\n\n| Type | Keyword | Scope | Lifetime | Description |\n|------|---------|-------|----------|-------------|\n| **Local** | (none) | Inside the block/function where declared | Until the function returns | Accessible only within the declaring function |\n| **Global** | (none -- declared outside all functions) | Entire program | Entire program execution | Accessible from any function in the file |\n| **Static** | `static` | Inside the declaring function | Entire program execution | Retains value between function calls |\n| **Automatic** | `auto` (default) | Inside the block | Until the block exits | Same as local; `auto` keyword is rarely used |\n| **External** | `extern` | Across multiple files | Entire program execution | Declared in one file and used in another |\n| **Register** | `register` | Inside the block | Until the block exits | Suggests storing in a CPU register for faster access |\n\n### Example\n```c\nint g = 100;              /* Global variable */\n\nvoid counter() {\n    static int count = 0;  /* Static variable -- retains value */\n    count++;\n    printf(\"Count = %d\\n\", count);\n}\n\nint main() {\n    int x = 10;            /* Local variable */\n    counter();             /* Count = 1 */\n    counter();             /* Count = 2 */\n    counter();             /* Count = 3 */\n    return 0;\n}\n```\n\n---\n\n## Constants in C\n\n### Definition\nA **constant** is a value that **cannot be changed** once defined during program execution.\n\n### Ways to Define Constants\n\n1. **Using `const` keyword:**\n```c\nconst float PI = 3.14159;\n```\nAttempting `PI = 3.0;` later will cause a **compilation error**.\n\n2. **Using `#define` preprocessor directive:**\n```c\n#define PI 3.14159\n#define MAX_SIZE 100\n```\nThis performs a textual replacement before compilation.\n\n### Types of Constants\n\n| Type | Example | Description |\n|------|---------|-------------|\n| **Integer constant** | `10`, `-25`, `0x1F`, `077` | Whole numbers (decimal, hex, octal) |\n| **Floating-point constant** | `3.14`, `2.5e3` | Decimal numbers |\n| **Character constant** | `'A'`, `'\\n'`, `'\\0'` | Single character in single quotes |\n| **String constant** | `\"Hello\"` | Sequence of characters in double quotes |\n| **Enumeration constant** | `enum { RED=1, GREEN, BLUE }` | Named integer values |\n\n### Difference Between Variables and Constants\n\n| Feature | Variable | Constant |\n|---------|----------|----------|\n| Value | Can change | Cannot change |\n| Declaration | `int x = 5;` | `const int x = 5;` or `#define X 5` |\n| Memory | Allocated and modifiable | Allocated but read-only (for `const`) |\n| Purpose | Store data that varies | Store fixed values (PI, limits, etc.) |",
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q19 – Program: Largest of 3 (Ternary, code only)
    // ────────────────────────────────────────────
    {
      id: "co1-q19",
      title:
        "Write a program to find largest of three numbers using ternary operator",
      source: "June 2023 End Semester Exam",
      marks: 5,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Largest of Three Numbers -- Ternary Operator",
          content: `#include <stdio.h>

int main() {
    int a, b, c, largest;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);

    /*
     * Nested ternary operator:
     *   Step 1: Compare a and b.
     *   Step 2: Compare the winner with c.
     */
    largest = (a > b)
                ? ((a > c) ? a : c)
                : ((b > c) ? b : c);

    printf("Largest = %d\\n", largest);

    return 0;
}

/*
Sample Output 1:
Enter three numbers: 10 30 20
Largest = 30

Sample Output 2:
Enter three numbers: 55 12 55
Largest = 55

Sample Output 3:
Enter three numbers: 7 7 7
Largest = 7
*/`,
        },
        {
          type: "text",
          content:
            "**Explanation of the ternary expression:**\n\n```\nlargest = (a > b) ? ((a > c) ? a : c)\n                  : ((b > c) ? b : c);\n```\n\n- If `a > b`:\n  - Then check `a > c`. If yes, `largest = a`; else `largest = c`.\n- If `a <= b`:\n  - Then check `b > c`. If yes, `largest = b`; else `largest = c`.\n\nThis covers all possible orderings of three numbers.",
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q20 – Algorithm & Flowchart: Grading System
    // ────────────────────────────────────────────
    {
      id: "co1-q20",
      title: "Write algorithm and flowchart for grading system",
      source: "May 2022 End Semester Exam",
      marks: 10,
      blocks: [
        {
          type: "text",
          content:
            "## Grading System\n\nA grading system assigns a letter grade based on the marks obtained by a student.\n\n### Grading Criteria\n\n| Marks Range | Grade |\n|:-----------:|:-----:|\n| 90 -- 100 | A+ (Outstanding) |\n| 80 -- 89 | A (Excellent) |\n| 70 -- 79 | B (Very Good) |\n| 60 -- 69 | C (Good) |\n| 50 -- 59 | D (Average) |\n| 40 -- 49 | E (Pass) |\n| Below 40 | F (Fail) |\n\n---\n\n### Algorithm: GradingSystem(marks)\n\n1. **Start**\n2. Read `marks`.\n3. If `marks >= 90`, set `grade = \"A+\"`.\n4. Else if `marks >= 80`, set `grade = \"A\"`.\n5. Else if `marks >= 70`, set `grade = \"B\"`.\n6. Else if `marks >= 60`, set `grade = \"C\"`.\n7. Else if `marks >= 50`, set `grade = \"D\"`.\n8. Else if `marks >= 40`, set `grade = \"E\"`.\n9. Else, set `grade = \"F\" (Fail)`.\n10. Print `grade`.\n11. **Stop**",
        },
        {
          type: "diagram",
          title: "Flowchart -- Grading System",
          content: `graph TD
    S([Start]) --> IN[/Read marks/]
    IN --> C1{"marks >= 90?"}
    C1 -->|Yes| G1[Grade = A+]
    C1 -->|No| C2{"marks >= 80?"}
    C2 -->|Yes| G2[Grade = A]
    C2 -->|No| C3{"marks >= 70?"}
    C3 -->|Yes| G3[Grade = B]
    C3 -->|No| C4{"marks >= 60?"}
    C4 -->|Yes| G4[Grade = C]
    C4 -->|No| C5{"marks >= 50?"}
    C5 -->|Yes| G5[Grade = D]
    C5 -->|No| C6{"marks >= 40?"}
    C6 -->|Yes| G6[Grade = E]
    C6 -->|No| G7[Grade = F - Fail]
    G1 --> OUT[/Print Grade/]
    G2 --> OUT
    G3 --> OUT
    G4 --> OUT
    G5 --> OUT
    G6 --> OUT
    G7 --> OUT
    OUT --> E([End])
    style S fill:#6366f1,stroke:#4f46e5,color:#fff
    style IN fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style C1 fill:#f59e0b,stroke:#d97706,color:#fff
    style C2 fill:#f59e0b,stroke:#d97706,color:#fff
    style C3 fill:#f59e0b,stroke:#d97706,color:#fff
    style C4 fill:#f59e0b,stroke:#d97706,color:#fff
    style C5 fill:#f59e0b,stroke:#d97706,color:#fff
    style C6 fill:#f59e0b,stroke:#d97706,color:#fff
    style G1 fill:#10b981,stroke:#059669,color:#fff
    style G2 fill:#10b981,stroke:#059669,color:#fff
    style G3 fill:#10b981,stroke:#059669,color:#fff
    style G4 fill:#06b6d4,stroke:#0891b2,color:#fff
    style G5 fill:#06b6d4,stroke:#0891b2,color:#fff
    style G6 fill:#ec4899,stroke:#db2777,color:#fff
    style G7 fill:#ef4444,stroke:#dc2626,color:#fff
    style OUT fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style E fill:#6366f1,stroke:#4f46e5,color:#fff`,
        },
        {
          type: "code",
          language: "c",
          title: "C Program -- Grading System",
          content: `#include <stdio.h>

int main() {
    int marks;
    char grade[3];

    printf("Enter marks (0-100): ");
    scanf("%d", &marks);

    if (marks < 0 || marks > 100) {
        printf("Invalid marks! Please enter between 0 and 100.\\n");
        return 1;
    }

    if (marks >= 90) {
        printf("Grade: A+ (Outstanding)\\n");
    } else if (marks >= 80) {
        printf("Grade: A (Excellent)\\n");
    } else if (marks >= 70) {
        printf("Grade: B (Very Good)\\n");
    } else if (marks >= 60) {
        printf("Grade: C (Good)\\n");
    } else if (marks >= 50) {
        printf("Grade: D (Average)\\n");
    } else if (marks >= 40) {
        printf("Grade: E (Pass)\\n");
    } else {
        printf("Grade: F (Fail)\\n");
    }

    return 0;
}

/*
Sample Output 1:
Enter marks (0-100): 85
Grade: A (Excellent)

Sample Output 2:
Enter marks (0-100): 42
Grade: E (Pass)

Sample Output 3:
Enter marks (0-100): 35
Grade: F (Fail)
*/`,
        },
      ],
    },
    {
      id: "co1-q21",
      title: "Find the output of the following program",
      source: "May-Jun 2024",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Output Tracing — Operators and Expressions

This type of question tests your ability to trace C code execution and predict the printed output. The key is to evaluate each expression step-by-step, respecting operator precedence.`,
        },
        {
          type: "code",
          language: "c",
          title: "Program to Trace (May-June 2024 style)",
          content: `#include <stdio.h>

int main() {
    int a = 5, b = 3, c = 2;
    int x, y;

    x = a + b * c;        // * before +  → 5 + 6 = 11
    y = (a + b) * c;      // () first    → 8 * 2 = 16

    printf("x = %d\\n", x);
    printf("y = %d\\n", y);

    printf("a++ = %d\\n", a++);   // prints 5, THEN increments
    printf("a   = %d\\n", a);     // now a is 6

    printf("++b = %d\\n", ++b);   // increments FIRST, prints 4

    int p = 7 / 2;    // integer division → 3 (not 3.5)
    int q = 7 % 2;    // remainder → 1

    printf("p = %d, q = %d\\n", p, q);

    return 0;
}`,
        },
        {
          type: "text",
          content: `## Step-by-Step Output Trace

**Line-by-line variable tracking:**

| Statement | Values | Explanation |
|-----------|--------|-------------|
| \`a=5, b=3, c=2\` | a=5, b=3, c=2 | Initialisation |
| \`x = a + b*c\` | x = 5+6 = **11** | \`*\` has higher precedence than \`+\` |
| \`y = (a+b)*c\` | y = 8×2 = **16** | Parentheses evaluated first |
| \`printf a++\` | prints **5** | postfix: print first, then increment |
| \`printf a\` | prints **6** | a was incremented in previous step |
| \`printf ++b\` | prints **4** | prefix: increment first, then print |
| \`p = 7/2\` | p = **3** | integer division truncates |
| \`q = 7%2\` | q = **1** | remainder of 7÷2 |

## Expected Output
\`\`\`
x = 11
y = 16
a++ = 5
a   = 6
++b = 4
p = 3, q = 1
\`\`\`

## Key Rules for Output Tracing
- Operator precedence: \`()\` > \`*/%\` > \`+-\` > \`<>\` > \`==\` > \`&&\` > \`||\`
- \`a++\` (postfix): use current value, then increment
- \`++a\` (prefix): increment first, then use
- Integer \`/\` always truncates toward zero`,
        },
      ],
    },
    {
      id: "co1-q22",
      title: "Analyze the above C program and predict the output with justification",
      source: "May-Jun 2025",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Output Prediction with Justification

This question tests deeper understanding — you must not only give the output, but **justify each line** by explaining which rule or operator caused that result.`,
        },
        {
          type: "code",
          language: "c",
          title: "Program to Analyze (May-June 2025 style)",
          content: `#include <stdio.h>

int main() {
    int i = 10, j = 3;
    float f = 5.0;

    // Logical operators
    printf("%d\\n", (i > j) && (j > 1));   // both true
    printf("%d\\n", (i < j) || (j > 1));   // second true
    printf("%d\\n", !(i == j));             // i!=j so !false = true

    // Mixed type arithmetic
    printf("%.1f\\n", i / j);              // int/int = int → printed as float
    printf("%.1f\\n", (float)i / j);       // cast → float division
    printf("%.1f\\n", f / j);              // float/int = float

    // Bitwise
    printf("%d\\n", i & j);   // 1010 & 0011 = 0010 = 2
    printf("%d\\n", i | j);   // 1010 | 0011 = 1011 = 11

    return 0;
}`,
        },
        {
          type: "text",
          content: `## Predicted Output with Justification

| Line | Output | Justification |
|------|--------|--------------|
| \`(10>3)&&(3>1)\` | **1** | Both conditions true → AND result is 1 (true) |
| \`(10<3)\|\|(3>1)\` | **1** | First false but second true → OR result is 1 |
| \`!(10==3)\` | **1** | \`10==3\` is 0 (false) → NOT(0) = 1 (true) |
| \`10/3\` as float | **3.0** | Integer division gives 3, printed as 3.0 with %.1f |
| \`(float)10/3\` | **3.3** | Cast makes it float division → 3.333... rounds to 3.3 |
| \`5.0/3\` | **1.7** | float/int → float → 1.666... rounds to 1.7 |
| \`10 & 3\` | **2** | Binary: 1010 & 0011 = 0010 = 2 |
| \`10 \| 3\` | **11** | Binary: 1010 \| 0011 = 1011 = 11 |

## Complete Output
\`\`\`
1
1
1
3.0
3.3
1.7
2
11
\`\`\`

## How to Write Justification in Exam
Write: *"At the 4th printf, \`i/j\` = \`10/3\` — both are integers so the result is integer 3. Printed with \`%.1f\` it shows as 3.0."*`,
        },
      ],
    },
    {
      id: "co1-q23",
      title: "Find the output of the following program",
      source: "Jul-Aug 2025",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Output Tracing — Data Types, Tokens and Variables

This supplementary exam question tests output of programs involving variables, constants, and token usage.`,
        },
        {
          type: "code",
          language: "c",
          title: "Program to Trace (July-August 2025 style)",
          content: `#include <stdio.h>
#define MAX 10
#define SQUARE(x) ((x)*(x))

int main() {
    int a = MAX;            // a = 10 (from #define)
    const int b = 3;        // constant
    int c = SQUARE(a - 2);  // SQUARE(8) = (8)*(8) = 64
    float d = (float)a / b; // float cast before division

    printf("a = %d\\n", a);
    printf("b = %d\\n", b);
    printf("c = %d\\n", c);
    printf("d = %.2f\\n", d);

    // Variable modification attempt
    a = a + b;              // a becomes 13
    // b = 5;               // ERROR! cannot modify const

    printf("New a = %d\\n", a);
    printf("MAX = %d\\n", MAX);  // macro, not a variable

    char ch = 'A' + 2;      // 'A'=65, 65+2=67 = 'C'
    printf("ch = %c (%d)\\n", ch, ch);

    return 0;
}`,
        },
        {
          type: "text",
          content: `## Traced Output

| Statement | Value | Reason |
|-----------|-------|--------|
| \`a = MAX\` | a = 10 | \`#define MAX 10\` — macro substitution |
| \`b = 3\` | b = 3 | const int — can be read but not modified |
| \`SQUARE(a-2)\` | SQUARE(8) = 64 | Macro expands to \`(8)*(8)\` = 64 |
| \`(float)a / b\` | 10.0/3 = 3.333... | Cast ensures float division |
| \`a = a + b\` | a = 13 | Normal variable, can be changed |
| \`'A' + 2\` | 67 = 'C' | ASCII 'A'=65, +2=67='C' |

## Expected Output
\`\`\`
a = 10
b = 3
c = 64
d = 3.33
New a = 13
MAX = 10
ch = C (67)
\`\`\`

## Key Concepts Tested
- \`#define\` macro: simple text substitution before compilation
- \`const\` variable: value cannot be changed after initialisation
- Type casting with \`(float)\`: forces float division
- ASCII arithmetic: characters are stored as integers`,
        },
      ],
    },
  ],
}
