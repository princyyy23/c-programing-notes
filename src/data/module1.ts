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
      notes: `Memory trick: SIA = Sum, Increment, Average.
    - Code flow: initialize sum=0 and i=1, repeat 10 times, then average = sum/10.0 (use 10.0 for decimal result).
    - Common mistake: using integer division gives truncated average.
    - Exam tip: write one sample input set and show final sum + avg in 1 line.`,
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
A --> B{Is i <= 10?}
B -->|Yes| C[/Read num/]
C --> D[sum = sum + num]
D --> E[i = i + 1]
E --> B
B -->|No| F[avg = sum / 10.0]
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
      notes: `Mnemonic: DDR = Distinct, Duplicate, (complex) Root pair.
    - Core variable is discriminant D = b*b - 4*a*c.
    - Branch logic: D>0 two real roots, D=0 equal roots, D<0 complex roots.
    - Code tip: always mention a != 0, otherwise equation is not quadratic.`,
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
S([Start]) --> I[/Read a,b,c/]
I --> D[D = b*b - 4*a*c]
D --> C1{D > 0?}
C1 -->|Yes| R1[x1=(-b+sqrt(D))/(2a)\nx2=(-b-sqrt(D))/(2a)]
R1 --> P1[/Print two distinct real roots/]
C1 -->|No| C2{D == 0?}
C2 -->|Yes| R2[x = -b/(2a)]
R2 --> P2[/Print equal roots/]
C2 -->|No| R3[real=-b/(2a)\nimag=sqrt(-D)/(2a)]
R3 --> P3[/Print complex roots real±imag i/]
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
      notes: `Best mnemonic: 4 Divides, 100 Denies, 400 Overrides.
    - Decision order in code: check 400 first, then 100, then 4.
    - If order is changed, years like 2000/1900 can give wrong output.
    - Exam tip: quote examples: 2000 leap, 1900 not leap, 2024 leap.`,
      blocks: [
        {
          type: "diagram",
          title: "Flowchart - Leap Year",
          content: `graph TD
S([Start]) --> I[/Read year/]
I --> A{year % 400 == 0?}
A -->|Yes| L[/Print Leap Year/]
A -->|No| B{year % 100 == 0?}
B -->|Yes| N[/Print Not Leap Year/]
B -->|No| C{year % 4 == 0?}
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
      notes: `Quick approach: keep a temporary minimum and update it.
    - Nested decision version: compare a and b first, then compare winner with c.
    - Code trick: min = (a<b)?a:b; then min = (min<c)?min:c.
    - Exam tip: mention all equal case (a=b=c) is still valid.`,
      blocks: [
        {
          type: "diagram",
          title: "Flowchart - Smallest of Three",
          content: `graph TD
S([Start]) --> I[/Read a,b,c/]
I --> A{a < b?}
A -->|Yes| B{a < c?}
A -->|No| C{b < c?}
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
      notes: `Mnemonic: AON = AND, OR, NOT.
    - AND needs both true, OR needs at least one true, NOT flips true/false.
    - Very important: short-circuiting (right side may not execute).
    - Code tip: explain with one truth-table style line for each operator.`,
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
      notes: `Mnemonic for properties: IODEF = Input, Output, Definiteness, Effectiveness, Finiteness.
    - Algorithm is language-independent step-by-step logic.
    - Strong answer format: definition -> properties -> tiny 3-step example.
    - Exam tip: write numbered steps, not paragraph-only text.`,
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
      notes: `Think of header as interface, source file as implementation.
    - Standard headers use <...>, user headers use "...".
    - Code understanding: function is declared in header, defined in .c file.
    - Exam tip: include 2 examples: stdio.h and math.h.`,
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
          content: `#include <stdio.h>
#include <math.h>

int main() {
    double x = 25;
    printf("sqrt = %.2lf\n", sqrt(x));
    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m1-q8",
      title: "What is precedence and associativity of operators? Draw the table.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `Mnemonic: Precedence = Priority, Associativity = Path.
    - Evaluate high-priority operators first, then same-level by associativity.
    - Assignment and unary are mostly right-to-left; arithmetic mostly left-to-right.
    - Code tip: add parentheses in answers to show explicit evaluation order.`,
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
      notes: `Exam frame: 4 buckets -> Basic, Derived, User-defined, Void.
    - Basic stores direct values, derived builds from basic (array/pointer/function).
    - User-defined gives custom grouped types (struct/union/enum/typedef).
    - Tip: add one example variable per category for full-mark clarity.`,
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
      notes: `Mnemonic: CIFDV = char, int, float, double, void.
    - Code understanding: choose type by range + precision requirement.
    - float is less precise than double; mention this explicitly.
    - Exam tip: add typical byte size table (platform dependent wording).`,
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
      notes: `Most asked pair: sqrt() and pow().
    - Mention required header math.h and that arguments/returns are floating type.
    - Code trick: for integer cube, n*n*n is often preferred to pow(n,3).
    - Exam tip: always show sample output with 1 input value.`,
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
          content: `#include <stdio.h>
#include <math.h>

int main() {
    double n = 49;
    printf("sqrt(49) = %.2lf\n", sqrt(n));
    printf("pow(2, 5) = %.2lf\n", pow(2, 5));
    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m1-q12",
      title: "Explain various bitwise operators.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `Memory aid: BEDNSL = Bitwise AND, OR, XOR, NOT, Shift Left, Shift Right.
    - Explain each using binary form (e.g., 5=0101, 3=0011).
    - Left shift roughly multiplies by 2^k, right shift roughly divides by 2^k.
    - Exam tip: show one binary worked example; it scores better than plain definition.`,
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
      notes: `Read ternary as: if condition then value1 else value2.
    - Nested ternary logic should be read from outside to inside.
    - Code tip: use brackets in nested form for readability in exam.
    - Trick: write equivalent if-else below ternary to prove understanding.`,
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
          content: `#include <stdio.h>

int main() {
    int a, b, c, max;
    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);

    max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);

    printf("Largest = %d\n", max);
    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m1-q14",
      title: "Explain structure of C program.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `Mnemonic order: CDLGMF = Comments, Directives, Defines, Globals, Main, Functions.
    - Structure answer should be in sequence, not random bullet points.
    - In code, execution starts from main even if functions are written below.
    - Exam tip: draw mini skeleton program after listing sections.`,
      blocks: [
        {
          type: "text",
          content:
            "A standard C program structure:\n1. Documentation/comment section\n2. Link section (`#include`)\n3. Definition section (`#define`)\n4. Global declaration section\n5. `main()` function\n6. User-defined function definitions\n\nSimple template:\n```c\n#include <stdio.h>\n\nint main() {\n    // declarations\n    // statements\n    return 0;\n}\n```",
        },
      ],
    },
    {
      id: "qb-m1-q15",
      title: "Write an algorithm to find entered number is even or odd and write C program for the same.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `Core check: n % 2 == 0 means even, else odd.
    - Algorithm writing pattern: Start -> Input -> Process -> Output -> Stop.
    - Code tip: keep one clear if-else; avoid unnecessary nested conditions.
    - Viva tip: also mention bit trick n & 1 for odd/even.`,
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
          content: `#include <stdio.h>

int main() {
    int n;
    printf("Enter number: ");
    scanf("%d", &n);

    if (n % 2 == 0)
        printf("Even number\n");
    else
        printf("Odd number\n");

    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m1-q16",
      title: "Explain ternary operator and develop a program to find entered number is positive or negative using ternary operator.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `Good ternary answer handles 3 states: positive, negative, zero.
    - Nested ternary pattern: (n>0)?...:(n<0)?...:...
    - Code readability tip: if logic becomes long, switch to if-else.
    - Exam trick: add one test each for +ve, -ve and 0.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Positive/Negative using Ternary",
          content: `#include <stdio.h>

int main() {
    int n;
    printf("Enter number: ");
    scanf("%d", &n);

    (n > 0) ? printf("Positive\n") : (n < 0) ? printf("Negative\n") : printf("Zero\n");
    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m1-q17",
      title: "Explain keywords, identifier, constants and variable.",
      source: "Question Bank - Module 1",
      marks: 5,
      notes: `Quick memory chain: KICV = Keyword, Identifier, Constant, Variable.
    - Keyword: reserved; Identifier: user-defined; Constant: fixed; Variable: changeable.
    - Code tip: compare with one statement like int count = 10; to identify all four.
    - Exam tip: mention identifier naming rules in one extra line.`,
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
      notes: `Mnemonic: KICOSS = Keywords, Identifiers, Constants, Operators, Strings, Symbols.
    - Token = smallest meaningful lexical unit recognized by compiler.
    - Example breakdown of int a=10; gives excellent marks quickly.
    - Tip: avoid confusing tokens with statements or lines.`,
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
      notes: `Operator is action symbol applied on operands.
    - Best answer format: definition -> category list -> one example per category.
    - Must include arithmetic, relational, logical, assignment, bitwise, conditional.
    - Exam tip: differentiate unary (++), binary (+), ternary(?:).`,
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
      notes: `Grade logic mnemonic: D-F-S-P-F (Distinction, First, Second, Pass, Fail).
    - Always compute average once, then do descending boundary checks.
    - Descending check avoids overlap mistakes (start from >=75 first).
    - Code tip: use else-if ladder for mutually exclusive grade ranges.`,
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
I --> A[avg=(m1+m2+m3+m4+m5)/5]
A --> D1{avg >= 75?}
D1 -->|Yes| G1[/Print Distinction/]
D1 -->|No| D2{avg >= 60?}
D2 -->|Yes| G2[/Print First Class/]
D2 -->|No| D3{avg >= 50?}
D3 -->|Yes| G3[/Print Second Class/]
D3 -->|No| D4{avg >= 40?}
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
      notes: `Most important symbols: Oval, Rectangle, Parallelogram, Diamond, Arrow.
    - Mnemonic: ORPDA = Oval-Rectangle-Parallelogram-Diamond-Arrow.
    - Diamond must have two exits (Yes/No); this is a common marking point.
    - Exam tip: keep arrows top-to-bottom to make flowchart clean and readable.`,
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
