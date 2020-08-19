# Node.js and Express
In this chapter, we gonna talk about how Node.js server works, and how express.js moduel
gives as tools and teqniques to create robust Server-side applications

## What is Node.js?
Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009 and its latest version is v0.10.36. 

Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

### Where to Use Node.js?
Following are the areas where Node.js is proving itself as a perfect technology partner.

* I/O bound Applications
* Data Streaming Applications
* Data Intensive Real-time Applications (DIRT)
* JSON APIs based Applications
* Single Page Applications

### Where Not to Use Node.js?
* It is not advisable to use Node.js for CPU intensive applications.


## Node.js Environment Setup
Node.js can be installed on every OS available, it has packages for every platrfom.
We can grab the package we need from the [Node.js website](https://nodejs.org/)

After you installed Node.js on you platfrom, you can acces node REPL from the commandline by running this code `node`
Also you can find witch version is installed on you platform by running this command:
```
node --version
v12.16.1
```

### First Application
First, let'sa see the components of a Node.js application. A Node.js application consists of the following three important components −

- **Import required modules** − We use the require directive to load Node.js modules.

- **Create server** − A server which will listen to client's requests similar to Apache HTTP Server.

- **Read request and return response** − The server created in an earlier step will read the HTTP request made by the client which can be a browser or a console and return the response.


To create your first Node app, first make a directory and name it what ever you want, for exampel:
```
cd Desktop
mkdir node-app
cd node-app
touch app.js
```

Now, to run app.js in node env. simply run this command in the commandline tool
```
node app.js
```
For now, the terminal wouldn't show anything, because we didn't write any code in the app.js yet.

Now, let's create a simple server with `http` built-in module

**app.js**
```javascript
const https = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})

```

Now, if we run app.js again, it will show `Server running at http://127.0.0.1:3000` in the terminal.
And by puting this url in your browser, it will show `Hello world` message in response

The server is now app and running, and its ready to create http requests and responses, or anything we might want to do with the server.

