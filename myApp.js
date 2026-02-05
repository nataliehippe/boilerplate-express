let express = require('express');
let path = require('path')
let app = express();
require('dotenv').config()

const absolutePath = path.join(__dirname, 'views', 'index.html');

app.use('/public',express.static(path.join(__dirname, 'public')));


app.use((req,res,next) =>{
    let method = req.method
    let path = req.path
    let ip = req.ip

    console.log(method + " " +path + " - " + ip);
    next()
});

app.get("/",(req,res) => {
    res.sendFile(absolutePath);
});


app.get("/json", (req,res)=> {

    let message = "Hello json";

    if(process.env.MESSAGE_STYLE === "uppercase"){
        message = message.toUpperCase();
    }
    res.json({"message": message});
});


 module.exports = app;
