let express = require('express');
let path = require('path')
let app = express();
require('dotenv').config()

const absolutePath = path.join(__dirname, 'views', 'index.html');

app.use('/public',express.static(path.join(__dirname, 'public')));

app.get("/",(req,res) => {
    res.sendFile(absolutePath);
});

let message = "Hello json";

app.get("/json", (req,res)=> {

    if(process.env.MESSAGE_STYLE === "uppercase"){
        message = message.toUpperCase();
    }
    res.json({"message": message});
});


 module.exports = app;
