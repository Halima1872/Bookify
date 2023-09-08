const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
//27:43

//import routes
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const hotelsRoute = require('./routes/hotels');
const roomsRoute = require('./routes/rooms');



dotenv.config();

const connect = async() =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDB');
    }catch(err){
        throw(err);
    }
}

//middleware
app.use(cookieParser());
app.use(express.json());

//routes
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

//error handling
app.use((err,req,res,next) => {
    const errorMessage = err.message || "Something went wrong";
    const errorStatus = err.status || 500;
    res.status(errorStatus).json({message: errorMessage});
})



app.listen(8080, () => {
    connect();
    console.log('Server is running on port 8080');
});