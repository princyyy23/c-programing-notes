/**
 * Quick Notes and Memory Aids for all questions.
 * These are student-friendly "helper text" entries — written in plain language
 * with mnemonics, analogies, tips, and exam tricks.
 */
export const questionNotes: Record<string, string> = {

  // ─────────────── CO1 Notes ───────────────

  "co1-q1": `**Think of it as 2 comparisons in sequence:**
- Compare A and B → the bigger one becomes the *temporary winner*
- Then compare the winner with C → that's your largest!

**Flowchart shapes to memorise:**
- Oval → Start / End
- Parallelogram → Input / Output
- Diamond → Decision (always has 2 outgoing arrows: Yes and No)
- Rectangle → Process / Calculation

**Tip:** Every diamond must have *exactly* 2 outgoing paths. A common exam mistake is drawing 3 paths from one diamond.`,

  "co1-q2": `**A cube is just n × n × n**
- Compute as \`n*n*n\` — no \`pow()\` needed (simpler and faster)
- Loop: \`for(i=1; i<=9; i++)\` — starts at 1, ends at 9

**Output hint:** Format a 2-column table using \`printf\` with \`%-8d\` for neat alignment.

**Remember:** You can also use \`pow(n, 3)\` from \`math.h\` but integer multiplication is preferred for integer results.`,

  "co1-q3": `**Analogy: A header file is your toolbox**
- Without \`#include <stdio.h>\`, the compiler doesn't know what \`printf\` is
- System headers use angle brackets: \`#include <stdio.h>\`
- User-defined headers use quotes: \`#include "myheader.h"\`

**Common header files to know:**
| Header | Contains |
|--------|----------|
| stdio.h | printf, scanf, FILE |
| math.h | sqrt, pow, sin |
| string.h | strlen, strcpy |
| ctype.h | isalpha, isdigit |

**Tip:** Header files only contain *declarations* and *macros*, not executable code.`,

  "co1-q4": `**Fibonacci: every number = sum of the two before it**
0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

**Iterative trick using 3 variables:**
\`\`\`
a=0, b=1
loop: c = a+b → print c → a=b → b=c
\`\`\`

**Algorithm properties to mention — FINODEF:**
- **Fi**nite, **N**o ambiguity, **O**utput, **D**efinite, **E**ffective, **F**easible

**Tip:** An algorithm is a flowchart's text version — both describe the same logic, just different representations.`,

  "co1-q5": `**Think of it like BODMAS/PEMDAS in C!**
- Higher precedence = evaluated first
- Associativity = direction when precedence is equal (most are left-to-right)

**Quick priority order (high → low):**
1. Unary: \`++\`, \`--\`, \`!\`, \`~\`
2. Multiplicative: \`*\`, \`/\`, \`%\`
3. Additive: \`+\`, \`-\`
4. Relational: \`<\`, \`>\`, \`<=\`, \`>=\`
5. Equality: \`==\`, \`!=\`
6. Logical: \`&&\`, \`||\`
7. Assignment: \`=\`, \`+=\`, \`-=\`

**Mnemonic:** *Uncle Multiplies And Reads Logic Assignments* (UMARLA)`,

  "co1-q6": `**Key insight: use the modulo (remainder) operator \`%\`**
- Even: \`n % 2 == 0\` (remainder is 0)
- Odd: \`n % 2 != 0\` (remainder is 1)

**Algorithm steps:** Input N → Compute N%2 → If 0, print "Even" else print "Odd"

**Bonus trick (advanced):** Bitwise AND check — \`n & 1\` gives 0 for even, 1 for odd. Faster but same result!

**Flowchart tip:** This is one of the simplest diamond-decision flowcharts — great example to practice.`,

  "co1-q7": `**4 primitive types — remember ICFD:**
- **I**nt → whole numbers, 4 bytes
- **C**har → single character, 1 byte
- **F**loat → decimal (single precision), 4 bytes, ~6 digits
- **D**ouble → decimal (double precision), 8 bytes, ~15 digits

**Memory size cheat sheet:**
\`char(1) < short(2) < int(4) = float(4) < double(8) < long long(8)\`

**Modifiers:** \`short\`, \`long\`, \`signed\`, \`unsigned\` can be combined with int/char.

**Tip:** Always prefer \`double\` over \`float\` for precision-sensitive calculations.`,

  "co1-q8": `**Think of each bit as a light switch (0=OFF, 1=ON)**
- \`&\` AND → both must be ON → 1&1=1, anything else = 0
- \`|\` OR → either must be ON → 0|0=0, anything else = 1
- \`^\` XOR → *different* means ON → 1^0=1, same = 0
- \`~\` NOT → flip all bits → ~5 = -6
- \`<<\` Left shift → multiply by 2ⁿ → \`5<<1 = 10\`
- \`>>\` Right shift → divide by 2ⁿ → \`8>>1 = 4\`

**Mnemonic for AND/OR/XOR:** *Both, Either, Different* (BED)

**Practical use:** Masking bits, checking flags, fast multiply/divide by powers of 2.`,

  "co1-q9": `**Ternary = 3 parts:** \`condition ? value_if_true : value_if_false\`

Think of \`?\` as a question: "Is this true?"

**For largest of 3 numbers:**
\`\`\`c
max = (a>b&&a>c) ? a : (b>c ? b : c);
\`\`\`
Read it: "Is a the biggest? Yes→a, No→is b bigger than c?"

**When to use ternary:**
- Simple single-line conditions ✓
- Avoid: complex nested conditions (hard to read) ✗

**Tip:** The \`?:\` operator is the ONLY ternary (3-operand) operator in C.`,

  "co1-q10": `**C data types — the complete picture:**

**Primary (4):** \`int\`, \`char\`, \`float\`, \`double\`
**Derived:** Arrays, Pointers, Structures, Unions
**Special:** \`void\` (no type — for functions returning nothing, or generic pointers)

**Modifier table:**
| | int | char |
|--|-----|------|
| signed | ✓ (default) | ✓ (default) |
| unsigned | ✓ | ✓ |
| short | ✓ | ✗ |
| long | ✓ | ✗ |

**Tip:** \`unsigned int\` range doubles (0 to 4.2 billion) vs \`int\` (-2.1B to 2.1B) — same 4 bytes!`,

  "co1-q11": `**6 operator categories — mnemonic: *All Real Bears Ate Soft Logs* (ARBASL):**
- **A**rithmetic: \`+\`, \`-\`, \`*\`, \`/\`, \`%\`
- **R**elational: \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\`
- **B**itwise: \`&\`, \`|\`, \`^\`, \`~\`, \`<<\`, \`>>\`
- **A**ssignment: \`=\`, \`+=\`, \`-=\`, \`*=\`, \`/=\`
- **S**pecial/Sizeof: \`sizeof\`, \`?:\`, \`,\`
- **L**ogical: \`&&\`, \`||\`, \`!\`

**Also remember:** Increment/Decrement: \`++\`, \`--\` (unary operators)

**Tip:** For exams, give an example expression for each category — it shows understanding!`,

  "co1-q12": `**Token = the smallest meaningful unit in C code.**
Like individual *words* in a sentence.

**6 types of tokens — KISCOS:**
- **K**eywords: reserved words (\`int\`, \`if\`, \`while\`) — 32 in C
- **I**dentifiers: names you create (\`myVar\`, \`sum\`, \`main\`)
- **S**tring literals: \`"hello world"\`, \`"C programming"\`
- **C**onstants: \`3.14\`, \`100\`, \`'A'\`
- **O**perators: \`+\`, \`-\`, \`*\`, \`=\`
- **S**pecial symbols: \`{\`, \`}\`, \`;\`, \`,\`, \`(\`, \`)\`

**Identifier naming rules:**
- Must start with letter or underscore
- No spaces, no special characters
- Case sensitive: \`Sum\` ≠ \`sum\``,

  "co1-q13": `**Simplest flowchart to draw — and a perfect exam answer:**

Steps:
1. Oval: **Start**
2. Parallelogram: **Input N**
3. Diamond: **N % 2 == 0?** → Yes → Parallelogram: "N is Even" → Oval: Stop
   → No → Parallelogram: "N is Odd" → Oval: Stop

**Key symbol rules:**
- Diamond always has exactly 2 outputs (Yes/No or True/False)
- Parallelogram for both input AND output
- Avoid arrows crossing each other

**Practice tip:** Draw this flowchart 2-3 times — it's the most repeated basic flowchart!`,

  "co1-q14": `**6 token types (same as co1-q12 — tokens is a hot topic!)**

**Best strategy for "explain one":** Choose *Identifiers* — most to say about them.

**Identifier rules for exam:**
- Must start with a letter (a-z, A-Z) or underscore \_
- Can contain letters, digits (0-9), underscores
- Cannot be a keyword
- Case sensitive: \`Count\` and \`count\` are different
- No length limit (but first 31 chars are significant in C89)

**Examples:**
- Valid: \`myVar\`, \`_count\`, \`num1\`, \`MAX_SIZE\`
- Invalid: \`1var\` (starts with digit), \`my var\` (space), \`int\` (keyword)`,

  "co1-q15": `**Algorithm = a step-by-step recipe to solve a problem (before writing code!)**

**5 essential properties — FIDEO:**
- **F**initeness: must terminate after a finite number of steps
- **I**nput: zero or more inputs
- **D**efiniteness: each step must be clearly and precisely defined
- **E**ffectiveness: each step must be doable with basic operations
- **O**utput: at least one output

**Why write algorithm before code?**
- Acts as a blueprint → easier to debug logic mistakes before coding
- Language-independent — works for C, Java, Python

**Tip:** In exams, always list the properties AND write the algorithm — both are needed for full marks!`,

  "co1-q16": `**Leap year logic — 3-condition chain:**
1. Divisible by 400? → **Leap year** ✓
2. Else divisible by 100? → **Not a leap year** ✗
3. Else divisible by 4? → **Leap year** ✓
4. Else → **Not a leap year** ✗

**Mnemonic: "4 Divides, 100 Denies, 400 Qualifies"**

**Real examples:**
| Year | Rule Applied | Result |
|------|-------------|--------|
| 2000 | ÷400 ✓ | Leap |
| 1900 | ÷100 (not ÷400) | Not Leap |
| 2024 | ÷4 (not ÷100) | Leap |
| 2023 | None apply | Not Leap |`,

  "co1-q17": `**Logical operators return 0 (false) or 1 (true):**
- \`&&\` (AND): BOTH must be true → "both conditions met"
- \`||\` (OR): AT LEAST ONE must be true → "either condition met"
- \`!\` (NOT): flips true ↔ false

**Short-circuit evaluation (very important!):**
- In \`&&\`: if left side is **false**, right side is NEVER evaluated
- In \`||\`: if left side is **true**, right side is NEVER evaluated

**Assignment operators — shortcuts:**
| Long form | Shorthand |
|-----------|-----------|
| \`a = a + 5\` | \`a += 5\` |
| \`a = a * 2\` | \`a *= 2\` |
| \`a = a / 3\` | \`a /= 3\` |`,

  "co1-q18": `**Variable = a box whose content can change. Constant = a sealed/locked box.**

\`int x = 5;\` → x can be changed: \`x = 10;\` ✓
\`const int MAX = 100;\` → cannot be changed later ✗

**Types of variables by scope:**
- **Local:** Declared inside a function, only accessible there
- **Global:** Declared outside all functions, accessible everywhere
- **Static:** Retains its value between function calls
- **Register:** Stored in CPU register for faster access

**Two ways to declare constants:**
1. \`#define PI 3.14159\` (preprocessor macro)
2. \`const float PI = 3.14159;\` (type-safe, preferred)`,

  "co1-q19": `**Two-step nested ternary for largest of 3:**

**Step 1:** Find larger of a and b:
\`maxAB = (a > b) ? a : b;\`

**Step 2:** Compare with c:
\`max = (maxAB > c) ? maxAB : c;\`

Or in ONE line (nested):
\`max = (a>b) ? ((a>c) ? a : c) : ((b>c) ? b : c);\`

**Reading tip:** Read nested ternary from *outside to inside* — outer \`?\` is evaluated first.

**Exam tip:** For full marks on this question, show both the logic explanation AND the complete working program.`,

  "co1-q20": `**Grade boundaries to memorise:**
| Score | Grade |
|-------|-------|
| ≥ 75 | Distinction |
| 60–74 | First Class |
| 50–59 | Second Class |
| 40–49 | Pass |
| < 40 | Fail |

**Algorithm approach:** Use if-else-if ladder, testing from the HIGHEST range downward.

**Flowchart:** Chain 5 diamond shapes (one per grade boundary).

**Boundary trap:** Use \`>= 75\` (not \`> 75\`) — the equal sign matters!

**Tip:** Before drawing the flowchart read all grade boundaries carefully — boundary errors are the #1 mistake here.`,

  "co1-q21": `**How to trace any C program's output — step by step:**

1. Start at \`main()\` and execute each line sequentially
2. Maintain a *variable tracking table* (variable | current value)
3. For loops → track the loop variable and condition at every iteration
4. Substitute current values into \`printf\` format strings

**Common traps to watch for:**
- \`++i\` (prefix) increments BEFORE use; \`i++\` (postfix) increments AFTER
- Integer division: \`5/2 = 2\` (truncated, NOT 2.5)
- Operator precedence: \`*\` and \`/\` before \`+\` and \`-\`
- \`printf\` with \`\\n\` gives a newline; \`\\t\` gives a tab

**Best study method:** Practice tracing 5–10 short programs and verify by actually running them.`,

  "co1-q22": `**For "predict output with justification" — show your working clearly:**

**4 rules that always apply:**
1. Follow the execution flow sequentially (handle branches and loops carefully)
2. Watch types — \`int/int = int\` (truncated); \`int/float = float\`
3. Know format specifiers — \`%d\` int, \`%f\` float, \`%c\` char, \`%s\` string
4. Track side-effects — \`i++\`, \`--j\`, \`i += 2\` all change the variable!

**Justification format for exam:** Write:
> "At line X, variable Y holds Z because [reason]"

**Partial credit tip:** Even if your final output is wrong, you get marks for correct intermediate steps!`,

  "co1-q23": `**Quick checklist for any output-tracing question:**
- ☐ List all variables and their initial values
- ☐ Identify loop bounds (start value, condition, increment)
- ☐ Trace each loop iteration in a small table
- ☐ Watch every \`printf\` / \`scanf\` statement
- ☐ Check for function calls (does it recurse?)

**Common C output traps:**
- \`printf("%d", 7/2);\` → outputs **3** (not 3.5!)
- \`printf("%d", 7%2);\` → outputs **1**
- A \`for(i=0;i<n;i++)\` loop runs exactly **n** times

**Practice advice:** Compile and run 10 short programs while guessing their output first — the best way to get good at this.`,

  // ─────────────── CO2 Notes ───────────────

  "co2-q1": `**if-else-if ladder = testing conditions in order, top to bottom**

Think of it like a traffic signal: check red first, then amber, then green.

Each \`else if\` is only reached if ALL previous conditions were false.

**Nested if** = an \`if\` inside another \`if\` (for compound/layered decisions)

**Syntax reminder:** Every \`if\` needs \`()\` around condition and \`{}\` around body.

**Most common mistake:** Using \`=\` (assignment) instead of \`==\` (comparison) — \`if(a = 5)\` always true!

**When to use nested if vs else-if:** Use nested if when inner decision depends on outer being true.`,

  "co2-q2": `**continue = skip the rest of *this* iteration, go to the next one**

**Analogy:** Teacher says "skip question 3, go directly to question 4."

**Key difference from break:**
| Statement | Effect |
|-----------|--------|
| \`continue\` | Skip current iteration; loop continues |
| \`break\` | Exit the loop entirely |

**Where continue jumps to:**
- \`for\` loop → jumps to the *increment* expression
- \`while\` loop → jumps back to the *condition* check
- \`do-while\` loop → jumps to the *condition* check (at the bottom)`,

  "co2-q3": `**The ONLY difference between while and do-while is WHEN the condition is checked:**

- \`while\`: condition checked **BEFORE** body → can execute 0 times
- \`do-while\`: condition checked **AFTER** body → always runs AT LEAST once

**Real-world analogy:**
- \`while\` = check if the shop is open BEFORE going → might not go at all
- \`do-while\` = go to the shop, THEN check if it was open → you went at least once

**Best use case for do-while:** Menu-driven programs (always show the menu once before asking again).

**Syntax reminder:** \`do-while\` needs a semicolon after the closing parenthesis: \`while(cond);\``,

  "co2-q4": `**Switch is perfect for menu/option-based programs — cleaner than long if-else chains**

**CRITICAL rule: always include \`break\` at end of each case!**
Without \`break\`, execution *falls through* to the next case (a common bug!).

**switch limitations:**
- Only works with \`int\` and \`char\` (not \`float\` or \`string\`)
- Only tests for *equality* — can't check ranges

**switch vs if-else:**
| | switch | if-else |
|--|--------|---------|
| Use for | Equal checks on one variable | Ranges, complex conditions |
| Speed | Faster (jump table) | Linear |
| Data types | int, char only | Any |`,

  "co2-q5": `**Pattern printing = nested loops**

For P PQ PQR PQRS:
- Outer loop: row index from 0 to n−1
- Inner loop: print characters from 'P' up to 'P'+row

**ASCII character trick:**
- Characters in C are just numbers: 'P'=80, 'Q'=81, 'R'=82...
- So \`'P' + j\` gives you Q, R, S, etc. — increment the char like a number!

**Template:**
\`\`\`c
for(i=0; i<4; i++) {
  for(j=0; j<=i; j++) printf("%c", 'P'+j);
  printf("\\n");
}
\`\`\`

**Tip:** Always add \`printf("\\n")\` after the inner loop to move to the next line.`,

  "co2-q6": `**This is Σ(i²) from i=1 to n — sum of squares**

**Loop approach (what the question asks):**
\`\`\`c
for(i=1; i<=n; i++) sum += i*i;
\`\`\`

**Optional formula shortcut (bonus for topper marks):**
\`sum = n*(n+1)*(2*n+1)/6;\`

**Always initialise:** \`sum = 0\` before the loop — forgetting this is the #1 bug!

**Starting at 0 mistake:** Many students write \`for(i=0; ...)\` — wrong! The series starts from 1.

**Verification:** For n=3: 1+4+9 = 14. Formula: 3×4×7/6 = 14 ✓`,

  "co2-q7": `**break = EXIT the loop entirely. continue = SKIP current iteration.**

**Analogy:**
- \`break\` = 🚪 Fire exit — you leave the building (loop) completely
- \`continue\` = ⏭ Skip button — jump to the next song (iteration)

**Both work inside:** \`for\`, \`while\`, \`do-while\`

**Important:** \`break\` also exits a \`switch\` statement — this prevents unwanted fall-through.

**Nested loops trap:** \`break\` / \`continue\` only affects the **innermost** loop they're in! To break out of an outer loop, use a flag variable or \`goto\` (advanced).`,

  "co2-q8": `**math.h = your scientific calculator in C**

Always add \`#include <math.h>\` and compile with \`-lm\` flag (links the math library).

**Key functions for exams:**
| Function | Purpose | Example |
|----------|---------|---------|
| \`sqrt(x)\` | Square root | \`sqrt(25.0)\` → 5.0 |
| \`pow(x,y)\` | x raised to y | \`pow(2,10)\` → 1024 |
| \`fabs(x)\` | Absolute value (float) | \`fabs(-3.5)\` → 3.5 |
| \`ceil(x)\` | Round UP | \`ceil(2.3)\` → 3.0 |
| \`floor(x)\` | Round DOWN | \`floor(2.9)\` → 2.0 |

**Note:** All math.h functions return \`double\` — use \`%f\` (or \`%lf\`) to print.`,

  "co2-q9": `**Interactive calculator using switch — the classic demonstration program**

**Key points for a complete answer:**
1. Read operator as a \`char\`: \`scanf(" %c", &op);\` (note the space before %c to skip newline)
2. Read two operands as \`int\` or \`float\`
3. Switch on the operator character

**Division safety — always check for zero divisor!**
\`\`\`c
case '/':
  if(b != 0) printf("%.2f", (float)a/b);
  else printf("Error: Division by zero!"); break;
\`\`\`

**Tip:** Cast to \`(float)\` before division to get decimal result, not integer division.`,

  "co2-q10": `**Palindrome = reads the same forwards and backwards: 12321, MADAM, RACECAR**

**Algorithm to check a number:**
1. Save original: \`original = n;\`
2. Reverse: \`rev = rev*10 + (n%10); n /= 10;\` (in a while loop)
3. Compare: \`if(original == rev)\` → palindrome!

**Why nested loops in the question?** The question may also include a pattern program alongside — nested loops print rows and characters.

**String palindrome:** Compare character at position i with position (length-1-i).

**Easy examples to use:** 121, 1331, 12321, 11011 are all palindromes.`,

  "co2-q11": `**Key differences table:**
| Feature | switch | if-else ladder |
|---------|---------|---------------|
| Tests | Equality only | Any condition |
| Data type | int, char | Any |
| Ranges | ✗ Cannot | ✓ Can |
| Fall-through | ✓ (if no break) | ✗ No |
| Speed | Faster (≥5 cases) | Linear check |

**When to choose switch:** Day of week, grade letter, menu selection (fixed values).

**When to choose if-else:** Score ranges (>= 60), float comparisons, complex boolean expressions.

**Tip:** You can mix both — use switch for outer menu, if-else for range-based inner logic.`,

  "co2-q12": `**Sum of n numbers using for loop — one of the most fundamental loop programs**

\`\`\`c
sum = 0;
for(i = 1; i <= n; i++)
  sum += i;  // same as sum = sum + i
printf("Sum = %d", sum);
\`\`\`

**Formula shortcut (for verification):** \`n*(n+1)/2\`

**Initialisation is critical:** \`sum = 0\` before the loop. Uninitialized \`sum\` → garbage value!

**Variable checklist:** \`i\` (loop counter), \`n\` (limit from user), \`sum\` (accumulator, init 0).

**This pattern extends to:** Product (init to 1), maximum, minimum, count, average.`,

  "co2-q13": `**Three constructs — when to use each:**

| Construct | Best for |
|-----------|---------|
| \`if-else\` | Binary choice (y/n, pass/fail) |
| \`else-if ladder\` | Multiple mutually exclusive conditions |
| \`switch\` | One variable with fixed values |
| \`nested if\` | Compound conditions (A AND B AND C) |

**Real-world example for each:**
- *if-else:* Is score ≥ 40? Pass/Fail
- *else-if ladder:* Grading A B C D F
- *switch:* Print day name from day number
- *nested if:* Check if number is positive AND even

**Tip:** switch & else-if ladder both handle multiple conditions — the difference is switch is faster and only works with equality.`,

  "co2-q14": `**Pattern A BB CCC DDDD:**
- Row i prints character ('A' + i−1) exactly **i** times

\`\`\`c
for(i=1; i<=5; i++) {
  for(j=1; j<=i; j++) printf("%c", 'A'+i-1);
  printf("\\n");
}
\`\`\`

**ASCII trick:** 'A'=65, 'B'=66, 'C'=67 — just add (i−1) to 'A' to get the right letter!

**Trace for i=3:** 'A'+2 = 'C', j goes 1 to 3 → prints CCC ✓

**Tip:** Don't confuse with P PQ PQR pattern — in that one the *characters change* within a row. Here the same character repeats.`,

  "co2-q15": `**3 loops — same power, different syntax and use case:**

| | for | while | do-while |
|--|-----|-------|---------|
| Best for | Known count | Unknown count | Must run ≥ once |
| Condition check | Before body | Before body | **After** body |
| Can execute 0 times? | Yes | Yes | **No** |

**Simple rule:**
- Counting → \`for\`
- Sentinel/event-driven → \`while\`
- Menu / retry logic → \`do-while\`

**All 3 are equally powerful** — any loop can be rewritten as another. The choice is about readability and clarity.

**Conversion tip:** A \`for\` loop \`for(i=0; i<n; i++)\` is exactly equivalent to \`i=0; while(i<n) { ...; i++; }\``,

  "co2-q16": `**Flowchart for if-else-if ladder = chain of diamonds top to bottom**

**Drawing rules:**
- Each diamond = one condition check
- "Yes" branch → that branch's output (go right)
- "No" branch → next diamond (go down)
- Final "No" → else block

**For the if-else-if ladder flowchart:**
1. Diamond: Cond1? → Yes → Action1 → End
2. Diamond: Cond2? → Yes → Action2 → End
3. ...and so on
4. Last No → Default action → End

**Tip:** Keep all diamonds aligned vertically on the left side — makes the flowchart clean and readable.`,

  "co2-q17": `**Arithmetic operations with switch — very similar to calculator:**

**Template to memorise:**
\`\`\`c
printf("Enter op (+,-,*,/) and two numbers: ");
scanf(" %c %d %d", &op, &a, &b);
switch(op) {
  case '+': printf("%d", a+b); break;
  case '-': printf("%d", a-b); break;
  case '*': printf("%d", a*b); break;
  case '/':
    if(b!=0) printf("%.2f", (float)a/b);
    else puts("Division by zero!"); break;
  default: puts("Invalid operator!");
}
\`\`\`

**Must include:** division-by-zero check and \`default\` case.`,

  "co2-q18": `**Printing even numbers using while loop:**

\`\`\`c
i = 2;
while(i <= n) {
  printf("%d ", i);
  i += 2;  // skip odd numbers
}
\`\`\`

**Why \`i += 2\` instead of checking \`i%2==0\`?** It's twice as efficient — you skip odds entirely.

**Alternative (slightly less efficient):**
\`\`\`c
i = 1;
while(i <= n) {
  if(i%2 == 0) printf("%d ", i);
  i++;
}
\`\`\`

**Hint:** For even numbers from 1 to n, the count is \`n/2\` (integer division).`,

  "co2-q19": `**Three outcomes = three-way if-else chain**

\`\`\`c
if(num > 0) printf("Positive");
else if(num < 0) printf("Negative");
else printf("Zero");
\`\`\`

**Exam trap:** Don't forget the **zero** case! Many students only handle positive/negative.

**Flowchart:** Two diamonds chain — first check >0, then check <0, else it's zero.

**Why else-if not nested if?** These three cases are mutually exclusive — only one can ever be true. else-if ladder is the right tool.`,

  "co2-q20": `**Natural numbers = 1, 2, 3, ..., n**

\`\`\`c
printf("Natural numbers: ");
for(i=1; i<=n; i++) printf("%d ", i);
printf("\\nSum = %d", n*(n+1)/2);  // or accumulate in loop
\`\`\`

**Two-in-one program:** Print AND compute sum in the same loop:
\`\`\`c
for(i=1; i<=n; i++) { printf("%d ", i); sum += i; }
\`\`\`

**Formula:** Sum = n(n+1)/2 → for n=10: 10×11/2 = 55

**Tip:** Always verify your loop output with n=5 → should print 1 2 3 4 5 and sum=15.`,

  "co2-q21": `**Weekday number-to-name = textbook switch example**

\`\`\`c
switch(day) {
  case 1: printf("Monday"); break;
  case 2: printf("Tuesday"); break;
  // ... cases 3-6
  case 7: printf("Sunday"); break;
  default: printf("Invalid day! Enter 1-7.");
}
\`\`\`

**Full marks checklist:** Show all 7 cases + default case.

**Why switch is better than if-else here?** 7 fixed integer options → switch is clean, readable, and fast.

**Tip:** You can also use a string array: \`char *days[] = {"Mon","Tue",...};\` and print \`days[day-1]\` — shown as an elegant alternative.`,

  "co2-q22": `**4 types of if constructs in C:**

1. **Simple if:** Single path — action only if condition is true, nothing otherwise
2. **if-else:** Two paths — true block or false block
3. **else-if ladder:** Multiple sequential conditions tested one by one
4. **Nested if:** An if inside another if — for compound/hierarchical decisions

**Mnemonic:** *Simple Double Multiple Compound* (SDMC)

**Exam tip:** Give syntax AND a different example for each type — both together guarantee full marks!

**Common marks split:** 1 mark per type × 4 = 4 marks, or 2 marks syntax + 2 marks example.`,

  "co2-q23": `**Student grading with nested if-else — shows multi-level decision making**

**Logic structure:**
1. Calculate average: \`avg = (m1+m2+...+m5) / 5.0\`
2. Check if passed (avg >= 40)
3. If passed, check which grade range

**Boundary values to include (exam marks test these!):**
- Test exactly at 75 → Distinction
- Test exactly at 40 → Pass (not fail!)

**Common bugs:**
- Using integer division for average → loses decimal precision (use \`5.0\` not \`5\`)
- Missing \`==\` in boundary, using \`>\` instead of \`>=\`
- Forgetting curly braces in nested if → wrong clause grouping`,

  "co2-q24": `**Prime = divisible ONLY by 1 and itself**

**Efficient algorithm (check only up to √n):**
\`\`\`c
isPrime = 1;
for(i=2; i*i<=n; i++) {
  if(n%i == 0) { isPrime = 0; break; }
}
\`\`\`

**Why √n is enough?** If n has a factor > √n, it must also have one < √n. So checking up to √n covers all cases.

**Edge cases (must handle!):**
- 0 → NOT prime, 1 → NOT prime
- 2 → Prime (the ONLY even prime!)
- All other even numbers → NOT prime

**Mnemonic:** *"Primes break no rules below their root"*`,

  "co2-q25": `**Sum of digits using do-while — classic digit-extraction loop**

\`\`\`c
do {
  digit = n % 10;   // extract last digit
  sum += digit;
  n /= 10;          // remove last digit
} while(n > 0);
\`\`\`

**Why do-while?** The body must run at least once — even for a single-digit number like 5 (sum = 5).

**Example trace for n=1234:**
| n | n%10 | sum |
|---|------|-----|
| 1234 | 4 | 4 |
| 123 | 3 | 7 |
| 12 | 2 | 9 |
| 1 | 1 | 10 |

**Mnemonic:** *"%10 extracts, /10 removes"*`,

  // ─────────────── CO3 Notes ───────────────

  "co3-q1": `**Actual = what you SEND. Formal = what the function RECEIVES.**

**Analogy:** You send a *letter* (actual parameter) → the post office delivers it to the *recipient* box (formal parameter).

**Key rule:** Actual and formal parameters must match in:
1. Number (count of parameters)
2. Type (int with int, float with float)
3. Order (1st actual → 1st formal, etc.)

**They can have different names!** The values are copied, not the names.

**Exam tip:** "Actual parameters" = arguments in the function call. "Formal parameters" = parameters in the function definition/header.`,

  "co3-q2": `**Breaking the problem: extract each digit, accumulate the sum**

\`\`\`c
int sumDigits(int n) {
  int sum = 0;
  while(n > 0) {
    sum += n % 10;  // add last digit
    n /= 10;        // remove last digit
  }
  return sum;
}
\`\`\`

**Example:** sumDigits(1234) → 1+2+3+4 = 10

**Function design principle:** Single responsibility — this function does exactly ONE thing.

**Tip:** This function returns an \`int\` — declare its return type correctly. If it modified nothing outside, no pointer needed.`,

  "co3-q3": `**Fibonacci is naturally self-similar — perfect for recursion!**

\`\`\`c
int fib(int n) {
  if(n == 0) return 0;  // base case 1
  if(n == 1) return 1;  // base case 2
  return fib(n-1) + fib(n-2);  // recursive case
}
\`\`\`

**⚠ Warning:** This is exponentially slow — O(2ⁿ) time! For large n, use iteration instead.

**Call tree for fib(4):**
fib(4) → fib(3)+fib(2) → (fib(2)+fib(1))+(fib(1)+fib(0)) → ...

**Base cases are CRITICAL** — without them, recursion runs forever (stack overflow).

**Why iterative is better here:** fib(5) recalculates fib(3) 2 times, fib(2) 3 times — lots of waste!`,

  "co3-q4": `**Declaration = promise. Definition = fulfillment.**

**Function Declaration (Prototype):**
\`int add(int a, int b);\` — tells the compiler: "this function exists and looks like this"

**Function Definition:**
\`int add(int a, int b) { return a+b; }\` — the actual code implementation

**When is a declaration required?**
- If the function is defined *after* it's called → need a prototype before main
- If the function is defined *before* it's called → prototype is optional

**Analogy:** Declaration = announcing you'll give a speech. Definition = actually giving the speech.`,

  "co3-q5": `**Storage class = WHERE it lives + HOW LONG it lives + WHO can see it**

**4 storage classes — mnemonic ARSE:**
- **A**uto: default for locals, stack, dies when function returns
- **R**egister: stored in CPU register (fastest!), can't take its address (&)
- **S**tatic: persists between calls, initialised to 0 automatically, one-time initialisation
- **E**xtern: shared across multiple files, defined elsewhere

**Key exam question:** *Which storage class retains its value between function calls?* → \`static\`

**Default behaviour:** Local variables without a class keyword are \`auto\` automatically.`,

  "co3-q6": `**Recursion = a function calling itself with a SMALLER problem**

**Two mandatory parts:**
1. **Base case** — stops the recursion (\`n == 0\` or \`n == 1\` for factorial)
2. **Recursive case** — calls itself with a smaller input

**Factorial trace:**
\`\`\`
factorial(4)
= 4 × factorial(3)
= 4 × 3 × factorial(2)
= 4 × 3 × 2 × factorial(1)
= 4 × 3 × 2 × 1 = 24
\`\`\`

**Stack overflow risk:** Each recursive call uses stack space — too many levels crashes the program.

**Mnemonic:** Recursion needs a **BASE** (stop) and a **STEP** (reduce input).`,

  "co3-q7": `**nCr = n! / (r! × (n−r)!) — use your factorial function 3 times!**

\`\`\`c
int factorial(int n) {
  if(n == 0 || n == 1) return 1;
  return n * factorial(n-1);
}
int nCr_val = factorial(n) / (factorial(r) * factorial(n-r));
\`\`\`

**Example:** ⁵C₂ = 5!/(2!×3!) = 120/(2×6) = **10**

**DRY principle:** Don't Repeat Yourself — write factorial once, call it 3 times. This is the power of functions!

**nCr is always a whole number** — integer division is safe here.

**Tip:** nCr(n, 0) = 1 and nCr(n, n) = 1 — good boundary test cases.`,

  "co3-q8": `**x raised to n using recursion:**

\`\`\`c
float power(float x, int n) {
  if(n == 0) return 1.0;  // base: anything^0 = 1
  return x * power(x, n-1);
}
\`\`\`

**Stack trace for power(2,3):**
power(2,3) → 2×power(2,2) → 2×2×power(2,1) → 2×2×2×power(2,0) → ×1 = **8** ✓

**Same as \`pow(x,n)\` in math.h** — but implemented manually to understand recursion.

**Base case memory:** x⁰ = 1 for ANY x (except 0⁰ which is undefined in math, but 1 in most programs).`,

  "co3-q9": `**4 storage classes — just the names and one-line description:**

1. **auto** — default for local variables, stored on stack
2. **register** — suggest to compiler to use CPU register (hint, not guarantee)
3. **static** — retains value between function calls, initialised once to 0
4. **extern** — variable is defined in another file/scope

**Scope vs Lifetime:**
- *Scope* = where you can USE the variable (local vs global)
- *Lifetime* = how long the variable EXISTS in memory

**Default:** Locals → auto, Globals → extern (implicit)`,

  "co3-q10": `**Call by Value = photocopied document. Call by Reference = original document.**

- **By value:** Function gets a COPY → changes don't affect the original variable
- **By reference:** Function gets the ADDRESS (pointer) → changes DIRECTLY affect the original

\`\`\`c
// By reference — using pointers:
void swap(int *a, int *b) {
  int temp = *a; *a = *b; *b = temp;
}
swap(&x, &y);  // pass addresses
\`\`\`

**By value swap FAILS:** Only the copies inside the function are swapped.

**Key point:** Arrays are ALWAYS passed by reference in C (automatically sends address, not copy).`,

  "co3-q11": `**Factorial by recursion — asked in almost every exam paper! Memorise this cold:**

\`\`\`c
int factorial(int n) {
  if(n == 0 || n == 1)
    return 1;         // base case
  return n * factorial(n-1);  // recursive case
}
\`\`\`

**Call stack visualisation:**
\`\`\`
factorial(4) → 4 × factorial(3)
                    3 × factorial(2)
                          2 × factorial(1)
                                return 1
Result builds up: 1 → 2 → 6 → 24
\`\`\`

**Remember:** 0! = 1 (by mathematical definition). Handle both \`n==0\` and \`n==1\` for safety.`,

  "co3-q12": `**Call by value — function gets a safe copy**

**Advantages:**
- Original variable is protected — the function can't accidentally modify it
- Safe: side effects are contained inside the function

**Disadvantages:**
- Can't modify the original variable from inside the function
- Slightly slow for large data (copying takes time)

**When to use by value:** When you want to process data without modifying the original.

**Real-world analogy:** Giving someone a *photocopy* of your passport — they can write on it, but your original is safe.

**Remember:** All simple types (int, float, char) pass by value by default in C.`,

  "co3-q13": `**4 function types based on arguments and return values:**

| Type | Arguments | Return Value | Example |
|------|-----------|-------------|---------|
| 1 | No | No (void) | \`void printMsg()\` |
| 2 | No | Yes | \`int getNum()\` |
| 3 | Yes | No (void) | \`void printSquare(int n)\` |
| 4 | Yes | Yes | \`int add(int a, int b)\` |

**Mnemonic:** No-No, No-Yes, Yes-No, Yes-Yes (NNNY)

**Type 1 use case:** Printing banners, headers — no input needed, nothing to return.
**Type 4 use case:** Mathematical calculations — needs input, produces a result.`,

  "co3-q14": `**Swap using pointers = the classic call-by-reference demonstration**

\`\`\`c
void swap(int *a, int *b) {
  int temp = *a;   // dereference: get value at address
  *a = *b;
  *b = temp;
}
// Call:
swap(&x, &y);      // & gives address of x and y
\`\`\`

**Read \`*a\` as:** "the value stored at the address \`a\` points to"
**Read \`&x\` as:** "the address of variable x"

**Why by value swap fails:**
\`\`\`c
void badSwap(int a, int b) { // a and b are COPIES
  int temp = a; a = b; b = temp; // copies swap, originals unchanged!
}
\`\`\`

**Tip:** Use \`*\` to dereference, \`&\` to get address — opposite operations.`,

  "co3-q15": `**Factorial recursion — the most frequently repeated CO3 question!**

If you know ONE recursion program by heart, make it this:
\`\`\`c
int factorial(int n) {
  if(n <= 1) return 1;      // handles n=0 AND n=1
  return n * factorial(n-1);
}
\`\`\`

**Trace for n=5:** 5→4→3→2→1→BASE: 1×2×3×4×5 = **120**

**Elegant one-liner:** \`return (n<=1) ? 1 : n * factorial(n-1);\`

**For print variant:** Print inside the call to show step-by-step breakdown.

**Key difference from loops:** Recursion uses the call stack to "remember" where it left off — no explicit loop variable needed.`,

  "co3-q16": `**Short answer: recursion is elegant but costly!**

**Problems with recursion:**
1. Each call uses **stack space** → deep recursion → stack overflow
2. **Function call overhead** (save registers, jump, return) — slower than a loop
3. **Redundant computations** — Fibonacci recalculates the same values many times

**When iteration is better:** Simple repetition (factorial, sum, array traversal)

**When recursion IS genuinely better:**
- Tree / graph traversal (inherently recursive structure)
- Divide-and-conquer algorithms (Quick Sort, Merge Sort)
- Problems with branching (towers of Hanoi)

**Mnemonic:** *Recursion is Recursive but Risky (3R)* — prefer iteration unless structure demands recursion.`,

  "co3-q17": `**Complete storage class comparison — the "explain all with examples" answer:**

| Class | Default Value | Scope | Lifetime | Where Stored |
|-------|-------------|-------|----------|-------------|
| auto | Garbage | Local | Function | Stack |
| register | Garbage | Local | Function | CPU Register |
| static | **0** | Local/Global | Program | Data segment |
| extern | **0** | Global | Program | Data segment |

**Key unique behaviour — static:**
\`\`\`c
void counter() {
  static int c = 0;  // initialized ONCE, not reset each call!
  printf("%d ", ++c);
}
// Calling counter() 3 times prints: 1 2 3
\`\`\`

**Exam tip:** The static variable example always scores maximum marks.`,

  "co3-q18": `**Quick Sort = Divide, Conquer, Combine using a pivot**

**Algorithm:**
1. Choose a **pivot** element (commonly the last element)
2. **Partition:** Move elements smaller than pivot to left, larger to right
3. **Recursively** sort left and right sub-arrays

**Time complexity:**
| Case | Complexity |
|------|-----------|
| Best | O(n log n) |
| Average | O(n log n) |
| Worst | O(n²) — when already sorted |

**Space:** O(log n) for recursion stack

**Mnemonic:** Quick Sort's secret is the **PIVOT** — like a balance point on a seesaw. Items lighter go left, heavier go right.`,

  "co3-q19": `**3 phases of every function — Declaration → Definition → Call (DDC)**

For area of circle:

**1. Declaration (prototype):** \`float areaCircle(float r);\`
**2. Definition (implementation):**
\`\`\`c
float areaCircle(float r) {
  return 3.14159 * r * r;
}
\`\`\`
**3. Call:** \`area = areaCircle(5.0);\`

**Formula:** A = πr² → use \`3.14159\` or \`M_PI\` (from math.h)

**Why declaration before definition?** Without prototype, function must appear before any call.

**Tip:** For full marks, draw the flow diagram: main calls → areaCircle returns → main prints.`,

  "co3-q20": `**Sorting with a user-defined function = modular programming in action**

**Bubble Sort function signature:** \`void bubbleSort(int arr[], int n)\`

**Why no pointer notation for arrays?** Arrays are automatically passed by reference — changes inside the function affect the original array!

**Bubble Sort logic:**
\`\`\`c
for(i=0; i<n-1; i++)
  for(j=0; j<n-i-1; j++)
    if(arr[j] > arr[j+1]) {
      // swap arr[j] and arr[j+1]
      int t=arr[j]; arr[j]=arr[j+1]; arr[j+1]=t;
    }
\`\`\`

**Verify with exam array [10,07,08,09,01,05]:** Sorted result = [01,05,07,08,09,10] ✓`,

  "co3-q21": `**The most commonly examined recursion program — know it perfectly:**

\`\`\`c
int factorial(int n) {
  if(n == 0 || n == 1)  // base case (CRITICAL!)
    return 1;
  return n * factorial(n-1);  // recursive call
}
\`\`\`

**Mathematical facts:**
- 0! = 1 (by convention/definition)
- 1! = 1
- 5! = 120, 6! = 720, 10! = 3628800

**Why base case for BOTH 0 AND 1?** Handles edge cases cleanly.

**This function appears in multiple exams (Nov 2022, Apr 2023, Aug 2023, Jul 2025) — memorise it 100%!**`,

  "co3-q22": `**Final exam storage class question — same core as co3-q17, very high-frequency topic!**

**Unique behaviour of each class (what to demonstrate in code):**

**static** — retains value between calls (most unique, most interesting):
\`\`\`c
void count() {
  static int c = 0;  // initialised only ONCE
  printf("%d\\n", ++c);  // outputs 1, 2, 3... on successive calls
}
\`\`\`

**register** — hints for CPU register storage:
\`\`\`c
register int i;  // used in tight loops for speed
for(i = 0; i < 1000000; i++) { ... }
\`\`\`

**Exam strategy:** Lead with static (most marks-worthy), then extern, then auto, register last.`,
}
