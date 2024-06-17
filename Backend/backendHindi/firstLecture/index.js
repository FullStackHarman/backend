import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const port = 4000;

app.get('/', (req, res)=>{
    res.send('Hello World');
})
app.get('/sandeep',(req,res)=>{
    res.send('<h1>Sandeep Love You</h1>')
})
app.listen(process.env.PORT,()=>{console.log(`Server is running on ${port}`)})