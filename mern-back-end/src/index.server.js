const express = require("express");
const env = require('dotenv');
const app = express();
const cors = require("cors")
app.use(cors())
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


//routes
// const userRoutes = require('./routes/user');

//environment variable or you can say constants
env.config();

//mongodb connection
// mongodb+srv://admin1:<password>@cluster0.0az04.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
    "mongodb+srv://admin1:szs4bY7vHG2xdrNW@cluster0.0az04.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
  });

app.use(bodyParser());
// app.use('/api',userRoutes);


app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hello from Server'
    });
});

app.post('/data', (req, res, next) => {
    res.status(200).json({
        message: req.body
    });
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
  