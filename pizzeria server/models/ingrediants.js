const mongoose=require('mongoose')

const ingredients= new mongoose.Schema({
    id:{
        type:Number
    },
    tname:{
        type:String
    },
    price:{
        type:Number        
    },
    image:{
        type:String
    }
})

IngredientsModel=mongoose.model('ingredients',ingredients,'ingredients')
module.exports={IngredientsModel}