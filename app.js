const bodyParser = require("body-parser")
const express = require("express")
const request = require("request")

const app = express()
app.use(express.static("public")); //we need to use .static in order for ud to use static page
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/signup.html")
});

app.post("/", (req, res) =>{
    console.log(req.body)
    
});



app.listen(3000, () =>{
    console.log("Server is running")
});