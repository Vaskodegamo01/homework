const express = require("express");
const app = express();
const port = 3333;

app.get('/', (req,res) => {
    res.send('Hello, World');
});

app.get('/:hello',(req,res)=>{
    res.send(req.params.hello);
});

app.listen(port,()=>{
    console.log(`Server listen port=${port}`)
});