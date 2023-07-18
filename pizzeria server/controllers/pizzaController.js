const { PizzaModel } = require("../models/pizza");


getPizza= async(req,res)=>{
    const pizza= await PizzaModel.find()
    res.send(pizza)
}



module.exports={getPizza}
 