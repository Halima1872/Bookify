const Hotel = require('../models/Hotel');

module.exports.createHotel = async(req, res) => {
    const newHotel = new Hotel(req.body);
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch(err){
        next(err);
    }
}

module.exports.updateHotel = async(req, res) => {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id ,{$set: req.body}, {new: true})
        res.status(200).json(updatedHotel);
    }catch(err){
        next(err);
    }
}

module.exports.deleteHotel = async(req, res) => {
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted Hotel");
    }catch(err){
        next(err);
    }
}

module.exports.getOneHotel = async(req, res) => {
    try{
        const getOneHotel = await Hotel.findById(req.params.id)
        res.status(200).json(getOneHotel);
    }catch(err){
        next(err);
    }
}

module.exports.getAllHotels = async(req, res) => {
    try{
        const getAllHotels = await Hotel.find()
        res.status(200).json(getAllHotels);
    }catch(err){
        next(err);
    }
}