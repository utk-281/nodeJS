---

# **Node.js & Express Learning Repository - Complete Documentation**

**Comprehensive guide to JavaScript, Node.js fundamentals, HTTP servers, file system operations, buffers, streams, routing, and Express.js framework**

---

## **Repository Description**

**Comprehensive Node.js Learning Repository** - Master JavaScript fundamentals, async programming, Node.js core modules (fs, Buffer, Streams, HTTP), HTTP server creation, routing, rendering, module systems (CommonJS & ESM), event loop architecture, and file operations with hands-on examples. From beginner to advanced concepts with detailed code samples, best practices, and real-world patterns. Perfect for developers learning backend JavaScript development.

**Topics**: `nodejs` `javascript` `http` `server` `routing` `async-await` `promises` `file-system` `buffers` `streams` `event-loop` `modules` `backend` `learning` `tutorial` `examples`

---

## **Table of Contents**

1. [Project Overview](#project-overview)
2. [Repository Structure](#repository-structure)
3. [What's New](#whats-new)
4. [Prerequisites](#prerequisites)
5. [Installation Guide](#installation-guide)
6. [Technology Stack](#technology-stack)
7. [Module Breakdown](#module-breakdown)
   - [HTTP Module](#http-module)
   - [Buffer & Streams](#buffer--streams-module)
   - [File System Module](#file-system-fs-module)
   - [User-Defined Modules](#user-defined-modules)
8. [Core Concepts Covered](#core-concepts-covered)
9. [Node.js Architecture & Event Loop](#nodejs-architecture--event-loop)
10. [HTTP Server Development](#http-server-development)
11. [Detailed Code Examples](#detailed-code-examples)
12. [Execution Instructions](#execution-instructions)
13. [Best Practices and Design Patterns](#best-practices-and-design-patterns)
14. [Common Pitfalls and Solutions](#common-pitfalls-and-solutions)
15. [Contributing Guidelines](#contributing-guidelines)
16. [Troubleshooting](#troubleshooting)
17. [Resources and References](#resources-and-references)
18. [Version Information](#version-information)

---

## **Project Overview**

This repository serves as a **comprehensive learning resource** for **JavaScript**, **Node.js fundamentals**, **HTTP server development**, and **Express.js framework**. It demonstrates core programming concepts including synchronous and asynchronous execution, promises, async/await patterns, Node.js module systems, HTTP server creation, routing, rendering, file system operations, buffers, and streams.

### **Purpose**

- Provide hands-on examples of JavaScript execution models
- Demonstrate HTTP server creation and request handling
- Teach routing and endpoint management
- Show different content-type rendering (HTML, CSS, JSON, plain text)
- Introduce Node.js module systems (CommonJS and ES Modules)
- Teach file system operations using Node.js `fs` module
- Explain Buffer and Streams for efficient data handling
- Show practical examples of module import/export patterns
- Serve as a reference for beginners learning JavaScript and Node.js

### **Target Audience**

- Beginners learning JavaScript and Node.js
- Developers building HTTP servers
- Students exploring web server fundamentals
- Programmers learning routing and request handling
- Backend developers learning efficient data handling

### **Repository Information**

- **Repository Name**: nodeJS
- **Owner**: utk-281
- **Primary Language**: JavaScript
- **Created**: December 9, 2025
- **Last Updated**: December 22, 2025
- **Repository URL**: [https://github.com/utk-281/nodeJS](https://github.com/utk-281/nodeJS)

---

## **Repository Structure**

```
nodeJS/
│
├── JavaScript/
│   └── index.html                                    # JavaScript fundamentals
│
├── Node/
│   └── Modules/
│       ├── Built In/
│       │   ├── fs/
│       │   │   ├── fs.js                             # File System operations
│       │   │   └── buffer&Streams.js                 # Buffer and Streams
│       │   └── http/
│       │       ├── starter.js                        # HTTP server basics
│       │       ├── server.js                         # Content-type rendering
│       │       ├── routing.js                        # Routing implementation
│       │       ├── rendering.js                      # File rendering with streams
│       │       └── pages/
│       │           ├── index.html                    # Sample HTML page
│       │           └── style.css                     # Sample CSS file
│       └── User Defined/
│           ├── ex-1/
│           │   ├── file1.js                          # Export examples
│           │   └── file2.js                          # Import examples
│           └── ex-2/
│               ├── app.js                            # Module loading
│               └── server.js                         # Module execution order
│
├── Starter/
│   └── demo.js                                       # Basic Node.js examples
│
├── demo.js                                           # Promise demonstration
└── README.md                                         # Documentation
```

---

## **What's New**

### **Latest Additions (December 22, 2025)**

#### **✨ HTTP Module - Complete Server Development**

**Location**: `Node/Modules/Built In/http/`

**New Files**:

1. **`starter.js`** - HTTP Server Basics

   - Creating HTTP server with `http.createServer()`
   - Request-Response cycle
   - `res.write()` and `res.end()` methods
   - Setting status codes with `res.writeHead()`
   - Understanding request and response streams
   - Server startup and shutdown

2. **`server.js`** - Content-Type Rendering

   - Sending plain text responses
   - Rendering HTML content
   - Serving CSS files
   - Sending JSON responses
   - Setting response headers
   - Different `content-type` values

3. **`routing.js`** - Routing Implementation

   - Handling multiple endpoints (`/`, `/login`)
   - Request URL parsing (`req.url`)
   - Conditional routing logic
   - JSON response formatting
   - 404 error handling

4. **`rendering.js`** - File Rendering with Streams

   - Using `fs.createReadStream()`
   - Piping streams to response (`data.pipe(res)`)
   - Serving HTML and CSS files
   - Dynamic content routing
   - Efficient file serving

5. **`pages/index.html`** - Sample HTML Page

   - Basic HTML structure
   - External CSS linking
   - Demonstrates HTML rendering

6. **`pages/style.css`** - Sample CSS File
   - Basic styling
   - Demonstrates CSS serving

---

## **Prerequisites**

### **Required Software**

1. **Node.js** (v14.0.0 or higher)

   - Download: [https://nodejs.org/](https://nodejs.org/)
   - Verify: `node --version`

2. **npm** (Node Package Manager)

   - Bundled with Node.js
   - Verify: `npm --version`

3. **Web Browser**

   - Chrome, Firefox, Safari, or Edge

4. **Code Editor**
   - Visual Studio Code (recommended)
   - Sublime Text
   - WebStorm

### **Knowledge Prerequisites**

- Basic programming concepts
- Command-line operations
- JavaScript syntax fundamentals
- Basic HTTP concepts (requests, responses, status codes)

---

## **Installation Guide**

### **Step 1: Clone the Repository**

```bash
# Using HTTPS
git clone https://github.com/utk-281/nodeJS.git

# Using SSH
git clone git@github.com:utk-281/nodeJS.git

# Navigate to project
cd nodeJS
```

### **Step 2: Verify Node.js**

```bash
node --version
# Expected: v14.x.x or higher

npm --version
# Expected: 6.x.x or higher
```

### **Step 3: Explore the Repository**

```bash
# List all files
ls -la

# Navigate to HTTP module
cd Node/Modules/Built\ In/http
ls

# Return to root
cd ../../../../
```

---

## **Technology Stack**

### **Core Technologies**

| Technology            | Version          | Purpose                        |
| --------------------- | ---------------- | ------------------------------ |
| **JavaScript (ES6+)** | ECMAScript 2015+ | Core programming language      |
| **Node.js**           | v14+ recommended | Server-side JavaScript runtime |
| **HTML5**             | Latest           | Document structure             |
| **CSS3**              | Latest           | Styling                        |

### **Node.js Built-in Modules**

| Module          | Purpose                       | Used In                                      |
| --------------- | ----------------------------- | -------------------------------------------- |
| **http**        | HTTP server creation          | `Node/Modules/Built In/http/`                |
| **fs**          | File System operations        | `Node/Modules/Built In/fs/`                  |
| **fs/promises** | Promise-based file operations | `Node/Modules/Built In/fs/fs.js`             |
| **Buffer**      | Binary data handling          | `Node/Modules/Built In/fs/buffer&Streams.js` |

---

## **Module Breakdown**

### **HTTP Module**

**Location**: `Node/Modules/Built In/http/`

**Purpose**: Comprehensive guide to creating HTTP servers, handling requests, routing, and rendering different content types.

---

#### **1. HTTP Server Basics (`starter.js`)**

##### **Creating an HTTP Server**

**Steps to Create Server**:

1. Import `http` module → Destructure `createServer()`
2. Call `createServer()` with callback function
3. Callback receives `req` (request) and `res` (response) parameters
4. Assign port number with `listen(portNumber, callback)`

**Basic Server Example**:

```javascript
const { createServer } = require("node:http");

let server = createServer((req, res) => {
  console.log("req accepted");
  res.end("hi from server");
  // res.end() ends the cycle and sends data to UI
});

server.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running");
});
```

**Server Access**:

- Open browser → `localhost:9000` or `127.0.0.1:9000`

**Server Control**:

- Stop server: Press `Ctrl + C` in terminal
- After modifications: Restart server to see changes
- Auto-restart: Use `node --watch filename`

---

##### **Response Methods**

###### **1. `res.write()` - Send Data in Chunks**

```javascript
let server = createServer((req, res) => {
  res.write("this is from write method");
  res.write("this is from write method 2 ");
  res.write("this is from write method 3");
  res.end();

  // res.write("response after end"); // ERROR! Cannot write after end()
});
```

**Explanation**:

- `res.write()` sends data in multiple chunks
- Must call `res.end()` to finish response
- Cannot write after calling `end()`

###### **2. `res.end()` - End Response with Optional Data**

```javascript
res.end("hi from server");
```

**Explanation**:

- Ends request-response cycle
- Optionally sends final data
- Must be called to complete response

###### **3. `res.writeHead()` - Set Status Code and Headers**

```javascript
res.writeHead(202, { "content-type": "text/plain" });
res.end("hi");
```

**Explanation**:

- First parameter: **Status code** (200, 404, 500, etc.)
- Second parameter: **Headers object**
  - `"content-type"`: Specifies data format
  - `"text/plain"`: Plain text
  - `"text/html"`: HTML content
  - `"application/json"`: JSON data
  - `"text/css"`: CSS styling

---

##### **Request Properties**

```javascript
let server = createServer((req, res) => {
  console.log(req.url); // '/' (endpoint)
  console.log(req.method); // GET, POST, PUT, DELETE
});
```

**Key Points**:

- `req` and `res` are **stream objects**
- `req.url`: Requested endpoint (e.g., `/`, `/login`, `/about`)
- `req.method`: HTTP method (GET, POST, PUT, DELETE)

---

#### **2. Content-Type Rendering (`server.js`)**

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

**Output**: Plain text in browser

---

##### **Sending HTML Content**

```javascript
const fs = require("fs");

http
  .createServer((req, res) => {
    res.setHeader("key", "myValue");
    res.writeHead(200, { "content-type": "text/html" });

    let htmlContents = fs.readFileSync("./pages/index.html", "utf-8");
    res.end(htmlContents);
  })
  .listen(9000);
```

**Explanation**:

- `res.setHeader()`: Sets custom headers
- Reads HTML file synchronously
- Sends HTML to browser

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

**Explanation**:

- Reads CSS file asynchronously
- Sends CSS to browser

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

**Explanation**:

- Creates JavaScript object
- Converts to JSON string with `JSON.stringify()`
- Sends as JSON response

**Output**:

```json
{
  "success": true,
  "message": "User registered Successfully",
  "statusCode": 201,
  "data": ""
}
```

---

#### **3. Routing (`routing.js`)**

##### **Understanding Routing**

**What is Routing?**

- Handling user's multiple requests
- Directing requests to appropriate responses
- Based on URL endpoints

**URL Structure**:

```
https://nodejs.org/en/download
│                    │  └─────── Endpoint
│                    └────────── Base URL
└───────────────────────────── Base URL (domain)
```

**Examples**:

- `https://nodejs.org/en/` → Base/Home URL
- Default endpoint → `/` (root)
- `https://nodejs.org/en/download` → `/download` endpoint
- `https://nodejs.org/en/about` → `/about` endpoint

---

##### **Implementing Routing**

```javascript
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      // Home route
      let data = fs.createReadStream("./pages/index.html", "utf-8");
      res.writeHead(200, { "content-type": "text/html" });
      data.pipe(res);
    } else if (req.url === "/login") {
      // Login route
      res.end(
        JSON.stringify({
          success: true,
          message: "User registered Successfully",
          statusCode: 201,
          data: "",
        })
      );
    } else {
      // 404 - Not found
      res.end("404 page not found");
    }
  })
  .listen(9000, (err) => {
    if (err) console.log(err);
    console.log("server running");
  });
```

**Explanation**:

1. **Home Route (`/`)**:

   - Uses `fs.createReadStream()` for efficient file reading
   - Pipes stream directly to response
   - Sets content-type to `text/html`

2. **Login Route (`/login`)**:

   - Returns JSON response
   - Simulates user registration API

3. **404 Handler**:
   - Catches all undefined routes
   - Returns error message

---

##### **Stream Piping**

```javascript
let data = fs.createReadStream("./pages/index.html", "utf-8");
data.pipe(res);
```

**What is `.pipe()`?**

- Connects readable stream to writable stream
- Automatically handles data flow
- More efficient than reading entire file into memory

**Benefits**:

- Memory efficient (chunks, not entire file)
- Faster for large files
- Automatic backpressure handling

---

#### **4. Rendering Files (`rendering.js`)**

##### **Serving Multiple Content Types**

```javascript
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      // Serve HTML
      res.writeHead(200, { "content-type": "text/html" });
      fs.createReadStream("./pages/index.html", "utf-8").pipe(res);
    } else if (req.url === "/css") {
      // Serve CSS
      res.writeHead(200, { "content-type": "text/css" });
      fs.createReadStream("./pages/style.css", "utf-8").pipe(res);
    } else {
      // 404 handler
      res.end("404 page not found");
    }
  })
  .listen(9000, (err) => {
    if (err) console.log(err);
    console.log("server running");
  });
```

**Explanation**:

1. **HTML Route (`/`)**:

   - Serves `index.html`
   - HTML can reference other routes for CSS/JS

2. **CSS Route (`/css`)**:

   - Serves `style.css`
   - Referenced in HTML: `<link rel="stylesheet" href="http://localhost:9000/css" />`

3. **Stream Chaining**:
   - `fs.createReadStream()` creates readable stream
   - `.pipe(res)` pipes to response stream
   - All in one line for clean code

---

##### **Sample HTML (`pages/index.html`)**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="http://localhost:9000/css" />
    <title>Document</title>
  </head>
  <body>
    <h1>This is a heading</h1>
    <h4>hello</h4>
  </body>
</html>
```

**Key Points**:

- External CSS linked to `/css` route
- Demonstrates server-side rendering

---

##### **Sample CSS (`pages/style.css`)**

```css
* {
  background-color: blue;
  text-align: center;
}
```

**Key Points**:

- Simple styling for demonstration
- Served dynamically by server

---

### **Buffer & Streams Module**

**Location**: `Node/Modules/Built In/fs/buffer&Streams.js`

**Purpose**: Understanding binary data handling with Buffers.

#### **Buffer Basics**

**What is Buffer?**

- Global object in Node.js (no import needed)
- Stores binary data (raw bytes)
- Similar to arrays, but for binary
- Fixed size once allocated

**Creating Buffers**:

```javascript
// From string
let buffer1 = Buffer.from("NodeJS");
console.log(buffer1); // <Buffer 4e 6f 64 65 4a 53>

// Allocate size
let buffSize = Buffer.alloc(34);
console.log(buffSize); // <Buffer 00 00 00... (34 zeros)>
```

**Buffer Methods**:

```javascript
// Write
buffer1.write("something");

// Convert to string
buffer1.toString(); // "someth" (truncated to buffer size)

// Convert to JSON
buffer1.toJSON();
/* Output:
{
  type: 'Buffer',
  data: [78, 111, 100, 101, 74, 83]
}
*/
```

---

### **File System (fs) Module**

**Location**: `Node/Modules/Built In/fs/fs.js`

**Purpose**: Comprehensive file operations (synchronous and asynchronous).

#### **Synchronous Operations**

```javascript
const fs = require("node:fs");

// Write file
fs.writeFileSync("./file.txt", "content");

// Read file
let content = fs.readFileSync("./file.txt", "utf-8");

// Append file
fs.appendFileSync("./file.txt", "\nnew data");

// Delete file
fs.unlinkSync("./file.txt");

// Create directory
fs.mkdirSync("./folder", { recursive: true });
```

#### **Asynchronous with Promises**

```javascript
const fsP = require("node:fs/promises");

async function fileOps() {
  try {
    await fsP.writeFile("./file.txt", "content");
    const data = await fsP.readFile("./file.txt", "utf-8");
    await fsP.appendFile("./file.txt", "\nmore");
  } catch (error) {
    console.error(error);
  }
}
```

---

### **User-Defined Modules**

**Location**: `Node/Modules/User Defined/`

**Purpose**: Demonstrates module import/export patterns.

#### **Example 1: Export/Import Patterns**

**file1.js (Exporting)**:

```javascript
// CommonJS
module.exports = {
  printName,
  arr,
  obj,
};

// ES Module
export const sum = (a, b) => a + b;
export default abcde;
```

**file2.js (Importing)**:

```javascript
// CommonJS
const { printName, arr, obj } = require("./file1");

// ES Module
import { arr, obj, sum } from "./file1.js";
```

---

## **Core Concepts Covered**

### **1. HTTP Server Creation**

- Using `http.createServer()`
- Request-Response cycle
- Status codes and headers
- Content-Type handling

### **2. Routing**

- URL parsing (`req.url`)
- Conditional routing
- Multiple endpoints
- 404 handling

### **3. Content Rendering**

- Plain text
- HTML
- CSS
- JSON

### **4. Streams**

- `fs.createReadStream()`
- Stream piping (`.pipe()`)
- Efficient file serving

### **5. Buffers**

- Binary data handling
- Buffer creation and manipulation
- String/JSON conversion

### **6. Asynchronous Programming**

- Callbacks
- Promises
- Async/Await

---

## **Node.js Architecture & Event Loop**

### **Node.js Architecture**

```
┌─────────────────────────────┐
│  JavaScript Code (V8 C++)   │
│       Call Stack            │
│    Main Thread              │
└─────────────────────────────┘
            ↓
   Main Thread Executes Sync Code
   Offloads async operations:
   1. First to system kernel
   2. If not possible → libUV
            ↓
┌─────────────────────────────┐
│     libUV (C, C++)          │
│                             │
│  Async I/O operations:      │
│  - File reading             │
│  - DB call                  │
│  - Network call             │
│                             │
│      Event Loop             │
└─────────────────────────────┘
```

**Key Points**:

- Node.js is **single-threaded** on call stack
- **Main thread** executes synchronous code
- **libUV** provides thread pool (default 4 workers)
- Thread pool size can be adjusted

---

## **HTTP Server Development**

### **Server Lifecycle**

```
┌─────────────────────────────┐
│   1. Create Server          │
│   http.createServer()       │
└─────────────────────────────┘
            ↓
┌─────────────────────────────┐
│   2. Define Request Handler │
│   (req, res) => {}          │
└─────────────────────────────┘
            ↓
┌─────────────────────────────┐
│   3. Listen on Port         │
│   server.listen(9000)       │
└─────────────────────────────┘
            ↓
┌─────────────────────────────┐
│   4. Accept Requests        │
│   Browser: localhost:9000   │
└─────────────────────────────┘
            ↓
┌─────────────────────────────┐
│   5. Process Request        │
│   - Parse URL               │
│   - Route to handler        │
│   - Generate response       │
└─────────────────────────────┘
            ↓
┌─────────────────────────────┐
│   6. Send Response          │
│   res.end() / .pipe()       │
└─────────────────────────────┘
```

---

### **Content-Type Reference**

| Content-Type       | Use Case   | Example         |
| ------------------ | ---------- | --------------- |
| `text/plain`       | Plain text | Simple messages |
| `text/html`        | HTML pages | Web pages       |
| `text/css`         | CSS files  | Stylesheets     |
| `application/json` | JSON data  | API responses   |
| `image/png`        | PNG images | Image files     |
| `application/pdf`  | PDF files  | Documents       |

---

## **Detailed Code Examples**

### **Example 1: Complete HTTP Server with Routing**

```javascript
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Home route
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("./pages/index.html").pipe(res);
  }

  // CSS route
  else if (req.url === "/css") {
    res.writeHead(200, { "content-type": "text/css" });
    fs.createReadStream("./pages/style.css").pipe(res);
  }

  // API route
  else if (req.url === "/api/users") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        success: true,
        users: [
          { id: 1, name: "John" },
          { id: 2, name: "Jane" },
        ],
      })
    );
  }

  // 404
  else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 - Page Not Found");
  }
});

server.listen(9000, () => {
  console.log("Server running on http://localhost:9000");
});
```

---

### **Example 2: Stream Piping vs Traditional Reading**

```javascript
// Traditional approach (loads entire file in memory)
http
  .createServer((req, res) => {
    fs.readFile("./large-file.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error reading file");
        return;
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
  })
  .listen(9000);

// Stream approach (memory efficient)
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("./large-file.html").pipe(res);
  })
  .listen(9000);
```

**Benefits of Streaming**:

- Lower memory usage
- Faster initial response
- Better for large files
- Automatic error handling

---

## **Execution Instructions**

### **Running HTTP Server Examples**

```bash
# Navigate to HTTP module
cd Node/Modules/Built\ In/http

# Run basic server
node starter.js
# Open browser: http://localhost:9000

# Run routing example
node routing.js
# Test endpoints:
# - http://localhost:9000/
# - http://localhost:9000/login

# Run rendering example
node rendering.js
# Open browser: http://localhost:9000
# CSS will be automatically loaded

# Stop server
# Press Ctrl + C
```

### **Auto-Restart During Development**

```bash
# Watch file for changes and auto-restart
node --watch server.js

# Modify code, save file
# Server automatically restarts
```

---

## **Best Practices and Design Patterns**

### **1. HTTP Server Best Practices**

#### **✅ Do's**

```javascript
// Use async operations
http.createServer((req, res) => {
  fs.createReadStream("./file.html").pipe(res);
});

// Set appropriate status codes
res.writeHead(200, { "content-type": "text/html" });
res.writeHead(404, { "content-type": "text/plain" });
res.writeHead(500, { "content-type": "text/plain" });

// Handle errors
http.createServer((req, res) => {
  const stream = fs.createReadStream("./file.html");

  stream.on("error", (err) => {
    res.writeHead(500);
    res.end("Internal Server Error");
  });

  stream.pipe(res);
});
```

#### **❌ Don'ts**

```javascript
// Don't use sync operations in server
http.createServer((req, res) => {
  const data = fs.readFileSync("./file.html"); // BLOCKS!
  res.end(data);
});

// Don't forget to end response
http.createServer((req, res) => {
  res.write("data"); // Response never ends!
});

// Don't ignore content-type
http.createServer((req, res) => {
  res.end("<h1>HTML</h1>"); // Browser may not render HTML
});
```

---

### **2. Routing Best Practices**

```javascript
// Good: Organized routing
const routes = {
  "/": (req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("./pages/home.html").pipe(res);
  },
  "/api/users": (req, res) => {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ users: [] }));
  },
  404: (req, res) => {
    res.writeHead(404);
    res.end("Not Found");
  },
};

http
  .createServer((req, res) => {
    const handler = routes[req.url] || routes["404"];
    handler(req, res);
  })
  .listen(9000);
```

---

## **Common Pitfalls and Solutions**

### **1. Response Already Sent**

**Problem**:

```javascript
http.createServer((req, res) => {
  res.end("First response");
  res.end("Second response"); // ERROR!
});
```

**Solution**:

```javascript
http.createServer((req, res) => {
  res.end("Only one response");
});
```

---

### **2. Missing Content-Type**

**Problem**:

```javascript
http.createServer((req, res) => {
  res.end("<h1>HTML</h1>"); // Displays as plain text
});
```

**Solution**:

```javascript
http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end("<h1>HTML</h1>"); // Renders as HTML
});
```

---

### **3. Server Not Stopping**

**Problem**: Server keeps running after `Ctrl + C`

**Solution**:

```javascript
const server = http.createServer((req, res) => {
  // handler
});

server.listen(9000);

// Graceful shutdown
process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server closed");
  });
});
```

---

## **Contributing Guidelines**

1. Fork the Repository
2. Clone your fork
3. Create feature branch
4. Make changes with clear commits
5. Test HTTP servers locally
6. Submit Pull Request

---

## **Troubleshooting**

### **Issue 1: Port Already in Use**

**Error**: `EADDRINUSE: address already in use`

**Solutions**:

```bash
# Find process using port 9000
lsof -i :9000

# Kill process
kill -9 <PID>

# Or use different port
server.listen(9001);
```

---

### **Issue 2: Cannot Access Server**

**Problem**: Browser shows "Cannot connect"

**Solutions**:

```javascript
// Check server is running
server.listen(9000, () => {
  console.log("Server running on http://localhost:9000");
});

// Verify correct URL
// localhost:9000 or 127.0.0.1:9000
```

---

### **Issue 3: CSS Not Loading**

**Problem**: HTML loads but CSS doesn't apply

**Solutions**:

```html
<!-- Correct CSS link -->
<link rel="stylesheet" href="http://localhost:9000/css" />

<!-- Server route for CSS -->
<script>
  if (req.url === "/css") {
    res.writeHead(200, { "content-type": "text/css" });
    fs.createReadStream("./pages/style.css").pipe(res);
  }
</script>
```

---

## **Resources and References**

### **Official Documentation**

- [Node.js HTTP Module](https://nodejs.org/api/http.html)
- [Node.js fs Module](https://nodejs.org/api/fs.html)
- [Node.js Streams](https://nodejs.org/api/stream.html)
- [MDN HTTP Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP)

### **HTTP Status Codes**

- **2xx Success**: 200 (OK), 201 (Created)
- **4xx Client Error**: 400 (Bad Request), 404 (Not Found)
- **5xx Server Error**: 500 (Internal Error), 503 (Service Unavailable)

---

## **Version Information**

### **Current Version**

- **Version**: 0.5.0
- **Status**: Active Development
- **Last Updated**: December 22, 2025

### **Changelog**

#### **v0.5.0 - December 22, 2025**

**Added:**

- ✨ Complete HTTP Module (`http/`)
- HTTP server basics (`starter.js`)
- Content-type rendering (`server.js`)
- Routing implementation (`routing.js`)
- File rendering with streams (`rendering.js`)
- Sample HTML and CSS pages
- HTTP server lifecycle documentation
- Content-type reference table
- Routing best practices
- Stream piping examples

**Enhanced:**

- Better project organization
- Complete HTTP server workflow
- Real-world routing patterns
- Stream-based file serving

---

## **Quick Reference**

### **HTTP Server Quick Reference**

```javascript
const http = require("http");

// Create server
http
  .createServer((req, res) => {
    // Set status and content-type
    res.writeHead(200, { "content-type": "text/html" });

    // Send response
    res.end("Hello World");
  })
  .listen(9000, () => {
    console.log("Server running");
  });
```

### **Routing Quick Reference**

```javascript
http
  .createServer((req, res) => {
    if (req.url === "/") {
      // Home
    } else if (req.url === "/api") {
      // API
    } else {
      // 404
      res.writeHead(404);
      res.end("Not Found");
    }
  })
  .listen(9000);
```

### **Stream Piping Quick Reference**

```javascript
// Pipe file to response
fs.createReadStream("./file.html").pipe(res);

// With error handling
const stream = fs.createReadStream("./file.html");
stream.on("error", (err) => {
  res.writeHead(500);
  res.end("Error");
});
stream.pipe(res);
```

---

## **Conclusion**

This repository now includes:

✅ **HTTP Server Development**

- Server creation and lifecycle
- Request-Response handling
- Status codes and headers

✅ **Routing**

- Multiple endpoints
- URL parsing
- 404 error handling

✅ **Content Rendering**

- Plain text, HTML, CSS, JSON
- Stream-based file serving
- Efficient data transfer

✅ **Buffer and Streams**

- Binary data handling
- Stream piping
- Memory efficiency

✅ **File System Operations**

- Synchronous and asynchronous
- Callbacks, Promises, Async/Await

✅ **Module Systems**

- CommonJS and ES Modules
- Import/Export patterns

✅ **Best Practices**

- Production-ready patterns
- Error handling
- Performance optimization

---

**Document Version**: 5.0  
**Last Updated**: December 22, 2025  
**Maintained By**: [utk-281](https://github.com/utk-281)  
**Contributors**: Open for contributions

**Happy Learning! 🚀**

---
