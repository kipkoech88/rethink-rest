const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const logger = require("morgan")
const path = require("path")
const errorHandler = require("errorhandler")
const PORT = process.env.PORT || 5000
const apiRoute  = require("./routes/api")

dotenv.config({path: ".env"})

//connecting to db
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});

//middlewares
app.use(express.json())
app.use(logger("dev"))
app.set("views", path.join(__dirname, "views"))

app.use("/", apiRoute)

//Error handler
if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorHandler());
  } else {
    app.use((err, req, res) => {
      console.error(err);
      res.status(500).send('Server Error');
    });
  }
  

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`)
})