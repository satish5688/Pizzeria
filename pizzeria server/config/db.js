const mongoose=require('mongoose')
const mongoUrl="mongodb://127.0.0.1:27017/Pizzeria"

mongoose.connect(mongoUrl,{ useNewUrlParser: true ,useUnifiedTopology: true},)

module.exports= mongoose