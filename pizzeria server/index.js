const express=require('express')
const pizzaRouter= require('./routes/pizza')
const cors = require('cors');

const app=express()

app.use(cors({
    origin: '*'
  }));

app.use(pizzaRouter)



app.listen(7000,()=>{
    console.log('your server is runing on port 7000');
})


//// api to get all  ingrediants ////
//http://localhost:7000/ingrediants

 //// api to get all pizzas////
// http://localhost:7000/pizza