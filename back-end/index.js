const express = require('express')
const app =express()


const mongoose = require('mongoose')

//connecting to DB
mongoose.connect('mongodb+srv://vineet:group10@cluster0.f3mfx.mongodb.net/services?retryWrites=true&w=majority',{ useNewUrlParser: true }).then( () => console.log("MongoDB Connected")).catch( (err) => console.log("MongoDB error"))


//external middleware
const cors = require('cors')
app.use(cors())

//built-in middleware
app.use(express.json())


//user routes
app.use( require("./routes/auth"))

//orders routes
app.use("/order" ,require("./routes/orders"))


//const PORT= 5000

//creating server
app.listen(5000,()=>{
    console.log(`app is listing at port`);
})