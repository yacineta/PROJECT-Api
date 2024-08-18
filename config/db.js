const mongoose = require("mongoose");

const connectDB = async () => {
    // console.log(process.env.MONGO);

    mongoose.set("strictQuery", false);
    await  mongoose.connect(process.env.MONGO)
    .then(success => console.log("Mongoose conect"))
    .catch(err => console.log(`Mongo DB is  Erorr: ${err.message}`))

    // try{
    //    
    //     console.log('Connecting to Yassine');
    //     await mongoose.connect(process.env.MONGO, () => 
    //      console.log("mongoose Conect")
    //     );
        
       
    // }
    // catch (err) {
    //      
    //      process.exit(1);
    // console.log(err)
    // }
};



module.exports = connectDB;