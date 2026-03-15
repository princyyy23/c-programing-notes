import type { CourseOutcome } from "@/types"

export const module3: CourseOutcome = {
  id: "qb-m3",
  title: "Question Bank - Module 3: Functions",
  shortTitle: "Module 3",
  description: "Function basics, declaration/definition/calling, and standard problem-solving programs using functions.",
  icon: "Layers",
  color: "emerald",
  questions: [
    {
      id: "qb-m3-q1",
      title: "What is function? Explain function declaration, calling and definition with example.",
      source: "Question Bank - Module 3",
      marks: 5,
      notes: `**Three-step function life cycle — mnemonic DDC = Declare, Define, Call**

| Step | What it is | Example |
|------|-----------|---------|
| **Declaration** (prototype) | Tells compiler the signature | \`int add(int, int);\` |
| **Definition** | Provides the actual implementation | \`int add(int a, int b){ return a+b; }\` |
| **Call** (invocation) | Executes the function | \`result = add(4, 6);\` |

\`\`\`c
int add(int, int);           // 1. DECLARE
int main() {
    int s = add(4, 6);       // 2. CALL
    printf("Sum = %d\n", s);
    return 0;
}
int add(int a, int b) {      // 3. DEFINE
    return a + b;
}
\`\`\`

**Execution flow:** \`main()\` → calls \`add()\` → \`add()\` computes → returns value → back to \`main()\`

**Exam tip:** Draw the flow arrow in exam: \`main() ──calls──▶ add() ──returns──▶ main()\``,
      blocks: [
        {
          type: "text",
          content:
            "A function is a self-contained block of code that performs a specific task and can be reused.\n\n- **Declaration (prototype):** tells compiler function name, return type, and parameters.\n- **Definition:** actual body of function.\n- **Function call:** invokes the function from `main()` or another function.",
        },
        {
          type: "code",
          language: "c",
          title: "Example",
          content: `#include <stdio.h>

int add(int, int);      // declaration

int main() {
    int s = add(4, 6);  // calling
    printf("Sum = %d\n", s);
    return 0;
}

int add(int a, int b) { // definition
    return a + b;
}`,
        },
      ],
    },
    {
      id: "qb-m3-q2",
      title: "Differentiate between function definition and function declaration.",
      source: "Question Bank - Module 3",
      marks: 5,
      notes: `**One-liner memory: Declaration = WHAT (announces), Definition = HOW (implements)**

| Feature | Declaration (Prototype) | Definition |
|---------|------------------------|------------|
| Has body? | No | Yes |
| Ends with? | Semicolon \`;\` | Closing brace \`}\` |
| Parameter names? | Optional | Required |
| Frequency | Can appear multiple times | Only once |
| Memory allocated? | No | Yes (for code) |

**Side-by-side example:**
\`\`\`c
int add(int, int);          // DECLARATION — no body, ends with ;
int add(int a, int b) {     // DEFINITION — has body, no trailing ;
    return a + b;
}
\`\`\`

**Why declaration before main?** If a function is defined AFTER it is called, the compiler doesn't know its signature — prototype solves this.

**Parameter name rule:** In declaration, \`int add(int, int)\` is valid (types only). In definition, names are required.`,
      blocks: [
        {
          type: "text",
          content:
            "| Function Declaration | Function Definition |\n|---|---|\n| Announces function signature to compiler | Provides actual executable body |\n| Ends with semicolon | No trailing semicolon after header |\n| Can appear multiple times | Usually written once |\n| Example: `int sum(int,int);` | Example: `int sum(int a,int b){ return a+b; }` |\n\nBoth are important for modular and readable programs.",
        },
      ],
    },
    {
      id: "qb-m3-q3",
      title: "Define function. Write a program to find factorial of a number using function.",
      source: "Question Bank - Module 3",
      marks: 5,
      notes: `**Factorial: n! = 1 × 2 × 3 × ... × n. Special case: 0! = 1**

\`\`\`c
long long factorial(int n) {
    long long fact = 1;  // init to 1, NOT 0!
    int i;
    for(i = 1; i <= n; i++)
        fact *= i;
    return fact;
}
\`\`\`

**Why initialise \`fact = 1\` not 0?** Multiplying by 0 makes everything 0 forever!

**Favourite values to memorise:**
| n | n! |
|---|----|
| 0 | 1 (by definition) |
| 5 | 120 |
| 6 | 720 |
| 10 | 3,628,800 |

**Overflow warning:** 13! = 6,227,020,800 exceeds \`INT_MAX\` (~2.1B). Use \`long long\` for n > 12.

**Handle negative input:** Add \`if(n < 0) { printf("Error"); return -1; }\` before the loop.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Factorial using function",
          content: `#include <stdio.h>

long long factorial(int n) {
    long long fact = 1;
    int i;
    for (i = 1; i <= n; i++)
        fact *= i;
    return fact;
}

int main() {
    int n;
    printf("Enter n: ");
    scanf("%d", &n);

    if (n < 0)
        printf("Factorial not defined for negative numbers\n");
    else
        printf("%d! = %lld\n", n, factorial(n));

    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m3-q4",
      title: "Write a program to generate Fibonacci series of 10 numbers using function.",
      source: "Question Bank - Module 3",
      marks: 5,
      notes: `**Function role: generates and prints the entire sequence — void return is fine for direct printing**

**Three-variable rolling method — mnemonic PSM = Print, Sum, Move:**
\`\`\`c
void printFibonacci(int n) {
    int a = 0, b = 1, c, i;
    for(i = 1; i <= n; i++) {
        printf("%d ", a);  // PRINT current
        c = a + b;         // SUM to get next
        a = b; b = c;      // MOVE forward
    }
}
\`\`\`

**For 10 terms:** 0 1 1 2 3 5 8 13 21 34

**Update order is critical:** Compute \`c = a+b\` FIRST, then assign \`a=b\`, then \`b=c\`. Swapping gives wrong sequence!

**Alternative design:** If function should RETURN the n-th term (not print all), make it \`int fibonacci(int n)\` and return \`a\` after the loop.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Fibonacci 10 terms using function",
          content: `#include <stdio.h>

void printFibonacci(int n) {
    int a = 0, b = 1, c, i;
    for (i = 1; i <= n; i++) {
        printf("%d ", a);
        c = a + b;
        a = b;
        b = c;
    }
}

int main() {
    printFibonacci(10);
    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m3-q5",
      title: "Write a program to calculate square of a number using function.",
      source: "Question Bank - Module 3",
      marks: 5,
      notes: `**Simplest function example: input → processing → output separation (modular design)**

\`\`\`c
int square(int n) {
    return n * n;   // single computation, single return
}
\`\`\`

**Data flow principle:** Input in \`main()\` → processing in function → output back in \`main()\`.

**Dry run trace:** \`square(5)\` → \`5 * 5\` = **25** ✓ | \`square(7)\` → **49** ✓

**Don't use \`pow(n,2)\` for squaring integers** — \`n*n\` is faster, no floating-point conversion, no \`<math.h>\` needed.

**Extend the concept:** Same design for cube: \`return n*n*n\` | absolute value: \`return (n>0)?n:-n\` | reciprocal: \`return 1.0/n\``,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Square using function",
          content: `#include <stdio.h>

int square(int n) {
    return n * n;
}

int main() {
    int x;
    printf("Enter number: ");
    scanf("%d", &x);
    printf("Square = %d\n", square(x));
    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m3-q6",
      title: "Write a program to check entered number is even or odd using function.",
      source: "Question Bank - Module 3",
      marks: 5,
      notes: `**Boolean-style return: 1 = true (even), 0 = false (odd)**

\`\`\`c
int isEven(int n) {
    return (n % 2 == 0);  // expression evaluates to 1 or 0
}
\`\`\`

**Why return \`int\` for true/false?** C has no \`bool\` type (in C89/C90). Returning \`int\` with 1=true, 0=false is the C convention. (\`<stdbool.h>\` was added in C99.)

**Clean usage in main:**
\`\`\`c
if (isEven(n))
    printf("Even");
else
    printf("Odd");
\`\`\`

**Naming convention:** \`isXxx()\` signals a boolean-style function — \`isAlpha\`, \`isDigit\`, \`isPrime\`. Exam markers appreciate naming that shows intent.

**Bitwise trick (bonus):** \`return !(n & 1)\` — same result, shows knowledge of bitwise operators.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Even/Odd using function",
          content: `#include <stdio.h>

int isEven(int n) {
    return (n % 2 == 0);
}

int main() {
    int n;
    printf("Enter number: ");
    scanf("%d", &n);

    if (isEven(n))
        printf("Even\n");
    else
        printf("Odd\n");

    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m3-q7",
      title: "Write a program to check entered number is prime or not using function.",
      source: "Question Bank - Module 3",
      marks: 5,
      notes: `**Prime = no divisors from 2 to √n exist**

\`\`\`c
int isPrime(int n) {
    int i;
    if(n <= 1) return 0;          // 0 and 1 are NOT prime
    for(i = 2; i*i <= n; i++) {   // check up to √n
        if(n % i == 0) return 0;  // divisor found → not prime
    }
    return 1;                     // no divisors → prime
}
\`\`\`

**Why \`i*i <= n\` (not \`i <= n\`)?** Every divisor pair (a, b) satisfies a×b = n. One must be ≤ √n — checking up to √n finds all of them and saves ~half the iterations.

**Must handle edge cases:**
| Input | isPrime | Reason |
|-------|---------|--------|
| 0 or 1 | 0 (false) | Not prime by definition |
| 2 | 1 (true) | Only even prime! |
| 4 | 0 (false) | 4 = 2×2 |
| 7 | 1 (true) | No divisors from 2 to 2 |

**Exam bonus:** Explain the √n optimisation with one sentence — "One factor of every composite number must be ≤ √n."`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Prime check using function",
          content: `#include <stdio.h>

int isPrime(int n) {
    int i;
    if (n <= 1) return 0;
    for (i = 2; i * i <= n; i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

int main() {
    int n;
    printf("Enter number: ");
    scanf("%d", &n);

    if (isPrime(n))
        printf("Prime\n");
    else
        printf("Not prime\n");

    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m3-q8",
      title: "Write a program to find largest number among three numbers using function.",
      source: "Question Bank - Module 3",
      marks: 5,
      notes: `**Temp-max pattern: assume a is largest, then update if b or c beats it**

\`\`\`c
int largestOfThree(int a, int b, int c) {
    int max = a;           // assume a is largest
    if(b > max) max = b;   // update if b wins
    if(c > max) max = c;   // update if c wins
    return max;
}
\`\`\`

**Why this beats nested ternary:** Readable, clearly handles all 6 orderings of a, b, c.

**Compact ternary alternative (for exam brevity):**
\`\`\`c
return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
\`\`\`

**Equal values:** If a=b=c=5, all comparisons yield the same value — function correctly returns 5 with no issues.

**Function design note:** Return type \`int\` matches parameter types. For float inputs, change all \`int\` to \`float\`.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Largest of three using function",
          content: `#include <stdio.h>

int largestOfThree(int a, int b, int c) {
    int max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

int main() {
    int a, b, c;
    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);

    printf("Largest = %d\n", largestOfThree(a, b, c));
    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m3-q9",
      title: "Write a program using function to reverse the given number.",
      source: "Question Bank - Module 3",
      marks: 5,
      notes: `**Digit reversal — mnemonic EBS = Extract, Build, Shrink**
1. \`digit = n % 10\` → extract last digit
2. \`rev = rev*10 + digit\` → build reversed number
3. \`n /= 10\` → shrink original

\`\`\`c
int reverseNumber(int n) {
    int rev = 0;
    while(n != 0) {
        rev = rev * 10 + n % 10;  // build
        n /= 10;                   // shrink
    }
    return rev;
}
\`\`\`

**Trace for n = 1234:**
| n | n%10 | rev |
|---|------|-----|
| 1234 | 4 | 4 |
| 123 | 3 | 43 |
| 12 | 2 | 432 |
| 1 | 1 | 4321 |

**Palindrome shortcut:** If \`reverseNumber(n) == n\`, the number is a palindrome! Reuse this function.

**Trailing zero loss:** Input 1200 → reversed = 21 (not 0021) because leading zeros are dropped. Mention this edge case if asked.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Reverse number using function",
          content: `#include <stdio.h>

int reverseNumber(int n) {
    int rev = 0;
    while (n != 0) {
        rev = rev * 10 + n % 10;
        n /= 10;
    }
    return rev;
}

int main() {
    int n;
    printf("Enter number: ");
    scanf("%d", &n);

    printf("Reversed number = %d\n", reverseNumber(n));
    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m3-q10",
      title: "Write a program using function to find the sum of first n natural numbers.",
      source: "Question Bank - Module 3",
      marks: 5,
      notes: `**Two valid methods — show BOTH for maximum marks**

**Formula O(1) — instant, elegant:**
\`\`\`c
int sumNatural(int n) {
    return n * (n + 1) / 2;  // Gauss formula
}
\`\`\`

**Loop O(n) — shows step-by-step understanding:**
\`\`\`c
int sumNatural(int n) {
    int sum = 0, i;
    for(i = 1; i <= n; i++) sum += i;
    return sum;
}
\`\`\`

**Famous verification:** For n=100, sum = **5050** (Carl Friedrich Gauss computed this as a child!).

| n | Sum |
|---|-----|
| 5 | 15 |
| 10 | 55 |
| 100 | 5050 |

**Overflow note:** For very large n, \`n*(n+1)\` may exceed \`int\` range. Use \`long long\` in that case.

**Exam tip:** Mention formula is O(1) complexity vs loop O(n) — examiners reward efficiency analysis.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Sum of first n natural numbers",
          content: `#include <stdio.h>

int sumNatural(int n) {
    return n * (n + 1) / 2;
}

int main() {
    int n;
    printf("Enter n: ");
    scanf("%d", &n);

    printf("Sum = %d\n", sumNatural(n));
    return 0;
}`,
        },
      ],
    },
    {
      id: "qb-m3-q11",
      title: "Write a program to count the number of digits, alphabets, and special characters in an input string.",
      source: "Question Bank - Module 3",
      marks: 5,
      notes: `**Three-category classifier using \`<ctype.h>\` functions — cleaner than manual ASCII checks**

| Test | Function | Matches |
|------|----------|---------|
| Letter | \`isalpha(c)\` | a-z, A-Z |
| Digit | \`isdigit(c)\` | 0-9 |
| Special | else (not alpha, digit, space, newline) | !@#$ etc. |

**Key ctype.h functions to know:**
\`\`\`c
isalpha(ch)   // Is it a letter?
isdigit(ch)   // Is it a digit (0-9)?
isspace(ch)   // Is it whitespace (space, tab, newline)?
isupper(ch)   // Is it uppercase?
islower(ch)   // Is it lowercase?
\`\`\`

**Input with fgets (safer than gets/scanf for strings):**
\`\`\`c
fgets(str, sizeof(str), stdin);  // reads entire line safely
\`\`\`

**Cast trick:** \`isalpha((unsigned char)str[i])\` — cast to \`unsigned char\` prevents issues with chars having negative values on some systems.

**Exam answer:** Clearly define what counts as "special" (not alpha, not digit, not whitespace) — being explicit shows mastery.`,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Count digits, alphabets, and special characters",
          content: `#include <stdio.h>
#include <ctype.h>

int main() {
    char str[200];
    int i = 0, alphabets = 0, digits = 0, special = 0;

    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);

    while (str[i] != '\0') {
        if (isalpha((unsigned char)str[i])) alphabets++;
        else if (isdigit((unsigned char)str[i])) digits++;
        else if (str[i] != ' ' && str[i] != '\n' && str[i] != '\t') special++;
        i++;
    }

    printf("Alphabets = %d\n", alphabets);
    printf("Digits = %d\n", digits);
    printf("Special Characters = %d\n", special);

    return 0;
}`,
        },
      ],
    },
  ],
}
