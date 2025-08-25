 const Restaurant = require('../models/restaurantModel');


 exports.addRestaurant = async (req,res)=>{
    const restaurantObj = {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        imgUrl: req.body.imgUrl,
        location: req.body.location,
        phone: req.body.phone,
        rating: req.body.rating
    }
    try{
        const restaurant =await Restaurant.create(restaurantObj);
        res.status(200).send(restaurant);
    }
    catch(err){
        console.log('Error creating restaurant',err.message);
        res.status(500).send('some error occured while creating restaurant');
    }
 }