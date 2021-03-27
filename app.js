const express = require("express");
const morgan = require("morgan");
const app = express();
const postRoutes  =require("./routes/post");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//DB
mongoose.connect(process.env.MONGO_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(()=>{
    console.log("DB Connection Successfull");
})

mongoose.connection.on('error', err => {
    console.log(`DB error ${err}`);
})

// const useMiddleware = (req, res, next) => {
//     console.log("Middleware Applied");
//     next();
// };

// //middleware
app.use(morgan("dev"));
// app.use(useMiddleware)


app.use("/", postRoutes);

const port = process.env.PORT || 8000;
//console.log(process.env.MONO_URI)
app.listen(port, () =>{
    console.log(`Running on port ${port}`);
})