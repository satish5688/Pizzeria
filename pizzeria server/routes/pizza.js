const { Router } = require("express");
const { getIngredients } = require("../controllers/ingredientsController");
const { getPizza } = require("../controllers/pizzaController");

const router=Router()

router.get('/pizza',getPizza)

router.get('/ingrediants',getIngredients)

module.exports=router