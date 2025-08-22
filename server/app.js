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
    res.json({ msg: "user register successfully" })
})
app.post("/students/:id", (req, res) => {
    let id = req.params.id;
    console.log(id)
    res.json(id)


});
//or
// res.json({msg:"user register successfully"})
app.get("/link", (req, res) => {
    try {
        res.redirect("https://google.com")
    } catch (error) {
        console.log(error)
    }
})

app.get("/url/:link",(req,res)=>{
    try {
        let url = req.params.link;
        res.redirect(`https://${url}.com`);
    } catch (error) {
        console.log(error);
    }
});

app.get("/download",(req,res)=>{
    try {
        res.download("./download.jpg")
    } catch (error) {
        console.log(error)
        
    }
})



//IN SIMPLE APP HAS 2 PRAMS 
//METHOD ==> HTTP METHOD GET,POST,PUT,DELETE 


app.listen(PORT, () => {
    console.log("Server is running");
})