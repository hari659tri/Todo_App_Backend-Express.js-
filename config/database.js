const mongoose=require("mongoose")

require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=> console.log("Connected my database"))
    .catch((err)=>{console.log("Connection is not successfull"),
    console.err(err.message),
    process.exit(1)
});
}


module.exports=dbConnect;
