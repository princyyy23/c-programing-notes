import type { CourseOutcome } from "@/types"

export const module2: CourseOutcome = {
  id: "qb-m2",
  title: "Question Bank - Module 2: Control Structures, Branching and Looping",
  shortTitle: "Module 2",
  description: "If/switch constructs, loops, jump statements, pattern programs, and number-based logic programs.",
  icon: "Repeat",
  color: "cyan",
  questions: [
    {
      id: "qb-m2-q1",
      title: "Explain if and else-if ladder statement with syntax.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `Best use-case: many mutually exclusive ranges (grades, salary slabs, menu choice).
    - Flow rule: first true condition executes, remaining blocks are skipped.
    - Mnemonic: TOP-DOWN CHECK (order matters in else-if ladder).
    - Exam tip: place most specific/highest range first to avoid wrong matching.`,
      blocks: [
        {
          type: "text",
          content:
            "`if` checks one condition. `else-if ladder` checks multiple conditions in order. First true block executes and rest are skipped.\n\nSyntax:\n```c\nif (condition1) {\n    // statements\n}\nelse if (condition2) {\n    // statements\n}\nelse if (condition3) {\n    // statements\n}\nelse {\n    // default block\n}\n```\n\nUseful for grading, menu systems, and category-based decisions.",
        },
      ],
    },
    {
      id: "qb-m2-q2",
      title: "Explain different if constructs.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `Memory set: S-I-E-N = Simple if, if-else, else-if ladder, nested if.
    - Differentiate by number of paths: 1-path, 2-path, multi-path, multi-level.
    - Code tip: nested if is powerful but harder to read; use braces clearly.
    - Exam tip: give one-line example for each construct to secure marks.`,
      blocks: [
        {
          type: "text",
          content:
            "Main `if` constructs in C:\n1. **Simple if** - executes block only when condition true.\n2. **if-else** - selects one of two blocks.\n3. **else-if ladder** - checks multiple conditions in sequence.\n4. **nested if** - one `if` inside another for multi-level decision.\n\nExample:\n```c\nif (x > 0) printf(\"Positive\");\nelse printf(\"Non-positive\");\n```",
        },
      ],
    },
    {
      id: "qb-m2-q3",
      title: "Explain break, continue and goto statement with example.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `Mnemonic: BCG = Break-Cut, Continue-Go next, Goto-Given label jump.
    - break terminates nearest loop/switch immediately.
    - continue skips current iteration body remainder, then next loop cycle starts.
    - goto is rarely preferred; use only when structured alternatives are difficult.`,
      blocks: [
        {
          type: "text",
          content:
            "- `break`: immediately terminates nearest loop or switch.\n- `continue`: skips remaining statements of current loop iteration and moves to next iteration.\n- `goto`: transfers control to a labeled statement in same function (generally avoided unless needed).",
        },
        {
          type: "code",
          language: "c",
          title: "Examples",
          content: `#include <stdio.h>

int main() {
    int i;

    for (i = 1; i <= 5; i++) {
        if (i == 4) break;
        printf("%d ", i); // 1 2 3
    }

    printf("\n");

    for (i = 1; i <= 5; i++) {
        if (i == 3) continue;
        printf("%d ", i); // 1 2 4 5
    }

    printf("\n");
    goto end;
    printf("This will not print\n");

end:
    printf("Goto executed\n");
    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m2-q4",
      title: "Explain various types of loops.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `Memory trick: FWD = for, while, do-while.
    - for: fixed/known iteration count; while: unknown count based on condition.
    - do-while: executes at least one time because check is at end.
    - Exam tip: mention entry-controlled vs exit-controlled explicitly.`,
      blocks: [
        {
          type: "text",
          content:
            "C has three primary loops:\n\n1. **for loop** - used when number of iterations is known.\n2. **while loop** - entry-controlled loop; runs while condition is true.\n3. **do-while loop** - exit-controlled loop; executes body at least once.\n\nSyntax examples:\n```c\nfor(i=0; i<n; i++) { ... }\nwhile(condition) { ... }\ndo { ... } while(condition);\n```",
        },
      ],
    },
    {
      id: "qb-m2-q5",
      title: "Difference between while and do-while with example.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `Golden line: while checks before, do-while checks after.
    - So while may run zero times, do-while runs minimum once.
    - Code-reading tip: semicolon after while(condition); in do-while is mandatory.
    - Exam tip: write both syntax forms in parallel for clear comparison.`,
      blocks: [
        {
          type: "text",
          content:
            "| Feature | while | do-while |\n|---|---|---|\n| Condition check | Before loop body | After loop body |\n| Type | Entry controlled | Exit controlled |\n| Minimum executions | 0 | 1 |\n\nExample:\n```c\nint x=0;\nwhile(x>0){ printf(\"while\"); } // does not run\n\ndo {\n    printf(\"do-while runs once\");\n} while(x>0);\n```",
        },
      ],
    },
    {
      id: "qb-m2-q6",
      title: "Write a program to accept any character as input and print whether it is vowel or not using switch case.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `Vowel mnemonic: AEIOU (check both lower and upper case).
    - switch is ideal for exact character matching.
    - Input tip: use scanf(" %c", &ch) with leading space to skip leftover newline.
    - Exam tip: include default case (not vowel) for complete solution.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Vowel Check using switch",
          content: `#include <stdio.h>

int main() {
    char ch;
    printf("Enter a character: ");
    scanf(" %c", &ch);

    switch (ch) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
        case 'A': case 'E': case 'I': case 'O': case 'U':
            printf("Vowel\n");
            break;
        default:
            printf("Not a vowel\n");
    }
    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m2-q7",
      title: "Write a program to accept any number between 1 to 7 and display day of the week using switch case.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `Perfect switch problem: fixed numeric choices 1 to 7.
    - Each case must end with break to avoid fall-through.
    - default handles invalid day numbers safely.
    - Exam tip: write mapping Sunday=1 ... Saturday=7 clearly.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Day of Week using switch",
          content: `#include <stdio.h>

int main() {
    int day;
    printf("Enter day number (1-7): ");
    scanf("%d", &day);

    switch (day) {
        case 1: printf("Sunday\n"); break;
        case 2: printf("Monday\n"); break;
        case 3: printf("Tuesday\n"); break;
        case 4: printf("Wednesday\n"); break;
        case 5: printf("Thursday\n"); break;
        case 6: printf("Friday\n"); break;
        case 7: printf("Saturday\n"); break;
        default: printf("Invalid input\n");
    }
    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m2-q8",
      title: "WAP to print the following pattern.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `Pattern mantra: Outer loop = rows, Inner loop = columns/items.
    - Number pattern uses current row value; star pattern uses constant symbol.
    - For mirrored/centered patterns, control spaces in a separate inner loop.
    - Exam tip: trace row i=1 and i=n once before coding full pattern.`,
      blocks: [
        {
          type: "text",
          content:
            "From the image, pattern set includes number triangle, decreasing star pattern, increasing star pattern, and alphabet pyramid. One sample implementation is shown below.",
        },
        {
          type: "code",
          language: "c",
          title: "Sample pattern programs (core logic)",
          content: `#include <stdio.h>

int main() {
    int i, j;

    // 1) 1 / 2 2 / 3 3 3 / ...
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= i; j++) printf("%d ", i);
        printf("\n");
    }

    printf("\n");

    // 2) Decreasing stars
    for (i = 5; i >= 1; i--) {
        for (j = 1; j <= i; j++) printf("* ");
        printf("\n");
    }

    printf("\n");

    // 3) Increasing stars
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= i; j++) printf("* ");
        printf("\n");
    }

    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m2-q9",
      title: "WAP to generate Fibonacci series.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `Key state variables: a (current), b (next), c (sum).
    - Update order matters: c=a+b, then a=b, then b=c.
    - Mnemonic: PSM = Print, Sum, Move.
    - Exam tip: mention starting terms 0 and 1 explicitly.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Fibonacci Series",
          content: `#include <stdio.h>

int main() {
    int n, a = 0, b = 1, c, i;
    printf("Enter number of terms: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        printf("%d ", a);
        c = a + b;
        a = b;
        b = c;
    }

    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m2-q10",
      title: "WAP to print prime numbers between 1 to 100.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `Prime test shortcut: check divisors only up to sqrt(n).
    - If any divisor found -> not prime; else prime.
    - Handle n<=1 separately (not prime).
    - Exam tip: outer loop for candidate number, inner loop for factor testing.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Prime Numbers 1 to 100",
          content: `#include <stdio.h>

int main() {
    int i, j, isPrime;

    for (i = 2; i <= 100; i++) {
        isPrime = 1;
        for (j = 2; j * j <= i; j++) {
            if (i % j == 0) {
                isPrime = 0;
                break;
            }
        }
        if (isPrime) printf("%d ", i);
    }

    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m2-q11",
      title: "Difference between switch case and if else ladder.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `Switch vs if-else shortcut: Equality vs Expression.
    - switch: cleaner for menu-like exact values.
    - if-else: needed for ranges, compound conditions, relational checks.
    - Exam tip: include one practical scenario for each (menu vs grading).`,
      blocks: [
        {
          type: "text",
          content:
            "| Feature | switch-case | if-else ladder |\n|---|---|---|\n| Condition type | Equality checks only | Any expression/range/logical conditions |\n| Data types | int/char/enum (discrete) | Any relational/logical expression |\n| Default branch | `default` | `else` |\n| Readability | Better for menu-like choices | Better for complex decision trees |\n\nUse `switch` for fixed options; use `if-else` for flexible logic.",
        },
      ],
    },
    {
      id: "qb-m2-q12",
      title: "Difference between break and continue.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `Mnemonic: break = stop loop, continue = skip step.
    - break exits loop entirely; continue only skips current iteration remainder.
    - In nested loops, break affects only nearest loop unless additional logic added.
    - Exam tip: give tiny for-loop example with both statements.`,
      blocks: [
        {
          type: "text",
          content:
            "| Statement | Effect |\n|---|---|\n| `break` | Exits the loop/switch immediately |\n| `continue` | Skips remaining statements of current loop iteration and continues with next iteration |\n\nExample:\n```c\nfor(i=1;i<=5;i++){\n    if(i==3) continue; // skips 3\n    if(i==5) break;    // stops loop\n    printf(\"%d \", i);\n}\n```",
        },
      ],
    },
    {
      id: "qb-m2-q13",
      title: "WAP to check entered number is palindrome or not.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `Palindrome logic: original == reversed value.
    - Reverse build formula: rev = rev*10 + lastDigit.
    - lastDigit = n%10, shrink n by n/=10.
    - Exam tip: store original in separate variable before modifying n.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Palindrome Number",
          content: `#include <stdio.h>

int main() {
    int n, original, rev = 0, rem;
    printf("Enter number: ");
    scanf("%d", &n);

    original = n;
    while (n != 0) {
        rem = n % 10;
        rev = rev * 10 + rem;
        n /= 10;
    }

    if (original == rev)
        printf("Palindrome\n");
    else
        printf("Not palindrome\n");

    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m2-q14",
      title: "WAP to print even numbers between 1 to n.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `Fast method: loop i=2 to n with step i+=2.
    - Alternate method: check if(i%2==0) inside full loop (slower but simple).
    - Boundary tip: if n<2, no even numbers to print.
    - Exam tip: mention time benefit of step-2 approach.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Even numbers between 1 and n",
          content: `#include <stdio.h>

int main() {
    int n, i;
    printf("Enter n: ");
    scanf("%d", &n);

    for (i = 2; i <= n; i += 2)
        printf("%d ", i);

    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m2-q15",
      title: "WAP to find sum of digits using do-while loop.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `Digit extraction trio: rem=n%10, sum+=rem, n/=10.
    - do-while ensures execution at least once (works for n=0 case too).
    - Mnemonic: EAS = Extract, Add, Shrink.
    - Exam tip: use absolute value for negative input if required by question.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Sum of digits using do-while",
          content: `#include <stdio.h>

int main() {
    int n, sum = 0, rem;
    printf("Enter number: ");
    scanf("%d", &n);

    do {
        rem = n % 10;
        sum += rem;
        n /= 10;
    } while (n != 0);

    printf("Sum of digits = %d\n", sum);
    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m2-q16",
      title: "Write output of the given code with pre/post increment operators.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `Important concept: post-increment uses old value then increments; pre-increment increments first.
    - For safe coding, avoid multiple side effects on same variable in one expression.
    - Best explanation style: evaluate line-by-line and track x,y,res table.
    - Exam tip: write both caution and computed output to show depth.`,
      blocks: [
        {
          type: "text",
          content:
            "Given code from image:\n```c\nint x = 0, y = 20, res;\nres = y++ + x++;\nres += ++y + ++x;\nprintf(\"x=%d y=%d result=%d\", x, y, res);\n```\n\nStep-wise (common interpretation):\n- After `res = y++ + x++` => `res = 20 + 0 = 20`, then `y=21`, `x=1`\n- `res += ++y + ++x` => `++y=22`, `++x=2`, add `24`\n- Final `res = 44`, `x = 2`, `y = 22`\n\nExpected output:\n`x=2 y=22 result=44`\n\nNote: In strict C discussions, avoid writing complex side-effects in one expression; split statements for clarity.",
        },
      ],
    },
    {
      id: "qb-m2-q17",
      title: "Implement a C program to read a character and print whether it is vowel or not using switch case.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `Same vowel-switch logic but print character-specific output.
    - Keep grouped cases for vowels to avoid repeated code.
    - Input handling with leading-space scanf format avoids newline issue.
    - Exam tip: mention that switch improves readability over long if-else chain here.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Vowel check (implemented form)",
          content: `#include <stdio.h>

int main() {
    char ch;

    printf("Enter an alphabet: ");
    scanf(" %c", &ch);

    switch (ch) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
        case 'A': case 'E': case 'I': case 'O': case 'U':
            printf("%c is a vowel\n", ch);
            break;
        default:
            printf("%c is not a vowel\n", ch);
    }

    return 0;
}`,
        },
      ],
    },
  ],
}
