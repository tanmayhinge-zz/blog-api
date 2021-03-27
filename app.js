const express = require("express");
const morgan = require("morgan");
const app = express();
const { getPost } =require("./routes/post");


const useMiddleware = () => {
    console.log("Middleware Applied");
}

//middleware
app.use(morgan("dev"));
app.use(useMiddleware)


app.get("/", getPost);

const port = 8080;
app.listen(port, () =>{
    console.log(`Running on port ${port}`);
})