/**
 * Quick notes and study tips for Sir's Reference Programs (sir-q1 to sir-q52).
 * Structured as: What it does | Key concept | Exam tip / Watch out.
 * Pattern programs include sample output. Recursion programs include call stack.
 */
export const sirNotes: Record<string, string> = {

  "sir-q1": `**What it does:** Reads three integers a, b, c and prints their sum.
**Key concept:** \`scanf("%d%d%d", &a, &b, &c)\` reads three ints in one call; any whitespace (space/newline/tab) acts as separator.
**Exam tip:** Always match format specifiers — use \`%d\` for int, \`%f\` for float. \`void main()\` is non-standard; prefer \`int main()\` in exams but sir uses void throughout.`,

  "sir-q2": `**What it does:** Checks even or odd using the ternary conditional operator directly inside \`printf\`.
**Key concept:** Ternary operator: \`condition ? value_if_true : value_if_false\`. Here neither branch is stored — the result is passed straight to \`printf\`.
**Watch out:** Note the trailing space in \`scanf("%d ",&number)\` — unusual but harmless. The ternary is used as a statement, not an expression assigned to a variable.`,

  "sir-q3": `**What it does:** Finds the largest of three numbers in a single expression using nested ternary operators.
**Key concept:** Nested ternary: \`(a>b) ? (a>c ? a:c) : (b>c ? b:c)\` — if a wins the first comparison, compare a and c; otherwise compare b and c.
**Exam tip:** Read inside-out. Outer ? picks between a-group and b-group; inner ? picks the winner of each group. The result is stored in \`greatest\`.`,

  "sir-q4": `**What it does:** Computes area of a circle (π × r²) and a rectangle (l × b), printing both.
**Key concept:** \`const float PI = 3.14;\` declares a compile-time constant. Area of circle = PI × r × r. Area of rectangle = length × breadth.
**Watch out:** BUG — the second \`printf\` says "Area of circle is" instead of "Area of rectangle is". Classic copy-paste error. Also \`radius\` is int but \`area\` is float — the multiplication result is implicitly converted.`,

  "sir-q5": `**What it does:** Swaps values of two integers using a temporary variable t.
**Key concept:** Classic 3-step swap: \`t=a; a=b; b=t;\`. The temp variable "parks" one value while the other is overwritten.
**Exam tip:** This is the safest swap — no overflow risk. Note \`printf("Answer is=%d%d",a,b)\` has no space/separator between the two values in the output format.`,

  "sir-q6": `**What it does:** Swaps two numbers using arithmetic (add/subtract) without a third variable.
**Key concept:** Steps: \`a=a+b\` (a holds sum), \`b=a-b\` (b = sum − old b = old a), \`a=a-b\` (a = sum − new b = old b).
**Watch out:** Risk of integer overflow if both numbers are very large (their sum exceeds INT_MAX). The XOR method \`a^=b; b^=a; a^=b;\` avoids overflow but fails if a and b point to the same memory.`,

  "sir-q7": `**What it does:** Checks if a year is a leap year using the standard Gregorian calendar rule.
**Key concept:** Leap year: divisible by 400 OR (divisible by 4 AND not divisible by 100). Short-circuit evaluation with \`||\` and \`&&\`.
**Exam tip:** Common mistake — forgetting the century rule. 1900 is NOT a leap year (divisible by 100 but not 400); 2000 IS (divisible by 400). Memorise: every 4 years EXCEPT every 100 years UNLESS every 400 years.`,

  "sir-q8": `**What it does:** Finds the largest of three numbers using an if–else-if ladder.
**Key concept:** if–else-if: conditions checked top to bottom; first true branch executes, rest are skipped. The final \`else\` is the default (c is largest).
**Watch out:** This doesn't handle ties correctly — if a==b==c==5, it prints c (last branch). The condition \`b>a && b>c\` fails for ties and falls through to c.`,

  "sir-q9": `**What it does:** Computes the roots of ax²+bx+c=0, handling both real and complex cases.
**Key concept:** Discriminant d = b²−4ac. If d≥0: two real roots r1=(-b+√d)/2a, r2=(-b-√d)/2a. If d<0: complex roots with real part -b/2a and imaginary part √(-d)/2a.
**Watch out:** BUG — operator precedence! \`(-b+sqrt(d))/2*a\` means divide by 2 then multiply by a; should be \`/( 2*a)\`. Requires \`#include<math.h>\` for \`sqrt()\`.`,

  "sir-q10": `**What it does:** A menu-driven calculator (+, −, ×, ÷) using switch-case in a do-while loop that repeats until user enters 'n'.
**Key concept:** \`switch-case\` for menu dispatch; \`do-while\` ensures at least one iteration; \`getch()\` reads a character without Enter.
**Watch out:** Two bugs: (1) case 4 prints undeclared variable \`d\` — should be \`c\`. (2) \`getch()\` needs \`#include<conio.h>\` which is missing. Also result \`c\` is float but printed with \`%d\` in cases 1–3 (should be \`%f\`).`,

  "sir-q11": `**What it does:** Computes 1+2+3+…+N using a for loop accumulator initialised to 0.
**Key concept:** Accumulator pattern: \`sum=0;\` then \`sum=sum+i;\` each iteration. Equivalent to the formula N×(N+1)/2.
**Exam tip:** For N=100, sum=5050 (Gauss's formula). Know both: loop approach and formula approach. The loop approach is O(N); formula is O(1).`,

  "sir-q12": `**What it does:** Computes n! = 1×2×3×…×n using a for loop with a running product.
**Key concept:** Running product: initialise \`fact=1\` (not 0!), then \`fact=fact*i\` each iteration from i=1 to n.
**Exam tip:** fact must be 1, not 0 (multiplying by 0 gives 0 forever). For n=0, the loop doesn't execute, fact stays 1 — correct since 0!=1. Watch for int overflow: 13! = 6,227,020,800 > INT_MAX (~2.1 billion).`,

  "sir-q13": `**What it does:** Intended to print the Fibonacci series for n terms (0, 1, 1, 2, 3, 5, 8, …).
**Key concept:** Three-variable method: c=a+b, then shift a=b, b=c. First two terms (0 and 1) printed before the loop.
**Watch out:** BUG — loop uses \`n-2\` but input was stored in \`no\`. Variable \`n\` is undeclared, causing a compile error. Fix: change \`n-2\` to \`no-2\`. The loop runs no-2 times because the first 2 terms are already printed.`,

  "sir-q14": `**What it does:** Prints all factors of N — integers from 2 to N−1 that divide N with no remainder.
**Key concept:** Factor check: \`n%i == 0\` means i is a factor. Loop from i=2 (skips 1) to n-1 (skips n itself).
**Exam tip:** To include 1 and n as factors, change bounds to \`i=1; i<=n\`. For a number like 12, factors are 2, 3, 4, 6. 1 and 12 are excluded in this program.`,

  "sir-q15": `**What it does:** Checks if n is prime using a flag variable and while loop testing divisibility up to n/2.
**Key concept:** Prime = divisible only by 1 and itself. Flag \`prime=1\` initially; set to 0 if any divisor found; \`break\` exits early.
**Exam tip:** Testing up to n/2 is sufficient (any factor > n/2 has a paired factor < n/2). More efficient: test up to √n. 2 is prime (while loop condition i<=n/2=1 is false immediately, prime stays 1 ✓).`,

  "sir-q16": `**What it does:** Prints every prime number from 2 to 100 using nested loops.
**Key concept:** Outer for loop iterates candidates 2–100. Inner while resets i=2, prime=1 for each candidate and tests divisibility up to n/2.
**Exam tip:** Note the comma expression \`i=2,prime=1\` inside the for — this initialises both variables in one statement. Equivalent to writing them as separate lines before the inner loop.`,

  "sir-q17": `**What it does:** Extracts each digit of a number using \`%10\` and \`/10\`, accumulating their sum and product.
**Key concept:** \`do-while\` ensures at least one iteration (handles single-digit input). \`dig=n%10\` gets last digit; \`n=n/10\` removes it.
**Exam tip:** For n=123: iteration 1: dig=3, sum=3, p=3, n=12. Iteration 2: dig=2, sum=5, p=6, n=1. Iteration 3: dig=1, sum=6, p=6, n=0. Loop ends. Initialise p=1 (not 0).`,

  "sir-q18": `**What it does:** Checks if a number is an Armstrong number (sum of cubes of its digits equals the number).
**Key concept:** Save original in \`cp\`. Extract digits with \`%10\`/\`/10\`. Accumulate \`sum += dig*dig*dig\`. Compare sum with cp.
**Exam tip:** Known Armstrong numbers (3-digit): 153 (1+125+27), 370 (27+343+0), 371 (27+343+1), 407 (64+0+343). Always save the original before modifying n in the loop.`,

  "sir-q19": `**What it does:** Intended to print all Armstrong numbers from 1 to 1000.
**Key concept:** Outer for loop iterates n=1 to 1000. Inner while extracts digits and sums cubes. Compare sum with saved original.
**Watch out:** Two bugs: (1) Inner \`while(n>0)\` uses and destroys \`n\` (the outer loop counter) — should use \`temp\` in the while condition. (2) \`printf("%d\\n",no)\` — \`no\` is undeclared; should be \`temp\`. The program will not run correctly as written.`,

  "sir-q20": `**What it does:** Reverses the digits of a number by building rev = rev*10 + last_digit each iteration.
**Key concept:** Pattern: \`digit=n%10\` (peel last digit), \`rev=rev*10+digit\` (append to rev), \`n=n/10\` (remove last digit). Initialise rev=0.
**Exam tip:** For n=1234: rev builds as 4 → 43 → 432 → 4321. The loop terminates when n becomes 0. Trailing zeros are lost (e.g., 1200 reversed = 21, not 0021).`,

  "sir-q21": `**What it does:** Checks if a number is a palindrome by reversing it and comparing to the saved original \`og\`.
**Key concept:** Save \`og=n\`, reverse using the same technique as sir-q20, then check \`og==rev\`.
**Exam tip:** Palindromes: 121, 1221, 12321, 11, 1. The while condition is \`n >= 1\` (not \`n != 0\`) — both work the same for positive integers. Negative numbers are never palindromes.`,

  "sir-q22": `**What it does:** Finds LCM and GCD using brute force — LCM increments from max(n1,n2) until divisible by both; GCD decrements from min(n1,n2) until it divides both.
**Key concept:** LCM: smallest number divisible by both. GCD: largest number that divides both. Brute force works but is slow.
**Exam tip:** Compare with sir-q49 which uses the Euclidean algorithm (much faster). For n1=12, n2=8: LCM=24, GCD=4. The while condition \`lcm%n1!=0 || lcm%n2!=0\` keeps going until BOTH are satisfied.`,

  "sir-q23": `**What it does:** Converts a decimal integer to binary by storing binary digits as a long int (e.g., decimal 6 → stored as long int 110).
**Key concept:** Repeatedly divide by 2: remainder gives each binary bit. Multiply by place value (1, 10, 100…) to build the decimal representation of binary digits.
**Watch out:** This is NOT true binary storage — it's a visual trick. The number 110 stored in \`bn\` is one hundred and ten, not binary 110. Use \`%ld\` to print it. Actual binary conversion uses bit manipulation.`,

  "sir-q24": `**What it does:** Checks if a number is even or odd using if-else, printing the number value in the output (e.g., "5 is odd number").
**Key concept:** \`if(num%2==0)\` — modulo 2 gives 0 for even, 1 for odd. if-else provides two branches.
**Exam tip:** Contrast with sir-q2 which uses ternary operator and prints generic "Even"/"Odd". This version includes the actual number in the message. Note: \`\\n\` at the start of the printf puts a newline before the output.`,

  "sir-q25": `**What it does:** Finds the largest of three numbers using nested if-else blocks (a decision tree structure).
**Key concept:** Outer \`if(a>b)\` splits into two sub-problems. Inner ifs compare the "winner" against c. Creates 4 leaf nodes in the decision tree.
**Exam tip:** Decision tree: {a>b? → {a>c? → print a; else print c}} else {b>c? → print b; else print c}. This is more readable than the if-else-if ladder when drawing flowcharts.`,

  "sir-q26": `**What it does:** Checks if a character is a letter (a–z or A–Z) by comparing its ASCII value to the alphabet bounds.
**Key concept:** In C, \`char\` is stored as int (ASCII). Ranges: 'a'=97 to 'z'=122 (lowercase), 'A'=65 to 'Z'=90 (uppercase). The OR condition checks both ranges.
**Exam tip:** Alternatively: \`isalpha(c)\` from \`<ctype.h>\`. Digits (0–9) are ASCII 48–57 — checked with \`isdigit()\`. Note: \`scanf("%c",&c)\` reads exactly one character including spaces.`,

  "sir-q27": `**What it does:** Prints the English name of a month given its number (1–12) using a switch-case lookup.
**Key concept:** \`switch(month)\` jumps directly to the matching case. \`break\` prevents fall-through. \`default\` handles out-of-range input.
**Exam tip:** If \`break\` is omitted, execution falls through to the next case. E.g., without break in case 1, entering 1 would print "JanuaryFebruary". Always include \`break\` unless fall-through is intentional.`,

  "sir-q28": `**What it does:** Intended to count the number of digits in an integer by dividing by 10 until zero.
**Key concept:** Each division by 10 removes one digit; \`count++\` each time. Loop stops when n becomes 0.
**Watch out:** BUG — missing \`printf("Count=%d\\n",count);\` at the end. The program counts but never prints the result. Also fails for n=0: the while loop doesn't execute (0 has 1 digit but count stays 0).`,

  "sir-q29": `**What it does:** Prints the multiplication table for all numbers 1 to N. Each row i shows i×1, i×2, … i×10 separated by tabs.
**Key concept:** Nested loops: outer \`for(i=1;i<=n;i++)\` for each number; inner \`for(j=1;j<=10;j++)\` for each multiple. \`\\t\` separates columns.
**Exam tip:** The inner loop always goes to 10 (fixed), not to i or n. Each cell is i*j. \`printf("\\n")\` after each row. For N=3, prints tables of 1, 2, and 3.`,

  "sir-q30": `**What it does:** Prints a descending staircase of stars: 4 stars, then 3, then 2, then 1 (hardcoded n=4).
**Key concept:** Single outer loop with n decremented inside — unusual but works. The outer loop condition \`i<n\` and inner loop condition \`j<n\` both use the same (shrinking) n.
**Watch out:** BUG — \`inti,j,n=4;\` is a typo for \`int i,j,n=4;\`. Also, modifying the loop bound \`n\` inside the loop is tricky to analyse.

Output:
****
***
**
*`,

  "sir-q31": `**What it does:** Prints a diamond/hourglass of stars: upper half grows from 1 to 3 stars, lower half shrinks back (hardcoded 3 rows per half).
**Key concept:** Two for loops: one ascending (i=1 to 3) and one descending (i=2 down to 1). Leading spaces create the centred pyramid. Stars printed as "* " (star + space).
**Exam tip:**
Output:
  *
 * *
* * *
 * *
  *
Spaces before stars = 3-i (for upper half). Lower half: spaces = 3-i, stars count = i.`,

  "sir-q32": `**What it does:** Prints a centred pyramid where row i shows digits 1 2 3 … i … 3 2 1 (palindrome pattern). Hardcoded for 4 rows.
**Key concept:** Three inner loops per row: (1) 4-i leading spaces, (2) ascending j=1 to i, (3) descending j=i-1 to 1. No space between digits.
**Exam tip:**
Output:
   1
  121
 12321
1234321
Row 3 (i=3): 1 space + "123" + "21" = " 12321". The descending loop starts at i-1 (not i) to avoid repeating the peak digit.`,

  "sir-q33": `**What it does:** Prints a right-angle triangle of stars where the number of rows is entered by the user. Row i has exactly i stars.
**Key concept:** Nested loops: outer for rows (i=1 to no), inner for columns (j=1 to i). Inner loop bound increases with i.
**Exam tip:**
Output (n=4):
*
**
***
****
The inner loop \`j<=i\` is the key pattern. For each row, print i stars then a newline. This is the most common exam pattern question.`,

  "sir-q34": `**What it does:** Prints a right-angle triangle of numbers where row i shows 1, 2, 3, … i. Number of rows is user-defined.
**Key concept:** Same loop structure as sir-q33 but prints \`j\` (the column counter) instead of a star.
**Exam tip:**
Output (n=4):
1
12
123
1234
j resets to 1 at the start of each row (inner loop always starts at j=1), so each row starts from 1. No space between digits since \`printf("%d",j)\` has no separator.`,

  "sir-q35": `**What it does:** Prints Pascal's triangle using binomial coefficients C(i,j) = i! / (j! × (i-j)!), computed via a helper factorial function.
**Key concept:** Each entry is C(row, col). Row 0 = {1}, Row 1 = {1,1}, Row 2 = {1,2,1}. The function \`facto()\` computes factorial iteratively.
**Exam tip:**
Output (n=4):
   1
  1 1
 1 2 1
1 3 3 1
Each entry = sum of two entries directly above it (triangle rule). Leading spaces = no-i for alignment. i is 0-indexed here.`,

  "sir-q36": `**What it does:** Prints a centred pyramid where each row i shows letters A B C … X … C B A (palindrome). User inputs number of rows.
**Key concept:** ASCII math: \`(char)(j+64)\` converts j=1→'A', j=2→'B', etc. (since 'A'=65=1+64). Three loops: leading spaces, ascending letters, descending letters.
**Exam tip:**
Output (n=4):
   A
  ABA
 ABCBA
ABCDCBA
Row 3 (i=3): 1 space + "ABC" (j=1,2,3) + "BA" (j=2,1) = " ABCBA". Descending starts at i-1 to avoid repeating the peak letter.`,

  "sir-q37": `**What it does:** Prints a full right-aligned diamond of stars where the user specifies the width of the middle row. Upper half grows, lower half shrinks.
**Key concept:** Two loops: upper (i=1 to n) and lower (i=n-1 down to 1). Leading spaces = n-i. Stars = i.
**Exam tip:**
Output (n=4):
   *
  **
 ***
****
 ***
  **
   *
Middle row (i=4): 0 spaces + 4 stars. Each row above/below adds a space and removes a star.`,

  "sir-q38": `**What it does:** Prints a triangle where letters are assigned sequentially across all rows — A in row 1, B C in row 2, D E F in row 3, G H I J in row 4.
**Key concept:** Counter \`k\` is initialised once in the outer loop header (\`i=1,k=1\`) and increments with each letter — it never resets between rows.
**Exam tip:**
Output (n=4):
A
B C
D E F
G H I J
Contrast with sir-q39 where k resets to 1 each row. Here k is shared across all rows giving sequential letters.`,

  "sir-q39": `**What it does:** Prints a triangle where every row starts from A: row 1 = A, row 2 = A B, row 3 = A B C, etc. Hardcoded n=5.
**Key concept:** Counter \`k\` is reset to 1 at the start of every row's inner loop (\`j=1,k=1\`). This means each row independently prints A, B, C, …
**Exam tip:**
Output:
A
A B
A B C
A B C D
A B C D E
Contrast with sir-q38: here k resets each row. The inner loop condition \`j<=i\` controls how many letters per row.`,

  "sir-q40": `**What it does:** Prints a right-aligned pattern combining sequential numbers followed by letters in each row: 1 | 12A | 123AB | 1234ABC.
**Key concept:** Three inner loops per row: (1) n-i leading spaces, (2) digits 1..i, (3) letters A..(i-1)th. Row 1 has no letters because the third loop condition \`l<1\` is false.
**Exam tip:**
Output (n=4):
   1
  12A
 123AB
1234ABC
Row i has (n-i) spaces, i digits starting from 1, and (i-1) letters starting from A. The alpha variable resets to 65 ('A') each row.`,

  "sir-q41": `**What it does:** Computes the sum 1¹ + 2² + 3³ + … + nⁿ using \`pow(i, i)\` from \`math.h\`.
**Key concept:** \`pow(base, exp)\` returns a double. The result is added to integer \`sum\` — implicit truncation for large values.
**Watch out:** For small n the result fits in int, but values grow extremely fast: 4⁴=256, 5⁵=3125, 6⁶=46656, 7⁷=823543. Use long or double for large n. Requires \`#include<math.h>\`.`,

  "sir-q42": `**What it does:** Computes the sum ½ + ¾ + ⅚ + … for n terms, where term i = (2i-1) / (2i).
**Key concept:** Two loop variables: \`i\` counts terms, \`j\` gives the odd numerator (j=1,3,5,7… via j+=2). Each term is \`(float)j/(j+1)\`.
**Exam tip:** The \`(float)\` cast forces floating-point division. Without it, \`j/(j+1)\` is integer division = 0 for all terms (since j < j+1 always). For n=3: 1/2 + 3/4 + 5/6 = 0.5 + 0.75 + 0.833 = 2.083.`,

  "sir-q43": `**What it does:** Computes the alternating sum ½ − ¾ + ⅚ − ⅞ + … for n terms.
**Key concept:** Same structure as sir-q42 but multiplied by sign variable \`s\`. \`s\` starts at 1, flips with \`s=-s\` after each term.
**Exam tip:** Term sequence: +½, -¾, +⅚, -⅞, … First term is positive (s=1), second is negative (s=-1 after first flip). For large n, the series converges to approximately ln(2) ≈ 0.693 (alternating harmonic-like series).`,

  "sir-q44": `**What it does:** Computes the sum 1/1! + 2/2! + 3/3! + … + n/n! using a running factorial.
**Key concept:** Running factorial: \`f = f*i\` each iteration (no separate function call). Each term is \`i/f\` (float division). All variables declared as float.
**Exam tip:** The series converges to e-1 ≈ 1.71828. For n=5: 1/1 + 2/2 + 3/6 + 4/24 + 5/120 = 1 + 1 + 0.5 + 0.167 + 0.042 ≈ 2.708. Note: 2/2! = 2/2 = 1, not 2/4.`,

  "sir-q45": `**What it does:** Computes x/1! − x/2! + x/3! − x/4! + … for n terms (alternating series with x as numerator).
**Key concept:** Running factorial \`f\`, alternating sign \`s\` (starts at +1). Each term = s × (x/f). Sign flips with \`s=-s\`.
**Exam tip:** Contrast with sir-q46 (sin series): here numerator is always x; in sin series numerator is x^i. For x=1: 1/1 − 1/2 + 1/6 − 1/24 + … converges to 1 - 1/e ≈ 0.632.`,

  "sir-q46": `**What it does:** Computes sin(x) using the Taylor series: x − x³/3! + x⁵/5! − x⁷/7! + … Input angle is in degrees, converted to radians.
**Key concept:** Loop steps by 2 (odd powers only: i=3,5,7…). Factorial accumulates as \`fact = fact × i × (i-1)\`. First term (x) added before loop as \`sum=x\`.
**Watch out:** \`sign\` starts at -1 (correct, since x³/3! is subtracted). \`x = x*3.14/180\` converts degrees to radians. Requires \`#include<math.h>\` for \`pow()\`. Variables \`num\` is declared but never used.`,

  "sir-q47": `**What it does:** Adds two numbers by passing them to a user-defined function \`add(a,b)\` which returns their sum.
**Key concept:** Three parts of a function: (1) prototype \`int add(int, int);\` before main, (2) call \`add(num1,num2)\`, (3) definition after main. Return type is int.
**Exam tip:** Prototype parameter names are optional — \`int add(int, int);\` is valid. In the definition, parameter names can differ from the call-site variable names (call by value — values are copied).`,

  "sir-q48": `**What it does:** Computes n! by calling a helper function \`fact(no)\` that uses a for loop internally.
**Key concept:** Function receives a copy of n (call by value). The loop inside the function uses the local parameter \`no\`. Returns the factorial as int.
**Exam tip:** Note the function variable \`f\` inside \`fact()\` shadows nothing — it's a new local variable. The prototype \`int fact(int);\` at the top uses only the type (parameter name omitted — valid C). The caller's variable \`n\` is unaffected by the function's \`no\`.`,

  "sir-q49": `**What it does:** Computes GCD using the Euclidean algorithm and derives LCM = n1×n2/GCD via a helper function.
**Key concept:** Euclidean algorithm: divide larger by smaller, take remainder; repeat until remainder = 0; the last non-zero denominator is GCD.
**Exam tip:** Step-by-step for GCD(48,18): 48%18=12 → 18%12=6 → 12%6=0 → GCD=6. LCM=48×18/6=144. This is O(log(min(n1,n2))) — far faster than the brute-force method in sir-q22.`,

  "sir-q50": `**What it does:** Computes n! using a recursive function with base case n==1 and recursive case n × fact(n-1).
**Key concept:** Recursion: function calls itself with a smaller argument until reaching the base case.
**Call stack for fact(4):**
fact(4) → 4 × fact(3)
         → 4 × 3 × fact(2)
         → 4 × 3 × 2 × fact(1)
         → 4 × 3 × 2 × 1 = 24
**Watch out:** Base case is n==1, NOT n==0. Calling \`fact(0)\` causes infinite recursion and a stack overflow crash.`,

  "sir-q51": `**What it does:** Prints the first N Fibonacci numbers using a recursive function. fibonacci(0)=0, fibonacci(1)=1, fibonacci(n)=fibonacci(n-1)+fibonacci(n-2).
**Key concept:** Two base cases: \`n==0\` returns 0, \`n==1\` returns 1. Recursive case adds the previous two values.
**Call stack for fibonacci(4):**
fib(4) = fib(3)+fib(2) = (fib(2)+fib(1))+(fib(1)+fib(0))
       = ((fib(1)+fib(0))+1)+(1+0) = (1+0+1)+1 = 3
**Watch out:** Exponential time O(2ⁿ) — each call branches into two. fib(30) makes over 1 million calls. The iterative version (sir-q13) is O(n).`,

  "sir-q52": `**What it does:** Computes base^index (x raised to power y) using a recursive function \`pwr(base, index)\`.
**Key concept:** Base case: any number to the power 0 = 1. Recursive: \`base × pwr(base, index-1)\` reduces index by 1 each call.
**Call stack for pwr(2,3):**
pwr(2,3) = 2 × pwr(2,2)
         = 2 × 2 × pwr(2,1)
         = 2 × 2 × 2 × pwr(2,0)
         = 2 × 2 × 2 × 1 = 8
**Exam tip:** Variable names \`bs\` (base) and \`in\` (index) in main differ from \`base\` and \`index\` in the function — valid since C uses call by value (values are copied on function call).`,
}
