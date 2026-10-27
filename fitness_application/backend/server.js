require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose')
const app = express()
const workoutRoutes = require('./routes/workout')

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/workout', workoutRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Mongo db is connected and app is running on the port", process.env.PORT);
    })
  })
  .catch((error)=>{
    console.log(error)
  })



