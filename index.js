const express=require("express");
const path=require("path");
const  app=express();

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res) => {
      res.render("login")
})
app.get('/homepage',(req, res) => {
      res.render("Home", {})
})

app.listen(3000,()=>{
    console.log("server started on port 3000");
})