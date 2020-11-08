const express = require('express');
const app = express();
const hostname='127.0.0.1'
const port = 8000;

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
    ]
    app.get('/users', function(req,res){
         res.json({
              success: true,
              message: 'successfully got users. Nice!',
              users: mockUserData
         })
    })
    app.get('/users/:id',function(req,res){
        console.log(req.params.id)
        res.json({
            success: true,
            message:'got one user',
            user: req.params.id
        })
    })

app.listen(port,hostname,()=>{
    console.log("Server is running at http://"+hostname+":"+ port)
})