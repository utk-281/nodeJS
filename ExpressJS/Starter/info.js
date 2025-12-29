//! Express ==> framework of NodeJS. (which is used to build web applications)

//& it is a minimal routing web framework (TODO: minimal, flexible, middleware, API, RESTApi's, routing, etc..)

//~ ==> collection of lib/modules.
//~ ==> framework provides a blueprint, using which we can build any application
//~ every framework follows a particular architecture (creation of folders and files) --> MVC architecture
//! IOC: (inversion of control) --> the execution control is in the hands of framework, express will decide which function to call.
//? MVC --> Models(database), Views(UI--> deprecated, ejs, pug, express-handle-bars), Controllers(logic)

//! in backend folder, a file must be present --> 'package.json' and only one file should be there

//! package.json ==> it is the heart of the project. it stores all the meta-data of the project like name, author, description, license and etc.. and along with that it stores dependencies
//! command to create package.json file --> "npm init -y" (this will create a file with default values)
//! command to create package.json file --> "npm init" (npm initialize) (this will ask for user input)

//? dependencies ==> it means, the different third party packages we are installing from the npm. without these dependencies the application will not run.
//? production dependency (this is the default setting) npm i express
//? development dependency (it is used during development process and is not considered after deployment). (the application will run without development dependency)

//! after creating .json file --> we can install third party packages
//? npm i/install package_name (that will be saved as prod dep)
//? npm i/install package_name1 pN2 pN3 ..... (that will be saved as prod dep)

//? to save as development dependency -->
// npm i package_name -D

//? to install globally
// npm i pN -g (global)
// npm i nodemon -g

//& after installing we will see three changes
// 1) a new folder will be created (node_modules) : this will store all the source code of the installed packages.
// 2) a new file will be created (package-lock.json): it contains all the information of the dependent packages (version-number, integrity, etc,..)
// 3) in package.json file, dependency will be added

let a = 10;

/* 
Express ==> Express is a framework for Node.js. A framework is like a toolkit that provides structure and common tools to build something. In this case, Express helps you build web applications (like websites, APIs) with Node.js.

Minimal ==> Minimal means that Express doesn't come with a lot of extra features by default. It gives you the bare essentials to build a web application, so you can add only the features you need. This keeps it lightweight and easy to learn.

Flexible ==> Flexible means that Express doesn't force you to structure your application in a specific way. You can organize your code and choose the components (like databases, templating engines) that you want to use.

Middleware ==> Middleware is a key concept in Express. Think of middleware as a chain of functions that your request goes through. Each function can do something with the request (like check if the user is logged in, parse the request body) and then pass it to the next function. This allows you to break down your application's request handling into small, reusable parts.

API ==> API stands for Application Programming Interface. In the context of Express, it often refers to a web API that allows different software applications to communicate with each other over the internet. For example, a mobile app might use an API built with Express to get data from a server.

REST APIs ==> REST (Representational State Transfer) is a set of rules that developers follow when creating APIs. A REST API uses HTTP requests to perform CRUD (Create, Read, Update, Delete) operations. Express makes it easy to build REST APIs by providing methods to handle different HTTP requests (like GET, POST, PUT, DELETE).

Robust ==> Robust means strong and reliable. Express provides a solid foundation with many features and tools that help you build reliable web applications and APIs.

HTTP utility methods ==> HTTP (HyperText Transfer Protocol) is the protocol used for transferring data on the web. HTTP utility methods are the different types of requests (like GET, POST, PUT, DELETE) that you can handle in Express. Express provides easy ways to define how your application responds to these requests.

Node.js ==> Node.js is a runtime environment that allows you to run JavaScript on the server (outside of a browser). Express is built on top of Node.js, so you use JavaScript to write your server-side code.

Web Applications ==> A web application is a program that runs on a web server and can be accessed through a web browser. Examples include online shopping sites, social media platforms, etc.

Mobile Applications ==> Mobile applications can be built to work with a server. Express can be used to build the backend (server part) that a mobile app communicates with.

Performance ==> Performance refers to how fast and efficiently the framework runs. Express is designed to be fast and lightweight, so it doesn't slow down your application.

Thin layer ==> Express adds a thin layer on top of Node.js. This means that it doesn't hide or change the core features of Node.js. You can still use all the Node.js features you know, but Express makes common tasks (like handling routes) easier.

Routing ==> Routing is how an application responds to a client request to a particular endpoint (a specific URL and HTTP method). For example, when a user visits your website's homepage, the route for the homepage would send back the homepage content. Express provides a simple way to define routes.

Unopinionated ==> Unopinionated means that Express doesn't force a specific way of doing things. It allows you to structure your project as you like and choose the tools you want to use.

Lightweight ==> Lightweight means that Express doesn't have a lot of extra code or features that you might not use. This makes it fast and easy to understand.

Augmented ==> Augment means to add to or extend. Express is designed to be extended by using middleware modules (which are like plugins) to add more functionality.

Express middleware modules ==> These are packages (or pieces of code) that you can add to your Express application to provide additional functionality. For example, there is middleware for handling user authentication, parsing JSON data, etc.
*/
