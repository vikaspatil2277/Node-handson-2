const express = require('express');
const app = express();

app.get("/",(req,res)=> {
    res.send("Express.js is a popular open-source web application framework for Node.js, a runtime environment for executing JavaScript code on the server side. It provides a set of features and tools for building web applications and APIs quickly and efficiently. ");
    res.end();
})
app.get("/gallery",(req,res)=> {
    res.send("I am on gallery.")
    res.end();
})

app.post("/submit",(req,res)=>{
    res.send("Post worked")
    res.end();
});

app.listen(8000,()=>{
    console.log("Application is running")
})