const express = require("express");
const Vigenere = require("caesar-salad").Vigenere;
const password = 'password';
const app = express();
const port = 3333;

app.get('/', (req,res) => {
    res.send('Hello, World');
});

app.get('/encode/:encode',(req,res)=>{
    res.send(Vigenere.Cipher(password).crypt(req.params.encode));
});

app.get('/decode/:decode',(req,res)=>{
    res.send(Vigenere.Decipher(password).crypt(req.params.decode));
});

app.listen(port,()=>{
    console.log(`Server listen port=${port}`)
});