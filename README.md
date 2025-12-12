# **Node.js Learning Repository - Complete Documentation**

## **Table of Contents**

1. [Project Overview](#project-overview)
2. [Repository Structure](#repository-structure)
3. [What's New](#whats-new)
4. [Prerequisites](#prerequisites)
5. [Installation Guide](#installation-guide)
6. [Technology Stack](#technology-stack)
7. [Module Breakdown](#module-breakdown)
   - [JavaScript Fundamentals](#javascript-fundamentals)
   - [Starter Module](#starter-module)
   - [Node.js Modules System](#nodejs-modules-system)
   - [File System (fs) Module](#file-system-fs-module)
   - [User-Defined Modules](#user-defined-modules)
8. [Core Concepts Covered](#core-concepts-covered)
9. [Detailed Code Examples](#detailed-code-examples)
10. [Execution Instructions](#execution-instructions)
11. [File System Operations Guide](#file-system-operations-guide)
12. [Module Import/Export Patterns](#module-importexport-patterns)
13. [Best Practices and Design Patterns](#best-practices-and-design-patterns)
14. [Common Pitfalls and Solutions](#common-pitfalls-and-solutions)
15. [Future Roadmap](#future-roadmap)
16. [Contributing Guidelines](#contributing-guidelines)
17. [Troubleshooting](#troubleshooting)
18. [Resources and References](#resources-and-references)
19. [License](#license)
20. [Version Information](#version-information)

---

## **Project Overview**

This repository serves as a **comprehensive learning resource** for **JavaScript** and **Node.js** fundamentals. It is designed as an educational project that demonstrates core programming concepts including synchronous and asynchronous execution, promises, async/await patterns, Node.js module systems, and file system operations.

### **Purpose**

- Provide hands-on examples of JavaScript execution models
- Demonstrate asynchronous programming patterns in JavaScript
- Introduce Node.js module systems (CommonJS and ES Modules)
- Teach file system operations using Node.js `fs` module
- Show practical examples of module import/export patterns
- Serve as a reference for beginners learning JavaScript and Node.js

### **Target Audience**

- Beginners learning JavaScript and Node.js
- Developers transitioning from synchronous to asynchronous programming
- Students exploring module systems and code organization
- Programmers learning file system operations in Node.js

### **Repository Information**

- **Repository Name**: nodeJS
- **Owner**: utk-281
- **Primary Language**: JavaScript
- **License**: Not specified
- **Created**: December 9, 2025
- **Last Updated**: December 12, 2025
- **Repository URL**: [https://github.com/utk-281/nodeJS](https://github.com/utk-281/nodeJS)

---

## **Repository Structure**

```
nodeJS/
│
├── JavaScript/
│   └── index.html                                    # JavaScript fundamentals and async programming
│
├── Node/
│   └── Modules/
│       ├── Built In/
│       │   └── fs.js                                 # File System module examples
│       ├── User Defined/
│       │   ├── ex-1/
│       │   │   ├── file1.js                          # Export examples (CommonJS & ESM)
│       │   │   └── file2.js                          # Import examples (CommonJS & ESM)
│       │   └── ex-2/
│       │       ├── app.js                            # Module loading demonstration
│       │       └── server.js                         # Module execution order
│       └── modules.js                                # Module concepts and wrapper function
│
├── Starter/
│   └── demo.js                                       # Basic Node.js execution examples
│
├── demo.js                                           # Root level demo file
└── README.md                                         # Repository documentation
```

### **Directory Explanation**

| Directory/File                    | Purpose                       | Description                                                              |
| --------------------------------- | ----------------------------- | ------------------------------------------------------------------------ |
| `JavaScript/`                     | Frontend JavaScript concepts  | HTML file with embedded JavaScript demonstrating browser-based execution |
| `Node/Modules/Built In/`          | Node.js core modules          | Demonstrates built-in modules like `fs` (File System)                    |
| `Node/Modules/User Defined/ex-1/` | Module export/import patterns | Shows CommonJS and ES Module syntax for exporting and importing          |
| `Node/Modules/User Defined/ex-2/` | Module loading behavior       | Demonstrates module execution order and synchronous loading              |
| `Node/Modules/modules.js`         | Module system fundamentals    | Explains module wrapper function, global variables, and module types     |
| `Starter/`                        | Getting started examples      | Basic Node.js execution and global object demonstrations                 |
| `demo.js` (root)                  | Simple demonstration file     | Basic JavaScript object shorthand syntax                                 |
| `README.md`                       | Repository documentation      | Comprehensive guide (this document)                                      |

---

## **What's New**

### **Recent Additions (December 12, 2025)**

#### **✨ File System Module**

- **Location**: `Node/Modules/Built In/fs.js`
- **Features**:
  - Synchronous file operations (CRUD)
  - Create, read, update, and delete files
  - Directory creation with nested structure
  - Buffer and encoding demonstrations
  - Error handling with try-catch blocks

#### **✨ User-Defined Modules - Example 1**

- **Location**: `Node/Modules/User Defined/ex-1/`
- **Features**:
  - CommonJS export patterns (`module.exports`)
  - ES Module export patterns (`export`, `export default`)
  - Named exports and default exports
  - Import with destructuring

#### **✨ User-Defined Modules - Example 2**

- **Location**: `Node/Modules/User Defined/ex-2/`
- **Features**:
  - Module loading demonstration
  - Execution order of imported modules
  - Synchronous `require()` behavior
  - Module wrapper function in action

#### **✨ Enhanced Module Documentation**

- **Location**: `Node/Modules/modules.js`
- **Features**:
  - Module wrapper function explanation
  - Global variables (`__dirname`, `__filename`, etc.)
  - Detailed module types documentation
  - CommonJS vs ES Modules comparison

---

## **Prerequisites**

Before using this repository, ensure you have the following installed:

### **Required Software**

1. **Node.js** (v14.0.0 or higher recommended)

   - Download from: [https://nodejs.org/](https://nodejs.org/)
   - Verify installation: `node --version`

2. **npm** (Node Package Manager)

   - Comes bundled with Node.js
   - Verify installation: `npm --version`

3. **Web Browser** (for JavaScript examples)

   - Chrome, Firefox, Safari, or Edge
   - Latest version recommended

4. **Code Editor** (recommended)
   - Visual Studio Code
   - Sublime Text
   - Atom
   - WebStorm

### **Knowledge Prerequisites**

- Basic understanding of programming concepts
- Familiarity with command-line/terminal operations
- Basic HTML knowledge (for browser examples)
- Understanding of JavaScript syntax

---

## **Installation Guide**

### **Step 1: Clone the Repository**

```bash
# Using HTTPS
git clone https://github.com/utk-281/nodeJS.git

# Using SSH
git clone git@github.com:utk-281/nodeJS.git

# Navigate to the project directory
cd nodeJS
```

### **Step 2: Verify Node.js Installation**

```bash
# Check Node.js installation
node --version
# Expected output: v14.x.x or higher

# Check npm installation
npm --version
# Expected output: 6.x.x or higher
```

### **Step 3: Explore the Repository**

```bash
# List all files and directories
ls -la

# Navigate to specific modules
cd Node/Modules/Built\ In
ls

# Return to root
cd ../../..
```

### **Step 4: No Additional Dependencies**

This repository uses vanilla JavaScript and Node.js core modules. No package installation is required (no `package.json` currently present).

---

## **Technology Stack**

### **Core Technologies**

| Technology            | Version          | Purpose                                 |
| --------------------- | ---------------- | --------------------------------------- |
| **JavaScript (ES6+)** | ECMAScript 2015+ | Core programming language               |
| **Node.js**           | v14+ recommended | Server-side JavaScript runtime          |
| **HTML5**             | Latest           | Document structure for browser examples |

### **Node.js Built-in Modules**

| Module     | Purpose                        | Used In                       |
| ---------- | ------------------------------ | ----------------------------- |
| **fs**     | File System operations         | `Node/Modules/Built In/fs.js` |
| **http**   | HTTP server creation (planned) | Future implementation         |
| **path**   | File path manipulation         | Future implementation         |
| **crypto** | Cryptographic operations       | Future implementation         |
| **os**     | Operating system utilities     | Future implementation         |

### **Browser APIs Used**

- `setTimeout()` - Asynchronous timing
- `fetch()` - HTTP requests (Promise-based)
- `console` - Logging and debugging
- `Promise` - Asynchronous operation handling

---

## **Module Breakdown**

### **JavaScript Fundamentals**

**Location**: `JavaScript/index.html`

**Purpose**: Demonstrates core JavaScript execution models and asynchronous programming patterns in browser environment.

**Topics Covered**:

1. **Synchronous Execution**

   - Blocking code behavior
   - Single-threaded execution model
   - Call stack operations
   - For-loop blocking demonstration

2. **Asynchronous Execution**

   - Event loop mechanism
   - Callback queue vs Microtask queue
   - Priority execution order
   - Non-blocking code patterns

3. **Promises**

   - Promise creation with `new Promise()`
   - `.then()` and `.catch()` handlers
   - Promise chaining
   - Fetch API usage with JSONPlaceholder
   - Handling JSON responses

4. **Async/Await**
   - Modern asynchronous syntax
   - `async` function declaration
   - `await` keyword for promise suspension
   - Error handling in async functions
   - Cleaner alternative to promise chaining

**File Structure**:

- HTML document with embedded `<script>` tag
- Multiple commented examples for hands-on practice
- Real-world fetch examples using JSONPlaceholder API

---

### **Starter Module**

**Location**: `Starter/demo.js`

**Purpose**: Introduction to Node.js execution environment and global objects.

**Key Concepts**:

1. **Node.js Execution**

   - Command-line execution: `node filename.js`
   - File extension optional in commands
   - Terminal/command prompt usage

2. **Global Object**

   - Node.js `global` object vs browser's `window`
   - Global scope in Node.js environment
   - Differences from browser environment

3. **Event Loop in Node.js**
   - `setTimeout()` in Node.js context
   - `Promise.resolve()` execution
   - Microtask vs callback queue priority
   - Console logging for visualization

**Code Highlights**:

```javascript
console.log("hello world");

// Open terminal with folder path
// Execute: node filename.js
// Extension is optional
// Global object in Node.js is "GLOBAL"
```

---

### **Node.js Modules System**

**Location**: `Node/Modules/modules.js`

**Purpose**: Comprehensive explanation of Node.js module systems, wrapper functions, and global variables.

**Key Topics**:

#### **1. Module Definition**

Modules are reusable pieces of code that promote:

- **Readability**: Clean and organized code structure
- **Maintainability**: Easier to update and debug
- **Scalability**: Break complex applications into manageable pieces
- **DRY Principle**: Don't Repeat Yourself
- **Modularity**: Separation of concerns

#### **2. Module Formats**

##### **a) CommonJS Modules**

- Default in Node.js
- Uses `require()` and `module.exports`
- Synchronous loading
- Widely supported in Node.js ecosystem

##### **b) ES Modules (ESM)**

- Modern JavaScript standard
- Uses `import` and `export`
- Asynchronous loading
- Requires `.mjs` extension or `"type": "module"` in package.json

#### **3. Module Types in Node.js**

##### **i) User-Defined Modules / Custom Modules**

- Created by developers
- Custom business logic
- Application-specific functionality

##### **ii) Built-in Modules / Core Modules**

- Part of Node.js installation
- No installation required
- Examples: `http`, `fs`, `os`, `crypto`, `path`, `cluster`, `worker_threads`, `qs`, `queryString`

##### **iii) Third-Party Modules / External Modules**

- Installed from NPM
- Community-contributed packages
- Examples: `express`, `mongodb`, `multer`, `dotenv`

#### **4. Module Wrapper Function**

Node.js internally wraps all CommonJS code in an **IIFE (Immediately Invoked Function Expression)**:

```javascript
(function (exports, require, module, __filename, __dirname) {
  // Your code here
  console.log("hello");
  console.log(__filename);
  console.log(__dirname);
  console.log(module);
  console.log(exports);
  console.log(require);
})();
```

**Parameters**:

- `exports` - Shorthand for `module.exports`
- `require` - Function to import modules
- `module` - Reference to current module
- `__filename` - Absolute path of current file
- `__dirname` - Absolute path of current directory

#### **5. Global Variables and Functions**

Variables available without importing:

- `__dirname` - Current directory path
- `__filename` - Current file path
- `setTimeout()` - Timer function
- `setInterval()` - Interval function
- `console` - Logging object
- `process` - Process information
- `Buffer` - Binary data handling
- `global` - Global object

**Example**:

```javascript
console.log(__dirname); // C:\Users\ASUS\Desktop\Classes\node_1700\Node\Modules
console.log(__filename); // C:\Users\ASUS\Desktop\Classes\node_1700\Node\Modules\modules.js
```

---

### **File System (fs) Module**

**Location**: `Node/Modules/Built In/fs.js`

**Purpose**: Comprehensive guide to file system operations using Node.js built-in `fs` module.

**Key Features**:

#### **1. Module Import Syntax**

```javascript
// Preferred modern syntax
const fs = require("node:fs");

// Traditional syntax (also works)
const fs = require("fs");
```

#### **2. File Operations (CRUD)**

##### **a) Create/Write File - `writeFileSync()`**

**Syntax**: `fs.writeFileSync("path/filename.extension", "content")`

**Features**:

- Creates a new file with specified content
- Overwrites existing file completely
- Accepts any file extension
- Synchronous operation (blocks code execution)

**Example**:

```javascript
fs.writeFileSync("./someOther.json", ` `);
console.log("file created");
```

##### **b) Read File - `readFileSync()`**

**Syntax**: `fs.readFileSync("path/filename", "encoding")`

**Features**:

- Reads file contents
- Returns Buffer object by default
- Requires encoding specification for readable text
- Common encodings: `utf-8`, `ascii`, `base64`

**Buffer Explanation**:

- Buffer is an array-like structure storing binary data
- Each element represents a byte (8 bits)
- Used for efficient binary data handling

**Character Encoding**:

- **ASCII**: 126 characters (basic English)
- **Unicode**: Universal character set (all languages)
- **UTF-8**: Variable-length encoding (1-4 bytes per character)
  - Backward compatible with ASCII
  - Most popular on the web
  - Efficient for English and European languages

**Example**:

```javascript
// Returns Buffer
let content = fs.readFileSync("../../../demo.js");
console.log(content); // <Buffer 6c 65 74 20 75 73 65 72...>

// Convert Buffer to string
let readableContent = content.toString(); // default: utf-8
console.log(readableContent);

// Direct reading with encoding
let res = fs.readFileSync("../modules.js", "utf-8");
console.log(res);
```

##### **c) Update/Append File - `appendFileSync()`**

**Syntax**: `fs.appendFileSync("path/filename", "data to append")`

**Features**:

- Adds data at the end of existing file
- Creates new file if path doesn't exist
- Preserves existing content
- Useful for log files and incremental updates

**Example**:

```javascript
fs.appendFileSync("./server.js", "data");
console.log("Data appended");
```

##### **d) Delete File - `unlinkSync()`**

**Syntax**: `fs.unlinkSync("path/filename")`

**Features**:

- Permanently deletes file
- Throws error if file doesn't exist
- Requires error handling

**Example**:

```javascript
try {
  fs.unlinkSync("../../../demo.js");
  console.log("file deleted");
} catch (error) {
  if (error.code === "ENOENT") {
    console.log("file not found");
  } else {
    console.log(error);
  }
}
```

**Error Codes**:

- `ENOENT` - File/directory not found
- `EACCES` - Permission denied
- `EISDIR` - Is a directory
- `ENOTDIR` - Not a directory

#### **3. Directory Operations**

##### **Create Directory - `mkdirSync()`**

**Syntax**: `fs.mkdirSync("path/directory_name")`

**Features**:

- Creates a new directory
- Can create single-level directories
- Requires parent directories to exist (or use `recursive` option)

**Example - Nested Directory Structure**:

```javascript
function createStructure() {
  fs.mkdirSync("./backend");
  fs.mkdirSync("./backend/controller");
  fs.writeFileSync("./backend/controller/user.js", "let a = 20");
}

createStructure();
// Creates: backend/controller/user.js
```

**Advanced Usage**:

```javascript
// Create nested directories in one call
fs.mkdirSync("./backend/controller", { recursive: true });
```

#### **4. Synchronous vs Asynchronous**

**Current Examples**: All use synchronous methods (`*Sync`)

**Characteristics of Synchronous Methods**:

- Block code execution until operation completes
- Easier to understand and write
- Suitable for scripts and simple applications
- Not recommended for production servers

**Asynchronous Alternatives** (Future Implementation):

- `writeFile()`, `readFile()`, `appendFile()`, `unlink()`, `mkdir()`
- Non-blocking operations
- Use callbacks or promises
- Better for production applications

---

### **User-Defined Modules**

User-defined modules demonstrate practical import/export patterns using both CommonJS and ES Module syntax.

---

#### **Example 1: Export/Import Patterns**

**Location**: `Node/Modules/User Defined/ex-1/`

##### **File 1 (file1.js) - Exporting**

**Purpose**: Demonstrates various export patterns in both CommonJS and ES Modules.

**CommonJS Export Patterns**:

```javascript
// 1) Single export (only one item at a time)
module.exports = obj;
module.exports = printName;
module.exports = arr;

// 2) Multiple exports (object-based)
module.exports = {
  printName,
  arr,
  obj,
};
```

**ES Module Export Patterns**:

```javascript
// 1) Named exports (multiple exports)
export let sum = (a, b) => {
  return a + b;
};

export let obj = {
  name: "abc",
};

export const arr = [1, 2, 3, 4];

// 2) Default export (one per file)
let abcde = (a, b) => {
  return a + b;
};

export default abcde;
```

**Key Differences**:

- **Named Export**: Can have multiple, must import with exact names
- **Default Export**: One per file, can import with any name
- CommonJS uses `module.exports`, ESM uses `export`

##### **File 2 (file2.js) - Importing**

**Purpose**: Demonstrates various import patterns in both CommonJS and ES Modules.

**CommonJS Import Patterns**:

```javascript
// 1) Full import
const value = require("./file1.js");
console.log(value.printName("abc"));
console.log(value.arr);
console.log(value.obj);

// 2) Destructured import
const { printName, arr, obj } = require("./file1");
printName("def");
console.log(arr);
console.log(obj);
```

**ES Module Import Patterns**:

```javascript
// Named imports (must use curly braces)
import { arr, obj, sum } from "./file1.js";
console.log(sum(1, 1));
console.log(arr);
console.log(obj);

// Default import (no curly braces, any name)
import myFunction from "./file1.js";
myFunction(5, 10);

// Mixed import
import defaultExport, { namedExport1, namedExport2 } from "./file1.js";
```

**Important Notes**:

- ESM requires `.js` extension in import path
- CommonJS extension is optional
- Named imports must match export names exactly
- Default imports can use any variable name

---

#### **Example 2: Module Loading Behavior**

**Location**: `Node/Modules/User Defined/ex-2/`

##### **server.js - Module Being Imported**

```javascript
console.log("this is server");

function greet(name) {
  console.log("hello", name);
}

greet("server");

module.exports = greet;

console.log("this is end");
```

**Execution Flow**:

1. First console log executes
2. Function definition
3. Function call
4. Export statement
5. Final console log

##### **app.js - Module Importing**

```javascript
const greet = require("./server");

// require is synchronous
// top level await

// The file being imported executes first,
// then the importing file continues
```

**Key Learnings**:

1. **Module Execution Order**:

   - Imported file (`server.js`) executes **completely first**
   - Then importing file (`app.js`) continues execution

2. **Output Sequence**:

   ```
   this is server
   hello server
   this is end
   // (now app.js continues)
   ```

3. **Synchronous Loading**:

   - `require()` is **synchronous** (blocking)
   - Must wait for module to load and execute
   - Different from `import` which is asynchronous

4. **Module Caching**:

   - Modules are cached after first `require()`
   - Subsequent requires return cached version
   - Module code executes only once

5. **Top-Level Await** (Note in code):
   - ESM supports await at module top level
   - CommonJS does not support this
   - Must use async functions in CommonJS

---

### **Root Demo File**

**Location**: `demo.js` (root directory)

**Purpose**: Demonstrates ES6 object shorthand syntax.

**Code**:

```javascript
let username = "abc";
let age = 34;

let emp = {
  username, // Shorthand for username: username
  age, // Shorthand for age: age
};
```

**Concept**: Object Property Shorthand

- When property name matches variable name
- Can omit the colon and duplicate name
- Cleaner syntax introduced in ES6

**Equivalent to**:

```javascript
let emp = {
  username: username,
  age: age,
};
```

---

## **Core Concepts Covered**

### **1. Synchronous vs Asynchronous Execution**

#### **Synchronous (Blocking)**

```javascript
console.log("start");
for (let i = 0; i < 10000; i++) {
  console.log(i);
}
console.log("middle");
console.log("end");
```

**Characteristics**:

- Sequential execution
- Each task waits for previous to complete
- Blocks further code execution
- Single call stack
- Predictable execution order

**Use Cases**:

- Simple scripts
- Configuration loading
- Sequential data processing
- File operations in build scripts

#### **Asynchronous (Non-Blocking)**

```javascript
setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);

console.log("Start");
```

**Characteristics**:

- Concurrent execution model
- Non-blocking operations
- Utilizes event loop
- Callback/promise-based
- Unpredictable execution order

**Use Cases**:

- Network requests
- File I/O operations
- Timers and intervals
- User interactions
- Database queries

---

### **2. Event Loop Architecture**

```
┌───────────────────────────┐
│       Call Stack          │ ← Synchronous code executes here
└───────────────────────────┘
            ↓
┌───────────────────────────┐
│   Microtask Queue         │ (Higher Priority)
│   - Promises              │
│   - process.nextTick()    │
│   - queueMicrotask()      │
└───────────────────────────┘
            ↓
┌───────────────────────────┐
│   Callback Queue          │ (Lower Priority)
│   (Task Queue/Macrotask)  │
│   - setTimeout()          │
│   - setInterval()         │
│   - setImmediate()        │
│   - I/O operations        │
└───────────────────────────┘
```

**Execution Priority**:

1. **Call Stack** - Synchronous code

   - Executes immediately
   - LIFO (Last In, First Out)
   - Blocks until empty

2. **Microtask Queue** - Promises, process.nextTick

   - Executes after call stack is empty
   - Before any macrotasks
   - Higher priority than callback queue

3. **Callback Queue** - setTimeout, I/O
   - Executes after microtask queue is empty
   - Lower priority
   - Handles long-running operations

**Event Loop Process**:

1. Execute all synchronous code
2. Check microtask queue → execute all
3. Check callback queue → execute one
4. Repeat steps 2-3 until both queues are empty

---

### **3. Promise Patterns**

#### **Basic Promise Creation**

```javascript
let promise = new Promise((resolve, reject) => {
  let a = 11;
  if (a == 11) {
    resolve("Promise resolved");
  } else {
    reject("rejected");
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```

**Promise States**:

- **Pending**: Initial state, neither fulfilled nor rejected
- **Fulfilled**: Operation completed successfully (`resolve()` called)
- **Rejected**: Operation failed (`reject()` called)

#### **Fetch API Promise**

```javascript
let output = fetch("https://jsonplaceholder.typicode.com/posts");

output
  .then((data) => {
    let jsonPromise = data.json();
    return jsonPromise;
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
```

**Promise Chaining Rules**:

- Each `.then()` returns a new promise
- Must return value for next `.then()`
- Single `.catch()` handles all errors in chain
- Chain stops if promise is rejected

---

### **4. Async/Await Pattern**

```javascript
async function getTodos() {
  let output = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(output);
  let jsonData = await output.json();
  console.log(jsonData);
}

getTodos();
```

**Key Features**:

- `async` keyword in function declaration
- Always returns a Promise automatically
- `await` suspends execution until Promise resolves
- Cleaner syntax than Promise chaining
- Better error handling with try-catch

**Advantages**:

- More readable and maintainable
- Looks like synchronous code
- Easier debugging
- Better error stack traces
- Simplified error handling

---

### **5. Module Systems Comparison**

#### **CommonJS vs ES Modules**

| Feature             | CommonJS                       | ES Modules (ESM)          |
| ------------------- | ------------------------------ | ------------------------- |
| **Syntax**          | `require()` / `module.exports` | `import` / `export`       |
| **Loading**         | Synchronous                    | Asynchronous              |
| **Default in**      | Node.js                        | Modern browsers, Node 14+ |
| **File Extension**  | `.js`                          | `.js` or `.mjs`           |
| **Top-level await** | Not supported                  | Supported                 |
| **Exports**         | Single object                  | Named and default exports |
| **Tree Shaking**    | Difficult                      | Easier                    |
| **Static Analysis** | Harder                         | Easier                    |
| **Usage**           | Server-side                    | Universal                 |

**When to Use CommonJS**:

- Node.js legacy projects
- Simple Node.js scripts
- When synchronous loading is needed
- Compatibility with older packages

**When to Use ESM**:

- Modern applications
- Better tree shaking needed
- Browser and Node.js code sharing
- Static analysis requirements

---

### **6. File System Operations**

#### **Buffer and Encoding**

**Buffer**:

- Array-like structure for binary data
- Each element is a byte (0-255)
- Efficient for binary operations
- Used internally by Node.js

**Encoding**:

- Converts binary data to readable text
- UTF-8 most common (variable 1-4 bytes)
- ASCII for basic English (1 byte)
- UTF-16 for unicode (2 bytes)

**Example**:

```javascript
let buffer = Buffer.from("Hello");
console.log(buffer); // <Buffer 48 65 6c 6c 6f>

let text = buffer.toString("utf-8");
console.log(text); // "Hello"
```

---

## **Detailed Code Examples**

### **Example 1: Execution Order with setTimeout and Promises**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("inside setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("end");
```

**Output**:

```
Start
end
Promise
inside setTimeout
```

**Detailed Explanation**:

1. **"Start"** - Synchronous code, executes immediately on call stack

2. **setTimeout** with 0ms delay:

   - Callback goes to Callback Queue
   - Even with 0ms, still asynchronous
   - Waits for call stack and microtask queue to empty

3. **Promise.resolve()**:

   - Creates immediately resolved promise
   - `.then()` callback goes to Microtask Queue
   - Has higher priority than setTimeout

4. **"end"** - Synchronous code, executes immediately

5. **Call Stack Empty** - Event loop checks queues:
   - Microtask Queue first → executes "Promise"
   - Callback Queue next → executes "inside setTimeout"

**Key Takeaway**: Promises always execute before setTimeout, regardless of delay.

---

### **Example 2: File System CRUD Operations**

```javascript
const fs = require("node:fs");

// Create
fs.writeFileSync("./test.txt", "Initial content");
console.log("File created");

// Read
let content = fs.readFileSync("./test.txt", "utf-8");
console.log("Content:", content);

// Update (Append)
fs.appendFileSync("./test.txt", "\nAppended content");
console.log("Content appended");

// Read again
let updatedContent = fs.readFileSync("./test.txt", "utf-8");
console.log("Updated content:", updatedContent);

// Delete
fs.unlinkSync("./test.txt");
console.log("File deleted");
```

**Output**:

```
File created
Content: Initial content
Content appended
Updated content: Initial content
Appended content
File deleted
```

**Practical Use Cases**:

- Log file management
- Configuration file handling
- Data persistence
- Build scripts
- File-based caching

---

### **Example 3: Module Export/Import (CommonJS)**

**math.js** (Export):

```javascript
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

module.exports = {
  add,
  subtract,
  multiply,
};
```

**app.js** (Import):

```javascript
// Method 1: Full import
const math = require("./math");
console.log(math.add(5, 3)); // 8

// Method 2: Destructured import
const { add, multiply } = require("./math");
console.log(add(5, 3)); // 8
console.log(multiply(5, 3)); // 15
```

---

### **Example 4: Module Export/Import (ES Modules)**

**math.mjs** (Export):

```javascript
// Named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Default export
const multiply = (a, b) => a * b;
export default multiply;
```

**app.mjs** (Import):

```javascript
// Named imports
import { add, subtract } from "./math.mjs";
console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2

// Default import
import multiply from "./math.mjs";
console.log(multiply(5, 3)); // 15

// Mixed import
import multiply, { add, subtract } from "./math.mjs";
```

---

### **Example 5: Creating Nested Directory Structure**

```javascript
const fs = require("node:fs");

function createProjectStructure() {
  // Create main directory
  fs.mkdirSync("./myproject");

  // Create subdirectories
  fs.mkdirSync("./myproject/src");
  fs.mkdirSync("./myproject/src/controllers");
  fs.mkdirSync("./myproject/src/models");
  fs.mkdirSync("./myproject/src/routes");

  // Create files
  fs.writeFileSync("./myproject/src/controllers/user.js", "// User controller");
  fs.writeFileSync("./myproject/src/models/User.js", "// User model");
  fs.writeFileSync("./myproject/src/routes/index.js", "// Routes");
  fs.writeFileSync("./myproject/package.json", "{}");

  console.log("Project structure created successfully!");
}

createProjectStructure();
```

**Alternative (Modern Approach)**:

```javascript
// Create nested directories in one call
fs.mkdirSync("./myproject/src/controllers", { recursive: true });
```

---

## **Execution Instructions**

### **Running JavaScript Examples (Browser)**

1. **Open HTML file directly**:

   ```bash
   # Navigate to JavaScript directory
   cd JavaScript

   # Windows
   start index.html

   # macOS
   open index.html

   # Linux
   xdg-open index.html
   ```

2. **View Console Output**:

   - Open Developer Tools: `F12` or `Ctrl+Shift+I` (Windows/Linux) / `Cmd+Option+I` (macOS)
   - Navigate to "Console" tab
   - Refresh page if needed

3. **Experiment with Examples**:
   - Open `index.html` in code editor
   - Uncomment specific code blocks
   - Save and refresh browser
   - Observe output in console

---

### **Running Node.js Examples**

#### **Basic Execution**

```bash
# Navigate to Starter directory
cd Starter

# Execute demo.js
node demo.js
# Output: hello world

# Alternative (extension optional)
node demo
```

#### **Module Examples**

```bash
# Navigate to Modules directory
cd Node/Modules

# Execute modules.js (to see global variables)
node modules.js

# Execute user-defined module example 2
cd "User Defined/ex-2"
node app.js
# Output shows module loading order
```

#### **File System Examples**

```bash
# Navigate to Built In directory
cd Node/Modules/Built\ In

# Execute fs.js
node fs.js

# Check created files/directories
ls -la

# View created file content
cat backend/controller/user.js
```

---

## **File System Operations Guide**

### **Complete CRUD Reference**

#### **1. File Creation**

```javascript
const fs = require("node:fs");

// Basic creation
fs.writeFileSync("./file.txt", "content");

// Multiple file types
fs.writeFileSync("./data.json", JSON.stringify({ key: "value" }));
fs.writeFileSync("./script.js", "console.log('hello');");
fs.writeFileSync("./style.css", "body { margin: 0; }");
```

**Options**:

```javascript
// Specify encoding
fs.writeFileSync("./file.txt", "content", "utf-8");

// Use options object
fs.writeFileSync("./file.txt", "content", {
  encoding: "utf-8",
  mode: 0o666,
  flag: "w", // 'w' = write (default), 'a' = append
});
```

#### **2. File Reading**

```javascript
// Read as buffer
let buffer = fs.readFileSync("./file.txt");
console.log(buffer); // <Buffer ...>

// Read as string (recommended)
let content = fs.readFileSync("./file.txt", "utf-8");
console.log(content);

// Read JSON file
let jsonContent = fs.readFileSync("./data.json", "utf-8");
let data = JSON.parse(jsonContent);
console.log(data);
```

**Error Handling**:

```javascript
try {
  let content = fs.readFileSync("./file.txt", "utf-8");
  console.log(content);
} catch (error) {
  if (error.code === "ENOENT") {
    console.log("File not found");
  } else {
    console.log("Error:", error.message);
  }
}
```

#### **3. File Appending**

```javascript
// Append text
fs.appendFileSync("./log.txt", "New log entry\n");

// Append JSON (not recommended, use read-modify-write)
fs.appendFileSync("./data.json", ',\n{"new": "data"}');

// Create if not exists
fs.appendFileSync("./newfile.txt", "First content");
```

**Practical Example - Logging**:

```javascript
function log(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;
  fs.appendFileSync("./app.log", logEntry);
}

log("Application started");
log("User logged in");
log("Error occurred");
```

#### **4. File Deletion**

```javascript
// Delete file
try {
  fs.unlinkSync("./file.txt");
  console.log("File deleted");
} catch (error) {
  console.log("Error:", error.message);
}

// Check before deleting
if (fs.existsSync("./file.txt")) {
  fs.unlinkSync("./file.txt");
}
```

#### **5. Directory Operations**

```javascript
// Create directory
fs.mkdirSync("./mydir");

// Create nested directories
fs.mkdirSync("./parent/child/grandchild", { recursive: true });

// Read directory contents
let files = fs.readdirSync("./mydir");
console.log(files);

// Remove empty directory
fs.rmdirSync("./mydir");

// Remove directory recursively (Node.js 12.10+)
fs.rmSync("./mydir", { recursive: true, force: true });
```

#### **6. File/Directory Information**

```javascript
// Check if path exists
if (fs.existsSync("./file.txt")) {
  console.log("Exists");
}

// Get file stats
let stats = fs.statSync("./file.txt");
console.log("Size:", stats.size, "bytes");
console.log("Is file:", stats.isFile());
console.log("Is directory:", stats.isDirectory());
console.log("Created:", stats.birthtime);
console.log("Modified:", stats.mtime);
```

#### **7. Practical Examples**

**Example: Configuration File Manager**

```javascript
class ConfigManager {
  constructor(configPath = "./config.json") {
    this.configPath = configPath;
  }

  // Read configuration
  read() {
    try {
      const content = fs.readFileSync(this.configPath, "utf-8");
      return JSON.parse(content);
    } catch (error) {
      return {}; // Return empty config if file doesn't exist
    }
  }

  // Write configuration
  write(config) {
    const content = JSON.stringify(config, null, 2);
    fs.writeFileSync(this.configPath, content);
  }

  // Update specific key
  set(key, value) {
    const config = this.read();
    config[key] = value;
    this.write(config);
  }

  // Get specific key
  get(key) {
    const config = this.read();
    return config[key];
  }
}

// Usage
const config = new ConfigManager();
config.set("appName", "My App");
config.set("version", "1.0.0");
console.log(config.get("appName")); // "My App"
```

---

## **Module Import/Export Patterns**

### **CommonJS Patterns**

#### **Pattern 1: Object Export**

```javascript
// services/userService.js
const getUser = (id) => {
  return { id, name: "John" };
};

const createUser = (data) => {
  return { ...data, id: Date.now() };
};

module.exports = {
  getUser,
  createUser,
};
```

```javascript
// app.js
const userService = require("./services/userService");
const user = userService.getUser(1);
```

#### **Pattern 2: Direct Function Export**

```javascript
// utils/logger.js
module.exports = function log(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);
};
```

```javascript
// app.js
const log = require("./utils/logger");
log("Application started");
```

#### **Pattern 3: Class Export**

```javascript
// models/User.js
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

module.exports = User;
```

```javascript
// app.js
const User = require("./models/User");
const user = new User("John", 30);
console.log(user.greet());
```

#### **Pattern 4: Multiple Export Styles**

```javascript
// utils/math.js
module.exports.add = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;

// Alternative
exports.multiply = (a, b) => a * b;

// Note: Don't reassign exports = {}; it breaks the reference
```

---

### **ES Module Patterns**

#### **Pattern 1: Named Exports**

```javascript
// services/userService.mjs
export const getUser = (id) => {
  return { id, name: "John" };
};

export const createUser = (data) => {
  return { ...data, id: Date.now() };
};
```

```javascript
// app.mjs
import { getUser, createUser } from "./services/userService.mjs";
const user = getUser(1);
```

#### **Pattern 2: Default Export**

```javascript
// utils/logger.mjs
export default function log(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}
```

```javascript
// app.mjs
import log from "./utils/logger.mjs";
log("Application started");
```

#### **Pattern 3: Mixed Exports**

```javascript
// api/users.mjs
export const API_URL = "https://api.example.com";

export function fetchUsers() {
  return fetch(API_URL + "/users");
}

export default class UserAPI {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getUsers() {
    return fetch(this.baseUrl + "/users");
  }
}
```

```javascript
// app.mjs
import UserAPI, { API_URL, fetchUsers } from "./api/users.mjs";

const api = new UserAPI(API_URL);
api.getUsers();
```

#### **Pattern 4: Re-exporting**

```javascript
// services/index.mjs (barrel export)
export { getUser, createUser } from "./userService.mjs";
export { login, logout } from "./authService.mjs";
export { default as Database } from "./database.mjs";
```

```javascript
// app.mjs
import { getUser, login, Database } from "./services/index.mjs";
```

---

### **Advanced Module Patterns**

#### **Pattern 1: Lazy Loading (Dynamic Import)**

```javascript
// app.js (CommonJS)
async function loadModule() {
  const module = await import("./heavy-module.mjs");
  module.doSomething();
}

// Load only when needed
button.onclick = loadModule;
```

#### **Pattern 2: Conditional Require**

```javascript
// config.js
let database;

if (process.env.NODE_ENV === "production") {
  database = require("./database-prod");
} else {
  database = require("./database-dev");
}

module.exports = database;
```

#### **Pattern 3: Module Factory**

```javascript
// factory.js
module.exports = function createService(config) {
  return {
    config,
    start() {
      console.log("Service started with config:", config);
    },
    stop() {
      console.log("Service stopped");
    },
  };
};
```

```javascript
// app.js
const createService = require("./factory");
const service = createService({ port: 3000 });
service.start();
```

---

## **Best Practices and Design Patterns**

### **1. Asynchronous Code Best Practices**

#### **✅ Do's**

```javascript
// Use async/await for cleaner code
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw for caller to handle
  }
}

// Handle promise rejections
promise.catch((err) => console.error(err));

// Use Promise.all for parallel operations
const [users, posts] = await Promise.all([
  fetch("/api/users"),
  fetch("/api/posts"),
]);

// Use Promise.allSettled for multiple operations that may fail
const results = await Promise.allSettled([
  fetch("/api/users"),
  fetch("/api/posts"),
  fetch("/api/comments"),
]);

results.forEach((result) => {
  if (result.status === "fulfilled") {
    console.log("Success:", result.value);
  } else {
    console.log("Failed:", result.reason);
  }
});
```

#### **❌ Don'ts**

```javascript
// Avoid callback hell
getData(function (a) {
  getMoreData(a, function (b) {
    getMoreData(b, function (c) {
      getMoreData(c, function (d) {
        // Deeply nested callbacks
      });
    });
  });
});

// Don't ignore error handling
fetch(url).then((data) => console.log(data)); // Missing .catch()

// Avoid blocking operations in async context
async function bad() {
  for (let i = 0; i < 10000000; i++) {} // Blocks event loop
  return result;
}

// Don't mix async patterns unnecessarily
async function mixed() {
  // Bad: mixing async/await with .then()
  const data = await fetch(url);
  data.json().then((json) => console.log(json));

  // Good: consistent async/await
  const data2 = await fetch(url);
  const json2 = await data2.json();
  console.log(json2);
}
```

---

### **2. File System Best Practices**

#### **✅ Do's**

```javascript
// Always use try-catch with synchronous fs operations
try {
  const content = fs.readFileSync("./config.json", "utf-8");
  const config = JSON.parse(content);
} catch (error) {
  if (error.code === "ENOENT") {
    console.log("Config file not found, using defaults");
  } else {
    console.error("Error reading config:", error);
  }
}

// Check file existence before operations
if (fs.existsSync("./file.txt")) {
  fs.unlinkSync("./file.txt");
}

// Use path module for cross-platform compatibility
const path = require("path");
const filePath = path.join(__dirname, "data", "users.json");

// Close file descriptors
const fd = fs.openSync("./file.txt", "r");
try {
  // Use file descriptor
} finally {
  fs.closeSync(fd);
}

// Prefer asynchronous methods in production
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log(data);
});
```

#### **❌ Don'ts**

```javascript
// Don't ignore errors
fs.unlinkSync("./file.txt"); // May throw error

// Don't use synchronous operations in production servers
app.get("/data", (req, res) => {
  // Bad: blocks server
  const data = fs.readFileSync("./large-file.txt", "utf-8");
  res.send(data);
});

// Don't perform operations without validation
fs.unlinkSync(userInput); // Security risk!

// Don't forget to handle encoding
const content = fs.readFileSync("./file.txt"); // Returns buffer
console.log(content); // Not readable
```

---

### **3. Module Organization Best Practices**

#### **Single Responsibility Principle**

```javascript
// Good: Each module has one responsibility

// userService.js - User business logic
module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};

// userRepository.js - Database operations
module.exports = {
  findById,
  save,
  update,
  remove,
};

// userController.js - HTTP request handling
module.exports = {
  handleGetUser,
  handleCreateUser,
  handleUpdateUser,
  handleDeleteUser,
};
```

#### **Module Naming Conventions**

```javascript
// CamelCase for classes
const UserService = require("./UserService");

// camelCase for functions/objects
const userService = require("./userService");

// UPPER_CASE for constants
const API_URL = require("./config").API_URL;

// kebab-case for file names
// user-service.js
// auth-middleware.js
```

#### **Directory Structure**

```
project/
├── src/
│   ├── controllers/     # Request handlers
│   ├── services/        # Business logic
│   ├── models/          # Data models
│   ├── repositories/    # Data access
│   ├── middlewares/     # Express middlewares
│   ├── utils/           # Utility functions
│   ├── config/          # Configuration
│   └── app.js           # Main application
├── tests/
│   ├── unit/
│   └── integration/
└── package.json
```

---

### **4. Error Handling Strategies**

#### **Synchronous Error Handling**

```javascript
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("Error occurred:", error.message);
  // Handle or re-throw
  throw new Error(`Failed to complete operation: ${error.message}`);
}
```

#### **Asynchronous Error Handling**

```javascript
// With Promises
fetchData()
  .then((data) => processData(data))
  .catch((error) => {
    console.error("Error:", error);
    // Handle error appropriately
    return defaultValue; // Provide fallback
  });

// With Async/Await
async function handleData() {
  try {
    const data = await fetchData();
    const processed = await processData(data);
    return processed;
  } catch (error) {
    console.error("Error:", error);
    // Handle error appropriately
    return null; // or throw
  }
}
```

#### **Custom Error Classes**

```javascript
// errors/AppError.js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends AppError {
  constructor(message) {
    super(message, 400);
  }
}

class NotFoundError extends AppError {
  constructor(resource) {
    super(`${resource} not found`, 404);
  }
}

module.exports = { AppError, ValidationError, NotFoundError };
```

---

### **5. Code Organization Principles**

#### **DRY (Don't Repeat Yourself)**

```javascript
// Bad: Repetitive code
function getUserById(id) {
  const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
  return users.find((u) => u.id === id);
}

function getUserByEmail(email) {
  const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
  return users.find((u) => u.email === email);
}

// Good: Extract common logic
function getUsers() {
  return JSON.parse(fs.readFileSync("./users.json", "utf-8"));
}

function getUserById(id) {
  return getUsers().find((u) => u.id === id);
}

function getUserByEmail(email) {
  return getUsers().find((u) => u.email === email);
}
```

#### **Separation of Concerns**

```javascript
// Good structure

// data.js - Data access
function readUsers() {
  return JSON.parse(fs.readFileSync("./users.json", "utf-8"));
}

// business.js - Business logic
function validateUser(user) {
  if (!user.email) throw new Error("Email required");
  if (!user.name) throw new Error("Name required");
  return true;
}

// api.js - API endpoints
app.post("/users", (req, res) => {
  try {
    validateUser(req.body);
    const users = readUsers();
    users.push(req.body);
    saveUsers(users);
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

---

### **6. Performance Best Practices**

```javascript
// Use asynchronous operations for I/O
const fsPromises = require("fs").promises;

async function readMultipleFiles(filePaths) {
  // Parallel reading
  const promises = filePaths.map((path) => fsPromises.readFile(path, "utf-8"));
  return await Promise.all(promises);
}

// Cache frequently accessed data
const cache = new Map();

function getConfig(key) {
  if (cache.has(key)) {
    return cache.get(key);
  }

  const value = fs.readFileSync(`./config/${key}.json`, "utf-8");
  cache.set(key, value);
  return value;
}

// Use streams for large files
const fs = require("fs");
const readStream = fs.createReadStream("./large-file.txt");
const writeStream = fs.createWriteStream("./output.txt");

readStream.pipe(writeStream);
```

---

## **Common Pitfalls and Solutions**

### **1. Module Caching Issues**

**Problem**:

```javascript
// config.js
module.exports = {
  count: 0,
};

// app.js
const config1 = require("./config");
const config2 = require("./config");

config1.count++;
console.log(config2.count); // 1 (same reference!)
```

**Solution**:

```javascript
// Use factory function for fresh instances
// config.js
module.exports = function createConfig() {
  return {
    count: 0,
  };
};

// app.js
const createConfig = require("./config");
const config1 = createConfig();
const config2 = createConfig();

config1.count++;
console.log(config2.count); // 0 (different instances)
```

---

### **2. Circular Dependencies**

**Problem**:

```javascript
// a.js
const b = require("./b");
module.exports = { name: "A", b };

// b.js
const a = require("./a");
module.exports = { name: "B", a };

// Result: Incomplete exports
```

**Solution**:

```javascript
// Move shared code to separate module
// shared.js
module.exports = { sharedData: "data" };

// a.js
const shared = require("./shared");
module.exports = { name: "A", shared };

// b.js
const shared = require("./shared");
module.exports = { name: "B", shared };
```

---

### **3. Path Issues**

**Problem**:

```javascript
// Works in development, fails in production
const data = fs.readFileSync("./data.json", "utf-8");
```

**Solution**:

```javascript
// Use __dirname for absolute paths
const path = require("path");
const dataPath = path.join(__dirname, "data.json");
const data = fs.readFileSync(dataPath, "utf-8");
```

---

### **4. Encoding Issues**

**Problem**:

```javascript
const content = fs.readFileSync("./file.txt");
console.log(content); // <Buffer ...> not readable
```

**Solution**:

```javascript
// Always specify encoding for text files
const content = fs.readFileSync("./file.txt", "utf-8");
console.log(content); // Readable string
```

---

### **5. Error Handling in Async Functions**

**Problem**:

```javascript
async function fetchData() {
  const response = await fetch(url);
  return response.json(); // May fail without error handling
}
```

**Solution**:

```javascript
async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error; // Re-throw or return default
  }
}
```

---

## **Contributing Guidelines**

### **How to Contribute**

1. **Fork the Repository**

   - Click "Fork" button on GitHub
   - Clone your fork locally

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/nodeJS.git
   cd nodeJS
   ```

3. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

4. **Make Changes**

   - Add new examples or explanations
   - Fix errors or improve documentation
   - Follow existing code style and conventions
   - Add comments to explain complex logic

5. **Test Your Changes**

   ```bash
   # Test Node.js examples
   node path/to/your/file.js

   # Test browser examples
   # Open HTML files in browser
   ```

6. **Commit Changes**

   ```bash
   git add .
   git commit -m "Add: descriptive commit message"

   # Commit message format:
   # Add: new feature or file
   # Fix: bug fix
   # Update: modify existing code
   # Docs: documentation changes
   # Refactor: code restructuring
   ```

7. **Push to Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create Pull Request**
   - Go to original repository on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Provide clear description of changes
   - Reference any related issues

---

### **Contribution Standards**

#### **Code Quality**

- Write clean, readable code
- Add comments for complex logic
- Follow existing naming conventions
- Use consistent indentation (2 or 4 spaces)

#### **Documentation**

- Update documentation for new features
- Add inline comments where necessary
- Include usage examples
- Update README if structure changes

#### **Testing**

- Verify all examples work correctly
- Test on multiple platforms if possible
- Check for syntax errors
- Ensure no breaking changes

#### **Commit Messages**

- Use descriptive commit messages
- Follow conventional commit format
- Reference issues where applicable
- Keep commits atomic and focused

---

### **Code Style Guidelines**

```javascript
// Use const and let, avoid var
const API_URL = "https://api.example.com";
let count = 0;

// Use arrow functions for callbacks
array.map((item) => item * 2);

// Use template literals
const message = `Hello, ${name}!`;

// Use destructuring
const { id, name } = user;

// Use async/await over promises
async function fetchData() {
  const response = await fetch(url);
  return await response.json();
}

// Add error handling
try {
  // risky operation
} catch (error) {
  console.error("Error:", error);
}
```

---

## **Troubleshooting**

### **Common Issues and Solutions**

#### **Issue 1: Module Not Found**

**Error**: `Error: Cannot find module './file'`

**Solutions**:

```bash
# Check file path
ls -la # Verify file exists

# Check file extension
node file.js # Include extension if needed

# Check current directory
pwd

# Use correct relative path
const module = require("./path/to/file");
```

---

#### **Issue 2: ENOENT Error (File Not Found)**

**Error**: `ENOENT: no such file or directory`

**Solutions**:

```javascript
// Use absolute paths
const path = require("path");
const filePath = path.join(__dirname, "data", "file.txt");

// Check if file exists first
if (fs.existsSync(filePath)) {
  const content = fs.readFileSync(filePath, "utf-8");
}

// Use try-catch
try {
  const content = fs.readFileSync(filePath, "utf-8");
} catch (error) {
  console.error("File not found:", filePath);
}
```

---

#### **Issue 3: Encoding Problems**

**Problem**: Seeing strange characters or buffer output

**Solutions**:

```javascript
// Always specify encoding for text files
const content = fs.readFileSync("./file.txt", "utf-8");

// Convert buffer to string
const buffer = fs.readFileSync("./file.txt");
const content = buffer.toString("utf-8");

// Check file encoding
// Use tools like file command on Unix: file -i filename.txt
```

---

#### **Issue 4: Permission Denied**

**Error**: `EACCES: permission denied`

**Solutions**:

```bash
# Check file permissions
ls -l file.txt

# Change permissions (Unix/Mac)
chmod 644 file.txt # Read/write for owner

# Run with appropriate permissions
sudo node script.js # Use cautiously

# Check directory permissions
chmod 755 directory/
```

---

#### **Issue 5: Async/Await Not Working**

**Problem**: `SyntaxError: await is only valid in async function`

**Solutions**:

```javascript
// Wrap in async function
async function main() {
  const data = await fetchData();
  console.log(data);
}

main();

// Or use .then()
fetchData().then((data) => console.log(data));

// Top-level await (ES Modules only)
// Requires "type": "module" in package.json
```

---

#### **Issue 6: Circular Dependency**

**Problem**: Module exports are undefined or incomplete

**Solutions**:

```javascript
// Refactor to remove circular dependency
// Move shared code to separate module

// Use lazy loading
function getModule() {
  return require("./module");
}

// Restructure code to avoid circular references
```

---

#### **Issue 7: ES Module vs CommonJS**

**Problem**: `Cannot use import statement outside a module`

**Solutions**:

```bash
# Option 1: Rename file to .mjs
mv file.js file.mjs

# Option 2: Add to package.json
echo '{"type": "module"}' > package.json

# Option 3: Use CommonJS syntax
const module = require("./module");
```

---

#### **Issue 8: JSON Parse Error**

**Error**: `Unexpected token in JSON at position 0`

**Solutions**:

```javascript
try {
  const data = JSON.parse(content);
} catch (error) {
  console.error("Invalid JSON:", error);
  // Check file content
  console.log("Content:", content);
}

// Validate JSON before parsing
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}
```

---

## **License**

**Current Status**: No license specified

### **Recommended License Options**

Consider adding one of these open-source licenses:

- **MIT License** - Most permissive, allows commercial use
- **Apache 2.0** - Permissive with patent grant
- **GPL-3.0** - Copyleft, requires derivative works to be open source

To add a license:

```bash
# Create LICENSE file
touch LICENSE

# Copy license text from https://choosealicense.com/
```

---

## **Version Information**

### **Current Version**

- **Version**: 0.2.0
- **Status**: Active Development
- **Last Updated**: December 12, 2025

---

### **Changelog**

#### **v0.2.0 - December 12, 2025**

**Added:**

- ✨ File System (fs) module with comprehensive CRUD operations
- ✨ User-defined module examples (CommonJS & ES Modules)
- ✨ Module execution order demonstrations
- ✨ Enhanced module system documentation
- ✨ Buffer and encoding explanations
- ✨ Directory creation examples
- ✨ Error handling patterns

**Features:**

- Complete file system operations guide
- Module import/export patterns
- Synchronous vs asynchronous operation examples
- Practical code examples with real-world use cases

---

#### **v0.1.0 - December 9, 2025** (Initial Commit)

**Added:**

- JavaScript fundamentals in HTML file
- Synchronous and asynchronous execution examples
- Promise and async/await demonstrations
- Node.js starter examples
- Module system explanations (theoretical)
- Basic repository structure

**Features:**

- Browser-based JavaScript examples
- Node.js execution demonstrations
- CommonJS and ES Module explanations

---

### **Versioning Strategy**

Following **Semantic Versioning (SemVer)**: `MAJOR.MINOR.PATCH`

- **MAJOR**: Breaking changes (e.g., 1.0.0 → 2.0.0)
- **MINOR**: New features, backward compatible (e.g., 0.1.0 → 0.2.0)
- **PATCH**: Bug fixes, backward compatible (e.g., 0.1.0 → 0.1.1)

**Version Progression**:

- `0.1.0` - Initial learning examples
- `0.2.0` - File system and user-defined modules ✅ CURRENT
- `0.3.0` - HTTP module and server creation (planned)
- `0.4.0` - Path and Events modules (planned)
- `1.0.0` - Complete core Node.js coverage (planned)
- `2.0.0` - Express framework integration (planned)

---

## **Quick Reference**

### **Common Commands**

```bash
# Execute Node.js file
node filename.js

# Execute with debugging
node --inspect filename.js

# Execute with environment variable
NODE_ENV=production node filename.js

# Execute with maximum memory
node --max-old-space-size=4096 filename.js
```

---

### **File System Quick Reference**

```javascript
const fs = require("node:fs");

// Create/Write
fs.writeFileSync("./file.txt", "content");

// Read
fs.readFileSync("./file.txt", "utf-8");

// Append
fs.appendFileSync("./file.txt", "more content");

// Delete
fs.unlinkSync("./file.txt");

// Create directory
fs.mkdirSync("./directory");

// Read directory
fs.readdirSync("./directory");
```

---

### **Module Quick Reference**

```javascript
// CommonJS Export
module.exports = { func1, func2 };

// CommonJS Import
const module = require("./module");

// ES Module Export
export const func1 = () => {};
export default func2;

// ES Module Import
import { func1 } from "./module.js";
import func2 from "./module.js";
```

---

## **Conclusion**

This repository provides a comprehensive foundation for learning JavaScript and Node.js. With the recent additions of file system operations and practical module examples, you now have hands-on experience with:

✅ **JavaScript Fundamentals**

- Synchronous and asynchronous execution
- Event loop mechanics
- Promises and async/await

✅ **Node.js Core Concepts**

- Module systems (CommonJS & ES Modules)
- File system operations (CRUD)
- Global objects and wrapper functions
- Buffer and encoding handling

✅ **Practical Skills**

- Import/export patterns
- Error handling
- Directory structure creation
- Module execution order

✅ **Best Practices**

- Code organization
- Error handling strategies
- Performance considerations
- Security awareness

---

### **Next Steps**

1. **Practice**: Work through all examples in the repository
2. **Experiment**: Modify code and observe results
3. **Build**: Create small projects using learned concepts
4. **Explore**: Check upcoming phases in roadmap
5. **Contribute**: Share your learnings and improvements

---

### **Stay Connected**

- **Repository**: [https://github.com/utk-281/nodeJS](https://github.com/utk-281/nodeJS)
- **Issues**: Report bugs or request features
- **Pull Requests**: Contribute improvements
- **Discussions**: Share ideas and questions

---

**Document Version**: 2.0  
**Last Updated**: December 12, 2025  
**Maintained By**: [utk-281](https://github.com/utk-281)  
**Contributors**: Open for contributions

---

**Happy Learning! 🚀**

---
