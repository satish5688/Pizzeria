const {IngredientsModel}=require('../models/ingrediants')

getIngredients= async(req,res)=>{
    const ingrediants= await IngredientsModel.find()
    res.send(ingrediants)
}


module.exports={getIngredients}