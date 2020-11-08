const express = require('express');
const app = express();
const hostname='127.0.0.1'
const port = 8000;
app.listen(port,hostname,()=>{
    console.log("Server is running at http://${hostname}:${port}")
})