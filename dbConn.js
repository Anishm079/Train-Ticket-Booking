const mongoose = require('mongoose');

async function connectDb(){
    try{
        await mongoose.connect('mongodb+srv://anishmulla7:anish123@tickets.hoenmqf.mongodb.net/?retryWrites=true&w=majority/Tickets',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }) .then(()=>{console.log("connected to mongoDB")})
        .catch((err)=>console.log("connection failed with error",err))
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDb
