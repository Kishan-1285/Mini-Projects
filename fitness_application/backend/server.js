require('dotenv').config()
const express = require("express");

const app = express()
const workoutRoutes = require('./routes/workout')

app.use(express.json()); 
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/workout',workoutRoutes);



app.listen(process.env.PORT,()=>{
    console.log("app is running on the port",process.env.PORT);
})

