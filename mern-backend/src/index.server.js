const express =require('express');
const env=require('dotenv');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const cors=require('cors');
//routes
const authRoutes=require('./routes/auth');
const adminRoutes=require('./routes/admin/auth');
const categoryRoutes=require('./routes/category');
const productRoutes=require('./routes/product');
const cartRoutes=require('./routes/cart');
const initialDataRoutes=require('./routes/admin/initialData');

env.config();


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

app.use(cors());
app.use(express.json()); 
app.use('/public',express.static(path.join(__dirname,'uploads')));

app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);
app.use('/api',initialDataRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
});