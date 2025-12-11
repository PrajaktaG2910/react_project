const notes= [
  {
    id: 2,
    name: "Java",
    notes: `
Java is a high-level, object-oriented programming language developed by Sun Microsystems.
It is widely used for building enterprise applications, Android apps, and backend systems.

---------------------------------------------------------
🔥 KEY FEATURES OF JAVA
---------------------------------------------------------
1. Object-Oriented Programming (OOP)
2. Platform Independent (Write Once, Run Anywhere — WORA)
3. Strong Memory Management (Garbage Collection)
4. Rich API and large community support
5. Multi-threading support
6. Secure and robust

---------------------------------------------------------
📌 BASIC JAVA STRUCTURE
---------------------------------------------------------
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello Java");
  }
}

---------------------------------------------------------
📌 DATA TYPES
---------------------------------------------------------
• Primitive Types:
  byte, short, int, long, float, double, char, boolean

• Non-Primitive Types:
  String, Arrays, Classes, Interfaces

---------------------------------------------------------
📌 OOP CONCEPTS
---------------------------------------------------------
1. Encapsulation  
2. Abstraction  
3. Inheritance  
4. Polymorphism  

---------------------------------------------------------
📌 EXAMPLE: CLASS & OBJECT
---------------------------------------------------------
class Car {
  String brand;
  int speed;

  void drive() {
    System.out.println("Car is driving...");
  }
}

public class Main {
  public static void main(String[] args) {
    Car c = new Car();
    c.brand = "BMW";
    c.speed = 120;
    c.drive();
  }
}

---------------------------------------------------------
📌 EXCEPTION HANDLING
---------------------------------------------------------
try {
  int a = 10 / 0;
} catch (Exception e) {
  System.out.println("Error: " + e);
} finally {
  System.out.println("Done");
}

---------------------------------------------------------
📌 COLLECTIONS FRAMEWORK
---------------------------------------------------------
• List (ArrayList, LinkedList)
• Set (HashSet, TreeSet)
• Map (HashMap, TreeMap)

---------------------------------------------------------
📌 MULTITHREADING
---------------------------------------------------------
Thread t = new Thread(() -> {
  System.out.println("Thread running...");
});
t.start();
`,
  },

  {
    id: 1,
    name: "Python",
    notes: `
Python is a high-level, interpreted programming language known for its simple syntax.
It is widely used in Machine Learning, Data Science, Web Development, and Automation.

---------------------------------------------------------
🔥 KEY FEATURES
---------------------------------------------------------
1. Easy-to-read syntax  
2. Dynamically Typed  
3. Extensive libraries (NumPy, Pandas, TensorFlow)  
4. Interpreted language  
5. Object-oriented + functional  

---------------------------------------------------------
📌 BASIC EXAMPLE
---------------------------------------------------------
print("Hello Python")

---------------------------------------------------------
📌 VARIABLES
---------------------------------------------------------
x = 10
y = "Hello"
z = 3.14

---------------------------------------------------------
📌 DATA TYPES
---------------------------------------------------------
• int
• float
• str
• list
• tuple
• dict
• set
• bool

---------------------------------------------------------
📌 LIST EXAMPLE
---------------------------------------------------------
fruits = ["apple", "banana", "cherry"]
for f in fruits:
    print(f)

---------------------------------------------------------
📌 FUNCTION
---------------------------------------------------------
def greet(name):
    return "Hello " + name

print(greet("Prajkta"))

---------------------------------------------------------
📌 CLASS & OBJECT
---------------------------------------------------------
class Car:
    def __init__(self, brand):
        self.brand = brand

    def drive(self):
        print(self.brand + " is driving")

c = Car("BMW")
c.drive()

---------------------------------------------------------
📌 EXCEPTION HANDLING
---------------------------------------------------------
try:
    print(10 / 0)
except ZeroDivisionError:
    print("Cannot divide by zero")

---------------------------------------------------------
📌 FILE HANDLING
---------------------------------------------------------
with open("data.txt", "r") as f:
    print(f.read())

---------------------------------------------------------
📌 USE CASES OF PYTHON
---------------------------------------------------------
• Machine Learning  
• Data Science  
• Web Development (Django, Flask)  
• Automation  
• Game development  
`,
  },

  {
    id: 5,
    name: "C Language",
    notes: `
C is a general-purpose, procedural programming language. It is called the "mother of programming languages" because many languages (C++, Java, Python) are based on C.

---------------------------------------------------------
🔥 FEATURES OF C
---------------------------------------------------------
1. Fast and efficient  
2. Low-level memory access  
3. Procedural language  
4. Portable and structured  
5. Used in OS, compilers, embedded systems  

---------------------------------------------------------
📌 BASIC PROGRAM
---------------------------------------------------------
#include <stdio.h>

int main() {
  printf("Hello C");
  return 0;
}

---------------------------------------------------------
📌 DATA TYPES
---------------------------------------------------------
• int  
• float  
• double  
• char  

---------------------------------------------------------
📌 VARIABLES
---------------------------------------------------------
int age = 20;
float pi = 3.14;

---------------------------------------------------------
📌 CONDITIONALS
---------------------------------------------------------
int n = 10;

if (n > 5) {
  printf("Greater");
} else {
  printf("Smaller");
}

---------------------------------------------------------
📌 LOOPS
---------------------------------------------------------
for (int i = 1; i <= 5; i++) {
  printf("%d ", i);
}

---------------------------------------------------------
📌 ARRAYS
---------------------------------------------------------
int arr[3] = {10, 20, 30};

---------------------------------------------------------
📌 FUNCTIONS
---------------------------------------------------------
void greet() {
  printf("Hello");
}

int main() {
  greet();
  return 0;
}

---------------------------------------------------------
📌 POINTERS
---------------------------------------------------------
int a = 10;
int *p = &a;

printf("%d", *p); // prints value of a

---------------------------------------------------------
📌 USES OF C
---------------------------------------------------------
• Operating Systems  
• Embedded Systems  
• Device Drivers  
• Game Engines  
`,
  },

  {
    id: 3,
    name: "C++",
    notes: `
C++ is an extension of the C language with Object-Oriented Programming features.
It is widely used in game engines, high-performance applications, OS kernels, and competitive programming.

---------------------------------------------------------
🔥 FEATURES OF C++
---------------------------------------------------------
1. Object-Oriented  
2. Fast execution  
3. Supports OOP + Procedural programming  
4. Rich standard library (STL)  

---------------------------------------------------------
📌 BASIC PROGRAM
---------------------------------------------------------
#include <iostream>
using namespace std;

int main() {
  cout << "Hello C++";
  return 0;
}

---------------------------------------------------------
📌 OOP CONCEPTS
---------------------------------------------------------
• Class  
• Object  
• Encapsulation  
• Abstraction  
• Inheritance  
• Polymorphism  

---------------------------------------------------------
📌 CLASS & OBJECT EXAMPLE
---------------------------------------------------------
class Car {
public:
  string brand;

  void drive() {
    cout << brand << " is driving";
  }
};

int main() {
  Car c;
  c.brand = "Audi";
  c.drive();
}

---------------------------------------------------------
📌 CONSTRUCTORS
---------------------------------------------------------
class Person {
public:
  Person() {
    cout << "Constructor called";
  }
};

---------------------------------------------------------
📌 STL (Standard Template Library)
---------------------------------------------------------
1. Vector  
2. Map  
3. Set  
4. Queue  
5. Stack  

---------------------------------------------------------
📌 EXCEPTION HANDLING
---------------------------------------------------------
try {
  int a = 10/0;
} catch (...) {
  cout << "Error!";
}

---------------------------------------------------------
📌 USES OF C++
---------------------------------------------------------
• Game Development  
• Operating Systems  
• Database Engines  
• High-performance apps  
`,
  },
  {
  id: 4,
  title: "Modern JavaScript (ES6+) Notes",
  content: `
Modern JavaScript (ES6+) introduced cleaner and more powerful features that are now standard in React, Node.js, and front-end development.

===================================================
1. LET AND CONST
===================================================
• let → block-scoped, can change value  
• const → block-scoped, cannot change value  
• Replaces var (which caused scope problems)

Example:
let age = 25;
const PI = 3.14;

===================================================
2. ARROW FUNCTIONS
===================================================
Shorter function syntax with automatic this binding.

const add = (a, b) => a + b;
const greet = name => console.log(\`Hello \${name}\`);

===================================================
3. TEMPLATE STRINGS
===================================================
Use backticks for easier string formatting.

let name = "Prajkta";
console.log(\`Welcome, \${name}!\`);

Also supports multi-line strings.

===================================================
4. DESTRUCTURING
===================================================
Extract values from objects or arrays.

Object:
const user = {name: "Amit", age: 22};
const {name, age} = user;

Array:
const arr = [1, 2, 3];
const [a, b] = arr;

===================================================
5. SPREAD (...) AND REST (...)
===================================================
Spread → expand elements  
Rest → collect elements

Spread:
let nums = [1, 2, 3];
let newNums = [...nums, 4, 5];

Rest:
function sum(...values) {
  return values.reduce((a, b) => a + b);
}

===================================================
6. DEFAULT PARAMETERS
===================================================
function greet(name = "Guest") {
  console.log(\`Hello \${name}\`);
}

===================================================
7. CLASSES (OOP)
===================================================
JavaScript now supports class-based syntax.

class Car {
  constructor(brand) {
    this.brand = brand;
  }
  drive() {
    console.log(this.brand + " is driving");
  }
}

let c1 = new Car("Honda");

===================================================
8. PROMISES
===================================================
Used for asynchronous operations.

const task = new Promise((resolve, reject) => {
  resolve("Done!");
});

task.then(res => console.log(res));

===================================================
9. ASYNC / AWAIT
===================================================
Cleaner way to work with promises.

async function getData() {
  let result = await fetch("url");
  console.log(result);
}

===================================================
10. MODULES (IMPORT / EXPORT)
===================================================
Export:
export const add = (a, b) => a + b;

Import:
import { add } from "./utils.js";

===================================================
11. OPTIONAL CHAINING (?.)
===================================================
Avoids errors when accessing nested properties.

console.log(user?.profile?.email);

===================================================
12. ARRAY METHODS (MODERN)
===================================================
map → transform  
filter → remove unwanted  
find → find single  
reduce → combine values  

Example:
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);

===================================================
SUMMARY
===================================================
ES6+ made JavaScript cleaner, easier, and more powerful:
• let/const  
• arrow functions  
• template strings  
• destructuring  
• spread/rest  
• classes  
• promises + async/await  
• modules  
• optional chaining  
• modern array methods  

`
},

];

export default notes;
