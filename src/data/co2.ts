import type { CourseOutcome } from "@/types"

export const co2: CourseOutcome = {
  id: "co2",
  title: "CO2: Control Structures (Decision Making and Looping)",
  shortTitle: "CO2",
  description:
    "if-else, switch-case, loops (for, while, do-while), break, continue, and patterns",
  icon: "Repeat",
  color: "cyan",
  questions: [
    // ── Q1 ──────────────────────────────────────────────────────────────
    {
      id: "co2-q1",
      title:
        "Explain nested if and else if ladder statement with syntax",
      source: "May/Jun 2023",
      marks: 6,
      blocks: [
        {
          type: "text",
          content: `## Nested if Statement

A **nested if** is an \`if\` statement placed inside another \`if\` or \`else\` block. It allows testing multiple conditions in a hierarchical manner.

### Syntax

\`\`\`
if (condition1) {
    if (condition2) {
        // executes when both condition1 AND condition2 are true
    } else {
        // executes when condition1 is true but condition2 is false
    }
} else {
    // executes when condition1 is false
}
\`\`\`

### Key Points
- Inner \`if\` is evaluated **only** when the outer \`if\` condition is true.
- Can be nested to any depth, but deep nesting reduces readability.

---

## else-if Ladder

The **else-if ladder** is used when we need to test a series of mutually exclusive conditions one after another. The first condition that evaluates to true has its block executed; the rest are skipped.

### Syntax

\`\`\`
if (condition1) {
    // block 1
} else if (condition2) {
    // block 2
} else if (condition3) {
    // block 3
} else {
    // default block (none of the above were true)
}
\`\`\`

### Key Points
- Conditions are checked **top to bottom**.
- As soon as one condition is true, remaining conditions are **not evaluated**.
- The final \`else\` acts as a default/catch-all and is optional.`,
        },
        {
          type: "code",
          language: "c",
          title: "Example: Nested if",
          content: `#include <stdio.h>

int main() {
    int age = 25, hasID = 1;

    if (age >= 18) {
        if (hasID) {
            printf("Allowed entry.\\n");
        } else {
            printf("Carry your ID next time.\\n");
        }
    } else {
        printf("Entry not allowed. You are underage.\\n");
    }

    return 0;
}`,
        },
        {
          type: "code",
          language: "c",
          title: "Example: else-if Ladder (Grade System)",
          content: `#include <stdio.h>

int main() {
    int marks;

    printf("Enter marks: ");
    scanf("%d", &marks);

    if (marks >= 90) {
        printf("Grade: A\\n");
    } else if (marks >= 75) {
        printf("Grade: B\\n");
    } else if (marks >= 60) {
        printf("Grade: C\\n");
    } else if (marks >= 40) {
        printf("Grade: D\\n");
    } else {
        printf("Grade: F (Fail)\\n");
    }

    return 0;
}`,
        },
      ],
    },

    // ── Q2 ──────────────────────────────────────────────────────────────
    {
      id: "co2-q2",
      title:
        "Explain Role of Continue Statements with help of Example",
      source: "Dec 2022",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## The \`continue\` Statement

The **\`continue\`** statement is used inside loops (\`for\`, \`while\`, \`do-while\`) to **skip the remaining statements** in the current iteration and jump directly to the next iteration of the loop.

### How it works
1. When \`continue\` is encountered, the rest of the loop body **below** it is skipped.
2. Control passes to the **loop's update expression** (in \`for\`) or back to the **condition check** (in \`while\` / \`do-while\`).
3. The loop does **not** terminate; only the current iteration is skipped.

### Syntax

\`\`\`
for (init; condition; update) {
    if (skip_condition)
        continue;   // jump to update, then re-check condition
    // statements below are skipped when continue executes
}
\`\`\`

### Key Points
- \`continue\` works only with loops, **not** with \`switch\`.
- Useful for skipping unwanted values (e.g., skipping even numbers, ignoring negative input).`,
        },
        {
          type: "code",
          language: "c",
          title: "Example: Print only odd numbers from 1 to 10",
          content: `#include <stdio.h>

int main() {
    int i;

    printf("Odd numbers from 1 to 10:\\n");

    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0)
            continue;   // skip even numbers

        printf("%d ", i);
    }

    // Output: 1 3 5 7 9
    return 0;
}`,
        },
      ],
    },

    // ── Q3 ──────────────────────────────────────────────────────────────
    {
      id: "co2-q3",
      title:
        "Difference between While and Do While Loop with example",
      source: "Jul 2022",
      marks: 6,
      blocks: [
        {
          type: "text",
          content: `## while vs do-while Loop

| Feature | \`while\` Loop | \`do-while\` Loop |
|---|---|---|
| **Condition check** | Checked **before** execution (entry-controlled) | Checked **after** execution (exit-controlled) |
| **Minimum executions** | **0** (body may never execute) | **1** (body always executes at least once) |
| **Syntax** | \`while (cond) { ... }\` | \`do { ... } while (cond);\` |
| **Semicolon** | No semicolon after \`while(cond)\` | Semicolon **required** after \`while(cond);\` |
| **Use case** | When execution depends on condition being true first | When body must run at least once (e.g., menu) |

### Key Difference
- In a \`while\` loop, if the condition is **false initially**, the loop body is **never executed**.
- In a \`do-while\` loop, the body executes **at least once** regardless of the condition.`,
        },
        {
          type: "code",
          language: "c",
          title: "Example: while loop",
          content: `#include <stdio.h>

int main() {
    int i = 1;

    // while loop: condition checked BEFORE body
    while (i <= 5) {
        printf("%d ", i);
        i++;
    }
    // Output: 1 2 3 4 5

    return 0;
}`,
        },
        {
          type: "code",
          language: "c",
          title: "Example: do-while loop",
          content: `#include <stdio.h>

int main() {
    int i = 1;

    // do-while loop: body executes FIRST, then condition checked
    do {
        printf("%d ", i);
        i++;
    } while (i <= 5);
    // Output: 1 2 3 4 5

    return 0;
}`,
        },
        {
          type: "diagram",
          title: "Flowchart: while vs do-while",
          content: `graph LR
    subgraph while_loop["while Loop (Entry-Controlled)"]
        A1[Start] --> B1{Condition?}
        B1 -->|True| C1[Execute Body]
        C1 --> B1
        B1 -->|False| D1[End]
    end

    subgraph dowhile_loop["do-while Loop (Exit-Controlled)"]
        A2[Start] --> C2[Execute Body]
        C2 --> B2{Condition?}
        B2 -->|True| C2
        B2 -->|False| D2[End]
    end

    style A1 fill:#06b6d4,stroke:#0891b2,color:#fff
    style B1 fill:#f59e0b,stroke:#d97706,color:#fff
    style C1 fill:#10b981,stroke:#059669,color:#fff
    style D1 fill:#ef4444,stroke:#dc2626,color:#fff
    style A2 fill:#06b6d4,stroke:#0891b2,color:#fff
    style B2 fill:#f59e0b,stroke:#d97706,color:#fff
    style C2 fill:#10b981,stroke:#059669,color:#fff
    style D2 fill:#ef4444,stroke:#dc2626,color:#fff`,
        },
      ],
    },

    // ── Q4 ──────────────────────────────────────────────────────────────
    {
      id: "co2-q4",
      title:
        "Write a C program using switch for calculator (+, -, *, /)",
      source: "Aug 2023",
      marks: 6,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Calculator using Switch Case",
          content: `#include <stdio.h>

int main() {
    char operator;
    float num1, num2, result;

    printf("Enter operator (+, -, *, /): ");
    scanf(" %c", &operator);

    printf("Enter two operands: ");
    scanf("%f %f", &num1, &num2);

    switch (operator) {
        case '+':
            result = num1 + num2;
            printf("%.2f + %.2f = %.2f\\n", num1, num2, result);
            break;

        case '-':
            result = num1 - num2;
            printf("%.2f - %.2f = %.2f\\n", num1, num2, result);
            break;

        case '*':
            result = num1 * num2;
            printf("%.2f * %.2f = %.2f\\n", num1, num2, result);
            break;

        case '/':
            if (num2 != 0) {
                result = num1 / num2;
                printf("%.2f / %.2f = %.2f\\n", num1, num2, result);
            } else {
                printf("Error: Division by zero!\\n");
            }
            break;

        default:
            printf("Invalid operator!\\n");
    }

    return 0;
}`,
        },
      ],
    },

    // ── Q5 ──────────────────────────────────────────────────────────────
    {
      id: "co2-q5",
      title:
        "Write a program to generate pattern: P PQ PQR PQRS",
      source: "May 2024",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Pattern Explanation

The pattern to generate is:
\`\`\`
P
PQ
PQR
PQRS
PQRST
\`\`\`

**Logic:**
- Outer loop controls the number of rows (1 to n).
- Inner loop prints characters starting from \`'P'\` up to the current row count.
- In each row \`i\`, we print \`i\` consecutive characters starting from \`'P'\`.`,
        },
        {
          type: "code",
          language: "c",
          title: "Pattern: P PQ PQR PQRS PQRST",
          content: `#include <stdio.h>

int main() {
    int i, j, n;

    printf("Enter number of rows: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        for (j = 0; j < i; j++) {
            printf("%c", 'P' + j);
        }
        printf("\\n");
    }

    return 0;
}

/*
Output (n = 5):
P
PQ
PQR
PQRS
PQRST
*/`,
        },
      ],
    },

    // ── Q6 ──────────────────────────────────────────────────────────────
    {
      id: "co2-q6",
      title:
        "Calculate sum of series (1*1)+(2*2)+...+(n*n)",
      source: "Dec 2022",
      marks: 4,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Sum of Squares Series",
          content: `#include <stdio.h>

int main() {
    int n, i, sum = 0;

    printf("Enter value of n: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        sum = sum + (i * i);
    }

    printf("Sum of series (1*1)+(2*2)+...+(%d*%d) = %d\\n", n, n, sum);

    return 0;
}

/*
Example:
  Input:  n = 5
  Series: (1*1) + (2*2) + (3*3) + (4*4) + (5*5)
        = 1 + 4 + 9 + 16 + 25
  Output: Sum = 55
*/`,
        },
      ],
    },

    // ── Q7 ──────────────────────────────────────────────────────────────
    {
      id: "co2-q7",
      title: "Explain continue and break statement",
      source: "May/Jun 2023",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## break Statement

The **\`break\`** statement is used to **terminate** the execution of the nearest enclosing loop or \`switch\` statement immediately. After \`break\`, control passes to the statement immediately following the loop/switch.

### Use Cases
- Exit a loop early when a condition is met (e.g., element found in search).
- Terminate a \`case\` in a \`switch\` to prevent fall-through.

### Syntax
\`\`\`
for (...) {
    if (condition)
        break;    // exit the loop immediately
}
\`\`\`

---

## continue Statement

The **\`continue\`** statement **skips the remaining body** of the current loop iteration and proceeds to the next iteration.

### Use Cases
- Skip processing for certain values (e.g., skip negative numbers, skip even numbers).

### Syntax
\`\`\`
for (...) {
    if (condition)
        continue; // skip to next iteration
    // code below is skipped when continue executes
}
\`\`\`

---

## Comparison

| Feature | \`break\` | \`continue\` |
|---|---|---|
| **Action** | Terminates the entire loop | Skips current iteration only |
| **Loop continues?** | No | Yes (next iteration) |
| **Works in switch?** | Yes | No |`,
        },
        {
          type: "code",
          language: "c",
          title: "Example: break and continue",
          content: `#include <stdio.h>

int main() {
    int i;

    // --- break example ---
    printf("break example:\\n");
    for (i = 1; i <= 10; i++) {
        if (i == 6)
            break;       // exit loop when i is 6
        printf("%d ", i);
    }
    printf("\\n");
    // Output: 1 2 3 4 5

    // --- continue example ---
    printf("continue example:\\n");
    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0)
            continue;    // skip even numbers
        printf("%d ", i);
    }
    printf("\\n");
    // Output: 1 3 5 7 9

    return 0;
}`,
        },
      ],
    },

    // ── Q8 ──────────────────────────────────────────────────────────────
    {
      id: "co2-q8",
      title:
        "State 2 library functions in math.h with example",
      source: "Aug 2023",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Library Functions in \`<math.h>\`

The header file **\`<math.h>\`** provides mathematical functions. Two commonly used functions are:

### 1. \`sqrt(x)\` -- Square Root
- **Prototype:** \`double sqrt(double x);\`
- **Description:** Returns the square root of \`x\`.
- **Example:** \`sqrt(25.0)\` returns \`5.0\`.

### 2. \`pow(base, exp)\` -- Power
- **Prototype:** \`double pow(double base, double exp);\`
- **Description:** Returns \`base\` raised to the power \`exp\` (i.e., base^exp).
- **Example:** \`pow(2.0, 3.0)\` returns \`8.0\`.

> **Note:** When compiling with \`gcc\`, link the math library using the \`-lm\` flag:
> \`gcc program.c -lm\``,
        },
        {
          type: "code",
          language: "c",
          title: "Example: sqrt() and pow()",
          content: `#include <stdio.h>
#include <math.h>

int main() {
    double num = 25.0;
    double base = 2.0, exponent = 5.0;

    // sqrt() - Square Root
    printf("Square root of %.0f = %.2f\\n", num, sqrt(num));
    // Output: Square root of 25 = 5.00

    // pow() - Power
    printf("%.0f raised to power %.0f = %.2f\\n",
           base, exponent, pow(base, exponent));
    // Output: 2 raised to power 5 = 32.00

    return 0;
}`,
        },
      ],
    },

    // ── Q9 ──────────────────────────────────────────────────────────────
    {
      id: "co2-q9",
      title:
        "Calculator using Switch Case (Add, Subtract, Division, Multiply)",
      source: "May 2024",
      marks: 6,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Menu-Driven Calculator using Switch Case",
          content: `#include <stdio.h>

int main() {
    int choice;
    float a, b;

    printf("===== Simple Calculator =====\\n");
    printf("1. Addition\\n");
    printf("2. Subtraction\\n");
    printf("3. Multiplication\\n");
    printf("4. Division\\n");
    printf("Enter your choice (1-4): ");
    scanf("%d", &choice);

    printf("Enter two numbers: ");
    scanf("%f %f", &a, &b);

    switch (choice) {
        case 1:
            printf("%.2f + %.2f = %.2f\\n", a, b, a + b);
            break;

        case 2:
            printf("%.2f - %.2f = %.2f\\n", a, b, a - b);
            break;

        case 3:
            printf("%.2f * %.2f = %.2f\\n", a, b, a * b);
            break;

        case 4:
            if (b != 0)
                printf("%.2f / %.2f = %.2f\\n", a, b, a / b);
            else
                printf("Error: Division by zero is not allowed!\\n");
            break;

        default:
            printf("Invalid choice! Please select 1-4.\\n");
    }

    return 0;
}`,
        },
      ],
    },

    // ── Q10 ─────────────────────────────────────────────────────────────
    {
      id: "co2-q10",
      title:
        "Check whether a given number is palindrome or not using nested loops",
      source: "Jun 2025",
      marks: 6,
      blocks: [
        {
          type: "text",
          content: `## Palindrome Number

A **palindrome number** is a number that reads the same forwards and backwards.

**Examples:**
- 121 is a palindrome (reverse is 121)
- 12321 is a palindrome
- 123 is NOT a palindrome (reverse is 321)

### Algorithm
1. Store the original number.
2. Reverse the number by extracting digits one by one using a loop.
3. Compare the reversed number with the original.
4. If equal, the number is a palindrome.`,
        },
        {
          type: "code",
          language: "c",
          title: "Palindrome Check",
          content: `#include <stdio.h>

int main() {
    int num, originalNum, reversedNum, remainder;

    printf("Enter a number: ");
    scanf("%d", &num);

    originalNum = num;
    reversedNum = 0;

    // Reverse the number using a loop
    while (num != 0) {
        remainder = num % 10;          // extract last digit
        reversedNum = reversedNum * 10 + remainder;  // build reverse
        num = num / 10;                // remove last digit
    }

    // Compare original and reversed
    if (originalNum == reversedNum) {
        printf("%d is a Palindrome number.\\n", originalNum);
    } else {
        printf("%d is NOT a Palindrome number.\\n", originalNum);
    }

    return 0;
}

/*
Example 1:
  Input:  12321
  Reverse: 12321
  Output: 12321 is a Palindrome number.

Example 2:
  Input:  456
  Reverse: 654
  Output: 456 is NOT a Palindrome number.
*/`,
        },
      ],
    },

    // ── Q11 ─────────────────────────────────────────────────────────────
    {
      id: "co2-q11",
      title:
        "Difference between Switch statement and if-else ladder",
      source: "Jul 2022",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Switch Statement vs if-else Ladder

| Feature | \`switch\` Statement | \`if-else\` Ladder |
|---|---|---|
| **Test expression** | Tests a single variable/expression against constant values | Can test different variables and complex conditions |
| **Condition type** | Works only with **integer** or **character** constants | Works with **any** type of expression (int, float, relational, logical) |
| **Equality only** | Can only check for **equality** (\`==\`) | Can check **equality, relational** (\`<\`, \`>\`, \`<=\`, \`>=\`) and **logical** (\`&&\`, \`||\`) conditions |
| **Fall-through** | Falls through to next case if \`break\` is missing | No fall-through; only matching block executes |
| **Execution speed** | Generally **faster** (uses jump table internally) | Comparatively **slower** (conditions checked sequentially) |
| **Readability** | More readable when checking one variable against many values | Better for complex or range-based conditions |
| **Duplicate cases** | Not allowed (compiler error) | Duplicate conditions allowed (first match wins) |
| **float/double** | **Not supported** as case labels | Fully supported in conditions |
| **Nesting** | Can be nested but becomes complex | Easier to nest with readable structure |
| **Default** | Uses \`default:\` keyword | Uses final \`else\` block |

### When to Use What?
- **Use \`switch\`** when comparing **one variable** against many **constant values** (e.g., menu choices, weekdays).
- **Use \`if-else\`** when conditions involve **ranges**, **multiple variables**, or **complex expressions**.`,
        },
      ],
    },

    // ── Q12 ─────────────────────────────────────────────────────────────
    {
      id: "co2-q12",
      title: "Write a for loop for addition of n numbers",
      source: "Dec 2022",
      marks: 4,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Addition of n Numbers using for Loop",
          content: `#include <stdio.h>

int main() {
    int n, i;
    float num, sum = 0.0;

    printf("How many numbers? ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        printf("Enter number %d: ", i);
        scanf("%f", &num);
        sum = sum + num;
    }

    printf("Sum of %d numbers = %.2f\\n", n, sum);

    return 0;
}

/*
Example:
  Input:  n = 4
          Numbers: 10 20 30 40
  Output: Sum of 4 numbers = 100.00
*/`,
        },
      ],
    },

    // ── Q13 ─────────────────────────────────────────────────────────────
    {
      id: "co2-q13",
      title:
        "Differentiate between switch, else if ladder and nested if else",
      source: "Aug 2025",
      marks: 6,
      blocks: [
        {
          type: "text",
          content: `## Comparison: switch vs else-if Ladder vs Nested if-else

| Feature | \`switch\` | \`else-if\` Ladder | Nested \`if-else\` |
|---|---|---|---|
| **Structure** | Single expression matched against multiple constant case labels | Series of conditions checked sequentially from top to bottom | \`if-else\` blocks placed inside other \`if-else\` blocks |
| **Condition type** | Only **equality** check with integer/char constants | Any **relational, logical, or arithmetic** expression | Any **relational, logical, or arithmetic** expression |
| **Data types** | \`int\`, \`char\` only | All data types (\`int\`, \`float\`, \`char\`, etc.) | All data types |
| **Fall-through** | Yes (if \`break\` is omitted, next case also executes) | No fall-through | No fall-through |
| **\`break\` needed?** | Yes, to prevent fall-through | Not needed | Not needed |
| **Default handling** | \`default:\` label | Final \`else\` block | Inner \`else\` blocks |
| **Readability** | Best for menu-driven / value matching | Good for sequential condition checking | Can become complex with deep nesting |
| **Speed** | Fastest (compiler may use jump tables) | Moderate | Moderate |
| **Range checks** | Not possible (e.g., \`marks > 80\`) | Possible | Possible |
| **Best use case** | Menu selection, weekday names, character grading | Grading systems with ranges, multiple independent conditions | Hierarchical decision-making (e.g., eligibility checks) |

### Syntax Summary

**switch:**
\`\`\`
switch (expr) {
    case val1: ...; break;
    case val2: ...; break;
    default: ...;
}
\`\`\`

**else-if ladder:**
\`\`\`
if (cond1) { ... }
else if (cond2) { ... }
else if (cond3) { ... }
else { ... }
\`\`\`

**Nested if-else:**
\`\`\`
if (cond1) {
    if (cond2) { ... }
    else { ... }
} else {
    if (cond3) { ... }
    else { ... }
}
\`\`\``,
        },
      ],
    },

    // ── Q14 ─────────────────────────────────────────────────────────────
    {
      id: "co2-q14",
      title: "Print pattern: A BB CCC DDDD EEEEE",
      source: "May/Jun 2023",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Pattern Explanation

The expected output is:
\`\`\`
A
BB
CCC
DDDD
EEEEE
\`\`\`

**Logic:**
- Outer loop runs from row 1 to n.
- In row \`i\`, we print the character \`('A' + i - 1)\` repeated \`i\` times.
- Row 1: 'A' printed 1 time, Row 2: 'B' printed 2 times, and so on.`,
        },
        {
          type: "code",
          language: "c",
          title: "Pattern: A BB CCC DDDD EEEEE",
          content: `#include <stdio.h>

int main() {
    int i, j, n;

    printf("Enter number of rows: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            printf("%c", 'A' + i - 1);
        }
        printf("\\n");
    }

    return 0;
}

/*
Output (n = 5):
A
BB
CCC
DDDD
EEEEE
*/`,
        },
      ],
    },

    // ── Q15 ─────────────────────────────────────────────────────────────
    {
      id: "co2-q15",
      title:
        "Differentiate between for, while and do-while",
      source: "Aug 2023",
      marks: 6,
      blocks: [
        {
          type: "text",
          content: `## Comparison of for, while, and do-while Loops

| Feature | \`for\` Loop | \`while\` Loop | \`do-while\` Loop |
|---|---|---|---|
| **Type** | Entry-controlled | Entry-controlled | Exit-controlled |
| **Syntax** | \`for (init; cond; update) { }\` | \`while (cond) { }\` | \`do { } while (cond);\` |
| **Initialization** | Inside loop syntax | Before the loop | Before the loop |
| **Condition check** | Before each iteration | Before each iteration | After each iteration |
| **Minimum execution** | 0 times | 0 times | **1 time** (guaranteed) |
| **Update** | In the loop header | Inside the loop body | Inside the loop body |
| **Semicolon** | No semicolon after \`)\` | No semicolon after \`)\` | **Semicolon required** after \`while();\` |
| **Best use** | When number of iterations is **known** | When number of iterations is **unknown** | When body must execute **at least once** |
| **Example use** | Counting, arrays | Reading until EOF | Menu-driven programs |

### Syntax at a Glance

**for:**
\`\`\`c
for (int i = 0; i < n; i++) {
    // body
}
\`\`\`

**while:**
\`\`\`c
int i = 0;
while (i < n) {
    // body
    i++;
}
\`\`\`

**do-while:**
\`\`\`c
int i = 0;
do {
    // body
    i++;
} while (i < n);
\`\`\``,
        },
        {
          type: "diagram",
          title: "Flowcharts: for, while, and do-while Loops",
          content: `graph TD
    subgraph for_loop["for Loop"]
        F1[Initialize] --> F2{Condition?}
        F2 -->|True| F3[Execute Body]
        F3 --> F4[Update]
        F4 --> F2
        F2 -->|False| F5[Exit]
    end

    subgraph while_loop["while Loop"]
        W1[Initialize] --> W2{Condition?}
        W2 -->|True| W3[Execute Body]
        W3 --> W2
        W2 -->|False| W4[Exit]
    end

    subgraph dowhile_loop["do-while Loop"]
        D1[Initialize] --> D2[Execute Body]
        D2 --> D3{Condition?}
        D3 -->|True| D2
        D3 -->|False| D4[Exit]
    end

    style F1 fill:#06b6d4,stroke:#0891b2,color:#fff
    style F2 fill:#f59e0b,stroke:#d97706,color:#fff
    style F3 fill:#10b981,stroke:#059669,color:#fff
    style F4 fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style F5 fill:#ef4444,stroke:#dc2626,color:#fff
    style W1 fill:#06b6d4,stroke:#0891b2,color:#fff
    style W2 fill:#f59e0b,stroke:#d97706,color:#fff
    style W3 fill:#10b981,stroke:#059669,color:#fff
    style W4 fill:#ef4444,stroke:#dc2626,color:#fff
    style D1 fill:#06b6d4,stroke:#0891b2,color:#fff
    style D2 fill:#10b981,stroke:#059669,color:#fff
    style D3 fill:#f59e0b,stroke:#d97706,color:#fff
    style D4 fill:#ef4444,stroke:#dc2626,color:#fff`,
        },
      ],
    },

    // ── Q16 ─────────────────────────────────────────────────────────────
    {
      id: "co2-q16",
      title:
        "Illustrate if-else-if ladder using flowchart",
      source: "May 2024",
      marks: 4,
      blocks: [
        {
          type: "diagram",
          title: "Flowchart: if-else-if Ladder",
          content: `graph TD
    A[Start] --> B{Condition 1?}
    B -->|True| C[Execute Block 1]
    C --> G[End]
    B -->|False| D{Condition 2?}
    D -->|True| E[Execute Block 2]
    E --> G
    D -->|False| F{Condition 3?}
    F -->|True| H[Execute Block 3]
    H --> G
    F -->|False| I[Execute Default / else Block]
    I --> G

    style A fill:#06b6d4,stroke:#0891b2,color:#fff
    style B fill:#f59e0b,stroke:#d97706,color:#fff
    style C fill:#10b981,stroke:#059669,color:#fff
    style D fill:#f59e0b,stroke:#d97706,color:#fff
    style E fill:#10b981,stroke:#059669,color:#fff
    style F fill:#f59e0b,stroke:#d97706,color:#fff
    style G fill:#ef4444,stroke:#dc2626,color:#fff
    style H fill:#10b981,stroke:#059669,color:#fff
    style I fill:#8b5cf6,stroke:#7c3aed,color:#fff`,
        },
        {
          type: "text",
          content: `## if-else-if Ladder Explanation

The **if-else-if ladder** evaluates conditions **sequentially from top to bottom**:

1. **Condition 1** is checked first. If true, **Block 1** executes and the rest is skipped.
2. If Condition 1 is false, **Condition 2** is checked. If true, **Block 2** executes.
3. This continues for all conditions in the chain.
4. If **none** of the conditions are true, the **else (default) block** executes.

### Syntax
\`\`\`c
if (condition1) {
    // Block 1
} else if (condition2) {
    // Block 2
} else if (condition3) {
    // Block 3
} else {
    // Default block
}
\`\`\`

### Key Points
- Only **one block** executes in the entire ladder.
- Conditions are tested in **order** -- put the most likely condition first for efficiency.
- The final \`else\` is optional but recommended as a safety net.`,
        },
      ],
    },

    // ── Q17 ─────────────────────────────────────────────────────────────
    {
      id: "co2-q17",
      title:
        "Perform arithmetic operations using Switch case",
      source: "Jun 2025",
      marks: 4,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Arithmetic Operations using Switch Case",
          content: `#include <stdio.h>

int main() {
    int a, b, choice;

    printf("Enter two integers: ");
    scanf("%d %d", &a, &b);

    printf("\\nSelect Operation:\\n");
    printf("1. Addition\\n");
    printf("2. Subtraction\\n");
    printf("3. Multiplication\\n");
    printf("4. Division\\n");
    printf("5. Modulus\\n");
    printf("Enter choice: ");
    scanf("%d", &choice);

    switch (choice) {
        case 1:
            printf("%d + %d = %d\\n", a, b, a + b);
            break;
        case 2:
            printf("%d - %d = %d\\n", a, b, a - b);
            break;
        case 3:
            printf("%d * %d = %d\\n", a, b, a * b);
            break;
        case 4:
            if (b != 0)
                printf("%d / %d = %d\\n", a, b, a / b);
            else
                printf("Error: Cannot divide by zero!\\n");
            break;
        case 5:
            if (b != 0)
                printf("%d %% %d = %d\\n", a, b, a % b);
            else
                printf("Error: Cannot compute modulus with zero!\\n");
            break;
        default:
            printf("Invalid choice!\\n");
    }

    return 0;
}`,
        },
      ],
    },

    // ── Q18 ─────────────────────────────────────────────────────────────
    {
      id: "co2-q18",
      title:
        "Print all even numbers from 1 to n using while loop",
      source: "Aug 2025",
      marks: 4,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Even Numbers from 1 to n using while Loop",
          content: `#include <stdio.h>

int main() {
    int n, i = 2;

    printf("Enter value of n: ");
    scanf("%d", &n);

    printf("Even numbers from 1 to %d:\\n", n);

    while (i <= n) {
        printf("%d ", i);
        i = i + 2;
    }

    printf("\\n");
    return 0;
}

/*
Example:
  Input:  n = 10
  Output: Even numbers from 1 to 10:
          2 4 6 8 10
*/`,
        },
      ],
    },

    // ── Q19 ─────────────────────────────────────────────────────────────
    {
      id: "co2-q19",
      title:
        "Determine whether number is negative, positive or zero using if-else",
      source: "Jul 2022",
      marks: 4,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Check Positive, Negative or Zero",
          content: `#include <stdio.h>

int main() {
    int num;

    printf("Enter a number: ");
    scanf("%d", &num);

    if (num > 0) {
        printf("%d is a Positive number.\\n", num);
    } else if (num < 0) {
        printf("%d is a Negative number.\\n", num);
    } else {
        printf("The number is Zero.\\n");
    }

    return 0;
}`,
        },
        {
          type: "diagram",
          title: "Flowchart: Positive / Negative / Zero Check",
          content: `graph TD
    A[Start] --> B[/Input num/]
    B --> C{num > 0?}
    C -->|Yes| D["Print: Positive"]
    C -->|No| E{num < 0?}
    E -->|Yes| F["Print: Negative"]
    E -->|No| G["Print: Zero"]
    D --> H[End]
    F --> H
    G --> H

    style A fill:#06b6d4,stroke:#0891b2,color:#fff
    style B fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style C fill:#f59e0b,stroke:#d97706,color:#fff
    style D fill:#10b981,stroke:#059669,color:#fff
    style E fill:#f59e0b,stroke:#d97706,color:#fff
    style F fill:#ef4444,stroke:#dc2626,color:#fff
    style G fill:#6366f1,stroke:#4f46e5,color:#fff
    style H fill:#06b6d4,stroke:#0891b2,color:#fff`,
        },
      ],
    },

    // ── Q20 ─────────────────────────────────────────────────────────────
    {
      id: "co2-q20",
      title: "Display n natural numbers and their sum",
      source: "Dec 2022",
      marks: 4,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Display n Natural Numbers and Their Sum",
          content: `#include <stdio.h>

int main() {
    int n, i, sum = 0;

    printf("Enter a positive integer n: ");
    scanf("%d", &n);

    printf("Natural numbers from 1 to %d:\\n", n);

    for (i = 1; i <= n; i++) {
        printf("%d ", i);
        sum = sum + i;
    }

    printf("\\nSum of first %d natural numbers = %d\\n", n, sum);

    return 0;
}

/*
Example:
  Input:  n = 10
  Output: Natural numbers from 1 to 10:
          1 2 3 4 5 6 7 8 9 10
          Sum of first 10 natural numbers = 55
*/`,
        },
      ],
    },

    // ── Q21 ─────────────────────────────────────────────────────────────
    {
      id: "co2-q21",
      title:
        "Read weekday number and print weekday name using switch case",
      source: "May/Jun 2023",
      marks: 4,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Weekday Name using Switch Case",
          content: `#include <stdio.h>

int main() {
    int day;

    printf("Enter weekday number (1-7): ");
    scanf("%d", &day);

    switch (day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
        case 4:
            printf("Thursday\\n");
            break;
        case 5:
            printf("Friday\\n");
            break;
        case 6:
            printf("Saturday\\n");
            break;
        case 7:
            printf("Sunday\\n");
            break;
        default:
            printf("Invalid input! Enter a number between 1 and 7.\\n");
    }

    return 0;
}

/*
Example:
  Input:  3
  Output: Wednesday
*/`,
        },
      ],
    },

    // ── Q22 ─────────────────────────────────────────────────────────────
    {
      id: "co2-q22",
      title: "Explain the different if constructs",
      source: "Aug 2025",
      marks: 6,
      blocks: [
        {
          type: "text",
          content: `## The Different \`if\` Constructs in C

C provides four forms of the \`if\` statement for decision making:

---

### 1. Simple \`if\` Statement
Executes a block only if the condition is **true**. If false, the block is skipped entirely.

\`\`\`c
if (condition) {
    // executed only when condition is true
}
\`\`\`

---

### 2. \`if-else\` Statement
Provides two paths: one for **true** and one for **false**.

\`\`\`c
if (condition) {
    // executed when condition is true
} else {
    // executed when condition is false
}
\`\`\`

---

### 3. \`else-if\` Ladder (if-else-if)
Used to check **multiple conditions** sequentially. First true condition's block executes; the rest are skipped.

\`\`\`c
if (condition1) {
    // block 1
} else if (condition2) {
    // block 2
} else if (condition3) {
    // block 3
} else {
    // default block
}
\`\`\`

---

### 4. Nested \`if\` Statement
An \`if\` (or \`if-else\`) placed **inside** another \`if\` or \`else\` block. Used for hierarchical decision-making.

\`\`\`c
if (outerCondition) {
    if (innerCondition) {
        // both outer and inner conditions are true
    } else {
        // outer true, inner false
    }
} else {
    // outer condition is false
}
\`\`\`

---

### Summary Table

| Construct | Conditions Checked | Blocks | Use Case |
|---|---|---|---|
| Simple \`if\` | 1 | 1 (true only) | Single condition check |
| \`if-else\` | 1 | 2 (true + false) | Binary decision |
| \`else-if\` ladder | Multiple | Many (one per condition) | Multiple mutually exclusive checks |
| Nested \`if\` | Multiple (hierarchical) | Varies | Dependent / layered conditions |`,
        },
        {
          type: "diagram",
          title: "Flowcharts of if Constructs",
          content: `graph TD
    subgraph simple_if["1. Simple if"]
        S1[Start] --> S2{Condition?}
        S2 -->|True| S3[Execute Block]
        S3 --> S4[Continue]
        S2 -->|False| S4
    end

    subgraph if_else["2. if-else"]
        IE1[Start] --> IE2{Condition?}
        IE2 -->|True| IE3[If Block]
        IE2 -->|False| IE4[Else Block]
        IE3 --> IE5[Continue]
        IE4 --> IE5
    end

    subgraph elif["3. else-if Ladder"]
        EL1[Start] --> EL2{Cond 1?}
        EL2 -->|True| EL3[Block 1]
        EL2 -->|False| EL4{Cond 2?}
        EL4 -->|True| EL5[Block 2]
        EL4 -->|False| EL6[Else Block]
        EL3 --> EL7[Continue]
        EL5 --> EL7
        EL6 --> EL7
    end

    style S1 fill:#06b6d4,stroke:#0891b2,color:#fff
    style S2 fill:#f59e0b,stroke:#d97706,color:#fff
    style S3 fill:#10b981,stroke:#059669,color:#fff
    style S4 fill:#06b6d4,stroke:#0891b2,color:#fff
    style IE1 fill:#06b6d4,stroke:#0891b2,color:#fff
    style IE2 fill:#f59e0b,stroke:#d97706,color:#fff
    style IE3 fill:#10b981,stroke:#059669,color:#fff
    style IE4 fill:#ef4444,stroke:#dc2626,color:#fff
    style IE5 fill:#06b6d4,stroke:#0891b2,color:#fff
    style EL1 fill:#06b6d4,stroke:#0891b2,color:#fff
    style EL2 fill:#f59e0b,stroke:#d97706,color:#fff
    style EL3 fill:#10b981,stroke:#059669,color:#fff
    style EL4 fill:#f59e0b,stroke:#d97706,color:#fff
    style EL5 fill:#10b981,stroke:#059669,color:#fff
    style EL6 fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style EL7 fill:#06b6d4,stroke:#0891b2,color:#fff`,
        },
      ],
    },

    // ── Q23 ─────────────────────────────────────────────────────────────
    {
      id: "co2-q23",
      title:
        "Display results of students using nested if-else",
      source: "May 2024",
      marks: 6,
      blocks: [
        {
          type: "text",
          content: `## Problem Statement

Write a C program that accepts marks of a student and displays the result using nested if-else:

| Marks Range | Result |
|---|---|
| >= 75 | **Distinction** |
| >= 60 and < 75 | **First Class** |
| >= 45 and < 60 | **Second Class** |
| >= 35 and < 45 | **Pass** |
| < 35 | **Fail** |

The program should also validate that marks are between 0 and 100.`,
        },
        {
          type: "code",
          language: "c",
          title: "Student Result using Nested if-else",
          content: `#include <stdio.h>

int main() {
    float marks;

    printf("Enter student's marks (0-100): ");
    scanf("%f", &marks);

    if (marks >= 0 && marks <= 100) {
        // Valid marks range
        if (marks >= 75) {
            printf("Result: Distinction\\n");
        } else {
            if (marks >= 60) {
                printf("Result: First Class\\n");
            } else {
                if (marks >= 45) {
                    printf("Result: Second Class\\n");
                } else {
                    if (marks >= 35) {
                        printf("Result: Pass\\n");
                    } else {
                        printf("Result: Fail\\n");
                    }
                }
            }
        }
    } else {
        printf("Invalid marks! Please enter between 0 and 100.\\n");
    }

    return 0;
}

/*
Example 1: Input: 82   -> Output: Result: Distinction
Example 2: Input: 67   -> Output: Result: First Class
Example 3: Input: 50   -> Output: Result: Second Class
Example 4: Input: 40   -> Output: Result: Pass
Example 5: Input: 20   -> Output: Result: Fail
*/`,
        },
      ],
    },

    // ── Q24 ─────────────────────────────────────────────────────────────
    {
      id: "co2-q24",
      title: "Check if entered number is prime or not",
      source: "Jun 2025",
      marks: 6,
      blocks: [
        {
          type: "text",
          content: `## Prime Number

A **prime number** is a natural number greater than 1 that has **no positive divisors** other than 1 and itself.

**Examples:**
- 2, 3, 5, 7, 11, 13 are prime numbers.
- 4, 6, 8, 9, 10 are NOT prime (they are composite).

### Algorithm
1. If \`n <= 1\`, it is not prime.
2. Loop from \`i = 2\` to \`i <= n/2\` (or \`sqrt(n)\` for optimization).
3. If \`n % i == 0\` for any \`i\`, then \`n\` is **not prime**.
4. If no divisor is found, \`n\` is **prime**.`,
        },
        {
          type: "code",
          language: "c",
          title: "Prime Number Check",
          content: `#include <stdio.h>

int main() {
    int n, i, isPrime = 1;

    printf("Enter a positive integer: ");
    scanf("%d", &n);

    if (n <= 1) {
        isPrime = 0;
    } else {
        for (i = 2; i <= n / 2; i++) {
            if (n % i == 0) {
                isPrime = 0;  // divisor found, not prime
                break;
            }
        }
    }

    if (isPrime) {
        printf("%d is a Prime number.\\n", n);
    } else {
        printf("%d is NOT a Prime number.\\n", n);
    }

    return 0;
}

/*
Example 1: Input: 7   -> Output: 7 is a Prime number.
Example 2: Input: 12  -> Output: 12 is NOT a Prime number.
Example 3: Input: 2   -> Output: 2 is a Prime number.
Example 4: Input: 1   -> Output: 1 is NOT a Prime number.
*/`,
        },
      ],
    },

    // ── Q25 ─────────────────────────────────────────────────────────────
    {
      id: "co2-q25",
      title: "Find sum of digits using do-while loop",
      source: "Aug 2025",
      marks: 4,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Sum of Digits using do-while Loop",
          content: `#include <stdio.h>

int main() {
    int num, sum = 0, remainder, originalNum;

    printf("Enter a number: ");
    scanf("%d", &num);

    originalNum = num;

    // Handle negative numbers
    if (num < 0)
        num = -num;

    do {
        remainder = num % 10;    // extract last digit
        sum = sum + remainder;   // add digit to sum
        num = num / 10;          // remove last digit
    } while (num != 0);

    printf("Sum of digits of %d = %d\\n", originalNum, sum);

    return 0;
}

/*
Example 1:
  Input:  1234
  Digits: 1 + 2 + 3 + 4
  Output: Sum of digits of 1234 = 10

Example 2:
  Input:  9876
  Digits: 9 + 8 + 7 + 6
  Output: Sum of digits of 9876 = 30
*/`,
        },
      ],
    },
  ],
}
