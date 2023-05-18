//? this in front end
// ! import logger from './logger'


// ? back end
// const logger = require("./logger")



// * every file in node js it's an module

// ? types of modules in node js
//! core module => built in module
// const http = require("http") => http from nodejs

// ! custom module => we create it
// const logger = require("./logger")

// ! Third party module
// module we import from npm like express



// const http = require("http")

// const logger = require("./logger")

// logger.log()


// // or we can do this
// const { log } = require("./logger")
// log()



// ! we must install npm init so we can benifits from the packages in node package manager

// Third party module
// const express = require("express") // we add this after we install express "npm i express"




// ! ----------------------- creating http server --------------------------------------------------
const http = require("http")

const books = [
    {
        id: 1,
        book: "book 1"
    },
    {
        id: 2,
        book: "book 2"
    }
]
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("<h1>Hello Node js</h1>")
        res.end()
    }

    if (req.url === "/api/books") {
        res.write(JSON.stringify(books));
        res.end()
    }

})

const port = 5000
server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})



// ! -------------------- what is http ? ------------------------------------
// Hyper text transfer protocol
// communication between a web server and web browser (client) "front and backend "
// client is postman
// server is express js api
// http Request & http response, includes {headers, body}
// headers : it's an object contain a details about the request
// body : have a data

// most time, HTTP Request is an JSON file

//? http response, take also http status
//  200 : successful
//  400 : proplem from client
//  404 : page not found

//? Http request methods ?   CRUD Operation
// 1 - Post : creating a new object
// 2 - Get : Reading data from server
// 3 - Put : Updating an object
// 4 - Delete : deleting an object 