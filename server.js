const express = require("express");
const connectDB = require("./config/db");
const { connect } = require("mongoose");
const dotenv = require('dotenv').config();
const port = 3000 ;
// const port = process.env.port || 3000;



const app = express();
connectDB();







// app.get("/post", (req,res) =>{
//     res.json({message:"Hello World !"});
// });
app.use(express.json());
app.use(express.urlencoded({extended:false }));

app.use("/post", require( './routes/post.routes',''));

app.listen(port, () => {
  
    // console.log("Yassine Tch" + port .${port});
   console.log(`Server running in ${process.env.connectDB}:http://localhost ${port}`); 
});