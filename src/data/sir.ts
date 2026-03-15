import type { CourseOutcome } from "@/types"

export const sir: CourseOutcome = {
  id: "sir",
  title: "Sir's Reference Programs",
  shortTitle: "Reference",
  description: "Curated C programs from reference sheets — basics to recursion",
  icon: "Star",
  color: "rose",
  questions: [

    // ─────────────────────────────────────────────────────────────
    // Reference PDF 1 — Basic I/O, Operators, Swap
    // ─────────────────────────────────────────────────────────────

    {
      id: "sir-q1",
      title: "Sum of Three Numbers",
      source: "Reference PDF 1",
      blocks: [
        {
          type: "text",
          content:
            "Reads three integers `a`, `b`, `c` from the user and prints their sum using basic `scanf` and `printf`.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main() {
    int a,b,c, sum;
    printf("Enter 3 numbers\\n");
    scanf("%d%d%d",&a,&b,&c);
    sum=a+b+c;
    printf("Result is: %d",sum);
}`,
        },
      ],
    },

    {
      id: "sir-q2",
      title: "Even or Odd Using Ternary Operator",
      source: "Reference PDF 1",
      blocks: [
        {
          type: "text",
          content:
            "Checks whether a number is even or odd using the ternary (conditional) operator directly inside `printf`.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main() {
    int number;
    printf("Enter a number:");
    scanf("%d ",&number);
    (number%2==0) ? printf("Number is Even") : printf("Number is Odd");
}`,
        },
      ],
    },

    {
      id: "sir-q3",
      title: "Largest of Three Numbers Using Conditional Operator",
      source: "Reference PDF 1",
      blocks: [
        {
          type: "text",
          content:
            "Finds the largest of three numbers using nested ternary operators in a single expression assigned to `greatest`.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main() {
    int a,b,c,greatest;
    printf("Enter three numbers:\\n");
    scanf("%d%d%d",&a,&b,&c);
    greatest = (a>b) ? (a>c ? a:c) : (b>c ? b:c);
    printf("The greatest Number is: %d", greatest);
}`,
        },
      ],
    },

    {
      id: "sir-q4",
      title: "Area of Circle and Rectangle",
      source: "Reference PDF 1",
      blocks: [
        {
          type: "text",
          content:
            "Calculates the area of a circle (PI × r²) and a rectangle (length × breadth) in sequence. Note: the second `printf` contains a copy-paste bug — it prints \"Area of circle\" instead of \"Area of rectangle\".",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int radius,length,breadth;
    float area;
    const float PI = 3.14;
    printf("Enter radius:");
    scanf("%d",&radius);
    area = PI * radius * radius;
    printf("Area of circle is:%f",area);
    printf("\\nEnter length and breadth:");
    scanf("%d%d",&length,&breadth);
    area = length * breadth;
    printf("Area of circle is:%f",area);
}`,
        },
      ],
    },

    {
      id: "sir-q5",
      title: "Swap Two Numbers Using Temporary Variable",
      source: "Reference PDF 1",
      blocks: [
        {
          type: "text",
          content:
            "Swaps the values of two integers using a third temporary variable `t`. The classic three-step swap: save, overwrite, restore.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main() {
    int a,b,t;
    printf("Enter any two numbers\\n");
    scanf("%d%d",&a,&b);
    t=a;
    a=b;
    b=t;
    printf("Answer is=%d%d",a,b);
}`,
        },
      ],
    },

    {
      id: "sir-q6",
      title: "Swap Two Numbers Without Third Variable",
      source: "Reference PDF 1",
      blocks: [
        {
          type: "text",
          content:
            "Swaps two numbers using arithmetic operations (add and subtract) without using a temporary variable.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main() {
    int a,b;
    printf("Enter the value of A and B");
    scanf("%d%d",&a,&b);
    printf("\\nBefore Swapping: A=%d and B=%d",a,b);
    a=a+b;
    b=a-b;
    a=a-b;
    printf("\\nAfter Swapping: A=%d and B=%d",a,b);
}`,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // Reference PDF 2 — Pages 1–5: Core Programs
    // ─────────────────────────────────────────────────────────────

    {
      id: "sir-q7",
      title: "Leap Year Check",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Checks if a given year is a leap year using the standard rule: divisible by 400, OR divisible by 4 but not by 100.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int year;
    printf("Enter a year:");
    scanf("%d",&year);
    if((year%400==0) || ((year%4==0) && (year%100!=0)))
        printf("Leap Year");
    else
        printf("Not a leap year");
}`,
        },
      ],
    },

    {
      id: "sir-q8",
      title: "Largest of Three Numbers Using if-else",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Finds the largest of three numbers using an if–else-if ladder. Compares all three values in sequence.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int a,b,c;
    printf("Enter three numbers:");
    scanf("%d%d%d",&a,&b,&c);
    if(a>b && a>c)
        printf("largest=%d", a);
    else if (b>a && b>c)
        printf("largest=%d", b);
    else
        printf("largest=%d", c);
}`,
        },
      ],
    },

    {
      id: "sir-q9",
      title: "Roots of Quadratic Equation",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Computes the roots of ax² + bx + c = 0 using the quadratic formula. Handles both real roots (d ≥ 0) and complex roots (d < 0). Note: the formula has a precedence bug — division should use parentheses around `2*a`.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
#include<math.h>
void main(){
    float a,b,c,d,r1,r2,rp,ip;
    printf("Enter value of a,b,c:");
    scanf("%f%f%f",&a,&b,&c);
    d = sqrt(b*b - 4*a*c);
    if(d>=0)
    {
        r1 = (-b+sqrt(d))/2*a;
        r2 = (-b-sqrt(d))/2*a;
        printf("Roots are:%0.2f and %0.2f",r1,r2);
    }
    else
    {
        d = -d;
        rp = -b/2*a;
        ip = d/2*a;
        printf("Roots are:%0.2f+i%0.2f and %0.2f-i%0.2f",rp,ip,rp,ip);
    }
}`,
        },
      ],
    },

    {
      id: "sir-q10",
      title: "Basic Calculator Using Switch-Case",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "A menu-driven calculator for addition, subtraction, multiplication, and division using `switch-case` inside a `do-while` loop. Note: case 4 has a bug — it prints undeclared variable `d` instead of `c`; also `getch()` requires `conio.h` which is not included.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int a,b,choice;
    float c;
    char ans='n';
    do
    {
        printf("Enter two numbers:");
        scanf("%d%d",&a,&b);
        printf("\\n1.ADDITION\\n2.SUBTRACTION\\n3.MULTIPLICATION\\n4.DIVISION");
        printf("\\nEnter your choice : ");
        scanf("%d",&choice);
        switch(choice)
        {
            case 1:c=a+b;
                printf("Result: %d",c);
                break;
            case 2:c=a-b;
                printf("Result: %d",c);
                break;
            case 3:c=a*b;
                printf("Result: %d",c);
                break;
            case 4:c=a/b;
                printf("Result: %f",d);
                break;
            default:printf("Wrong Choice");
        }
        printf("\\nDo you want to continue???");
        ans = getch();
    }while(ans=='y' || ans=='Y');
}`,
        },
      ],
    },

    {
      id: "sir-q11",
      title: "Sum of First N Numbers",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Calculates the sum of the first N positive integers (1 + 2 + 3 + … + N) using a `for` loop accumulator.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int n,i,sum=0;
    printf("Enter the value of n:");
    scanf("%d",&n);
    for(i=1;i<=n;i++)
        sum=sum+i;
    printf("Sum of n numbers: %d",sum);
}`,
        },
      ],
    },

    {
      id: "sir-q12",
      title: "Factorial of a Number Using For Loop",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Computes n! (n factorial) using a `for` loop running from 1 to n, multiplying into a running product.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int i,n,fact=1;
    printf("Enter the no");
    scanf("%d",&n);
    for(i=1;i<=n;i++)
        fact=fact*i;
    printf("Factorial is: %d",fact);
}`,
        },
      ],
    },

    {
      id: "sir-q13",
      title: "Fibonacci Series",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Prints the Fibonacci series for N terms using three variables `a`, `b`, `c`. Note: the loop condition uses `n-2` but the input is stored in `no` — `n` is undeclared (bug in original).",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main()
{
    int i,no,a=0,b=1,c;
    printf("Enter the value of n:");
    scanf("%d",&no);
    printf("%d\\n%d\\n",a,b);
    for(i=1;i<=n-2;i++)
    {
        c=a+b;
        printf("%d",c);
        a=b;
        b=c;
    }
}`,
        },
      ],
    },

    {
      id: "sir-q14",
      title: "Factors of a Number",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Prints all factors of a number N (integers from 2 to N−1 that divide N evenly) using a `while` loop.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int n,i;
    printf("Enter a number:");
    scanf("%d",&n);
    printf("Factors are:\\n");
    i=2;
    while(i<=n-1)
    {
        if(n%i==0)
            printf("%d\\n",i);
        i++;
    }
}`,
        },
      ],
    },

    {
      id: "sir-q15",
      title: "Prime Number Check",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Checks if a number is prime by testing divisibility from 2 to N/2 using a flag variable `prime`.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int n,i=2,prime=1;
    printf("Enter the No:");
    scanf("%d",&n);
    while(i<=n/2)
    {
        if(n%i==0)
        {
            prime=0;
            break;
        }
        i++;
    }
    if(prime==1)
        printf("%d is a Prime no",n);
    else
        printf("%d is not a Prime no",n);
}`,
        },
      ],
    },

    {
      id: "sir-q16",
      title: "Print All Prime Numbers from 1 to 100",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Prints every prime number between 2 and 100 using nested loops — an outer `for` loop for candidates and an inner `while` loop for divisibility testing.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int limit=100,i,n,prime;
    for(n=2;n<=limit;n++)
    {
        i=2,prime=1;
        while(i<=n/2)
        {
            if(n%i==0)
            {
                prime=0;
                break;
            }
            i++;
        }
        if(prime==1)
        {
            printf("%d\\n",n);
        }
    }
}`,
        },
      ],
    },

    {
      id: "sir-q17",
      title: "Sum and Product of Digits of a Number",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Extracts each digit from a number using `% 10` and `/ 10`, accumulating their sum and product using a `do-while` loop.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int n,dig,sum=0,p=1;
    printf("Enter any number:");
    scanf("%d",&n);
    do
    {
        dig=n%10;
        sum=sum+dig;
        p=p*dig;
        n=n/10;
    }while(n!=0);
    printf("Sum is:%d",sum);
    printf("Product is:%d",p);
}`,
        },
      ],
    },

    {
      id: "sir-q18",
      title: "Armstrong Number Check",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Checks if a number is an Armstrong number — where the sum of the cubes of its digits equals the number itself (e.g., 153 = 1³ + 5³ + 3³).",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int n,cp,dig,sum=0;
    printf("Enter any number:");
    scanf("%d",&n);
    cp=n;
    do
    {
        dig=n%10;
        sum=sum+dig*dig*dig;
        n=n/10;
    }while(n!=0);
    if(sum==cp)
        printf("Armstrong Number");
    else
        printf("Not an Armstrong Number");
}`,
        },
      ],
    },

    {
      id: "sir-q19",
      title: "Print All Armstrong Numbers from 1 to 1000",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Intended to print all Armstrong numbers from 1 to 1000. Contains two bugs: the inner `while` loop modifies `n` (corrupting the outer `for` loop counter), and `printf` uses undeclared variable `no` instead of `temp`.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int n,temp,dig,sum,limit=1000;
    for(n=1; n<=limit; n++)
    {
        temp=n;
        sum=0;
        while(n>0)
        {
            dig=n%10;
            sum=sum+(dig*dig*dig);
            n=n/10;
        }
        if(temp==sum)
            printf("%d\\n",no);
    }
}`,
        },
      ],
    },

    {
      id: "sir-q20",
      title: "Reverse of a Number",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Reverses the digits of a number by repeatedly extracting the last digit with `% 10` and building the reversed number with `rev = rev * 10 + digit`.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int n,digit,rev=0;
    printf("Enter a number");
    scanf("%d",&n);
    while(n!=0)
    {
        digit=n%10;
        rev=rev*10+digit;
        n=n/10;
    }
    printf("Reverse is: %d",rev);
}`,
        },
      ],
    },

    {
      id: "sir-q21",
      title: "Palindrome Number Check",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Checks if a number is a palindrome by reversing it and comparing with the original value stored in `og`.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int n,digit,rev=0,og;
    printf("Enter a number:");
    scanf("%d",&n);
    og = n;
    while(n >= 1)
    {
        digit = n % 10;
        rev = rev * 10 + digit;
        n = n / 10;
    }
    if(og==rev)
        printf("Palindrome Number");
    else
        printf("Not a Palindrome Number");
}`,
        },
      ],
    },

    {
      id: "sir-q22",
      title: "LCM and GCD of Two Numbers (Brute Force)",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Finds LCM and GCD of two numbers using a brute-force approach: LCM starts at max and increments until divisible by both; GCD starts at min and decrements until it divides both.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int n1,n2,lcm,gcd;
    printf("Enter two numbers:");
    scanf("%d%d",&n1,&n2);
    if(n1>n2)
    {
        lcm=n1;
        gcd=n2;
    }
    else
    {
        lcm=n2;
        gcd=n1;
    }
    while(lcm%n1!=0 || lcm%n2!=0)
        lcm++;
    while(n1%gcd!=0 || n2%gcd!=0)
        gcd--;
    printf("LCM=%d\\nGCD=%d",lcm,gcd);
}`,
        },
      ],
    },

    {
      id: "sir-q23",
      title: "Binary Equivalent of a Decimal Number",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Converts a decimal integer to its binary representation by extracting remainders when dividing by 2 and storing them as a long integer decimal (e.g., decimal 6 → stored as 110).",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    long int bn = 0;
    int digit, n, temp = 1;
    printf("Enter a Number:");
    scanf("%d",&n);
    while(n!=0){
        digit = n%2;
        bn = bn + digit * temp;
        temp = temp * 10;
        n = n/2;
    }
    printf("Binary Number is: %ld",bn);
}`,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // Reference PDF 2 — Page 6: Additional Programs
    // ─────────────────────────────────────────────────────────────

    {
      id: "sir-q24",
      title: "Even or Odd Using if-else",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Checks if a number is even or odd using an `if-else` statement, printing the number value in the output message.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int num;
    printf("Enter the number:");
    scanf("%d",&num);
    if(num%2==0)
        printf("\\n%d is even number",num);
    else
        printf("\\n%d is odd number",num);
}`,
        },
      ],
    },

    {
      id: "sir-q25",
      title: "Largest of Three Numbers Using Nested if-else",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Finds the largest of three numbers using nested `if-else` blocks — an outer check of a vs b, then inner checks against c.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int a,b,c;
    printf("Enter three integers:");
    scanf("%d%d%d",&a,&b,&c);
    if(a>b){
        if(a>c)
            printf("a is the biggest");
        else
            printf("c is biggest");
    }
    else {
        if(b>c)
            printf("b is biggest");
        else
            printf("c is biggest");
    }
}`,
        },
      ],
    },

    {
      id: "sir-q26",
      title: "Check if Character is an Alphabet",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Reads a character and checks whether it is a letter by comparing its ASCII value against the lowercase and uppercase alphabet ranges.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    char c;
    printf("Enter a character:");
    scanf("%c",&c);
    if((c>='a' && c<='z') || (c>='A' && c<='Z'))
        printf("%c is an alphabet",c);
    else
        printf("%c is not an alphabet",c);
}`,
        },
      ],
    },

    {
      id: "sir-q27",
      title: "Month Name Using Switch-Case",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Prints the name of a month given its number (1–12) using a `switch-case` statement with a `default` for invalid input.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int month;
    printf("Enter a month number:");
    scanf("%d",&month);
    switch(month){
        case 1:printf("January"); break;
        case 2:printf("February"); break;
        case 3:printf("March"); break;
        case 4:printf("April"); break;
        case 5:printf("May"); break;
        case 6:printf("June"); break;
        case 7:printf("July"); break;
        case 8:printf("August"); break;
        case 9:printf("September"); break;
        case 10:printf("October"); break;
        case 11:printf("November"); break;
        case 12:printf("December"); break;
        default: printf("Invalid number");
    }
}`,
        },
      ],
    },

    {
      id: "sir-q28",
      title: "Count Number of Digits",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Counts the digits in an integer by dividing by 10 repeatedly until zero. Note: the program is missing the final `printf` to display the count (bug in original).",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int n,count=0;
    printf("Enter number:");
    scanf("%d",&n);
    while(n!=0){
        count++;
        n=n/10;
    }
}`,
        },
      ],
    },

    {
      id: "sir-q29",
      title: "Multiplication Table",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Prints the multiplication table for all numbers from 1 to N. Each row i shows i×1 through i×10, separated by tabs.",
        },
        {
          type: "code",
          language: "c",
          content: `#include <stdio.h>
void main(){
    int n,i,j;
    printf("Enter an integer:");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=10;j++)
            printf("%d\\t", i*j);
        printf("\\n");
    }
}`,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // Reference PDF 2 — Pages 7–11: Pattern Programs
    // ─────────────────────────────────────────────────────────────

    {
      id: "sir-q30",
      title: "Pattern: Descending Star Rows",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Prints a descending staircase of stars: 4 stars on the first row, then 3, 2, 1. Uses a single loop with `n` decremented inside. Note: `inti,j,n=4;` is a typo for `int i,j,n=4;` (preserved as written).\n\nOutput:\n```\n****\n***\n**\n*\n```",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    inti,j,n=4;
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            printf("*");
        }
        n--;
        printf("\\n");
    }
}`,
        },
      ],
    },

    {
      id: "sir-q31",
      title: "Pattern: Diamond (Hourglass) of Stars",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Prints a diamond/hourglass shape: an upward-growing triangle of stars followed by a downward-shrinking one. Stars are separated by spaces. Hardcoded for 3 rows per half.\n\nOutput:\n```\n  * \n * * \n* * * \n * * \n  * \n```",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int i,j;
    for(i=1;i<=3;i++){
        for(j=1;j<=3-i;j++){
            printf(" ");
        }
        for(j=1;j<=i;j++){
            printf("* ");
        }
        printf("\\n");
    }
    for(i=3-1;i>=1;i--) {//for downward pyramid
        for(j=1;j<=3-i;j++){
            printf(" ");
        }
        for(j=i;j>=1;j--){
            printf("* ");
        }
        printf("\\n");
    }
}`,
        },
      ],
    },

    {
      id: "sir-q32",
      title: "Pattern: Numeric Palindrome Pyramid",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Prints a centered pyramid where row i shows numbers ascending 1..i then descending back to 1, creating a palindrome. Hardcoded for 4 rows.\n\nOutput:\n```\n   1\n  121\n 12321\n1234321\n```",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int i,j;
    for(i=1;i<=4;i++){
        for(j=1;j<=4-i;j++){
            printf(" ");
        }
        for(j=1;j<=i;j++){
            printf("%d",j);
        }
        for(j=i-1;j>=1;j--){
            printf("%d",j);
        }
        printf("\\n");
    }
}`,
        },
      ],
    },

    {
      id: "sir-q33",
      title: "Pattern: Right Triangle of Stars (User Input)",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Prints a right-angle triangle of stars where the number of rows is entered by the user. Row i contains i stars.\n\nOutput (n=4):\n```\n*\n**\n***\n****\n```",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int no,i,j;
    printf("Enter no of rows\\n");
    scanf("%d",&no);
    for(i=1;i<=no;i++){
        for(j=1;j<=i;j++){
            printf("*");
        }
        printf("\\n");
    }
}`,
        },
      ],
    },

    {
      id: "sir-q34",
      title: "Pattern: Right Triangle of Numbers (User Input)",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Prints a right-angle triangle of numbers where row i shows digits 1 through i. Number of rows is user-defined.\n\nOutput (n=4):\n```\n1\n12\n123\n1234\n```",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int no,i,j;
    printf("Enter no of rows\\n");
    scanf("%d",&no);
    for(i=1;i<=no;i++){
        for(j=1;j<=i;j++){
            printf("%d",j);
        }
        printf("\\n");
    }
}`,
        },
      ],
    },

    {
      id: "sir-q35",
      title: "Pattern: Pascal's Triangle",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Prints Pascal's triangle using binomial coefficients C(i,j) = i! / (j! × (i−j)!), computed via a helper function `facto()`. Each row i (0-indexed) contains values C(i,0) through C(i,i).\n\nOutput (n=4):\n```\n   1 \n  1 1 \n 1 2 1 \n1 3 3 1 \n```",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
int facto(int no){
    int i,fact=1;
    for(i=1;i<=no;i++){
        fact=fact*i;
    }
    return fact;
}
void main(){
    int no,fa,i,j;
    printf("Enter no\\n");
    scanf("%d",&no);
    for(i=0;i<no;i++){
        for(j=0;j<no-i;j++){
            printf(" ");
        }
        for(j=0;j<=i;j++){
            fa=facto(i)/(facto(j)*facto(i-j));
            printf("%d ",fa);
        }
        printf("\\n");
    }
}`,
        },
      ],
    },

    {
      id: "sir-q36",
      title: "Pattern: Alphabet Palindrome Pyramid",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Prints a centered pyramid where row i shows letters A..X..A (ascending then descending), creating an alphabet palindrome. Uses ASCII math: `j + 64` gives 'A' for j=1, 'B' for j=2, etc.\n\nOutput (n=4):\n```\n   A\n  ABA\n ABCBA\nABCDCBA\n```",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int i,j,n;
    printf("Enter the number of lines:");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=n-i;j++){
            printf(" ");
        }
        for(j=1;j<=i;j++){
            printf("%c",(char)(j+64));
        }
        for(j=i-1;j>=1;j--){
            printf("%c",(char)(j+64));
        }
        printf("\\n");
    }
}`,
        },
      ],
    },

    {
      id: "sir-q37",
      title: "Pattern: Full Diamond of Stars (User Input)",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Prints a full diamond shape of stars. Upper half grows from 1 star to n stars; lower half shrinks back to 1. Each row has leading spaces for centering.\n\nOutput (n=4):\n```\n   *\n  **\n ***\n****\n ***\n  **\n   *\n```",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main()
{
    int i,j,n;
    printf("Enter the number of * in the middle line:");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=n-i;j++){
            printf(" ");
        }
        for(j=1;j<=i;j++){
            printf("*");
        }
        printf("\\n");
    }
    for(i=n-1;i>=1;i--) {//for downward pattern
        for(j=1;j<=n-i;j++){
            printf(" ");
        }
        for(j=1;j<=i;j++){
            printf("*");
        }
        printf("\\n");
    }
}`,
        },
      ],
    },

    {
      id: "sir-q38",
      title: "Pattern: Sequential Alphabet Triangle",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Prints a triangle where letters are assigned sequentially across all rows — A in row 1, B C in row 2, D E F in row 3, etc. Counter `k` never resets between rows.\n\nOutput (n=4):\n```\nA \nB C \nD E F \nG H I J \n```",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int i,j,n,k;
    printf("Enter the number of lines:");
    scanf("%d",&n);
    for(i=1,k=1;i<=n;i++){
        for(j=1;j<=i;j++){
            printf("%c ",64+k);
            k++;
        }
        printf("\\n");
    }
}`,
        },
      ],
    },

    {
      id: "sir-q39",
      title: "Pattern: Repeated Alphabet Rows",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Prints a triangle where every row starts from A: row 1 = A, row 2 = A B, row 3 = A B C, etc. Counter `k` resets to 1 at the start of each row. Hardcoded for n=5.\n\nOutput:\n```\nA \nA B \nA B C \nA B C D \nA B C D E \n```",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int i,j,n=5,k;
    for(i=1;i<=n;i++){
        for(j=1,k=1;j<=i;j++){
            printf("%c ",64+k);
            k++;
        }
        printf("\\n");
    }
}`,
        },
      ],
    },

    {
      id: "sir-q40",
      title: "Pattern: Mixed Numbers and Alphabets",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Prints a right-aligned pattern where each row i contains numbers 1..i followed by alphabets A..(i−1). Uses three inner loops: leading spaces, then digits, then letters.\n\nOutput (n=4):\n```\n   1\n  12A\n 123AB\n1234ABC\n```",
        },
        {
          type: "code",
          language: "c",
          content: `#include <stdio.h>
void main(){
    int i,j,k,l,n, alpha=65;
    printf("Enter line no:");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=n;j>i;j--){
            printf(" ");
        }
        for(k=1;k<=i;k++) {
            printf("%d",k);
        }
        for(alpha=65,l=1;l<i;l++,alpha++) {
            printf("%c",(char)alpha);
        }
        printf("\\n");
    }
}`,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // Reference PDF 2 — Pages 12–13: Series Programs
    // ─────────────────────────────────────────────────────────────

    {
      id: "sir-q41",
      title: "Series: 1¹ + 2² + 3³ + … + nⁿ",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Computes the sum of the series where each term is i raised to the power i (1¹ + 2² + 3³ + … + nⁿ). Uses `pow(i, i)` from `math.h`.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
#include<math.h>
void main(){
    int n, i, sum = 0;
    printf("Enter any integer:");
    scanf("%d",&n);
    for(i=1;i<=n;i++)
        sum = sum + pow (i,i);
    printf("\\nSum = %d",sum);
}`,
        },
      ],
    },

    {
      id: "sir-q42",
      title: "Series: 1/2 + 3/4 + 5/6 + … (n terms)",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Computes the sum of n terms of the series ½ + ¾ + ⅚ + … where each term has an odd numerator and the next even denominator. Uses two loop variables `i` (count) and `j` (odd numerator, increments by 2).",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int n,i,j;
    float sum = 0;
    printf("Enter any integer:");
    scanf("%d",&n);
    for(i=1,j=1;i<=n;i++,j=j+2)
        sum = sum + (float)j/(j+1);
    printf("\\nSum=%f",sum);
}`,
        },
      ],
    },

    {
      id: "sir-q43",
      title: "Series: 1/2 − 3/4 + 5/6 − 7/8 + … (n terms)",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Computes the alternating sum ½ − ¾ + ⅚ − ⅞ + … for n terms. A sign variable `s` starts at +1 and flips with `s = -s` each iteration.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    int n,i,j,s=1;
    float sum = 0;
    printf("Enter any integer:");
    scanf("%d",&n);
    for(i=1,j=1;i<=n;i++,j=j+2)
    {
        sum = sum + s * (float)j/(j+1);
        s=-s;
    }
    printf("\\nSum=%f",sum);
}`,
        },
      ],
    },

    {
      id: "sir-q44",
      title: "Series: 1/1! + 2/2! + 3/3! + … + n/n!",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Computes the sum of n terms of the series where each term is i divided by i factorial. Running factorial is maintained in `f` (multiplied by `i` each iteration).",
        },
        {
          type: "code",
          language: "c",
          content: `#include <stdio.h>
void main(){
    float n,sum=0, f=1, i;
    printf("Enter the value:");
    scanf("%f",&n);
    for(i=1;i<=n;i++)
    {
        f = f * i;
        sum = sum + (i/f);
    }
    printf("Sum of the series= %f",sum);
}`,
        },
      ],
    },

    {
      id: "sir-q45",
      title: "Series: x − x/2! + x/3! − x/4! + … (n terms)",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Computes the sum of x/1! − x/2! + x/3! − x/4! + … for n terms with alternating signs. Running factorial `f` and sign variable `s` (flips each iteration) are used.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
void main(){
    float n,sum=0, f=1, i, s=1,x;
    printf("Enter value of n and x:");
    scanf("%f%f", &n,&x);
    for(i = 1; i <= n; i++) {
        f = f * i;
        sum = sum + s*(x/f);
        s=-s;
    }
    printf("Sum of the series= %f",sum);
}`,
        },
      ],
    },

    {
      id: "sir-q46",
      title: "Series: sin(x) = x − x³/3! + x⁵/5! − … (Taylor Series)",
      source: "Reference PDF 2",
      blocks: [
        {
          type: "text",
          content:
            "Computes sin(x) using the Taylor series. Input angle is in degrees and converted to radians. The loop steps by 2 (odd powers only: 3, 5, 7…). Factorial `fact` accumulates as `fact × i × (i−1)` each step.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
#include<math.h>
void main(){
    int i,n,fact=1,sign=-1;
    float x,num,sum,term;
    printf("Enter the angle in degrees and value of n");
    scanf("%f%d",&x,&n);
    x=x*3.14/180;
    sum=x;
    for(i=3;i<=n;i=i+2)
    {
        fact=fact*i*(i-1);
        term=pow(x,i)/fact;
        sum=sum+sign*term;
        sign=-sign;
    }
    printf("Value of series= %f",sum);
}`,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // Reference PDF 3 — Functions and Recursion
    // ─────────────────────────────────────────────────────────────

    {
      id: "sir-q47",
      title: "Sum of Two Numbers Using Functions",
      source: "Reference PDF 3",
      blocks: [
        {
          type: "text",
          content:
            "Adds two numbers by passing them to a user-defined function `add(a, b)` which returns their sum. Demonstrates function prototype, definition, and call.",
        },
        {
          type: "code",
          language: "c",
          content: `#include <stdio.h>
int add(int, int);
void main(){
    int num1,num2,sum;
    printf("Enters two numbers");
    scanf("%d%d",&num1,&num2);
    sum=add(num1,num2);
    printf("Sum=%d",sum);
}
int add(int a,int b) {
    int c;
    c=a + b;
    return c;
}`,
        },
      ],
    },

    {
      id: "sir-q48",
      title: "Factorial of a Number Using Functions",
      source: "Reference PDF 3",
      blocks: [
        {
          type: "text",
          content:
            "Computes n! by calling a user-defined function `fact(no)` that uses a `for` loop internally and returns the factorial value.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
int fact (int);
void main()
{
    int n,f;
    printf("Enter the values of n:");
    scanf("%d",&n);
    f=fact(n);
    printf("Factorial=%d",f);
}
int fact (int no)
{
    int i,f=1;
    for(i=1;i<=no;i++)
        f=f*i;
    return f;
}`,
        },
      ],
    },

    {
      id: "sir-q49",
      title: "LCM and GCD Using Functions (Euclidean Algorithm)",
      source: "Reference PDF 3",
      blocks: [
        {
          type: "text",
          content:
            "Computes GCD using the Euclidean algorithm (repeated remainder) inside a helper function `lcm_gcd()`, then derives LCM = n1 × n2 / GCD. More efficient than the brute-force method.",
        },
        {
          type: "code",
          language: "c",
          content: `#include <stdio.h>
void lcm_gcd(int,int);
void main() {
    int no1,no2;
    printf("Enter two Numbers\\n");
    scanf("%d %d",&no1,&no2);
    lcm_gcd(no1,no2);
}
void lcm_gcd(int n1,int n2) {
    int gcd,lcm,rem,numerator,denominator;
    if (n1>n2) {
        numerator=n1;
        denominator=n2;
    }
    else {
        numerator=n2;
        denominator=n1;
    }
    rem=numerator%denominator;
    while (rem!=0) {
        numerator=denominator;
        denominator=rem;
        rem=numerator%denominator;
    }
    gcd = denominator;
    lcm = n1*n2/gcd;
    printf("GCD of %d and %d = %d\\n",n1,n2,gcd);
    printf("LCM of %d and %d = %d\\n",n1,n2,lcm);
}`,
        },
      ],
    },

    {
      id: "sir-q50",
      title: "Factorial Using Recursion",
      source: "Reference PDF 3",
      blocks: [
        {
          type: "text",
          content:
            "Computes n! using a recursive function. Base case: `n == 1` returns 1. Recursive case: `n * fact(n-1)`. Note: base case is n==1, so fact(0) would cause infinite recursion.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
int fact(int);
void main() {
    int n;
    printf("Enter a number");
    scanf("%d",&n);
    printf("n!=%d",fact(n));
}
int fact(int n) {
    if(n==1)
        return 1;
    else
        return n*fact(n-1);
}`,
        },
      ],
    },

    {
      id: "sir-q51",
      title: "Fibonacci Series Using Recursion",
      source: "Reference PDF 3",
      blocks: [
        {
          type: "text",
          content:
            "Prints the first N Fibonacci numbers using a recursive function. Base cases: `fibonacci(0) = 0`, `fibonacci(1) = 1`. Recursive: `fibonacci(n-1) + fibonacci(n-2)`.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
int fibonacci(int);
void main() {
    int n, i = 0, c;
    printf("Enter A value:");
    scanf("%d",&n);
    printf("Fibonacci series\\n");
    for ( c = 1 ; c <= n ; c++ ) {
        printf("%d\\n", fibonacci(i));
        i++;
    }
}
int fibonacci(int n){
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
    else
        return (fibonacci(n-1) + fibonacci(n-2));
}`,
        },
      ],
    },

    {
      id: "sir-q52",
      title: "Power (x^y) Using Recursion",
      source: "Reference PDF 3",
      blocks: [
        {
          type: "text",
          content:
            "Computes base raised to the power index (base^index) using a recursive function `pwr()`. Base case: `index == 0` returns 1. Recursive: `base * pwr(base, index-1)`.",
        },
        {
          type: "code",
          language: "c",
          content: `#include<stdio.h>
int pwr(int, int);
void main() {
    int bs,in,ans;
    printf("Enter base and index");
    scanf("%d%d",&bs,&in);
    ans = pwr(bs,in);
    printf("Result=%d",ans);
}
int pwr(int base, int index) {
    if(index==0)
        return 1;
    else
        return (base*pwr(base,index-1));
}`,
        },
      ],
    },

  ],
}
