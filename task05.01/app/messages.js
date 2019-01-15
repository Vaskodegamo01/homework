import express from "express";
const  fsDemo = require("../fsDemo");
const  router = express.Router();

const data = [];
fsDemo.init(data, ()=> console.log("init db"));

router.get("/",(req,res) =>{
        res.send(data);
});


router.get("/:id",(req,res) =>{
    res.send("A single products by id will be here");
});


router.post("/",(req,res) =>{
    fsDemo.addItem(data,req.body);
    fsDemo.saveData(data,()=> res.send(data));
    // res.send("Will create new product hree");
});

export default  router;