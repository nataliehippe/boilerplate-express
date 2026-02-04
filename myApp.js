let express = require('express');
let path = require('path')
let app = express();

const absolutePath = path.join(__dirname, 'views', 'index.html');

app.use('/public',express.static(path.join(__dirname, 'public')));

app.get("/",(req,res) => {
    res.sendFile(absolutePath);
});

const messageObject = {"message" : "Hello json"};

app.get("/json",(req,res)=> {
    res.json(messageObject)
});


 module.exports = app;
