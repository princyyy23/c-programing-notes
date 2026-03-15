import type { CourseOutcome } from "@/types"

export const co3: CourseOutcome = {
  id: "co3",
  title: "CO3: Functions, Recursion, and Storage Classes",
  shortTitle: "CO3",
  description:
    "User-defined functions, call by value/reference, recursion, and storage classes in C",
  icon: "Layers",
  color: "emerald",
  questions: [
    {
      id: "co3-q1",
      title: "What are actual parameters and formal parameters?",
      source: "Jul 2022",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Actual Parameters vs Formal Parameters

In C, when we work with functions, we deal with two kinds of parameters:

### Actual Parameters (Arguments)
- These are the **values or variables passed** to a function at the time of the function call.
- They appear in the **calling function**.
- They represent the real data that is sent to the function for processing.

### Formal Parameters
- These are the **variables declared in the function header** (definition/prototype) that receive the values from actual parameters.
- They appear in the **called function**.
- They act as **placeholders** that get assigned the values of the actual parameters when the function is invoked.

### Key Differences

| Feature | Actual Parameters | Formal Parameters |
|---|---|---|
| Location | In function call | In function definition |
| Also called | Arguments | Parameters |
| Nature | Real values/variables | Placeholder variables |
| Memory | Already allocated | Allocated when function is called |
| Lifetime | Depends on calling scope | Exists only during function execution |`,
        },
        {
          type: "code",
          language: "c",
          title: "Example: Actual vs Formal Parameters",
          content: `#include <stdio.h>

// 'a' and 'b' are FORMAL parameters
int add(int a, int b) {
    return a + b;
}

int main() {
    int x = 10, y = 20;

    // 'x' and 'y' are ACTUAL parameters (arguments)
    int result = add(x, y);

    printf("Sum = %d\\n", result);  // Output: Sum = 30
    return 0;
}`,
        },
      ],
    },
    {
      id: "co3-q2",
      title:
        "Write a program using function to find sum of digits of a given number",
      source: "Jul 2022",
      marks: 6,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Sum of Digits Using a Function",
          content: `#include <stdio.h>

// Function to calculate the sum of digits of a number
int sumOfDigits(int num) {
    int sum = 0;

    // Handle negative numbers
    if (num < 0)
        num = -num;

    while (num > 0) {
        sum += num % 10;   // Add the last digit to sum
        num = num / 10;    // Remove the last digit
    }

    return sum;
}

int main() {
    int number, result;

    printf("Enter a number: ");
    scanf("%d", &number);

    result = sumOfDigits(number);

    printf("Sum of digits of %d = %d\\n", number, result);

    return 0;
}

/*
Sample Output:
--------------
Enter a number: 1234
Sum of digits of 1234 = 10

Explanation for 1234:
  Step 1: 1234 % 10 = 4, sum = 4,  num = 123
  Step 2: 123  % 10 = 3, sum = 7,  num = 12
  Step 3: 12   % 10 = 2, sum = 9,  num = 1
  Step 4: 1    % 10 = 1, sum = 10, num = 0
  Loop ends. Sum = 10
*/`,
        },
      ],
    },
    {
      id: "co3-q3",
      title: "Generate Fibonacci Series using recursion in C",
      source: "Dec 2022",
      marks: 6,
      blocks: [
        {
          type: "text",
          content: `## Fibonacci Series Using Recursion

The **Fibonacci sequence** is a series where each number is the sum of the two preceding numbers:
\`0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...\`

**Mathematical definition:**
- \`fib(0) = 0\` (base case)
- \`fib(1) = 1\` (base case)
- \`fib(n) = fib(n-1) + fib(n-2)\` for \`n >= 2\`

### How Recursion Works Here
Each call to \`fibonacci(n)\` makes two recursive calls until it reaches the base cases (\`n == 0\` or \`n == 1\`). The results are then combined as the recursion unwinds.`,
        },
        {
          type: "code",
          language: "c",
          title: "Fibonacci Series Using Recursion",
          content: `#include <stdio.h>

// Recursive function to compute the nth Fibonacci number
int fibonacci(int n) {
    // Base cases
    if (n == 0)
        return 0;
    if (n == 1)
        return 1;

    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int n, i;

    printf("Enter the number of terms: ");
    scanf("%d", &n);

    printf("Fibonacci Series: ");
    for (i = 0; i < n; i++) {
        printf("%d ", fibonacci(i));
    }
    printf("\\n");

    return 0;
}

/*
Sample Output:
--------------
Enter the number of terms: 10
Fibonacci Series: 0 1 1 2 3 5 8 13 21 34
*/`,
        },
        {
          type: "diagram",
          title: "Recursion Call Tree for fibonacci(5)",
          content: `graph TD
    A["fib(5)"] --> B["fib(4)"]
    A --> C["fib(3)"]
    B --> D["fib(3)"]
    B --> E["fib(2)"]
    C --> F["fib(2)"]
    C --> G["fib(1) = 1"]
    D --> H["fib(2)"]
    D --> I["fib(1) = 1"]
    E --> J["fib(1) = 1"]
    E --> K["fib(0) = 0"]
    F --> L["fib(1) = 1"]
    F --> M["fib(0) = 0"]
    H --> N["fib(1) = 1"]
    H --> O["fib(0) = 0"]

    style A fill:#10b981,stroke:#059669,color:#fff
    style B fill:#6366f1,stroke:#4f46e5,color:#fff
    style C fill:#6366f1,stroke:#4f46e5,color:#fff
    style D fill:#f59e0b,stroke:#d97706,color:#fff
    style E fill:#f59e0b,stroke:#d97706,color:#fff
    style F fill:#f59e0b,stroke:#d97706,color:#fff
    style G fill:#ef4444,stroke:#dc2626,color:#fff
    style H fill:#ec4899,stroke:#db2777,color:#fff
    style I fill:#ef4444,stroke:#dc2626,color:#fff
    style J fill:#ef4444,stroke:#dc2626,color:#fff
    style K fill:#ef4444,stroke:#dc2626,color:#fff
    style L fill:#ef4444,stroke:#dc2626,color:#fff
    style M fill:#ef4444,stroke:#dc2626,color:#fff
    style N fill:#ef4444,stroke:#dc2626,color:#fff
    style O fill:#ef4444,stroke:#dc2626,color:#fff`,
        },
      ],
    },
    {
      id: "co3-q4",
      title: "Difference between function declaration and definition",
      source: "Dec 2022",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Function Declaration vs Function Definition

### Function Declaration (Prototype)
- Tells the compiler about the function's **name, return type, and parameters**.
- Does **not** contain the function body.
- Ends with a **semicolon**.
- Usually placed **before main()** or in a header file.
- Purpose: Allows the compiler to perform **type checking** on function calls.

### Function Definition
- Provides the **actual body** (implementation) of the function.
- Contains the **executable code** enclosed in curly braces \`{}\`.
- Does **not** end with a semicolon after the closing brace.
- Can appear **anywhere** in the program (before or after main).

### Key Differences

| Feature | Declaration (Prototype) | Definition |
|---|---|---|
| Body | No body | Has body with code |
| Semicolon | Ends with \`;\` | No \`;\` after \`}\` |
| Purpose | Informs compiler | Implements logic |
| Memory | No memory allocated for code | Memory allocated for code |
| Placement | Before first call | Anywhere in program |
| Frequency | Can be declared multiple times | Defined only once |
| Parameter names | Optional | Required |`,
        },
        {
          type: "code",
          language: "c",
          title: "Example: Declaration vs Definition",
          content: `#include <stdio.h>

// FUNCTION DECLARATION (Prototype)
// - No body, ends with semicolon
// - Parameter names are optional
int add(int, int);

int main() {
    int result = add(5, 3);  // Function CALL
    printf("Sum = %d\\n", result);
    return 0;
}

// FUNCTION DEFINITION
// - Has a body with executable code
// - Parameter names are required
int add(int a, int b) {
    return a + b;
}

/*
Output:
Sum = 8
*/`,
        },
      ],
    },
    {
      id: "co3-q5",
      title: "Explain storage class with an example",
      source: "May/Jun 2023",
      marks: 6,
      blocks: [
        {
          type: "text",
          content: `## Storage Classes in C

A **storage class** defines the **scope**, **lifetime**, **visibility**, and **default initial value** of a variable. In C, every variable has a storage class that determines how it is stored in memory.

C provides **four** storage classes:

### 1. auto (Automatic)
- **Default** storage class for local variables.
- **Scope:** Local to the block in which it is declared.
- **Lifetime:** Created when the block is entered, destroyed when the block exits.
- **Default value:** Garbage (undefined).

### 2. register
- Suggests the compiler to store the variable in a **CPU register** for faster access.
- **Scope:** Local to the block.
- **Lifetime:** Same as auto.
- **Default value:** Garbage.
- **Note:** Address operator \`&\` cannot be used with register variables.

### 3. static
- Retains its value **between function calls**.
- **Scope:** Local to the block (if declared inside a function).
- **Lifetime:** Entire program execution.
- **Default value:** 0 (zero).

### 4. extern (External)
- Used to declare a **global variable** defined in another file or elsewhere.
- **Scope:** Global (accessible across files).
- **Lifetime:** Entire program execution.
- **Default value:** 0 (zero).`,
        },
        {
          type: "code",
          language: "c",
          title: "Example: Storage Classes in Action",
          content: `#include <stdio.h>

int globalVar = 100;  // extern by default (global variable)

void demonstrateStatic() {
    static int count = 0;  // static: retains value between calls
    count++;
    printf("Static count = %d\\n", count);
}

void demonstrateAuto() {
    auto int x = 10;  // auto: destroyed after function exits
    printf("Auto x = %d\\n", x);
}

void demonstrateRegister() {
    register int i;  // register: stored in CPU register (hint)
    for (i = 1; i <= 3; i++) {
        printf("Register i = %d\\n", i);
    }
}

int main() {
    printf("Global variable = %d\\n\\n", globalVar);

    printf("--- Auto ---\\n");
    demonstrateAuto();

    printf("\\n--- Static ---\\n");
    demonstrateStatic();  // count = 1
    demonstrateStatic();  // count = 2 (value retained!)
    demonstrateStatic();  // count = 3 (value retained!)

    printf("\\n--- Register ---\\n");
    demonstrateRegister();

    return 0;
}

/*
Output:
Global variable = 100

--- Auto ---
Auto x = 10

--- Static ---
Static count = 1
Static count = 2
Static count = 3

--- Register ---
Register i = 1
Register i = 2
Register i = 3
*/`,
        },
      ],
    },
    {
      id: "co3-q6",
      title: "Find factorial using recursion",
      source: "May/Jun 2023",
      marks: 6,
      blocks: [
        {
          type: "text",
          content: `## Factorial Using Recursion

The **factorial** of a non-negative integer \`n\` is the product of all positive integers less than or equal to \`n\`.

**Mathematical definition:**
- \`0! = 1\` (base case)
- \`n! = n * (n-1)!\` for \`n >= 1\` (recursive case)

**Example:** \`5! = 5 * 4 * 3 * 2 * 1 = 120\`

### How It Works
1. The function calls itself with a decremented value until it reaches the base case (\`n == 0\`).
2. The base case returns 1.
3. As the recursion unwinds, each call multiplies its \`n\` by the result from the deeper call.`,
        },
        {
          type: "code",
          language: "c",
          title: "Factorial Using Recursion",
          content: `#include <stdio.h>

// Recursive function to calculate factorial
long long factorial(int n) {
    // Base case
    if (n == 0 || n == 1)
        return 1;

    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

int main() {
    int num;

    printf("Enter a positive integer: ");
    scanf("%d", &num);

    if (num < 0) {
        printf("Factorial is not defined for negative numbers.\\n");
    } else {
        printf("Factorial of %d = %lld\\n", num, factorial(num));
    }

    return 0;
}

/*
Sample Output:
--------------
Enter a positive integer: 5
Factorial of 5 = 120

Trace for factorial(5):
  factorial(5) = 5 * factorial(4)
  factorial(4) = 4 * factorial(3)
  factorial(3) = 3 * factorial(2)
  factorial(2) = 2 * factorial(1)
  factorial(1) = 1  (base case)

  Unwinding:
  factorial(2) = 2 * 1 = 2
  factorial(3) = 3 * 2 = 6
  factorial(4) = 4 * 6 = 24
  factorial(5) = 5 * 24 = 120
*/`,
        },
        {
          type: "diagram",
          title: "Recursion Call Tree for factorial(5)",
          content: `graph TD
    A["factorial(5)<br/>returns 120"] --> B["factorial(4)<br/>returns 24"]
    B --> C["factorial(3)<br/>returns 6"]
    C --> D["factorial(2)<br/>returns 2"]
    D --> E["factorial(1)<br/>returns 1 -- BASE CASE"]

    F["Unwinding"] -.-> G["1 * 2 = 2"]
    G -.-> H["2 * 3 = 6"]
    H -.-> I["6 * 4 = 24"]
    I -.-> J["24 * 5 = 120"]

    style A fill:#10b981,stroke:#059669,color:#fff
    style B fill:#6366f1,stroke:#4f46e5,color:#fff
    style C fill:#f59e0b,stroke:#d97706,color:#fff
    style D fill:#ec4899,stroke:#db2777,color:#fff
    style E fill:#ef4444,stroke:#dc2626,color:#fff
    style F fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style G fill:#14b8a6,stroke:#0d9488,color:#fff
    style H fill:#f97316,stroke:#ea580c,color:#fff
    style I fill:#3b82f6,stroke:#2563eb,color:#fff
    style J fill:#10b981,stroke:#059669,color:#fff`,
        },
      ],
    },
    {
      id: "co3-q7",
      title: "Write a function for nCr = n!/((n-r)!*r!)",
      source: "Aug 2023",
      marks: 6,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "nCr Combination Using Factorial Function",
          content: `#include <stdio.h>

// Function to calculate factorial
long long factorial(int n) {
    long long fact = 1;
    int i;
    for (i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Function to calculate nCr = n! / ((n-r)! * r!)
long long nCr(int n, int r) {
    if (r > n) {
        return 0;  // Invalid: r cannot be greater than n
    }
    if (r == 0 || r == n) {
        return 1;  // nC0 = nCn = 1
    }
    return factorial(n) / (factorial(n - r) * factorial(r));
}

int main() {
    int n, r;

    printf("Enter the value of n: ");
    scanf("%d", &n);
    printf("Enter the value of r: ");
    scanf("%d", &r);

    if (n < 0 || r < 0) {
        printf("n and r must be non-negative.\\n");
    } else if (r > n) {
        printf("r cannot be greater than n.\\n");
    } else {
        printf("%dC%d = %lld\\n", n, r, nCr(n, r));
    }

    return 0;
}

/*
Sample Output:
--------------
Enter the value of n: 5
Enter the value of r: 2
5C2 = 10

Explanation:
  5C2 = 5! / ((5-2)! * 2!)
      = 120 / (6 * 2)
      = 120 / 12
      = 10
*/`,
        },
      ],
    },
    {
      id: "co3-q8",
      title: "Find y = x^n using recursive function",
      source: "Aug 2023",
      marks: 6,
      blocks: [
        {
          type: "text",
          content: `## Power Function (x^n) Using Recursion

To compute \`y = x^n\` recursively, we use:

**Mathematical definition:**
- \`x^0 = 1\` (base case -- any number raised to 0 is 1)
- \`x^n = x * x^(n-1)\` for \`n > 0\` (recursive case)
- \`x^n = 1 / x^(-n)\` for \`n < 0\` (handling negative exponents)

### Recursive Breakdown for 2^4:
\`\`\`
power(2, 4) = 2 * power(2, 3)
power(2, 3) = 2 * power(2, 2)
power(2, 2) = 2 * power(2, 1)
power(2, 1) = 2 * power(2, 0)
power(2, 0) = 1  (base case)
\`\`\`
Unwinding: \`1 -> 2 -> 4 -> 8 -> 16\``,
        },
        {
          type: "code",
          language: "c",
          title: "Power Function Using Recursion",
          content: `#include <stdio.h>

// Recursive function to calculate x^n
double power(double x, int n) {
    // Base case: any number raised to 0 is 1
    if (n == 0)
        return 1;

    // Handle negative exponent
    if (n < 0)
        return 1.0 / power(x, -n);

    // Recursive case: x^n = x * x^(n-1)
    return x * power(x, n - 1);
}

int main() {
    double x, result;
    int n;

    printf("Enter base (x): ");
    scanf("%lf", &x);
    printf("Enter exponent (n): ");
    scanf("%d", &n);

    result = power(x, n);

    printf("%.2lf ^ %d = %.2lf\\n", x, n, result);

    return 0;
}

/*
Sample Output 1:
--------------
Enter base (x): 2
Enter exponent (n): 4
2.00 ^ 4 = 16.00

Sample Output 2:
--------------
Enter base (x): 3
Enter exponent (n): -2
3.00 ^ -2 = 0.11
*/`,
        },
      ],
    },
    {
      id: "co3-q9",
      title: "What are different storage classes? Give names",
      source: "May 2024",
      marks: 2,
      blocks: [
        {
          type: "text",
          content: `## Storage Classes in C

C provides **four** storage classes that determine the scope, lifetime, visibility, and default value of variables:

| Storage Class | Keyword | Scope | Lifetime | Default Value |
|---|---|---|---|---|
| **Automatic** | \`auto\` | Local (within block) | Until block exits | Garbage |
| **Register** | \`register\` | Local (within block) | Until block exits | Garbage |
| **Static** | \`static\` | Local (within block) | Entire program | 0 |
| **External** | \`extern\` | Global (across files) | Entire program | 0 |

### Quick Summary:
1. **auto** -- Default for local variables; created and destroyed automatically with the block.
2. **register** -- Hints the compiler to store in CPU register for faster access; cannot use \`&\` operator.
3. **static** -- Preserves variable value between function calls; initialized only once.
4. **extern** -- Declares a global variable defined elsewhere; enables sharing variables across files.`,
        },
      ],
    },
    {
      id: "co3-q10",
      title:
        "Explain call by reference and call by value with example",
      source: "May 2024",
      marks: 8,
      blocks: [
        {
          type: "text",
          content: `## Call by Value vs Call by Reference

### Call by Value
- A **copy** of the actual parameter's value is passed to the formal parameter.
- Changes made to the formal parameter inside the function **do not affect** the actual parameter.
- The actual and formal parameters occupy **different memory locations**.
- This is the **default** mechanism in C.

### Call by Reference
- The **address (pointer)** of the actual parameter is passed to the formal parameter.
- Changes made via the pointer inside the function **directly affect** the actual parameter.
- Both the pointer and the original variable refer to the **same memory location**.
- Achieved in C using **pointers** (\`*\` and \`&\`).

### Key Differences

| Feature | Call by Value | Call by Reference |
|---|---|---|
| Passes | Copy of value | Address of variable |
| Original variable | Not modified | Modified |
| Memory | Separate copies | Same memory via pointer |
| Syntax | \`func(a)\` | \`func(&a)\` |
| Parameter type | Normal variable | Pointer variable |
| Safety | Safer (no side effects) | Can cause side effects |`,
        },
        {
          type: "code",
          language: "c",
          title: "Call by Value Example",
          content: `#include <stdio.h>

// Call by Value: formal parameter is a copy
void swapByValue(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    printf("Inside function: a = %d, b = %d\\n", a, b);
}

int main() {
    int x = 10, y = 20;

    printf("Before swap: x = %d, y = %d\\n", x, y);
    swapByValue(x, y);  // Passes copies of x and y
    printf("After swap:  x = %d, y = %d\\n", x, y);
    // Values remain UNCHANGED!

    return 0;
}

/*
Output:
Before swap: x = 10, y = 20
Inside function: a = 20, b = 10
After swap:  x = 10, y = 20
(Original values are NOT swapped)
*/`,
        },
        {
          type: "code",
          language: "c",
          title: "Call by Reference Example",
          content: `#include <stdio.h>

// Call by Reference: formal parameter is a pointer
void swapByReference(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
    printf("Inside function: *a = %d, *b = %d\\n", *a, *b);
}

int main() {
    int x = 10, y = 20;

    printf("Before swap: x = %d, y = %d\\n", x, y);
    swapByReference(&x, &y);  // Passes addresses of x and y
    printf("After swap:  x = %d, y = %d\\n", x, y);
    // Values are CHANGED!

    return 0;
}

/*
Output:
Before swap: x = 10, y = 20
Inside function: *a = 20, *b = 10
After swap:  x = 20, y = 10
(Original values ARE swapped)
*/`,
        },
      ],
    },
    {
      id: "co3-q11",
      title: "Write a program to find factorial using recursion",
      source: "May 2024",
      marks: 4,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Factorial Using Recursion",
          content: `#include <stdio.h>

// Recursive function to find factorial
long long factorial(int n) {
    if (n == 0 || n == 1)
        return 1;           // Base case
    return n * factorial(n - 1);  // Recursive case
}

int main() {
    int num;

    printf("Enter a number: ");
    scanf("%d", &num);

    if (num < 0) {
        printf("Error: Factorial is not defined for negative numbers.\\n");
    } else {
        printf("Factorial of %d = %lld\\n", num, factorial(num));
    }

    return 0;
}

/*
Sample Output:
--------------
Enter a number: 6
Factorial of 6 = 720

Trace:
  factorial(6) = 6 * factorial(5) = 6 * 120 = 720
  factorial(5) = 5 * factorial(4) = 5 * 24  = 120
  factorial(4) = 4 * factorial(3) = 4 * 6   = 24
  factorial(3) = 3 * factorial(2) = 3 * 2   = 6
  factorial(2) = 2 * factorial(1) = 2 * 1   = 2
  factorial(1) = 1 (base case)
*/`,
        },
      ],
    },
    {
      id: "co3-q12",
      title: "Explain call by value with example",
      source: "Jun 2025",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Call by Value in C

**Call by value** is the default argument-passing mechanism in C where a **copy of the actual parameter's value** is passed to the function's formal parameter.

### Key Characteristics:
- The function receives a **duplicate copy** of the data.
- Any modifications made to the formal parameter inside the function **do not affect** the original variable in the calling function.
- The actual and formal parameters are stored in **separate memory locations**.
- This mechanism is **safe** because the original data cannot be accidentally modified.

### When to Use:
- When you want to **protect** the original data from modification.
- When the function only needs to **read** the value, not modify it.
- For simple data types like \`int\`, \`float\`, \`char\`, etc.`,
        },
        {
          type: "code",
          language: "c",
          title: "Call by Value Example",
          content: `#include <stdio.h>

// Function receives COPIES of the arguments
void modify(int num) {
    num = num + 100;  // Modifies only the local copy
    printf("Inside function: num = %d\\n", num);
}

int main() {
    int value = 50;

    printf("Before function call: value = %d\\n", value);
    modify(value);  // Pass by value: copy of 'value' is sent
    printf("After function call:  value = %d\\n", value);
    // 'value' remains unchanged!

    return 0;
}

/*
Output:
Before function call: value = 50
Inside function: num = 150
After function call:  value = 50

Explanation:
- 'value' (50) is copied to 'num' when modify() is called.
- Inside modify(), 'num' becomes 150.
- But 'value' in main() remains 50 because only the copy was changed.
*/`,
        },
      ],
    },
    {
      id: "co3-q13",
      title:
        "Function without arguments/return value and without arguments/with return value",
      source: "Jun 2025",
      marks: 6,
      blocks: [
        {
          type: "text",
          content: `## Types of Functions Based on Arguments and Return Values

Functions in C can be categorized based on whether they accept arguments and return values:

### 1. Without Arguments and Without Return Value
- Function **does not take** any parameters.
- Function **does not return** any value (return type is \`void\`).
- Syntax: \`void functionName(void)\` or \`void functionName()\`
- Useful for tasks like printing messages or performing actions that don't need input/output.

### 2. Without Arguments and With Return Value
- Function **does not take** any parameters.
- Function **returns a value** to the calling function.
- The function typically reads input internally or computes a fixed value.
- Syntax: \`int functionName(void)\` or \`float functionName()\``,
        },
        {
          type: "code",
          language: "c",
          title: "Type 1: Without Arguments, Without Return Value",
          content: `#include <stdio.h>

// No arguments, no return value
void greet(void) {
    printf("Hello! Welcome to C Programming.\\n");
    printf("This function takes no input and returns nothing.\\n");
}

void printLine(void) {
    printf("================================\\n");
}

int main() {
    printLine();
    greet();      // No arguments passed, no return value received
    printLine();

    return 0;
}

/*
Output:
================================
Hello! Welcome to C Programming.
This function takes no input and returns nothing.
================================
*/`,
        },
        {
          type: "code",
          language: "c",
          title: "Type 2: Without Arguments, With Return Value",
          content: `#include <stdio.h>

// No arguments, but returns a value
int getNumber(void) {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    return num;  // Returns the value entered by user
}

float getPI(void) {
    return 3.14159f;  // Returns a constant value
}

int main() {
    int number;
    float pi;

    number = getNumber();  // No arguments, but receives return value
    printf("You entered: %d\\n", number);

    pi = getPI();          // No arguments, receives PI value
    printf("Value of PI: %.5f\\n", pi);

    return 0;
}

/*
Sample Output:
Enter a number: 42
You entered: 42
Value of PI: 3.14159
*/`,
        },
      ],
    },
    {
      id: "co3-q14",
      title: "Swap values using call by Reference",
      source: "Jun 2025",
      marks: 6,
      blocks: [
        {
          type: "text",
          content: `## Swapping Values Using Call by Reference

In **call by reference**, we pass the **addresses** of variables to the function. The function uses **pointers** to access and modify the original variables directly.

### Why Call by Reference for Swapping?
- With **call by value**, the swap only happens on local copies, so the original values remain unchanged.
- With **call by reference**, we modify the actual memory locations, so the swap is **permanent**.

### Steps:
1. Pass addresses of two variables using \`&\` operator.
2. Receive them in pointer parameters (\`int *a, int *b\`).
3. Use the dereference operator \`*\` to access and swap values.`,
        },
        {
          type: "code",
          language: "c",
          title: "Swap Using Call by Reference",
          content: `#include <stdio.h>

// Function to swap two integers using pointers (call by reference)
void swap(int *a, int *b) {
    int temp;
    temp = *a;    // Store value at address 'a' in temp
    *a = *b;      // Copy value at address 'b' to address 'a'
    *b = temp;    // Copy temp to address 'b'
}

int main() {
    int x = 25, y = 50;

    printf("Before swapping:\\n");
    printf("x = %d, y = %d\\n\\n", x, y);

    // Pass addresses of x and y
    swap(&x, &y);

    printf("After swapping:\\n");
    printf("x = %d, y = %d\\n", x, y);

    return 0;
}

/*
Output:
Before swapping:
x = 25, y = 50

After swapping:
x = 50, y = 25

Memory Visualization:
  Before swap:
    x (addr: 1000) = 25     y (addr: 1004) = 50
    a points to 1000         b points to 1004

  During swap:
    temp = *a = 25
    *a = *b  =>  x becomes 50
    *b = temp => y becomes 25

  After swap:
    x (addr: 1000) = 50     y (addr: 1004) = 25
*/`,
        },
      ],
    },
    {
      id: "co3-q15",
      title: "Print factorial using recursion",
      source: "Aug 2025",
      marks: 4,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Print Factorial Using Recursion",
          content: `#include <stdio.h>

// Recursive function to compute factorial
long long factorial(int n) {
    if (n <= 1)
        return 1;           // Base case: 0! = 1! = 1
    return n * factorial(n - 1);  // n! = n * (n-1)!
}

int main() {
    int num;

    printf("Enter a positive integer: ");
    scanf("%d", &num);

    if (num < 0) {
        printf("Factorial is undefined for negative numbers.\\n");
    } else {
        printf("%d! = %lld\\n", num, factorial(num));
    }

    return 0;
}

/*
Sample Output 1:
Enter a positive integer: 7
7! = 5040

Sample Output 2:
Enter a positive integer: 0
0! = 1

Sample Output 3:
Enter a positive integer: 10
10! = 3628800
*/`,
        },
      ],
    },
    {
      id: "co3-q16",
      title: "Why prefer iteration over recursion?",
      source: "Aug 2025",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Why Prefer Iteration Over Recursion?

While recursion provides elegant and readable solutions, **iteration is often preferred** for the following reasons:

### 1. Memory Efficiency
- **Recursion** uses the **call stack** for each function call, consuming additional memory (stack frames).
- **Iteration** uses a fixed amount of memory regardless of the number of repetitions.
- Deep recursion can cause **stack overflow** if the recursion depth is too large.

### 2. Performance (Speed)
- Each recursive call has **overhead**: saving registers, pushing parameters, creating a new stack frame, and returning.
- Iterative loops have **minimal overhead** -- just a comparison and a jump instruction.
- Iteration is generally **faster** than recursion for the same problem.

### 3. No Risk of Stack Overflow
- Recursive functions can crash with a **stack overflow error** if the base case is not reached in time or if the depth is too large.
- Iterative solutions do not have this limitation.

### 4. Easier to Debug
- Iterative code follows a **linear flow**, making it simpler to trace and debug.
- Recursive code can be harder to debug because multiple frames exist simultaneously on the stack.

### 5. Tail Recursion Limitation
- C compilers may not always optimize **tail recursion** into iteration.
- Without this optimization, even tail-recursive functions suffer from stack overhead.

### When Recursion IS Preferred:
- Problems that are **naturally recursive** (e.g., tree traversals, Tower of Hanoi, divide-and-conquer algorithms).
- When code **readability and simplicity** are more important than performance.
- When the recursion depth is **guaranteed to be small**.

### Comparison Table

| Feature | Iteration | Recursion |
|---|---|---|
| Memory usage | Low (constant) | High (stack frames) |
| Speed | Faster | Slower (function call overhead) |
| Stack overflow risk | No | Yes |
| Code readability | Can be complex | Often simpler/elegant |
| Debugging | Easier | Harder |
| Best for | Repetitive tasks | Divide-and-conquer, trees |`,
        },
      ],
    },
    {
      id: "co3-q17",
      title: "Explain all storage classes with example",
      source: "Aug 2025",
      marks: 8,
      blocks: [
        {
          type: "text",
          content: `## All Four Storage Classes in C

### 1. auto (Automatic)
- **Keyword:** \`auto\`
- **Scope:** Local to the block where declared.
- **Lifetime:** Created on block entry, destroyed on block exit.
- **Default value:** Garbage (uninitialized).
- **Storage:** RAM (stack).
- This is the **default** storage class for local variables; the \`auto\` keyword is rarely used explicitly.

### 2. register
- **Keyword:** \`register\`
- **Scope:** Local to the block.
- **Lifetime:** Created on block entry, destroyed on block exit.
- **Default value:** Garbage (uninitialized).
- **Storage:** CPU register (compiler decides; may use RAM if registers are full).
- The **address operator (&)** cannot be used with register variables.
- Best used for **loop counters** and frequently accessed variables.

### 3. static
- **Keyword:** \`static\`
- **Scope:** Local to the block (for local static) or file-level (for global static).
- **Lifetime:** Entire duration of the program.
- **Default value:** 0 (zero-initialized).
- **Storage:** RAM (data segment).
- Retains its value **between function calls**.
- Initialized **only once** during the program's lifetime.

### 4. extern (External)
- **Keyword:** \`extern\`
- **Scope:** Global -- accessible across multiple files.
- **Lifetime:** Entire duration of the program.
- **Default value:** 0 (zero-initialized).
- **Storage:** RAM (data segment).
- Used to **declare** a variable that is **defined** in another file or elsewhere.

### Summary Table

| Feature | auto | register | static | extern |
|---|---|---|---|---|
| Scope | Local | Local | Local / File | Global |
| Lifetime | Block | Block | Program | Program |
| Default Value | Garbage | Garbage | 0 | 0 |
| Storage | Stack | CPU Register | Data Segment | Data Segment |
| Keyword Required | No (default) | Yes | Yes | Yes |`,
        },
        {
          type: "code",
          language: "c",
          title: "Example: auto Storage Class",
          content: `#include <stdio.h>

void autoExample() {
    auto int x = 10;  // 'auto' keyword is optional
    int y = 20;       // Also auto by default
    printf("auto: x = %d, y = %d\\n", x, y);
}
// x and y are destroyed when the function exits

int main() {
    autoExample();
    autoExample();  // x and y are re-created each time
    return 0;
}

/*
Output:
auto: x = 10, y = 20
auto: x = 10, y = 20
*/`,
        },
        {
          type: "code",
          language: "c",
          title: "Example: register Storage Class",
          content: `#include <stdio.h>

int main() {
    register int i;  // Hint to store 'i' in CPU register
    int sum = 0;

    for (i = 1; i <= 100; i++) {
        sum += i;
    }

    printf("Sum of 1 to 100 = %d\\n", sum);

    // NOTE: &i would cause a compilation error
    // printf("%p", &i);  // ERROR: cannot take address of register variable

    return 0;
}

/*
Output:
Sum of 1 to 100 = 5050
*/`,
        },
        {
          type: "code",
          language: "c",
          title: "Example: static Storage Class",
          content: `#include <stdio.h>

void counter() {
    static int count = 0;  // Initialized only ONCE
    count++;
    printf("Function called %d time(s)\\n", count);
}

int main() {
    counter();  // count = 1
    counter();  // count = 2 (value retained from previous call)
    counter();  // count = 3
    counter();  // count = 4

    return 0;
}

/*
Output:
Function called 1 time(s)
Function called 2 time(s)
Function called 3 time(s)
Function called 4 time(s)

Note: Without 'static', count would be 1 every time
because it would be re-initialized on each call.
*/`,
        },
        {
          type: "code",
          language: "c",
          title: "Example: extern Storage Class",
          content: `// --- file1.c ---
#include <stdio.h>

int sharedVar = 100;  // Global variable (defined here)

void printShared() {
    printf("sharedVar in file1 = %d\\n", sharedVar);
}

// --- file2.c ---
#include <stdio.h>

extern int sharedVar;  // Declaration: variable is defined in file1.c

void modifyShared() {
    sharedVar = 200;   // Modifies the same global variable
    printf("sharedVar in file2 = %d\\n", sharedVar);
}

// --- main.c ---
#include <stdio.h>

extern int sharedVar;  // Access the same global variable
void printShared();     // Function from file1.c
void modifyShared();    // Function from file2.c

int main() {
    printf("Initial sharedVar = %d\\n", sharedVar);  // 100
    printShared();     // 100
    modifyShared();    // Changes to 200
    printShared();     // 200
    return 0;
}

/*
Output (when compiled together: gcc file1.c file2.c main.c):
Initial sharedVar = 100
sharedVar in file1 = 100
sharedVar in file2 = 200
sharedVar in file1 = 200
*/`,
        },
      ],
    },
    {
      id: "co3-q18",
      title:
        "Quick Sort for array [10,07,08,09,01,05] with time complexity",
      source: "May/Jun 2023",
      marks: 10,
      blocks: [
        {
          type: "text",
          content: `## Quick Sort Algorithm

**Quick Sort** is a **divide-and-conquer** sorting algorithm that works by:

1. **Choosing a pivot** element from the array.
2. **Partitioning** the array so that elements smaller than the pivot go to the left, and elements greater go to the right.
3. **Recursively** sorting the left and right sub-arrays.

### Time Complexity:
| Case | Time Complexity |
|---|---|
| **Best Case** | O(n log n) -- balanced partitions |
| **Average Case** | O(n log n) |
| **Worst Case** | O(n^2) -- already sorted or all elements equal |

### Space Complexity: O(log n) for the recursive call stack.

### Dry Run for [10, 07, 08, 09, 01, 05]:

**Pass 1:** Pivot = 05
- Partition: [01] **05** [10, 07, 08, 09]
- Left: [01] is sorted.
- Right: [10, 07, 08, 09]

**Pass 2:** Pivot = 09 (for right sub-array)
- Partition: [07, 08] **09** [10]
- Right: [10] is sorted.

**Pass 3:** Pivot = 08 (for [07, 08])
- Partition: [07] **08**
- Sorted.

**Final sorted array:** [01, 05, 07, 08, 09, 10]`,
        },
        {
          type: "code",
          language: "c",
          title: "Quick Sort Implementation",
          content: `#include <stdio.h>

// Function to swap two elements
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Partition function: places pivot at correct position
int partition(int arr[], int low, int high) {
    int pivot = arr[high];  // Choose last element as pivot
    int i = low - 1;        // Index of smaller element
    int j;

    for (j = low; j < high; j++) {
        // If current element is smaller than or equal to pivot
        if (arr[j] <= pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return i + 1;  // Return pivot's final position
}

// Quick Sort recursive function
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        // pi is the partition index (pivot is at correct position)
        int pi = partition(arr, low, high);

        // Recursively sort elements before and after partition
        quickSort(arr, low, pi - 1);   // Sort left sub-array
        quickSort(arr, pi + 1, high);  // Sort right sub-array
    }
}

// Utility function to print the array
void printArray(int arr[], int size) {
    int i;
    for (i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Original array: ");
    printArray(arr, n);

    quickSort(arr, 0, n - 1);

    printf("Sorted array:   ");
    printArray(arr, n);

    return 0;
}

/*
Output:
Original array: 10 7 8 9 1 5
Sorted array:   1 5 7 8 9 10

Time Complexity:
  Best Case:    O(n log n)
  Average Case: O(n log n)
  Worst Case:   O(n^2)

Space Complexity: O(log n) for recursion stack
*/`,
        },
        {
          type: "diagram",
          title: "Quick Sort Partitioning for [10, 07, 08, 09, 01, 05]",
          content: `graph TD
    A["[10, 07, 08, 09, 01, 05]<br/>Pivot = 05"] --> B["[01]<br/>Left of 05"]
    A --> C["05<br/>(in place)"]
    A --> D["[10, 07, 08, 09]<br/>Right of 05"]
    D --> E["[07, 08]<br/>Left of 09"]
    D --> F["09<br/>(in place)"]
    D --> G["[10]<br/>Right of 09"]
    E --> H["[07]<br/>Left of 08"]
    E --> I["08<br/>(in place)"]

    J["Sorted: 01, 05, 07, 08, 09, 10"]

    style A fill:#10b981,stroke:#059669,color:#fff
    style B fill:#6366f1,stroke:#4f46e5,color:#fff
    style C fill:#ef4444,stroke:#dc2626,color:#fff
    style D fill:#f59e0b,stroke:#d97706,color:#fff
    style E fill:#ec4899,stroke:#db2777,color:#fff
    style F fill:#ef4444,stroke:#dc2626,color:#fff
    style G fill:#6366f1,stroke:#4f46e5,color:#fff
    style H fill:#6366f1,stroke:#4f46e5,color:#fff
    style I fill:#ef4444,stroke:#dc2626,color:#fff
    style J fill:#10b981,stroke:#059669,color:#fff`,
        },
      ],
    },
    {
      id: "co3-q19",
      title:
        "Explain Function declaration, calling, and definition with area of circle",
      source: "Dec 2022",
      marks: 6,
      blocks: [
        {
          type: "text",
          content: `## Function Declaration, Calling, and Definition

A function in C has three key aspects:

### 1. Function Declaration (Prototype)
- Tells the compiler about the function's **existence** before it is used.
- Specifies the **return type**, **function name**, and **parameter types**.
- Placed **before main()** or in a **header file**.
- Syntax: \`return_type function_name(parameter_types);\`

### 2. Function Call (Invocation)
- The statement that **executes** the function.
- Passes **actual arguments** to the function.
- Can store the **return value** in a variable.
- Syntax: \`variable = function_name(arguments);\`

### 3. Function Definition (Implementation)
- Contains the **actual body** with the logic/code.
- Specifies the **formal parameters** with names.
- Includes the **return statement** (if non-void).
- Can appear before or after main().`,
        },
        {
          type: "code",
          language: "c",
          title: "Area of Circle: Declaration, Calling, and Definition",
          content: `#include <stdio.h>

// ========================================
// 1. FUNCTION DECLARATION (Prototype)
//    - Tells compiler: "a function named
//      areaOfCircle exists, takes a float,
//      returns a float"
// ========================================
float areaOfCircle(float radius);

int main() {
    float r, area;

    printf("Enter the radius of the circle: ");
    scanf("%f", &r);

    // ====================================
    // 2. FUNCTION CALL (Invocation)
    //    - Executes the function
    //    - 'r' is the actual parameter
    //    - Return value stored in 'area'
    // ====================================
    area = areaOfCircle(r);

    printf("Area of circle with radius %.2f = %.2f\\n", r, area);

    return 0;
}

// ========================================
// 3. FUNCTION DEFINITION (Implementation)
//    - 'radius' is the formal parameter
//    - Contains the actual computation
//    - Returns the calculated area
// ========================================
float areaOfCircle(float radius) {
    float result;
    result = 3.14159 * radius * radius;
    return result;
}

/*
Sample Output:
Enter the radius of the circle: 5
Area of circle with radius 5.00 = 78.54
*/`,
        },
        {
          type: "diagram",
          title: "Flow of Function Declaration, Call, and Definition",
          content: `graph TD
    A["Program Start"] --> B["Function Declaration<br/>float areaOfCircle(float);"]
    B --> C["main() begins"]
    C --> D["Read radius from user"]
    D --> E["Function CALL<br/>area = areaOfCircle(r)"]
    E --> F["Control transfers to<br/>Function DEFINITION"]
    F --> G["Formal parameter 'radius'<br/>receives value of 'r'"]
    G --> H["Compute: result = 3.14159 * radius * radius"]
    H --> I["return result"]
    I --> J["Control returns to main()<br/>'area' receives return value"]
    J --> K["Print area"]
    K --> L["Program End"]

    style A fill:#10b981,stroke:#059669,color:#fff
    style B fill:#6366f1,stroke:#4f46e5,color:#fff
    style C fill:#f59e0b,stroke:#d97706,color:#fff
    style D fill:#ec4899,stroke:#db2777,color:#fff
    style E fill:#ef4444,stroke:#dc2626,color:#fff
    style F fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style G fill:#14b8a6,stroke:#0d9488,color:#fff
    style H fill:#f97316,stroke:#ea580c,color:#fff
    style I fill:#3b82f6,stroke:#2563eb,color:#fff
    style J fill:#ef4444,stroke:#dc2626,color:#fff
    style K fill:#ec4899,stroke:#db2777,color:#fff
    style L fill:#10b981,stroke:#059669,color:#fff`,
        },
      ],
    },
    {
      id: "co3-q20",
      title: "Sort array in ascending order using user-defined function",
      source: "Aug 2023",
      marks: 6,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Sort Array Using User-Defined Function (Bubble Sort)",
          content: `#include <stdio.h>

// Function to sort an array in ascending order using Bubble Sort
void sortArray(int arr[], int n) {
    int i, j, temp;

    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap adjacent elements
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Function to print the array
void printArray(int arr[], int n) {
    int i;
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int arr[100], n, i;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter %d elements:\\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("\\nOriginal array: ");
    printArray(arr, n);

    sortArray(arr, n);  // Call sorting function

    printf("Sorted array:   ");
    printArray(arr, n);

    return 0;
}

/*
Sample Output:
Enter number of elements: 6
Enter 6 elements:
64 34 25 12 22 11

Original array: 64 34 25 12 22 11
Sorted array:   11 12 22 25 34 64

Note: Arrays in C are always passed by reference (as a pointer),
so the sorting done inside the function directly modifies the
original array in main().
*/`,
        },
      ],
    },
    {
      id: "co3-q21",
      title: "Calculate factorial using recursion",
      source: "May 2024",
      marks: 4,
      blocks: [
        {
          type: "code",
          language: "c",
          title: "Calculate Factorial Using Recursion",
          content: `#include <stdio.h>

// Recursive factorial function
long long factorial(int n) {
    // Base case
    if (n == 0)
        return 1;
    // Recursive case
    return n * factorial(n - 1);
}

int main() {
    int num;

    printf("Enter a number to find its factorial: ");
    scanf("%d", &num);

    if (num < 0) {
        printf("Error! Factorial of a negative number doesn't exist.\\n");
    } else {
        printf("Factorial of %d = %lld\\n", num, factorial(num));
    }

    return 0;
}

/*
Sample Output 1:
Enter a number to find its factorial: 5
Factorial of 5 = 120

Sample Output 2:
Enter a number to find its factorial: 0
Factorial of 0 = 1

Sample Output 3:
Enter a number to find its factorial: 12
Factorial of 12 = 479001600

How the recursion works for factorial(5):
  factorial(5) -> 5 * factorial(4)
                      4 * factorial(3)
                          3 * factorial(2)
                              2 * factorial(1)
                                  1 * factorial(0)
                                      return 1
  Returning: 1 -> 1 -> 2 -> 6 -> 24 -> 120
*/`,
        },
      ],
    },
    {
      id: "co3-q22",
      title: "Explain all storage classes in C with example",
      source: "Jul 2022",
      marks: 8,
      blocks: [
        {
          type: "text",
          content: `## Storage Classes in C -- Complete Guide

Every variable in C has a **storage class** that defines four properties:

1. **Scope** -- Where the variable can be accessed.
2. **Lifetime** -- How long the variable exists in memory.
3. **Initial Value** -- What value the variable holds if not explicitly initialized.
4. **Storage Location** -- Where the variable is physically stored.

### The Four Storage Classes:

### 1. auto (Automatic)
\`\`\`
auto int x;  // Same as: int x;
\`\`\`
- Default for all local variables.
- Scope: Local to the enclosing block \`{}\`.
- Lifetime: Exists only while the block is executing.
- Default value: **Garbage** (undefined).
- The \`auto\` keyword is almost never written explicitly since it is the default.

### 2. register
\`\`\`
register int counter;
\`\`\`
- Requests the compiler to store the variable in a **CPU register** for faster access.
- Scope: Local to the enclosing block.
- Lifetime: Exists only while the block is executing.
- Default value: **Garbage** (undefined).
- **Cannot use \`&\` (address-of) operator** on register variables.
- The compiler may **ignore** the request if no registers are available.

### 3. static
\`\`\`
static int count = 0;
\`\`\`
- Preserves the variable's value **across multiple function calls**.
- Scope: Local to the enclosing block (if local static) or file-only (if global static).
- Lifetime: **Entire program duration**.
- Default value: **0** (zero-initialized).
- Initialized **only once**, at program startup.

### 4. extern (External)
\`\`\`
extern int globalVar;
\`\`\`
- Declares a variable that is **defined elsewhere** (another file or location).
- Scope: **Global** -- accessible across multiple source files.
- Lifetime: **Entire program duration**.
- Default value: **0** (zero-initialized).
- Does **not allocate** memory; just references an existing variable.

### Comprehensive Comparison

| Property | auto | register | static | extern |
|---|---|---|---|---|
| **Keyword** | \`auto\` (optional) | \`register\` | \`static\` | \`extern\` |
| **Scope** | Local block | Local block | Local block / File | Global |
| **Lifetime** | Block execution | Block execution | Entire program | Entire program |
| **Default Value** | Garbage | Garbage | 0 | 0 |
| **Storage** | Stack (RAM) | CPU Register | Data segment (RAM) | Data segment (RAM) |
| **Address (&)** | Yes | No | Yes | Yes |
| **Multiple files** | No | No | No | Yes |`,
        },
        {
          type: "code",
          language: "c",
          title: "Complete Example: All Storage Classes",
          content: `#include <stdio.h>

// EXTERN: Global variable (visible across files)
int globalCount = 0;

// Function demonstrating AUTO storage class
void demoAuto() {
    auto int a = 5;  // 'auto' is optional, same as: int a = 5;
    printf("[auto]     a = %d (re-created each call)\\n", a);
    a = a + 10;  // This change is lost when function returns
}

// Function demonstrating STATIC storage class
void demoStatic() {
    static int s = 0;  // Initialized ONCE, retains value
    s++;
    printf("[static]   s = %d (value retained across calls)\\n", s);
}

// Function demonstrating REGISTER storage class
void demoRegister() {
    register int i;  // Hint: store in CPU register
    int sum = 0;
    for (i = 1; i <= 5; i++) {
        sum += i;
    }
    printf("[register] sum of 1-5 = %d\\n", sum);
    // printf("Address of i: %p", &i);  // ERROR! Cannot take address
}

// Function demonstrating EXTERN storage class
void demoExtern() {
    extern int globalCount;  // References the global variable
    globalCount += 10;
    printf("[extern]   globalCount = %d\\n", globalCount);
}

int main() {
    printf("=== AUTO ===\\n");
    demoAuto();   // a = 5
    demoAuto();   // a = 5 (re-created, previous change lost)
    demoAuto();   // a = 5

    printf("\\n=== STATIC ===\\n");
    demoStatic(); // s = 1
    demoStatic(); // s = 2 (retained!)
    demoStatic(); // s = 3 (retained!)

    printf("\\n=== REGISTER ===\\n");
    demoRegister();

    printf("\\n=== EXTERN ===\\n");
    printf("[extern]   globalCount = %d (initial)\\n", globalCount);
    demoExtern(); // globalCount = 10
    demoExtern(); // globalCount = 20

    return 0;
}

/*
Output:
=== AUTO ===
[auto]     a = 5 (re-created each call)
[auto]     a = 5 (re-created each call)
[auto]     a = 5 (re-created each call)

=== STATIC ===
[static]   s = 1 (value retained across calls)
[static]   s = 2 (value retained across calls)
[static]   s = 3 (value retained across calls)

=== REGISTER ===
[register] sum of 1-5 = 15

=== EXTERN ===
[extern]   globalCount = 0 (initial)
[extern]   globalCount = 10
[extern]   globalCount = 20
*/`,
        },
      ],
    },
  ],
}
