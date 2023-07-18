const mongoose = require("mongoose");
const connection=require('../config/db')
const Pizza = new mongoose.Schema({
  id: {
    type: String,
    
  },
    type: {
      type: String,
      
    },
    price: {
      type: Number,
    
    },
    name:{
        type:String
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    ingredients:{
        type:Array
    },
    topping:{
        type:Array
    }


  });
  
  PizzaModel = mongoose.model("pizza", Pizza, 'pizza');
  module.exports = {PizzaModel}
  