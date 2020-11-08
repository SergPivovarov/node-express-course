const express = require('express');
const app = express();
const hostname='127.0.0.1'
const port = 8000;
const bodyParser= require('body-parser');
app.use(bodyParser.json());

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

    app.post('/login',function(req,res){
        const username=req.body.username;
        const password = req.body.password;

        const mockUsername = "billyTheKid";
        const mockPassword = "superSekret";

        if (username==mockUsername && password==mockPassword){
            res.json({
                success: true,
                message:'password and user name match',
                token: 'encrypted token goes here'
            })
        }else{
            res.json({
                success: false,
                message:'password and user name do not match',
               

        })
    }
    })

app.listen(port,hostname,()=>{
    console.log("Server is running at http://"+hostname+":"+ port)
})