import type { CourseOutcome } from "@/types"

export const module1: CourseOutcome = {
  id: "qb-m1",
  title: "Question Bank - Module 1: Introduction & Fundamentals of C",
  shortTitle: "Module 1",
  description: "Flowcharts, algorithms, operators, data types, C basics, and foundational programming questions.",
  icon: "GitBranch",
  color: "violet",
  questions: [
    {
      id: "qb-m1-q1",
      title: "Draw flowchart for sum and average of 10 numbers.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Mnemonic: SIA = Sum, Increment, Average**

**Core loop pattern:**
\`\`\`c
sum = 0;
for(i = 1; i <= 10; i++) {
    scanf("%d", &num);
    sum += num;
}
avg = sum / 10.0;  // 10.0 forces float division!
\`\`\`

**Why 10.0 not 10?** Integer division truncates: 27/10 = 2 (wrong). 27/10.0 = 2.7 ✓

**Flowchart checklist (draw in this order):**
1. Oval → Init sum=0, i=1
2. Diamond: i <= 10? (Yes → body, No → exit)
3. Parallelogram: Read num
4. Rectangle: sum = sum + num; i = i + 1 → back to diamond
5. Rectangle: avg = sum / 10.0 then Parallelogram: Print sum, avg

**Exam tip:** Trace one iteration (i=1, num=5 → sum=5) inside the flowchart answer to show the logic is correct.`,
      blocks: [
        {
          type: "text",
          content:
            "Read 10 numbers one by one, keep adding into `sum`, then compute `avg = sum / 10.0` and print both values.",
        },
        {
          type: "diagram",
          title: "Flowchart - Sum and Average of 10 Numbers",
          content: `graph TD
S([Start]) --> A[sum=0, i=1]
A --> B{"Is i <= 10?"}
B -->|Yes| C[/Read num/]
C --> D["sum = sum + num"]
D --> E["i = i + 1"]
E --> B
B -->|No| F["avg = sum / 10.0"]
F --> G[/Print sum and avg/]
G --> H([End])`,
        },
      ],
    },
    {
      id: "qb-m1-q2",
      title: "Draw flowchart for quadratic equation to find all possible roots.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Mnemonic: DDC = Discriminant Decides Case** (D>0 Distinct, D=0 Double, D<0 Complex)

**Three root cases by D = b²−4ac:**
| D value | Root type | Formula |
|---------|-----------|---------|
| D > 0 | Two distinct real roots | (−b ± √D) / (2a) |
| D = 0 | Two equal (repeated) roots | −b / (2a) |
| D < 0 | Complex (imaginary) roots | real ± imag·i |

**Complex root parts:** real = −b/(2a), imaginary = √(−D)/(2a)

**Critical operator-precedence trap:** Write \`(-b + sqrt(D)) / (2*a)\` — without outer brackets, \`/2*a\` divides first then multiplies (wrong!). Requires \`#include <math.h>\`.

**Quick verify:** For x²−5x+6=0 → D=25−24=1>0 → roots: (5±1)/2 = **3** and **2** ✓

**Never forget:** Check a ≠ 0 first — if a=0 it is a linear equation, not quadratic.`,
      blocks: [
        {
          type: "text",
          content:
            "For equation `ax² + bx + c = 0`, compute discriminant `D = b² - 4ac` and handle three cases: distinct real roots, equal roots, or complex roots.",
        },
        {
          type: "diagram",
          title: "Flowchart - Quadratic Roots",
          content: `graph TD
S([Start]) --> I[/Read a, b, c/]
I --> D["Compute D = b*b - 4*a*c"]
D --> C1{"D > 0?"}
C1 -->|Yes| R1["x1 = -b+sqrtD / 2a, x2 = -b-sqrtD / 2a"]
R1 --> P1[/Print x1 and x2 as two distinct real roots/]
C1 -->|No| C2{"D == 0?"}
C2 -->|Yes| R2["x = -b / 2a"]
R2 --> P2[/Print x as two equal real roots/]
C2 -->|No| R3["real = -b/2a, imag = sqrtNegD / 2a"]
R3 --> P3[/Print complex roots: real+imag*i and real-imag*i/]
P1 --> E([End])
P2 --> E
P3 --> E`,
        },
      ],
    },
    {
      id: "qb-m1-q3",
      title: "Draw flowchart to find whether entered year is leap year or not.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Mnemonic: "4 Divides, 100 Denies, 400 Qualifies"**

**Decision order (ORDER MATTERS — check 400 first!):**
1. If year % 400 == 0 → **Leap Year** ✓
2. Else if year % 100 == 0 → **Not Leap Year** ✗
3. Else if year % 4 == 0 → **Leap Year** ✓
4. Else → **Not Leap Year** ✗

**Real examples to memorise:**
| Year | Test | Result |
|------|------|--------|
| 2000 | ÷400 ✓ | Leap year |
| 1900 | ÷100, not ÷400 | NOT leap year |
| 2024 | ÷4, not ÷100 | Leap year |
| 2023 | None | NOT leap year |

**Flowchart trap:** If you check 100 before 400, year 2000 (divisible by both) gets flagged "Not Leap" incorrectly. Always: 400 → 100 → 4.`,
      blocks: [
        {
          type: "diagram",
          title: "Flowchart - Leap Year",
          content: `graph TD
S([Start]) --> I[/Read year/]
I --> A{"year % 400 == 0?"}
A -->|Yes| L[/Print Leap Year/]
A -->|No| B{"year % 100 == 0?"}
B -->|Yes| N[/Print Not Leap Year/]
B -->|No| C{"year % 4 == 0?"}
C -->|Yes| L
C -->|No| N
L --> E([End])
N --> E`,
        },
      ],
    },
    {
      id: "qb-m1-q4",
      title: "Draw flowchart to find smallest of three numbers.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Visual trick: "Eliminate the largest — keep the smallest"**

**Two-step nested logic (mirror of "Largest of Three"):**
- Compare a and b → keep the smaller as temp winner
- Compare temp winner with c → final minimum

**Ternary shortcut:**
\`\`\`c
min = (a < b) ? a : b;
min = (min < c) ? min : c;
\`\`\`

**Flowchart has 4 leaf paths:**
- a<b AND a<c → print a
- a<b AND a≥c → print c
- a≥b AND b<c → print b
- a≥b AND b≥c → print c

**Equal values:** If a=b=c=5, all comparisons give the same value — any output is correct. Mention this.

**Common mistake:** Chaining \`a < b < c\` — NOT valid in C! Must use \`&&\`: \`(a<b && a<c)\`.`,
      blocks: [
        {
          type: "diagram",
          title: "Flowchart - Smallest of Three",
          content: `graph TD
S([Start]) --> I[/Read a,b,c/]
I --> A{"a < b?"}
A -->|Yes| B{"a < c?"}
A -->|No| C{"b < c?"}
B -->|Yes| P1[/Print a is smallest/]
B -->|No| P2[/Print c is smallest/]
C -->|Yes| P3[/Print b is smallest/]
C -->|No| P2
P1 --> E([End])
P2 --> E
P3 --> E`,
        },
      ],
    },
    {
      id: "qb-m1-q5",
      title: "Explain logical operators with example.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Mnemonic: AON = AND needs both, OR needs one, NOT flips**

| Operator | Symbol | True when | Example |
|----------|--------|-----------|---------|
| Logical AND | \`&&\` | BOTH operands true | \`(a>0 && b>0)\` |
| Logical OR | \`\|\|\` | AT LEAST ONE true | \`(a>0 \|\| b>0)\` |
| Logical NOT | \`!\` | operand is false | \`!(a==0)\` |

**Short-circuit evaluation (very examinable!):**
- \`&&\`: if left is **false** → right side is NEVER evaluated
- \`\|\|\`: if left is **true** → right side is NEVER evaluated
\`\`\`c
int x = 0;
if (x != 0 && 10/x > 1) { ... }  // safe! 10/x skipped when x=0
\`\`\`

**Return values:** logical operators return **1** (true) or **0** (false). \`printf("%d", 5 > 3);\` prints 1.

**Exam tip:** Always include a one-line truth-table row or concrete example value per operator.`,
      blocks: [
        {
          type: "text",
          content:
            "Logical operators in C are used to combine or invert conditions.\n\n- `&&` (AND): true only if both conditions are true.\n- `||` (OR): true if at least one condition is true.\n- `!` (NOT): reverses the condition result.\n\nExample:\n```c\nint a=10, b=20;\nprintf(\"%d\\n\", (a<15 && b>15)); // 1\nprintf(\"%d\\n\", (a>15 || b>15)); // 1\nprintf(\"%d\\n\", !(a<15));        // 0\n```",
        },
      ],
    },
    {
      id: "qb-m1-q6",
      title: "Define algorithm and its properties.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Definition: A finite, unambiguous, step-by-step sequence of instructions to solve a problem.**

**5 essential properties — mnemonic FIDOE:**
- **F**initeness: must end after a finite number of steps
- **I**nput: accepts zero or more inputs
- **D**efiniteness: each step is precise and unambiguous
- **O**utput: produces at least one output
- **E**ffectiveness: every step is basic and executable

**Algorithm writing format for exams:**
1. Start
2. Read / Input data
3. Process (calculation/logic)
4. Output / Print result
5. Stop

**Why algorithm before code?** It is language-independent — same algorithm can be coded in C, Java, or Python without changes.

**Exam tip:** Write numbered English/pseudo steps, then draw the flowchart — both together earn full marks. Paragraph-only answers lose marks.`,
      blocks: [
        {
          type: "text",
          content:
            "An algorithm is a finite, ordered, and clear sequence of steps to solve a problem.\n\nMain properties:\n1. **Input**: accepts zero or more inputs.\n2. **Output**: produces at least one output.\n3. **Definiteness**: each step is unambiguous.\n4. **Finiteness**: must terminate after finite steps.\n5. **Effectiveness**: steps are basic and feasible to execute.\n\nAlgorithm helps in planning logic before coding.",
        },
      ],
    },
    {
      id: "qb-m1-q7",
      title: "What is header file? Explain with example.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Analogy: Header file = toolbox. Without it, the compiler doesn't know the tools (functions) exist.**

**Two include syntaxes:**
- System headers: \`#include <stdio.h>\` (angle brackets → searches system directory)
- User-defined: \`#include "myfile.h"\` (quotes → searches current directory first)

**Most important standard headers:**
| Header | Key contents |
|--------|-------------|
| \`stdio.h\` | \`printf\`, \`scanf\`, \`fopen\` |
| \`math.h\` | \`sqrt\`, \`pow\`, \`fabs\` |
| \`string.h\` | \`strlen\`, \`strcpy\`, \`strcmp\` |
| \`stdlib.h\` | \`malloc\`, \`free\`, \`exit\` |
| \`ctype.h\` | \`isalpha\`, \`isdigit\`, \`toupper\` |

**What headers contain:** Function declarations, macros, type definitions — NOT executable code.

**Common trap:** Forgetting \`#include <math.h>\` when using \`sqrt()\` causes a linker error. Also needs \`-lm\` compile flag.`,
      blocks: [
        {
          type: "text",
          content:
            "A header file (`.h`) contains function declarations, macros, and type definitions that can be reused in many C files.\n\n- Standard header example: `#include <stdio.h>`\n- User-defined header example: `#include \"myutils.h\"`",
        },
        {
          type: "code",
          language: "c",
          title: "Example",
          content: `#include<stdio.h>
#include<conio.h>
#include<math.h>

void main() {
    clrscr();
    double x = 25;
    printf("sqrt = %.2lf\n", sqrt(x));
    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m1-q8",
      title: "What is precedence and associativity of operators? Draw the table.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Mnemonic: UMARLA = Unary → Multiplicative → Additive → Relational → Logical → Assignment**

**Precedence = priority (high → evaluated first). Associativity = direction when equal priority.**

**Quick reference (high → low):**
| Level | Operators | Associativity |
|-------|-----------|---------------|
| Highest | \`()\`, \`[]\` | Left → Right |
| Unary | \`++\`, \`--\`, \`!\`, \`~\`, unary \`+/-\` | **Right → Left** |
| Multiplicative | \`*\`, \`/\`, \`%\` | Left → Right |
| Additive | \`+\`, \`-\` | Left → Right |
| Relational | \`<\`, \`>\`, \`<=\`, \`>=\` | Left → Right |
| Equality | \`==\`, \`!=\` | Left → Right |
| Logical \`&&\` / \`\|\|\` | \`&&\`, \`\|\|\` | Left → Right |
| Ternary | \`?:\` | **Right → Left** |
| Assignment | \`=\`, \`+=\`, \`-=\` | **Right → Left** |

**Tricky expression:** \`x = 2 + 3 * 4\` → \`*\` before \`+\` → x = 2 + 12 = **14** (NOT 20!)

**Exam tip:** Add explicit parentheses in output-tracing answers to show which operator evaluates first.`,
      blocks: [
        {
          type: "text",
          content:
            "**Precedence** decides which operator is evaluated first.\n**Associativity** decides left-to-right or right-to-left evaluation when precedence is same.\n\n| Level (High→Low) | Operators | Associativity |\n|---|---|---|\n| 1 | `()` `[]` `->` `.` | L to R |\n| 2 | unary `+ - ! ~ ++ --` | R to L |\n| 3 | `* / %` | L to R |\n| 4 | `+ -` | L to R |\n| 5 | `< <= > >=` | L to R |\n| 6 | `== !=` | L to R |\n| 7 | `&&` | L to R |\n| 8 | `||` | L to R |\n| 9 | `?:` | R to L |\n| 10 | `= += -= ...` | R to L |",
        },
      ],
    },
    {
      id: "qb-m1-q9",
      title: "Explain different data types in C.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**4 type categories — mnemonic BDUV:**
- **B**asic: \`int\`, \`char\`, \`float\`, \`double\`
- **D**erived: arrays, pointers, functions
- **U**ser-defined: struct, union, enum, typedef
- **V**oid: no type (functions returning nothing, generic pointers)

**Basic type sizes (must memorise):**
| Type | Size | Format | Range summary |
|------|------|--------|---------------|
| \`char\` | 1 byte | \`%c\` | −128 to 127 |
| \`int\` | 4 bytes | \`%d\` | ~−2B to +2B |
| \`float\` | 4 bytes | \`%f\` | 6–7 decimal digits |
| \`double\` | 8 bytes | \`%lf\` | 15–16 decimal digits |

**Exam trap:** "Derived" and "User-defined" are separate categories — don't merge them. Give one example per category to guarantee full marks.`,
      blocks: [
        {
          type: "text",
          content:
            "C data types are categories that define what kind of value a variable can store.\n\n1. **Basic/Primary**: `int`, `char`, `float`, `double`.\n2. **Derived**: arrays, pointers, functions.\n3. **User-defined**: `struct`, `union`, `enum`, `typedef`.\n4. **Void**: means no value/type (e.g., `void` function).\n\nChoosing correct type improves memory usage and program correctness.",
        },
      ],
    },
    {
      id: "qb-m1-q10",
      title: "Explain primitive data types in C.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Mnemonic: CIFDV = Char, Int, Float, Double, Void**

**Size memory aid:** \`char(1) < short(2) < int(4) = float(4) < double(8) < long long(8)\`

**Key facts per type:**
- \`char\` — stores ASCII value internally; \`'A'\`=65, \`'a'\`=97
- \`int\` — most common, default for whole numbers
- \`float\` — use \`f\` suffix: \`3.14f\`, printed with \`%f\`
- \`double\` — higher precision, printed with \`%lf\`
- \`void\` — used for functions returning nothing: \`void main()\`

**Modifiers extend the basic types:**
- \`unsigned int\`: doubles positive range (0 to ~4.29B) using same 4 bytes
- \`long long\`: 8 bytes, range up to ~9.2 × 10¹⁸
- \`short int\`: 2 bytes, range −32768 to 32767

**Precision tip:** Prefer \`double\` over \`float\` for decimal calculations — more accurate, same code.`,
      blocks: [
        {
          type: "text",
          content:
            "Primitive (fundamental) data types in C:\n\n- `char` - stores one character (typically 1 byte).\n- `int` - stores whole numbers (typically 4 bytes).\n- `float` - single precision decimal values (typically 4 bytes).\n- `double` - double precision decimal values (typically 8 bytes).\n- `void` - no value type (used in functions/pointers).\n\nExample:\n```c\nchar grade='A';\nint age=18;\nfloat pi=3.14f;\ndouble amount=12500.75;\n```",
        },
      ],
    },
    {
      id: "qb-m1-q11",
      title: "State any two library functions in math along with example.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Most tested pair: \`sqrt()\` and \`pow()\`** — always add \`#include <math.h>\`

All math functions return \`double\`.

| Function | Purpose | Example | Result |
|----------|---------|---------|--------|
| \`sqrt(x)\` | Square root | \`sqrt(49.0)\` | 7.0 |
| \`pow(x,y)\` | x to power y | \`pow(2,10)\` | 1024.0 |
| \`fabs(x)\` | Absolute value | \`fabs(-3.5)\` | 3.5 |
| \`ceil(x)\` | Round UP | \`ceil(2.3)\` | 3.0 |
| \`floor(x)\` | Round DOWN | \`floor(2.9)\` | 2.0 |

**Format specifier:** Use \`%f\` or \`%.2f\` to print double results from math functions.

**Integer cube trick:** Use \`i*i*i\` instead of \`pow(i,3)\` — avoids floating-point rounding, no header needed.

**Linker flag:** Compile with \`gcc file.c -lm\` — the \`-lm\` links the math library. Forgetting causes "undefined reference" error!`,
      blocks: [
        {
          type: "text",
          content:
            "Two common math library functions:\n1. `sqrt(x)` - returns square root of `x`.\n2. `pow(x, y)` - returns `x` raised to power `y`.\n\nHeader required: `#include <math.h>`",
        },
        {
          type: "code",
          language: "c",
          title: "Example using sqrt and pow",
          content: `#include<stdio.h>
#include<conio.h>
#include<math.h>

void main() {
    clrscr();
    double n = 49;
    printf("sqrt(49) = %.2lf\n", sqrt(n));
    printf("pow(2, 5) = %.2lf\n", pow(2, 5));
    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m1-q12",
      title: "Explain various bitwise operators.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Mnemonic: BEDNSL = Bitwise AND, OR, XOR, NOT, Shift-Left, Shift-Right**

**Think of bits as light switches (0=OFF, 1=ON):**
- \`&\` AND → BOTH must be ON: \`0101 & 0011 = 0001\` = **1**
- \`|\` OR → EITHER must be ON: \`0101 | 0011 = 0111\` = **7**
- \`^\` XOR → DIFFERENT means ON: \`0101 ^ 0011 = 0110\` = **6**
- \`~\` NOT → FLIP every bit: \`~5 = -6\` (two's complement)
- \`<<\` Left shift = multiply by 2ⁿ: \`5 << 1 = 10\`, \`5 << 2 = 20\`
- \`>>\` Right shift = divide by 2ⁿ: \`20 >> 1 = 10\`, \`20 >> 2 = 5\`

**Binary trace (a=5=0101, b=3=0011):**
| Op | Binary | Decimal |
|----|--------|---------|
| \`a & b\` | 0101 & 0011 = 0001 | **1** |
| \`a \| b\` | 0101 \| 0011 = 0111 | **7** |
| \`a ^ b\` | 0101 ^ 0011 = 0110 | **6** |

**Exam tip:** Always show binary representation in your worked example — scores far better than plain text definitions.`,
      blocks: [
        {
          type: "text",
          content:
            "Bitwise operators in C:\n\n- `&` AND\n- `|` OR\n- `^` XOR\n- `~` NOT\n- `<<` Left shift\n- `>>` Right shift\n\nExample with `a=5 (0101)` and `b=3 (0011)`:\n- `a & b = 1`\n- `a | b = 7`\n- `a ^ b = 6`\n- `a << 1 = 10`\n- `a >> 1 = 2`\n\nUsed in flags, masks, embedded programming, and optimization.",
        },
      ],
    },
    {
      id: "qb-m1-q13",
      title: "Explain ternary operator and develop a program to find largest of three numbers using ternary operator.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Read ternary as: "Is this true? YES → give this value, NO → give that value"**

Syntax: \`condition ? value_if_true : value_if_false\`

**Largest of 3 — nested ternary (read OUTSIDE → IN):**
\`\`\`c
max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
\`\`\`
- Outer \`?\`: Is a > b? YES → pick winner of {a, c}, NO → pick winner of {b, c}
- Inner \`?\`: picks the true larger of each group

**Equivalent if-else (write below in exam for explanation credit):**
\`\`\`c
if (a > b) { max = (a > c) ? a : c; }
else       { max = (b > c) ? b : c; }
\`\`\`

**When to use ternary:** Simple single-expression decisions ✓. Avoid for nested multi-statement logic ✗.

**Key exam fact:** \`?:\` is the ONLY ternary (3-operand) operator in C.`,
      blocks: [
        {
          type: "text",
          content:
            "Ternary operator is a compact form of `if-else`.\n\nSyntax: `condition ? value_if_true : value_if_false`",
        },
        {
          type: "code",
          language: "c",
          title: "Largest of Three using Ternary",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int a, b, c, max;
    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);

    max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);

    printf("Largest = %d\n", max);
    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m1-q14",
      title: "Explain structure of C program.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Mnemonic: CDLGMF = Comments, Directives, Defines, Globals, Main, Functions**

**Skeleton every C program follows (in order):**
\`\`\`c
/* 1. Documentation / comments */
#include<stdio.h>
#include<conio.h>       /* 2. Preprocessor directives */
#define PI 3.14159       /* 3. Macro definitions */
int globalVar = 0;       /* 4. Global variable declarations */

void main() {             /* 5. main() function */
    // local declarations
    // executable statements
    getch();
}

void helper() { ... }    /* 6. User-defined functions */
\`\`\`

**Execution always begins at \`main()\`** — even if functions are written above it in the file.

**Two subsections inside main:**
1. Declaration section (variable declarations)
2. Executable section (statements, loops, function calls)

**Exam tip:** Draw the skeleton template after listing the 6 sections — code + text earns more marks than text alone.`,
      blocks: [
        {
          type: "text",
          content:
            "A standard C program structure:\n1. Documentation/comment section\n2. Link section (`#include`)\n3. Definition section (`#define`)\n4. Global declaration section\n5. `main()` function\n6. User-defined function definitions\n\nSimple template:\n```c\n#include<stdio.h>\n\nvoid main() {\n    // declarations\n    // statements\n    return 0;\n}\n```",
        },
      ],
    },
    {
      id: "qb-m1-q15",
      title: "Write an algorithm to find entered number is even or odd and write C program for the same.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Core test: \`n % 2 == 0\` → even, else → odd**

**Algorithm (exact exam writing format — numbered steps):**
1. Start
2. Read number n
3. Compute R = n % 2
4. If R == 0, Print "Even"
5. Else, Print "Odd"
6. Stop

\`\`\`c
if (n % 2 == 0)
    printf("Even");
else
    printf("Odd");
\`\`\`

**Bitwise shortcut (bonus trick):** \`n & 1\` gives 0 for even, 1 for odd — faster but same result.

**Edge case to mention:** 0 is even (0 % 2 = 0).

**Example outputs:** 4 % 2 = 0 → Even | 7 % 2 = 1 → Odd | 0 % 2 = 0 → Even

**Exam tip:** Full marks structure = Algorithm (numbered) + Flowchart + Program. Paragraphs alone lose marks.`,
      blocks: [
        {
          type: "text",
          content:
            "**Algorithm**\n1. Start\n2. Read number `n`\n3. If `n % 2 == 0`, print Even\n4. Else print Odd\n5. Stop",
        },
        {
          type: "code",
          language: "c",
          title: "C Program - Even or Odd",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int n;
    printf("Enter number: ");
    scanf("%d", &n);

    if (n % 2 == 0)
        printf("Even number\n");
    else
        printf("Odd number\n");

    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m1-q16",
      title: "Explain ternary operator and develop a program to find entered number is positive or negative using ternary operator.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Three-state ternary — DON'T forget ZERO! Most students only handle two states.**

**Nested ternary (outer → inner reading):**
\`\`\`c
(n > 0) ? printf("Positive") :
(n < 0) ? printf("Negative") :
          printf("Zero");
\`\`\`

**Equivalent readable if-else:**
\`\`\`c
if      (n > 0) printf("Positive");
else if (n < 0) printf("Negative");
else            printf("Zero");
\`\`\`

**Test all 3 values in exam:** n=5 → Positive | n=−3 → Negative | n=0 → Zero (shows all branches work).

**Common mistake:** Writing only \`(n > 0) ? "Positive" : "Negative"\` — misses zero! Three states need three branches.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Positive/Negative using Ternary",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int n;
    printf("Enter number: ");
    scanf("%d", &n);

    (n > 0) ? printf("Positive\n") : (n < 0) ? printf("Negative\n") : printf("Zero\n");
    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m1-q17",
      title: "Explain keywords, identifier, constants and variable.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Quick memory chain: KICV = Keyword, Identifier, Constant, Variable**

| Term | Definition | Example in \`int count = 10;\` |
|------|------------|-------------------------------|
| **Keyword** | Reserved word in C | \`int\` |
| **Identifier** | User-defined name | \`count\` |
| **Constant** | Fixed, unchanging value | \`10\` |
| **Variable** | Named memory location (changeable) | \`count\` (can be reassigned) |

**Identifier naming rules (examinable!):**
- Must start with letter (a-z, A-Z) or underscore \`_\`
- Can contain letters, digits (0-9), underscores
- Case sensitive: \`Count\` ≠ \`count\`
- Cannot be a C keyword (\`int\`, \`if\` are reserved)
- Valid: \`myVar\`, \`_count\`, \`num1\`, \`MAX_SIZE\`
- Invalid: \`1var\` (starts with digit), \`my var\` (space), \`float\` (keyword)

**Exam tip:** Use the same one-liner (\`int count = 10;\`) to identify all four terms — saves time and proves understanding.`,
      blocks: [
        {
          type: "text",
          content:
            "- **Keywords**: reserved words in C (e.g., `int`, `if`, `return`).\n- **Identifier**: user-defined name for variable/function (e.g., `totalMarks`).\n- **Constant**: fixed value that does not change (e.g., `10`, `'A'`, `3.14`).\n- **Variable**: named memory location whose value can change (e.g., `int count=0;`).\n\nThese are basic building blocks of C programs.",
        },
      ],
    },
    {
      id: "qb-m1-q18",
      title: "What do you mean by token? What are different tokens used in C?",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Token = smallest meaningful lexical unit the compiler recognises (like individual words in a sentence)**

**Mnemonic: KICOSS = Keywords, Identifiers, Constants, Operators, String literals, Symbols**

| Token type | Examples |
|------------|----------|
| Keywords | \`int\`, \`if\`, \`while\`, \`return\` |
| Identifiers | \`main\`, \`sum\`, \`myVar\` |
| Constants | \`100\`, \`3.14\`, \`'A'\` |
| String literals | \`"hello"\`, \`"C program"\` |
| Operators | \`+\`, \`-\`, \`*\`, \`=\`, \`==\` |
| Special symbols | \`{\`, \`}\`, \`;\`, \`,\`, \`(\`, \`)\` |

**Perfect exam breakdown of \`int a = 10;\`:**
- \`int\` (keyword) · \`a\` (identifier) · \`=\` (operator) · \`10\` (constant) · \`;\` (special symbol)

**Exam tip:** Show the token breakdown of one real line — it demonstrates understanding and fills space neatly.`,
      blocks: [
        {
          type: "text",
          content:
            "A token is the smallest individual unit in a C program.\n\nTypes of tokens in C:\n1. Keywords (`int`, `while`)\n2. Identifiers (`sum`, `main`)\n3. Constants (`100`, `3.5`, `'x'`)\n4. String literals (`\"Hello\"`)\n5. Operators (`+`, `=`, `&&`)\n6. Special symbols (`;`, `{}`, `()`, `,`)\n\nExample statement `int a=10;` has tokens: `int`, `a`, `=`, `10`, `;`.",
        },
      ],
    },
    {
      id: "qb-m1-q19",
      title: "Discuss what is operator? Illustrate different operators used in C.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Operator = symbol that tells the compiler to perform an operation on operands**

**6 main categories — mnemonic ARBLSC:**
- **A**rithmetic: \`+\`, \`-\`, \`*\`, \`/\`, \`%\`
- **R**elational: \`<\`, \`>\`, \`<=\`, \`>=\`, \`==\`, \`!=\`
- **B**itwise: \`&\`, \`|\`, \`^\`, \`~\`, \`<<\`, \`>>\`
- **L**ogical: \`&&\`, \`||\`, \`!\`
- **S**pecial: \`sizeof\`, \`?:\`, \`,\`, \`&\` (address), \`*\` (dereference)
- **A**ssignment: \`=\`, \`+=\`, \`-=\`, \`*=\`, \`/=\`, \`%=\`

**Arity (number of operands):**
- Unary (1 operand): \`++a\`, \`!x\`, \`~b\`
- Binary (2 operands): \`a + b\`, \`a == b\`
- Ternary (3 operands): \`a ? b : c\` — the **ONLY** ternary operator in C!

**Exam answer format:** Definition → Category list with symbols → One example per category → Arity explanation.`,
      blocks: [
        {
          type: "text",
          content:
            "An operator is a symbol that tells compiler to perform an operation on operands.\n\nMain operator categories in C:\n- Arithmetic: `+ - * / %`\n- Relational: `< > <= >= == !=`\n- Logical: `&& || !`\n- Assignment: `= += -= *= /=`\n- Increment/Decrement: `++ --`\n- Bitwise: `& | ^ ~ << >>`\n- Conditional: `?:`\n- Special: `sizeof`, comma operator\n\nExample: `c = a + b;` uses assignment and arithmetic operators.",
        },
      ],
    },
    {
      id: "qb-m1-q20",
      title: "Write algorithm and prepare a flowchart to read 5 subject marks and classify them into grades.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Grade boundaries mnemonic: D-F-S-P-F = Distinction, First, Second, Pass, Fail**

**ALWAYS check from HIGHEST boundary down (else-if chain):**
| Boundary | Grade |
|----------|-------|
| avg >= 75 | Distinction |
| avg >= 60 | First Class |
| avg >= 50 | Second Class |
| avg >= 40 | Pass Class |
| avg < 40 | Fail |

**Why descending order?** If you check \`>= 40\` first, a student with 90 would match "Pass" and stop (wrong!). Top-down → first match wins correctly.

**Average trap:** Use \`(m1+m2+m3+m4+m5) / 5.0\` (float \`5.0\`), not \`/ 5\` (integer division loses decimals).

**Boundary values test:** avg=75 → Distinction (uses \`>=\`) | avg=60 → First Class. Always use \`>=\` not \`>\`.`,
      blocks: [
        {
          type: "text",
          content:
            "Given boundaries:\n- Distinction: `avg >= 75`\n- First Class: `avg >= 60 and < 75`\n- Second Class: `avg >= 50 and < 60`\n- Pass Class: `avg >= 40 and < 50`\n- Fail: `avg < 40`",
        },
        {
          type: "diagram",
          title: "Flowchart - Grade Classification",
          content: `graph TD
S([Start]) --> I[/Read m1,m2,m3,m4,m5/]
I --> A["avg=(m1+m2+m3+m4+m5)/5.0"]
A --> D1{"avg >= 75?"}
D1 -->|Yes| G1[/Print Distinction/]
D1 -->|No| D2{"avg >= 60?"}
D2 -->|Yes| G2[/Print First Class/]
D2 -->|No| D3{"avg >= 50?"}
D3 -->|Yes| G3[/Print Second Class/]
D3 -->|No| D4{"avg >= 40?"}
D4 -->|Yes| G4[/Print Pass Class/]
D4 -->|No| G5[/Print Fail/]
G1 --> E([End])
G2 --> E
G3 --> E
G4 --> E
G5 --> E`,
        },
      ],
    },
    {
      id: "qb-m1-q21",
      title: "Define flowchart and explain various symbols used in a flowchart.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `**Definition: Flowchart = graphical representation of an algorithm using standardised symbols connected by arrows.**

**5 essential symbols — mnemonic ORPDA:**
| Symbol | Shape | Purpose |
|--------|-------|---------|
| **O**val (Terminator) | Rounded rectangle | Start / End |
| **R**ectangle (Process) | Rectangle | Calculation / action |
| **P**arallelogram (I/O) | Slanted rectangle | Read / Print |
| **D**iamond (Decision) | Diamond | Condition with Yes/No exits |
| **A**rrow (Flow line) | Arrow | Direction of control |

**Diamond rule (critical for marking!):** Decision box MUST have exactly **2 exits** — Yes and No. Never 1, never 3.

**Drawing tips:**
- Keep arrows flowing top-to-bottom (no crossing arrows)
- Use Oval for BOTH Start AND End
- Use Parallelogram for BOTH input AND output (not Rectangle)

**Exam tip:** Easy 5-marker — draw all 5 symbols, name each, 1-line explanation each, then add a simple example flowchart (e.g. even/odd). Examiners reward diagrams.`,
      blocks: [
        {
          type: "text",
          content:
            "A flowchart is a graphical representation of an algorithm using standard symbols connected by arrows to show sequence and decision logic.\n\nCommon symbols:\n- **Terminator (Oval):** Start/End\n- **Process (Rectangle):** Calculations/operations\n- **Input/Output (Parallelogram):** Read/Print\n- **Decision (Diamond):** Condition with Yes/No branches\n- **Flow Line (Arrow):** Direction of control flow\n- **Connector (Circle):** Connects broken flow lines\n\nFlowcharts improve understanding, debugging, and communication of program logic.",
        },
      ],
    },
  ],
}
