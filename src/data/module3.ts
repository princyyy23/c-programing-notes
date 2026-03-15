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
      notes: `Core mnemonic: DDC = Declare, Define, Call.
    - Declaration tells compiler signature, definition gives body, call executes function.
    - Code-reading tip: execution enters function on call and returns value/control back.
    - Exam tip: draw tiny flow main -> function -> main(return).`,
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
      notes: `One-line memory: Declaration says WHAT, Definition says HOW.
    - Declaration ends with semicolon, definition contains function block.
    - Same function can have many declarations but one definition.
    - Exam tip: write both forms side-by-side with same function name.`,
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
      notes: `Factorial rule: n! = product from 1 to n; 0! = 1.
    - Loop trace tip: track fact update each iteration (fact *= i).
    - Use long long to reduce overflow risk for moderate n.
    - Exam tip: handle negative input with message before calling factorial logic.`,
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
      notes: `Function role here is reusable sequence generator.
    - Variable transition: a,b hold current pair; c stores next term.
    - Mnemonic: PSM = Print, Sum, Move (a=b, b=c).
    - Exam tip: mention why function returning void is fine for direct printing.`,
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
      notes: `Best simple abstraction example: square(n) returns n*n.
    - Shows benefit of function reuse and cleaner main code.
    - Data-flow tip: input in main, processing in function, output in main.
    - Exam tip: add one dry run (n=5 -> 25).`,
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
      notes: `Boolean-style design: function returns 1 (true) or 0 (false).
    - Test condition n%2==0 inside helper function keeps main readable.
    - Mnemonic: MOD2 rule decides parity instantly.
    - Exam tip: explain that return type int is common for true/false in C.`,
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
      notes: `Prime shortcut: search divisor from 2 to sqrt(n) only.
    - If any divisor exists -> composite; else prime.
    - Must handle n<=1 as non-prime.
    - Exam tip: explain why sqrt bound reduces iterations significantly.`,
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
      notes: `Pattern: initialize max=a, then compare with b and c.
    - Function returns single computed value, making main concise.
    - Alternative you can mention: nested ternary for same logic.
    - Exam tip: include equal-values case statement in explanation.`,
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
      notes: `Reverse logic uses digit extraction loop.
    - Steps: lastDigit=n%10, rev=rev*10+lastDigit, n=n/10.
    - Mnemonic: EBS = Extract, Build, Shrink.
    - Exam tip: store original number if you also need palindrome check variant.`,
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
      notes: `Two valid methods: loop summation or formula n(n+1)/2.
    - Formula is O(1), loop is O(n).
    - In function-based question, formula gives short and elegant answer.
    - Exam tip: for very large n, mention possible integer overflow briefly.`,
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
      notes: `Category checks become easy with ctype.h: isalpha, isdigit.
    - Logic chain: alphabet -> digit -> else special (excluding spaces/newline if needed).
    - Input tip: fgets is safer than gets/scanf for full-line strings.
    - Exam tip: mention casting to unsigned char in ctype calls as good practice.`,
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
