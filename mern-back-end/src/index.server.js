const express =require('express');
const env=require('dotenv');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

//routes
const authRoutes=require('./routes/auth');
const adminRoutes=require('./routes/admin/auth');


env.config();

//mongodb connection
//mongodb+srv://root:<password>@cluster0.34z42.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
    "mongodb+srv://admin1:szs4bY7vHG2xdrNW@cluster0.0az04.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        // useCreateIndex:true
    }
).then(()=>{
    console.log(`Database Connected`);
});


app.use(bodyParser()); 
app.use('/api',authRoutes);
app.use('/api',adminRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
});