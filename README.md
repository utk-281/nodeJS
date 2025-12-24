---

# **Node.js & Express.js Learning Repository**

## **Complete Documentation with In-Depth Concepts**

**A Comprehensive Guide to JavaScript Fundamentals, Node.js Core Modules, HTTP Server Development, Asynchronous Programming, File Systems, Buffers, Streams, and Modern Backend Development**

---

## **📚 Repository Description**

**Comprehensive Node.js Learning Repository** - Your ultimate guide to mastering JavaScript fundamentals, asynchronous programming patterns, Node.js core modules (fs, Buffer, Streams, HTTP), HTTP server creation, routing architecture, content rendering, module systems (CommonJS & ES Modules), event loop mechanics, and file operations. This repository provides hands-on examples progressing from beginner to advanced concepts with detailed code samples, architectural patterns, best practices, and real-world implementations perfect for backend JavaScript development.

**🏷️ Topics**: `nodejs` `javascript` `http` `server` `routing` `async-await` `promises` `file-system` `buffers` `streams` `event-loop` `modules` `backend` `express` `learning` `tutorial` `examples` `v8-engine` `libuv` `non-blocking-io`

---

## **📋 Table of Contents**

1. [Project Overview](#project-overview)
2. [Repository Structure](#repository-structure)
3. [What's New](#whats-new)
4. [Prerequisites](#prerequisites)
5. [Installation Guide](#installation-guide)
6. [Technology Stack](#technology-stack)
7. [Fundamental Concepts & Definitions](#fundamental-concepts--definitions)
8. [Module Breakdown](#module-breakdown)
   - [JavaScript Fundamentals](#javascript-fundamentals-module)
   - [HTTP Module](#http-module)
   - [Buffer & Streams](#buffer--streams-module)
   - [File System Module](#file-system-fs-module)
   - [User-Defined Modules](#user-defined-modules)
9. [Core Concepts Deep Dive](#core-concepts-deep-dive)
10. [Node.js Architecture & Internals](#nodejs-architecture--internals)
11. [HTTP Server Development](#http-server-development)
12. [Asynchronous Programming Patterns](#asynchronous-programming-patterns)
13. [Detailed Code Examples](#detailed-code-examples)
14. [Execution Instructions](#execution-instructions)
15. [Best Practices and Design Patterns](#best-practices-and-design-patterns)
16. [Common Pitfalls and Solutions](#common-pitfalls-and-solutions)
17. [Performance Optimization](#performance-optimization)
18. [Security Considerations](#security-considerations)
19. [Contributing Guidelines](#contributing-guidelines)
20. [Troubleshooting](#troubleshooting)
21. [Resources and References](#resources-and-references)
22. [Glossary](#glossary)
23. [Version Information](#version-information)

---

## **🎯 Project Overview**

This repository serves as a **comprehensive learning resource** and **practical reference** for **JavaScript**, **Node.js fundamentals**, **HTTP server development**, and the **Express.js framework**. It provides a structured learning path demonstrating core programming concepts including synchronous and asynchronous execution models, promises, async/await patterns, Node.js module systems, HTTP server creation, routing architectures, content rendering strategies, file system operations, binary data handling with buffers, and efficient data streaming.

### **Purpose & Learning Objectives**

**🎓 Educational Goals:**

- Master JavaScript execution models and runtime behavior
- Understand event-driven, non-blocking I/O architecture
- Build production-ready HTTP servers from scratch
- Implement RESTful routing patterns and endpoint management
- Handle multiple content types (HTML, CSS, JSON, plain text)
- Master Node.js module systems (CommonJS and ES Modules)
- Perform comprehensive file system operations (CRUD)
- Understand binary data handling with Buffers
- Implement efficient data streaming for large files
- Apply industry best practices and design patterns
- Optimize server performance and memory usage
- Implement proper error handling and security measures

### **Target Audience**

**👥 Who Should Use This Repository:**

- **Beginners**: Starting their journey in JavaScript and Node.js
- **Frontend Developers**: Transitioning to backend development
- **Students**: Learning web server fundamentals and architecture
- **Backend Developers**: Seeking to understand Node.js internals
- **Full-Stack Developers**: Building complete web applications
- **System Programmers**: Learning asynchronous programming patterns
- **DevOps Engineers**: Understanding Node.js deployment and operations

### **Repository Information**

- **Repository Name**: nodeJS
- **Owner**: [utk-281](https://github.com/utk-281)
- **Primary Language**: JavaScript (ES6+)
- **License**: Not specified
- **Created**: December 9, 2025
- **Last Updated**: December 23, 2025
- **Repository URL**: [https://github.com/utk-281/nodeJS](https://github.com/utk-281/nodeJS)
- **Stars**: Growing community
- **Forks**: Open for contributions

---

## **📁 Repository Structure**

```
nodeJS/
│
├── JavaScript/
│   └── index.html                                    # Browser JavaScript fundamentals
│                                                     # Async/Sync execution models
│                                                     # Promises and async/await patterns
│
├── Node/
│   └── Modules/
│       ├── Built In/                                 # Node.js core modules
│       │   │
│       │   ├── fs/                                   # File System module
│       │   │   ├── fs.js                             # Complete CRUD operations
│       │   │   │                                     # Sync, Callback, Promise patterns
│       │   │   └── buffer&Streams.js                 # Binary data handling
│       │   │                                         # Buffer creation & manipulation
│       │   │
│       │   └── http/                                 # HTTP server module
│       │       ├── starter.js                        # Server basics & lifecycle
│       │       ├── server.js                         # Content-type rendering
│       │       ├── routing.js                        # URL routing implementation
│       │       ├── rendering.js                      # Stream-based file serving
│       │       └── pages/
│       │           ├── index.html                    # Sample HTML page
│       │           └── style.css                     # Sample stylesheet
│       │
│       └── User Defined/                             # Custom module examples
│           ├── ex-1/
│           │   ├── file1.js                          # Export patterns (CommonJS/ESM)
│           │   └── file2.js                          # Import patterns (CommonJS/ESM)
│           └── ex-2/
│               ├── app.js                            # Module loading order
│               └── server.js                         # Module execution flow
│
├── Starter/
│   └── demo.js                                       # Node.js basics
│                                                     # Global object
│                                                     # Event loop demonstration
│
├── demo.js                                           # Promise chaining examples
│                                                     # then/catch patterns
│
└── README.md                                         # Complete documentation (this file)
```

### **Directory Explanation**

| Directory/File                | Purpose          | Key Concepts                    | Lines of Code |
| ----------------------------- | ---------------- | ------------------------------- | ------------- |
| `JavaScript/`                 | Browser-based JS | Sync/Async, Promises, Fetch API | ~150          |
| `Node/Modules/Built In/fs/`   | File operations  | CRUD, Streams, Encoding         | ~300          |
| `Node/Modules/Built In/http/` | HTTP servers     | Routing, Content-types, Streams | ~250          |
| `Node/Modules/User Defined/`  | Module patterns  | Import/Export, Module loading   | ~100          |
| `Starter/`                    | Node.js basics   | Execution, Global objects       | ~50           |
| `demo.js`                     | Promise examples | Chaining, Error handling        | ~30           |

---

## **🆕 What's New**

### **Latest Additions (December 23, 2025)**

#### **✨ HTTP Module - Complete Server Development Suite**

**Location**: `Node/Modules/Built In/http/`

**📦 New Files & Features:**

1. **`starter.js`** - HTTP Server Fundamentals (1760 bytes)

   - ✅ Server creation with `http.createServer()`
   - ✅ Request-Response lifecycle management
   - ✅ Multiple response methods (`write()`, `end()`, `writeHead()`)
   - ✅ Status code and header configuration
   - ✅ Request and response stream understanding
   - ✅ Server startup, shutdown, and restart procedures
   - 📝 Comprehensive inline documentation

2. **`server.js`** - Content-Type Rendering Engine (1749 bytes)

   - ✅ Plain text response handling
   - ✅ HTML content rendering
   - ✅ CSS file serving
   - ✅ JSON API responses
   - ✅ Custom header management (`setHeader()`)
   - ✅ Multiple content-type demonstrations
   - ✅ Real-world API response structures

3. **`routing.js`** - Routing Architecture (676 bytes)

   - ✅ Multi-endpoint handling (`/`, `/login`)
   - ✅ URL parsing with `req.url`
   - ✅ Conditional routing logic
   - ✅ JSON response formatting
   - ✅ 404 error handling
   - ✅ Stream-based HTML serving

4. **`rendering.js`** - Stream-Based File Serving (593 bytes)

   - ✅ `fs.createReadStream()` implementation
   - ✅ Stream piping (`data.pipe(res)`)
   - ✅ Multiple content-type routes
   - ✅ Dynamic content routing
   - ✅ Memory-efficient file serving
   - ✅ HTML/CSS coordination

5. **`pages/index.html`** - Sample HTML Page (326 bytes)

   - ✅ Semantic HTML5 structure
   - ✅ External CSS linking
   - ✅ Meta viewport configuration
   - ✅ Server-side rendering demonstration

6. **`pages/style.css`** - Sample Stylesheet (54 bytes)
   - ✅ Universal selector styling
   - ✅ Dynamic CSS serving example
   - ✅ Content-type demonstration

#### **📚 Enhanced Documentation**

- ✅ Detailed architectural diagrams
- ✅ In-depth concept explanations
- ✅ Real-world code examples
- ✅ Performance optimization strategies
- ✅ Security best practices
- ✅ Comprehensive troubleshooting guide
- ✅ Glossary of technical terms

---

## **✅ Prerequisites**

### **Required Software**

#### **1. Node.js (v14.0.0 or higher)**

**Installation:**

```bash
# Download from official website
https://nodejs.org/

# Verify installation
node --version
# Expected output: v14.x.x or higher

# Check npm bundled version
npm --version
# Expected output: 6.x.x or higher
```

**Why Node.js?**

- JavaScript runtime built on Chrome's V8 engine
- Enables server-side JavaScript execution
- Provides non-blocking I/O operations
- Includes comprehensive standard library

#### **2. npm (Node Package Manager)**

**Features:**

- Bundled automatically with Node.js
- Manages project dependencies
- Provides access to npm registry (1M+ packages)
- Handles version management

```bash
# Verify npm installation
npm --version

# Update npm to latest
npm install -g npm@latest
```

#### **3. Web Browser**

**Recommended Browsers:**

- **Chrome** (v90+) - Best DevTools
- **Firefox** (v88+) - Excellent debugging
- **Safari** (v14+) - macOS native
- **Edge** (v90+) - Windows native

**Why Browser?**

- Test JavaScript fundamentals
- Debug client-side code
- View rendered HTML/CSS
- Inspect network requests

#### **4. Code Editor**

**Recommended Options:**

1. **Visual Studio Code** (Recommended)

   ```bash
   # Download from
   https://code.visualstudio.com/

   # Essential Extensions:
   - ESLint
   - Prettier
   - Node.js Extension Pack
   - REST Client
   ```

2. **Alternative Editors:**
   - **WebStorm** - Full-featured IDE
   - **Sublime Text** - Lightweight, fast
   - **Atom** - GitHub integration
   - **Vim/Neovim** - Terminal-based

---

### **Knowledge Prerequisites**

#### **Essential Concepts:**

1. **JavaScript Fundamentals**

   - Variables (var, let, const)
   - Data types (primitives, objects)
   - Functions (regular, arrow, async)
   - Control flow (if/else, loops)
   - Objects and arrays
   - ES6+ features

2. **Programming Concepts**

   - Algorithmic thinking
   - Data structures (arrays, objects, maps)
   - Error handling (try/catch)
   - Debugging techniques

3. **Command-Line Operations**

   ```bash
   # Navigate directories
   cd directory_name

   # List files
   ls        # Unix/Mac
   dir       # Windows

   # Execute Node.js
   node filename.js

   # Stop process
   Ctrl + C
   ```

4. **HTTP Basics**
   - Request methods (GET, POST, PUT, DELETE)
   - Status codes (200, 404, 500)
   - Headers and content-types
   - Client-server architecture

#### **Recommended (Not Required):**

- Git version control
- JSON data format
- RESTful API concepts
- Basic networking knowledge

---

## **🚀 Installation Guide**

### **Step 1: Clone the Repository**

```bash
# Using HTTPS (recommended for beginners)
git clone https://github.com/utk-281/nodeJS.git

# Using SSH (requires SSH key setup)
git clone git@github.com:utk-281/nodeJS.git

# Using GitHub CLI
gh repo clone utk-281/nodeJS

# Navigate to project directory
cd nodeJS
```

---

### **Step 2: Verify Node.js Installation**

```bash
# Check Node.js version
node --version
# Expected: v14.0.0 or higher

# Check npm version
npm --version
# Expected: 6.0.0 or higher

# Test Node.js execution
node -e "console.log('Node.js is working!')"
# Expected output: Node.js is working!
```

**If Node.js is not installed:**

1. Visit [https://nodejs.org/](https://nodejs.org/)
2. Download LTS (Long Term Support) version
3. Run installer and follow prompts
4. Restart terminal and verify

---

### **Step 3: Explore Repository Structure**

```bash
# List all files and directories
ls -la              # Unix/Mac
dir                 # Windows

# Navigate to HTTP module
cd Node/Modules/Built\ In/http
ls

# View file contents
cat starter.js      # Unix/Mac
type starter.js     # Windows

# Return to root directory
cd ../../../../
# Or
cd ~/path/to/nodeJS
```

---

### **Step 4: Test Basic Examples**

```bash
# Test Starter module
cd Starter
node demo.js
# Expected output: hello world

# Test HTTP server
cd ../Node/Modules/Built\ In/http
node starter.js
# Expected output: server running
# Open browser: http://localhost:9000

# Stop server
# Press Ctrl + C
```

---

### **Step 5: Set Up Development Environment (Optional)**

```bash
# Initialize package.json (if needed for future npm packages)
npm init -y

# Install development tools (optional)
npm install --save-dev nodemon      # Auto-restart server
npm install --save-dev eslint       # Code linting
npm install --save-dev prettier     # Code formatting

# Add scripts to package.json
"scripts": {
  "start": "node Node/Modules/Built\\ In/http/server.js",
  "dev": "nodemon Node/Modules/Built\\ In/http/server.js"
}

# Run scripts
npm start           # Start server
npm run dev         # Start with auto-restart
```

---

## **🛠️ Technology Stack**

### **Core Technologies**

| Technology     | Version                 | Purpose                        | Documentation                                                       |
| -------------- | ----------------------- | ------------------------------ | ------------------------------------------------------------------- |
| **JavaScript** | ES6+ (ECMAScript 2015+) | Core programming language      | [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| **Node.js**    | v14+ (LTS recommended)  | Server-side JavaScript runtime | [Node.js Docs](https://nodejs.org/docs/)                            |
| **V8 Engine**  | Bundled with Node.js    | JavaScript execution engine    | [V8 Docs](https://v8.dev/)                                          |
| **libuv**      | Bundled with Node.js    | Asynchronous I/O library       | [libuv Docs](http://docs.libuv.org/)                                |
| **HTML5**      | Latest                  | Document structure             | [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)       |
| **CSS3**       | Latest                  | Styling and layout             | [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)         |

---

### **Node.js Built-in Modules**

| Module          | Version           | Purpose                             | File Location                                | Documentation                                                   |
| --------------- | ----------------- | ----------------------------------- | -------------------------------------------- | --------------------------------------------------------------- |
| **http**        | Built-in          | HTTP server creation & handling     | `Node/Modules/Built In/http/`                | [http docs](https://nodejs.org/api/http.html)                   |
| **fs**          | Built-in          | File system operations (sync/async) | `Node/Modules/Built In/fs/`                  | [fs docs](https://nodejs.org/api/fs.html)                       |
| **fs/promises** | Built-in          | Promise-based file operations       | `Node/Modules/Built In/fs/fs.js`             | [fs/promises docs](https://nodejs.org/api/fs.html#promises-api) |
| **Buffer**      | Built-in (global) | Binary data handling                | `Node/Modules/Built In/fs/buffer&Streams.js` | [Buffer docs](https://nodejs.org/api/buffer.html)               |
| **Streams**     | Built-in          | Data streaming (pipes, chunks)      | Used across fs and http modules              | [Stream docs](https://nodejs.org/api/stream.html)               |

---

### **JavaScript Language Features**

#### **ES6+ Features Used**

| Feature                  | Purpose                            | Examples in Repo                           |
| ------------------------ | ---------------------------------- | ------------------------------------------ |
| **Arrow Functions**      | Concise function syntax            | `(req, res) => {}`                         |
| **Const/Let**            | Block-scoped variables             | `const server = ...`                       |
| **Template Literals**    | String interpolation               | `` `Server on ${port}` ``                  |
| **Destructuring**        | Extract values from objects/arrays | `const { createServer } = require('http')` |
| **Promises**             | Asynchronous operations            | `fetch().then().catch()`                   |
| **Async/Await**          | Async code that looks synchronous  | `async function() { await ... }`           |
| **Module Import/Export** | ES Module system                   | `export default`, `import from`            |

---

### **Development Tools (Optional)**

| Tool         | Purpose                        | Installation                         |
| ------------ | ------------------------------ | ------------------------------------ |
| **nodemon**  | Auto-restart server on changes | `npm install -g nodemon`             |
| **ESLint**   | Code quality and consistency   | `npm install -g eslint`              |
| **Prettier** | Code formatting                | `npm install -g prettier`            |
| **Postman**  | API testing                    | [Download](https://www.postman.com/) |
| **curl**     | Command-line HTTP client       | Built-in (Unix/Mac)                  |

---

## **📖 Fundamental Concepts & Definitions**

### **1. Node.js - Core Definition**

**What is Node.js?**

Node.js is an **open-source, cross-platform JavaScript runtime environment** that executes JavaScript code outside of a web browser. It is built on **Chrome's V8 JavaScript engine** and uses an **event-driven, non-blocking I/O model** that makes it lightweight and efficient.

**Key Characteristics:**

- **Runtime Environment**: Not a language or framework, but an execution environment
- **Single-Threaded**: Uses one main thread for JavaScript execution
- **Event-Driven**: Architecture based on events and callbacks
- **Non-Blocking I/O**: Asynchronous operations don't block the main thread
- **Cross-Platform**: Runs on Windows, macOS, Linux
- **Package Ecosystem**: npm (Node Package Manager) with 1M+ packages

**Architecture Components:**

```
┌─────────────────────────────────────────┐
│         Node.js Application             │
├─────────────────────────────────────────┤
│    JavaScript (Your Code)               │
├─────────────────────────────────────────┤
│    Node.js Bindings (C/C++)             │
├─────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────────────────┐ │
│  │ V8 Engine│  │      libuv           │ │
│  │ (Chrome) │  │ (Async I/O Library)  │ │
│  └──────────┘  └──────────────────────┘ │
└─────────────────────────────────────────┘
```

---

### **2. Event Loop - Core Mechanism**

**Definition:**

The **Event Loop** is the mechanism that allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded. It orchestrates the execution of code, collection of events, and execution of queued sub-tasks.

**How It Works:**

```
┌───────────────────────────┐
│    1. Call Stack          │ ← Executes synchronous code (LIFO)
└───────────────────────────┘
            ↓
┌───────────────────────────┐
│    2. Node APIs           │ ← Handles async operations (setTimeout, fs, http)
│       (Web APIs)          │
└───────────────────────────┘
            ↓
┌───────────────────────────┐
│  3. Microtask Queue       │ ← Higher Priority
│    - process.nextTick()   │   (Promises, queueMicrotask)
│    - Promises             │
└───────────────────────────┘
            ↓
┌───────────────────────────┐
│  4. Callback Queue        │ ← Lower Priority
│    (Macrotask Queue)      │   (setTimeout, setInterval, I/O)
│    - setTimeout()         │
│    - setInterval()        │
│    - I/O operations       │
└───────────────────────────┘
```

**Event Loop Phases:**

1. **Timers Phase**: Executes `setTimeout()` and `setInterval()` callbacks
2. **Pending Callbacks Phase**: Executes I/O callbacks deferred to next iteration
3. **Idle/Prepare Phase**: Internal use only
4. **Poll Phase**: Retrieves new I/O events; executes I/O callbacks
5. **Check Phase**: Executes `setImmediate()` callbacks
6. **Close Callbacks Phase**: Executes close event callbacks (e.g., `socket.on('close')`)

**Priority Order:**

```
process.nextTick() > Promises > setTimeout() > I/O > setImmediate()
```

---

### **3. Synchronous vs Asynchronous Execution**

#### **Synchronous (Blocking) Execution**

**Definition**: Operations that execute one after another, each waiting for the previous one to complete before starting.

**Characteristics:**

- ✅ **Predictable order**: Code executes exactly in the order written
- ✅ **Easy to understand**: Linear flow of execution
- ❌ **Blocking**: Halts entire program until operation completes
- ❌ **Performance**: Slow for I/O-heavy operations
- ❌ **User experience**: Can freeze UI/application

**Example:**

```javascript
console.log("Start"); // 1. Executes first
for (let i = 0; i < 10000; i++) {
  console.log(i); // 2. Blocks for duration of loop
}
console.log("Middle"); // 3. Executes after loop
console.log("End"); // 4. Executes last
```

**When to Use:**

- Simple scripts and utilities
- Configuration file reading at startup
- Sequential data processing required
- Small, quick operations

---

#### **Asynchronous (Non-Blocking) Execution**

**Definition**: Operations that start and then allow the program to continue while they complete in the background, invoking a callback when finished.

**Characteristics:**

- ✅ **Non-blocking**: Program continues while operation runs
- ✅ **Performance**: Efficient for I/O operations
- ✅ **Scalability**: Handle many operations concurrently
- ❌ **Complexity**: Harder to understand flow
- ❌ **Error handling**: More complex error management

**Example:**

```javascript
console.log("Start"); // 1. Executes immediately

setTimeout(() => {
  console.log("Async operation"); // 3. Executes last (after 1000ms)
}, 1000);

console.log("End"); // 2. Executes before setTimeout
```

**When to Use:**

- Network requests (HTTP, database)
- File I/O operations
- User interactions
- Any operation that takes time
- Server applications (essential!)

---

### **4. Promises - Advanced Async Pattern**

**Definition:**

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. It's a proxy for a value not necessarily known when the promise is created.

**Promise States:**

```
┌─────────────────────┐
│      PENDING        │ ← Initial state
│   (not fulfilled    │
│   or rejected yet)  │
└─────────────────────┘
         │
         ├──────────────┬──────────────┐
         │              │              │
         ▼              ▼              ▼
┌──────────────┐  ┌──────────────┐
│  FULFILLED   │  │   REJECTED   │
│  (success)   │  │   (failure)  │
│  - resolve() │  │   - reject() │
└──────────────┘  └──────────────┘
         │              │
         └──────┬───────┘
                │
         ┌──────▼────────┐
         │   SETTLED     │
         │ (immutable)   │
         └───────────────┘
```

**Promise Creation:**

```javascript
let promise = new Promise((resolve, reject) => {
  // Async operation
  let success = true;

  if (success) {
    resolve("Operation successful"); // Fulfills promise
  } else {
    reject("Operation failed"); // Rejects promise
  }
});
```

**Promise Chaining:**

```javascript
promise
  .then((result) => {
    console.log(result); // Handles success
    return processedResult; // Can return for next .then()
  })
  .then((processedResult) => {
    console.log(processedResult); // Handles previous result
  })
  .catch((error) => {
    console.error(error); // Handles any error in chain
  })
  .finally(() => {
    console.log("Cleanup"); // Always executes
  });
```

---

### **5. Async/Await - Syntactic Sugar for Promises**

**Definition:**

`async/await` is syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code, improving readability and maintainability.

**Key Features:**

**1. async Function:**

- Declared with `async` keyword
- Always returns a Promise automatically
- Can contain `await` expressions

```javascript
async function fetchData() {
  return "data"; // Automatically wrapped in Promise
}

// Equivalent to:
function fetchData() {
  return Promise.resolve("data");
}
```

**2. await Expression:**

- Only valid inside `async` functions
- Suspends function execution until Promise resolves
- Returns resolved value of Promise

```javascript
async function getData() {
  let result = await fetch("https://api.example.com/data");
  console.log(result); // Waits for fetch to complete
}
```

**Error Handling:**

```javascript
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw or handle
  }
}
```

---

### **6. Modules - Code Organization**

**Definition:**

A **module** is a reusable piece of code that encapsulates implementation details and exposes a public API. Node.js uses modules to organize and manage code dependencies.

**Module Types:**

#### **1. Built-in (Core) Modules**

- Part of Node.js installation
- No installation required
- Examples: `http`, `fs`, `path`, `os`, `crypto`

```javascript
const http = require("http"); // CommonJS
// or
import http from "http"; // ES Module
```

#### **2. User-Defined (Local) Modules**

- Created by developers
- Custom business logic
- Organized in project structure

```javascript
const myModule = require("./myModule"); // CommonJS
// or
import myModule from "./myModule.js"; // ES Module
```

#### **3. Third-Party (External) Modules**

- Installed from npm registry
- Community contributions
- Managed in `node_modules/`

```javascript
const express = require("express"); // CommonJS
// or
import express from "express"; // ES Module
```

---

### **7. HTTP Protocol Fundamentals**

**Definition:**

**HTTP (HyperText Transfer Protocol)** is an application-layer protocol for transmitting hypermedia documents. It's the foundation of data communication on the Web.

**HTTP Request Structure:**

```
GET /api/users HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Accept: application/json
Content-Type: application/json

[Request Body - optional]
```

**HTTP Response Structure:**

```
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 1234
Server: Node.js

[Response Body]
```

**HTTP Methods:**

| Method      | Purpose             | Has Body | Idempotent | Safe |
| ----------- | ------------------- | -------- | ---------- | ---- |
| **GET**     | Retrieve resource   | No       | Yes        | Yes  |
| **POST**    | Create resource     | Yes      | No         | No   |
| **PUT**     | Update resource     | Yes      | Yes        | No   |
| **DELETE**  | Delete resource     | No       | Yes        | No   |
| **PATCH**   | Partial update      | Yes      | No         | No   |
| **HEAD**    | Get headers only    | No       | Yes        | Yes  |
| **OPTIONS** | Get allowed methods | No       | Yes        | Yes  |

**HTTP Status Code Categories:**

| Range   | Category      | Meaning                       | Examples                            |
| ------- | ------------- | ----------------------------- | ----------------------------------- |
| **1xx** | Informational | Request received, continuing  | 100 Continue                        |
| **2xx** | Success       | Request successfully received | 200 OK, 201 Created                 |
| **3xx** | Redirection   | Further action needed         | 301 Moved, 304 Not Modified         |
| **4xx** | Client Error  | Client-side error             | 400 Bad Request, 404 Not Found      |
| **5xx** | Server Error  | Server-side error             | 500 Internal Error, 503 Unavailable |

---

### **8. Streams - Efficient Data Handling**

**Definition:**

**Streams** are collections of data that might not be available all at once and don't have to fit in memory. They allow processing data piece by piece (chunks) instead of loading everything into memory.

**Stream Types:**

```
┌─────────────────────────────────────────┐
│            Stream Types                 │
├─────────────────────────────────────────┤
│                                         │
│  1. Readable Stream                     │
│     ├─ fs.createReadStream()            │
│     ├─ http.IncomingMessage (req)       │
│     └─ Can read data FROM source        │
│                                         │
│  2. Writable Stream                     │
│     ├─ fs.createWriteStream()           │
│     ├─ http.ServerResponse (res)        │
│     └─ Can write data TO destination    │
│                                         │
│  3. Duplex Stream                       │
│     ├─ net.Socket                       │
│     └─ Both readable and writable       │
│                                         │
│  4. Transform Stream                    │
│     ├─ zlib.createGzip()                │
│     └─ Modify data while reading/writing│
│                                         │
└─────────────────────────────────────────┘
```

**Stream Piping:**

**Definition**: `.pipe()` connects a readable stream to a writable stream, automatically managing flow control and backpressure.

```javascript
// Without streams (entire file in memory)
fs.readFile("large-file.txt", (err, data) => {
  res.end(data); // Memory: Full file size
});

// With streams (chunked processing)
fs.createReadStream("large-file.txt").pipe(res); // Memory: Only chunks
```

**Benefits of Streams:**

- ✅ **Memory Efficient**: Process data in chunks
- ✅ **Time Efficient**: Start processing before all data is available
- ✅ **Composable**: Chain multiple operations
- ✅ **Scalable**: Handle large files without memory issues

---

### **9. Buffers - Binary Data**

**Definition:**

A **Buffer** is a temporary storage spot for a chunk of data being transferred from one place to another. In Node.js, Buffer is a global class for dealing with binary data directly.

**Why Buffers?**

JavaScript was originally designed for browsers (strings/text). Buffers enable handling of:

- Binary files (images, videos, PDFs)
- Network protocols (TCP/UDP packets)
- Cryptographic operations
- Raw memory access

**Buffer Representation:**

```
String: "NodeJS"
         ↓
Buffer (Hexadecimal): <Buffer 4e 6f 64 65 4a 53>
         ↓
Decimal Array: [78, 111, 100, 101, 74, 83]
```

**Character Encoding:**

| Encoding   | Bytes per Char  | Use Case                   |
| ---------- | --------------- | -------------------------- |
| **ASCII**  | 1 byte          | English characters (0-127) |
| **UTF-8**  | 1-4 bytes       | Universal (most popular)   |
| **UTF-16** | 2-4 bytes       | Unicode (Windows default)  |
| **Base64** | ~1.37x original | Binary-to-text encoding    |
| **Hex**    | 2x original     | Hexadecimal representation |

---

## **📦 Module Breakdown**

### **JavaScript Fundamentals Module**

**Location**: `JavaScript/index.html`

**Purpose**: Demonstrates core JavaScript execution models, asynchronous programming patterns, and browser-based JavaScript capabilities.

---

#### **1. Synchronous Execution Pattern**

**Code Example:**

```javascript
console.log("start");
for (let i = 0; i < 10000; i++) {
  console.log(i);
}
console.log("middle");
console.log("end");
```

**Detailed Explanation:**

**Execution Flow:**

1. `console.log("start")` - Executes immediately, prints "start"
2. `for` loop - **Blocks** execution, runs 10,000 iterations
   - Each `console.log(i)` must complete before next iteration
   - Main thread is **blocked** during entire loop
3. `console.log("middle")` - Waits for loop to finish
4. `console.log("end")` - Executes last

**Call Stack Visualization:**

```
Call Stack (LIFO - Last In, First Out):
───────────────────────────────────────
│ console.log(9999)     │ ← Top
│ console.log(9998)     │
│ console.log(...)      │
│ for loop iteration    │
│ main()                │ ← Bottom
───────────────────────────────────────
```

**Characteristics:**

- **Predictable**: Always same execution order
- **Blocking**: Halts program until complete
- **Simple**: Easy to debug and understand
- **Inefficient**: Wastes CPU on waiting

**Real-World Analogy**:
Like a single-lane highway: each car must wait for the one in front to move before proceeding.

---

#### **2. Asynchronous Execution Pattern**

**Code Example 1: Basic setTimeout**

```javascript
setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);

console.log("Start");
```

**Output:**

```
Start
inside setTimeout  (after 1 second)
```

**Detailed Explanation:**

**Execution Flow:**

1. `setTimeout()` is called
   - Callback function registered
   - Timer started (1000ms)
   - **Does NOT block** - execution continues immediately
2. `console.log("Start")` executes immediately
3. After 1000ms, callback added to **Callback Queue**
4. **Event Loop** checks if Call Stack is empty
5. If empty, moves callback to Call Stack
6. `console.log("inside setTimeout")` executes

**Event Loop Visualization:**

```
┌───────────────────┐
│   Call Stack      │ 1. setTimeout() → registers, returns
│                   │ 2. console.log("Start") → executes
└───────────────────┘
         ↑
         │ 4. Move to Call Stack when empty
         │
┌───────────────────┐
│  Callback Queue   │ 3. After 1000ms, callback added here
│ [setTimeout cb]   │
└───────────────────┘
```

---

**Code Example 2: Multiple Async Operations**

```javascript
console.log(1);

setTimeout(() => {
  console.log(2);
});

setTimeout(() => {
  console.log(3);
});

console.log(4);
```

**Output:**

```
1
4
2
3
```

**Execution Order Analysis:**

| Step | Code             | Queue          | Call Stack       | Output |
| ---- | ---------------- | -------------- | ---------------- | ------ |
| 1    | `console.log(1)` | -              | Execute sync     | `1`    |
| 2    | `setTimeout(2)`  | Callback Queue | Register, return | -      |
| 3    | `setTimeout(3)`  | Callback Queue | Register, return | -      |
| 4    | `console.log(4)` | -              | Execute sync     | `4`    |
| 5    | Call Stack Empty | Move cb1       | Execute cb1      | `2`    |
| 6    | Call Stack Empty | Move cb2       | Execute cb2      | `3`    |

---

**Code Example 3: Microtask vs Macrotask**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("inside setTimeout");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("end");
```

**Output:**

```
Start
end
Promise
inside setTimeout
```

**Priority Explanation:**

```
┌─────────────────────────────────┐
│ Execution Priority (High to Low)│
├─────────────────────────────────┤
│ 1. Call Stack (Sync code)       │ ← Highest
│ 2. Microtask Queue (Promises)   │ ← Higher than setTimeout
│ 3. Callback Queue (setTimeout)  │ ← Lowest
└─────────────────────────────────┘
```

**Detailed Flow:**

1. **Synchronous code executes first:**

   - `console.log("Start")` → Output: "Start"
   - `setTimeout()` → Registers callback in Callback Queue
   - `Promise.resolve().then()` → Adds to Microtask Queue
   - `console.log("end")` → Output: "end"

2. **Call Stack is now empty**

3. **Event Loop checks Microtask Queue first:**

   - Finds Promise callback
   - Executes: Output "Promise"

4. **Microtask Queue empty, check Callback Queue:**
   - Finds setTimeout callback
   - Executes: Output "inside setTimeout"

**Key Rule**: Microtasks ALWAYS execute before Macrotasks (setTimeout)

---

#### **3. Promises - Deep Dive**

**Creating Promises:**

```javascript
let promise = new Promise((resolve, reject) => {
  let a = 20;
  if (a == 20) {
    resolve({ name: "abc", age: 34 }); // Success
  } else {
    reject("false"); // Failure
  }
});
```

**Promise Anatomy:**

```
┌────────────────────────────────────┐
│         new Promise()              │
├────────────────────────────────────┤
│ Constructor receives:              │
│ - Executor function                │
│   - resolve: function to fulfill   │
│   - reject: function to reject     │
├────────────────────────────────────┤
│ Returns: Promise object            │
│ Initial state: PENDING             │
└────────────────────────────────────┘
```

---

**Promise Chaining:**

```javascript
promise
  .then((data) => {
    console.log(data); // { name: "abc", age: 34 }
    return data; // Pass to next .then()
  })
  .then((payload) => {
    console.log(payload.name); // "abc"
  })
  .catch((error) => {
    console.log(error); // Handles any rejection
  });
```

**Chaining Rules:**

1. **Each `.then()` returns a new Promise**

   ```javascript
   promise1.then(...) // Returns promise2
          .then(...) // Returns promise3
          .then(...) // Returns promise4
   ```

2. **Return values are wrapped in Promise**

   ```javascript
   .then((data) => {
     return "hello";              // Wrapped in Promise.resolve("hello")
   })
   ```

3. **Single `.catch()` handles all errors**
   ```javascript
   promise
     .then(step1) // May throw error
     .then(step2) // May throw error
     .then(step3) // May throw error
     .catch(handleAllErrors); // Catches any error above
   ```

---

**Fetch API with Promises:**

```javascript
let output = fetch("https://jsonplaceholder.typicode.com/posts");

output
  .then((response) => {
    console.log(response); // Response object (not JSON yet)
    let jsonPromise = response.json(); // Returns another Promise
    return jsonPromise;
  })
  .then((data) => {
    console.log(data); // Actual JSON data (array of posts)
  })
  .catch((error) => {
    console.log(error); // Network or parsing error
  });
```

**Fetch Flow Diagram:**

```
fetch(url)
    ↓
[Promise<Response>]
    ↓
.then(response => response.json())
    ↓
[Promise<JSON>]
    ↓
.then(data => console.log(data))
    ↓
[Actual Data]
```

---

#### **4. Async/Await - Modern Syntax**

**Basic async/await:**

```javascript
async function getTodos() {
  let output = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(output); // Response object

  let jsonData = await output.json();
  console.log(jsonData); // Array of posts
}

getTodos();
```

**How async/await Works:**

```
Regular Promise Chain:
──────────────────────
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))

↓ Transforms to ↓

Async/Await:
──────────────────────
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
```

---

**Async Function Characteristics:**

1. **Always Returns Promise:**

   ```javascript
   async function test() {
     return 123; // Wrapped in Promise.resolve(123)
   }

   test().then((value) => console.log(value)); // 123
   ```

2. **await Suspends Execution:**

   ```javascript
   async function demo() {
     console.log("1");
     await Promise.resolve(); // Pauses here
     console.log("2"); // Executes after promise resolves
   }
   ```

3. **Error Handling with try/catch:**
   ```javascript
   async function fetchData() {
     try {
       let response = await fetch(url);
       if (!response.ok) throw new Error("HTTP Error");
       let data = await response.json();
       return data;
     } catch (error) {
       console.error("Error:", error);
     }
   }
   ```

---

**Async/await vs Promises Comparison:**

| Aspect             | Promises                    | Async/Await            |
| ------------------ | --------------------------- | ---------------------- |
| **Syntax**         | `.then().catch()` chaining  | `try/catch` blocks     |
| **Readability**    | Can become nested           | Linear, easier to read |
| **Error Handling** | `.catch()` for each chain   | Single `try/catch`     |
| **Debugging**      | Stack traces can be complex | Better stack traces    |
| **Compatibility**  | ES6 (2015)                  | ES8 (2017)             |
| **Use Case**       | Simple chains               | Complex async logic    |

---

### **HTTP Module**

**Location**: `Node/Modules/Built In/http/`

**Purpose**: Complete guide to building HTTP servers, handling requests/responses, implementing routing, and serving different content types.

---

#### **1. HTTP Server Basics (`starter.js`)**

**File Size**: 1760 bytes  
**Lines of Code**: ~50

##### **Creating Your First Server**

**Step-by-Step Process:**

```javascript
//! Step 1: Import http module
const { createServer } = require("node:http");
// or: const http = require("http");
//     const createServer = http.createServer;

//! Step 2: Create server with callback
let server = createServer((req, res) => {
  // req: Incoming request stream
  // res: Outgoing response stream

  console.log("Request accepted");
  res.end("hi from server");
});

//! Step 3: Listen on port
server.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("Server running on http://localhost:9000");
});
```

---

**Detailed Explanation:**

**1. Import HTTP Module:**

```javascript
const { createServer } = require("node:http");
```

- `node:` prefix: Modern Node.js convention (optional)
- `createServer`: Factory function that creates HTTP server
- Returns: Server instance

**2. Create Server:**

```javascript
let server = createServer((req, res) => { ... });
```

- `createServer()` accepts **callback function**
- Callback receives two parameters:
  - `req` (http.IncomingMessage): Request stream
  - `res` (http.ServerResponse): Response stream
- Callback executes for **every incoming request**

**3. Listen on Port:**

```javascript
server.listen(9000, callback);
```

- `9000`: Port number (1024-65535 for non-privileged)
- `callback`: Executes once server starts (optional)
- Server now accepts connections

---

**Request Object (req) Properties:**

```javascript
createServer((req, res) => {
  console.log(req.url); // '/about' - Requested URL path
  console.log(req.method); // 'GET' - HTTP method
  console.log(req.headers); // {...} - Request headers
  console.log(req.httpVersion); // '1.1' - HTTP version
});
```

**req Object Structure:**

```
req (http.IncomingMessage - Readable Stream)
├── url: '/path?query=value'
├── method: 'GET' | 'POST' | 'PUT' | 'DELETE'
├── headers: {
│   ├── 'host': 'localhost:9000'
│   ├── 'user-agent': 'Mozilla/5.0...'
│   ├── 'accept': 'text/html'
│   └── ...
│   }
├── httpVersion: '1.1'
└── socket: {...}
```

---

**Response Object (res) Methods:**

##### **1. `res.write()` - Send Data in Chunks**

```javascript
createServer((req, res) => {
  res.write("First chunk\n");
  res.write("Second chunk\n");
  res.write("Third chunk\n");
  res.end(); // Must call to finish response

  // res.write("After end"); // ERROR! Can't write after end()
});
```

**When to Use:**

- Send large data in chunks
- Stream data progressively
- Multiple write operations before ending

**Important Rules:**

- ✅ Can call `write()` multiple times
- ✅ Must call `end()` to finish
- ❌ Cannot write after `end()`
- ❌ Response hangs if `end()` not called

---

##### **2. `res.end()` - End Response**

```javascript
// End without data
res.end();

// End with data
res.end("Final message");

// Common pattern
res.end(JSON.stringify({ success: true }));
```

**What `res.end()` Does:**

1. Optionally sends final data
2. Signals response is complete
3. Closes connection
4. Flushes buffers

**Important**: Response won't be sent until `end()` is called!

---

##### **3. `res.writeHead()` - Set Status and Headers**

```javascript
res.writeHead(200, { "content-type": "text/html" });
// Status: 200 OK
// Header: Content-Type = text/html
```

**Complete Signature:**

```javascript
res.writeHead(statusCode, [statusMessage], [headers]);
```

**Parameters:**

- `statusCode` (required): HTTP status code (200, 404, 500, etc.)
- `statusMessage` (optional): Custom status message
- `headers` (optional): Object with response headers

**Examples:**

```javascript
// Basic usage
res.writeHead(200);

// With custom message
res.writeHead(404, "Custom Not Found");

// With headers
res.writeHead(200, {
  "content-type": "application/json",
  "cache-control": "no-cache",
  "x-custom-header": "value",
});
```

---

**Common HTTP Status Codes:**

| Code    | Status                | Meaning                 | Use Case            |
| ------- | --------------------- | ----------------------- | ------------------- |
| **200** | OK                    | Success                 | Normal response     |
| **201** | Created               | Resource created        | After POST request  |
| **204** | No Content            | Success, no data        | DELETE success      |
| **301** | Moved Permanently     | Permanent redirect      | URL changed forever |
| **302** | Found                 | Temporary redirect      | Temporary URL       |
| **304** | Not Modified          | Cached version valid    | Browser cache hit   |
| **400** | Bad Request           | Invalid request         | Validation error    |
| **401** | Unauthorized          | Authentication required | Login needed        |
| **403** | Forbidden             | No permission           | Access denied       |
| **404** | Not Found             | Resource not found      | Invalid URL         |
| **500** | Internal Server Error | Server error            | Unhandled exception |
| **502** | Bad Gateway           | Invalid proxy response  | Gateway issue       |
| **503** | Service Unavailable   | Server overloaded       | Maintenance mode    |

---

**Common Content-Type Values:**

| Content-Type               | Extension | Use Case         |
| -------------------------- | --------- | ---------------- |
| `text/plain`               | .txt      | Plain text       |
| `text/html`                | .html     | HTML pages       |
| `text/css`                 | .css      | Stylesheets      |
| `application/json`         | .json     | JSON data / APIs |
| `application/javascript`   | .js       | JavaScript files |
| `application/xml`          | .xml      | XML data         |
| `image/jpeg`               | .jpg      | JPEG images      |
| `image/png`                | .png      | PNG images       |
| `image/gif`                | .gif      | GIF animations   |
| `image/svg+xml`            | .svg      | SVG graphics     |
| `video/mp4`                | .mp4      | MP4 videos       |
| `audio/mpeg`               | .mp3      | MP3 audio        |
| `application/pdf`          | .pdf      | PDF documents    |
| `application/zip`          | .zip      | ZIP archives     |
| `application/octet-stream` | (any)     | Binary download  |

---

**Server Access Methods:**

```bash
# Browser
http://localhost:9000
http://127.0.0.1:9000

# curl (command-line)
curl http://localhost:9000

# Postman
GET http://localhost:9000
```

---

**Server Control:**

```bash
# Start server
node starter.js

# Output:
# Server running on http://localhost:9000

# Stop server
# Press Ctrl + C (or Cmd + C on Mac)

# Restart after code changes
# Stop (Ctrl + C) + Start (node starter.js)

# Auto-restart with nodemon
nodemon starter.js

# Auto-restart with --watch flag (Node 18+)
node --watch starter.js
```

---

Let me continue with the remaining sections. Due to length, I'll provide the complete comprehensive documentation:

---

#### **2. Content-Type Rendering (`server.js`)**

**File Size**: 1749 bytes  
**Purpose**: Demonstrate serving different content types from an HTTP server

##### **Sending Plain Text**

```javascript
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write(`string message --> plain/text`);
    res.end();
  })
  .listen(9000, (err) => {
    if (err) console.log(err);
    console.log("server running");
  });
```

**Explanation:**

- **`content-type: text/plain`**: Tells browser to display as plain text
- **`res.write()`**: Sends text data
- **`res.end()`**: Completes response
- **Browser displays**: Raw text without HTML rendering

---

##### **Sending HTML Content**

```javascript
const fs = require("fs");

http
  .createServer((req, res) => {
    res.setHeader("key", "myValue"); // Custom header
    res.writeHead(200, { "content-type": "text/html" });

    let htmlContents = fs.readFileSync("./pages/index.html", "utf-8");
    res.end(htmlContents);
  })
  .listen(9000);
```

**Key Points:**

- **`setHeader()`**: Adds custom headers
- **`fs.readFileSync()`**: Reads HTML file synchronously
- **`content-type: text/html`**: Browser renders as HTML
- **Encoding**: `"utf-8"` ensures proper character display

**Important**: Using `readFileSync()` blocks server! Better to use streams (covered later).

---

##### **Sending CSS Content**

```javascript
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/css" });

    fs.readFile("./pages/style.css", "utf-8", (err, data) => {
      if (err) console.log(err);
      res.end(data);
    });
  })
  .listen(9000);
```

**Asynchronous Pattern:**

- **`fs.readFile()`**: Non-blocking file read
- **Callback**: `(err, data) => { ... }`
- **Error handling**: Check `err` first
- **Benefits**: Doesn't block server for other requests

---

##### **Sending JSON Response**

```javascript
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "application/json" });

    let resp = {
      success: true,
      message: "User registered Successfully",
      statusCode: 201,
      data: "",
    };

    res.end(JSON.stringify(resp));
  })
  .listen(9000);
```

**JSON Response Best Practices:**

1. **Always use `content-type: application/json`**
2. **Convert object to string with `JSON.stringify()`**
3. **Include metadata**:
   - `success`: Boolean indicating outcome
   - `message`: Human-readable message
   - `statusCode`: Repeat status in body
   - `data`: Actual payload

**Browser Output:**

```json
{
  "success": true,
  "message": "User registered Successfully",
  "statusCode": 201,
  "data": ""
}
```

---
