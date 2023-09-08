const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');
const { createHotel , updateHotel, deleteHotel, getOneHotel, getAllHotels } = require('../controllers/hotel');
const { verifyAdmin } = require('../utils/verifyToken');

//Create Hotel
router.post('/', verifyAdmin , createHotel);
//Update Hotel
router.put('/:id', verifyAdmin ,  updateHotel);
//Delete Hotel
router.delete('/:id', verifyAdmin , deleteHotel);
//Get Hotel
router.get('/:id', getOneHotel);
//Get All Hotels
router.get('/', getAllHotels);


module.exports = router;