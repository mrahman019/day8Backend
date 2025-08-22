import express from "express";
const app = express();
app.use(express.json());

const PORT = 7001;

app.get("/", (req, res) => {
    res.send("hello server");
});

app.get("/Global", (req, res) => {
    res.send("hello global server");
});

app.post("/register", (req, res) => {
    let userData = req.body
    console.log(userData)
   // res.json(userData)

    //or
 res.json({msg:"user register successfully"})
})
app.post("/students/:id", (req, res) => {
    let userData = req.params.id;
    console.log(id)
   res.json(id)

    //or
// res.json({msg:"user register successfully"})
})

//IN SIMPLE APP HAS 2 PRAMS 
//METHOD ==> HTTP METHOD GET,POST,PUT,DELETE 


app.listen(PORT,()=>{
    console.log("Server is running");
})