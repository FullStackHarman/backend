require('dotenv').config()

import express from 'express';
const app = express();
const port = 3000;

//add new tea
app.use(express.json())
let teaData = [];
let id =  1;

app.post('/teas',(req,res)=>{
    const {name,price}=req.body;
    const newTea = {id:id++,name,price}
    teaData.push(newTea);
    res.status(201).send(newTea)
})

//list all teas
app.get('/teas',(req,res)=>{
    res.status(200).send(teaData);
})

//find tea by id

app.get('/teas/:id',(req,res)=>{
    const tea = teaData.find((t)=>{t.id=== parseInt(req.params.id)})
    if(!tea){
        res.status(404).send('Tea not found!')
    }
    res.status(200).send(tea);})
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/harman',(req,res)=>{
    res.send('https://twitter.com/fullstackharman')
})
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port} ...`)
})