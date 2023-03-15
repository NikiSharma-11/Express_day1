const express = require('express');

const app = express();


app.use (express.urlencoded({ extended: true}));

let users = ["ram", "hari"];

// let categories = ["books", "movies"]

app.get('/user',(req, res)=>{
    res.send(users);
});








app.get('/add-user', (req, res)=>{
    if(req.query.name){
        users.push(req.query.name);
        res.send("User Added");
    }
    else 
    {
        res.send("please provide name")
    }
})







app.get('/Delete-user', (req, res)=>{
    if(req.query.name){
        users = users.filter((user)=>{
            return user!== req.query.name;
        });
        res.send("User Deleted");
    }
    else 
    {
        res.send("please provide name")
    }
})

app.post('/add-user',(req, res)=>{
    if(req.body.name){
        users.push(req.body.name)
        res.send("User Added");

    }else 
    {
        res.send("Please provivide name"); 
    }
   
});



app.listen(3000, () => {
    console.log('Server started on port 3000');

});






