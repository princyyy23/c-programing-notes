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
      notes: `**else-if ladder = testing multiple conditions TOP to BOTTOM — first match wins, rest are skipped**

\`\`\`c
if (marks >= 75)      printf("Distinction");
else if (marks >= 60) printf("First Class");
else if (marks >= 50) printf("Second Class");
else                  printf("Fail");
\`\`\`

**Order matters critically:** Put the most restrictive (highest) condition first. If you check \`>= 60\` before \`>= 75\`, a student with 90 stops at "First Class" (wrong!).

**Traffic-light analogy:** Check Red first, then Amber, then Green — never test all three simultaneously.

**Common mistake:** Using \`=\` (assignment) instead of \`==\` (comparison): \`if(a = 5)\` always evaluates to true! Always use \`==\` to compare integers.

**Exam tip:** Include at least 3 levels + a final else for a complete answer.`,
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
      notes: `**4 types — mnemonic SIEN: Simple, If-else, Else-if-ladder, Nested**

| Type | Paths | Use when |
|------|-------|---------|
| Simple \`if\` | 1 (true only) | Action only if condition met |
| \`if-else\` | 2 (true + false) | Binary choice (pass/fail) |
| \`else-if\` ladder | Many (chained) | Multiple mutually exclusive ranges |
| Nested \`if\` | Hierarchical | Compound conditions (A AND B) |

**Code example for each:**
\`\`\`c
if(x>0) printf("Positive");                    // simple if
if(x>0) printf("Pos"); else printf("Non-Pos"); // if-else
if(x>75) printf("Dist"); else if(x>60)...      // else-if ladder
if(x>0) { if(x%2==0) printf("Even+"); }       // nested if
\`\`\`

**Exam tip:** Write syntax AND a different example for each type — that guarantees full marks. Use SIEN as your writing order.`,
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
      notes: `**Mnemonic: BCG = Break Cuts loop, Continue Goes next iteration, Goto jumps to label**

| Statement | Effect | Control goes to |
|-----------|--------|-----------------|
| \`break\` | Exits loop/switch entirely | Statement AFTER the loop |
| \`continue\` | Skips rest of current iteration | Loop's increment (for) / condition (while) |
| \`goto label\` | Jumps to labelled line in same function | The label |

**Analogy:**
- \`break\` = 🚪 Emergency exit — leave the loop entirely
- \`continue\` = ⏩ Skip button — skip this song, stay in the playlist

**Nested loop trap:** Both \`break\` and \`continue\` only affect the **innermost** loop they are inside.

**\`goto\` — avoid in practice:** Considered bad style; makes code hard to trace. Mention this in exam!`,
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
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
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
    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m2-q4",
      title: "Explain various types of loops.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `**Mnemonic: FWD = for, While, Do-while**

| Loop | Entry/Exit | Best for | Can run 0 times? |
|------|-----------|---------|-----------------|
| \`for\` | Entry-controlled | Known iteration count | Yes |
| \`while\` | Entry-controlled | Unknown count (sentinel) | Yes |
| \`do-while\` | **Exit-controlled** | Must run at least once (menu) | **No** |

**All three are equally powerful** — any loop can be rewritten as another one.

**Conversion example:** \`for(i=0; i<n; i++) {...}\` is EXACTLY equal to:
\`\`\`c
i = 0;
while(i < n) { ...; i++; }
\`\`\`

**Exam keywords to include:**
- "entry-controlled" for \`for\` and \`while\` (check condition before body)
- "exit-controlled" for \`do-while\` (check condition after body)`,
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
      notes: `**Golden rule: \`while\` checks BEFORE the body. \`do-while\` checks AFTER the body.**

| Feature | while | do-while |
|---------|-------|---------|
| Condition check | BEFORE body | AFTER body |
| Type | Entry-controlled | Exit-controlled |
| Minimum executions | **0** | **1** (always!) |
| Semicolon | No \`;\` after condition | Mandatory \`;\` after \`while(cond);\` |

**Real-world analogy:**
- \`while\` = Check if shop is open BEFORE going — might not go at all
- \`do-while\` = Go to the shop THEN check — you went at least once

**Best use case for \`do-while\`:** Menu-driven programs
\`\`\`c
do {
    printf("1. Play 2. Pause 3. Quit: ");
    scanf("%d", &choice);
} while (choice != 3);
\`\`\`

**Syntax trap:** \`do { ... } while(condition);\` — the semicolon at the end is mandatory and easy to forget!`,
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
      notes: `**AEIOU — remember both lowercase AND uppercase! (10 vowel cases total)**

**Fall-through superpower:** Multiple cases sharing no \`break\` between them route to one action:
\`\`\`c
case 'a': case 'e': case 'i': case 'o': case 'u':
case 'A': case 'E': case 'I': case 'O': case 'U':
    printf("Vowel"); break;
default:
    printf("Not a vowel");
\`\`\`

**Input trick:** \`scanf(" %c", &ch)\` — the space before \`%c\` skips any leftover newline from previous input. Without the space, entering a number then a character can cause the read to be skipped!

**Why switch beats if-else here:** 10 exact value checks — switch with fall-through is far cleaner than \`if(ch=='a' || ch=='A' || ...)\` chains.

**Full marks checklist:** All 10 vowel cases + \`break\` after vowel block + \`default\` case.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Vowel Check using switch",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
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
    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m2-q7",
      title: "Write a program to accept any number between 1 to 7 and display day of the week using switch case.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `**Classic switch example — 7 fixed integer options, one action each**

**Full marks checklist:**
- All 7 cases written (1=Sunday through 7=Saturday)
- Every case ends with \`break\` (prevents fall-through!)
- \`default\` handles invalid input (e.g. 0 or 8)

**Without \`break\`:** case 1 falls through to case 2, printing "SundayMonday" — classic bug! Always include \`break\`.

**Elegant array alternative (bonus mark):**
\`\`\`c
char *days[] = {"Sun","Mon","Tue","Wed","Thu","Fri","Sat"};
printf("%s", days[day-1]);  // day-1 converts 1-indexed to 0-indexed
\`\`\`

**Exam tip:** Mention what happens WITHOUT \`break\` — showing you understand fall-through behaviour earns extra marks.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Day of Week using switch",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
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
    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m2-q8",
      title: "WAP to print the following pattern.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `**Pattern mantra: Outer loop = rows, Inner loop = columns**

**Key insight per pattern type:**
| Pattern | Outer loop | Inner loop prints |
|---------|-----------|------------------|
| Number triangle | i = 1 to n | \`i\` (current row number) |
| Sequential digits | i = 1 to n | j = 1 to i (j itself) |
| Star triangle | i = 1 to n | \`*\` repeated i times |
| Decreasing stars | i = n down to 1 | \`*\` repeated i times |

**Universal template (works for ALL patterns):**
\`\`\`c
for(i = 1; i <= n; i++) {       // rows
    for(j = 1; j <= i; j++) {   // columns
        printf("...");
    }
    printf("\n");                // MUST move to next row!
}
\`\`\`

**Most common mistake:** Forgetting \`printf("\\n")\` after inner loop — all output lands on one line!

**Exam approach:** Trace row i=1 and row i=n manually before coding — catches off-by-one errors every time.`,
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
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
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

    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m2-q9",
      title: "WAP to generate Fibonacci series.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `**Fibonacci: each term = sum of the two before it**
**Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...**

**Three-variable rolling method — mnemonic PSM = Print, Sum, Move:**
\`\`\`c
a = 0; b = 1;
for(i = 1; i <= n; i++) {
    printf("%d ", a);  // PRINT current term
    c = a + b;         // SUM to get next
    a = b; b = c;      // MOVE forward
}
\`\`\`

**Update order is critical:** Compute \`c = a+b\` FIRST, THEN assign \`a=b, b=c\`. Swapping order gives wrong values!

**Starting values:** Always initialise \`a=0, b=1\` (not 1,1 — the series starts at 0).

**First 5 terms trace:** a goes: 0 → 1 → 1 → 2 → 3 → prints: 0 1 1 2 3 ✓`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Fibonacci Series",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int n, a = 0, b = 1, c, i;
    printf("Enter number of terms: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        printf("%d ", a);
        c = a + b;
        a = b;
        b = c;
    }

    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m2-q10",
      title: "WAP to print prime numbers between 1 to 100.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `**Prime = divisible ONLY by 1 and itself. Efficient test: check divisors only up to √n**

\`\`\`c
for(i = 2; i <= 100; i++) {
    isPrime = 1;
    for(j = 2; j*j <= i; j++) {   // √n bound: j*j <= i
        if(i % j == 0) { isPrime = 0; break; }
    }
    if(isPrime) printf("%d ", i);
}
\`\`\`

**Why \`j*j <= i\` is enough?** Every factor pair (a, b) satisfies a×b = n. One must be ≤ √n — checking up to √n finds all factors.

**Edge cases to know:**
- 0 and 1 → NOT prime
- 2 → Prime (the ONLY even prime!)
- All even numbers > 2 → NOT prime

**Optimisation (bonus):** After checking 2 separately, increment \`j += 2\` to skip evens — halves the inner-loop work.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Prime Numbers 1 to 100",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
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

    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m2-q11",
      title: "Difference between switch case and if else ladder.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `**Switch vs if-else shortcut: Equality Checks vs Any Expression**

| Feature | switch | if-else ladder |
|---------|--------|----------------|
| Tests | Equality only (\`==\`) | Any expression/range/logical |
| Data types | \`int\`, \`char\`, \`enum\` | ANY type including \`float\` |
| Range checks | ✗ Cannot | ✓ Can test any range |
| Fall-through | ✓ (without \`break\`) | ✗ None |
| Readability | Better for menus (5+ choices) | Better for complex ranges |

**When to use switch:** Day names, month names, menu choices, letter grades.
**When to use if-else:** Score ranges (\`>= 60\`), float comparisons, compound \`&&\`/\`||\` conditions.

**switch cannot do:** compare strings, test \`x > 5\` ranges, use \`float\`/\`double\` in the expression.

**Exam tip:** Include one concrete scenario for each — "switch for weekday (fixed integer)" vs "if-else for grading (ranges)".`,
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
      notes: `**Mnemonic: Break = STOP the loop, Continue = SKIP this step**

| Statement | Effect | Where control goes |
|-----------|--------|--------------------|
| \`break\` | Exits the loop/switch entirely | Statement AFTER the loop |
| \`continue\` | Skips rest of current iteration | Loop's increment (for) / condition (while) |

**Analogy:**
- \`break\` = 🚪 Exit door — leave the building (loop) entirely
- \`continue\` = ⏩ Skip track — skip this song, stay in the playlist

**Traced example:**
\`\`\`c
for(i=1; i<=5; i++) {
    if(i==3) continue;  // skips printing 3
    if(i==5) break;     // stops at 5; 5 is never printed
    printf("%d ", i);   // output: 1 2 4
}
\`\`\`

**Nested loop trap:** Both statements only affect the **innermost** loop they are inside — not outer loops.`,
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
      notes: `**Palindrome = reads same forwards and backwards: 121, 1331, 12321**

**Algorithm: Save original → Reverse digits → Compare**

**Mnemonic: EBR = Extract (%10), Build (rev*10+digit), Remove (/10)**
\`\`\`c
original = n;
while(n != 0) {
    digit = n % 10;           // extract last digit
    rev   = rev * 10 + digit; // build reversed number
    n    /= 10;               // remove last digit
}
if(original == rev) printf("Palindrome");
\`\`\`

**Trace for n = 121:**
| n | digit | rev |
|---|-------|-----|
| 121 | 1 | 1 |
| 12 | 2 | 12 |
| 1 | 1 | 121 |
| original(121) == rev(121) → ✓ Palindrome! |

**Critical:** Must save original BEFORE the loop — the loop destroys \`n\` by dividing it down to 0.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Palindrome Number",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
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

    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m2-q14",
      title: "WAP to print even numbers between 1 to n.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `**Fast method: start at 2, increment by 2 — skip all odd numbers entirely**
\`\`\`c
for(i = 2; i <= n; i += 2)
    printf("%d ", i);
\`\`\`

**Why \`i += 2\` beats checking \`i % 2 == 0\`:** The step-2 approach visits only half the numbers — twice as efficient.

**Count of even numbers from 1 to n:** \`n / 2\` (integer division). For n=10: 5 evens. For n=7: 3 evens.

**Alternative (shows different approach):**
\`\`\`c
for(i = 1; i <= n; i++)
    if(i % 2 == 0) printf("%d ", i);
\`\`\`

**Boundary check:** For n=1, the condition \`2 <= 1\` is false immediately — nothing prints. Correct behaviour!`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Even numbers between 1 and n",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int n, i;
    printf("Enter n: ");
    scanf("%d", &n);

    for (i = 2; i <= n; i += 2)
        printf("%d ", i);

    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m2-q15",
      title: "WAP to find sum of digits using do-while loop.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `**Digit extraction trio — mnemonic EAS = Extract, Add, Shrink**
1. \`digit = n % 10\` → extract last digit
2. \`sum += digit\` → add to running total
3. \`n /= 10\` → remove last digit (shrink n)

\`\`\`c
sum = 0;
do {
    digit = n % 10;
    sum  += digit;
    n    /= 10;
} while(n != 0);
\`\`\`

**Why \`do-while\`?** Body must run at least once — even for n=0, one extraction is needed (sum = 0 correctly).

**Trace for n = 1234:**
| n | digit | sum |
|---|-------|-----|
| 1234 | 4 | 4 |
| 123 | 3 | 7 |
| 12 | 2 | 9 |
| 1 | 1 | 10 |

**Initialise \`sum = 0\`!** Forgotten initialisation is the #1 bug here — uninitialized sum holds garbage.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Sum of digits using do-while",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int n, sum = 0, rem;
    printf("Enter number: ");
    scanf("%d", &n);

    do {
        rem = n % 10;
        sum += rem;
        n /= 10;
    } while (n != 0);

    printf("Sum of digits = %d\n", sum);
    getch();
}`,
        },
      ],
    },
    {
      id: "qb-m2-q16",
      title: "Write output of the given code with pre/post increment operators.",
      source: "Question Bank - Module 2",
      marks: 5,
      notes: `**Golden rule: \`++i\` increments FIRST then uses. \`i++\` uses current value THEN increments.**

| Expression | Order | Example (i=5) |
|-----------|-------|---------------|
| \`++i\` | Increment → Use | \`printf("%d", ++i)\` prints **6**, i is now 6 |
| \`i++\` | Use → Increment | \`printf("%d", i++)\` prints **5**, i becomes 6 |

**Trace the given code with a variable table:**
\`\`\`c
int x=0, y=20, res;
res = y++ + x++;     // uses old values: 20+0=20, THEN y=21, x=1
res += ++y + ++x;    // pre-increments first: y=22, x=2, then 22+2=24 added
// res = 20 + 24 = 44,  x=2,  y=22
\`\`\`
**Output: x=2 y=22 result=44**

**Exam advice:** For "what is the output?" questions — go line by line, maintain a variable table at each step. Never guess!

**Caution:** Multiple side-effects on the same variable in one expression have undefined behaviour in C — avoid in real code.`,
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
      notes: `**Same vowel-switch logic as q6 — but output includes the character itself (\`%c\` format)**

**Grouped cases with fall-through (10 cases, 1 action):**
\`\`\`c
case 'a': case 'e': case 'i': case 'o': case 'u':
case 'A': case 'E': case 'I': case 'O': case 'U':
    printf("%c is a vowel\n", ch); break;
default:
    printf("%c is not a vowel\n", ch);
\`\`\`

**Switch advantage here:** 10 exact char comparisons — switch is cleaner than a long \`if(ch=='a' || ch=='A' || ...)\` chain.

**scanf tip:** \`scanf(" %c", &ch)\` — the leading space absorbs leftover newline from previous \`scanf("%d")\`. Without it, the newline gets read as the character!

**Exam checklist:** All 10 vowel cases + \`break\` after vowel block + \`default\` case.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Vowel check (implemented form)",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
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

    getch();
}`,
        },
      ],
    },
  ],
}
