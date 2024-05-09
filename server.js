// libraries
const express=require("express");
const app=express();
const path=require("path");
const ejs=require("ejs");

// listening to port 3000 and using express's body parser
app.listen(3000,()=> {
    console.log("Port connected successfully")
}
);
app.set('view engine','ejs');
app.use(express.json());

// establishing directory of static pages
app.use(express.static(__dirname + '/views'));

// routes of HomePage == /
app.get("/",function(req,res){
    res.render("loginPage.ejs");
});

app.get("/login",function(req,res){
    res.render("loginPage.ejs");
})

app.post("/login",function(req,res){
    const email=req.body.email;
    const password=req.body.password;
    res.json({
        email,
        password
    })
})


// routes of Page1
app.get("/page1",function(req,res){
    res.render("pg1.ejs");
})


// routes of Register Page
app.get("/page2",function(req,res){
    res.render("pg2.ejs");
})

// routes of Register Page
app.get("/page3",function(req,res){
    res.render("pg3.ejs");
})

// routes of Register Pg
app.get("/page4",function(req,res){
    res.render("pg4.ejs");
})

// routes of Register Pg
app.get("/page5",function(req,res){
    res.render("pg5.ejs");
})

// routes of Register Pg
app.get("/page6",function(req,res){
    res.render("pg6.ejs");
})
