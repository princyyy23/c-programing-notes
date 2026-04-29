import type { CourseOutcome } from "@/types"

export const module5: CourseOutcome = {
  id: "qb-m5",
  title: "Question Bank - Module 5: Structure and Union",
  shortTitle: "Module 5",
  description: "Structures, nested structures, arrays of structures, unions, and practical programs in C.",
  icon: "Layers",
  color: "emerald",
  questions: [
    {
      id: "qb-m5-q1",
      title: "Define structure. Apply nested structure and write a program to print details of student with data members: Roll_number, Name, percentage and date of Birth. Apply nested structure for date of Birth.",
      source: "Question Bank - Module 5",
      marks: 10,
      notes: `**Structure = user-defined data type that groups related variables of DIFFERENT types under one name**

**Syntax:**
\`\`\`c
struct TagName {
    datatype member1;
    datatype member2;
    ...
};
\`\`\`

**Nested structure = a structure inside another structure**
\`\`\`c
struct Date {          // inner structure
    int day, month, year;
};
struct Student {       // outer structure
    int rollNo;
    char name[50];
    float percentage;
    struct Date dob;   // nested — Date inside Student
};
\`\`\`

**Accessing nested members — use TWO dots:**
\`\`\`c
s.dob.day   // student → dob → day
s.dob.month
s.dob.year
\`\`\`

**Key differences from array:**
| | Array | Structure |
|--|-------|-----------|
| Data types | Same | Different |
| Access | Index [i] | Dot operator (.) |
| Size | Fixed element size | Sum of all member sizes |

**sizeof(struct Student)** = sizeof(int) + sizeof(char[50]) + sizeof(float) + sizeof(struct Date)`,
      blocks: [
        {
          type: "text",
          content:
            "A **structure** in C is a user-defined data type that allows grouping of variables of **different data types** under a single name. It is defined using the `struct` keyword.\n\n**Syntax:**\n```c\nstruct StructureName {\n    datatype member1;\n    datatype member2;\n    // ...\n};\n```\n\n**Accessing members:** Use the **dot operator (`.`)** — `variable.member`\n\n---\n\n**Nested Structure:**\nA nested structure is when one structure is used as a **member inside another structure**. This is useful when a member itself has multiple parts (e.g., Date of Birth has day, month, and year).\n\nIn this program:\n- `struct Date` stores `day`, `month`, `year`.\n- `struct Student` contains `rollNo`, `name`, `percentage`, and a nested `struct Date dob`.\n- Nested members are accessed using **two dot operators**: `s.dob.day`",
        },
        {
          type: "code",
          language: "c",
          title: "Nested structure — Student with Date of Birth",
          content: `#include<stdio.h>
#include<conio.h>

// Inner structure: Date of Birth
struct Date {
    int day;
    int month;
    int year;
};

// Outer structure: Student with nested Date
struct Student {
    int rollNo;
    char name[50];
    float percentage;
    struct Date dob;    // nested structure member
};

void main() {
    clrscr();
    struct Student s;

    // Input student details
    printf("Enter Roll Number: ");
    scanf("%d", &s.rollNo);

    printf("Enter Name: ");
    scanf(" %[^\\n]", s.name);    // read string with spaces

    printf("Enter Percentage: ");
    scanf("%f", &s.percentage);

    printf("Enter Date of Birth (DD MM YYYY): ");
    scanf("%d %d %d", &s.dob.day, &s.dob.month, &s.dob.year);

    // Display student details
    printf("\\n--- Student Details ---\\n");
    printf("Roll Number : %d\\n",   s.rollNo);
    printf("Name        : %s\\n",   s.name);
    printf("Percentage  : %.2f%%\\n", s.percentage);
    printf("Date of Birth: %02d/%02d/%04d\\n",
           s.dob.day, s.dob.month, s.dob.year);

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Nested structure memory layout",
          content: `graph TD
    subgraph "struct Student"
        A["rollNo (int)"]
        B["name (char[50])"]
        C["percentage (float)"]
        subgraph "struct Date  dob"
            D["dob.day (int)"]
            E["dob.month (int)"]
            F["dob.year (int)"]
        end
    end
    G["s.dob.day"] -->|"accesses"| D
    H["s.dob.month"] -->|"accesses"| E
    I["s.dob.year"] -->|"accesses"| F`,
        },
      ],
    },
    {
      id: "qb-m5-q2",
      title: "Write a program to read Title, author and price of 10 books using an array of structure and display the record.",
      source: "Question Bank - Module 5",
      marks: 5,
      notes: `**Array of structures = multiple structure variables stored in an array — perfect for a collection of records**

**Declaration:**
\`\`\`c
struct Book books[10];   // array of 10 Book structures
\`\`\`

**Accessing i-th book's title:**
\`\`\`c
books[i].title    // array index + dot operator
books[i].author
books[i].price
\`\`\`

**Input loop pattern:**
\`\`\`c
for(i = 0; i < 10; i++) {
    printf("Book %d:\\n", i+1);
    scanf("%s", books[i].title);
    scanf("%s", books[i].author);
    scanf("%f", &books[i].price);   // & for non-array types!
}
\`\`\`

**Common mistake:** Forgetting \`&\` for \`price\` (float) but NOT for \`title\`/\`author\` (char arrays — already addresses).

**Display tip:** Use formatted printf with column widths for a neat table:
\`\`\`c
printf("%-30s %-20s %.2f\\n", books[i].title, books[i].author, books[i].price);
\`\`\``,
      blocks: [
        {
          type: "text",
          content:
            "An **array of structures** allows us to store multiple records of the same structure type. Instead of declaring separate variables for each book, we declare one array that holds all 10 records.\n\n**Declaration:** `struct Book books[10];`\n\n**Access pattern:** `books[i].member` — combine the array index `[i]` with the dot operator `.` to access individual fields of each record.",
        },
        {
          type: "code",
          language: "c",
          title: "Array of structures — 10 Books",
          content: `#include<stdio.h>
#include<conio.h>

struct Book {
    char title[100];
    char author[50];
    float price;
};

void main() {
    clrscr();
    struct Book books[10];
    int i;

    // Input records for 10 books
    for (i = 0; i < 10; i++) {
        printf("\\nEnter details for Book %d:\\n", i + 1);

        printf("  Title  : ");
        scanf(" %[^\\n]", books[i].title);

        printf("  Author : ");
        scanf(" %[^\\n]", books[i].author);

        printf("  Price  : ");
        scanf("%f", &books[i].price);
    }

    // Display all records in tabular format
    printf("\\n%-5s %-30s %-20s %s\\n", "No.", "Title", "Author", "Price");
    printf("---------------------------------------------------------------\\n");

    for (i = 0; i < 10; i++) {
        printf("%-5d %-30s %-20s Rs.%.2f\\n",
               i + 1,
               books[i].title,
               books[i].author,
               books[i].price);
    }

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Array of structures layout",
          content: `graph LR
    subgraph "struct Book books[3] (shown for 3)"
        subgraph "books[0]"
            A0["title"] 
            B0["author"]
            C0["price"]
        end
        subgraph "books[1]"
            A1["title"]
            B1["author"]
            C1["price"]
        end
        subgraph "books[2]"
            A2["title"]
            B2["author"]
            C2["price"]
        end
    end`,
        },
      ],
    },
    {
      id: "qb-m5-q3",
      title: "Differentiate between a Structure and a Union.",
      source: "Question Bank - Module 5",
      marks: 5,
      notes: `**Core difference: Structure allocates memory for ALL members. Union allocates memory for the LARGEST member only.**

| Feature | Structure | Union |
|---------|-----------|-------|
| Keyword | \`struct\` | \`union\` |
| Memory | Sum of all members | Size of LARGEST member |
| Members active | All at once | Only ONE at a time |
| Access | All members always | Only last-written member reliable |
| Use case | Group different data (student record) | Memory-saving when only one field needed at a time |

**Memory example:**
\`\`\`c
struct S { int a; float b; char c; };
// Memory = 4 + 4 + 1 = 9 bytes (+ padding)

union U { int a; float b; char c; };
// Memory = 4 bytes (size of largest: int/float both 4)
\`\`\`

**Why unions exist:** Embedded/systems programming where RAM is scarce. Example: a network packet header where only one type of data is present at a time.

**Exam trick:** Draw the memory boxes!
- Struct: 3 separate boxes
- Union: 1 shared box (all members share same starting address)`,
      blocks: [
        {
          type: "text",
          content:
            "**Structure:**\nA `struct` allocates **separate memory** for **each member**. All members can hold their values simultaneously. The total size equals the sum of all member sizes (plus any padding).\n\n**Union:**\nA `union` allocates memory equal to the **size of its largest member**. All members **share the same memory location**. Only **one member holds a valid value at any time** — writing to one member overwrites the others.\n\n**Key Rule:**\n- `sizeof(struct S)` ≥ sum of all member sizes\n- `sizeof(union U)` = size of the **largest** member",
        },
        {
          type: "code",
          language: "c",
          title: "Structure vs Union — memory size demonstration",
          content: `#include<stdio.h>
#include<conio.h>

struct Sample {
    int   a;      // 4 bytes
    float b;      // 4 bytes
    char  c;      // 1 byte
};
// Total struct size = ~9 bytes (may be 12 with padding)

union Shared {
    int   a;      // 4 bytes
    float b;      // 4 bytes
    char  c;      // 1 byte
};
// Total union size = 4 bytes (size of largest member)

void main() {
    clrscr();

    struct Sample s;
    union  Shared u;

    printf("Size of struct = %d bytes\\n", sizeof(s));  // 12 (padded)
    printf("Size of union  = %d bytes\\n", sizeof(u));  //  4

    // Structure: all members hold values together
    s.a = 10;
    s.b = 3.14;
    s.c = 'X';
    printf("\\nStruct members (all valid):\\n");
    printf("s.a = %d, s.b = %.2f, s.c = %c\\n", s.a, s.b, s.c);

    // Union: only last written member is reliable
    u.a = 65;
    printf("\\nUnion after setting u.a = 65:\\n");
    printf("u.a = %d\\n", u.a);       // 65 (valid)

    u.b = 3.14;    // overwrites same memory
    printf("Union after setting u.b = 3.14:\\n");
    printf("u.b = %.2f\\n", u.b);     // 3.14 (valid)
    printf("u.a = %d\\n", u.a);       // garbage (overwritten!)

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Memory layout — Structure vs Union",
          content: `graph TD
    subgraph "struct Sample — separate memory"
        SA["int a<br/>4 bytes"] 
        SB["float b<br/>4 bytes"]
        SC["char c<br/>1 byte"]
    end
    subgraph "union Shared — shared memory (4 bytes total)"
        UA["int a<br/>─────────<br/>float b<br/>─────────<br/>char c<br/>(same 4 bytes)"]
    end`,
        },
      ],
    },
    {
      id: "qb-m5-q4",
      title: "Program to enter two points and then calculate the distance between them using structure.",
      source: "Question Bank - Module 5",
      marks: 5,
      notes: `**Distance formula: d = √((x2-x1)² + (y2-y1)²)**

**Structure for a 2D point:**
\`\`\`c
struct Point {
    float x;
    float y;
};
\`\`\`

**Two point variables:**
\`\`\`c
struct Point p1, p2;
\`\`\`

**Distance calculation:**
\`\`\`c
#include<math.h>
float dx = p2.x - p1.x;
float dy = p2.y - p1.y;
float dist = sqrt(dx*dx + dy*dy);
\`\`\`

**Requires \`#include<math.h>\` for \`sqrt()\`.**

**Example:**
- P1 = (0, 0), P2 = (3, 4)
- dx = 3-0 = 3, dy = 4-0 = 4
- dist = √(9 + 16) = √25 = **5.00**

**Classic 3-4-5 right triangle — easy verification!**

**Linking math library:** In some compilers you need to link with \`-lm\` flag. In Turbo C it's automatic.`,
      blocks: [
        {
          type: "text",
          content:
            "We define a `struct Point` with two float members `x` and `y` to represent a 2D coordinate. Two structure variables `p1` and `p2` represent the two points.\n\n**Distance Formula:**\n```\nd = √( (x2 - x1)² + (y2 - y1)² )\n```\n\nThe `sqrt()` function from `<math.h>` is used to compute the square root.",
        },
        {
          type: "code",
          language: "c",
          title: "Distance between two points using structure",
          content: `#include<stdio.h>
#include<conio.h>
#include<math.h>

struct Point {
    float x;
    float y;
};

void main() {
    clrscr();
    struct Point p1, p2;
    float dx, dy, distance;

    // Input Point 1
    printf("Enter coordinates of Point 1 (x y): ");
    scanf("%f %f", &p1.x, &p1.y);

    // Input Point 2
    printf("Enter coordinates of Point 2 (x y): ");
    scanf("%f %f", &p2.x, &p2.y);

    // Distance formula
    dx = p2.x - p1.x;
    dy = p2.y - p1.y;
    distance = sqrt(dx * dx + dy * dy);

    printf("\\nPoint 1 : (%.2f, %.2f)\\n", p1.x, p1.y);
    printf("Point 2 : (%.2f, %.2f)\\n", p2.x, p2.y);
    printf("Distance: %.4f\\n", distance);

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Distance between two points",
          content: `graph LR
    subgraph "Coordinate Plane"
        P1["P1 (x1, y1)"]
        P2["P2 (x2, y2)"]
        P1 -->|"dx = x2 - x1"| MID["Corner (x2, y1)"]
        MID -->|"dy = y2 - y1"| P2
        P1 -->|"d = √(dx² + dy²)"| P2
    end`,
        },
      ],
    },
    {
      id: "qb-m5-q5",
      title: "Write a complete program to implement a structure to store the details of 50 students and sort and display the information of students in descending order of their percentage.",
      source: "Question Bank - Module 5",
      marks: 10,
      notes: `**Sorting structures = sort by one field (percentage) but swap ENTIRE struct each time**

**Structure definition:**
\`\`\`c
struct Student {
    int rollNo;
    char name[50];
    float percentage;
};
\`\`\`

**Bubble sort in descending order — swap if left < right:**
\`\`\`c
for(i = 0; i < n-1; i++)
    for(j = 0; j < n-1-i; j++)
        if(s[j].percentage < s[j+1].percentage) {
            // swap ENTIRE struct
            struct Student temp = s[j];
            s[j] = s[j+1];
            s[j+1] = temp;
        }
\`\`\`

**Key insight:** When sorting structs, \`temp\` must also be a \`struct Student\` — swapping entire records, not just percentages!

**Descending vs Ascending:**
- Descending: \`if(s[j].percentage < s[j+1].percentage)\` → swap
- Ascending: \`if(s[j].percentage > s[j+1].percentage)\` → swap

**For n=50 use:** \`struct Student s[50];\`

**Display in tabular format** with column headers for readability.`,
      blocks: [
        {
          type: "text",
          content:
            "This program uses an **array of structures** to store 50 student records. Sorting is done using **Bubble Sort in descending order** based on the `percentage` field. When two students are swapped, the **entire structure** (all fields) is swapped — not just the percentage.\n\n**Student details stored:**\n- `rollNo` (int)\n- `name` (char array)\n- `percentage` (float)\n\n**Sort condition for descending order:** If `s[j].percentage < s[j+1].percentage`, swap the two records.",
        },
        {
          type: "code",
          language: "c",
          title: "Sort 50 students by percentage (descending)",
          content: `#include<stdio.h>
#include<conio.h>

#define N 50

struct Student {
    int   rollNo;
    char  name[50];
    float percentage;
};

void main() {
    clrscr();
    struct Student s[N], temp;
    int i, j, n;

    printf("How many students to enter (max %d): ", N);
    scanf("%d", &n);

    // Input student records
    for (i = 0; i < n; i++) {
        printf("\\nStudent %d:\\n", i + 1);

        printf("  Roll Number : ");
        scanf("%d", &s[i].rollNo);

        printf("  Name        : ");
        scanf(" %[^\\n]", s[i].name);

        printf("  Percentage  : ");
        scanf("%f", &s[i].percentage);
    }

    // Bubble Sort — Descending order by percentage
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - 1 - i; j++) {
            if (s[j].percentage < s[j + 1].percentage) {
                // Swap entire structure
                temp    = s[j];
                s[j]    = s[j + 1];
                s[j + 1] = temp;
            }
        }
    }

    // Display sorted records
    printf("\\n\\nStudents sorted by Percentage (Descending):\\n");
    printf("%-6s %-25s %s\\n", "Roll", "Name", "Percentage");
    printf("------------------------------------------\\n");

    for (i = 0; i < n; i++) {
        printf("%-6d %-25s %.2f%%\\n",
               s[i].rollNo,
               s[i].name,
               s[i].percentage);
    }

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Bubble sort on structure array (descending)",
          content: `graph LR
    subgraph "Pass 1: compare adjacent structs"
        A["s[0]: 72%"] -->|"s[0] < s[1]? Yes → swap"| B["s[1]: 85%"]
        B --> C["s[2]: 60%"]
    end
    subgraph "After Pass 1"
        D["s[0]: 85%"] --> E["s[1]: 72%"]
        E --> F["s[2]: 60% (largest bubbled to front)"]
    end`,
        },
      ],
    },
    {
      id: "qb-m5-q6",
      title: "A sport club of cricket needs to maintain data about players. Club wants to maintain player name, age, no. of matches played, no. of runs, and average. Write a program to accept and display the data in tabular format.",
      source: "Question Bank - Module 5",
      marks: 5,
      notes: `**Structure with 5 fields covering both integer and float data types**

**Structure definition:**
\`\`\`c
struct Player {
    char name[50];
    int  age;
    int  matches;
    int  runs;
    float average;
};
\`\`\`

**Average calculation (optional — can be computed or input):**
\`\`\`c
p.average = (float) p.runs / p.matches;
\`\`\`

**Tabular display tip — use %-width format specifiers:**
\`\`\`c
printf("%-20s %-5s %-10s %-8s %-8s\\n",
       "Name", "Age", "Matches", "Runs", "Average");
\`\`\`

**Typically stores data for multiple players — use array:**
\`\`\`c
struct Player team[11];  // cricket team
\`\`\`

**Key \`scanf\` note:** Use \`scanf(" %[^\\n]", p.name)\` to allow names with spaces. The leading space clears the newline buffer.`,
      blocks: [
        {
          type: "text",
          content:
            "We define a `struct Player` to hold all cricket player data. An array of such structures stores data for multiple players. After input, data is displayed in a clean **tabular format** using formatted `printf()` with fixed-width column specifiers.\n\n**Fields:**\n- `name` — player's name (string)\n- `age` — player's age (int)\n- `matches` — number of matches played (int)\n- `runs` — total runs scored (int)\n- `average` — batting average (float), can be calculated as runs ÷ matches",
        },
        {
          type: "code",
          language: "c",
          title: "Cricket club player data — accept and display in tabular format",
          content: `#include<stdio.h>
#include<conio.h>

struct Player {
    char  name[50];
    int   age;
    int   matches;
    int   runs;
    float average;
};

void main() {
    clrscr();
    struct Player team[11];
    int i, n;

    printf("Enter number of players (max 11): ");
    scanf("%d", &n);

    // Accept player data
    for (i = 0; i < n; i++) {
        printf("\\nPlayer %d:\\n", i + 1);

        printf("  Name              : ");
        scanf(" %[^\\n]", team[i].name);

        printf("  Age               : ");
        scanf("%d", &team[i].age);

        printf("  Matches Played    : ");
        scanf("%d", &team[i].matches);

        printf("  Runs Scored       : ");
        scanf("%d", &team[i].runs);

        // Calculate average automatically
        if (team[i].matches > 0)
            team[i].average = (float) team[i].runs / team[i].matches;
        else
            team[i].average = 0.0;
    }

    // Display in tabular format
    printf("\\n\\n");
    printf("%-20s %-5s %-10s %-8s %-10s\\n",
           "Player Name", "Age", "Matches", "Runs", "Average");
    printf("------------------------------------------------------\\n");

    for (i = 0; i < n; i++) {
        printf("%-20s %-5d %-10d %-8d %-10.2f\\n",
               team[i].name,
               team[i].age,
               team[i].matches,
               team[i].runs,
               team[i].average);
    }

    getch();
}`,
        },
        {
          type: "diagram",
          title: "struct Player — fields and types",
          content: `graph TD
    subgraph "struct Player"
        A["name — char[50]"]
        B["age — int"]
        C["matches — int"]
        D["runs — int"]
        E["average — float<br/>(= runs ÷ matches)"]
    end
    F["team[0]"] --> A
    F --> B
    F --> C
    F --> D
    F --> E`,
        },
      ],
    },
    {
      id: "qb-m5-q7",
      title: "Define a structure Employer with variables: Employee code, Employee name, Employee salary, Employee designation. Write a program to read the structure for 05 employees and display them.",
      source: "Question Bank - Module 5",
      marks: 5,
      notes: `**Classic record-keeping structure — mix of int, char[], float, and another char[]*

**Structure definition:**
\`\`\`c
struct Employer {
    int   empCode;
    char  empName[50];
    float empSalary;
    char  designation[30];
};
\`\`\`

**For 5 employees:** \`struct Employer emp[5];\`

**Input pattern:**
\`\`\`c
for(i = 0; i < 5; i++) {
    scanf("%d",        &emp[i].empCode);
    scanf(" %[^\\n]",  emp[i].empName);
    scanf("%f",        &emp[i].empSalary);
    scanf(" %[^\\n]",  emp[i].designation);
}
\`\`\`

**Display tip:** Use \`%-10s\`, \`%-8.2f\` for aligned columns.

**Note on variable name:** Question says "Employer" for structure name but "Employee" for fields — this is common in exam papers. Use whichever the question states for the struct tag.

**Salary format:** Always display with 2 decimal places using \`%.2f\`.`,
      blocks: [
        {
          type: "text",
          content:
            "We define a `struct Employer` to hold the four employee-related fields. An array of 5 such structures stores records for all 5 employees. The program reads each record in a loop and then displays them all in a formatted table.\n\n**Fields in `struct Employer`:**\n- `empCode` — unique employee code (int)\n- `empName` — employee's full name (char array)\n- `empSalary` — monthly salary (float)\n- `designation` — job title (char array)",
        },
        {
          type: "code",
          language: "c",
          title: "Employer structure — read and display 5 employee records",
          content: `#include<stdio.h>
#include<conio.h>

struct Employer {
    int   empCode;
    char  empName[50];
    float empSalary;
    char  designation[30];
};

void main() {
    clrscr();
    struct Employer emp[5];
    int i;

    // Read records for 5 employees
    for (i = 0; i < 5; i++) {
        printf("\\n--- Employee %d ---\\n", i + 1);

        printf("Employee Code        : ");
        scanf("%d", &emp[i].empCode);

        printf("Employee Name        : ");
        scanf(" %[^\\n]", emp[i].empName);

        printf("Employee Salary (Rs) : ");
        scanf("%f", &emp[i].empSalary);

        printf("Designation          : ");
        scanf(" %[^\\n]", emp[i].designation);
    }

    // Display all employee records
    printf("\\n\\n========== Employee Records ==========\\n");
    printf("%-6s %-20s %-12s %-20s\\n",
           "Code", "Name", "Salary", "Designation");
    printf("----------------------------------------------\\n");

    for (i = 0; i < 5; i++) {
        printf("%-6d %-20s %-12.2f %-20s\\n",
               emp[i].empCode,
               emp[i].empName,
               emp[i].empSalary,
               emp[i].designation);
    }

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Array of Employer structures",
          content: `graph LR
    subgraph "struct Employer emp[5]"
        subgraph "emp[0]"
            A0["empCode"]
            B0["empName"]
            C0["empSalary"]
            D0["designation"]
        end
        subgraph "emp[1]"
            A1["empCode"]
            B1["empName"]
            C1["empSalary"]
            D1["designation"]
        end
        subgraph "emp[4]"
            A4["..."]
        end
    end`,
        },
      ],
    },
  ],
}